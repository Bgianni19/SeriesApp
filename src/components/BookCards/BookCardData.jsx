import { useStylesBCD } from "./styles";
import { Table, TableBody, TableRow, TableCell } from "@material-ui/core";

const BookCardData = ({ data }) => {
  const classes = useStylesBCD();

  const { name, network, premiered, rating } = data;

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
            Title
          </TableCell>
          <TableCell className={classes.data}>{name ? name : "-"}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            className={classes.dataTitle}
            component="th"
            align="right"
            scope="row"
          >
            Author
          </TableCell>
          <TableCell className={classes.data}>
            {network ? network.name : "-"}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            className={classes.dataTitle}
            component="th"
            align="right"
            scope="row"
          >
            Year
          </TableCell>
          <TableCell className={classes.data}>
            {premiered ? premiered : "-"}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            className={classes.dataTitle}
            component="th"
            align="right"
            scope="row"
          >
            Price
          </TableCell>
          <TableCell className={classes.data}>
            {rating.average ? rating.average : "-"}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default BookCardData;
