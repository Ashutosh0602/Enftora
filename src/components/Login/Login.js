import React, { useEffect, useState, useRef } from "react";
import classes from "./login.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/enftora.png";
import goog from "../../assets/goog.png";
import data from "../reduxState/Intial";

console.log();
const img_ls = [];
let slide_div;
export default function Login(props) {
  const ref = useRef(null);

  const [chind, setchind] = useState(0);

  const [index, setindex] = useState(1);

  const [nft, setNft] = useState([]);

  useEffect(() => {
    slide_div = ref.current;
    slide_div.style.transform = "rotateY(10deg) translateY(-100px)";
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (chind === 0) {
        setindex((prev) => prev + 1);
        slide_div.style.transform = `rotateY(10deg) translateY(-${index}px)`;
        if (index === slide_div.clientHeight) {
          setchind((prev) => (prev = 1));
        }
      }
      if (chind === 1) {
        setindex((prev) => prev - 1);
        slide_div.style.transform = `rotateY(10deg) translateY(-${index}px)`;
        if (index === 0) {
          setchind((prev) => (prev = 0));
        }
      }
    }, 10);
    return () => clearTimeout(timer);
  });

  useEffect(() => {
    const awaits = async () => {
      const snft = await data;
      setNft(snft["nfts"]);
    };
    awaits();
  }, []);

  nft.map((dt) => {
    const img = dt;
    if (dt["cached_file_url"] !== null) {
      img_ls.push(dt["cached_file_url"]);
    }
  });

  let ch_i = 0;
  function main_upper() {
    let upper_cont_ls = [];
    for (let i = 0; i < 8; i++) {
      const cont_ls = [];
      for (let j = 0; j < 5; j++) {
        const image = React.createElement(
          "img",
          {
            src: img_ls[ch_i],
          },
          null
        );

        const image_cover = React.createElement(
          "div",
          { className: classes.scroll_cont_div },
          image
        );
        ch_i++;
        cont_ls.push(image_cover);
      }

      const upper = React.createElement(
        "div",
        { className: classes.scroll_cont },
        cont_ls
      );
      upper_cont_ls.push(upper);
    }

    const final_upper = React.createElement(
      "div",
      { className: classes.login_scroll, ref: ref },
      upper_cont_ls
    );
    return final_upper;
  }

  return (
    <section className={classes.sec_log}>
      <div className={classes.left_cont}>{main_upper()}</div>
      <div className={classes.blank_cont}></div>
      <div className={classes.right_cont}>
        <div
          style={{ backgroundColor: "transparent" }}
          className={classes.logo_div}
        >
          <img src={logo} />
        </div>
        <div className={classes.write_cont}>
          <div>ALL YOUR NFT's AT ONE PLACE</div>
          <div>
            NFT <span>COMMUNITY</span> MARKETPLACE
          </div>
          <div>EXPLORE | BID | COLLECT</div>
          <div>
            {props.sID === null ? (
              <div className={classes.login_goog} onClick={props.rd}>
                Log In
                <img src={goog} className={classes.goog} />
              </div>
            ) : (
              <div className={classes.login_goog}>
                <Link
                  className={classes.login_goog_a}
                  to={`/auth/:${props.sID}`}
                >
                  Continue
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
