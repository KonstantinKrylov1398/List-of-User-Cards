import { App } from "./App";
import React from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";

const domNode = document.getElementById("App");

if (domNode) {
  const root = createRoot(domNode);
  root.render(<App />);
}
