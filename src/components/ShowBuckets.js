import React, { useEffect, useState } from "react";
import {
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  makeStyles,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";

const useStyle = makeStyles({
  table: {
    width: "80%",
    margin: "50px 100px 100px 140px",
  },
  thead: {
    "& > *": {
      background: "#000000",
      color: "#FFFFFF",
      fontSize: "16px",
    },
  },
  trow: {
    "& > *": {
      fontSize: "16px",
    },
  },
});

const ShowBuckets = () => {
  const classes = useStyle();

  const [buckets, setBuckets] = useState([]);
  useEffect(() => {
    getBuckets();
  }, []);

  const getBuckets = async () => {
    const response = await axios.get(
      `https://json-server-api-fnak.onrender.com/buckets`
    );
    setBuckets(response.data);
  };

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow className={classes.thead}>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {buckets.map((data, index) => (
          <TableRow className={classes.trow} key={index}>
            <TableCell>{data.id}</TableCell>
            <TableCell>{data.name}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="primary"
                style={{ margin: "0px 20px" }}
                component={Link}
                to={`/allCards/${data.id}`}
                state={{ bucket: `${data.name}`, id: `${data.id}` }}
              >
                Show Cards
              </Button>
              <Button
                variant="contained"
                color="primary"
                style={{ margin: "0px 20px" }}
                component={Link}
                to={`/editBucket/${data.id}`}
              >
                Edit
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ShowBuckets;
