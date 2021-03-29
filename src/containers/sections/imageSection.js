import React from "react";
import { Grid } from "@material-ui/core/";
import "../../css/containers/section.css";
import * as Const from "../../utils/const";

// Image section is a section with a background image
const ImageSection = ({ title, tag, src, children, justify }) => {
  const titleStyle = {
    color: Const.TITLE_COLOR,
    textTransform: "uppercase",
    fontSize: "2rem",
    fontFamily: "Montserrat",
    fontWeight: "600",
    margin: "0px",
    marginBottom: "3.5rem"
  };
  const styleImage = {
    backgroundImage: `url(public/img/${src})`,
    backgroundSize: "cover",
    minHeight: "30rem"
  };

  const style = {
    marginBottom: "3.5rem"
  };

  return (
    <div className="section" style={style}>
      <p id={tag} style={titleStyle}>
        {title}
      </p>
      <Grid
        container
        direction="row"
        justify={justify || "space-evenly"}
        alignItems="center"
        spacing={24}
        style={styleImage}
      >
        {children}
      </Grid>
    </div>
  );
};

export default ImageSection;
