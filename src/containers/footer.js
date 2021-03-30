import { StylesProvider } from "@material-ui/styles";
import React from "react";
import * as Const from "../utils/const";

// Inline footer style
const style = {
  background: "#450611 0% 0% no-repeat padding-box",
  minHeight: "6rem",
  textAlign: "left",
  paddingLeft: "10%",
  paddingRight: "10%",
  display: "flex",
  alignItems: "center",
};
const { innerWidth: width, innerHeight: height } = window;

// Inline text style
const styleText = {
  color: "white",
  fontSize: 16,
  textTransform: "uppercase",
  marginLeft: 20,
  display: width >= 800 ? "inline" : "none",
};

const container = { width: width <= 1100 ? "30%" : "50%" };

const rightContainer = {
  minWidth: width <= 1100 ? "70%" : "50%",
  display: "flex",
  justifyContent: "space-around",
};

// Create footer
const Footer = () => (
  <div className="footer" style={style}>
    <div style={container}>
      <a href="https://hive.io" target="_blank">
        <img
          src="public/img/footer/powered_hive.png"
          alt="Powered by Hive"
          style={{ height: 60 }}
        />
      </a>
    </div>
    <div style={rightContainer}>
      <a
        href="https://github.com/stoodkev/hive-keychain-mobile"
        target="_blank"
      >
        <span>
          <img
            src="public/img/footer/github.svg"
            alt="Github"
            style={{ verticalAlign: "middle" }}
          />
          <span style={styleText}>Visit our Github</span>
        </span>
      </a>
      <a href="https://peakd.com/@keychain" target="_blank">
        <span>
          <img
            src="public/img/footer/see_on_hive.svg"
            alt="Hive"
            style={{ verticalAlign: "middle" }}
          />
          <span style={styleText}>Follow us on Hive</span>
        </span>
      </a>
    </div>
  </div>
);

export default Footer;
