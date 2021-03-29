import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core/";
import * as Const from "../../utils/const";

// Represent the title for the app
// Need to use withStyles because it is a Material-UI component
const TitleApp = withStyles({
  root: {
    color: Const.TITLE_COLOR,
    marginLeft: "0.5rem",
    marginRight: "0.5rem",
    fontWeight: "bold"
  }
})(Typography);

export default TitleApp;
