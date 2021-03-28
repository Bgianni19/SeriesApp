import { useState } from "react";
import "./App.css";
import { ThemeProvider, Switch, Container } from "@material-ui/core";
import AllBookCards from "./components/BookCards/AllBookCards";
import defaultTheme from "./themes/defaultTheme";
import darkTheme from "./themes/darkTheme";

function App() {
  const [Theme, setTheme] = useState(defaultTheme);

  return (
    <ThemeProvider theme={Theme}>
      <Switch
        onClick={() =>
          Theme === defaultTheme ? setTheme(darkTheme) : setTheme(defaultTheme)
        }
      />
      <Container>
        <AllBookCards />
      </Container>
    </ThemeProvider>
  );
}

export default App;
