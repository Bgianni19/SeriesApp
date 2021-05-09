import { useStylesA, Email, Password } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { setAccountState } from "../../actions/accountActions";
import { Link } from "react-router-dom";
import { Grid, Paper, Button } from "@material-ui/core";

const LoginAccount = () => {
  const classes = useStylesA();

  const dispatch = useDispatch();
  const { loginEmailOnChange, loginPasswordOnChange } = useSelector(
    (state) => state.accountReducer
  );

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(
      setAccountState({
        loginEmail: loginEmailOnChange,
        loginPassword: loginPasswordOnChange,
      })
    );
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
        <Grid item>
          <Email
            placeholder="Email"
            type="email"
            onChange={(event) => {
              dispatch(
                setAccountState({ loginEmailOnChange: event.target.value })
              );
            }}
          />
        </Grid>
        <Grid item>
          <Password
            placeholder="Password"
            type="password"
            onChange={(event) => {
              dispatch(
                setAccountState({ loginPasswordOnChange: event.target.value })
              );
            }}
          />
        </Grid>
        <Grid>
          <Button className={classes.button} type="submit">
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
