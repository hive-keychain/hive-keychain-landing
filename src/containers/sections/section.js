import React from "react";
import { Grid } from "@material-ui/core/";
import "../../css/containers/section.css";
import * as Const from "../../utils/const";

// Create section
const Section = ({
  title,
  tag,
  background,
  direction,
  children,
  marginBottom
}) => {
  // Here we defined inline styles inside the component because we want to use props as attributes
  const titleStyle = {
    color: Const.TITLE_COLOR,
    textTransform: "uppercase",
    fontSize: "2rem",
    fontFamily: "Montserrat",
    fontWeight: "600",
    margin: "0px",
    marginBottom: "3.5rem"
  };
  const style = {
    background: background,
    marginBottom: marginBottom || "3.5rem",
    padding: "2.5rem"
  };

  // Rendering component
  return (
    <div className="section" style={style}>
      <p id={tag} style={titleStyle}>
        {title}
      </p>
      <Grid
        container
        direction={direction || "row"}
        justify="space-evenly"
        alignItems="center"
        spacing={24}
      >
        {children}
      </Grid>
    </div>
  );
};

export default Section;
