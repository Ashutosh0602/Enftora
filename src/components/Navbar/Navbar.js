import React from "react";
import classes from "./Navbar.module.css";
import profile from "../../assets/know.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  //   console.log(localStorage.getItem("usName"));
  return (
    <section className={classes.section_Navbar}>
      <div className={classes.us_detail}>
        <div>
          <img src={profile} />
        </div>
        <div>{localStorage.getItem("usName")}</div>
      </div>
      <div>
        <div>
          <div className={classes.NavLink_head}>
            <NavLink
              style={{
                textDecoration: "none",
                background: "transparent",
                fontSize: "1.5rem",
              }}
              to={`/auth/${localStorage.getItem("usID")}`}
            >
              Assets
            </NavLink>
          </div>
          <div>
            <div className={classes.NavLink_cont}>
              <NavLink
                className={(navdata) =>
                  navdata.isActive ? classes.Active_nav : classes.NavLink
                }
                to={`/auth/${localStorage.getItem("usID")}/Slug_collenction`}
              >
                Collection Slug
              </NavLink>
            </div>
            <div className={classes.NavLink_cont}>
              <NavLink
                className={(navdata) =>
                  navdata.isActive ? classes.Active_nav : classes.NavLink
                }
                to={`/auth/${localStorage.getItem("usID")}/address_collection`}
              >
                Contract Address
              </NavLink>
            </div>
          </div>
        </div>
        <div>
          <div className={classes.NavLink_head}>Collection</div>
          <div className={classes.NavLink_cont}>
            <NavLink
              className={(navdata) =>
                navdata.isActive ? classes.Active_nav : classes.NavLink
              }
              to={`/auth/${localStorage.getItem("usID")}/owner_collection`}
            >
              Asset owner
            </NavLink>
          </div>
        </div>
        <div>
          <div className={classes.NavLink_head}>Bundle</div>
          <div>
            <div className={classes.NavLink_cont}>
              <NavLink
                className={(navdata) =>
                  navdata.isActive ? classes.Active_nav : classes.NavLink
                }
                to={`/auth/${localStorage.getItem("usID")}/owner_bundle`}
              >
                Owner
              </NavLink>
            </div>
            <div className={classes.NavLink_cont}>
              <NavLink
                className={(navdata) =>
                  navdata.isActive ? classes.Active_nav : classes.NavLink
                }
                to={`/auth/${localStorage.getItem("usID")}/address_bundle`}
              >
                Contract Address
              </NavLink>
            </div>
            <div className={classes.NavLink_cont}>
              <NavLink
                className={(navdata) =>
                  navdata.isActive ? classes.Active_nav : classes.NavLink
                }
                to={`/auth/${localStorage.getItem("usID")}/single_bundle`}
              >
                Single Asset
                {/* <div className={classes.NavLink_hover}>&laquo;</div> */}
              </NavLink>
            </div>
            <div>
              <input
                className={classes.range}
                onClick={(e) => console.log(e.target.value)}
                type="range"
                id="vol"
                name="vol"
                min="0"
                max="50"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
