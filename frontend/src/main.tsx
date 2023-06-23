import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import axios from "axios";
import { configureStore } from "./redux/configureStore";
import { Provider } from "react-redux";

axios.defaults.baseURL = "http://localhost:8000/api/";
axios.defaults.withCredentials = true;

const store = configureStore();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
