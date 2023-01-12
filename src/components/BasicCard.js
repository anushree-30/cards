import React from "react";
import Card from "react-bootstrap/Card";

const BasicCard = ({ card }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Card.Body>
        <Card.Title as="div">
          <strong>{card.name}</strong>
        </Card.Title>

        <div class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item" src={card.url}></iframe>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BasicCard;
