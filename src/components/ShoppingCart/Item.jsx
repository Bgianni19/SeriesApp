import { useStylesI } from "./styles";
import { Paper, Grid, Button } from "@material-ui/core";
import { Clear } from "@material-ui/icons";

const Item = () => {
  const classes = useStylesI();

  return (
    <Paper component={Grid} className={classes.root} container elevation={0}>
      <Grid item></Grid>
      <Grid item container justify="flex-end">
        <Button className={classes.button}>
          <Clear className={classes.buttonLabel} />
        </Button>
      </Grid>
    </Paper>
  );
};

export default Item;
