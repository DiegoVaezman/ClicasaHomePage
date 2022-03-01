import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { SellScreen } from "../screens/SellScreen";
import { HomeRouter } from "./HomeRouter";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRouter />} />
        <Route path="/home/*" element={<HomeRouter />} />
      </Routes>
    </BrowserRouter>
  );
};
