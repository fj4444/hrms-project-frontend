import MyNFT from "../contracts/MyNFT.json";
import { ethers } from "ethers";
const mynftaddr = process.env.REACT_APP_NFT_ADDR;

export default class BidService{
    async bid(data) {
        switch (data.from) {
            case "win":
                //单场胜负
            console.log("win");
            if (localStorage.getItem("address")) {
              if (typeof window.ethereum !== 'undefined') {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const contract = new ethers.Contract(mynftaddr, MyNFT.abi, signer);
                const transaction = await contract.mintNFT(localStorage.getItem("address"),'',{gasLimit: 3e7});
                await transaction.wait();
              }
            }
            else {
              alert("请先连接钱包");
            }
                  
                break;
            case "best":
                //射手王
                console.log("best");
                console.log(data.data);
                break;
            case "champion":
                //决赛
                console.log("champion");
                console.log(data.data);
            break;
          default:
            break;
        }
    }
}