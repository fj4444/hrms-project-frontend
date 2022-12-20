import Player from "../contracts/Player.json";
import { ethers } from "ethers";
const playeraddr = process.env.REACT_APP_PLAYER_ADDR;
export default class MultipleMatchService {
    async getAll() {
        if (localStorage.getItem("address")) {
            try {
                if (typeof window.ethereum !== 'undefined') {
                    const provider = new ethers.providers.Web3Provider(window.ethereum);
                    const signer = provider.getSigner();
                    const contract = new ethers.Contract(playeraddr, Player.abi, signer);
                    const transaction = await contract.games_info(0);
                    if (transaction[0]) {
                        const result = {
                            player: transaction[0].players,
                            rates: transaction[0].rates,
                            value: transaction[0].pool_value,
                        };
                        return result;
                    }
                    else {
                        return null;
                    }
                }
            }
            catch (ex) {
                alert(ex);
            }
        }
        else {
            alert("请先链接钱包");
            window.location.replace("/");
        }
    }
}