import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import DateAssignments from "../components/DateAssignments";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/date_assignments" element={<DateAssignments />} />
    </Routes>
  </Router>
);
