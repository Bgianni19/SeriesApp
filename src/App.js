import { useStylesApp } from "./styles";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { ThemeProvider } from "@material-ui/core";
import defaultTheme from "./themes/defaultTheme";
import darkTheme from "./themes/darkTheme";
import { DEFAULT_THEME, DARK_THEME } from "./themes/themeTypes";
import Home from "./pages/Home";
import Cards from "./pages/Cards";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  const classes = useStylesApp();

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
      <div className={classes.root}>
        <Router>
          <Home />
          <Switch>
            <Route exact path="/" component={Cards} />
            <Route exact path="/shopping-cart" component={ShoppingCart} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
