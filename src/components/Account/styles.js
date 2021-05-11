import { makeStyles, withStyles, InputBase } from "@material-ui/core";

export const useStylesA = makeStyles((theme) => ({
  root: { height: `calc(100% - 132px)` },
  paper: {
    padding: 38,
    textAlign: "center",
    borderRadius: 8,
    backgroundColor: "#e2e2e2",
  },
  title: { color: "#1d2228", fontSize: 32, marginBottom: 38 },
  alert: { margin: "12px 0", borderRadius: 8 },
  button: {
    fontSize: 16,
    color: "#f7f7f7",
    width: 320,
    boxSizing: "border-box",
    height: 46,
    margin: "18px 0 38px 0",
    borderRadius: 8,
    backgroundColor: "#fb8122",
    "&:hover": { backgroundColor: "#1d2228" },
  },
  forgotPassword: {
    textDecoration: "underline",
    fontSize: 18,
  },
  createAccount: {
    textDecoration: "none",
    fontSize: 16,
    color: "#1d2228",
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
    border: "1px solid #1d2228",
    fontSize: 16,
    width: 320,
    boxSizing: "border-box",
    height: 52,
    paddingLeft: 16,
    paddingRight: 16,
    color: "#1d2228",
    backgroundColor: "#f7f7f7",
  },
}))(InputBase);

export const Password = withStyles((theme) => ({
  input: {
    borderRadius: "0 0 8px 8px",
    borderRight: "1px solid #1d2228",
    borderLeft: "1px solid #1d2228",
    borderBottom: "1px solid #1d2228",
    borderTop: 0,
    fontSize: 16,
    width: 320,
    boxSizing: "border-box",
    height: 52,
    paddingLeft: 16,
    paddingRight: 16,
    color: "#1d2228",
    backgroundColor: "#f7f7f7",
  },
}))(InputBase);

export const SignupPassword = withStyles((theme) => ({
  input: {
    borderRadius: 0,
    borderRight: "1px solid #1d2228",
    borderLeft: "1px solid #1d2228",
    borderBottom: "1px solid #1d2228",
    borderTop: 0,
    fontSize: 16,
    width: 320,
    boxSizing: "border-box",
    height: 52,
    paddingLeft: 16,
    paddingRight: 16,
    color: "#1d2228",
    backgroundColor: "#f7f7f7",
  },
}))(InputBase);
