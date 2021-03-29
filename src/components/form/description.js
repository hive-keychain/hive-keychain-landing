import React from "react";
import { Grid } from "@material-ui/core/";
import Separator from "../../components/separator";

const styleTitle = {
  fontSize: "2em",
  marginBottom: "1.25rem",
  fontWeight: "bold",
  color: "#3c4a97"
};

const styleContent = {
  textAlign: "left"
};

const Description = ({ children, title, tag }) => (
  <Grid
    item
    xs={12}
    sm={6}
    md={6}
    lg={6}
    container
    direction="column"
    justify="flex-start"
    alignItems="flex-start"
    className="description"
  >
    <span id={tag} style={styleTitle}>
      {title}
    </span>
    <Separator position="flex-start" />
    <div style={styleContent}>{children}</div>
  </Grid>
);

export default Description;
