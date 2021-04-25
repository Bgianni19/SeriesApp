import { makeStyles } from "@material-ui/core";

export const useStylesI = makeStyles((theme) => ({
  root: {
    margin: "36px auto 0 auto",
    height: 180,
    width: "90%",
    borderRadius: 6,
    overflow: "hidden",
    backgroundColor: theme.palette.CardBackgroundColor,
  },
  button: {
    height: "100%",
    borderRadius: 0,
    color: theme.palette.FontColor,
    backgroundColor: theme.palette.ButtonBackgroundColor,
  },
  buttonLabel: { fontSize: 40 },
}));
