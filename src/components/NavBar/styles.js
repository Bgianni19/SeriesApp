import { makeStyles } from "@material-ui/core/styles";

export const useStylesNB = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
  },
  toolbar: {
    height: 100,
    alignItems: "flex-start",
    paddingTop: theme.spacing(4),
    backgroundColor: "#1d2228",
  },
  title: {
    fontSize: 26,
    textDecoration: "none",
    flexGrow: 1,
    alignSelf: "flex-start",
    color: "#f7f7f7",
  },
  button: {
    margin: "5.5px 4px",
    border: "1px solid #f7f7f7",
    height: 28,
    color: "#f7f7f7",
    backgroundColor: "transparent",
    borderColor: "#f7f7f7",
    "&:hover": { backgroundColor: "#fb8122" },
  },
  iconButton: {
    height: 39,
    width: 39,
    "&:hover": { backgroundColor: "transparent" },
  },
  icon: {
    height: 39,
    width: 39,
    color: "#f7f7f7",
    "&:hover": { color: "#fb8122" },
  },
}));

export const useStylesTS = makeStyles((theme) => ({
  buttonGroup: { margin: "5.5px 4px" },
  button: {
    height: 28,
    color: "#f7f7f7",
    backgroundColor: "transparent",
    borderColor: "#f7f7f7",
    "&:hover": {
      backgroundColor: "#fb8122",
    },
  },
}));
