import React from "react";
import { Grid } from "@material-ui/core/";
import PropTypes from "prop-types";

const Image = ({ name, src, maxHeight }) => {
  const style = {};
  const imgStyle = {
    maxHeight: maxHeight,
    borderRadius: "0 10px 10px 10px"
  };
  return (
    <Grid
      style={style}
      className="memberPanel"
      item
      xs={12}
      sm={6}
      md={4}
      lg={4}
    >
      <img style={imgStyle} className="imgSteemplus" src={src} alt={name} />
    </Grid>
  );
};

Image.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string,
  maxHeight: PropTypes.string
};

Image.defaultProps = {
  maxHeight: "15rem"
};

export default Image;
