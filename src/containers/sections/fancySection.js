import React from "react";
import { Card, CardContent, Grid } from "@material-ui/core/";
import { withStyles } from "@material-ui/core/styles";

const styleContent = {
  root: {
    marginTop: "0.75rem",
    color: "#21496C",
    fontSize: "1rem",
    textAlign: "left"
  }
};

const style = {
  root: {
    borderRadius: "33px",
    backgroundImage: "linear-gradient(137deg, #ddefff, #ffffff)",
    boxShadow: "6px 6px 8px rgba(0, 0, 0, 0.28)",
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: "3.5rem",
    marginBottom: "1rem"
  }
};

const CustomCard = withStyles(style)(Card);

const CustomCardContent = withStyles(styleContent)(CardContent);

const FancySection = ({ children }) => (
  <CustomCard>
    <CustomCardContent>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        {children}
      </Grid>
    </CustomCardContent>
  </CustomCard>
);

export default FancySection;
