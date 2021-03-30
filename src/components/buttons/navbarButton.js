import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core/";

// Create navbar button
// onclick method, colors and margin are passed as props
const NavbarButton = ({
  text,
  color1,
  color2,
  href,
  float,
  itemVisible,
  onClick,
  large,
  active,
  children,
  id,
}) => {
  const buttonStyle = {
    root: {
      fontSize: "large",
      transition: "1s",
      WebkitTransition: "1s" /* Safari 3.1 to 6.0 */,
      float: float,
      border: "none",
      backgroundColor: color1,
      color: active ? color2 : "lightgrey",
      fontWeight: active ? "bold" : "inherit",
      display: itemVisible ? "block !important" : "none !important",
      "&:hover": {
        backgroundColor: color2,
        color: color1,
      },
    },
  };
  const CustomizedButton = withStyles(buttonStyle)(Button);
  return (
    <CustomizedButton id={id} href={href} onClick={onClick}>
      {children}
      {text}
    </CustomizedButton>
  );
};

export default NavbarButton;
