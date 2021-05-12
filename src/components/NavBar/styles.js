import { makeStyles } from "@material-ui/core/styles";

export const useStylesNB = makeStyles((theme) => ({
  toolbar: {
    height: 82,
    alignItems: "flex-start",
    padding: 16,
    backgroundColor: "#1d2228",
  },
  title: {
    margin: "7px 4px",
    fontSize: 32,
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
  iconButton: { padding: "auto", "&:hover": { backgroundColor: "#0b0e11" } },
  icon: { fontSize: 28, color: "#f7f7f7" },
  menuItems: {
    color: "#1d2228",
    backgroundColor: "#f7f7f7",
    "&:hover": { backgroundColor: "#fb8122" },
  },
}));

export const useStylesTS = makeStyles((theme) => ({
  iconButton: { padding: "auto", "&:hover": { backgroundColor: "#0b0e11" } },
  icon: { fontSize: 28, color: "#f7f7f7" },
}));
