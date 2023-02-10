import * as React from "react";
import "./Component13.css";
import minotification from "../assets/minotification.svg";
import ellipse1100 from "../assets/ellipse1100.png";
import materialSymbolskeyb from "../assets/materialSymbolskeyb.svg";
const Component13 = (props) => {
  return (
    <div className={`component-13 ${props.className || ""}`}>
      <span className="malls">{props.malls || "Malls"}</span>
      <img
        className="minotification"
        src={props.minotification || minotification}
      />
      <img className="ellipse-1100" src={props.ellipse1100 || ellipse1100} />
      <div className="flex-container-25">
        <span className="manal-rachidi">
          {props.manalRachidi || "Manal Rachidi"}
        </span>
        <span className="manager">{props.manager || "Manager"}</span>
      </div>
      <img
        className="material-symbolskeyb"
        src={props.materialSymbolskeyb || materialSymbolskeyb}
      />
    </div>
  );
};
export default Component13;
