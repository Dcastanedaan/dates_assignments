import React from "react";
import { Link } from "react-router-dom";



export default () => (
<div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Bulk Dates Assignments</h1>
        <p className="lead">
          Schedules
        </p>
        <hr className="my-4" />
        <div className="d-flex justify-content-between">
          <Link
            to="/date_assignment"
            className="btn btn-lg custom-button "
            role="button"
          >
            Create dates assignments
          </Link>
          <Link
          to="/date_assignments"
          className="btn btn-lg custom-button ml-4"
          role="button"
          >
            View dates assignments
          </Link>
        </div>
      </div>
    </div>
  </div>
);
