import { useStylesNB } from "./styles";
import { Link } from "react-router-dom";
import { Toolbar, Typography, IconButton } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import ThemeSelector from "./ThemeSelector";

const NavBar = () => {
  const classes = useStylesNB();

  return (
    <div className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.title}>
          <Link className={classes.titleLink} to="/">
            Series App
          </Link>
        </Typography>
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
