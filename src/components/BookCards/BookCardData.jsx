import { useStylesBCD } from "./styles";
import { Table, TableBody, TableRow, TableCell } from "@material-ui/core";

const BookCardData = ({ data }) => {
  const classes = useStylesBCD();
  return (
    <Table size="small" aria-label="a dense table">
      <TableBody>
        <TableRow>
          <TableCell
            className={classes.name}
            component="th"
            align="right"
            scope="row"
          >
            Title
          </TableCell>
          <TableCell className={classes.data}>{data.title}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            className={classes.name}
            component="th"
            align="right"
            scope="row"
          >
            Author
          </TableCell>
          <TableCell className={classes.data}>{data.author}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            className={classes.name}
            component="th"
            align="right"
            scope="row"
          >
            Year
          </TableCell>
          <TableCell className={classes.data}>{data.year}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            className={classes.name}
            component="th"
            align="right"
            scope="row"
          >
            Price
          </TableCell>
          <TableCell className={classes.data}>{data.price}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default BookCardData;
