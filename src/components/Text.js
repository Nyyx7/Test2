import * as React from "react";
import "./Text.css";
const Text = (props) => {
  return (
    <div className={`text ${props.className || ""}`}>{props.text || "2"}</div>
  );
};
export default Text;
