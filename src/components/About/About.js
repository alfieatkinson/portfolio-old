import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Educationcard from "./EducationCard";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Github />
        
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="purple">Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>

        <Toolstack />

        <br />

        <h1 className="project-heading">
          Where I've <strong className="purple">Learned</strong>
        </h1>

        <br />

        <Row>
          <Col>
            <Educationcard
              title="Master of Science in Computer Science"
              issuer="University of Lincoln"
              dateRange="2024 - 2025"
              grade="Predicted: Distinction (AVG: 84%)"
              activities={[
                "Computer Science Society Member",
                "Hackathon Participant"
              ]}
              modules={[
                "Advanced Artificial Intelligence",
                "Advanced Machine Learning",
                "Computer Vision",
                "Information Systems Security",
                "Programming Principles",
                "Research Methods",
                "Research Project",
                "Software Engineering"
              ]}
            />
          </Col>
          <Col>
            <Educationcard
              title="Bachelor of Science in Computer Science"
              issuer="University of Lincoln"
              dateRange="2021 - 2024"
              grade="First Class Honours"
              activities={[
                "Computer Science Society Member",
                "Hackathon Participant",
                "UKIEPC Participant"
              ]}
              modules={[
                "Advanced Programming",
                "Algorithms and Complexity",
                "Artificial Intelligence",
                "Cloud Computing",
                "Logic and Computation",
                "Machine Learning",
                "Network Fundamentals",
                "Parallel Programming",
                "Scalable Database Systems",
                "Team Software Engineering",
                "User Experience Design"
              ]}
            />
          </Col>
        </Row>

        <br />
      </Container>
    </Container>
  );
}

export default About;
