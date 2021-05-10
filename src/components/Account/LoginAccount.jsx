import { useStylesA, Email, Password } from "./styles";
import { Link } from "react-router-dom";
import { Grid, Paper, Button } from "@material-ui/core";

const LoginAccount = () => {
  const classes = useStylesA();

  const handleLogin = (event) => {
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
      onSubmit={handleLogin}
    >
      <Paper className={classes.paper} elevation={0}>
        <Grid item className={classes.title}>
          Log In
        </Grid>
        <Grid item>
          <Email placeholder="Email" type="email" onChange={(event) => {}} />
        </Grid>
        <Grid item>
          <Password
            placeholder="Password"
            type="password"
            onChange={(event) => {}}
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
