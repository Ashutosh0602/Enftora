import React from "react";
import classes from "./layout.module.css";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout(props) {
  return (
    <main className={classes.main_layout}>
      <Navbar className={classes.Layout_nav} />
      <Outlet />
      {/* <section className={classes.Layout_section}>{props.children}</section> */}
    </main>
  );
}
