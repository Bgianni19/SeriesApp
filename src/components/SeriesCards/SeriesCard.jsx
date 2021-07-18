import { useStylesSC } from "./styles";
import { useState } from "react";
import ReactHtmlParser from "react-html-parser";

import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Backdrop,
  Paper,
} from "@material-ui/core";
import SeriesCardData from "./SeriesCardData";
import { synopsis, watchOnline } from "../texts";

const SeriesCard = ({ data }) => {
  const classes = useStylesSC();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
            onClick={handleOpen}
          >
            {synopsis}
          </Button>
          <Button
            className={classes.button}
            disableElevation
            variant="contained"
            color="primary"
            href={data.officialSite}
            target="_blank"
          >
            {watchOnline}
          </Button>
        </CardActions>
      </Card>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <Paper className={classes.paper} elevation={0}>
          <span className={classes.title}>{synopsis}</span>
          <div className={classes.synopsis}>
            {ReactHtmlParser(data.summary)}
          </div>
        </Paper>
      </Backdrop>
    </Grid>
  );
};

export default SeriesCard;
