import * as React from "react";
import "./LeftMenu.css";
import line3 from "../assets/line3.svg";
import maskGroup from "../assets/maskGroup.svg";
import MenuElemnt1 from "./MenuElemnt1";
import MenuElemnt from "./MenuElemnt";
import MenuElemnt2 from "./MenuElemnt2";
const LeftMenu = (props) => {
  return (
    <div className={`left-menu ${props.className || ""}`}>
      <div className="rectangle-17020">
        <img className="mask-group" src={maskGroup} />
        <MenuElemnt className="menu-elemnt-instance-11" {...props.menuElemnt} />
        <MenuElemnt1
          className="menu-elemnt-instance-3"
          {...props.menuElemnt1}
        />
        <MenuElemnt2
          className="menu-elemnt-instance-4" 
        
          {...props.menuElemnt2}
        />
        <MenuElemnt1
          className="menu-elemnt-instance-5"
          {...props.menuElemnt12}
        />
        <MenuElemnt1
          className="menu-elemnt-instance-6"
          {...props.menuElemnt11}
        />
        <MenuElemnt2
          className="menu-elemnt-instance-7"
          {...props.menuElemnt21}
        />
        <MenuElemnt2
          className="menu-elemnt-instance-8"
          {...props.menuElemnt24}
        />
        <MenuElemnt2
          className="menu-elemnt-instance-9"
          {...props.menuElemnt22}
        />
        <MenuElemnt2
          className="menu-elemnt-instance-10"
          {...props.menuElemnt23}
        />
      </div>
      <img className="line-3" src={props.line3 || line3} />
    </div>
  );
};
export default LeftMenu;
