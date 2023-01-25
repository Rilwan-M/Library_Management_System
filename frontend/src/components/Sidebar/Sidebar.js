import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../imgs/logo.png";
// import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { Link, Router } from "react-router-dom";
import { useEffect } from "react";

import { createBrowserHistory } from "history";
const Sidebar = () => {
  // const [selected, setSelected] = useState(0);
  const [expanded, setExpaned] = useState(true);
  const [selected, setSelected] = useState(
    localStorage.getItem("selectedMenu") || 0
  );

  useEffect(() => {
    localStorage.setItem("selectedMenu", selected);
    // setSelected(0);
  }, [selected]);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };
  // console.log(window.innerWidth);
  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpaned(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        {/* logo */}
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span>
            B<span>oo</span>K HUB
          </span>
        </div>
        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => {
                  setSelected(index);
                }}
              >
                <Link
                  className="custom-link"
                  to={{ pathname: item.link }}
                  replace
                >
                  <item.icon />
                  {item.heading}
                </Link>
              </div>
            );
          })}
          {/* signoutIcon */}
          <div className="menuItem"></div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
