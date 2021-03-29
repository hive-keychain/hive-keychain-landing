import { Avatar } from "@material-ui/core/";
import { withStyles } from "@material-ui/core/styles";

// Create image review panel. Need to use withStyles because Avatar is a Material-UI component
const ImageReview = withStyles({
  root: {
    width: "3rem",
    height: "3rem",
    marginRight: "0.5rem"
  }
})(Avatar);

export default ImageReview;
