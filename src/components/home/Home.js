import React from "react";
import classes from "./home.module.css";
import { useParams } from "react-router-dom";
import UpperNFT from "./Uppernft/UpperNFT";
import Bottom from "./Uppernft/Bottom";

export const Home = () => {
  const param = useParams();
  console.log(param);
  return (
    <section className={classes.home_who}>
      <div className={classes.home_first}>
        <UpperNFT />
      </div>
      <div>
        <Bottom />
      </div>
    </section>
  );
};
