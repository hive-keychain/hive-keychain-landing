import React from "react";
import * as Const from "../../utils/const";

// Function used to return create inline style depending on props
const getStyle = align => {
  return {
    marginTop: "0.75rem",
    color: Const.COLOR_TEXT_DESC,
    fontSize: "1rem",
    textAlign: align || "left"
  };
};

// Create content description component
const ContentDescription = ({ content, align }) => (
  <p style={getStyle(align)}>{content}</p>
);

export default ContentDescription;
