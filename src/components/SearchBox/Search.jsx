import { useStylesS, SearchInput } from "./styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setThemeState } from "../../actions/themeActions";
import { setSearchState } from "../../actions/searchActions";
import { Grid, Button, Switch } from "@material-ui/core";
import { DEFAULT_THEME, DARK_THEME } from "../../themes/themeTypes";

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
          <Button
            component={Link}
            className={classes.button}
            to="/search"
            type="submit"
          >
            Search
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <Switch
          color="primary"
          onClick={(event) =>
            event.target.checked
              ? dispatch(setThemeState(DARK_THEME))
              : dispatch(setThemeState(DEFAULT_THEME))
          }
        />
      </Grid>
    </Grid>
  );
};

export default Search;
