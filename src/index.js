import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./pages/index";
import * as serviceWorker from "./serviceWorker";
import store from "./redux";

axios.defaults.headers.common["Authorization"] =
  "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNzEiLCJleHAiOjE2MDM3ODM0Mzd9.3ievseHtX0t3roGh7nBuNsiaQeSjfiHWyyx_5GlOLXk";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
