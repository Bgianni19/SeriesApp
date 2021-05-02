import { makeStyles, withStyles, InputBase, fade } from "@material-ui/core";
import { grey, blueGrey } from "@material-ui/core/colors";

export const useStylesS = makeStyles((theme) => ({
  button: {
    height: "100%",
    borderRadius: "0 6px 6px 0",
    paddingLeft: 26,
    paddingRight: 26,
    color: grey[50],
    backgroundColor: blueGrey[600],
    "&:hover": { backgroundColor: blueGrey[400] },
  },
}));

export const SearchInput = withStyles((theme) => ({
  input: {
    borderRadius: "6px 0 0 6px",
    border: `0.5px solid ${grey[500]}`,
    fontSize: 14,
    width: "25vw",
    height: 24.5,
    paddingLeft: 16,
    paddingRight: 16,
    color: grey[600],
    backgroundColor: grey[50],
    transition: theme.transitions.create(["border-color", "box-shadow"]),

    "&:focus": {
      boxShadow: `${fade(grey[600], 0.2)} 0 0 0.2rem 0.2rem`,
      borderColor: grey[600],
    },
  },
}))(InputBase);

export const useStylesSB = makeStyles((theme) => ({
  root: {
    padding: "20px 0",
  },
}));
