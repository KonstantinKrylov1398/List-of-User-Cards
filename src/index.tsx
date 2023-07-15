import { App } from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { userReducer } from "./redux/hotelsReducer";
import { Provider } from "react-redux";
const store = createStore(userReducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("App")
);
