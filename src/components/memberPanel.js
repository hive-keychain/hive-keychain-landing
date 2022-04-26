import { Grid } from "@material-ui/core/";
import Parser from "html-react-parser";
import React from "react";

const width = window.innerWidth;
// Inline style for avatar
const imgStyle = {
  maxHeight: width > 600 ? "15rem" : "8rem",
  borderRadius: "0 10px 10px 10px",
  marginBottom: "1rem",
};

// Inline style for name label
const nameStyle = {
  fontSize: width > 600 ? "1.25rem" : "1rem",
  fontWeight: "600",
  color: "lightgrey",
  textDecoration: "none",
  fontFamily: "Roboto, sans-serif",
  textTransform: "uppercase",
};

// Inline style for username label
const usernameStyle = {
  fontSize: width > 600 ? "1.25rem" : "1rem",
  fontWeight: "600",
  color: "white",
  textDecoration: "none",
};

// Inline style for position label
const positionStyle = {
  fontSize: width > 600 ? "1rem" : "0.75rem",
  fontWeight: "300",
  color: "lightgrey",
  marginBottom: width > 600 ? 0 : 20,
};

// Create member panel. This component is used to describe members of SteemPlus team
const MemberPanel = ({ name, position, username }) => (
  <Grid
    className="memberPanel"
    item
    xs={6}
    sm={6}
    md={2}
    lg={2}
    container
    direction="column"
    justify="space-evenly"
    alignItems="center"
  >
    <img
      style={imgStyle}
      className="imgMember"
      src={`https://images.hive.blog/u/${username}/avatar`}
      alt={name}
    />

    <span style={nameStyle}>{name}</span>
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={`https://peakd.com/@${username}`}
      style={usernameStyle}
    >
      @{username}
    </a>
    <span style={positionStyle}>{Parser(position)}</span>
  </Grid>
);

export default MemberPanel;
