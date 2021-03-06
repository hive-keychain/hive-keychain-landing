import React from "react";
import { Grid } from "@material-ui/core/";
import "../../css/containers/section.css";

// Create section
const Section = ({
  title,
  tag,
  background,
  direction,
  children,
  marginBottom,
  style,
}) => {
  // Here we defined inline styles inside the component because we want to use props as attributes
  const titleStyle = {
    color: "white",
    textTransform: "uppercase",
    fontSize: "2rem",
    fontFamily: "Montserrat",
    fontWeight: "600",
    margin: "0px",
    marginBottom: "3.5rem",
  };
  const styled = {
    background: background,
    marginBottom: marginBottom || 0,
    padding: "4rem 2.5rem",
  };

  // Rendering component
  return (
    <div className="section" style={{ ...styled, ...style }}>
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
