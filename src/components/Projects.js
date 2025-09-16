import React, { useEffect, useState } from "react";

import mc1 from "../assets/img/mc1.gif";
import mc2 from "../assets/img/mc2.png";
import mc3 from "../assets/img/mc3.png";
import mc4 from "../assets/img/mc4.png";

import rp1 from "../assets/img/rp1.gif";
import rp2 from "../assets/img/rp2.png";
import rp3 from "../assets/img/rp3.png";
import rp4 from "../assets/img/rp4.png";
import rp5 from "../assets/img/rp5.png";

import cs1 from "../assets/img/cs1.png";
import cs2 from "../assets/img/cs2.png";
import cs3 from "../assets/img/cs3.png";

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

function Projects () {

  const mcProjects = [
    {
      title: "Land Rover",
      description: "Desktop UI Design Practice",
      imgUrl: mc1,
      demoUrl: "https://www.figma.com/proto/GugOlKAn9OfeDVFYqkYIN5/Figma-UI-Design-Landc%C3%B3rnio-02-Gabarito?node-id=2%3A5859&viewport=41%2C-153%2C0.19&scaling=min-zoom&starting-point-node-id=9%3A1804",
    },
    {
      title: "Airbnb",
      description1: "Mobile UI Design Practice",
      imgUrl: mc2,
      demoUrl: "https://www.figma.com/proto/Ua9mzeXWiuVJjMVWMNRvXQ/Prot%C3%B3tipo-Unibnb-UX-Unic%C3%B3rnio?node-id=3%3A2&viewport=598%2C713%2C0.26&scaling=min-zoom&starting-point-node-id=101%3A684",
    },
    {
      title: "NuBank",
      description1: "Mobile UI Design Practice",
      imgUrl: mc3,
      demoUrl: "https://www.figma.com/proto/5q46Fau8Z9Pyz5jZ19JLop/Figma-UI-Design-Unibank-01-Gabarito-Copy?node-id=0%3A1&viewport=312%2C475%2C0.46&scaling=scale-down&starting-point-node-id=2%3A5",
    },
    {
      title: "UX Unicornio na Estrada",
      description1: "Front-end Practice",
      imgUrl: mc4,
    },
  ];
  
  const rpProjects = [
    {
      title: "KAT Investments (Safra)",
      description: "FinTech",
      imgUrl: rp2,
      demoUrl: "https://www.figma.com/proto/ZxMu3g3sY3P9s2fWtXXYOJ/Safra-Assessor-and-Head-otimizado?node-id=1-16&node-type=canvas&viewport=2008%2C321%2C0.04&t=tCJq5DeE5T8ylMuF-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=5112%3A1773&show-proto-sidebar=1",
    },
    {
      title: "Sapiens Agro",
      description: "AgroTech",
      imgUrl: rp3,
      demoUrl: "https://www.figma.com/proto/ABzBHVlbsu2fNNoZKgEHDd/Sapiens-Agro?node-id=1-16&node-type=canvas&viewport=2237%2C91%2C0.04&t=BWiCb18Hj9VCyV5v-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=5112%3A1773&show-proto-sidebar=1",
    },
    {
      title: "Banco Lucrativo",
      description: "FinTech",
      imgUrl: rp4,
      demoUrl: "https://www.figma.com/proto/5ErmJTWIFG2kIWLUQxgEOi/Banco-Lucrativo?node-id=1-16&node-type=canvas&viewport=21185%2C-559%2C0.19&t=ObwzmdlFjHNkc8Of-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2976%3A36077&show-proto-sidebar=1",
    },
    {
      title: "EasyBuyCard",
      description: "FinTech",
      imgUrl: rp5,
      demoUrl: "https://www.figma.com/proto/xWAULAqrxMN2pOd2mXBloO/EasyBuyCard?node-id=1-16&node-type=canvas&viewport=15500%2C-318%2C0.17&t=ogUdDoRIAupEnWTo-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=8003%3A201166&show-proto-sidebar=1",
    },
    {
      title: "Agenda Geek",
      description: "ESG Startup",
      imgUrl: rp1,
      demoUrl: "https://www.figma.com/proto/OD664WpvRoF8x2mMyhTPnr/Agenda-Geek-g86?node-id=6%3A19&viewport=691%2C375%2C0.02&scaling=contain&starting-point-node-id=805%3A7309",
      caseUrl: "https://jaypy.notion.site/Agenda-Geek-Improving-the-sign-up-of-High-Schools-in-educational-events-2704af1e1a3981bfa0cee7a4034e94dd?source=copy_link",
    },
  ];
  
  const csProjects = [
    {
      title: "Comming Soon",
      description: "Design & Development",
      imgUrl: cs1,
    },
    {
      title: "Dog's Vet",
      description: "UX Unicórnio 1.0",
      imgUrl: cs2,
    },
    {
      title: "Comming Soon",
      description: "Design & Development",
      imgUrl: cs3,
    },
  ];
    
    /*
    {
      title2: "Business Startup",
      description2: "Design & Development",
      imgUrl2: projImg2,
    },
    {
      title2: "Business Startup",
      description2: "Design & Development",
      imgUrl2: projImg3,
    },*/

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };


  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
              <div 
                className={
                  isVisible ? "animate__animated animate__fadeIn"
                  : ""
                }
              >  
                <h2 class="unselectable">Projects</h2>
                
                <p class="unselectable">This is where I compile all my projects and experiences in the IT world, from product design to frontend development projects.</p>
                
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav 
                    variant="pills" 
                    className="nav-pills mb-5 justify-content-center align-items-center" 
                    id="pills-tab"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="second">Mini Cases</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="first">Real Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Case Studies</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content
                    id="slideInUp"
                    className={isVisible
                      ? "animate__animated animate__slideInUp"
                      : ""
                    }
                  >
                    <Tab.Pane eventKey="first">
                      <p class="unselectable">Here you can find real projects with real users, team work and implemented solutions.</p>
                      <Row className="projects--tabPane">
                        {rpProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
																onCaseClick={() =>
																	openInNewTab(project.caseUrl)
																}
																onDemoClick={() => openInNewTab(project.demoUrl)}
                              />
                            );
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p class="unselectable">Mini Cases are short projects with the goal to learn, test and showcase a new skill that are missing in my real projects.</p>
                      <Row className="projects--tabPane">
                        {mcProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
																onDemoClick={() => openInNewTab(project.demoUrl)}
                              />
                            );
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p class="unselectable">Case Studies are projects that I designed or developed during undergratuation, certification course or bootcamp.</p>
                      <Row className="projects--tabPane">
                        {
                          csProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
																onDemoClick={() => openInNewTab(project.demoUrl)}
                                />
                            );
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>)}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="backgroundImageRight"
      ></img>
    </section>
  );
}

export default Projects;