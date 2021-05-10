import { useStylesA, Email, Password, SignupPassword } from "./styles";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Grid, Paper, Button } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useAuth } from "../../base/context/AuthContext";

const LoginAccount = () => {
  const classes = useStylesA();

  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password_I, setPassword_I] = useState("");
  const [password_II, setPassword_II] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signup } = useAuth();

  const handleSignup = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (password_I !== password_II) {
      setError("Passwords do not match!");
    } else {
      try {
        setError("");
        await signup(email, password_I);
        history.push("/");
      } catch {
        setError("Failed to create your account!");
      }
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
      onSubmit={handleSignup}
    >
      <Paper className={classes.paper} elevation={0}>
        <Grid item className={classes.title}>
          Sign Up
        </Grid>
        <Grid item>
          {error && (
            <Alert className={classes.error} severity="error">
              {error}
            </Alert>
          )}
        </Grid>
        <Grid item>
          <Email
            placeholder="Email"
            type="email"
            required
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </Grid>
        <Grid item>
          <SignupPassword
            placeholder="Password"
            type="password"
            required
            onChange={(event) => {
              setPassword_I(event.target.value);
            }}
          />
        </Grid>
        <Grid item>
          <Password
            placeholder="Re-enter Password"
            type="password"
            required
            onChange={(event) => {
              setPassword_II(event.target.value);
            }}
          />
        </Grid>
        <Grid>
          <Button className={classes.button} disabled={loading} type="submit">
            Signup
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

export default LoginAccount;
