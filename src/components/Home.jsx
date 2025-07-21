import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Carousel } from 'react-bootstrap';
import "../App.css";
import { useNavigate } from 'react-router-dom';
import homeAbout from "../assets/home-about.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faUser, faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons';

const Home = () => {

    const navigate = useNavigate();

    const textArr = [
        "Pathshala – Free Learning for Every Mind",
        "Unlocking Knowledge, Building Futures",
        "Learn, Grow, and Succeed – Anytime, Anywhere"
    ];

    const [text, setText] = useState(textArr[0]);
    const [index, setIndex] = useState(0);

    const stories = [
        {
            name: "Riya Verma – Class 10 Student, Bihar",
            quote:
                "Coming from a small village, I had limited access to study materials. Pathshala helped me prepare for my board exams with free notes and video explanations. I scored 92% in my finals — it changed my confidence and my future!",
        },
        {
            name: "Sameer Sheikh – NEET Aspirant, Uttar Pradesh",
            quote:
                "I couldn’t afford coaching classes, but Pathshala gave me structured content, mock tests, and motivation. I cracked NEET with a good score and got admission to a government medical college. Thank you, Pathshala!",
        },
        {
            name: "Pooja Rathi – First-Gen Learner, Rajasthan",
            quote:
                "Being the first in my family to study beyond Class 8, I felt lost. Pathshala’s beginner-friendly lessons and career guidance helped me choose the right path. Today, I’m pursuing B.Com and even mentoring my younger siblings.",
        },
        {
            name: "Ankit Meena – Polytechnic Student, Madhya Pradesh",
            quote:
                "I always struggled with technical subjects. With Pathshala’s videos and doubt-clearing content, I understood concepts easily. Now, I help others in my class and aim to build my own tech startup one day.",
        },
        {
            name: "Farheen Ansari – Class 12 Arts Student, Maharashtra",
            quote:
                "I didn’t have access to good teachers for History and Political Science. Pathshala’s notes and chapter-wise explanations helped me understand every topic clearly. I scored distinction and now I’m preparing for UPSC — confidently!",
        },
        {
            name: "Nazma Bano – Homemaker & Learner, Delhi",
            quote:
                "After years away from studies, I wanted to complete my 12th and learn basic computer skills. Pathshala’s simple and supportive content gave me the courage to start again. I cleared NIOS and enrolled in a computer diploma course.",
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % textArr.length);
            setText(textArr[index]);
        }, 3000); //Changes text every 3 seconds
        return () => clearInterval(interval);
    }, [index]);

    return (
        <>
            <header className="header-section position-relative text-white mb-5">
                <div className="position-absolute top-50 start-50 translate-middle text-center p-4 bg-dark bg-opacity-50 rounded">
                    <p className="display-4 fw-bold text-white">{text}</p>
                    <p className="lead text-white">Lighting the Way to a Brighter Tomorrow.</p>
                    <button onClick={() => navigate("/member")} className='btn btn-primary mt-3 px-4 py-2 fs-5'>Join Us</button>
                </div>
            </header>

            <section className="about-home mb-5">
                <div className="container">
                    <div className="row mx-auto">
                        <div className="col-md-6 col-12 px-3 py-4">
                            <h3 className='fw-bold text-danger'>🟧 About Pathshala</h3>
                            <p className='fs-5'>Pathshala is a free educational resource hub committed to making quality learning accessible to all. We aim to support students, self-learners, and educators by providing curated study materials, subject-wise content, interactive resources, and guidance — all at no cost.</p>
                            <button onClick={() => navigate("/about")} className='btn btn-primary mt-2 px-3 py-2 fs-6'>Learn More</button>
                        </div>
                        <div className="col-md-6 col-12 p-2 text-center">
                            <img src={homeAbout} alt="#" className='img-fluid border rounded-4' />
                        </div>
                    </div>
                </div>
            </section>

            <section className="vision-mission py-5 px-3">
                <div className="container">
                    <div className="row mx-auto">
                        <div className="col-md-6 col-12">
                            <div className='border rounded-4 py-3 px-4 bg-white vision-box mb-5'>
                                <h3 className='text-center fw-bold text-warning'>Our Vision</h3>
                                <p>At Pathshala, we envision a world where every child and learner has access to quality education without barriers. We believe that education is a fundamental right, not a privilege — and through technology, we aim to bridge the gap between knowledge and those who seek it. Our goal is to inspire a generation of learners who are curious, confident, and capable of shaping a brighter future.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className='border rounded-4 py-3 px-4 bg-white mission-box'>
                                <h3 className='text-center fw-bold text-warning'>Our Mission</h3>
                                <p>Our mission is to build a free and inclusive educational platform that offers well-structured, reliable, and easy-to-understand learning resources. We strive to support school students, competitive exam aspirants, and lifelong learners with study materials, interactive tools, and guidance. Pathshala is committed to fostering self-learning and making knowledge accessible in every corner of India.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="recognition py-4 px-3">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-12 text-center">
                            <h3 className='fw-bold text-success'>Our Recognition</h3>
                            <p className='fs-5'>At Pathshala, our efforts to deliver quality, free educational content have earned us recognition from educators, communities, and social innovation networks across India.</p>
                        </div>
                    </div>

                    <div className="row mx-auto">
                        <div className="col-12 p-3 recog-box mb-4 border rounded-4">
                            <h5 className='text-primary fw-bold'>Our Partners</h5>
                            <p>We’ve proudly collaborated with organizations that share our mission to democratize learning:</p>
                            <ul>
                                <li>- <b>Shiksha Setu Foundation</b> – A grassroots NGO promoting rural education.</li>
                                <li>- <b>EduConnect India</b> – A youth-led movement for academic equity.</li>
                                <li>- <b>Digital Bharti Trust</b> – Supporting digital transformation in government schools.</li>
                                <li>- <b>Students4Students Network</b> – Peer-led mentoring and tutoring collective.</li>
                            </ul>
                            <p>These partnerships have helped us expand our outreach, distribute learning materials, and conduct awareness drives across 9+ Indian states.</p>
                        </div>

                        <div className="col-12 p-3 recog-box mb-4 border rounded-4">
                            <h5 className='text-primary fw-bold'>Awards & Honors</h5>
                            <p>Our work has been recognized through:</p>
                            <ul>
                                <li><b>🏅 Social Impact Innovator of the Year 2024</b> – by Youth Education Forum</li>
                                <li><b>🏆 Top 10 EdTech Initiatives</b> – featured in IndiaNext EduSummit</li>
                                <li><b>🥇 Digital Changemaker Award</b>  – by LearnForAll Journal</li>
                                <li><b>📣 Featured Story</b> – The ClassRoom India Magazine, July 2024 Edition</li>
                            </ul>
                        </div>

                        <div className="col-12">
                            <p className='fs-5 text-center'>With over 15,000+ learners reached, 200+ volunteer educators, and increasing recognition in both digital and offline platforms — Pathshala continues to grow as a trusted platform for inclusive education.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="success-stories py-5 px-3">
                <div className="container">
                    <h2 className="text-center mb-4 fw-bold text-success">Success Stories</h2>
                    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {stories.map((story, index) => (
                                <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                                    <div className="card p-4 border-0 rounded-4 mx-auto stories" style={{ maxWidth: "800px" }}>
                                        <div className="card-body">
                                            <p className="card-text fs-5 text-muted">“{story.quote}”</p>
                                            <h5 className="card-title mt-3 text-end fw-semibold text-primary">{story.name}</h5>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </section>

            <section className="connect py-5 px-3 mb-5">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-12 text-center">
                            <h3 className='fw-bold text-danger'>Get Involved</h3>
                        </div>
                    </div>
                    <div className="row mx-auto">
                        <div className="col-md-4 mb-4">
                            <div className='border rounded-4 p-3 text-center connect-box'>
                                <h5 className='fw-bold text-primary'>Become a Member</h5>
                                <p>Join our growing community of learners, educators, and supporters. Stay informed, participate, and grow together with Pathshala.</p>

                                <button onClick={() => navigate("/member")} className='btn btn-primary mt-2 px-4 py-2 fs-6'><FontAwesomeIcon icon={faUser} style={{ color: 'white' }} /></button>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className='border rounded-4 p-3 text-center connect-box'>
                                <h5 className='fw-bold text-success'>Donate for Education</h5>
                                <p>Help us provide free educational resources to every student, everywhere. Every donation helps build a brighter future.</p>

                                <button onClick={() => navigate("/support")} className='btn btn-primary mt-2 px-4 py-2 fs-6'><FontAwesomeIcon icon={faHandHoldingDollar} style={{ color: 'white' }} /></button>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className='border rounded-4 p-3 text-center connect-box'>
                                <h5 className='fw-bold text-primary'>Join Our Learning Community</h5>
                                <p>Be part of an inspiring WhatsApp community where learners and educators share ideas, discuss doubts, and grow together.</p>

                                <button className='btn btn-primary mt-2 px-4 py-2 fs-6' onClick={() => window.open('https://wa.me/8375056468', '_blank')}><FontAwesomeIcon icon={faWhatsapp} style={{ color: 'white' }} /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;
