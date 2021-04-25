import { useStylesTS } from "./styles";
import { useDispatch } from "react-redux";
import { setThemeState } from "../../actions/themeActions";
import { DEFAULT_THEME, DARK_THEME } from "../../themes/themeTypes";
import { ButtonGroup, Button } from "@material-ui/core";

const ThemeSelector = () => {
  const classes = useStylesTS();

  const dispatch = useDispatch();

  return (
    <ButtonGroup>
      <Button
        className={classes.button}
        onClick={() => dispatch(setThemeState(DEFAULT_THEME))}
      >
        Light
      </Button>
      <Button
        className={classes.button}
        onClick={() => dispatch(setThemeState(DARK_THEME))}
      >
        Dark
      </Button>
    </ButtonGroup>
  );
};

export default ThemeSelector;
