import React, { useEffect, useState } from "react";
import classes from "./basset.module.css";
import { useSelector, useDispatch } from "react-redux";
import { nftActions } from "../SepRedux/state";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { token } = useParams();
  let inputword;
  const dispatch = useDispatch();
  //   console.log(token);
  const [fullnft, setfullnft] = useState([]);

  const nfts = useSelector((state) => {
    const nf = state.nfts.singleasset;
    const promise = nf.then((dt) => {
      setfullnft(dt);
    });
  });

  function submit() {
    dispatch(nftActions.callSasset(inputword));
  }
  console.log(fullnft.length);
  // const detailNft = fullnft.filter((ls) => ls.id == token);
  if (fullnft.length > 0) {
    return (
      <section className={classes.detail_sec}>
        <div className={classes.search_cont}>
          <input
            onChange={(e) => (inputword = e.target.value)}
            placeholder="Enter the Address"
          />
          <button onClick={submit}>Check</button>
        </div>
        <div className={classes.det_add}>{fullnft[0]["name"]}</div>
        <div className={classes.det_add}>{fullnft[0]["id"]}</div>
        <div className={classes.det_add}>
          {fullnft[0]["asset_contract"]["description"]}
        </div>
        <div className={classes.det_nft}>
          <div className={classes.def_nft_img_cont}>
            <img
              className={classes.def_nft_img}
              src={fullnft[0]["image_url"]}
            />
          </div>
          <div>
            <div className={classes.det_nft_inn}>
              <div>Address:</div>
              <div>{fullnft[0]["asset_contract"]["address"]}</div>
            </div>
            <div className={classes.det_nft_inn}>
              <div> Token id:</div>
              <div>{fullnft[0]["token_id"]}</div>
            </div>
            <div className={classes.det_nft_inn}>
              <div> Schema name:</div>
              <div>{fullnft[0]["asset_contract"]["schema_name"]}</div>
            </div>
            <div className={classes.det_nft_inn}>
              <div>Symbol:</div>
              <div>{fullnft[0]["asset_contract"]["symbol"]}</div>
            </div>
            <div className={classes.det_nft_inn}>
              <div>Collection Name:</div>
              <div>{fullnft[0]["collection"]["name"]}</div>
            </div>
            <div className={classes.det_nft_inn}>
              <div>Collection Slug:</div>
              <div>{fullnft[0]["collection"]["slug"]}</div>
            </div>
            <div className={classes.det_nft_inn}>
              <div>Created Date:</div>
              <div>{fullnft[0]["asset_contract"]["created_date"]}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
