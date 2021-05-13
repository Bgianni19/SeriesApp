import { useStylesTS } from "./styles";
import { useDispatch } from "react-redux";
import { setThemeState } from "../../actions/themeActions";
import * as themes from "../../themes";
import { IconButton } from "@material-ui/core";
import { Brightness7 as Light, Brightness4 as Dark } from "@material-ui/icons";

const ThemeSelector = () => {
  const classes = useStylesTS();

  const dispatch = useDispatch();

  return (
    <div>
      <IconButton
        className={classes.iconButton}
        onClick={() => dispatch(setThemeState(themes.defaultTheme))}
      >
        <Light className={classes.icon} />
      </IconButton>
      <IconButton
        className={classes.iconButton}
        onClick={() => dispatch(setThemeState(themes.darkTheme))}
      >
        <Dark className={classes.icon} />
      </IconButton>
    </div>
  );
};

export default ThemeSelector;
