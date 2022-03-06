import React from "react";
import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";

export const BurguerMenu = () => {
  return (
    <Menu>
      <NavLink to="/home/sell" className="lato-regular __burguerMenuLink">
        VENDER
      </NavLink>
      <NavLink to="/home/buy" className="lato-regular  __burguerMenuLink">
        COMPRAR
      </NavLink>
      <NavLink to="/home/hashtag" className="lato-regular  __burguerMenuLink">
        #YOELIJOCLICPISO
      </NavLink>
    </Menu>
  );
};
