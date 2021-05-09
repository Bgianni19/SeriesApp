import { makeStyles, withStyles, InputBase } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

export const useStylesPA = makeStyles((theme) => ({
  root: { height: `calc(100% - 132px)` },
  title: { fontSize: 26, marginBottom: 18 },
  button: {
    fontSize: 16,
    padding: "8px 20px",
    margin: "18px 8px",
  },
}));

export const Username = withStyles((theme) => ({
  input: {
    borderRadius: "8px 8px 0 0",
    border: `1px solid ${grey[500]}`,
    fontSize: 16,
    width: 320,
    boxSizing: "border-box",
    height: 52,
    paddingLeft: 16,
    paddingRight: 16,
    color: grey[600],
    backgroundColor: grey[50],
  },
}))(InputBase);

export const Password = withStyles((theme) => ({
  input: {
    borderRadius: "0 0 8px 8px",
    border: `1px solid ${grey[500]}`,
    fontSize: 16,
    width: 320,
    boxSizing: "border-box",
    height: 52,
    paddingLeft: 16,
    paddingRight: 16,
    color: grey[600],
    backgroundColor: grey[50],
  },
}))(InputBase);
