import { useStylesSB } from "./styles";
import { Grid } from "@material-ui/core";
import Search from "./Search";
import ThemeSelector from "./ThemeSelector";

const SearchBar = () => {
  const classes = useStylesSB();

  return (
    <Grid className={classes.root} container>
      <Search />
      <ThemeSelector />
    </Grid>
  );
};

export default SearchBar;
