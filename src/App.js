import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
import { AuthProvider } from './base/context/AuthContext';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Cards from './pages/Cards';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';

function App() {
  const { theme } = useSelector((state) => state.themeReducer);

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router>
          <MainLayout>
            <Home />
            <Switch>
              <Route exact path="/" component={Cards} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/forgot-password" component={ForgotPassword} />
              <Redirect to="/" />
            </Switch>
          </MainLayout>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
