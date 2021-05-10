import { makeStyles, withStyles, InputBase } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

export const useStylesA = makeStyles((theme) => ({
  root: { height: `calc(100% - 132px)` },
  paper: {
    padding: 38,
    textAlign: "center",
    borderRadius: 8,
    backgroundColor: grey[200],
  },
  title: { color: grey[800], fontSize: 32, marginBottom: 38 },
  alert: { margin: "12px 0", borderRadius: 8 },
  button: {
    fontSize: 16,
    color: grey[800],
    width: 320,
    boxSizing: "border-box",
    height: 46,
    margin: "18px 0 38px 0",
    borderRadius: 8,
    backgroundColor: grey[400],
  },
  forgotPassword: {
    textDecoration: "underline",
    fontSize: 18,
  },
  createAccount: {
    textDecoration: "none",
    fontSize: 16,
    color: grey[800],
    margin: "28px auto 0 4px",
  },
  createAccountLink: {
    textDecoration: "none",
    fontSize: 16,
    margin: "28px auto 0 4px",
  },
}));

export const Email = withStyles((theme) => ({
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
    borderRight: `1px solid ${grey[500]}`,
    borderLeft: `1px solid ${grey[500]}`,
    borderBottom: `1px solid ${grey[500]}`,
    borderTop: 0,
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

export const SignupPassword = withStyles((theme) => ({
  input: {
    borderRadius: 0,
    borderRight: `1px solid ${grey[500]}`,
    borderLeft: `1px solid ${grey[500]}`,
    borderBottom: `1px solid ${grey[500]}`,
    borderTop: 0,
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
