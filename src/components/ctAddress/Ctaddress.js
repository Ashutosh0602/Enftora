import React, { useState } from "react";
import classes from "./ctaddress.module.css";
import { useDispatch, useSelector } from "react-redux";
import { nftActions } from "../SepRedux/state";
import { Link } from "react-router-dom";

export default function Slug() {
  let inputword;
  const [fullnft, setfullnft] = useState([]);

  const dispatch = useDispatch();
  const slug = useSelector((state) => {
    const nf = state.nfts.slugs;
    const promise = nf.then((dt) => {
      setfullnft(dt[0].assets);
    });
  });
  // console.log(inputword);
  console.log(fullnft);
  function submit() {
    dispatch(nftActions.slugcoll(inputword));
  }

  const design = fullnft.map((ls) => {
    const address = ls["asset_contract"]["address"];
    const address_mod = address.slice(0, 15);

    const token = ls["token_id"];
    const token_mod = token.slice(0, 15);

    const creator_img = ls["owner"]["profile_img_url"];

    const createDt = ls["asset_contract"]["created_date"];
    const createDt_mod = createDt.split("T")[0];

    const ID = ls["id"];

    return (
      <Link className={classes.link_detail} to={`${ls["id"]}`}>
        <div className={classes.asset_hold}>
          <div className={classes.asset_img_cont}>
            <img className={classes.asset_img} src={ls["image_url"]} />
          </div>
          <div className={classes.short_detail}>
            <div className={classes.cret_name}>
              <div>
                <img src={creator_img} />
              </div>
              <div>{ls["name"]}</div>
            </div>
            <div>
              <div className={classes.address_space}>
                <div>Address:</div>
                <div>{address_mod}...</div>
              </div>
              <div>
                <div className={classes.address_space}>
                  <div>Token:</div>
                  <div>{token_mod}...</div>
                </div>
              </div>
              <div>
                <div className={classes.address_space}>
                  <div>ID:</div>
                  <div>{ID}</div>
                </div>
              </div>
              <div>
                <div className={classes.address_space}>
                  <div>Create Date:</div>
                  <div>{createDt_mod}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <section className={classes.slug_cont}>
      <div className={classes.search_cont}>
        <input
          onChange={(e) => (inputword = e.target.value)}
          placeholder="Enter the Address"
        />
        <button onClick={submit}>Check</button>
      </div>
      <div className={classes.design}>{design}</div>
    </section>
  );
}
