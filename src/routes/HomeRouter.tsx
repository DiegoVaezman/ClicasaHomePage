import React from "react";
import { Routes, Route } from "react-router-dom";
import { Footer } from "../components/footer/Footer";
import { FooterMobile } from "../components/footer/FooterMobile";
import { Header } from "../components/header/Header";
import { Navbar } from "../components/header/navbar/Navbar";
import { SellScreen } from "../screens/SellScreen";

export const HomeRouter = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<SellScreen />} />
        <Route path="sell" element={<SellScreen />} />
        {/* <Route path="dc" element={<DcScreen />} />
          <Route path="search" element={<SearchScreen />} />
          <Route path="hero/:heroId" element={<HeroScreen />} />
          <Route path="/" element={<MarvelScreen />} /> */}
      </Routes>
      {window.innerWidth > 800 ? <Footer /> : <FooterMobile />}
    </div>
  );
};
