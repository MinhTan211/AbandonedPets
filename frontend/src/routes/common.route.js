import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "../pages/common/Home/index";
import Shop from "../pages/common/Shop/index";
import NavbarCommon from "../pages/common/private/navbar/index";
import FooterCommon from "../pages/common/private/footer/index";

export default function CommonRoute(props) {
  return (
    <Router>
      <NavbarCommon />
      <Routes>
        <Route path={props.path}>
          <Route path="home" exact element={<Home />} />
          <Route path="shop" element={<Shop />} />
        </Route>
      </Routes>
      <FooterCommon />
    </Router>
  );
}
