import React, { useState } from "react";
import classes from "./owner.module.css";
import { useDispatch, useSelector } from "react-redux";
import { nftActions } from "../SepRedux/state";
import { Link } from "react-router-dom";

export default function Owner() {
  let inputword;
  const [fullnft, setfullnft] = useState([]);

  const dispatch = useDispatch();

  const nfts = useSelector((state) => {
    const nf = state.nfts.addressowner;
    const promise = nf.then((dt) => {
      // console.log(dt[0].length);
      setfullnft(dt[0]);
    });
  });

  function submit() {
    dispatch(nftActions.addowner(inputword));
    // console.log(inputword);
  }
  // console.log(fullnft.length);
  let design;
  if (fullnft.length > 2) {
    design = fullnft.map((ls) => {
      const name = ls["name"];
      const owner = ls["primary_asset_contracts"][0]["owner"];
      const schema_name = ls["primary_asset_contracts"][0]["schema_name"];
      const symbol = ls["primary_asset_contracts"][0]["symbol"];
      const count = ls["stats"]["count"];
      const avgprive = `${ls["stats"]["average_price"]}`;
      const trimprice = avgprive.slice(0, 5);

      return (
        <Link className={classes.link_detail} to={`${ls["id"]}`}>
          <div className={classes.asset_hold}>
            <div className={classes.asset_img_cont}>
              <img className={classes.asset_img} src={ls["image_url"]} />
            </div>
            <div className={classes.short_detail}>
              <div className={classes.cret_name}>
                <div>{/* <img src={creator_img} /> */}</div>
                <div>{name}</div>
              </div>
              <div>
                <div className={classes.address_space}>
                  <div>Owner:</div>
                  <div>{owner}</div>
                </div>
                <div>
                  <div className={classes.address_space}>
                    <div>Schema Name:</div>
                    <div>{schema_name}</div>
                  </div>
                </div>
                <div>
                  <div className={classes.address_space}>
                    <div>Symbol:</div>
                    <div>{symbol}</div>
                  </div>
                </div>
                <div>
                  <div className={classes.address_space}>
                    <span className={classes.avg_price}>{trimprice}</span>
                    {/* <div>{createDt_mod}</div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      );
    });
  }
  return (
    <section className={classes.slug_cont}>
      <div className={classes.search_cont}>
        <input
          onChange={(e) => (inputword = e.target.value)}
          placeholder="Enter the Owner"
        />
        <button onClick={submit}>Check</button>
      </div>
      <div className={classes.design}>{design}</div>
    </section>
  );
}
