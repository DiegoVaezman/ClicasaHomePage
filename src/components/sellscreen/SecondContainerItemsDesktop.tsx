import React from "react";

export const SecondContainerItemsDesktop = () => {
  return (
    <div className="__sellScreen_secondContainer_itemsContainer">
      <div className="__sellScreen_secondContainer_itemsContainer_item">
        <img
          src={require("../../assets/rotation.png")}
          className="__sellScreen_secondContainer_itemsContainer_item_image"
        />
        <span className="lato-bold">Oferta en 24h</span>
        <span className="lato-regular">
          No te preocupes de su estado, ni de reparaciones para eneseñarlo
        </span>
      </div>
      <div className="__sellScreen_secondContainer_itemsContainer_item">
        <img src={require("../../assets/wallet.png")} />
        <span className="lato-bold">Pago inmediato</span>
        <span className="lato-regular">
          No te preocupes de su estado, ni de reparaciones para eneseñarlo
        </span>
      </div>
      <div className="__sellScreen_secondContainer_itemsContainer_item">
        <img src={require("../../assets/paperplane.png")} />
        <span className="lato-bold">Ahórrate el papeleo</span>
        <span className="lato-regular">
          Si lo necesitas también podemos ayudarte a encontrar tu nuevo hogar
        </span>
      </div>
      <div className="__sellScreen_secondContainer_itemsContainer_item">
        <img src={require("../../assets/group-3.png")} />
        <span className="lato-bold">Tu eliges la fecha</span>
        <span className="lato-regular">
          Si lo necesitas también podemos ayudarte a encontrar tu nuevo hogar
        </span>
      </div>
    </div>
  );
};
