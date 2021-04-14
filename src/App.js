import "./App.css";
import { useSelector } from "react-redux";
import { ThemeProvider } from "@material-ui/core";
import NavBar from "./components/NavBar/NavBar";
import Search from "./components/SearchBox/Search";
import AllSeriesCards from "./components/SeriesCards/AllSeriesCards";

function App() {
  const theme = useSelector((state) => state.themeReducer.theme);

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Search />
      <AllSeriesCards />
    </ThemeProvider>
  );
}

export default App;
