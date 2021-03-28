import { useStylesBC } from "./styles";
import BookCardData from "./BookCardData";
import {
  Grid,
  Card,
  CardActionArea,
  CircularProgress,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";

const BookCard = ({ data }) => {
  const classes = useStylesBC();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.root}>
        <CardActionArea disableRipple>
          {data.loading ? (
            <Grid
              container
              xs={12}
              justify="center"
              alignItems="center"
              className={classes.image}
            >
              <CircularProgress color="primary" />
            </Grid>
          ) : (
            <CardMedia
              className={classes.image}
              image={data.image}
              title={data.title}
            />
          )}

          <CardContent>
            <BookCardData data={data} />
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            className={classes.button}
            size="medium"
            disableElevation
            variant="contained"
            color="primary"
          >
            Add to cart
          </Button>
          <Button
            className={classes.button}
            size="medium"
            disableElevation
            variant="contained"
            color="primary"
          >
            Buy
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default BookCard;
