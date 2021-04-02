import { makeStyles } from "@material-ui/core/styles";

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
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-start",
  },
}));
