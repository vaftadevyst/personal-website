import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1.png";
import projImg11 from "../assets/img/project1.1.png";
import projImg12 from "../assets/img/project1.2.png";
import projImg2 from "../assets/img/project2.png";
import projImg21 from "../assets/img/project2.1.png";
import projImg3 from "../assets/img/project3.png";
import projImg31 from "../assets/img/project3.1.png";
import projImg4 from "../assets/img/project4.png";
import projImg41 from "../assets/img/project4.1.png";
import projImg42 from "../assets/img/project4.2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects1 = [
    {
      title: "Mini Portfolio Website",
      description: "Web Development",
      imgUrl: projImg1,
    },
    {
      title: "Mini Portfolio Website",
      description: "Web Development",
      imgUrl: projImg11,
    },
    {
      title: "Mini Portfolio Website",
      description: "Web Development",
      imgUrl: projImg12,
    },
    {
      title: "Resume Website",
      description: "Web Development",
      imgUrl: projImg3,
    },
    {
      title: "Resume Website",
      description: "Web Development",
      imgUrl: projImg31,
    }
  ];
  const projects2 = [
    {
      title: "Profile Company Website",
      description: "Web Development",
      imgUrl: projImg2,
    },
    {
      title: "Profile Company Website",
      description: "Web Development",
      imgUrl: projImg21,
    }
  ];
  const projects3 = [
    {
      title: "Modern Dashboard",
      description: "Dashboard Creation",
      imgUrl: projImg4,
    },
    {
      title: "Modern Dashboard",
      description: "Dashboard Creation",
      imgUrl: projImg41,
    },
    {
      title: "Dashboard Modern Design",
      description: "Dashboard Creation",
      imgUrl: projImg42,
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Recent Our Project</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Personal Website</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Profile Website</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Modern Dashboard</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects1.map((project, index) => {
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
                      <Row>
                        {
                          projects2.map((project, index) => {
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
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects3.map((project, index) => {
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
