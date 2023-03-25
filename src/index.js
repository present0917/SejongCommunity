import Test from "./components/Nav/Test";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
const root = ReactDOM.createRoot(document.getElementById("root"));
const rootElement = document.getElementById("root");
root.render(
  <StrictMode>
    <BrowserRouter>
      <Test>
        <Router />
      </Test>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
