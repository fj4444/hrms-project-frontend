export default class SingleMatchService {
  controllerUrl = `${process.env.REACT_APP_API_URL}/jobadverts`;

  getAllByIsActiveForList() {
    const result = {
      data: [
        {
          id: 1,
          betDeadline: "2022-11-01 12:30",
          startAt: "2022-11-01 08:00",
          host: "英格兰",
          guest: "法国",
          hostRate: 10,
          guestRate: 20
        }
      ],
      length: 1,
    };
    return result;
  }
}