import * as React from "react";
import "./Field.css";
const Field = (props) => {
  return (
    <div className={`field ${props.className || ""}`}>
      <span className="select">{props.select || "City"}</span>
      <select className="vector-1" src={props.vector1 || vector} />
    </div>
  );
};
export default Field;
