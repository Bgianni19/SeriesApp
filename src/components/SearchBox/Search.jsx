import { useStylesS, SearchInput } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { setDefaultTheme, setDarkTheme } from "../../actions/themeActions";
import { setSearchState } from "../../actions/searchActions";
import { Grid, Button, Switch } from "@material-ui/core";

const Search = () => {
  const classes = useStylesS();

  const dispatch = useDispatch();
  const { inputOnChange } = useSelector((state) => state.searchReducer);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setSearchState({ input: inputOnChange }));
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
              dispatch(setSearchState({ inputOnChange: event.target.value }));
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
              ? dispatch(setDarkTheme())
              : dispatch(setDefaultTheme())
          }
        />
      </Grid>
    </Grid>
  );
};

export default Search;
