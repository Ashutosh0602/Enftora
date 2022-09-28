import React, { useEffect, useState } from "react";
import classes from "./detail.module.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { token } = useParams();
  //   console.log(token);
  const [fullnft, setfullnft] = useState([]);

  const nfts = useSelector((state) => {
    const nf = state.nfts.assets;
    const promise = nf.then((dt) => {
      setfullnft(dt[0].assets);
    });
  });

  const detailNft = fullnft.filter((ls) => ls.id == token);

  //   console.log(detailNft.length);
  if (detailNft.length >= 1) {
    return (
      <section className={classes.detail_sec}>
        <div className={classes.det_add}>{detailNft[0]["name"]}</div>
        <div className={classes.det_add}>{detailNft[0]["id"]}</div>
        <div className={classes.det_add}>{detailNft[0]["description"]}</div>
        <div className={classes.det_nft}>
          <div className={classes.def_nft_img_cont}>
            <img
              className={classes.def_nft_img}
              src={detailNft[0]["image_url"]}
            />
          </div>
          <div>
            <div className={classes.det_nft_inn}>
              <div>Address:</div>
              <div>{detailNft[0]["asset_contract"]["address"]}</div>
            </div>
            <div className={classes.det_nft_inn}>
              <div> Token id:</div>
              <div>{detailNft[0]["token_id"]}</div>
            </div>
            <div className={classes.det_nft_inn}>
              <div> Schema name:</div>
              <div>{detailNft[0]["asset_contract"]["schema_name"]}</div>
            </div>
            <div className={classes.det_nft_inn}>
              <div>Symbol:</div>
              <div>{detailNft[0]["asset_contract"]["symbol"]}</div>
            </div>
            <div className={classes.det_nft_inn}>
              <div>Collection Name:</div>
              <div>{detailNft[0]["collection"]["name"]}</div>
            </div>
            <div className={classes.det_nft_inn}>
              <div>Collection Slug:</div>
              <div>{detailNft[0]["collection"]["slug"]}</div>
            </div>
            <div className={classes.det_nft_inn}>
              <div>Created Date:</div>
              <div>{detailNft[0]["asset_contract"]["created_date"]}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
