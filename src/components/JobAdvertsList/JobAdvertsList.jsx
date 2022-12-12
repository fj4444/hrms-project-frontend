import "./JobAdvertsList.scss";

import * as Yup from "yup";

import { Form, Formik } from "formik";
import React, { useCallback, useEffect, useMemo, useState } from "react";

import JobAdvertService from "../../services/jobAdvertService";
import JobAdvertsListItem from "./JobAdvertsListItem";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import lodash from "lodash";

export default function JobAdvertsList({ size = 10, pagination = true }) {
  const [jobAdverts, setJobAdverts] = useState(null),
    jobAdvertService = useMemo(() => new JobAdvertService(), []),
    getAllByIsActiveForList = useCallback(
      async (pageNumber = 0, pageSize = 10) => {
        const result = await jobAdvertService.getAllByIsActiveForList(true, pageNumber, pageSize);
        if (result.data.success) setJobAdverts(result.data.data);
      },
      [jobAdvertService]
    );
    // getAllByIsActiveAndCityAndWorkingTimeForList = async (
    //   cityId,
    //   workingTimeId,
    //   pageNumber = 0,
    //   pageSize = 10
    // ) => {
    //   const result = await jobAdvertService.getAllByIsActiveAndCityAndWorkingTimeForList(
    //     true,
    //     cityId,
    //     workingTimeId,
    //     pageNumber,
    //     pageSize
    //   );
    //   if (result.data.success) setJobAdverts(result.data.data);
    // };

  const changePagination = (pageNumber, pageSize) => {
    getAllByIsActiveForList(pageNumber, pageSize);
  };

  return (
    <div className='p-4'>
      <div className='text-center mb-3'>
        <h1 className='text-secondary fw-bold'>
          可下注比赛<span className='text-primary'>.</span>
        </h1>
      </div>
      {jobAdverts === null ? (
        <LoadingSpinner />
      ) : jobAdverts.content.length > 0 ? (
        <div className='row justify-content-center'>
          {jobAdverts.content.map((jobAdvert) => (
            <JobAdvertsListItem key={jobAdvert.id} jobAdvert={jobAdvert} />
          ))}
          {/* Pagination */}
          {pagination && (
            <nav>
              <ul className='pagination justify-content-center'>
                <li className={`page-item ${jobAdverts.first ? "disabled" : ""}`}>
                  <button
                    className='page-link'
                    onClick={() => changePagination(jobAdverts.number - 1, jobAdverts.size)}
                  >
                    Previous
                  </button>
                </li>
                {lodash.times(jobAdverts.totalPages, (i) => (
                  <li className={`page-item ${jobAdverts.number === i ? "active" : ""}`}>
                    <button
                      className='page-link'
                      onClick={() => changePagination(i, jobAdverts.size)}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}
                <li className={`page-item ${jobAdverts.last ? "disabled" : ""}`}>
                  <button
                    className='page-link'
                    onClick={() => changePagination(jobAdverts.number + 1, jobAdverts.size)}
                  >
                    Next
                  </button>
                </li>
              </ul>
              <div className='text-center'>
                <select
                  id='pageSizeSelect'
                  className='bg-body border-light'
                  onChange={(e) => getAllByIsActiveForList(0, e.currentTarget.value)}
                >
                  {[10, 20, 50, 100].map((size) => (
                    <option value={size}>{size}</option>
                  ))}
                </select>
              </div>
            </nav>
          )}
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
