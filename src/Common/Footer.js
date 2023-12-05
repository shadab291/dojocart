import React from "react";
import { Link } from "react-router-dom";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StorefrontIcon from "@mui/icons-material/Storefront";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactsIcon from "@mui/icons-material/Contacts";


function Footer() {
  return (
    <footer className="bg-white rounded-xl text-black py-2">
      <hr className="border-1 border-black shadow" />
      <div className="container p-5 mx-auto flex flex-wrap justify-between">
        <div className="footer-section w-full sm:w-1/2 lg:w-auto mb-8 sm:mb-0">
          <h2 className="text-lg font-bold mb-3">Navigation</h2>
          <ul className="text-left">
            <li>
              <Link to="/" className="text-md text-black hover:text-white">
                <HomeIcon className="mb-1 mr-2" />
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-md text-black hover:text-white"
              >
                <InfoIcon className="mb-1 mr-2" />
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-md text-black hover:text-white"
              >
                <ContactsIcon className="mb-1 mr-2" />
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-section w-full sm:w-1/2 lg:w-auto mb-8 sm:mb-0">
          <h2 className="text-lg font-bold mb-3">Connect</h2>
          <p className="mb-4">
            Contact Us
            <br />
            Address: Swargate Pune,
            <br />
            Phone: +91 84461-37285
            <br />
            Email: shadabsayyed@gmail.com
          </p>
        </div>

        <div className="footer-section w-full sm:w-1/2 lg:w-auto">
          <h2 className="text-lg font-bold mb-3">Trust</h2>
          <p className="mb-4">
            Stay updated, shop securely, and explore hassle-free.
          </p>
          <div className="flex justify-center">
          <div className="iframe-container">
            <iframe
              className="rounded-xl "
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15134.364379526593!2d73.8534752508814!3d18.502172171402385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c014271918c5%3A0xfa3ce63f0c494d3f!2sSwargate%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1701104865700!5m2!1sen!2sin"
              width="350"
              height="200"
              frameBorder=""
              allowFullScreen=""
            ></iframe>
          </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <div className="flex flex-wrap justify-center">
          <a
            href="https://www.facebook.com/shadabkiller786?mibextid=ZbWKwL"
            className="social-icon mr-3"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/shadab_mehdi3527/"
            className="social-icon mr-3"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/shadab-sayyed-102407203/"
            className="social-icon mr-3"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://www.github.com/your-github-url"
            className="social-icon mr-3"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
        <p className="mt-4">
          &copy;
          <StorefrontIcon className="ml-3" /> dojoCart. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
