import { createMuiTheme } from "@material-ui/core/styles";
import defaultColors from "../colors/defaultColors";

const theme = createMuiTheme({
  palette: {
    type: "light",
    ...defaultColors,
    primary: {
      main: "#fb8122",
    },
  },
});

export default theme;
