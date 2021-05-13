import { useStylesA, ForgotPasswordEmail } from "./styles";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Paper, Button } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useAuth } from "../../base/context/AuthContext";
import {
  forgotPassword,
  resetPassword,
  alreadyHaveAnAccount,
  login,
} from "../texts";

const ForgotPasswordAccount = () => {
  const classes = useStylesA();

  const [email, setEmail] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const { forgotPasswordAuth } = useAuth();

  const handleForgotPassword = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      setError("");
      await forgotPassword(email);
      setMessage("Email sent! Check your inbox.");
    } catch {
      setError("Failed, please try again!");
    }
    setLoading(false);
  };

  return (
    <Grid
      component="form"
      container
      className={classes.root}
      justify="center"
      alignItems="center"
      direction="column"
      onSubmit={handleForgotPassword}
    >
      <Paper className={classes.paper} elevation={0}>
        <Grid item className={classes.title}>
          {forgotPassword}
        </Grid>
        <Grid item>
          {error && (
            <Alert className={classes.alert} severity="error">
              {error}
            </Alert>
          )}
          {message && (
            <Alert className={classes.alert} severity="success">
              {message}
            </Alert>
          )}
        </Grid>
        <Grid item>
          <ForgotPasswordEmail
            placeholder="Email"
            type="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </Grid>
        <Grid>
          <Button className={classes.button} disabled={loading} type="submit">
            {resetPassword}
          </Button>
        </Grid>
        <Grid item className={classes.createAccount}>
          {alreadyHaveAnAccount}
          <Link className={classes.createAccountLink} to="/login">
            {login}
          </Link>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default ForgotPasswordAccount;
