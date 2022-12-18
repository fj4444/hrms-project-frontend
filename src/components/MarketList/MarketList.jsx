import React, { useEffect, useState } from "react";
import DisplayHeader from "../DisplayHeader/DisplayHeader";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export default function MarketList() {

  return (
    // <div className="container">
    //   <DisplayHeader firstText="市场" secondText="公告栏" size="5" />
    //   <div className="mt-4">
    //     {SingleMatches === null ? (
    //       <LoadingSpinner />
    //     ) : SingleMatches.length > 0 ? (
    //       <div className="row justify-content-center">
    //         {SingleMatches.data.map((matchitem) => (
    //           <SingleMatchsListItem key={matchitem.id} matchitem={matchitem} />
    //         ))}
    //       </div>
    //     ) : (
    //       <div className="d-flex justify-content-center align-items-center">
    //         <i className="bi bi-file-earmark-x text-danger me-2 fs-2" />
    //         当前暂无可下注比赛.
    //       </div>
    //     )}
    //   </div>
    // </div>
    <LoadingSpinner/>
  );
}
