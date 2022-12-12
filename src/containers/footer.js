import React from "react";
import { Link } from "react-router-dom";

// Inline footer style
const style = {
  background: "#450611 0% 0% no-repeat padding-box",
  minHeight: "6rem",
  textAlign: "left",
  paddingLeft: "10%",
  paddingRight: "10%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row",
};
const { innerWidth: width } = window;

// Inline text style
const styleText = {
  color: "white",
  fontSize: 16,
  textTransform: "uppercase",
  marginLeft: 20,
  display: width >= 800 ? "inline" : "none",
};

const container = {};

const rightContainer = {
  display: "flex",
  justifyContent: "flex-end",
};

// Create footer
const Footer = () => (
  <div>
    <div className="footer" style={style}>
      <div style={container}>
        <a
          href="https://hive.io"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <img
            src="img/footer/powered_hive.png"
            alt="Powered by Hive"
            style={{ height: width > 600 ? 60 : 40 }}
          />
        </a>
      </div>
      <div style={{ flexDirection: "column", display: "flex" }}>
        <Link
          style={{
            textDecoration: "none",
            color: "white",
            marginBottom: 10,
            textTransform: "uppercase",
            cursor: "pointer",
          }}
          to="/terms"
        >
          Terms of service
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "white",
            textTransform: "uppercase",
            cursor: "pointer",
            marginBottom: 10,
          }}
          to="/privacy"
        >
          Privacy
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "white",
            textTransform: "uppercase",
            cursor: "pointer",
          }}
          to="/fees"
        >
          Fees
        </Link>
      </div>
      <div style={rightContainer}>
        <a
          href="https://github.com/hive-keychain"
          target="_blank"
          style={{ textDecoration: "none" }}
          rel="noreferrer"
        >
          <span style={{ marginRight: "10vw" }}>
            <img
              src="img/footer/github.svg"
              alt="Github"
              style={{ verticalAlign: "middle" }}
            />
            <span style={styleText}>Visit our Github</span>
          </span>
        </a>
        <a href="https://peakd.com/@keychain" target="_blank" rel="noreferrer">
          <span>
            <img
              src="img/footer/see_on_hive.svg"
              alt="Hive"
              style={{ verticalAlign: "middle" }}
            />
            <span style={styleText}>Follow us on Hive</span>
          </span>
        </a>
      </div>
    </div>
    <div
      style={{
        width: "100%",
        background: "#450611 0% 0% no-repeat padding-box",
        color: "white",
        textAlign: "center",
        fontSize: 12,
        paddingBottom: 5,
      }}
    >
      ©2022 Hive Keychain Ltd
    </div>
  </div>
);

export default Footer;
