import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "@material-ui/core";
import NavBar from "./components/NavBar/NavBar";
import Search from "./components/SearchBox/Search";
import AllSeriesCards from "./components/SeriesCards/AllSeriesCards";
import defaultTheme from "./themes/defaultTheme";
import darkTheme from "./themes/darkTheme";
import { DEFAULT_THEME, DARK_THEME } from "./themes/themeTypes";

function App() {
  const { theme: newTheme } = useSelector((state) => state.themeReducer);
  const [theme, setTheme] = useState(newTheme);

  useEffect(() => {
    switch (newTheme) {
      case DEFAULT_THEME:
        return setTheme(defaultTheme);
      case DARK_THEME:
        return setTheme(darkTheme);
      default:
        setTheme(defaultTheme);
    }
  }, [newTheme]);

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Search />
      <AllSeriesCards />
    </ThemeProvider>
  );
}

export default App;
