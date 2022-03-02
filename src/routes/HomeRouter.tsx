import React from "react";
import { Routes, Route } from "react-router-dom";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { Navbar } from "../components/header/navbar/Navbar";
import { SellScreen } from "../screens/SellScreen";

export const HomeRouter = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Header />
      <div className="">
        <Routes>
          <Route path="/" element={<SellScreen />} />
          <Route path="sell" element={<SellScreen />} />
          {/* <Route path="dc" element={<DcScreen />} />
          <Route path="search" element={<SearchScreen />} />
          <Route path="hero/:heroId" element={<HeroScreen />} />
          <Route path="/" element={<MarvelScreen />} /> */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
