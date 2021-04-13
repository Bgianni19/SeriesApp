import "./App.css";
import store from "./store";
import { connect } from "react-redux";
import { ThemeProvider } from "@material-ui/core";
import NavBar from "./components/NavBar/NavBar";
import Search from "./components/SearchBox/Search";
import AllSeriesCards from "./components/SeriesCards/AllSeriesCards";

function App() {
  const themeState = store.getState().themeReducer;

  return (
    <ThemeProvider theme={themeState.theme}>
      <NavBar />
      <Search />
      <AllSeriesCards />
    </ThemeProvider>
  );
}

export default connect()(App);
