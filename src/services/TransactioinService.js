import MyNFT from "../contracts/MyNFT.json";
import { ethers } from "ethers";
const mynftaddr = process.env.REACT_APP_NFT_ADDR;

export default class TransactionService {
  async sell(data) {
        if (localStorage.getItem("address")) {
          if (typeof window.ethereum !== 'undefined') {
            try {
              const provider = new ethers.providers.Web3Provider(window.ethereum);
              const signer = provider.getSigner();
              const contract = new ethers.Contract(mynftaddr, MyNFT.abi, signer);
              const transaction = await contract.openTrade(data.id,ethers.utils.parseEther(data.price));
              //给奖池合约的请求
              if (transaction) {
                alert("挂单成功");
              }
              else {
                alert("挂单失败,请重试");//发到了合约端
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
  }

  async buy(data) {
    if (localStorage.getItem("address")) {
      if (typeof window.ethereum !== 'undefined') {
        try {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(mynftaddr, MyNFT.abi, signer);
          const funcdata = contract.interface.encodeFunctionData('executeTrade', [data.id]);
          const transactionParameters = {
            to: mynftaddr, // Required except during contract publications.
            from: localStorage.getItem("address"), // must match user's active address.
            value: ethers.utils.parseEther(data.price.toString()).toHexString(), // Only required to send ether to the recipient from the initiating external account.
            data: funcdata,
            gas: '0x493E0',
            chainId: '0x3', // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
          };
          const transaction=await window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [transactionParameters],
          });
          //给奖池合约的请求
          if (transaction) {
            alert("购买成功");
          }
          else {
            alert("购买失败,NFT可能已出售");//发到了合约端
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
  }

  async cancel(data) {
    if (localStorage.getItem("address")) {
      if (typeof window.ethereum !== 'undefined') {
        try {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(mynftaddr, MyNFT.abi, signer);
          const transaction = await contract.cancelTrade(data.id);
          //给奖池合约的请求
          if (transaction) {
            alert("取消成功");
          }
          else {
            alert("取消失败,NFT可能已出售");//发到了合约端
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
  }
}