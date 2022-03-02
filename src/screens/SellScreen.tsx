import React from "react";
import { PrincipalButton } from "../components/buttons/PrincipalButton";
import { VideoButton } from "../components/buttons/VideoButton";
import { StepsView } from "../components/stepsview/StepsView";

export const SellScreen = () => {
  return (
    <div className="__sellScreen">
      <div className="__sellScreen_topContainer">
        <span className="__sellScreen_topContainer_title lato-light">
          Vende tu casa en un <span className="lato-bold">clic</span>
        </span>
        <img
          src={require("../assets/bitmap.png")}
          alt="arrow_img"
          style={{ marginLeft: 300 }}
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
        <div className="__sellScreen_secondContainer_itemsContainer">
          <div className="__sellScreen_secondContainer_itemsContainer_item">
            <img src={require("../assets/rotation.png")} />
            <span className="lato-bold">Oferta en 24h</span>
            <span className="lato-regular">
              No te preocupes de su estado, ni de reparaciones para eneseñarlo
            </span>
          </div>
          <div className="__sellScreen_secondContainer_itemsContainer_item">
            <img src={require("../assets/wallet.png")} />
            <span className="lato-bold">Pago inmediato</span>
            <span className="lato-regular">
              No te preocupes de su estado, ni de reparaciones para eneseñarlo
            </span>
          </div>
          <div className="__sellScreen_secondContainer_itemsContainer_item">
            <img src={require("../assets/paperplane.png")} />
            <span className="lato-bold">Ahórrate el papeleo</span>
            <span className="lato-regular">
              Si lo necesitas también podemos ayudarte a encontrar tu nuevo
              hogar
            </span>
          </div>
          <div className="__sellScreen_secondContainer_itemsContainer_item">
            <img src={require("../assets/group-3.png")} />
            <span className="lato-bold">Tu eliges la fecha</span>
            <span className="lato-regular">
              Si lo necesitas también podemos ayudarte a encontrar tu nuevo
              hogar
            </span>
          </div>
        </div>
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
      <div className="__sellScreen_stepsViewContainer">
        <StepsView />
      </div>

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
    </div>
  );
};
