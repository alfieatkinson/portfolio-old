import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function EducationCard(props) {
  return (
    <Card className="education-card-view">
      <Card.Title style={{textAlign: "left"}}>{props.title}</Card.Title>

    </Card>
  )
}

export default EducationCard;