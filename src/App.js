import { useState } from "react";
import "./App.css";
import { ThemeProvider, Switch } from "@material-ui/core";
import defaultTheme from "./themes/defaultTheme";
import darkTheme from "./themes/darkTheme";
import NavBar from "./components/NavBar/NavBar";
// import Search from "./components/SearchBox/Search";
import Search from "./components/SearchBox/SearchAlt";
import AllSeriesCards from "./components/SeriesCards/AllSeriesCards";

function App() {
  const [theme, setTheme] = useState(defaultTheme);
  const [searchInput, setSearchInput] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Search handleInput={(input) => setSearchInput(input)}>
        <Switch
          color="primary"
          onClick={(event) =>
            event.target.checked ? setTheme(darkTheme) : setTheme(defaultTheme)
          }
        />
      </Search>
      <AllSeriesCards input={searchInput} />
    </ThemeProvider>
  );
}

export default App;
