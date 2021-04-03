import { useStylesS, SearchInput } from './styles';
import { useState } from 'react';
import { Grid, Button } from '@material-ui/core';

const Search = (props) => {
  const classes = useStylesS();

  const [input, setInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleInput(input);
  };

  return (
    <Grid className={classes.root} container>
      <Grid item xs={2} />
      <Grid
        container
        item
        xs={8}
        justify='center'
        component='form'
        onSubmit={handleSubmit}
      >
        <Grid item>
          <SearchInput
            onChange={(event) => {
              setInput(event.target.value);
            }}
            placeholder='Search'
          />
        </Grid>
        <Grid item>
          <Button className={classes.button} id='SearchButton' type='submit'>
            Search
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        {props.children}
      </Grid>
    </Grid>
  );
};

export default Search;
