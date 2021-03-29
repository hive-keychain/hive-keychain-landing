import React from "react";
import { Grid } from "@material-ui/core/";
import * as Const from "../utils/const";

const style = {
  borderBottom: "solid 3px",
  borderBottomColor: Const.SEPARATOR_COLOR,
  marginBottom: "2rem",
  width: "5rem"
};

const Separator = ({ position }) => (
  <Grid container direction="row" justify={position} alignItems="center">
    <div className="separator" style={style} />
  </Grid>
);

export default Separator;
