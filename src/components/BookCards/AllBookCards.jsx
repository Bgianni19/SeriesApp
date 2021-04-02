import { useStylesABC } from "./styles";
import { useState, useEffect } from "react";
import BookCard from "./BookCard";
import { Grid } from "@material-ui/core";

const AllBookCards = ({ handleSearch }) => {
  const classes = useStylesABC();

  const [search, setSearch] = useState("");
  const [bookCard, setBookCards] = useState([]);

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
      setBookCards(data);
    }
    fetchData();
  }, [search]);

  return (
    <Grid className={classes.root} container alignItems="center" spacing={4}>
      {bookCard.map((bookcard) => (
        <BookCard key={bookcard.show.id} data={bookcard.show} />
      ))}
    </Grid>
  );
};

export default AllBookCards;
