import { useStylesNB } from "./styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const NavBar = (props) => {
  const classes = useStylesNB();

  return (
    <AppBar className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.title} variant="h5">
          Series App
        </Typography>
        {props.children}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
