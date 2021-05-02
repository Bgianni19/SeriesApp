import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import darkColors from "../colors/darkColors";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    ...darkColors,
    primary: {
      main: red[400],
    },
  },
});

export default theme;
