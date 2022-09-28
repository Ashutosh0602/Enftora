import React, { useState } from "react";
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
  console.log(detailNft[0]);
  return (
    <section className={classes.detail_sec}>
      <div>{detailNft[0]["name"]}</div>
      <div>{detailNft[0]["id"]}</div>
      <div>{detailNft[0]["description"]}</div>
      <div>
        <div>
          <img src={detailNft[0]["image_url"]} />
        </div>
        <div>
          <div>
            <div>Address</div>
            <div>{detailNft[0]["asset_contract"]["address"]}</div>
          </div>
          <div>
            <div> Token id</div>
            <div>{detailNft[0]["token_id"]}</div>
          </div>
          <div>
            <div> Schema name</div>
            <div>{detailNft[0]["asset_contract"]["schema_name"]}</div>
          </div>
          <div>
            <div>Symbol</div>
            <div>{detailNft[0]["asset_contract"]["symbol"]}</div>
          </div>
          <div>
            <div>Collection Name</div>
            <div>{detailNft[0]["collection"]["name"]}</div>
          </div>
          <div>
            <div>Collection Slug</div>
            <div>{detailNft[0]["collection"]["slug"]}</div>
          </div>
          <div>
            <div>Address</div>
            <div>{detailNft[0]["asset_contract"]["address"]}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
