import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import darkColors from "../colors/darkColors";

const theme = createMuiTheme({
  palette: {
    ...darkColors,
    primary: {
      main: red[500],
    },
  },
});

export default theme;
