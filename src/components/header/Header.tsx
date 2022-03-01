import React from "react";
import { ContactHeader } from "./contact/ContactHeader";
import { Navbar } from "./navbar/Navbar";

export const Header = () => {
  return (
    <div className="__header">
      <img
        src={require("../../assets/logo-principal.png")}
        className="card-img"
        alt="clicasa_logo"
      />
      <Navbar />
      <ContactHeader />
    </div>
  );
};
