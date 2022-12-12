import React from "react";

import { Link } from "react-router-dom";

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
        <div className='d-flex justify-content-between align-items-center mt-3'>
          <div>
            <div className='text-muted m-0'>
              Posted at {matchitem.startAt}
            </div>
            <div className='text-muted'>
              Deadline at {matchitem.betDeadline}
            </div>
          </div>
          <div>
            <Link className='btn btn-primary rounded' to='/'>
              下注
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
