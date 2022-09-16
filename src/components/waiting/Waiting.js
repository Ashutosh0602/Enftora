import React from "react";
import classes from "./waiting.module.css";

export default function Waiting() {
  return (
    <div className={classes.loader_cont}>
      <div className={classes.loader}></div>
    </div>
  );
}
