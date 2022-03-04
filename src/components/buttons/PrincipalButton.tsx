import React from "react";

interface Props {
  text: string;
  className?: string;
}

export const PrincipalButton = ({ text, className }: Props) => {
  return (
    <button className={"__principalButton lato-black " + className}>
      {text}
    </button>
  );
};
