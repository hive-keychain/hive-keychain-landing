import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core/";
import * as Const from "../../utils/const";

const TitleStandardCard = withStyles({
  root: {
    color: Const.CARD_TITLE_COLOR,
    fontSize: "large",
    fontWeight: "bold"
  }
})(Typography);

export default TitleStandardCard;
