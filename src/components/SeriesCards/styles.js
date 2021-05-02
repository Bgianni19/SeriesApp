import { makeStyles } from "@material-ui/core";
import { red, grey } from "@material-ui/core/colors";

export const useStylesASC = makeStyles((theme) => ({
  root: { height: `calc(100vh - 80px - 148px)`, overflowY: "auto" },
}));

export const useStylesSC = makeStyles((theme) => ({
  card: {
    width: 300,
    overflow: "hidden",
    margin: "auto",
    marginBottom: theme.spacing(4),
    backgroundColor: theme.palette.CardBackgroundColor,
    borderRadius: 6,
    boxShadow: "none",
  },
  image: {
    height: 440,
  },
  button: {
    color: grey[50],
    width: "100%",
    borderRadius: 6,
  },
}));

export const useStylesSCD = makeStyles((theme) => ({
  dataTitle: {
    width: "30%",
    borderBlockColor: red[400],
    color: theme.palette.FontColor,
  },
  data: {
    borderBlockColor: grey[400],
    color: theme.palette.FontColor,
    overflow: "hidden",
  },
}));
