import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaNode,
  FaAws,
  FaDocker,
} from "react-icons/fa";
import {
  DiPython,
  DiReact,
  DiGit,
  DiMysql,
} from "react-icons/di";
import {
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiDjango,
  SiTailwindcss,
  SiPostgresql,
  SiNextdotjs,
  SiKubernetes,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Core Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus />
      </Col>

      {/* Frontend Frameworks */}
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>

      {/* Backend Frameworks/Platforms */}
      <Col xs={4} md={2} className="tech-icons">
        <FaNode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango />
      </Col>

      {/* Databases */}
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>

      {/* DevOps/Infrastructure Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
      </Col>
    </Row>
  );
}

export default Techstack;
