import * as React from "react";
import "./SubMenuactive.css";
const SubMenuactive = (props) => {
  return (
    <div className={`sub-menuactive ${props.className || ""}`}>
      <div className="rectangle-17016-4">
        <span className="malls-1">{props.malls || "Malls"}</span>
      </div>
    </div>
  );
};
export default SubMenuactive;
