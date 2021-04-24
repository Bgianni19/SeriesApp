import { useStylesS, SearchInput } from "./styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchState } from "../../actions/searchActions";
import { Grid, Button } from "@material-ui/core";

const Search = () => {
  const classes = useStylesS();

  const dispatch = useDispatch();
  const { inputOnChange } = useSelector((state) => state.searchReducer);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setSearchState({ input: inputOnChange }));
  };

  return (
    <Grid
      item
      container
      xs={10}
      justify="center"
      component="form"
      onSubmit={handleSubmit}
    >
      <SearchInput
        onChange={(event) => {
          dispatch(setSearchState({ inputOnChange: event.target.value }));
        }}
        placeholder="Search"
      />
      <Button
        component={Link}
        className={classes.button}
        to="/home"
        type="submit"
      >
        Search
      </Button>
    </Grid>
  );
};

export default Search;
