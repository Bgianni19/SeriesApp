import { useStylesTS } from "./styles";
import { useDispatch } from "react-redux";
import { setThemeState } from "../../actions/themeActions";
import * as themes from "../../themes";
import { ButtonGroup, Button } from "@material-ui/core";

const ThemeSelector = () => {
  const classes = useStylesTS();

  const dispatch = useDispatch();

  return (
    <ButtonGroup className={classes.buttonGroup}>
      <Button
        className={classes.button}
        onClick={() => dispatch(setThemeState(themes.defaultTheme))}
      >
        Light
      </Button>
      <Button
        className={classes.button}
        onClick={() => dispatch(setThemeState(themes.darkTheme))}
      >
        Dark
      </Button>
    </ButtonGroup>
  );
};

export default ThemeSelector;
