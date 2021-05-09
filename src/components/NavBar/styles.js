import { makeStyles } from "@material-ui/core/styles";
import { blueGrey, grey } from "@material-ui/core/colors";

export const useStylesNB = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
  },
  toolbar: {
    height: 100,
    alignItems: "flex-start",
    paddingTop: theme.spacing(4),
    backgroundColor: blueGrey[600],
  },
  title: {
    fontSize: 26,
    textDecoration: "none",
    flexGrow: 1,
    alignSelf: "flex-start",
    color: grey[50],
    "&:hover": {
      textDecoration: "underline",
      textDecorationThickness: 2,
      textDecorationColor: grey[50],
    },
  },
  titleLink: { textDecoration: "none", color: blueGrey[50] },
  iconButton: { height: 39, width: 39 },
  icon: { fontSize: 28, color: grey[50] },
}));

export const useStylesTS = makeStyles((theme) => ({
  buttonGroup: { margin: "5.5px 4px" },
  button: {
    height: 28,
    color: grey[50],
    backgroundColor: "transparent",
    borderColor: grey[400],
    "&:hover": { backgroundColor: blueGrey[900] },
  },
}));
