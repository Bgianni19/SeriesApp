import { makeStyles } from "@material-ui/core/styles";
import { blueGrey } from "@material-ui/core/colors";

export const useStylesNB = makeStyles((theme) => ({
  root: {
    position: "static",
    boxShadow: "none",
    flexGrow: 1,
  },
  toolbar: {
    height: 126,
    alignItems: "flex-start",
    paddingTop: theme.spacing(4),
    backgroundColor: blueGrey[600],
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-start",
  },
}));
