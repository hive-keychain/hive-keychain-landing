import React from "react";
import { Grid } from "@material-ui/core/";
import "../../css/containers/section.css";

const SectionLeftRight = ({
  children,
  direction,
  background1,
  background2
}) => {
  const style = {
    marginBottom: "3.5rem",
    backgroundImage: `linear-gradient(to right, ${background1}, ${background2})`,
    padding: "2.5rem 0 2.5rem 0"
  };
  return (
    <div className="section" style={style}>
      <Grid
        container
        direction={direction}
        justify="space-evenly"
        alignItems="flex-start"
      >
        {children}
      </Grid>
    </div>
  );
};

export default SectionLeftRight;
