import { useStylesLA, Username, Password } from "./styles";
import { Link } from "react-router-dom";
import { Grid, Paper, Button } from "@material-ui/core";

const LoginAccount = () => {
  const classes = useStylesLA();

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
        <Grid item>
          <Username placeholder="Email" type="email" />
        </Grid>
        <Grid item>
          <Password placeholder="Password" type="password" />
        </Grid>
        <Grid>
          <Button className={classes.login} type="submit">
            Login
          </Button>
        </Grid>
        <Grid
          component={Link}
          item
          to="/forgot-password"
          className={classes.forgotPassword}
        >
          Forget Password?
        </Grid>
        <Grid item className={classes.createAccount}>
          Need an Account?
          <Link className={classes.createAccountLink} to="/create-account">
            Sign Up
          </Link>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default LoginAccount;
