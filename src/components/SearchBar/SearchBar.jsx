import { useStylesSB } from "./styles";
import { Grid } from "@material-ui/core";
import Search from "./Search";

const SearchBar = () => {
  const classes = useStylesSB();

  return (
    <Grid className={classes.root} container>
      <Search />
    </Grid>
  );
};

export default SearchBar;
