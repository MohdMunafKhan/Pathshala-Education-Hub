import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "bootstrap";
import "../App.css"
import { useNavigate } from "react-router-dom";

const GetResources = () => {

    const navigate = useNavigate();    
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        location: "",
        subject: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Your request has been successfully submitted! We'll email you the resources shortly.");
        setFormData({
            name: "",
            email: "",
            phone: "",
            location: "",
            subject: "",
        });
    };

    return (
        <section className="get-res py-5">
            <div className="container">
                <div className="row mx-auto">
                    <div className="col-12 text-center mb-4">
                        <h2 className="fw-bold text-success">Request Study Materials</h2>
                        <p className="text-muted">
                            Fill in your details to receive free study material and resources from Pathshala.
                        </p>
                    </div>
                </div>

                <div className="row justify-content-center mx-auto">
                    <div className="col-md-8 col-lg-6">
                        <div className="card rounded-4 p-4">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Email ID</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="example@gmail.com"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Phone Number</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter your phone number"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Location</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        placeholder="City, State"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="courseSelect" className="form-label">Interested Material</label>
                                    <select 
                                        id="courseSelect"
                                        name="subject"
                                        className="form-control"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select the Material</option>
                                        <option value="class10">Class 10</option>
                                        <option value="class11">Class 11</option>
                                        <option value="class12">Class 12</option>
                                        <option value="upsc">UPSC Civil Services</option>
                                        <option value="railway">Railway Exams</option>
                                        <option value="bank">Banking Exams (IBPS, SBI, RBI, PO, Clerk, etc)</option>
                                        <option value="webDev">Web Development</option>
                                        <option value="dataScience">Data Science</option>
                                        <option value="cyber">Cyber Security</option>
                                        <option value="teaching">Teaching Resources</option>
                                    </select>
                                </div>

                                <button type="submit" className="btn btn-primary w-100 rounded-pill">Submit Request</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 text-center">
                        <button onClick={() => navigate("/")} className='btn btn-primary mt-5 px-2 py-1 fs-5'>Home Page</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetResources;
