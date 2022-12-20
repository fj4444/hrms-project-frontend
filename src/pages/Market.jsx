import MarketList from "../components/MarketList/MarketList";
import React from "react";
import MarketListAdd from "../components/MarketAddList/MarketAddList";

export default function Market() {
  return (
    <div className='container'>
      <div className="d-flex justify-content-between;">
        <MarketList />
        <MarketListAdd/>
      </div>
    </div>
  );
}
