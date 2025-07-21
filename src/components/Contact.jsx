import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <section className="py-5 contact">
      <div className="container">
        <div className="row mx-auto">
          <div className="col-12">
            <div className="contact-head d-flex justify-content-center text-center mb-4 text-primary">
              <h2 className="px-3 py-1"><FontAwesomeIcon icon={faPhone} /></h2>
              <h2 className="fs-1 fw-bold">Contact Us</h2>
            </div>
          </div>
        </div>

        <div className="row gy-4 mx-auto">
          <div className="col-md-6">
            <h4 className="mb-3 fw-bold fs-4">Address</h4>
            <p className="mb-1 fw-semibold fs-5">Pathshala Education Hub</p>
            <p className="fs-5">
              4th Floor, Building No. 18,<br />
              Knowledge Enclave, Sector 8,<br />
              Dwarka, New Delhi – 110075
            </p>

            <h5 className="mt-4 fs-4 fw-bold">Phone</h5>
            <p className="mb-1 fs-5">+91 98765 43210</p>
            <p className="fs-5">+91 98111 22334</p>

            <h5 className="mt-4 fs-4 fw-bold">Email</h5>
            <p className="mb-1 fs-5">support@pathshala.org</p>
            <p className="fs-5">contact@pathshala.org</p>
          </div>

          <div className="col-md-6 contact-form py-4 px-3 border rounded-4">
            <h4 className="mb-4 fs-4 fw-bold text-center">Send Us a Message</h4>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="name" placeholder="Your Name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="email" placeholder="you@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Write your message here..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary px-4 py-2 mt-3" style={{ width: "100%" }}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
