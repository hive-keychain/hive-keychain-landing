import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Toolbar,
  CardActions
} from "@material-ui/core/";
import ImageReview from "./imageReview";
import { withStyles } from "@material-ui/core/styles";

const reviewStyle = {
  fontSize: "1rem"
};

const usernameStyle = {
  fontSize: "1rem",
  fontWeight: "600",
  color: "#3c4a97",
  textDecoration: "none"
};

const styleToobar = {
  root: {
    justifyContent: "center",
    paddingLeft: "0px",
    paddingRight: "0px"
  }
};

const style = {
  root: {
    marginLeft: "1rem",
    marginRight: "1rem",
    marginBottom: "1rem",
    borderRadius: "33px",
    backgroundImage: "linear-gradient(137deg, #ddefff, #ffffff)",
    boxShadow: "6px 6px 8px rgba(0, 0, 0, 0.28)"
  }
};

const styleContent = {
  root: {
    marginTop: "0.75rem",
    color: "#21496C",
    fontSize: "1rem",
    textAlign: "left",
    minHeight: "17rem",
    fontFamily: "Roboto",
    fontStyle: "italic"
  }
};

const styleIcon = {
  width: "4rem",
  height: "4rem",
  marginBottom: "2rem"
};

const CustomCard = withStyles(style)(Card);

const CustomToolbar = withStyles(styleToobar)(Toolbar);
const CustomCardContent = withStyles(styleContent)(CardContent);

const ReviewPanel = ({ username, review }) => (
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
    key={`review-${username}`}
  >
    <CustomCard>
      <CustomCardContent className="fancy-card-content">
        <CustomToolbar>
          <img
            style={styleIcon}
            src={`../public/img/review_quote.svg`}
            alt=""
          />
        </CustomToolbar>
        <span style={reviewStyle}>{review}</span>
      </CustomCardContent>
      <CardActions>
        <CustomToolbar>
          <ImageReview
            srcSet={`https://steemitimages.com/u/${username}/avatar`}
          />
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
        </CustomToolbar>
      </CardActions>
    </CustomCard>
  </Grid>
);

export default ReviewPanel;
