import { useStylesTS } from './styles';
import { useDispatch } from 'react-redux';
import { setThemeState } from '../../actions/themeActions';
import * as themes from '../../themes';
import { ButtonGroup, Button } from '@material-ui/core';

const ThemeSelector = () => {
  const classes = useStylesTS();

  const dispatch = useDispatch();

  console.log(themes);

  return (
    <ButtonGroup>
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
