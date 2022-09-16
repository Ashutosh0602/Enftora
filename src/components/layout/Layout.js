import React from "react";
import classes from "./layout.module.css";
import Navbar from "../Navbar/Navbar";

export default function Layout(props) {
  return (
    <main className={classes.main_layout}>
      <Navbar className={classes.Layout_nav} />
      <section className={classes.Layout_section}>{props.children}</section>
    </main>
  );
}
