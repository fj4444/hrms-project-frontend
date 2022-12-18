import "./MultipleMatchCard.scss";
import React, { useEffect, useMemo, useState } from "react";
import BidService from "../../services/bidService";
import MultipleMatchService from "../../services/MultipleMatchService";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
export default function MultipleMatchCard() {
  const [MultipleMatches, setMultipleMatches] = useState(null),
    MultipleMatchservice = useMemo(() => new MultipleMatchService(), []),
    getsize = useEffect(async () => {
      const result = await MultipleMatchservice.getsize();
      setMultipleMatches(result);
    }, [MultipleMatchservice]);

  const [bestvalue, setBestValue] = useState('');
  const [championvalue, setChampionValue] = useState('');
  const [host, setHost] = useState('');
  const [guest, setGuest] = useState('');
  const [king, setKing] = useState('');
  
  function handleChampionSubmit(event){
    const bidService = new BidService();
    bidService.bid({
      from: "champion",
      data: {
        host: host,
        guest: guest,
        value: championvalue,
      }
    });
  };

  function handleBestSubmit(event){
    const bidService = new BidService();
    bidService.bid({
      from: "best",
      data: {
        king: king,
        value: bestvalue,
      }
    });
  };
  
  return (
    <div className="container">
      <div className="text-center mb-3">
        <h1 className="text-secondary fw-bold">
          可下注奖池<span className="text-primary">.</span>
        </h1>
        {MultipleMatches === null ? (
          <LoadingSpinner />
        ) : (
          <div>
            <div className="row justify-content-center">
              <div className="col-md-5 px-4 m-3">
                <div className="job-item p-4 border rounded-2  shadow">
                  <div className="d-flex justify-content-center">
                    <div className="fw-bold fs-1"> 决赛队伍 </div>
                  </div>
                  <div className="text-secondary fw-bold">奖池大小</div>
                  <div className="text-primary">
                    {MultipleMatches.champion}ETH
                  </div>
                    <form className="d-flex justify-content-center align-items-center mt-3 flex-column" onSubmit={handleChampionSubmit}>
                      <input placeholder="决赛主队" value= {host} type="text" className="rounded input-group-text" required="required" onChange={event=>setHost(event.target.value)}/>
                      <input placeholder="决赛客队" value={guest} type="text" className="rounded input-group-text" required="required" onChange={event=>setGuest(event.target.value)}/>
                      <input placeholder="请输入金额" value={championvalue} type="text" className="rounded input-group-text" required="required" onChange={event=>setChampionValue(event.target.value)}/>
                      <input className="btn btn-primary rounded" type="submit" value="下注"/>
                  </form>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-md-5 px-4 m-3">
                <div className="job-item p-4 border rounded-2  shadow">
                  <div className="d-flex justify-content-center">
                    <div className="fw-bold fs-1"> 射手王 </div>
                  </div>
                  <div className="text-secondary fw-bold">奖池大小</div>
                  <div className="text-primary">
                    {MultipleMatches.best}ETH
                  </div>
                    <form className="d-flex justify-content-center align-items-center mt-3 flex-column" onSubmit={handleBestSubmit}>
                      <select className="rounded input-group-text" required="required" value={king} onChange={event=>setKing(event.target.value)}>
                        <option value="" disabled selected>选择射手王</option>
                        <option value="姆巴佩">姆巴佩</option>
                        <option value="吉鲁">吉鲁</option>
                        <option value="梅西">梅西</option>
                        <option value="莫拉塔">莫拉塔</option>
                        <option value="拉莫斯">拉莫斯</option>
                        </select>
                      <input placeholder="请输入金额" type="text" className="rounded input-group-text" required="required" value={bestvalue} onChange={event=>setBestValue(event.target.value)}/>
                      <input className="btn btn-primary rounded" type="submit" value="下注"
                      onClick={()=>new BidService().bid(
                        {
                          from: "best",
                          // data: {
                          //   winner: bid_form.winner.value,
                          //   amount: 
                          // }
                        }
                      )}/>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
