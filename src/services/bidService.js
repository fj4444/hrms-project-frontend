export default class BidService{
    bid(data) {
        console.log(data);
        switch (data.from) {
            case "win":
                //单场胜负
                console.log("win");
                break;
            case "best":
                //射手王
                console.log("best");
                break;
            case "champion":
                //决赛
                console.log("champion");
                break;
        }
    }
}