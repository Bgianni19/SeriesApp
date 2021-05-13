import { useStylesSC } from "./styles";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import SeriesCardData from "./SeriesCardData";
import { synopsis, watchOnline } from "../texts";

const SeriesCard = ({ data }) => {
  const classes = useStylesSC();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardActionArea disableRipple>
          <CardMedia
            className={classes.image}
            image={data.image ? data.image.original : "./"}
            title={data.name}
          />
          <CardContent>
            <SeriesCardData data={data} />
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            className={classes.button}
            disableElevation
            variant="contained"
            color="primary"
          >
            {synopsis}
          </Button>
          <Button
            className={classes.button}
            disableElevation
            variant="contained"
            color="primary"
          >
            {watchOnline}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default SeriesCard;
