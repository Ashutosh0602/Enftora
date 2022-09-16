import React from "react";
import { useParams } from "react-router-dom";
import UpperNFT from "./Uppernft/UpperNFT";

import { IState } from "../SepRedux/state";
IState.ethereum.then((dt) => console.log(dt));
// IState.polygon.then((dt) => console.log(dt[0]["nfts"]));
// IState.rinkeby.then((dt) => console.log(dt));
export const Home = () => {
  const param = useParams();
  return (
    <section>
      <div>
        <UpperNFT />
      </div>
      <div></div>
    </section>
  );
};
