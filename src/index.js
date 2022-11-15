import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import EMall from "./components/EMall/EMall";
// import reportWebVitals from "./reportWebVitals";
import ContextProvider from "./components/EMallContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Restaurant from "./components/Restaurant/Restaurant";
import Orders from "./components/Orders/Orders";
import EShop from "./components/EShop/EShop";
import Layout from "./components/Layout/Layout";
import RecordsStore from "./components/RecordsStore/RecordsStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<EMall />} />
            <Route path="Home" element={<EMall />} />
            <Route path="Restaurant" element={<Restaurant />} />
            <Route path="Orders" element={<Orders />} />
            <Route path="EShop" element={<EShop />} />
            <Route path="Records" element={<RecordsStore />} />
          </Route>
          <Route path="*" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
);

// reportWebVitals();
