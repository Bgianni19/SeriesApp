import { makeStyles } from "@material-ui/core/styles";

export const useStylesNB = makeStyles((theme) => ({
  toolbar: {
    height: 82,
    alignItems: "flex-start",
    padding: 16,
    backgroundColor: "#1d2228",
  },
  title: {
    margin: "10px 4px",
    fontSize: 26,
    textDecoration: "none",
    flexGrow: 1,
    alignSelf: "flex-start",
    color: "#f7f7f7",
  },
  iconButton: { "&:hover": { backgroundColor: "#0b0e11" } },
  icon: { fontSize: 28, color: "#f7f7f7" },
  menuItems: {
    color: "#1d2228",
    backgroundColor: "#f7f7f7",
    "&:hover": { backgroundColor: "#fb8122" },
  },
}));

export const useStylesTS = makeStyles((theme) => ({
  iconButton: { "&:hover": { backgroundColor: "#0b0e11" } },
  icon: { fontSize: 28, color: "#f7f7f7" },
}));
