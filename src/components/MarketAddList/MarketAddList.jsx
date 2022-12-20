import React, { useEffect, useState,useMemo } from "react";
import DisplayHeader from "../DisplayHeader/DisplayHeader";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import MarketListAddItem from "./MarketAddListItem";
import MarketListAddService from "../../services/MarketAddListService";
export default function MarketAddList() {

  const [items, setItems] = useState(null),
    MarketListAddservice = useMemo(() => new MarketListAddService(), []),
    getAll = useEffect(
      async () => {
        const result = await MarketListAddservice.getAll();
        setItems(result);
      },
      [MarketListAddservice]
    );

  return (
    <div className="container">
      <DisplayHeader firstText="我的NFT" size="5" />
      <div className="mt-4">
        {items === null ? (
          <LoadingSpinner />
        ) : items.length > 0 ? (
          <div className="row justify-content-center">
            {items.data.map((matchitem) => (
              <MarketListAddItem key={matchitem.id} matchitem={matchitem} />
            ))}
          </div>
        ) : (
          <div className="d-flex justify-content-center align-items-center">
            <i className="bi bi-file-earmark-x text-danger me-2 fs-2" />
            当前暂无NFT.
          </div>
        )}
      </div>
    </div>
  );
}
