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
  overrides: { MuiMenu: { list: { padding: 0 } } },
});

export default theme;
