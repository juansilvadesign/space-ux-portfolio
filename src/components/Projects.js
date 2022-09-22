import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ProjectCard1 } from "./ProjectCard1";
import { ProjectCard2 } from "./ProjectCard2";
import projImg11 from "../assets/img/project-img11.gif";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.gif";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title2: "Comming Soon",
      description2: "Design & Development",
      imgUrl2: projImg4,
      /*url: "",*/
    },
    {
      title2: "Dog's Vet",
      description2: "UX Unicórnio 1.0",
      imgUrl2: projImg6,
    },
    {
      title2: "Comming Soon",
      description2: "Design & Development",
      imgUrl2: projImg3,
    },
    {
      title1: "Land Rover",
      description1: "Desktop UI Design Practice",
      imgUrl1: projImg5,
    },
    {
      title1: "Airbnb",
      description1: "Mobile UI Design Practice",
      imgUrl1: projImg8,
    },
    {
      title1: "NuBank",
      description1: "Mobile UI Design Practice",
      imgUrl1: projImg7,
    },
    {
      title1: "UX Unicornio na Estrada",
      description1: "Front-end Practice",
      imgUrl1: projImg9,
    },
    {
      title: "Agenda Geek",
      description: "ESG Startup",
      imgUrl: projImg11,
    },/*
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
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2 class="unselectable">Projects</h2>
                <p class="unselectable">This is where I compile all my projects and experiences in the IT world, from product design to frontend development projects.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <p class="unselectable">Here you can find real projects with real users, team work and implemented solutions.</p>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p class="unselectable">Mini Cases are short projects with the goal to learn, test and showcase a new skill that are missing in my real projects.</p>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard1
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p class="unselectable">Case Studies are projects that I designed or developed during undergratuation, certification course or bootcamp.</p>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard2
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
