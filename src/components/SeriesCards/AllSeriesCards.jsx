import { useDispatch, useSelector } from "react-redux";
import { setCardsState } from "../../actions/cardsActions";
import { useEffect } from "react";
import { Grid } from "@material-ui/core";
import SeriesCard from "./SeriesCard";

const AllSeriesCards = () => {
  const dispatch = useDispatch();
  const { cards } = useSelector((state) => state.cardsReducer);
  const { input } = useSelector((state) => state.searchReducer);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://api.tvmaze.com/search/shows?q=${input}`
      );
      const data = await response.json();
      dispatch(setCardsState({ cards: data }));
    }
    fetchData();
  }, [input, dispatch]);

  return (
    <Grid container alignItems="center">
      {cards.map(({ show }) => (
        <SeriesCard key={show.id} data={show} />
      ))}
    </Grid>
  );
};

export default AllSeriesCards;
