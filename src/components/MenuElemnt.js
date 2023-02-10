import * as React from "react";
import "./MenuElemnt.css";
import menuIcons from "../assets/menuIcons.svg";
import materialSymbolsadd from "../assets/materialSymbolsadd.svg";
import line41 from "../assets/line41.svg";
import SubMenuinactive from "./SubMenuinactive";
import SubMenuactive from "./SubMenuactive";
const MenuElemnt = (props) => {
  return (
    <div className={`menu-elemnt ${props.className || ""}`}>
      <div className="rectangle-17016-3"> 
        <img className="menu-icons" src={props.menuIcons || menuIcons} />
        <span className="aradei-1">{props.aradei || "Aradei1"}</span>
        <img
          className="material-symbolsadd"
          src={props.materialSymbolsadd || materialSymbolsadd}
        />
      </div>
      <div className="flex-container-26"> 
        <img className="line-41" src={props.line41 || line41} />
        <div className="flex-container-27">
          <SubMenuactive
            className="sub-menuactive-instance-1"
            {...props.subMenuactive}
          />
          <SubMenuinactive
            className="sub-menuinactive-instance-1"
            {...props.subMenuinactive2}
          />
          <SubMenuinactive
            className="sub-menuinactive-instance-2"
            {...props.subMenuinactive1}
          />
          <SubMenuinactive
            className="sub-menuinactive-instance-3"
            {...props.subMenuinactive}
          />
        </div>
      </div>
    </div>
  );
};
export default MenuElemnt;
