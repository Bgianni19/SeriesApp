import { makeStyles } from "@material-ui/core";
import { red, grey } from "@material-ui/core/colors";

export const useStylesABC = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.AppBackgroundColor,
  },
}));

export const useStylesBC = makeStyles((theme) => ({
  card: {
    width: 300,
    overflow: "hidden",
    margin: "auto",
    backgroundColor: theme.palette.CardBackgroundColor,
    borderRadius: 2,
    boxShadow: "none",
  },
  image: {
    height: 440,
  },
  button: {
    color: grey[100],
    width: "100%",
    borderRadius: 2,
  },
}));

export const useStylesBCD = makeStyles((theme) => ({
  dataTitle: {
    width: "30%",
    borderBlockColor: red[500],
    color: theme.palette.FontColor,
  },
  data: {
    borderBlockColor: grey[500],
    color: theme.palette.FontColor,
    overflow: "hidden",
  },
}));
