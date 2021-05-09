import { useStylesLA, Email, Password, SignupPassword } from "./styles";
import { Link } from "react-router-dom";
import { Grid, Paper, Button } from "@material-ui/core";

const LoginAccount = () => {
  const classes = useStylesLA();

  const handleSignup = (event) => {
    event.preventDefault();
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
          <Email placeholder="Email" type="email" />
        </Grid>
        <Grid item>
          <SignupPassword placeholder="Password" type="password" />
        </Grid>
        <Grid item>
          <Password placeholder="Re-enter Password" type="password" />
        </Grid>
        <Grid>
          <Button className={classes.login} type="submit">
            Signup
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
