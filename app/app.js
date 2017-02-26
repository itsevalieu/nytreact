import React from "react";
import ReactDOM from "react-dom";
import { Router, browserHistory } from "react-router";
import routes from "./config/routes";

const appEntry = <Router history={browserHistory}>{routes()}</Router>;

ReactDOM.render(appEntry, document.getElementById("app"));
