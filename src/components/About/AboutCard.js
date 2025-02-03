import React from "react";
import Card from "react-bootstrap/Card";
import { FaArrowRight } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! I'm <span className="purple">Alfie Atkinson </span>
            from the <span className="purple"> United Kingdom.</span>
            <br />
            I am a Postgraduate Full-Stack Software Engineer with hands-on
            experience with Agile development, DevOps practices, and cloud
            technologies.
            <br />
            I am currently studying for a Master of Science in Computer Science at the University of Lincoln, and I am seeking a graduate roles beginning in September of 2025.
            <br />
            <br />
            I also enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <FaArrowRight /> Playing video games and table-top games
            </li>
            <li className="about-activity">
              <FaArrowRight /> Building custom computers
            </li>
            <li className="about-activity">
              <FaArrowRight /> Reading fantasy novels and thought-provoking literature
            </li>
            <li className="about-activity">
              <FaArrowRight /> Collecting vinyl and exploring different music genres
            </li>
          </ul>

          {/*<p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>*/}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
