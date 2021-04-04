import { useStylesS, SearchInput } from "./styles";
import { useState } from "react";
import { Grid, Button } from "@material-ui/core";

const Search = ({ handleInput, children }) => {
  const classes = useStylesS();

  const [input, setInput] = useState("");

  return (
    <Grid className={classes.root} container>
      <Grid item xs={10} container justify="center">
        <Grid item>
          <SearchInput
            onChange={(event) => {
              setInput(event.target.value);
            }}
            onKeyDown={(event) =>
              event.keyCode === 13
                ? document.getElementById("SearchButton").click()
                : null
            }
            placeholder="Search"
          />
        </Grid>
        <Grid item>
          <Button
            className={classes.button}
            id="SearchButton"
            onClick={() => handleInput(input)}
          >
            Search
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        {children}
      </Grid>
    </Grid>
  );
};

export default Search;
