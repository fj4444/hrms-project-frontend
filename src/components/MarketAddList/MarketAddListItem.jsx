import React, { useState } from "react";
import TransactionService from "../../services/TransactioinService";
export default function MarketListAddItem({ matchitem }) {
  const [price, setPrice] = useState("");

  function sell() {
    // event.preventDefault();
    const sellService = new TransactionService();
    sellService.sell({
      id: matchitem.id,
      price: price,
    });
  }

  return (
    <div className="col-md-4 px-4 m-3">
      <div className="job-item p-4 border rounded-2  shadow">
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <div className="fw-bold text-primary fs-2">{matchitem.id}#</div>
          </div>
        </div>
        <div className="d-flex justify-content-center flex-column">
          <input
            name="price"
            placeholder="售价"
            type="text"
            className="rounded input-group-text"
            required="required"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
          <button className="btn btn-primary rounded" onClick={sell}>
            出售
          </button>
        </div>
      </div>
    </div>
  );
}
