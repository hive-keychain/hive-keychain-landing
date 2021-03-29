import React from "react";
import * as Const from "../utils/const";

// Inline footer style
const style = {
  backgroundImage: `url(public/img/footer.png)`,
  backgroundSize: "cover",
  minHeight: "6rem",
  textAlign: "left",
  paddingLeft: "10%",
  paddingBottom: "1rem",
  display: "flex"
};

// Inline text style
const styleText = {
  color: Const.COLOR_TEXT_FOOTER,
  marginTop: "auto"
};

// Create footer
const Footer = () => (
  <div className="footer" style={style}>
    <p style={styleText}>
      © 2018 Steem-Plus, all rights reserved. Powered by Utopian and Adsactly.
    </p>
  </div>
);

export default Footer;
