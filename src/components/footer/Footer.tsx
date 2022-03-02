import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="__footer">
      <div className="__footer_contact">
        <img src={require("../../assets/logo-principal.png")} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <img
            src={require("../../assets/phone.png")}
            alt="phone-icon"
            className="__footer_contact_icon"
          />
          <span className="__footer_contact_text lato-regular">
            911 123 456
          </span>
          <img
            src={require("../../assets/mail.png")}
            alt="mail-icon"
            className="__footer_contact_icon"
          />
          <span className="__footer_contact_text lato-regular">
            info@clicasa.com
          </span>
        </div>
      </div>
      <div className="__footer_linksContainer">
        <span className="__footer_linksContainer_text lato-regular">
          © 2017 CLICASA. TODOS LOS DERECHOS RESERVADOS
        </span>
        <div>
          <Link to="#" className="__footer_linksContainer_link lato-regular">
            Mapa web
          </Link>
          <Link to="#" className="__footer_linksContainer_link lato-regular">
            Contacto
          </Link>
          <Link to="#" className="__footer_linksContainer_link lato-regular">
            Aviso legal
          </Link>
        </div>
        <div>
          <img
            src={require("../../assets/1489335130-linkedin-circle-color.png")}
            alt="social-link-icon"
            className="__footer_linksContainer_icon"
          />
          <img
            src={require("../../assets/1489335132-facebook-circle-color.png")}
            alt="social-link-icon"
            className="__footer_linksContainer_icon"
          />
          <img
            src={require("../../assets/1489335133-twitter-circle-color.png")}
            alt="social-link-icon"
            className="__footer_linksContainer_icon"
          />
          <img
            src={require("../../assets/1489335135-youtube-circle-color.png")}
            alt="social-link-icon"
            className="__footer_linksContainer_icon"
          />
        </div>
      </div>
    </div>
  );
};
