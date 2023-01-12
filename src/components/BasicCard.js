import React from "react";
import Card from "react-bootstrap/Card";

const BasicCard = ({ card }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Card.Body>
        <Card.Title as="div">
          <strong>{card.name}</strong>
        </Card.Title>

        <Card.Text as="h3">{card.url}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BasicCard;
