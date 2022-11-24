import React from "react";
import classes from "./css/Footer.module.css";
import iconFacebook from "./img/icon_facebook.svg";
import iconInstagram from "./img/icon_instagram.svg";
import iconMail from "./img/icon_mail.svg";
import iconTwitch from "./img/icon_twitch.svg";
import iconTwitter from "./img/icon_twitter.svg";
import logo from "./img/logo.png";

const Footer = () => {
  return (
    <div className="footer pt-5 pb-5" id="ourService">
      <div className="container px-lg-5 mt-5 mb-4">
        <div className="row">
          <div className="col-md-3">
            <div className="address">
              <p>
                Jalan Suroyo No. 161 Mayangan Kota
                <br />
                Probolonggo 672000
              </p>
              <p>binarcarrental@gmail.com</p>
              <p>081-233-334-808</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className={classes.menuBar}>
              <p>
                <a href="#ourService">Our Services</a>
              </p>
              <p>
                <a href="#whyUs">Why Us</a>
              </p>
              <p>
                <a href="#testimonial">Testimonial</a>
              </p>
              <p>
                <a href="#faq">FAQ</a>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-service">
              <p>Connect with us</p>
            </div>
            <div className={classes.contactLogo}>
              <a href="#facebook">
                <img src={iconFacebook} alt="" />
              </a>
              <a href="#instagram">
                <img src={iconInstagram} alt="" />
              </a>
              <a href="#twitter">
                <img src={iconTwitter} alt="" />
              </a>
              <a href="#mail">
                <img src={iconMail} alt="" />
              </a>
              <a href="#Twitch">
                <img src={iconTwitch} alt="" />
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="copyright">
              <p>Copyright Binar 2022</p>
              <img src={logo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
