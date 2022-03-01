import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
// import "../../styles/components/navbar/navbarStyle.css";

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 120px;
  background-color: blue;
  align-items: center;
`;
const StyledNavLink = styled(NavLink)`
  padding-right: 8px;
  padding-left: 8px;
  background-color: red;
  height: 40px;
  display: flex;
  align-items: center;
  text-decoration: none;

  &.active {
    border-bottom: 3px solid white;
  }
`;

export const Navbar = () => {
  return (
    <div className="__navbar">
      <NavLink
        to="/home/sell"
        className={({ isActive }) =>
          "lato-regular __navbar_link " +
          (isActive ? "__navbar_link_active" : "")
        }
      >
        VENDER
      </NavLink>
      <NavLink
        to="/home/buy"
        className={({ isActive }) =>
          "lato-regular __navbar_link " +
          (isActive ? "__navbar_link_active" : "")
        }
      >
        COMPRAR
      </NavLink>
      <NavLink
        to="/home/hashtag"
        className={({ isActive }) =>
          "lato-regular __navbar_link " +
          (isActive ? "__navbar_link_active" : "")
        }
      >
        #YOELIJOCLICPISO
      </NavLink>
      <NavLink
        to="/home/link"
        className={({ isActive }) =>
          "lato-regular __navbar_link " +
          (isActive ? "__navbar_link_active" : "")
        }
      >
        ¿POR QUÉ CLICPISO?
      </NavLink>
    </div>
  );
};
