import { useStylesNB } from "./styles";
import { Link } from "react-router-dom";
import { Toolbar, Typography } from "@material-ui/core";
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
        <ThemeSelector />
      </Toolbar>
    </div>
  );
};

export default NavBar;
