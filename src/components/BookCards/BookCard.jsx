import { useStylesBC } from "./styles";
import BookCardData from "./BookCardData";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";

const BookCard = ({ data }) => {
  const classes = useStylesBC();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardActionArea disableRipple>
          <CardMedia
            className={classes.image}
            image={data.image ? data.image.original : null}
            title={data.name}
          />
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
