import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core/";
import * as Const from "../../utils/const";

// Represent the title for the fancy cards
// Need to use withStyles because it is a Material-UI component
const TitleFancyCard = withStyles({
  root: {
    color: Const.CARD_TITLE_COLOR,
    fontSize: "1.25rem",
    fontFamily: "Roboto, sans-serif",
    textTransform: "uppercase"
  }
})(Typography);

export default TitleFancyCard;
