import React from "react";

export const SecondContainerItemsMobile = () => {
  return (
    <div className="__sellScreen_secondContainer_itemsContainer_mobile">
      <div className="__sellScreen_secondContainer_itemsContainer_mobile_item">
        <img src={require("../../assets/housem.png")} />
        <div className="__sellScreen_secondContainer_itemsContainer_mobile_item_textContainer">
          <span className="lato-bold">Compramos tu piso como esté </span>
          <span className=" lato-regular">
            No te preocupes de su estado, ni de reparaciones para eneseñarlo
          </span>
        </div>
      </div>

      <div className="__sellScreen_secondContainer_itemsContainer_mobile_item">
        <img src={require("../../assets/coins.png")} />
        <div className="__sellScreen_secondContainer_itemsContainer_mobile_item_textContainer">
          <span className="lato-bold">Pago al instante</span>
          <span className=" lato-regular">
            No te preocupes de su estado, ni de reparaciones para eneseñarlo
          </span>
        </div>
      </div>

      <div className="__sellScreen_secondContainer_itemsContainer_mobile_item">
        <img src={require("../../assets/search.png")} />
        <div className="__sellScreen_secondContainer_itemsContainer_mobile_item_textContainer">
          <span className="lato-bold">Te ayudamos con tu nueva casa</span>
          <span className=" lato-regular">
            Si lo necesitas también podemos ayudarte a encontrar tu nuevo hogar
          </span>
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    backgroundColor: "green",
  },
};
