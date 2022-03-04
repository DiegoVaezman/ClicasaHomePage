import React, { useState } from "react";

export const ContactHeader = () => {
  const [iconSelected, setIconSelected] = useState<
    "phone" | "whatsapp" | "mail"
  >("phone");

  return (
    <div className="__header_contactContainer">
      <img
        src={require("../../../assets/phone.png")}
        alt="phone_blue_logo"
        className="__header_contactContainer_icon"
        onClick={() => setIconSelected("phone")}
      />
      <span
        className={"__header_contactContainer_text lato-regular"}
        style={{ display: iconSelected === "phone" ? "block" : "none" }}
      >
        612 345 678
      </span>
      <img
        src={require("../../../assets/whatsapp.png")}
        alt="whatsapp_logo"
        className="__header_contactContainer_icon"
        onClick={() => setIconSelected("whatsapp")}
      />
      <span
        className="__header_contactContainer_text lato-regular"
        style={{ display: iconSelected === "whatsapp" ? "block" : "none" }}
      >
        698 765 432
      </span>
      <img
        src={require("../../../assets/mail.png")}
        alt="mail_logo"
        className="__header_contactContainer_icon"
        onClick={() => setIconSelected("mail")}
      />
      <span
        className="__header_contactContainer_text lato-regular"
        style={{ display: iconSelected === "mail" ? "block" : "none" }}
      >
        correo@gmail.com
      </span>
    </div>
  );
};
