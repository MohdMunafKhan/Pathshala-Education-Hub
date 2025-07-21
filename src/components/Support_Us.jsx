import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import supportImg from "../assets/support-head-img.png";
import Logo from "../assets/Logo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Support_Us = () => {

  return (
    <>
      <section className="support py-4">
        <div className="container mb-4">
          <div className="row">
            <div className="col-12">
              <h2 className='text-center fw-bold display-5 text-primary'>Support Us</h2>
            </div>
          </div>
        </div>

        <div className="container mb-5">
          <div className="row mx-auto">
            <div className="col-md-6 p-3">
              <div className="support-box-1 p-3 border rounded-4">
                <h3 className='text-center fs-3 fw-bold text-danger'>Be a Part of the Change</h3>
                <p className='fs-5'>At Pathshala, we believe education is a right, not a privilege. Our mission is to provide free and quality resources to students from all backgrounds — especially those who lack access to proper guidance, mentorship, or financial means.</p>
                <p className='fs-5'>With your support, we can continue to reach and empower thousands of students across the country.</p>
              </div>
            </div>

            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <div className="support-box-img">
                <img
                  src={supportImg}
                  alt="Support Image"
                  className='img-fluid border rounded-4 '
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container mb-4">
          <div className="row mx-auto">
            <div className="col-12 py-3">
              <h3 className='text-center fs-3 fw-bold text-warning'>Why Support Matters</h3>
              <p className='text-center fs-5'>“Education is the most powerful weapon which you can use to change the world.” <br /><i>— Nelson Mandela</i></p>
            </div>
          </div>
        </div>

        <div className="container mb-4">
          <div className="row mx-auto mb-3">
            <div className="col-12">
              <h3 className='text-center fs-3 fw-bold text-danger'>How You Can Support</h3>
            </div>
          </div>

          <div className="row mx-auto support-donate border rounded-4 mb-3">
            <div className="col-12 pt-3">
              <h4 className='text-center fs-2 fw-bold text-success'>Donate</h4>
            </div>
            <div className="col-12 d-flex justify-content-around align-items-center flex-wrap p-3">
              <div className="support-donate-img mb-3">
                <img 
                  src={Logo} 
                  alt="Not Found" 
                  className='img-fluid'
                />
              </div>
              
              <div className="support-donate-box text-center">
                <dl>
                  <dt className='text-center fs-4'>Bank Details</dt>
                  <dd><b>Bank Name: </b>National Youth Development Bank</dd>
                  <dd><b>Account Holder Name: </b>Pathshala Education Hub</dd>
                  <dd><b>Account Number: </b>123456789012</dd>
                  <dd><b>IFSC Code: </b>NYDB0001234</dd>
                  <dd><b>Branch: </b>Connaught Place, New Delhi</dd>

                  <dd>You can also contribute via UPI: 9876543210</dd>
                </dl>
              </div>
            </div>
          </div>

          <div className="row mx-auto">
            <div className="col-md-6 p-3 mb-3">
              <div className="support-box-2 border p-3 rounded-4">
                <h4 className='text-center fs-4 fw-bold text-warning'>Become a Mentor or Volunteer</h4>
                <ul className='fs-5'>
                  <li>Guide students in their academic or career journey</li>
                  <li>Share your skills in teaching, tech, counselling, design, etc.</li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 p-3 mb-3">
              <div className="support-box-2 border p-3 rounded-4">
                <h4 className='text-center fs-4 fw-bold text-primary'>Donate Study Materials</h4>
                <ul className='fs-5'>
                  <li>Have books, notes, or helpful resources?</li>
                  <li>Let’s make them useful by sharing them with students in need.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row mx-auto">
            <div className="col-12">
              <h3 className='text-center fw-bold fs-3 text-danger'>Get in Touch</h3>
              <p className='text-center fs-5'>Want to collaborate or discuss how you can help further?</p>
              <div className="support-email d-flex justify-content-center fs-5">
                <p className='px-2'><FontAwesomeIcon icon={faEnvelope} /></p>
                <p>support@pathshala.org</p>
              </div>
              <div className="support-email d-flex justify-content-center fs-5">
                <p className='px-2'><FontAwesomeIcon icon={faWhatsapp} /></p>
                <p>+91 98765 43210</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Support_Us;
