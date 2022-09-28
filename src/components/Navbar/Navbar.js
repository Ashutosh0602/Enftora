import React from "react";
import classes from "./Navbar.module.css";
import profile from "../../assets/know.png";

export default function Navbar() {
  //   console.log(localStorage.getItem("usName"));
  return (
    <section className={classes.section_Navbar}>
      <div className={classes.us_detail}>
        <div>
          <img src={profile} />
        </div>
        <div>{localStorage.getItem("usName")}</div>
      </div>
      <div>
        <div>NFT by Chain</div>
      </div>
    </section>
  );
}
