import { makeStyles } from "@material-ui/core";

export const useStylesASC = makeStyles((theme) => ({
  root: { height: `calc(100vh - 80px - 132px)`, overflowY: "auto" },
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
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  paper: {
    padding: 28,
    width: "50%",
    borderRadius: 6,
    backgroundColor: theme.palette.CardBackgroundColor,
    color: theme.palette.FontColor,
  },
  title: { fontSize: 34, fontWeight: 900 },
  synopsis: { marginTop: 26, fontSize: 22 },
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
