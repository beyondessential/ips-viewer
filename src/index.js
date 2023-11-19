/*
 * Tupaia
 * Copyright (c) 2017 - 2020 Beyond Essential Systems Pty Ltd
 */
import React from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import ReactDOM from "react-dom";
import { AppProviders } from "./AppProviders";
import { App } from "./App";

ReactDOM.render(
  <AppProviders>
    <ReactQueryDevtools />
    <App />
  </AppProviders>,
  document.getElementById("root")
);
