import { ethers } from "ethers";
import MyNFT from "../contracts/MyNFT.json";
const mynftaddr = process.env.REACT_APP_NFT_ADDR;
export default class MarketListService {
    async getAll() {
        if (localStorage.getItem("address")) {
            if (typeof window.ethereum !== 'undefined') {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const contract = new ethers.Contract(mynftaddr, MyNFT.abi, signer);
                const transaction = await contract.openTradeList();
                console.log(transaction);
                const result = {
                    data: [],
                    length: transaction.length,
                };
                for (var nft of transaction) {
                    result.data.push({
                        id: nft._trade,
                        poster: nft.poster,
                        nftid: nft.item,
                        price: nft.price,
                    })
                }

                const result_replace = {
                    length: 3,
                    data: [
                        {
                            id: 1,
                            poster: "0xD3D500c906a44A4d13D5997C8da901893d7Dc435",
                            nftid: 2,
                            price: 0.001,
                            host: "法国",
                            guest: "摩洛哥",
                        },
                        {
                            id: 2,
                            poster: "0x15b9fC4EE7a16A9b206f91C840a57E1c03fc4E12".toLowerCase(),
                            nftid: 4,
                            price: 0.0011,
                            host: "法国",
                            guest: "摩洛哥",
                        },
                        {
                            id: 3,
                            poster: "0x15b9fC4EE7a16A9b206f91C840a57E1c03fc4E12".toLowerCase(),
                            nftid: 5,
                            price: 0.01,
                            host: "克罗地亚",
                            guest: "阿根廷",
                        },
                    ]
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