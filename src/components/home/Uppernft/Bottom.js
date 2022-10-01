import React, { useState } from "react";
import classes from "./bottom.module.css";
import { nftActions } from "../../SepRedux/state";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Waiting from "../../waiting/Waiting";

export default function Bottom() {
  const userID = localStorage.getItem("usID");

  // let { path, url } = useRouteMatch();
  // console.log(`${url}/detail`);

  const [fullnft, setfullnft] = useState([]);
  const [nextpage, setnextpage] = useState();
  const [prevpage, setprevpage] = useState();

  const dispatch = useDispatch();
  const NextLoad = () => {
    dispatch(nftActions.nextPage(nextpage));
    dispatch(nftActions.changeloader());
  };
  const PrevLoad = () => {
    dispatch(nftActions.prevPage(prevpage));
    dispatch(nftActions.changeloader());
  };
  const pagecount = useSelector((state) => state.nfts.counter);

  const load = useSelector((state) => state.nfts.loader);
  console.log(load);
  const nfts = useSelector((state) => {
    const nf = state.nfts.assets;
    const promise = nf.then((dt) => {
      dispatch(nftActions.offloader());
      setfullnft(dt[0].assets);
      setnextpage(dt[0].next);
      setprevpage(dt[0].previous);
    });
  });
  // console.log(fullnft);
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
    <section>
      <div className={classes.assets}>
        <div></div>
        <div>Assets</div>
      </div>

      {load ? (
        <div>{<Waiting />}</div>
      ) : (
        <div className={classes.design}>{design}</div>
      )}

      <div className={classes.change}>
        <div onClick={PrevLoad}>&#8249;</div>
        <div>{pagecount}</div>
        <div onClick={NextLoad}>&#8250;</div>
      </div>
    </section>
  );
}
