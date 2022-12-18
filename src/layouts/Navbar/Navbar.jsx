import "./Navbar.scss";

import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import React, { useState } from "react";

export default function Navbar() {

  const [active, setActive] = useState('');

  async function connect() {
    if (window.ethereum) {
      try {
        // Request account access if needed
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        // Accounts now exposed, use them
        localStorage.setItem("address", accounts[0]);
        setActive(true);
      } catch (error) {
        // User denied account access
        console.log(error);
      }
    } else {
      // MetaMask is not available
      alert("Please install MetaMask to use this feature.");
    }
  }

  function disconnect() {
    localStorage.removeItem("address");
    setActive(false);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light py-4">
      <div className="container">
        <Link to="/" className="navbar-brand fs-2 fw-bold">
          Soccer Betting on <span className="text-secondary">Blockchain</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarmenu"
          aria-controls="navbarmenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarmenu">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-center">
            <NavItem linkTo="" name="主页" iconClassName="bi bi-house" />
            <NavItem
              linkTo="/singlematch"
              name="单场比赛"
              iconClassName="bi bi-search"
            />
            <NavItem
              linkTo="/multiplematch"
              name="系列比赛"
              iconClassName="bi bi-search"
            />
            <NavItem
              linkTo="/market/add"
              name="交易市场"
              iconClassName="bi bi-card-text"
            />
          </ul>
        </div>
        <div>
          {active ? (
            <button className="btn btn-outline-primary me-4 py-2 px-4 rounded shadow"
              onClick={disconnect}
            >
              已连接,点击以断开
            </button>
          ) : (
            <button
              className="btn btn-outline-primary me-4 py-2 px-4 rounded shadow"
              onClick={connect}
            >
              链接钱包
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
