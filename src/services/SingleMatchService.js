export default class SingleMatchService {
  controllerUrl = `${process.env.REACT_APP_API_URL}/jobadverts`;

  getAllByIsActiveForList() {
    // return axios.get(`${this.controllerUrl}/forlist/byisactive`, {
    //   params: {
    //     isActive,
    //     page,
    //     size,
    //     sortDirection,
    //     sortProperties,
    //   },
    // });
    const result = {
      data: [
        {
          id: 1,
          betDeadline: "2022-11-01",
          startAt: "2022-11-01",
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