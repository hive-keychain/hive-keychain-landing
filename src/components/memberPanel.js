import React from "react";
import { Grid } from "@material-ui/core/";
import * as Const from "../utils/const";
import Parser from "html-react-parser";

const style = {};

// Inline style for avatar
const imgStyle = {
  maxHeight: "15rem",
  borderRadius: "0 10px 10px 10px",
  marginBottom: "1rem"
};

// Inline style for name label
const nameStyle = {
  fontSize: "1.25rem",
  fontWeight: "600",
  color: Const.COLOR_NAME_MEMBER,
  textDecoration: "none",
  fontFamily: "Roboto, sans-serif",
  textTransform: "uppercase"
};

// Inline style for username label
const usernameStyle = {
  fontSize: "1.25rem",
  fontWeight: "600",
  color: Const.COLOR_USERNAME_MEMBER,
  textDecoration: "none"
};

// Inline style for position label
const positionStyle = {
  fontSize: "1rem",
  fontWeight: "300",
  color: Const.COLOR_POSITION_MEMBER
};

// Create member panel. This component is used to describe members of SteemPlus team
const MemberPanel = ({ name, position, username }) => (
  <Grid
    style={style}
    className="memberPanel"
    item
    xs={12}
    sm={6}
    md={3}
    lg={3}
    container
    direction="column"
    justify="space-evenly"
    alignItems="center"
  >
    <img
      style={imgStyle}
      className="imgMember"
      src={`public/img/teamMembers/${username}.png`}
      alt={name}
    />

    <span style={nameStyle}>{name}</span>
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={`https://steemit.com/@${username}`}
      style={usernameStyle}
    >
      @{username}
    </a>
    <span style={positionStyle}>{Parser(position)}</span>
  </Grid>
);

export default MemberPanel;
