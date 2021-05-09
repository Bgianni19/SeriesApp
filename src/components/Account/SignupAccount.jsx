import { useStylesA, Email, Password, SignupPassword } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { setAccountState } from "../../actions/accountActions";
import { Link } from "react-router-dom";
import { Grid, Paper, Button } from "@material-ui/core";

const LoginAccount = () => {
  const classes = useStylesA();

  const dispatch = useDispatch();
  const {
    signupEmailOnChange,
    signupPasswordOneOnChange,
    signupPasswordTwoOnChange,
  } = useSelector((state) => state.accountReducer);

  const handleSignup = (event) => {
    event.preventDefault();
    dispatch(
      setAccountState({
        signupEmail: signupEmailOnChange,
        signupPasswordOne: signupPasswordOneOnChange,
        signupPasswordTwo: signupPasswordTwoOnChange,
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
      onSubmit={handleSignup}
    >
      <Paper className={classes.paper} elevation={0}>
        <Grid item>
          <Email
            placeholder="Email"
            type="email"
            onChange={(event) => {
              dispatch(
                setAccountState({ signupEmailOnChange: event.target.value })
              );
            }}
          />
        </Grid>
        <Grid item>
          <SignupPassword
            placeholder="Password"
            type="password"
            onChange={(event) => {
              dispatch(
                setAccountState({
                  signupPasswordOneOnChange: event.target.value,
                })
              );
            }}
          />
        </Grid>
        <Grid item>
          <Password
            placeholder="Re-enter Password"
            type="password"
            onChange={(event) => {
              dispatch(
                setAccountState({
                  signupPasswordTwoOnChange: event.target.value,
                })
              );
            }}
          />
        </Grid>
        <Grid>
          <Button className={classes.button} type="submit">
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
