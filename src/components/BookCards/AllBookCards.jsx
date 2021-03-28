import { useState, useEffect } from "react";
import BookCard from "./BookCard";
import { Grid } from "@material-ui/core";

const AllBookCards = () => {
  const [Title, setTitle] = useState(null);
  const [Author, setAuthor] = useState(null);
  const [Year, setYear] = useState(null);
  const [Price, setPrice] = useState(null);
  const [Image, setImage] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [Id, setId] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("");
      const data = await response.json();
      const item = data[0];
      setTitle(item.show.name);
      setAuthor(item.show.network.name);
      setYear(item.show.premiered);
      setPrice();
      setImage(item.show.image.original);
      setLoading(false);
      setId(item.show.id);
    }
    fetchData();
  }, []);

  const bookcards = [];
  for (let card = 0; card < 15; card++) {
    bookcards[card] = {
      title: Title,
      author: Author,
      year: Year,
      price: Price,
      image: Image,
      loading: Loading,
      id: Id,
    };
  }

  return (
    <Grid container alignItems="center" spacing={4}>
      {bookcards.map((bookcards) => (
        <BookCard key={bookcards.id} data={bookcards} />
      ))}
    </Grid>
  );
};

export default AllBookCards;
