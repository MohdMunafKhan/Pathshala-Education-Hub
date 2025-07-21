import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import "../App.css";
import aboutHead from "../assets/about-head.png";
import aboutStory from "../assets/about-story.png";
import { useNavigate } from 'react-router-dom';

const About = () => {

  const navigate = useNavigate();
  return (
    <>
      <section className="about-head position-relative text-white mb-5">
        <div className="position-absolute top-50 start-50 translate-middle text-center p-4 bg-dark bg-opacity-50 rounded">
          <p className="display-4 fw-bold text-white">About Us</p>
          <p className="lead text-white">Dedicated to making quality education accessible to all.</p>
        </div>
      </section>

      <section className="story mb-3">
        <div className="container">
          <div className="row mx-auto">
            <div className="col-md-6 mb-5">
              <div className="story-box border rounded-4 px-4 py-3">
                <h3 className='text-center fs-3 fw-bold text-danger'>Our Story</h3>
                <p>Pathshala was born out of a vision to bridge the educational gap by providing free and accessible learning resources to every student, regardless of their background.</p>
                <p>We believe that education is a right, not a privilege, and through our digital platform, we offer curated study material, academic guidance, and skill-building resources to help learners grow and succeed.</p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="story-img-box d-flex justify-content-center">
                <img
                  src={aboutStory}
                  alt="Story Img" className='img-fluid rounded-4' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vision-mission py-5 px-3 mb-3">
        <div className="container">
          <div className="row mx-auto">
            <div className="col-md-6 col-12">
              <div className='border rounded-4 py-3 px-4 bg-white vision-box mb-5'>
                <h3 className='text-center fw-bold text-warning'>Vision</h3>
                <p>A future where every student has equal access to quality education and the opportunity to thrive through knowledge, regardless of geography, income, or circumstance.</p>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className='border rounded-4 py-3 px-4 bg-white mission-box'>
                <h3 className='text-center fw-bold text-warning'>Mission</h3>
                <p>To empower students and learners by offering free, high-quality educational content and tools that support academic growth, self-learning, and personal development.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="impact py-4 px-3 mb-3">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12">
              <h3 className='text-center fw-bold fs-3 text-success'>Our Impact</h3>
            </div>
          </div>
          <div className="row mx-auto">
            <div className="col-md-4 mb-4">
              <div className="impact-box border rounded-4 px-4 py-4 text-center">
                <p className='fs-4'>📚 3000+ Study Materials Shared</p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="impact-box border rounded-4 px-4 py-4 text-center">
                <p className='fs-4'>🌍 100+ Communities Reached</p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="impact-box border rounded-4 px-4 py-4 text-center">
                <p className='fs-4'>👩‍💻 500+ Students Benefited through Mentorship</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="recognitions py-4 px-3 mb-4">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12">
              <h3 className='text-center fw-bold fs-3 text-success'>Recognitions</h3>
            </div>
          </div>
          <div className="row mx-auto">
            <div className="col-md-6 mb-4">
              <div className="recognition-box border rounded-4 px-4 py-4 text-center">
                <p className='fs-4'>Recognized by various educators and community leaders for contributing to open learning</p>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="recognition-box border rounded-4 px-4 py-4 text-center">
                <p className='fs-4'>Partnered with local NGOs and volunteers to spread digital education in underserved areas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="join-sec py-4 px-3 mb-5">
        <div className="container">
          <div className="row mx-auto text-center">
            <div className="col-12">
              <h3 className='fw-bold fs-3 text-danger'>Join Us in Empowering Education</h3>
              <p className='fs-5'>Be part of our journey to make a lasting difference in students' lives. Whether you want to contribute, collaborate, or learn—<span className='text-primary fw-bold'>Pathshala welcomes you.</span></p>

              <button onClick={() => navigate("/member")} className='btn btn-info text-white mt-2 me-3 px-3 py-2 fs-6'>Become a Member</button>
              <button onClick={() => navigate("/support")} className='btn btn-success mt-2 px-3 py-2 fs-6'>Support Us</button>

            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default About
