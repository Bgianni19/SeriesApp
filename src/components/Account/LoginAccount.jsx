import { useStylesA, Email, Password } from "./styles";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Grid, Paper, Button } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useAuth } from "../../base/context/AuthContext";

const LoginAccount = () => {
  const classes = useStylesA();

  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      setError("");
      await login(email, password);
      history.push("/");
    } catch {
      setError("Failed to login to your account!");
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
      onSubmit={handleLogin}
    >
      <Paper className={classes.paper} elevation={0}>
        <Grid item className={classes.title}>
          Log In
        </Grid>
        <Grid item>
          {error && (
            <Alert className={classes.alert} severity="error">
              {error}
            </Alert>
          )}
        </Grid>
        <Grid item>
          <Email
            placeholder="Email"
            type="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </Grid>
        <Grid item>
          <Password
            placeholder="Password"
            type="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </Grid>
        <Grid>
          <Button className={classes.button} disabled={loading} type="submit">
            Login
          </Button>
        </Grid>
        <Grid
          component={Link}
          item
          to="/forgot-password"
          className={classes.forgotPassword}
          disabled
        >
          Forget Password?
        </Grid>
        <Grid item className={classes.createAccount}>
          Need an Account?
          <Link className={classes.createAccountLink} to="/signup">
            Sign Up
          </Link>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default LoginAccount;
