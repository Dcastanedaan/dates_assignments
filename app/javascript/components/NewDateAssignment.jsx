import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { parseISO, isAfter, format } from "date-fns";

const NewDataAssignment = () => {
  const navigate = useNavigate();
  const today = new Date();
  const defaultStartDate = format(today, "yyyy-MM-dd");

  const[starts_at, setStartsAt] = useState("");
  const[ends_at, setEndsAt] = useState("");
  const [isStartsAtValid, setIsStartsAtValid] = useState(true);
  const [isEndsAtValid, setIsEndsAtValid] = useState(true);

  const onChange = (event, setFunction) => {
    setFunction(event.target.value);
  };

  const isValidDate = (dateString) => {
    const date = parseISO(dateString);
    const today = new Date();
    return isAfter(date, today);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const url = "/api/v1/dates_assignments/create";

    setIsStartsAtValid(isValidDate(starts_at));
    setIsEndsAtValid(isValidDate(ends_at));

    if (starts_at.length == 0 || ends_at.length == 0 || !isValidDate(starts_at) || !isValidDate(ends_at))
    return;

    const body = {
      starts_at,
      ends_at,
    };
    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: "POST",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => navigate(`/date_assignment/${response.id}`))
      .catch((error) => console.log(error.message));
  };
  
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-12 col-lg-6 offset-lg-3">
          <h1 className="font-weight-normal mb-5">
            Adds a new dates range.
          </h1>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="dateAssignmentStartsAt">Enter the starting date</label>
              <input
                type="date"
                name="startAt"
                id="dateAssignmentStartsAt"
                className={`form-control ${isStartsAtValid ? "" : "is-invalid"}`}
                placeholder="dd/mm/yyyy"
                required
                value={starts_at}
                min={defaultStartDate}
                onChange={(event) => {
                  onChange(event, setStartsAt);
                  setIsStartsAtValid(isValidDate(event.target.value));
                }}
              />
              {!isStartsAtValid && (
                <div className="invalid-feedback">The date must be from today onwards.</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="dateAssignmentEndsAt">enter the starting date</label>
              <input
                type="date"
                name="endAt"
                id="dateAssignmentEndsAt"
                className={`form-control ${isEndsAtValid ? "" : "is-invalid"}`}
                placeholder="dd/mm/yyyy"
                required
                value={ends_at}
                min={defaultStartDate}
                onChange={(event) => {
                  onChange(event, setEndsAt);
                  setIsEndsAtValid(isValidDate(event.target.value));
                }}
              />
               {!isEndsAtValid && (
                <div className="invalid-feedback">The date must be from today onwards.</div>
              )}
            </div>
            <button type="submit" className="btn custom-button mt-3">
              Create Date Range
            </button>
            <Link to="/" className="btn btn-link mt-3">
              Back to list Assignment dates
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewDataAssignment
