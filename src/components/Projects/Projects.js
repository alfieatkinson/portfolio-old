import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import placeholderImage from "../../Assets/Projects/placeholder.png";
import sentimentAnalysisTool from "../../Assets/Projects/sentiment-analysis-tool.png";
import libraryManagementSystem from "../../Assets/Projects/library-management-system.png";
import {
  FaDocker,
  FaReddit,
  FaNetworkWired,
} from "react-icons/fa";
import {
  DiPython,
  DiReact,
  DiHeroku,
  DiGit,
} from "react-icons/di";
import {
  SiGithubactions,
  SiTypescript,
  SiCplusplus,
  SiDjango,
  SiTailwindcss,
  SiPostgresql,
  SiVercel,
  SiOpenverse,
  SiTensorflow,
  SiNumpy,
  SiPandas,
  SiQt,
  SiCmake,
  SiGnubash,
} from "react-icons/si";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeholderImage}
              isBlog={false}
              title="Open-License Media Web App (W.I.P.)"
              description="Currently developing a web application designed to facilitate the searching, browsing, and management of open-license media. The application will also allow for secure user account management. The project is built using a TypeScript/React frontend and a Django/PostgreSQL backend, with CI/CD pipelines for automated testing and deployment on Vercel and Heroku."
              ghLink="https://github.com/alfieatkinson/Open-License-Media-Web-App"
              techIcons={[
                <DiGit />,
                <SiGithubactions />,
                <SiTypescript />,
                <DiReact />,
                <SiTailwindcss />,
                <DiPython />,
                <SiDjango />,
                <SiPostgresql />,
                <SiVercel />,
                <DiHeroku />,
                <FaDocker />,
                <SiOpenverse />,
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={libraryManagementSystem}
              isBlog={false}
              title="Library Management System"
              description="Developed a console-based application in C++ for managing a library system, featuring concurrent access via sockets and full CRUD functionality. Worked independently to implement Test-Driven Development (TDD) with Catch2 for unit tests and automated builds with CMake."
              ghLink="https://github.com/alfieatkinson/Library-Management-System"
              techIcons={[
                <DiGit />,
                <SiCplusplus />,
                <SiCmake />,
                <SiGnubash />,
                <FaNetworkWired />,
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sentimentAnalysisTool}
              isBlog={false}
              title="Sentiment Analysis Tool"
              description="Built a sentiment analysis tool in Python using deep learning models like BERT to analyse social media sentiments in real-time. Integrated Reddit API to fetch specific queries or subreddits, with results displayed via a user-friendly PyQt interface. Designed for scalability to handle high traffic and numerous API requests."
              ghLink="https://github.com/alfieatkinson/sentiment-analysis-tool"
              techIcons={[
                <DiGit />,
                <DiPython />,
                <SiQt />,
                <SiTensorflow />,
                <SiNumpy />,
                <SiPandas />,
                <FaReddit />,
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeholderImage}
              isBlog={false}
              title="Lambda Calculus Interpreter"
              description="Implemented a Python-based interpreter for lambda calculus logic, showcasing key computational theories like symbolic substitution and evaluation. This project enhanced my understanding of functional programming and computational logic, with applications in mathematical modelling and artificial intelligence."
              ghLink="https://github.com/alfieatkinson/lambda-calculus-interpreter"
              techIcons={[<DiPython />]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeholderImage}
              isBlog={false}
              title="Sudoku Solver"
              description="Developed a Python script to solve Sudoku puzzles using constraint satisfaction with the Z3 theorem prover. The solver efficiently handles edge cases and large grids, ensuring compliance with Sudoku rules across rows, columns, and subgrids."
              ghLink="https://github.com/alfieatkinson/sudoku-solver"
              techIcons={[<DiPython />]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
