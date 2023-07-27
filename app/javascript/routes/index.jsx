import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import DateAssignments from "../components/DateAssignments";
import NewDateAssignment from "../components/NewDateAssignment";
import DateAssignment from "../components/DateAssignment";


export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/date_assignments" element={<DateAssignments />} />
      <Route path="/date_assignment" element={<NewDateAssignment />} />
      <Route path="/date_assignment/:id" element={<DateAssignment />} />
    </Routes>
  </Router>
);
