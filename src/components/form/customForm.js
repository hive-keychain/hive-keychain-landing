import React from "react";
import { Grid, Textfield } from "@material-ui/core/";

const createForm = inputs => {
  return inputs.map();
};

const CustomForm = ({ inputs }) => (
  <Grid container direction="column">
    {createForm(inputs)}
  </Grid>
);

export default CustomForm;
