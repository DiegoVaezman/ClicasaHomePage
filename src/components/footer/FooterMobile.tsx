import React from "react";
import { Link } from "react-router-dom";

export const FooterMobile = () => {
  return (
    <div className="__footerMobile">
      <img
        src={require("../../assets/logo-principal.png")}
        className="__footerMobile_logo"
      />
      <div className="__footerMobile_links">
        <Link to="#" className="__footerMobile_links_link lato-regular">
          Mapa web
        </Link>
        <Link to="#" className="__footerMobile_links_link lato-regular">
          Contacto
        </Link>
        <Link to="#" className="__footerMobile_links_link lato-regular">
          Aviso legal
        </Link>
      </div>

      <div className="__footerMobile_contact">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          }}
        >
          <img src={require("../../assets/phone.png")} />
          <span className="lato-regular">911 932 500</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <img src={require("../../assets/mail.png")} />
          <span className="lato-regular">info@clicpiso.com</span>
        </div>
      </div>

      <div className="__footerMobile_derechos">
        <span className="__footerMobile_derechos_text lato-regular">
          © 2017 CLICPISO. TODOS LOS DERECHOS RESERVADOS
        </span>
      </div>

      <div className="__footerMobile_social">
        <img
          src={require("../../assets/1489335132-facebook-circle-color.png")}
          className="__footerMobile_social_icon"
        />
        <img
          src={require("../../assets/1489335130-linkedin-circle-color.png")}
          className="__footerMobile_social_icon"
        />
        <img
          src={require("../../assets/1489335133-twitter-circle-color.png")}
          className="__footerMobile_social_icon"
        />
        <img
          src={require("../../assets/1489335135-youtube-circle-color.png")}
          className="__footerMobile_social_icon"
        />
      </div>
    </div>
  );
};
