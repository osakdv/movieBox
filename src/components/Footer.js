import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-link">
        <FontAwesomeIcon className="s-icon" icon={faFacebook} />
        <FontAwesomeIcon className="s-icon" icon={faInstagram} />
        <FontAwesomeIcon className="s-icon" icon={faTwitter} />
        <FontAwesomeIcon className="s-icon" icon={faYoutubeSquare} />
      </div>
      <div className="page-links">
        <a href="#">Conditions of use</a>
        <a href="#">Privacy & Policy</a>
        <a href="#">Press Room</a>
      </div>
      <p className="copy-right">© 2021 MovieBox by Adriana Eka Prayudha</p>
    </div>
  );
};

export default Footer;