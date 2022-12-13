export default class MultipleMatchService {
    controllerUrl = `${process.env.REACT_APP_API_URL}/jobadverts`;

    getsize() {//获取奖池大小，champion代表半决赛和决赛奖池
        const result = {
            champion: 15,
            best: 10,
        };
        return result;
    }
}