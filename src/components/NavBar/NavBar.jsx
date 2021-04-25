import { useStylesNB } from "./styles";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import { AccountCircle, ShoppingCartOutlined } from "@material-ui/icons";
import ThemeSelector from "./ThemeSelector";

const NavBar = () => {
  const classes = useStylesNB();

  return (
    <AppBar className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.title}>
          <Link className={classes.titleLink} to="/">
            Series App
          </Link>
        </Typography>
        <Link to="/account">
          <IconButton className={classes.iconButton}>
            <AccountCircle className={classes.icon} />
          </IconButton>
        </Link>
        <Link to="/shopping-cart">
          <IconButton className={classes.iconButton}>
            <ShoppingCartOutlined className={classes.icon} />
          </IconButton>
        </Link>
        <ThemeSelector />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
