import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core/";

const ContentSectionRL = ({ textAlign, children }) => {
  const labelStyle = {
    root: {
      textAlign: textAlign,
      fontSize: "1rem"
    }
  };

  const CustomizedLabel = withStyles(labelStyle)(Typography);
  return <CustomizedLabel variant="body1">{children}</CustomizedLabel>;
};

export default ContentSectionRL;
