import { useStylesASC } from "./styles";
import { useState, useEffect } from "react";
import SeriesCard from "./SeriesCard";
import { Grid } from "@material-ui/core";

const AllSeriesCards = ({ handleSearch }) => {
  const classes = useStylesASC();

  const [search, setSearch] = useState("");
  const [seriesCard, setSeriesCards] = useState([]);

  useEffect(() => {
    const handleContentChange = () => {
      setSearch(handleSearch);
    };
    handleContentChange();
  }, [handleSearch]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://api.tvmaze.com/search/shows?q=${search}`
      );
      const data = await response.json();
      setSeriesCards(data);
    }
    fetchData();
  }, [search]);

  return (
    <Grid className={classes.root} container alignItems="center" spacing={4}>
      {seriesCard.map((seriesCard) => (
        <SeriesCard key={seriesCard.show.id} data={seriesCard.show} />
      ))}
    </Grid>
  );
};

export default AllSeriesCards;
