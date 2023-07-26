import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DateAssignments = () => {
  const navigate = useNavigate();
  const [dateAssignments, setDateAssignments] = useState([]);
  const homeNavigate = () => {
    navigate("/");
  };

  useEffect(() => {
    const url = "/api/v1/dates_assignments/index"; 
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((res) => setDateAssignments(res))
      .catch(() => navigate("/"));
  }, []);

  return (
    
    <div className="d-flex flex-column justify-content-center align-items-center vh-80 p-5 " >
      <div className="jumbotron jumbotron-fluid bg-transparent">

        <div className="display-4 mb-">
          <h1>Date Assignments</h1>
        </div>
        <div className="p-3 bg-light">
          <ul className="list-group list-group-flush">
            {dateAssignments.map((assignment) => (
              <li key={assignment.id} className="list-group-item">
                <div className="d-flex justify-content-between gap-2">
                  <p>Start at: {assignment.starts_at}</p>
                  <p>End at: {assignment.ends_at}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button onClick={homeNavigate} className="btn btn-lg custom-button ml-4">Back</button>
    </div>
  );
};

export default DateAssignments;
