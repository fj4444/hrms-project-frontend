import Lottery from "../contracts/Lottery.json";
import { ethers } from "ethers";
const lotteryaddr = process.env.REACT_APP_POOL_ADDR;
export default class SingleMatchService {
  

  async getAllByIsActiveForList() {
    if (localStorage.getItem("address")) {
      try {
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
              hostRate: matchitem.rate_A_win / 1000,
              guestRate: matchitem.rate_B_win / 1000,
            })
          }

          const result_replace = {
            length: 3,
            data: [{
              id: 0,
              betDeadline: "2022.12.18 02:00",
              host: "法国",
              guest: "摩洛哥",
              hostRate: 1,
              guestRate: 2,
            },
            {
              id: 1,
              betDeadline: "2022.12.17 02:00",
              host: "阿根廷",
              guest: "克罗地亚",
              hostRate: 1,
              guestRate: 2,
            },
            {
              id: 2,
              betDeadline: "2022.12.19 02:00",
              host: "阿根廷",
              guest: "法国",
              hostRate: 1,
              guestRate: 1,
            },
            ]
          }
          return result;
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