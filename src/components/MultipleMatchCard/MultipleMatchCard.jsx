import "./MultipleMatchCard.scss";
import React, { useEffect, useMemo, useState } from "react";
import BidService from "../../services/bidService";
import MultipleMatchService from "../../services/MultipleMatchService";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
export default function MultipleMatchCard() {
  const [MultipleMatches, setMultipleMatches] = useState(null),
    MultipleMatchservice = useMemo(() => new MultipleMatchService(), []),
    getsize = useEffect(async () => {
      const result = await MultipleMatchservice.getAll();
      console.log(result);
      setMultipleMatches(result);
      // console.log(MultipleMatches);
    }, [MultipleMatchservice]);

  const [bestvalue, setBestValue] = useState("");
  const [king, setKing] = useState("");

  function handleBestSubmit(event) {
    // event.preventDefault();
    const bidService = new BidService();
    bidService.bid({
      from: "best",
      data: {
        king: king,
        value: bestvalue,
      },
    });
  }

  return (
    <div className="container">
      <div className="text-center mb-3">
        <h1 className="text-secondary fw-bold">
          可下注奖池<span className="text-primary">.</span>
        </h1>
        {MultipleMatches === null ? (
          <LoadingSpinner />
        ) : (
          <div className="row justify-content-center">
            <div className="col-md-5 px-4 m-3">
              <div className="job-item p-4 border rounded-2  shadow">
                <div className="d-flex justify-content-center">
                  <div className="fw-bold fs-1"> 射手王 </div>
                </div>
                <div className="text-secondary fw-bold">
                  奖池大小: {MultipleMatches.value}Wei
                </div>
                <div className="text-primary">
                  赔率: {MultipleMatches.player[0]}-{MultipleMatches.player[1]}-
                  {MultipleMatches.player[2]}-{MultipleMatches.player[3]}-
                  {MultipleMatches.player[4]}
                </div>
                <div className="text-primary">
                  {MultipleMatches.rates[0] / 1000} -{" "}
                  {MultipleMatches.rates[1] / 1000} -{" "}
                  {MultipleMatches.rates[2] / 1000} -{" "}
                  {MultipleMatches.rates[3] / 1000} -{" "}
                  {MultipleMatches.rates[4] / 1000}
                </div>
                <form
                  className="d-flex justify-content-center align-items-center mt-3 flex-column"
                  onSubmit={handleBestSubmit}
                >
                  <select
                    className="rounded input-group-text"
                    required="required"
                    value={king}
                    onChange={(event) => setKing(event.target.value)}
                  >
                    <option value="" disabled selected>
                      选择射手王
                    </option>
                    <option value="0">{MultipleMatches.player[0]}</option>
                    <option value="1">{MultipleMatches.player[1]}</option>
                    <option value="2">{MultipleMatches.player[2]}</option>
                    <option value="3">{MultipleMatches.player[3]}</option>
                    <option value="4">{MultipleMatches.player[4]}</option>
                  </select>
                  <input
                    placeholder="请输入金额"
                    type="text"
                    className="rounded input-group-text"
                    required="required"
                    value={bestvalue}
                    onChange={(event) => setBestValue(event.target.value)}
                  />
                  <input
                    className="btn btn-primary rounded"
                    type="submit"
                    value="下注"
                  />
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
