import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, Outlet } from 'react-router-dom';
import { faSquareFacebook, faSquareInstagram, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <>
            <section className="footer-1 text-white pt-2">
                <div className="container py-3">
                    <div className="row mx-auto">
                        <div className="col-md-4 p-2">
                            <div className="quick-links-box">
                                <h3 className='fw-bold fs-2'>Quick Links</h3>
                                <ul className='list-unstyled fs-5'>
                                    <li>
                                        <Link to={"/"}>Home</Link>
                                    </li>
                                    <li>
                                        <Link to={"/material"}>Material</Link>
                                    </li>
                                    <li>
                                        <Link to={"/guidance"}>Guidance</Link>
                                    </li>
                                    <li>
                                        <Link to={"/member"}>Membership</Link>
                                    </li>
                                </ul>
                                <Outlet />
                            </div>
                        </div>

                        <div className="col-md-4 p-2">
                            <div className="address-box">
                                <h3 className='fw-bold fs-3'>Office Address</h3>
                                <p className='fs-5'>
                                    <b>Pathshala Education Hub</b> <br />
                                    4th Floor, Building No. 18,
                                    Knowledge Enclave, Sector 8,
                                    Dwarka, New Delhi – 110075
                                </p>

                                <h3 className='fw-bold fs-3'>Phone No.</h3>
                                <p className='fs-5'>+91 98765 43210 <br /> +91 98111 22334</p>

                                <h3 className='fw-bold fs-3'>Email</h3>
                                <p className='fs-5'>support@pathshala.org <br /> contact@pathshala.org</p>
                            </div>
                        </div>

                        <div className="col-md-4 p-2">
                            <div className="follow-links-box">
                                <h3 className='fw-bold fs-2'>Follow us on</h3>
                                <a href="https://www.facebook.com/" className='fs-3 me-4' target='_blank'><FontAwesomeIcon icon={faSquareFacebook} /></a>
                                <a href="https://instagram.com/_khan_munaf.97" className='fs-3 me-4' target='_blank'><FontAwesomeIcon icon={faSquareInstagram} /></a>
                                <a href="https://x.com/" className='fs-3 me-4' target='_blank'><FontAwesomeIcon icon={faSquareXTwitter} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='footer-2'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 p-3">
                            <p className='text-center text-white fs-5'>© 2025 Pathshala Education Hub | All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer;
