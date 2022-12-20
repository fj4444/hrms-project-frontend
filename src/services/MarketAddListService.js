import { Alchemy, Network } from "alchemy-sdk";
const mynftaddr = process.env.REACT_APP_NFT_ADDR;
export default class MarketListService {
    async getAll() {
        if (localStorage.getItem("address")) {
            try {
                const config = {
                    apiKey: process.env.REACT_APP_API_KEY,
                    network: Network.ETH_GOERLI,
                };
                const alchemy = new Alchemy(config);
                const nfts = await alchemy.nft.getNftsForOwner(localStorage.getItem("address"));
                console.log(nfts);
                if (nfts) {
                    const nftList = nfts["ownedNfts"];
                    const result = {
                        data: [],
                        length: 0,
                    };
                    var num = 0;
                    for (let nft of nftList) {
                        if (nft.contract.address.toLowerCase() === mynftaddr.toLowerCase()) {
                            result.data.push({
                                type: "winner",
                                id: nft.tokenId,
                            });
                            num++;
                        }
                    };
                    result.length = num;
                    const result_replace = {
                        length: 2,
                        data: [
                            {
                                id: 5,
                                nftid: 5,
                                value: 0.003,
                                host: "阿根廷",
                                guest: "沙特",
                            },
                            {
                                id: 6,
                                nftid: 6,
                                price: 0.001,
                                host: "法国",
                                guest: "阿根廷",
                            },
                        ]
                    }
    
                    return result;
                }
                else {
                    alert("查询当前账户nft失败");//发到了合约端
                }
            } catch (ex) {
                alert(ex);
            };
        }
        else {
            alert("请先链接钱包");
            window.location.replace("/");
        }
    }
}