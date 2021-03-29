import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core/";

// Create custom button
// onclick method, colors and margin are passed as props
const CustomButton = ({
  text,
  color1,
  color2,
  marginTop,
  marginBottom,
  href,
  onClick
}) => {
  const buttonStyle = {
    root: {
      marginLeft: "1rem",
      marginRight: "1rem",
      fontSize: "1.25rem",
      marginTop: marginTop,
      marginBottom: marginBottom,
      backgroundColor: color1,
      color: color2,
      borderRadius: "30px",
      "&:hover": {
        backgroundColor: color2,
        color: color1
      }
    }
  };
  const CustomizedButton = withStyles(buttonStyle)(Button);
  return (
    <CustomizedButton
      variant="contained"
      href={href}
      target="_blank"
      onClick={onClick}
    >
      {text}
    </CustomizedButton>
  );
};

export default CustomButton;
