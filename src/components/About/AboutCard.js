import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I’m <span className="purple">Malik Rabea </span>
            from <span className="purple"> Jordan.</span>
            <br />
            I’m a passionate <b className="purple">Full Stack .NET Developer</b> specializing in building
            modern, scalable web applications using{" "}
            <b className="purple">ASP.NET Core</b> and{" "}
            <b className="purple">Angular</b>.
            <br />
            <br />
            I work confidently with both{" "}
            <b className="purple">SQL Server</b> and{" "}
            <b className="purple">PostgreSQL</b> databases, focusing on clean architecture,
            performance, and best coding practices.
            <br />
            <br />
            Apart from coding, some other activities I enjoy include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Learning new technologies & improving my skills
            </li>
            <li className="about-activity">
              <ImPointRight /> Working on personal or open-source projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring tech communities and sharing knowledge
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code with purpose, learn with passion, and build with impact."
          </p>
          <footer className="blockquote-footer">Malik Rabea</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
