import React, { useEffect, useState } from "react";

import mc1 from "../assets/img/mc1.gif";
import mc2 from "../assets/img/mc2.png";
import mc3 from "../assets/img/mc3.png";
import mc4 from "../assets/img/mc4.png";

import rp1 from "../assets/img/rp1.gif";

import cs1 from "../assets/img/cs1.png";
import cs2 from "../assets/img/cs2.png";
import cs3 from "../assets/img/cs3.png";

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import VerticallyCenteredModal from "./VerticallyCenteredModal";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

function Projects () {

  const mcProjects = [
    {
      title: "Land Rover",
      description: "Desktop UI Design Practice",
      imgUrl: mc1,
      demoUrl: "/"
    },
    {
      title1: "Airbnb",
      description1: "Mobile UI Design Practice",
      imgUrl1: mc2,
      demoUrl: "/"
    },
    {
      title1: "NuBank",
      description1: "Mobile UI Design Practice",
      imgUrl1: mc3,
      demoUrl: "/"
    },
    {
      title1: "UX Unicornio na Estrada",
      description1: "Front-end Practice",
      imgUrl1: mc4,
      demoUrl: "/"
    },
  ];

  const rpProjects = [
    {
      title: "Agenda Geek",
      description: "ESG Startup",
      imgUrl: rp1,
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
      demoUrl: "/"
    },
    {
      title1: "Comming Soon",
      description1: "Design & Development",
      imgUrl1: cs3,
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
            <TrackVisibility
              offset={offset}
              partialVisibility={partialVisibility}
            >
              {({ isVisible }) => (
              <div 
                className={
                  isVisible ? "animate__animated animate__fadeIn"
                  : "animate__animated animate__fadeOut"
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
                      : "animate__animated animate__lightSpeedOutLeft"
                    }
                  >
                    <Tab.Pane eventKey="first">
                      <p class="unselectable">Here you can find real projects with real users, team work and implemented solutions.</p>
                      <Row>
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
                      <Row>
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
                      <Row>
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