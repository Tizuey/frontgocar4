import React from "react";

import Logo from "../../assets/gocar_log.png";

import "./style.css";

function Footer() {
  return (
    <>
      <div className="footer">
                <img
                  src={Logo}
                  width="170"
                  height="51"
                  className="align-top ml-4"
                  alt="LOGO"
                />
      </div>
    </>
  );
}

export default Footer;