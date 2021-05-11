import { useStylesNB } from "./styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAccountState } from "../../actions/accountActions";
import { Toolbar, Typography, Button, IconButton } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { useAuth } from "../../base/context/AuthContext";
import ThemeSelector from "./ThemeSelector";

const NavBar = () => {
  const classes = useStylesNB();

  const { logout } = useAuth();

  const dispatch = useDispatch();
  const { loggedIn } = useSelector((state) => state.accountReducer);

  const handleLogout = () => {
    try {
      logout();
      dispatch(setAccountState({ loggedIn: false }));
    } catch {}
  };

  return (
    <div className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.title}>Series App</Typography>
        {loggedIn && (
          <Button className={classes.button} onClick={handleLogout}>
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
