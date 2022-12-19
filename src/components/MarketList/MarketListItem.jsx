import React, { useState } from "react";

export default function MarketListItem({ matchitem }) {
  return (
    <div className="col-md-4 px-4 m-3">
      <div className="job-item p-4 border rounded-2  shadow">
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <div>
              <div className="fw-bold fs-2">
                {matchitem.host} -- {matchitem.guest}
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center flex-column">
          <div
            name="winner"
            className="rounded input-group-text"
            required="required"
          >
            胜方:{matchitem.winner}
          </div>
          <div
            name="value"
            className="rounded input-group-text"
            required="required"
          >
            下注金额:{matchitem.value}
          </div>
        </div>
      </div>
    </div>
  );
}
