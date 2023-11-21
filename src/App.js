import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { IPSForm } from "./components/IPSForm";
// import { IPSResult } from "./components/IPSResult";
// import { NavBar } from "./components/NavBar";

export const App = () => {
  return (
    <>
      {/* <NavBar /> */}
      {/* <Router>
        <Routes>
          <Route path="/" element={<IPSForm />} />
          <Route path="jsonViewer/" element={<IPSResult />} />
        </Routes>
      </Router> */}
      <IPSForm />
    </>
  );
};
