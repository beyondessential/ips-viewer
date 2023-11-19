import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import { IPSForm } from "./components/IPSForm";
import { IPSResult } from "./components/IPSResult";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="viewer/"
          element={<IPSForm />}
        />
        <Route
          path="jsonViewer/"
          element={<IPSResult />}
        />
      </Routes>
    </Router>
  );
};
