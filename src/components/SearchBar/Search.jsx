import { useStylesS, SearchInput } from "./styles";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchState } from "../../actions/searchActions";
import { Grid, Button } from "@material-ui/core";

const Search = () => {
  const classes = useStylesS();

  const history = useHistory();
  const dispatch = useDispatch();
  const { input } = useSelector((state) => state.searchReducer);

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/?q=${input}`);
  };

  return (
    <Grid
      item
      container
      justify="center"
      component="form"
      onSubmit={handleSubmit}
    >
      <SearchInput
        onChange={(event) => {
          dispatch(setSearchState({ input: event.target.value }));
        }}
        placeholder="Search"
      />
      <Button className={classes.button} type="submit">
        Search
      </Button>
    </Grid>
  );
};

export default Search;
