import React from "react";
import {
  Card,
  CardContent,
  Grid,
  CardActions,
  Toolbar
} from "@material-ui/core/";
import TitleFancyCard from "../components/labels/titleFancyCard";
import AnchorLink from "react-anchor-link-smooth-scroll";
import CustomButton from "../components/buttons/customButton";
import * as Const from "../utils/const";
import { withStyles } from "@material-ui/core/styles";

import { connect } from "react-redux";

const linkStyle = {
  textDecoration: "none",
  color: "#3c4a97",
  cursor: "pointer",
  fontWeight: "500",
  "&:hover": {
    textDecoration: "underline !important"
  }
};

const styleCardAction = {
  display: "inline-block",
  marginBottom: "2rem",
  width: "100%"
};

const styleContent = {
  root: {
    marginTop: "0.75rem",
    color: "#21496C",
    fontSize: "1rem",
    textAlign: "left",
    minHeight: "18rem"
  }
};

const styleIcon = {
  width: "2rem",
  height: "2rem",
  marginRight: "0.5rem"
};

const styleToolbar = {
  root: {
    paddingLeft: "0px"
  }
};

const style = {
  root: {
    borderRadius: "33px",
    backgroundImage: "linear-gradient(137deg, #ddefff, #ffffff)",
    boxShadow: "6px 6px 8px rgba(0, 0, 0, 0.28)",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  }
};

const CustomCard = withStyles(style)(Card);

const CustomToolbar = withStyles(styleToolbar)(Toolbar);
const CustomCardContent = withStyles(styleContent)(CardContent);

const createLink = (link, setPage) => {
  switch (link.type) {
    case "anchor":
      return (
        <AnchorLink style={linkStyle} href={`#${link.to}`}>
          <CustomButton
            text={link.text}
            color1={Const.TITLE_COLOR}
            color2="white"
          />
        </AnchorLink>
      );
    case "internal":
      return (
        <span style={linkStyle} onClick={() => setPage(link.to)} href="">
          <CustomButton
            text={link.text}
            color1={Const.TITLE_COLOR}
            color2="white"
          />
        </span>
      );
    case "external":
      return (
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={link.to}
          style={linkStyle}
        >
          <CustomButton
            text={link.text}
            color1={Const.TITLE_COLOR}
            color2="white"
          />
        </a>
      );
    default:
      break;
  }
};

const FancyCard = ({ title, content, icon, link, setPage }) => (
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <CustomCard
      classes={{
        root: `fancy-card card-${title}`
      }}
    >
      <CustomCardContent className="fancy-card-content">
        <TitleFancyCard>
          <CustomToolbar>
            <img style={styleIcon} src={`../public/img/${icon}`} alt={icon} />
            <TitleFancyCard variant="title" color="primary">
              {title}
            </TitleFancyCard>
          </CustomToolbar>
        </TitleFancyCard>
        <span style={styleContent}>{content}</span>
      </CustomCardContent>
      <CardActions style={styleCardAction}>
        {createLink(link, setPage)}
      </CardActions>
    </CustomCard>
  </Grid>
);

const mapStateToProps = state => {
  return {
    page: state.nav.page
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setPage: page => {
      dispatch({
        type: "SET_PAGE",
        payload: page
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FancyCard);
