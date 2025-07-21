import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import "../App.css"
import { useNavigate } from 'react-router-dom';

const Material = () => {

  const navigate = useNavigate();
  return (
    <>
      <section className="material-head position-relative text-white">
        <div className="position-absolute top-50 start-50 translate-middle text-center p-4 bg-dark bg-opacity-50 rounded">
          <h2 className="display-4 fw-bold text-white">Our Learning Material</h2>
        </div>
      </section>

      <section className="material-body py-4">
        <div className="container">
          <div className="row mx-auto">
            <div className="col-md-4 mb-4">
              <div className="material-box border rounded-4 p-4">
                <h4 className='text-center fw-bold'>📘 Class 10 Study Material</h4>
                <p>Ace your board exams with comprehensive, well-structured study material for all major subjects.</p>
                <ul>
                  <li><b>Science</b> – NCERT solutions, concept-based notes, numericals</li>
                  <li><b>Mathematics</b> – Formula sheets, examplar problems, model question papers</li>
                  <li><b>Social Science</b> – History, Civics, Geography & Economics keynotes</li>
                  <li><b>English</b> – Literature summaries, grammar practice, writing formats</li>
                  <li><b>Hindi</b> – Chapter explanations, grammar, writing tips</li>
                </ul>

                <button onClick={() => navigate("/resources")} className='btn btn-primary mt-3 px-2 py-1 fs-5'>Get Resources</button>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="material-box border rounded-4 p-4">
                <h4 className='text-center fw-bold'>📘 Class 11 Study Material</h4>
                <p>Prepare confidently for your Class 11 academic journey with our curated resources across major streams.</p>
                <ul>
                  <li><b>Physics</b> – Notes, NCERT solutions, important formulas</li>
                  <li><b>Chemistry</b> – Chapter-wise PDFs, concept maps</li>
                  <li><b>Mathematics</b> – NCERT & examplar solutions, sample papers</li>
                  <li><b>Biology</b> – Diagrams, Q&A sets</li>
                  <li><b>English</b> – Literature summaries, writing skills</li>
                  <li><b>Commerce & Humanities</b> – Key notes for Business Studies, Economics, History</li>
                </ul>

                <button onClick={() => navigate("/resources")} className='btn btn-primary mt-3 px-2 py-1 fs-5'>Get Resources</button>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="material-box border rounded-4 p-4">
                <h4 className='text-center fw-bold'>📘 Class 12 Study Material</h4>
                <p>Master Class 12 board exam prep with organized and simplified content that supports you in your final school year.</p>
                <ul>
                  <li><b>Physics</b> – Derivations, numericals, concept maps</li>
                  <li><b>Chemistry</b> – Organic, Inorganic, and Physical notes</li>
                  <li><b>Mathematics</b> – Important theorems, board papers</li>
                  <li><b>Biology</b> – NCERT-based Q&A, labelled diagrams</li>
                  <li><b>English</b> – Chapter summaries, grammar</li>
                  <li><b>Commerce & Arts</b> – Business Studies, Political Science, Accountancy notes</li>
                </ul>

                <button onClick={() => navigate("/resources")} className='btn btn-primary mt-3 px-2 py-1 fs-5'>Get Resources</button>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="material-box border rounded-4 p-4">
                <h4 className='text-center fw-bold'>🏛️ UPSC Civil Services</h4>
                <p>Get access to curated content for the UPSC Civil Services Exam. Our material covers NCERTs, current affairs, previous year papers, toppers’ notes, GS papers, optional subjects, and interview guidance.</p>
                <ul>
                      <li>NCERT Notes (Class 6–12)</li>
                      <li>Geography, Economy, History Modules</li>
                      <li>CSAT Practice Papers</li>
                      <li>Monthly Current Affairs PDFs</li>
                </ul>

                <button onClick={() => navigate("/resources")} className='btn btn-primary mt-3 px-2 py-1 fs-5'>Get Resources</button>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="material-box border rounded-4 p-4">
                <h4 className='text-center fw-bold'>🚆 Railway Exams (RRB NTPC, Group D)</h4>
                <p>Comprehensive preparation kits for RRB NTPC, Group D, JE, and ALP exams including syllabus-based notes, reasoning and math tricks, mock tests, and previous question papers.</p>
                <ul>
                      <li>General Awareness Notes</li>
                      <li>Arithmetic Shortcuts & Practice</li>
                      <li>Mock Papers</li>
                </ul>

                <button onClick={() => navigate("/resources")} className='btn btn-primary mt-3 px-2 py-1 fs-5'>Get Resources</button>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="material-box border rounded-4 p-4">
                <h4 className='text-center fw-bold'>🏦 Banking Exams (IBPS, SBI, RBI, PO, Clerk, etc)</h4>
                <p>Target bank exams with material for Quant, Reasoning, English, GK, Computer Awareness, and Banking Awareness. Includes sectional quizzes, practice sets, and interview preparation content.</p>
                <ul>
                      <li>Quantitative Aptitude Notes</li>
                      <li>Logical Reasoning Questions</li>
                      <li>Banking Awareness Capsules</li>
                </ul>

                <button onClick={() => navigate("/resources")} className='btn btn-primary mt-3 px-2 py-1 fs-5'>Get Resources</button>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="material-box border rounded-4 p-4">
                <h4 className='text-center fw-bold'>💻 Web Development</h4>
                <p>Start your coding journey with easy-to-follow web dev tutorials. Build your own projects using the latest tools and frameworks.</p>
                <ul>
                  <li>HTML, CSS, JavaScript Basics</li>
                  <li>Responsive Design Concepts</li>
                  <li>React.js Fundamentals</li>
                  <li>Mini Projects with Source Code</li>
                  <li>GitHub Deployment Tips</li>
                </ul>

                <button onClick={() => navigate("/resources")} className='btn btn-primary mt-3 px-2 py-1 fs-5'>Get Resources</button>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="material-box border rounded-4 p-4">
                <h4 className='text-center fw-bold'>📊 Data Science</h4>
                <p>Explore the world of data with practical guides and tutorials. From beginner Python to advanced ML algorithms.</p>
                <ul>
                  <li>Python for Data Analysis</li>
                  <li>Pandas, NumPy, Matplotlib</li>
                  <li>Machine Learning Algorithms</li>
                  <li>Real-Time Projects & Datasets</li>
                  <li>Jupyter Notebooks & Practice Files</li>
                </ul>

                <button onClick={() => navigate("/resources")} className='btn btn-primary mt-3 px-2 py-1 fs-5'>Get Resources</button>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="material-box border rounded-4 p-4">
                <h4 className='text-center fw-bold'>🔐 Cyber Security</h4>
                <p>Secure your digital world with our beginner-friendly cybersecurity content, tutorials, and simulations.</p>
                <ul>
                  <li>Cyber Threat Types & Prevention</li>
                  <li>Ethical Hacking Tools: Kali Linux</li>
                  <li>Network Security Basics</li>
                  <li>Cyber Laws in India</li>
                  <li>Capture-the-Flag Challenges</li>
                </ul>

                <button onClick={() => navigate("/resources")} className='btn btn-primary mt-3 px-2 py-1 fs-5'>Get Resources</button>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="material-box border rounded-4 p-4">
                <h4 className='text-center fw-bold'>👨‍🏫 Teaching Resources</h4>
                <p>Aspiring educators can access rich teaching material and strategies for both online and offline classrooms.</p>
                <ul>
                  <li>Teaching Methodologies (Traditional + Modern)</li>
                  <li>Subject-wise Teaching Plans</li>
                  <li>Online Teaching Tools (Google Meet, Zoom, etc.)</li>
                  <li>Classroom Management Techniques</li>
                  <li>Interview Preparation for Teaching Jobs</li>
                </ul>

                <button onClick={() => navigate("/resources")} className='btn btn-primary mt-3 px-2 py-1 fs-5'>Get Resources</button>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="material-box border rounded-4 p-4">
                <h4 className='text-center fw-bold'>🔄 More Coming Soon...</h4>
                <p>We are constantly updating our content bank! Stay tuned for material on GATE, SSC CGL, NDA, B.Ed., Computer Basics, and more.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Material;
