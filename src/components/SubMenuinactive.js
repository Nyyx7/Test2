import * as React from "react";
import "./SubMenuinactive.css";
const SubMenuinactive = (props) => {
  return (
    <div className={`sub-menuinactive ${props.className || ""}`}>
      <div className="rectangle-17016-2">{props.malls || "Tenants"}</div>
    </div>
  );
};
export default SubMenuinactive;
