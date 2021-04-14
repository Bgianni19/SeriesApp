import { useStylesASC } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Grid } from "@material-ui/core";
import SeriesCard from "./SeriesCard";

const AllSeriesCards = () => {
  const classes = useStylesASC();

  const dispatch = useDispatch();

  const input = useSelector((state) => state.searchReducer.input);
  const seriesCard = useSelector((state) => state.cardsReducer.cards);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://api.tvmaze.com/search/shows?q=${input}`
      );
      const data = await response.json();
      dispatch({ type: "GetCards", payload: { cards: data } });
    }
    fetchData();
  }, [input, dispatch]);

  return (
    <Grid className={classes.root} container alignItems="center">
      {seriesCard.map(({ show }) => (
        <SeriesCard key={show.id} data={show} />
      ))}
    </Grid>
  );
};

export default AllSeriesCards;
