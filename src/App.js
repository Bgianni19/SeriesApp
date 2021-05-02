import { useStylesApp } from './styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
import Home from './pages/Home';
import Cards from './pages/Cards';

function App() {
  const classes = useStylesApp();
  const { theme } = useSelector((state) => state.themeReducer);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Router>
          <Home />
          <Switch>
            <Route exact path='/' component={Cards} />
            <Redirect to='/' />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
