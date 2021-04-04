import { makeStyles, withStyles, InputBase, fade } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

export const useStylesS = makeStyles((theme) => ({
  root: {
    padding: "26px 0",
    backgroundColor: theme.palette.AppBackgroundColor,
  },
  button: {
    height: "100%",
    borderRadius: 2,
    marginLeft: 26,
    paddingLeft: 26,
    paddingRight: 26,
    color: grey[200],
    backgroundColor: grey[500],
    "&:hover": { backgroundColor: grey[700] },
  },
}));

export const SearchInput = withStyles((theme) => ({
  input: {
    borderRadius: 2,
    border: `0.5px solid ${grey[500]}`,
    fontSize: 14,
    width: "25vw",
    padding: "10px 16px",
    backgroundColor: grey[50],
    transition: theme.transitions.create(["border-color", "box-shadow"]),

    "&:focus": {
      boxShadow: `${fade(grey[500], 0.2)} 0 0 0.2rem 0.2rem`,
      borderColor: grey[500],
    },
  },
}))(InputBase);
