export default class MarketListService {
    controllerUrl = `${process.env.REACT_APP_API_URL}/jobadverts`;

    getAll() {
        const result = {
            data: [
                {
                    type: "winner",
                    id: 1,
                    betDeadline: "2022-11-01 12:30",
                    host: "英格兰",
                    guest: "法国",
                    winner: "法国",
                    value:"3",
                },
                {
                    type: "winner",
                    id: 1,
                    betDeadline: "2022-11-01 12:30",
                    host: "英格兰",
                    guest: "法国",
                    winner: "法国",
                    value:"3",
                },
                {
                    type: "winner",
                    id: 1,
                    host: "英格兰",
                    guest: "法国",
                    winner: "法国",
                    value:"3",
                },
            ],
            length:3,
        };
        return result;
    }
}