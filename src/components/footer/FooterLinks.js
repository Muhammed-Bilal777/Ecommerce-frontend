import React from "react";
import "./FooterLinks.scss";
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import logo from "../../assets/shopito_logo.png";

const FooterLinks = () => {
  return (
    <>
      <section className="contact-section">
        <div className="container contact">
          <div className="contact-icon">
            <MdFacebook className="i" />

            <FaInstagramSquare className="i" />
            <FaYoutube className="i" />
          </div>
          <h2>Lets Talk</h2>
          <a className="btn btn-dark" href="#home">
            Make An Enqury
          </a>
        </div>
      </section>
      <section className="footer-section">
        <div className="container footer">
          <div className="footer-logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="footer-menu">
            <p className="link-heading">Features</p>
            <ul className="nav-ul footer-links">
              <li>
                <a href="#home">Link Shortening</a>
              </li>
              <li>
                <a href="#home">Branded Links</a>
              </li>
              <li>
                <a href="#home">Analytics</a>
              </li>
              <li>
                <a href="#home">Blog</a>
              </li>
            </ul>
          </div>

          <div className="footer-menu">
            <p className="link-heading">Resources</p>
            <ul className="nav-ul footer-links">
              <li>
                <a href="#home">Blog</a>
              </li>
              <li>
                <a href="#home">Developer</a>
              </li>
              <li>
                <a href="#home">Developer</a>
              </li>
              <li>
                <a href="#home">Developer</a>
              </li>
            </ul>
          </div>

          <div className="footer-menu">
            <p className="link-heading">Company</p>
            <ul className="nav-ul footer-links">
              <li>
                <a href="#home">Link Shortening</a>
              </li>
              <li>
                <a href="#home">Branded Links</a>
              </li>
              <li>
                <a href="#home">Analytics</a>
              </li>
              <li>
                <a href="#home">Blog</a>
              </li>
            </ul>
          </div>

          <div className="footer-menu">
            <p className="link-heading">Partners</p>
            <ul className="nav-ul footer-links">
              <li>
                <a href="#home">Link Shortening</a>
              </li>
              <li>
                <a href="#home">Branded Links</a>
              </li>
              <li>
                <a href="#home">Analytics</a>
              </li>
              <li>
                <a href="#home">Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterLinks;
