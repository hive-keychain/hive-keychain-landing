import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core/";

// Represent the content for the fancy cards
// Need to use withStyles because it is a Material-UI component
const ContentFancyCard = withStyles({
  root: {
    marginTop: "0.75rem",
    color: "darkgrey",
    fontSize: "1rem",
    textAlign: "left"
  }
})(Typography);

export default ContentFancyCard;
