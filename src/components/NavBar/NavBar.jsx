import { useStylesNB } from "./styles";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAccountState } from "../../actions/accountActions";
import { Toolbar, IconButton, Menu, MenuItem } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { useAuth } from "../../base/context/AuthContext";
import ThemeSelector from "./ThemeSelector";

const NavBar = () => {
  const classes = useStylesNB();

  const { logout } = useAuth();

  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const { loggedIn } = useSelector((state) => state.accountReducer);

  const handleLogout = () => {
    try {
      logout();
      dispatch(setAccountState({ loggedIn: false }));
      setAnchorEl(null);
    } catch {
      alert("Error!");
    }
  };

  return (
    <div>
      <Toolbar className={classes.toolbar}>
        <p className={classes.title}>Series App</p>

        <IconButton
          className={classes.iconButton}
          onClick={(event) => setAnchorEl(event.currentTarget)}
        >
          <AccountCircle className={classes.icon} />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
        >
          <MenuItem
            to="/login"
            className={classes.menuItems}
            component={Link}
            onClick={() => setAnchorEl(null)}
          >
            Login
          </MenuItem>
          <MenuItem
            to="/signup"
            className={classes.menuItems}
            component={Link}
            onClick={() => setAnchorEl(null)}
          >
            Signup
          </MenuItem>
          {loggedIn && (
            <MenuItem className={classes.menuItems} onClick={handleLogout}>
              Logout
            </MenuItem>
          )}
        </Menu>
        <ThemeSelector />
      </Toolbar>
    </div>
  );
};

export default NavBar;
