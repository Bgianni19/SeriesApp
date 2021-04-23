import { createMuiTheme } from "@material-ui/core/styles";
import { blueGrey } from "@material-ui/core/colors";
import defaultColors from "../colors/defaultColors";

const theme = createMuiTheme({
  palette: {
    ...defaultColors,
    primary: {
      main: blueGrey[600],
    },
  },
});

export default theme;
