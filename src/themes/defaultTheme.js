import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import defaultColors from "../colors/defaultColors";

const theme = createMuiTheme({
  palette: {
    ...defaultColors,
    primary: {
      main: red[500],
    },
  },
});

export default theme;
