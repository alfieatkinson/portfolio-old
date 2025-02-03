import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaLinkedinIn, FaDiscord, FaEnvelope } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a postgraduate Full-Stack Software Engineer passionate about building innovative web technologies and optimising user experiences.
              <br />
              <br />
              My areas of focus include <i><b className="purple">modern web development</b></i>, <i><b className="purple">cloud technologies</b></i>, and <i><b className="purple">DevOps practices</b></i>. I enjoy creating optimised, user-friendly solutions and solving complex problems.
              <br />
              <br />
              Currently, I'm working with technologies like <b className="purple">React</b>, <b className="purple">Django</b>, and <b className="purple">Node.js</b>; constantly expanding my skillset with tools like <b className="purple">PostgreSQL</b> and <b className="purple">Next.js</b>.
              <br />
              <br />
              I'm also passionate about exploring areas like <b className="purple">artificial intelligence</b>, <b className="purple">cloud computing</b>, and <b className="purple">IoT</b>, eager to apply my knowledge to solve real-world challenges.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/alfieatkinson"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/alfieatkinson"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://discordapp.com/users/407254472105000981"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaDiscord />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:alf.atkinson13@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaEnvelope />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
