import React from "react";

interface Props {
  text: string;
}

export const VideoButton = ({ text }: Props) => {
  return (
    <button className="__videoButton">
      <span className="__videoButton_text lato-bold">{text}</span>
      <img src={require("../../assets/play.png")} alt="play_img" />
    </button>
  );
};
