import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { parseISO, format } from "date-fns";

const DateAssignments = () => {
  const navigate = useNavigate();
  const [dateAssignments, setDateAssignments] = useState([]);
  
  const homeNavigate = () => {
    navigate("/");
  };

  const reformat = (date) => {
    const fecha = format(parseISO(date), 'dd/MM/yyyy');
    return fecha;
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
        <div className="mb-2">
          <h2 className="display-4">Date Assignments</h2>
        </div>
        <div className="p-3 bg-light">
          <ul className="list-group list-group-flush">
            {dateAssignments.map((assignment) => (
              
              <Link to={`/date_assignment/${assignment.id}`} style={{ textDecoration: 'none'}}>
                
                <li key={assignment.id} className="list-group-item">
                  <div className="d-flex justify-content-between gap-2">
                    <p className="lead">Start at: { reformat(assignment.starts_at) }</p>
                    <p className="lead">End at: { reformat(assignment.ends_at) }</p>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <button onClick={homeNavigate} className="btn btn-lg custom-button ml-4 mt-2">Back</button>
    </div>
  );
};

export default DateAssignments;
