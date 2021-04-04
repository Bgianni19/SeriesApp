import { useStylesS, SearchInput } from "./styles";
import { useState } from "react";
import { Grid, Button } from "@material-ui/core";

const Search = ({ handleInput, children }) => {
  const classes = useStylesS();

  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleInput(input);
  };

  return (
    <Grid className={classes.root} container>
      <Grid
        container
        item
        xs={10}
        justify="center"
        component="form"
        onSubmit={handleSubmit}
      >
        <Grid item>
          <SearchInput
            onChange={(event) => {
              setInput(event.target.value);
            }}
            placeholder="Search"
          />
        </Grid>
        <Grid item>
          <Button className={classes.button} type="submit">
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
