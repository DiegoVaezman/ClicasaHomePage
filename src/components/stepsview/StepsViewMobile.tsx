import React from "react";

export const StepsViewMobile = () => {
  return (
    <div className="__stepsViewMobile">
      <div className="__stepsViewMobile_item">
        <div className="__stepsViewMobile_item_header">
          <img src={require("../../assets/one-icon.png")} />
          <div className="__stepsViewMobile_item_header_textContainer">
            <span className="lato-regular">Descríbenos tu inmueble</span>
            <span className="lato-regular">
              No te preocupes de su estado, ni de reparaciones para eneseñarlo
            </span>
          </div>
        </div>
        <img
          src={require("../../assets/step1-image.png")}
          className="__stepsViewMobile_item_image"
        />
      </div>

      <div className="__stepsViewMobile_item">
        <div className="__stepsViewMobile_item_header">
          <img src={require("../../assets/two-icon.png")} />
          <div className="__stepsViewMobile_item_header_textContainer">
            <span className="lato-regular">Recibe una oferta en 24 horas</span>
            <span className="lato-regular">Piénsatela</span>
          </div>
        </div>
        <img
          src={require("../../assets/step2-image.png")}
          className="__stepsViewMobile_item_image"
        />
      </div>

      <div className="__stepsViewMobile_item">
        <div className="__stepsViewMobile_item_header">
          <img src={require("../../assets/three-icon.png")} />
          <div className="__stepsViewMobile_item_header_textContainer">
            <span className="lato-regular">
              Dinos hasta cuando quieres quedarte
            </span>
            <span className="lato-regular">
              Nos ajustamos a tus necesidades, cuando tu estés listo nosotros
              también lo estaremos
            </span>
          </div>
        </div>
        <img
          src={require("../../assets/step3-image.png")}
          className="__stepsViewMobile_item_image"
        />
      </div>

      <div className="__stepsViewMobile_item">
        <div className="__stepsViewMobile_item_header">
          <img src={require("../../assets/four-icon.png")} />
          <div className="__stepsViewMobile_item_header_textContainer">
            <span className="lato-regular">Ya está!</span>
            <span className="lato-regular">
              Firma la venta y recibe el dinero
            </span>
          </div>
        </div>
        <img
          src={require("../../assets/step4-image.png")}
          className="__stepsViewMobile_item_image"
        />
      </div>
    </div>
  );
};
