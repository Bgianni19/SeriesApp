import { makeStyles, withStyles, InputBase, fade } from "@material-ui/core";

export const useStylesS = makeStyles((theme) => ({
  button: {
    height: "100%",
    borderRadius: "0 6px 6px 0",
    color: "#f7f7f7",
    backgroundColor: "#1d2228",
    "&:hover": { backgroundColor: "#fb8122" },
  },
  buttonIcon: { fontSize: 26 },
}));

export const SearchInput = withStyles((theme) => ({
  input: {
    borderRadius: "6px 0 0 6px",
    border: "1px solid #1d2228",
    borderRight: 0,
    fontSize: 16,
    width: "25vw",
    height: 24.5,
    paddingLeft: 16,
    paddingRight: 16,
    color: "#1d2228",
    backgroundColor: "#f7f7f7",
    transition: theme.transitions.create(["border-color", "box-shadow"]),

    "&:focus": {
      boxShadow: `${fade("#1d2228", 0.2)} 0 0 0.4rem 0.2rem`,
      borderColor: "#1d2228",
    },
  },
}))(InputBase);

export const useStylesSB = makeStyles((theme) => ({
  root: {
    padding: "20px 0",
  },
}));
