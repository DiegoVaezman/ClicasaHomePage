import React from "react";

export const ContactHeader = () => {
  return (
    <div className="__contactHeader">
      <img src={require("../../../assets/phone.png")} alt="phone_blue_logo" />
      <img src={require("../../../assets/whatsapp.png")} alt="whatsapp_logo" />
      <img src={require("../../../assets/mail.png")} alt="mail_logo" />
    </div>
  );
};
