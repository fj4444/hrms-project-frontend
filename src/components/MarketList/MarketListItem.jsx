import React, { useState } from "react";
import TransactionService from "../../services/TransactioinService";
export default function MarketListItem({ matchitem }) {
  function buy() {
    // event.preventDefault();
    const sellService = new TransactionService();
    sellService.buy({
      id: matchitem.id,
      price: matchitem.price,
    });
  }
  function cancel() {
    const sellService = new TransactionService();
    sellService.cancel({
      id: matchitem.id,
    });
  }

  return (
    <div className="col-md-4 px-4 m-3">
      <div className="job-item p-4 border rounded-2  shadow">
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <div>
              <div className="fw-bold text-primary fs-2">
                {matchitem.nftid}#
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center flex-column">
          <div
            name="price"
            placeholder="售价"
            type="text"
            className="rounded input-group-text"
          >
            售价:{matchitem.price}
          </div>
          {localStorage.getItem("address").toLowerCase() !==
          matchitem.poster ? (
            <button className="btn btn-primary rounded" onClick={buy}>
              购买
            </button>
          ) : (
            <button className="btn btn-primary rounded" onClick={cancel}>
              撤销挂单
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
