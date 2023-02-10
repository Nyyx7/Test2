import * as React from "react";
import "./MenuElemnt2.css";
import menuIcons8 from "../assets/menuIcons8.svg";
const MenuElemnt2 = (props) => {
  return (
    <div className={`menu-elemnt-2 ${props.className || ""}`}>
      <div className="rectangle-17016-1">
        <img className="menu-icons-8" src={props.menuIcons8 || menuIcons8} />
        <span className="aradei">{props.aradei || "Media"}</span>
      </div>
    </div>
  );
};
export default MenuElemnt2;
