import Lottery from "../contracts/Lottery.json";
import { ethers } from "ethers";
const lotteryaddr = process.env.REACT_APP_POOL_ADDR;
export default class SingleMatchService {
  

  async getAllByIsActiveForList() {
    if (localStorage.getItem("address")) {
      if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(lotteryaddr, Lottery.abi, signer);
        const transaction = await contract.games_info(0);
        console.log(transaction);
        const result = {
          data: [],
          length: transaction.length,
        };
        for (var matchitem of transaction) {
          result.data.push({
            id: matchitem.id,
            betDeadline: matchitem.gamble_ddl,
            startAt: matchitem.begin_time,
            host: matchitem.teamA,
            guest: matchitem.teamB,
            hostRate: matchitem.rate_A_win/1000,
            guestRate: matchitem.rate_B_win/1000,
          })
        }
        return result;
      }
    }
    else {
      alert("请先链接钱包");
      window.location.replace("/");
    }
  }
}