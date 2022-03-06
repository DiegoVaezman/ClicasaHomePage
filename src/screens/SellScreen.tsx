import React from "react";
import { PrincipalButton } from "../components/buttons/PrincipalButton";
import { VideoButton } from "../components/buttons/VideoButton";
import { SecondContainerItemsDesktop } from "../components/sellscreen/SecondContainerItemsDesktop";
import { SecondContainerItemsMobile } from "../components/sellscreen/SecondContainerItemsMobile";
import { StepsView } from "../components/stepsview/StepsView";
import { StepsViewMobile } from "../components/stepsview/StepsViewMobile";
import { CarouselView } from "../components/carousel/CarouselView";

export const SellScreen = () => {
  return (
    <div className="__sellScreen">
      <div className="__sellScreen_topContainer">
        <span className="__sellScreen_topContainer_title lato-light">
          Vende tu casa <br />
          en un <span className="lato-bold">clic</span>
        </span>
        <img
          src={require("../assets/bitmap.png")}
          alt="arrow_img"
          className="__sellScreen_topContainer_arrow"
        />
        <div className="__sellScreen_input_container">
          <img
            src={require("../assets/shape.png")}
            className="__sellScreen_input_container_icon"
          />
          <input
            className="lato-light"
            type="text"
            placeholder="Introduce la dirección de tu casa o piso"
          ></input>
          <div className="__sellScreen_topContainer_buttonDesktop">
            <PrincipalButton text="VENDER MI INMUEBLE" />
          </div>
        </div>
        <div className="__sellScreen_topContainer_buttonMobile">
          <PrincipalButton text="VENDER MI INMUEBLE" />
        </div>
        <span className="__sellScreen_topContainer_subtitle lato-regular">
          Compramos tu casa directamente
          <br /> sin complicaciones ni preocupaciones.
        </span>
        <VideoButton text="VER VÍDEO" />
      </div>

      <div className="__sellScreen_secondContainer">
        <span className="__sellScreen_secondContainer_title lato-light">
          En Clicasa sólo hay ventajas
        </span>
        <span className="__sellScreen_secondContainer_subtitle lato-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>

        <SecondContainerItemsDesktop />
        <SecondContainerItemsMobile />
      </div>

      <div className="__sellScreen_thirdContainer">
        <span className="__sellScreen_thirdContainer_title lato-light">
          Vender tu piso nunca fue tan fácil
        </span>
        <span className="__sellScreen_thirdContainer_subtitle lato-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </div>

      <StepsView />
      <StepsViewMobile />

      <div className="__sellScreen_fourContainer"></div>

      <div className="__sellScreen_fifthContainer">
        <span className="__sellScreen_fifthContainer_title lato-light">
          Trabajamos con las mejores empresas
        </span>
        <span className="__sellScreen_fifthContainer_subtitle lato-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <div className="__sellScreen_fifthContainer_imageContainer">
          <img
            className="__sellScreen_fifthContainer_image"
            src={require("../assets/inmoseguros-image.png")}
          />
          <img
            className="__sellScreen_fifthContainer_image"
            src={require("../assets/mapfre-image.png")}
          />
        </div>
      </div>

      <div className="__sellScreen_referencesContainer">
        <span className="__sellScreen_referencesContainer_title lato-light">
          Trabajamos con las mejores empresas
        </span>
        <span className="__sellScreen_referencesContainer_subtitle lato-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>

        <CarouselView />
      </div>
    </div>
  );
};
