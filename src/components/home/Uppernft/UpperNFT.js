import React from "react";
import classes from "./uppernft.module.css";
import { fixed } from "../fixedNFT";

export default function UpperNFT() {
  const Map = fixed.map((ls) => {
    return (
      <div className={classes.upper_pos}>
        <div className={classes.img_cover_upper}>
          {ls.imgState ? (
            <img src={ls.cached_file_url} />
          ) : (
            <video
              className={classes.video_upper}
              src={ls.cached_animation_url}
              muted
              loop
            />
          )}
        </div>
        <div className={classes.nftName}>#{ls.name}</div>
      </div>
    );
  });
  //   map();
  //   console.log(fixed);
  return <div className={classes.map_display}>{Map}</div>;
}
