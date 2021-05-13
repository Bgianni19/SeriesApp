import { useStylesA, Email, Password, SignupPassword } from "./styles";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAccountState } from "../../actions/accountActions";
import { Grid, Paper, Button } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useAuth } from "../../base/context/AuthContext";
import { signup, alreadyHaveAnAccount, login } from "../texts";

const LoginAccount = () => {
  const classes = useStylesA();

  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password_I, setPassword_I] = useState("");
  const [password_II, setPassword_II] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signupAuth } = useAuth();

  const handleSignup = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (password_I !== password_II) {
      setError("Passwords do not match!");
    } else {
      try {
        setError("");
        await signup(email, password_I);
        dispatch(setAccountState({ loggedIn: true }));
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
          {signup}
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
            {signup}
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

export default LoginAccount;
