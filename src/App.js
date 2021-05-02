import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { ThemeProvider } from "@material-ui/core";
import Home from "./pages/Home";
import Cards from "./pages/Cards";
import MainLayout from "./layouts/MainLayout";

function App() {
  const { theme } = useSelector((state) => state.themeReducer);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MainLayout>
          <Home />
          <Switch>
            <Route exact path="/" component={Cards} />
            <Redirect to="/" />
          </Switch>
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
