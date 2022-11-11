import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import EMall from "./components/EMall/EMall";
import reportWebVitals from "./reportWebVitals";
import ContextProvider from "./components/EMallContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Restaurant from "./components/Restaurant/Restaurant";
import EShop from "./components/EShop/EShop";
import Layout from "./components/Layout/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<EMall />} />
            <Route path="Home" element={<EMall />} />
            <Route path="Restaurant" element={<Restaurant />} />
            <Route path="EShop" element={<EShop />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
);

reportWebVitals();
