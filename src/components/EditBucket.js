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
import { Edit } from "@material-ui/icons";

const initialValue = {
  name: "",
};

const EditBucket = () => {
  const [bucket, setBucket] = useState(initialValue);
  const { name } = bucket;
  const { id } = useParams();

  useEffect(() => {
    loadBucket();
  }, []);

  const loadBucket = async () => {
    const response = await axios.get(`/buckets/${id}`);
    setBucket(response.data);
  };
  const navigate = useNavigate();

  const onValueChange = (e) => {
    setBucket({ ...bucket, [e.target.name]: e.target.value });
  };

  const submitHandler = async () => {
    try {
      await axios.put(`/buckets/${id}`, bucket);
      alert("Bucket updated successfully");
    } catch (error) {
      alert(error.response.data.error);
    }
    navigate("/");
  };

  return (
    <Container maxWidth="sm">
      <Box my={5}>
        <Typography variant="h5" align="center">
          Edit Bucket Details
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
          <Box my={3}>
            <Button
              variant="contained"
              onClick={() => submitHandler()}
              color="primary"
              align="center"
            >
              Edit Bucket
            </Button>
            <Button
              onClick={() => navigate("/")}
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

export default EditBucket;
