import React from "react";
import { Link } from "react-router-dom";
export default function MultipleMatch() {
  return (
    <div className="container">
        <div className="text-center mb-3">
          <h1 className="text-secondary fw-bold">
            可下注奖池<span className="text-primary">.</span>
          </h1>
          <div className="row justify-content-center">
            <div className="col-md-5 px-4 m-3">
              <div className="job-item p-4 border rounded-2  shadow">
                <div className="d-flex justify-content-center">
                    <div className="fw-bold fs-1"> 半决赛与决赛 </div>
              </div>
              <div className="text-primary fw-bold">奖池大小</div>
              <div className="text-secondary">20ETH</div>
                <div className="d-flex justify-content-center align-items-center mt-3">
                  <Link className="btn btn-primary rounded" to="/">
                    下注
                  </Link>
                </div>
              </div>
            </div>
        </div>
        
        <div className="row justify-content-center">
            <div className="col-md-5 px-4 m-3">
              <div className="job-item p-4 border rounded-2  shadow">
                <div className="d-flex justify-content-center">
                    <div className="fw-bold fs-1"> 射手王 </div>
              </div>
              <div className="text-primary fw-bold">奖池大小</div>
              <div className="text-secondary">20ETH</div>
                <div className="d-flex justify-content-center align-items-center mt-3">
                  <Link className="btn btn-primary rounded" to="/">
                    下注
                  </Link>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
