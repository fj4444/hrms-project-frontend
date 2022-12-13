import "./SingleMatchList.scss";

import React, { useEffect, useMemo, useState } from "react";

import SingleMatchService from "../../services/SingleMatchService";
import SingleMatchsListItem from "./SingleMatchListItem";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export default function SingleMatchList() {
  const [SingleMatches, setSingleMatchs] = useState(null),
    SingleMatchservice = useMemo(() => new SingleMatchService(), []),
    getAllByIsActiveForList = useEffect(
      async () => {
        const result = await SingleMatchservice.getAllByIsActiveForList();
        setSingleMatchs(result);
      },
      [SingleMatchservice]
    );

  return (
    <div className='p-4'>
      <div className='text-center mb-3'>
        <h1 className='text-secondary fw-bold'>
          可下注比赛<span className='text-primary'>.</span>
        </h1>
      </div>
      {SingleMatches === null ? (
        <LoadingSpinner />
      ) : SingleMatches.length > 0 ? (
        <div className='row justify-content-center'>
          {SingleMatches.data.map((matchitem) => (
            <SingleMatchsListItem key={matchitem.id} matchitem={matchitem} />
          ))}
        </div>
      ) : (
        <div className='d-flex justify-content-center align-items-center'>
          <i className='bi bi-file-earmark-x text-danger me-2 fs-2' />
          当前暂无可下注比赛.
        </div>
      )}
    </div>
  );
}
