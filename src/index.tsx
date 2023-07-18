import { App } from "./App";
import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import { createStore } from "redux";
import { Reducer } from "./redux/Reducer";
import { Provider } from "react-redux";
const store = createStore(Reducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("App")
);
