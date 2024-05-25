import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import jupytr from"../../Assets/Projects/analytic_jupyter.png";


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
              imgPath={chatify}
              isBlog={false}
              title="Whatsapp bot"
              description="Define your expected messages and your reply to that particular message . Your reply to expected is being saved in Realm DB and when some Notification pop-up it'll listen to it and if there's any reply message in the DB it'll reply to that person. Right now I am only targeting WhatsApp but you can change the package name from com.whatsapp to telegram, signal or any other ."
              ghLink="https://github.com/suyashm002/watsappp_bot"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="FetchWhatsapp Mesaages"
              description="This Android application reads WhatsApp messages from notifications and uploads them to Firebase. This can be useful for various purposes such as message backups, analytics, or integration with other services."
              ghLink="https://github.com/suyashm002/fetchWhatsappdata"           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jupytr}
              isBlog={false}
              title="Investment Analysis"
              description="Investment Analysis using python on Jupyter notebook data provided by crunchbase"
              ghLink="https://github.com/suyashm002/investment_analytics"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
