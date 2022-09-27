import React, { useState } from "react";
import classes from "./bottom.module.css";
import { nftActions } from "../../SepRedux/state";
import { useDispatch, useSelector } from "react-redux";

export default function Bottom() {
  const [fullnft, setfullnft] = useState([]);
  const dispatch = useDispatch();

  const nfts = useSelector((state) => {
    const nf = state.nfts.assets;
    const promise = nf.then((dt) => {
      setfullnft(dt[0].assets);
    });
  });
  console.log(fullnft);
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
        <div>
          <div></div>
        </div>
      </div>
    );
  });
  return (
    <section>
      <div className={classes.assets}>
        <div></div>
        <div>Assets</div>
      </div>
      <div className={classes.design}>{design}</div>
    </section>
  );
}
