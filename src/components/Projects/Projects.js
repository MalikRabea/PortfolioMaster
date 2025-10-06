import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import electronicStore from "../../Assets/Projects/electronicStore.webp";
import Articles from "../../Assets/Projects/Articles.jpg"
import Weather  from "../../Assets/Projects/Weather.png"
import SocialNetworking   from "../../Assets/Projects/SocialNetworking.webp"
import Sooq   from "../../Assets/Projects/Sooq.jpg"





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
              imgPath={electronicStore}
              isBlog={false}
              title="Shop E-Commerce"
              description=" (.NET Core , Angular , SQL Server, Redis, Stripe) Fullstack online store: products display,    
                            categories, search, price filter, favorites, basket, checkout with address, delivery, and Stripe
                            payment, Authentication & Authorization using JWT, Rating system post-purchase; backend
                            follows Clean Architecture."
              ghLink="https://github.com/MalikRabea/E-Com-App"
              demoLink="https://e-com-app-ngx.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Articles}
              isBlog={false}
              title="Articles"
              description="(.NET MVC , Bootstrap, SQL) - CRUD operations for articles with clean and responsive UI
                            Repository + Unit of Work + EF Core for maintainable and scalable architecture."
              ghLink="https://github.com/MalikRabea/ArticlProject"
              demoLink="https://articlproject-1.onrender.com/Index"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weather}
              isBlog={false}
              title=" Weather "
              description="(React JS, Material UI, Axios API) - Displayed global weather data in Arabic & English. 
                              Connected frontend with public API for dynamic updates"
              ghLink="https://github.com/MalikRabea/project-weather"
              demoLink="https://quiet-marigold-1df66d.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SocialNetworking }
              isBlog={false}
              title="Simple Social Networking Site "
              description=" (JavaScript, CSS, HTML, Bootstrap, API) -  User registration, login, and profile management
                              Integrated an open-source API through Laravel."
              ghLink="https://github.com/MalikRabea/Simple-social-networking-site"
              demoLink="https://deployx.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Sooq}
              isBlog={false}
              title="SooqJo"
              description="I developed a full-featured online classifieds platform using ASP.NET Core for the backend and Angular for the frontend.

                              The system allows users to create, manage, and browse ads for buying and selling products or services. It includes user authentication, role-based access control, advanced search and filtering,."
              ghLink="https://github.com/MalikRabea/SooqJO-.Net/tree/master/src"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
