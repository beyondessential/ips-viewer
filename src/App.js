import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { IPSForm } from "./components/IPSForm";
import { IPSResult } from "./components/IPSResult";
import { NavBar } from "./components/NavBar";
import { Main } from "./components/Main";

export const App = () => {
  return (
    <>
      <NavBar />
      <Main />
    </>
  );
};
