import React from "react";

import BidService from "../../services/bidService";
export default function SingleMatchItem({ matchitem }) {
  console.log(
    "🚀 ~ file: SingleMatchListItem.jsx ~ line 7 ~ SingleMatchListItem ",
    matchitem
  );

  return (
    <div className='col-md-5 px-4 m-3'>
      <div className='job-item p-4 border rounded-2  shadow'>
        <div className='d-flex justify-content-between'>
          <div className='d-flex align-items-center'>
            <div>
              <div className='fw-bold fs-2'>{matchitem.host} -- {matchitem.guest}</div>
            </div>
          </div>
          <div className='text-end align-text-bottom'>
            <div className='text-primary fw-bold'>赔率</div>
            <div className='text-secondary'>
              {matchitem.hostRate} - {matchitem.guestRate}
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-between align-items-center mt-3 flex-row'>
          <div>
            <div className='text-muted m-3'>
              <p>Deadline at {matchitem.betDeadline}</p>
            </div>
          </div>
          <form name="bid_form" className="d-flex justify-content-center flex-column">
            <select name="winner" className="rounded input-group-text" required="required">
            <option value="" disabled selected>选择胜方</option>
            <option value="host">{matchitem.host}</option>
            <option value="guest">{matchitem.guest}</option>
            </select>
            <input name="amount" placeholder="请输入金额" type="text" className="rounded input-group-text" required="required" />
            <input className="btn btn-primary rounded" type="submit" value="下注"
              onClick={()=>new BidService().bid(
                {
                  from: "win",
                  // data: {
                  //   winner: bid_form.winner.value,
                  //   amount: 
                  // }
                }
              )} /> 
          </form>
        </div>
      </div>
    </div>
  );
}
