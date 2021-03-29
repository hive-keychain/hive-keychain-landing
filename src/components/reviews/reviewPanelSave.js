import React from "react";
import { Grid } from "@material-ui/core/";
import ImageReview from "./imageReview";

const style = {};

const titleStyle = {
  fontFamily: "Satisfy, cursive",
  color: "darkgrey",
  fontSize: "1.5rem",
  marginTop: "0.25rem"
};

const reviewStyle = {
  fontSize: "1rem"
};

const usernameStyle = {
  fontSize: "1rem",
  fontWeight: "600",
  color: "#3c4a97",
  textDecoration: "none"
};

const ReviewPanel = ({ username, name, title, review }) => (
  <Grid
    style={style}
    className="reviewPanel"
    item
    xs={12}
    sm={12}
    md={12}
    lg={12}
    container
    direction="column"
    justify="space-evenly"
    alignItems="center"
  >
    <ImageReview srcSet={`https://steemitimages.com/u/${username}/avatar`} />

    <span style={titleStyle}>"{title}"</span>

    <span style={reviewStyle}>{review}</span>

    <span>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={`https://steemit.com/@${username}`}
        style={usernameStyle}
      >
        @{username}
      </a>
    </span>
  </Grid>
);

export default ReviewPanel;
