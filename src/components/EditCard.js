import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  Input,
  Box,
  FormGroup,
  Button,
} from "@material-ui/core";
import { useNavigate, useParams } from "react-router-dom";

const initialValue = {
  name: "",
  url: "",
  bucketId: "",
};

const EditCard = () => {
  const [card, setCard] = useState(initialValue);
  const { name, url, bucketId } = card;
  const { id } = useParams();

  useEffect(() => {
    loadCard();
  }, []);

  const loadCard = async () => {
    const response = await axios.get(
      `https://json-server-api-fnak.onrender.com/cards/${id}`
    );
    setCard(response.data);
  };
  const navigate = useNavigate();

  const onValueChange = (e) => {
    setCard({ ...card, [e.target.name]: e.target.value });
  };

  const submitHandler = async () => {
    try {
      await axios.put(
        `https://json-server-api-fnak.onrender.com/cards/${id}`,
        card
      );
      alert("Card updated successfully");
    } catch (error) {
      alert(error.response.data.error);
    }
    navigate("/showCards");
  };

  return (
    <Container maxWidth="sm">
      <Box my={5}>
        <Typography variant="h5" align="center">
          Edit Card Details
        </Typography>
        <FormGroup>
          <FormControl>
            <InputLabel>Name</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="name"
              value={name}
            />
          </FormControl>
          <FormControl>
            <InputLabel>Url</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="url" value={url} />
          </FormControl>
          <FormControl>
            <InputLabel>BucketId</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="bucketId"
              value={bucketId}
            />
          </FormControl>
          <Box my={3}>
            <Button
              variant="contained"
              onClick={() => submitHandler()}
              color="primary"
              align="center"
            >
              Edit Card
            </Button>
            <Button
              onClick={() => navigate("/showCards")}
              variant="contained"
              color="secondary"
              align="center"
              style={{ margin: "0px 20px" }}
            >
              Cancel
            </Button>
          </Box>
        </FormGroup>
      </Box>
    </Container>
  );
};

export default EditCard;
