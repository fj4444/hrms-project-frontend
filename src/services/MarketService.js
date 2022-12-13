import axios from "axios";

export default class MarketService {
  controllerUrl = `${process.env.REACT_APP_API_URL}/jobadverts`;

  add({
    applicationDeadline,
    city,
    description,
    employer,
    jobPosition,
    workingTime,
    workingType,
    maxSalary,
    minSalary,
    numberOfOpenPositions,
  }) {
    return axios.post(`${this.controllerUrl}`, {
      applicationDeadline,
      city,
      description,
      employer,
      jobPosition,
      maxSalary,
      minSalary,
      numberOfOpenPositions,
      workingTime,
      workingType,
    });
  }

  verifyById(id) {
    return axios.put(`${this.controllerUrl}/verify/byid`, null, {
      params: { id },
    });
  }

  getAll() {
    return axios.get(`${this.controllerUrl}/getall`);
  }

  getAllByIsActive(isActive, page, size, sortDirection, sortProperties) {
    return axios.get(`${this.controllerUrl}/byisactive`, {
      params: {
        isActive,
        page,
        size,
        sortDirection,
        sortProperties,
      },
    });
  }

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
          startAt:"2022-11-01",
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

  getAllByIsActiveAndEmployer_CompanyNameForList(
    companyName,
    isActive,
    page,
    size,
    sortDirection,
    sortProperties
  ) {
    return axios.get(`${this.controllerUrl}/forlist/byisactiveandemployercompanyname`, {
      params: {
        companyName,
        isActive,
        page,
        size,
        sortDirection,
        sortProperties,
      },
    });
  }

  getAllByIsActiveAndCityAndWorkingTimeForList(
    isActive,
    cityId,
    workingTimeId,
    page,
    size,
    sortDirection,
    sortProperties
  ) {
    return axios.get(`${this.controllerUrl}/forlist/byisactiveandcityandworkingtime`, {
      params: {
        cityId,
        workingTimeId,
        isActive,
        page,
        size,
        sortDirection,
        sortProperties,
      },
    });
  }

  update({
    id,
    applicationDeadline,
    city: { cityId },
    description,
    employer: { employerId },
    jobPosition: { jobPositionId },
    maxSalary,
    minSalary,
    numberOfOpenPositions,
  }) {
    return axios.put(this.controllerUrl, {
      id,
      applicationDeadline,
      city: { id: cityId },
      description,
      employer: { id: employerId },
      jobPosition: { id: jobPositionId },
      maxSalary,
      minSalary,
      numberOfOpenPositions,
    });
  }
}
