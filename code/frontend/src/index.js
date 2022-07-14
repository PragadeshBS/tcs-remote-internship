import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ItemsContextProvider } from "./context/ItemsContext";
import { ItemGroupsContextProvider } from "./context/ItemGroupsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ItemsContextProvider>
      <ItemGroupsContextProvider>
        <App />
      </ItemGroupsContextProvider>
    </ItemsContextProvider>
  </React.StrictMode>
);
