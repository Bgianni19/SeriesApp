import { useStylesPA, Username, Password } from "./styles";
import { Grid, Button } from "@material-ui/core";

const PersonalAccount = () => {
  const classes = useStylesPA();

  const handleLogin = (event) => {
    event.preventDefault();
  };

  const handleCreateAccount = (event) => {
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
    >
      <Grid item>
        <Username placeholder="Email" type="email" />
      </Grid>
      <Grid item>
        <Password placeholder="Password" type="password" />
      </Grid>
      <Grid>
        <Button className={classes.button} onSubmit={handleLogin}>
          Login
        </Button>
        <Button className={classes.button} onSubmit={handleCreateAccount}>
          Create Account
        </Button>
      </Grid>
    </Grid>
  );
};

export default PersonalAccount;
