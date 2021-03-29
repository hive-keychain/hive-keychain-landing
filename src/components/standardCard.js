import React from "react";
import { Typography, Toolbar, Grid } from "@material-ui/core/";
import "../css/components/standardCard.css";

const StandardCard = ({ title, content, children }) => (
  <Grid
    className={`stardard-card card-${title}`}
    item
    xs={12}
    sm={6}
    md={4}
    lg={4}
  >
    <Toolbar>
      {children}
      <Typography variant="title" color="primary">
        {title}
      </Typography>
    </Toolbar>
    {content}
  </Grid>
);

export default StandardCard;
