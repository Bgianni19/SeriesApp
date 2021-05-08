import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { ThemeProvider } from "@material-ui/core";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Cards from "./pages/Cards";
import Account from "./pages/Account";

function App() {
  const { theme } = useSelector((state) => state.themeReducer);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MainLayout>
          <Home />
          <Switch>
            <Route exact path="/" component={Cards} />
            <Route exact path="/account" component={Account} />
            <Redirect to="/" />
          </Switch>
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
