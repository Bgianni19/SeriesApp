import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Toolbar, IconButton, Menu, MenuItem } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { setAccountState } from '../../actions/accountActions';
import { useStylesNB } from './styles';
import { useAuth } from '../../base/context/AuthContext';
import ThemeSelector from './ThemeSelector';
import { appTitle, login, signup, logout } from '../texts';

const NavBar = () => {
  const classes = useStylesNB();

  const { logoutAuth } = useAuth();

  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const { loggedIn } = useSelector((state) => state.accountReducer);

  const handleLogout = () => {
    try {
      logoutAuth();
      dispatch(setAccountState({ loggedIn: false }));
      setAnchorEl(null);
    } catch {
      //! don't use alert. get a notification library or better check the snackbar in materialui
      // alert('Error!');
    }
  };

  return (
    <div>
      <Toolbar className={classes.toolbar}>
        <p className={classes.title}>{appTitle}</p>

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
            {login}
          </MenuItem>
          <MenuItem
            to="/signup"
            className={classes.menuItems}
            component={Link}
            onClick={() => setAnchorEl(null)}
          >
            {signup}
          </MenuItem>
          {loggedIn && (
            <MenuItem className={classes.menuItems} onClick={handleLogout}>
              {logout}
            </MenuItem>
          )}
        </Menu>
        <ThemeSelector />
      </Toolbar>
    </div>
  );
};

export default NavBar;
