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

const ShowCards = () => {
  const classes = useStyle();

  const [cards, setCards] = useState([]);
  useEffect(() => {
    getCards();
  }, []);

  const getCards = async () => {
    const response = await axios.get(`cards`);
    setCards(response.data);
  };

  const deleteData = async (id) => {
    await axios.delete(`cards/${id}`);
    getCards();
  };

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow className={classes.thead}>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Url</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {cards.map((data, index) => (
          <TableRow className={classes.trow} key={index}>
            <TableCell>{data.id}</TableCell>
            <TableCell>{data.name}</TableCell>
            <TableCell>{data.url}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="primary"
                style={{ margin: "0px 20px" }}
                component={Link}
                to={`/editCard/${data.id}`}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="secondary"
                style={{ margin: "0px 20px" }}
                onClick={() => deleteData(data.id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ShowCards;
