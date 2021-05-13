import { useStylesSCD } from "./styles";
import { Table, TableBody, TableRow, TableCell } from "@material-ui/core";
import { title, network, premiered, rating } from "../texts";

const SeriesCardData = ({ data }) => {
  const classes = useStylesSCD();

  const {
    name: dataName,
    network: dataNetwork,
    premiered: dataPremiered,
    rating: dataRating,
  } = data;

  return (
    <Table size="small" aria-label="a dense table">
      <TableBody>
        <TableRow>
          <TableCell
            className={classes.dataTitle}
            component="th"
            align="right"
            scope="row"
          >
            {title}
          </TableCell>
          <TableCell className={classes.data}>
            {dataName ? dataName : "-"}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            className={classes.dataTitle}
            component="th"
            align="right"
            scope="row"
          >
            {network}
          </TableCell>
          <TableCell className={classes.data}>
            {dataNetwork ? dataNetwork.name : "-"}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            className={classes.dataTitle}
            component="th"
            align="right"
            scope="row"
          >
            {premiered}
          </TableCell>
          <TableCell className={classes.data}>
            {dataPremiered ? dataPremiered : "-"}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            className={classes.dataTitle}
            component="th"
            align="right"
            scope="row"
          >
            {rating}
          </TableCell>
          <TableCell className={classes.data}>
            {dataRating.average ? dataRating.average : "-"}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default SeriesCardData;
