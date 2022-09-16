import React, { useState } from "react";
import classes from "./home.module.css";
import { useParams } from "react-router-dom";
import UpperNFT from "./Uppernft/UpperNFT";

// import { IState } from "../SepRedux/state";
import { nftActions } from "../SepRedux/state";
import { useDispatch, useSelector } from "react-redux";

// IState.ethereum.then((dt) => console.log(dt));
// IState.polygon.then((dt) => console.log(dt[0]["nfts"]));
// IState.rinkeby.then((dt) => console.log(dt));
export const Home = () => {
  const [fullnft, setfullnft] = useState([]);
  const dispatch = useDispatch();

  const nfts = useSelector((state) => {
    const nf = state.nfts.ethereum;
    const promise = nf.then((dt) => {
      setfullnft(dt);
      // console.log(dt);
    });
  });
  console.log(fullnft);
  // const callPolygon = () => {
  //   dispatch(nftActions.polygon());
  // };
  // const callPolygon = dispatch(nftActions.polygon());
  const param = useParams();
  return (
    <section>
      <div className={classes.home_first}>
        <UpperNFT />
      </div>
      <div>jdshaliuh</div>
    </section>
  );
};
