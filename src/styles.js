import { makeStyles } from "@material-ui/core/styles";

export const useStylesApp = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: theme.palette.CardBackgroundColor,
  },
}));
