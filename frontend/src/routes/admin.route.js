import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "../pages/admin/dashboard/index";
import NavbarAdmin from "../pages/admin/private/navbar/index";

export default function Index(props) {
  return (
    <Router>
      <NavbarAdmin />
      <Routes>
        <Route path={props.path}>
          <Route path="dashboard" exact element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}
