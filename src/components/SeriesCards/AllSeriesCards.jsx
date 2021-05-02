import { useStylesASC } from "./styles";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCardsState } from "../../actions/cardsActions";
import { useEffect } from "react";
import { Grid } from "@material-ui/core";
import SeriesCard from "./SeriesCard";

const AllSeriesCards = () => {
  const classes = useStylesASC();
  const history = useHistory();
  const dispatch = useDispatch();
  const { cards } = useSelector((state) => state.cardsReducer);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://api.tvmaze.com/search/shows?q=${history.location.search.slice(
          3
        )}`
      );
      const data = await response.json();
      dispatch(setCardsState({ cards: data }));
    }
    fetchData();
  }, [history.location.search, dispatch]);

  return (
    <Grid className={classes.root} container alignItems="center">
      {cards.map(({ show }) => (
        <SeriesCard key={show.id} data={show} />
      ))}
    </Grid>
  );
};

export default AllSeriesCards;
