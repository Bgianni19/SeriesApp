import { makeStyles } from "@material-ui/core";
import { red, grey } from "@material-ui/core/colors";

export const useStylesBC = makeStyles((theme) => ({
  root: {
    width: 300,
    overflow: "initial",
    margin: "auto",
    backgroundColor: theme.palette.BackgroundColor,
    borderRadius: 2,
    boxShadow: "none",
  },
  image: {
    height: 380,
  },
  button: {
    color: grey[100],
    width: "100%",
    borderRadius: 2,
  },
}));

export const useStylesBCD = makeStyles((theme) => ({
  name: {
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
