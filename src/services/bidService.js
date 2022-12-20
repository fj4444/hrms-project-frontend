import Lottery from "../contracts/Lottery.json";
import Player from "../contracts/Player.json";
import { ethers } from "ethers";
const pooladdr = process.env.REACT_APP_POOL_ADDR;
const playeraddr = process.env.REACT_APP_PLAYER_ADDR;
export default class BidService {
  async bid(data) {
    switch (data.from) {
      case "win":
        //单场胜负
        console.log("win");
        if (localStorage.getItem("address")) {
          if (typeof window.ethereum !== 'undefined') {
            //给nft合约的请求,之后可能要删去
            try {
              const provider = new ethers.providers.Web3Provider(window.ethereum);
              const signer = provider.getSigner();
              //给奖池合约的请求
              const contract_pool = new ethers.Contract(pooladdr, Lottery.abi, signer);
              const is_a_win = (data.data.winner === "host") ? true : false;
              const is_b_win = (data.data.winner === "guest") ? true : false;
              const funcdata = contract_pool.interface.encodeFunctionData('gambler_place_bet', [localStorage.getItem("address"), data.data.id, is_a_win, is_b_win]);
              const transactionParameters = {
                to: pooladdr, // Required except during contract publications.
                from: localStorage.getItem("address"), // must match user's active address.
                value: ethers.utils.parseEther(data.data.value).toHexString(), // Only required to send ether to the recipient from the initiating external account.
                data: funcdata,
                gas: '0x2DC6C0',
                chainId: '0x3', // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
              };
              // const transaction_pool = await contract_pool.gambler_place_bet(localStorage.getItem("address"), data.data.id, is_a_win, !is_a_win, Web3.utils.toWei(data.data.value, 'ether'));
              const transaction_pool=await window.ethereum.request({
                method: 'eth_sendTransaction',
                params: [transactionParameters],
              });
              if (transaction_pool) {
                alert("下注成功");
              }
              else {
                alert("下注失败,请检查比赛id是否合法");//发到了合约端
              }
            }
            catch (ex) {
              alert(ex);//没发到合约端
            }
          }
        }
        else {
          alert("请先连接钱包");
        }

        break;
      case "best":
        //射手王
        console.log("best");
        if (localStorage.getItem("address")) {
          if (typeof window.ethereum !== 'undefined') {
            //给nft合约的请求,之后可能要删去
            try {
              const provider = new ethers.providers.Web3Provider(window.ethereum);
              const signer = provider.getSigner();
              //给奖池合约的请求
              const contract = new ethers.Contract(playeraddr, Player.abi, signer);
              const funcdata = contract.interface.encodeFunctionData('gambler_place_bet', [localStorage.getItem("address"),0,data.data.king]);
              const transactionParameters = {
                to: playeraddr, // Required except during contract publications.
                from: localStorage.getItem("address"), // must match user's active address.
                value: ethers.utils.parseEther(data.data.value).toHexString(), // Only required to send ether to the recipient from the initiating external account.
                data: funcdata,
                gas: '0x2DC6C0',
                chainId: '0x3', // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
              };
              // const transaction_pool = await contract_pool.gambler_place_bet(localStorage.getItem("address"), data.data.id, is_a_win, !is_a_win, Web3.utils.toWei(data.data.value, 'ether'));
              const transaction=await window.ethereum.request({
                method: 'eth_sendTransaction',
                params: [transactionParameters],
              });
              if (transaction) {
                alert("下注成功");
              }
              else {
                alert("下注失败,请检查比赛id是否合法");//发到了合约端
              }
            }
            catch (ex) {
              alert(ex);//没发到合约端
            }
          }
        }
        else {
          alert("请先连接钱包");
        }
        break;
      default:
        break;
    }
  }
}