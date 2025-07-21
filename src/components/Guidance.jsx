import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Accordion, Container, Row, Col } from 'react-bootstrap';
import "../App.css";
import acedemicImg from "../assets/acedemics-guidance.png";
import examPrep from "../assets/exam-prep.png";
import careerGuide from "../assets/career-guide.png";
import motivation from "../assets/motivation.png"
import { useNavigate } from 'react-router-dom';

const Guidance = () => {

  const navigate = useNavigate();
  return (
    <>
      <section className='guidance'>
        <Container className=" py-5">
          <Row className="text-center mb-4 mx-auto">
            <Col>
              <h2 className="display-5 fw-bold text-primary">Guidance for Students</h2>
              <p className="lead">
                At Pathshala, we understand that choosing the right academic path or career option can be confusing.
                That's why we’ve created this Guidance Section — a dedicated space to help you make informed decisions about your studies,
                exams, and future career goals.
              </p>
            </Col>
          </Row>

          <Row className="mb-5 py-4 pe-3 border rounded-4 mx-auto guidance-box">
            <Col md={6} className='text-center mb-3 guidance-img'>
              <img
                src={acedemicImg}
                alt="Academic Guidance"
                className="img-fluid rounded-circle border border-primary"
                style={{ height: "350px", width: "80%" }}
              />
            </Col>
            <Col md={6} className='pt-3'>
              <h3 className='text-center fw-bold text-success'>Academic Guidance</h3>
              <Accordion defaultActiveKey="0" flush >
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Choosing the Right Stream (After Class 10)</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>Science, Commerce, or Arts – what suits your interest and strengths?</li>
                      <li>Myths vs. Reality about each stream</li>
                      <li>Long-term career scope and subject requirements</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Subject Selection Tips</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>Which subjects pair well together</li>
                      <li>Tips for scoring well in core subjects (Maths, Science, etc.)</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Study Techniques</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>Time management strategies for school students</li>
                      <li>Effective note-making methods</li>
                      <li>How to create a study timetable and stick to it</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>

          <Row className="mb-5 py-4 ps-3 border rounded-4 mx-auto guidance-box">
            <Col md={6} className='pt-3 mb-3'>
              <h3 className='text-center fw-bold text-danger'>Exam Preparation Tips</h3>
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Board Exams (Class 10 & 12)</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>Syllabus coverage timeline</li>
                      <li>Last 3-month revision plan</li>
                      <li>How to stay calm before exams</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Competitive Exams (UPSC, Railway, Banking, etc.)</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>Smart preparation vs hard preparation</li>
                      <li>What to study and what to skip</li>
                      <li>Free online resources & YouTube channels for preparation</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col md={6} className='text-center guidance-img'>
              <img
                src={examPrep}
                alt="Exam Prep"
                className="img-fluid rounded-circle border border-primary"
                style={{ height: "350px", width: "80%" }}
              />
            </Col>
          </Row>

          <Row className="mb-5 py-4 pe-3 border rounded-4 mx-auto guidance-box">
            <Col md={6} className='text-center mb-3 guidance-img'>
              <img
                src={careerGuide}
                alt="Career Guidance"
                className="img-fluid rounded-circle border border-primary"
                style={{ height: "350px", width: "80%" }}
              />
            </Col>
            <Col md={6} className='pt-3'>
              <h3 className='text-center fw-bold text-warning'>Career & Course Guidance</h3>
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Top Career Options After Class 12</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>Engineering, Medical, Law, Design, Government Jobs</li>
                      <li>Offbeat careers: Ethical Hacking, Data Science, Teaching, etc.</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Courses Without Entrance Exams</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>Skill-based diploma courses</li>
                      <li>Online certification courses with job value</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Government Exams Overview</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>UPSC Civil Services</li>
                      <li>SSC, Railway, and Banking jobs – syllabus, stages, and resources</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>

          <Row className="mb-5 py-4 ps-3 border rounded-4 mx-auto guidance-box">
            <Col md={6} className='pt-3 mb-3'>
              <h3 className='text-center fw-bold text-info'>Motivation & Mental Health</h3>
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>How to stay focused while studying</Accordion.Header>
                  <Accordion.Body>Tips for reducing distractions and building focus habits</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Dealing with failure and low scores</Accordion.Header>
                  <Accordion.Body>Learn from mistakes, not fear them. Everyone struggles at some point.</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Importance of breaks, hobbies, and self-care</Accordion.Header>
                  <Accordion.Body>Balance your study routine with creative, relaxing, or physical activities.</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col md={6} className='text-center guidance-img'>
              <img
                src={motivation}
                alt="Mental Health"
                className="img-fluid rounded-circle border border-primary"
                style={{ height: "350px", width: "80%" }}
              />
            </Col>
          </Row>

          <Row className="text-center mt-5 mx-auto">
            <Col>
              <h4 className='fs-3 fw-bold text-danger'>Still Confused? Ask Us!</h4>
              <p className='fs-5'>
                If you're unsure about anything — stream selection, exam prep, or careers —
                feel free to reach out to us. We’re here to help you find your path.
              </p>
              <button onClick={() => navigate("/contact")} className='btn btn-primary mt-3 px-2 py-1 fs-5'>Contact Us</button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Guidance;