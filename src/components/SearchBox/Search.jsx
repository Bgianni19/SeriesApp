import { useStylesS, SearchInput } from "./styles";
import { useDispatch } from "react-redux";
import { Grid, Button, Switch } from "@material-ui/core";

const Search = ({ children }) => {
  const classes = useStylesS();

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "GetInputValue" });
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
              dispatch({
                type: "GetInputValueOnChange",
                payload: { inputValueOnChange: event.target.value },
              });
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
        <Switch
          color="primary"
          onClick={(event) =>
            event.target.checked
              ? dispatch({
                  type: "SetDarkTheme",
                })
              : dispatch({
                  type: "SetDefaultTheme",
                })
          }
        />
      </Grid>
    </Grid>
  );
};

export default Search;
