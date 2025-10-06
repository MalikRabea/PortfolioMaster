import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avataaars.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CgColorBucket } from "react-icons/cg";

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
              I’m a passionate software developer specialized in building modern web
              applications using <b className="purple">.NET</b> and <b className="purple">Angular</b>.
              <br />
              <br />
              I enjoy turning complex problems into clean, scalable, and efficient solutions.
              My main stack includes{" "}
              <i>
                <b className="purple">C#, TypeScript, SQL, and PostgreSQL</b>
              </i>.
              <br />
              <br />
              I’m particularly interested in developing{" "}
              <i>
                <b className="purple">Web Applications and RESTful APIs</b>
              </i>{" "}
              that provide great performance and user experience.
              <br />
              <br />
              I love working with{" "}
              <b className="purple">ASP.NET Core</b> on the backend and{" "}
              <b className="purple">Angular</b> on the frontend, combining both to
              build full-stack solutions that make a real impact.
            </p>
          </Col>
          <Col md={3}  className="myAvtar">
            <Tilt>
              <img src={myImg} sizes="50" className="img-fluid" alt="avatar" />
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
                  href="https://github.com/MalikRabea"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/malik-rabee-6a2211215/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
