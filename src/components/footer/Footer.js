import React from "react";
import "./footer.css";

import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__left">
          <h1>DevCamper</h1>
          <p>Copyright &copy; 2020</p>
        </div>
        <div className="footer__links">
          <p>Browse Bootcamps</p>
          <p>Sign in</p>
          <p>Register</p>
        </div>
        <div className="footer__social">
          <GitHubIcon fontSize="large" style={{ marginRight: "1rem" }} />
          <InstagramIcon fontSize="large" style={{ marginRight: "1rem" }} />
          <LinkedInIcon fontSize="large" style={{ marginRight: "1rem" }} />
          <FacebookIcon fontSize="large" style={{ marginRight: "1rem" }} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
