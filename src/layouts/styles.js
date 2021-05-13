import { makeStyles } from "@material-ui/core/styles";

export const useStylesML = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.AppBackgroundColor,
    fontFamily: "Roboto, sans-serif",
    height: "100vh",
  },
}));
