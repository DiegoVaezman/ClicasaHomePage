import React, { useState } from "react";
import { StepCard } from "./StepCard";

export const StepsView = () => {
  const [selectedStep, setSelectedStep] = useState<1 | 2 | 3 | 4>(1);

  const switchImage = (step: number) => {
    switch (step) {
      case 1:
        return require("../../assets/step1-image.png");
      case 2:
        return require("../../assets/step2-image.png");
      case 3:
        return require("../../assets/step3-image.png");
      case 4:
        return require("../../assets/step4-image.png");
      default:
        break;
    }
  };

  return (
    <div className="__stepsView">
      <div className="__stepsView_header">
        <StepCard
          step={1}
          title="Descríbenos tu inmueble"
          subtitle="No te preocupes de su estado, ni de reparaciones para eneseñarlo"
          active={selectedStep === 1}
          onClick={() => {
            setSelectedStep(1);
          }}
        />
        <StepCard
          step={2}
          title="Recibe una oferta en 24 horas"
          subtitle="Piénsatela!"
          active={selectedStep === 2}
          onClick={() => {
            setSelectedStep(2);
          }}
        />
        <StepCard
          step={3}
          title="Dinos hasta cuando quieres quedarte"
          subtitle="Nos ajustamos a tus necesidades, cuando tu estés listo nosotros también lo estaremos"
          active={selectedStep === 3}
          onClick={() => {
            setSelectedStep(3);
          }}
        />
        <StepCard
          step={4}
          title="Ya está!"
          subtitle="Firma la venta y recibe el dinero"
          active={selectedStep === 4}
          onClick={() => {
            setSelectedStep(4);
          }}
        />
      </div>
      <img
        src={switchImage(selectedStep)}
        alt="step_image"
        className="__stepsView_image"
      />
    </div>
  );
};
