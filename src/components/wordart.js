import React from "react";
import * as Data from "../jsons/data.json";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";

const style = { height: "auto", width: "100%" };

const onClick = setActiveFeature => {
  setTimeout(() => {
    let selectedFeature = window.location.href.replace(
      `${window.location.origin}/#`,
      ""
    );
    selectedFeature = selectedFeature.replace("%20", " ");
    selectedFeature = selectedFeature.replace("%2B", "+");
    window.history.pushState("SteemPlus", "SteemPlus", "/");
    selectedFeature = Data.features.data.findIndex(
      f => f.title === selectedFeature
    );
    if (selectedFeature !== -1) setActiveFeature(selectedFeature);
  }, 50);
};

const WordArt = ({ url, setActiveFeature }) => (
  <Grid item xs={12} sm={6}>
    <div
      style={style}
      data-wordart-src={url}
      data-wordart-show-attribution
      onClick={() => onClick(setActiveFeature)}
    />
  </Grid>
);
const mapStateToProps = state => {
  return {
    activeFeature: state.nav.activeFeature
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setActiveFeature: feature => {
      dispatch({
        type: "SET_ACTIVE_FEATURE",
        payload: feature
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WordArt);
