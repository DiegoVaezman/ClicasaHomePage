import React from "react";

interface Props {
  text: string;
}

export const PrincipalButton = ({ text }: Props) => {
  return <button className="__principalButton lato-black">{text}</button>;
};
