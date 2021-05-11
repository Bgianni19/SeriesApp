import { makeStyles } from "@material-ui/core";

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
    color: "#f7f7f7",
    width: "100%",
    borderRadius: 6,
    "&:hover": { backgroundColor: "#0b0e11" },
  },
}));

export const useStylesSCD = makeStyles((theme) => ({
  dataTitle: {
    width: "30%",
    borderBlockColor: "#fb8122",
    color: theme.palette.FontColor,
  },
  data: {
    borderBlockColor: "#fb8122",
    color: theme.palette.FontColor,
    overflow: "hidden",
  },
}));
