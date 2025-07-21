import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from 'react-router-dom';
import { Button } from 'bootstrap';
import logo from "../assets/Logo.jpg";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg border-bottom border-black fw-bold">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Pathshala Logo"
            width="60"
            height="60"
            className="d-inline-block align-text-top"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/material">Material</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/guidance">Guidance</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/member">Membership</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/support">Support Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
