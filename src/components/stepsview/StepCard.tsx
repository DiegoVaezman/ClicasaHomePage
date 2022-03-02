import React from "react";

interface Props {
  step: 1 | 2 | 3 | 4;
  title: string;
  subtitle: string;
  active: boolean;
  onClick: () => void;
}

export const StepCard = ({ step, title, subtitle, active, onClick }: Props) => {
  const switchIcon = (step: number) => {
    switch (step) {
      case 1:
        return require("../../assets/one-icon.png");
      case 2:
        return require("../../assets/two-icon.png");
      case 3:
        return require("../../assets/three-icon.png");
      case 4:
        return require("../../assets/four-icon.png");
      default:
        break;
    }
  };

  return (
    <div
      className="__stepCard"
      style={{
        backgroundColor: active ? "white" : "rgba(255,255,255,0.5)",
        borderBottom: active ? "8px solid #008bcf" : "",
      }}
      onClick={onClick}
    >
      <img className="__stepCard_icon" src={switchIcon(step)} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span className="__stepCard_title lato-regular">{title}</span>
        <span className="__stepCard_subtitle lato-regular">{subtitle}</span>
      </div>
    </div>
  );
};
