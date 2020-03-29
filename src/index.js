import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { render } from "react-dom";
// eslint-disable-next-line
import HomePage from "./components/HomePage";
import App from "./components/App";
// eslint-disable-next-line
import AboutPage from "./components/AboutPage";

render(<App />, document.getElementById("root"));
