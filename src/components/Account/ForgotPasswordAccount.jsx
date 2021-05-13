import { useStylesA, ForgotPasswordEmail } from "./styles";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Paper, Button } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useAuth } from "../../base/context/AuthContext";

const ForgotPasswordAccount = () => {
  const classes = useStylesA();

  const [email, setEmail] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const { forgotPassword } = useAuth();

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
          Forgot Password
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
            Reset Password
          </Button>
        </Grid>
        <Grid item className={classes.createAccount}>
          Already Have an Account?
          <Link className={classes.createAccountLink} to="/login">
            Log In
          </Link>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default ForgotPasswordAccount;
