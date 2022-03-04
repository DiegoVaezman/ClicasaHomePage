import React from "react";
import { ContactHeader } from "./contact/ContactHeader";
import { Navbar } from "./navbar/Navbar";

export const Header = () => {
  return (
    <div className="__header">
      <div className="__header_logo_container">
        <img
          src={require("../../assets/logo-principal.png")}
          className="__header_logo_container_img"
          alt="clicasa_logo"
        />
      </div>
      <Navbar />
      <ContactHeader />
    </div>
  );
};
