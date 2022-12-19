import React, { useEffect, useState,useMemo } from "react";
import DisplayHeader from "../DisplayHeader/DisplayHeader";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import MarketListItem from "./MarketListItem";
import MarketListService from "../../services/MarketListService";
export default function MarketList() {

  const [items, setItems] = useState(null),
    MarketListservice = useMemo(() => new MarketListService(), []),
    getAll = useEffect(
      async () => {
        const result = await MarketListservice.getAll();
        setItems(result);
      },
      [MarketListservice]
    );

  return (
    <div className="container">
      <DisplayHeader firstText="市场" secondText="公告栏" size="5" />
      <div className="mt-4">
        {items === null ? (
          <LoadingSpinner />
        ) : items.length > 0 ? (
          <div className="row justify-content-center">
            {items.data.map((matchitem) => (
              <MarketListItem key={matchitem.id} matchitem={matchitem} />
            ))}
          </div>
        ) : (
          <div className="d-flex justify-content-center align-items-center">
            <i className="bi bi-file-earmark-x text-danger me-2 fs-2" />
            当前暂无可购买彩票.
          </div>
        )}
      </div>
    </div>
  );
}
