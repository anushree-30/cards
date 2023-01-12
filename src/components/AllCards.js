import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BasicCard from "./BasicCard";
import { Row, Col } from "react-bootstrap";

const AllCards = () => {
  const [cards, setCards] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getCards();
  }, []);

  const getCards = async () => {
    const response = await axios.get(`/buckets/${id}/cards`);
    setCards(response.data);
  };

  return (
    <Row>
      {cards.map((card) => (
        <Col key={card.id} sm={12} md={6} ld={4} xl={3}>
          <BasicCard card={card} />
        </Col>
      ))}
    </Row>
  );
};

export default AllCards;
