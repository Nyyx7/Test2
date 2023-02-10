import * as React from "react";
import "./Group2073.css";
import icon from "../assets/icon.svg";
import Text from "./Text";
const Group2073 = (props) => {
  return (
    <div className={`group-2073 ${props.className || ""}`}>
      <span className="displaying-page-1-of">
        {props.displayingPage1Of || "Displaying page1 of 24 results   "}
      </span>
      <div className="content">{ "1"}</div>
      <span className="page">{ "2"}</span>
      <span className="page-1">{ "3"}</span>
      <span className="yqfhhbvaudihs">{props.hozfnedjaapkz || "..."}</span>
      <span className="page-2">{ "8"}</span>
      <span className="page-3">{ "9"}</span>
      <span className="page-4">{ "10"}</span>
      <span className="go-to-page">{"Go to page"}</span>
      <div className="assets-input">
        <Text className="text-instance-1" {...props.text} />
        <img className="icon" src={props.icon || icon} />
      </div>
    </div>
  );
};
export default Group2073;
