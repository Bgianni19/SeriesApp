import { useStylesNB } from "./styles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Toolbar, Typography, Button, IconButton } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import ThemeSelector from "./ThemeSelector";

const NavBar = () => {
  const classes = useStylesNB();

  const { loggedIn } = useSelector((state) => state.accountReducer);

  return (
    <div className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.title}>Series App</Typography>
        {loggedIn && (
          <Button className={classes.button} onClick={""}>
            Logout
          </Button>
        )}
        <Link to="/login">
          <IconButton className={classes.iconButton}>
            <AccountCircle className={classes.icon} />
          </IconButton>
        </Link>
        <ThemeSelector />
      </Toolbar>
    </div>
  );
};

export default NavBar;
