import * as React from "react";
import "./MenuElemnt1.css";
import materialSymbolsadd3 from "../assets/materialSymbolsadd3.svg";
import menuIcons4 from "../assets/menuIcons4.svg";
const MenuElemnt1 = (props) => {
  return (
    <div className={`menu-elemnt-1 ${props.className || ""}`}>
      <div className="rectangle-17016">
        <img className="menu-icons-4" src={props.menuIcons4 || menuIcons4} />
        <span>{props.aradei || "Reciepts"}</span>
        <img
          className="material-symbolsadd-3"
          src={props.materialSymbolsadd3 || materialSymbolsadd3}
        />
      </div>
    </div>
  );
};
export default MenuElemnt1;
