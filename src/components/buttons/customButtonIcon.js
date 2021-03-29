import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core/";

// Create custom button
// onclick method, colors and margin are passed as props
const CustomButtonIcon = ({ text, color1, color2, marginTop, icon, href }) => {
  const buttonStyle = {
    root: {
      fontSize: "1.25rem",
      marginTop: marginTop,
      backgroundColor: color1,
      color: color2,
      borderRadius: "30px",
      "&:hover": {
        backgroundColor: color2,
        color: color1
      }
    }
  };

  const styleIcon = {
    height: "2rem",
    width: "2rem",
    marginRight: "0.5rem",
    "&:hover": {
      filter: "invert(.5) sepia(2) saturate(5) hue-rotate(175deg)"
    }
  };

  const CustomizedButton = withStyles(buttonStyle)(Button);
  return (
    <CustomizedButton variant="contained" href={href} target="_blank">
      <img src={`public/img/${icon}`} alt="" style={styleIcon} />
      <span>{text}</span>
    </CustomizedButton>
  );
};

export default CustomButtonIcon;
