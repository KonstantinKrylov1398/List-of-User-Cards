import { App } from "./App";
import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("App")
);
