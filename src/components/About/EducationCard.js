import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function EducationCard(props) {
  return (
    <Card className="education-card-view">
      <Card.Body>
        <Row>
          <Col xs={8}>
            <Card.Title className="purple" style={{textAlign: "left"}}>{props.title}</Card.Title>
          </Col>

          <Col>
          <Card.Text style={{textAlign: "right"}}>
            {props.dateRange}
          </Card.Text>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card.Text style={{textAlign: "left"}}>
              {props.issuer}
            </Card.Text>
          </Col>

          <Col>
            <Card.Text style={{textAlign: "right"}}>
              {props.grade}
            </Card.Text>
          </Col>
        </Row>

        {props.activities && props.activities.length > 0 && (
          <div>
            <br />
            <Card.Subtitle style={{textAlign: "left"}}>
              <strong className="purple">Activities:</strong>
            </Card.Subtitle>

            <Card.Text style={{textAlign: "justify"}}>
              {props.activities.join(" • ")}
            </Card.Text>
          </div>
        )}

        {props.modules && props.modules.length > 0 && (
          <div>
            <br />
            <Card.Subtitle style={{textAlign: "left"}}>
              <strong className="purple">Notable Modules:</strong>
            </Card.Subtitle>

            <Card.Text style={{textAlign: "justify"}}>
              {props.modules.join(" • ")}
            </Card.Text>
          </div>
        )}
      </Card.Body>
    </Card>
  )
}

export default EducationCard;