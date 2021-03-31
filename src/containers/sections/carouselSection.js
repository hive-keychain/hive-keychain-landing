import React from "react";
import { Grid } from "@material-ui/core";

const styled = {
  padding: "50px 0",
};

const titleStyle = {
  color: "white",
  textTransform: "uppercase",
  fontSize: "2rem",
  fontFamily: "Montserrat",
  fontWeight: "600",
  margin: "0px",
  marginBottom: "3.5rem",
};

// Create component. Carousel section is a section which contain as main element a carousel
// Content of the carousel are defined in the children property
const CarouselSection = ({ title, tag, children, style }) => (
  <div className="section carousel-section" style={{ ...styled, ...style }}>
    <p id={tag} style={titleStyle}>
      {title}
    </p>
    <Grid container direction="row" justify="center" alignItems="center">
      {children}
    </Grid>
  </div>
);

export default CarouselSection;
