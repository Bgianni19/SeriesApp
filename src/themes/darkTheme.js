import { createMuiTheme } from "@material-ui/core/styles";
import darkColors from "../colors/darkColors";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    ...darkColors,
    primary: {
      main: "#fb8122",
    },
  },
});

export default theme;
