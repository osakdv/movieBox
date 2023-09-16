import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./../styles/heading.css";
import logo from "./../images/Logo.png";
// import { Link, useHistory, withRouter } from 'react-router-dom';

const Navbar = () => {
  const [isMenuClose, setIsMenuClose] = useState(false);

  const openMenu = () => {
    if (!isMenuClose) {
      // open up
    }
  };

  const inputElement = useRef();
  let searchEntry;
  const searchHandler = (e) => {
    searchEntry = e.target.value.trim();
  };

  const navigate = useNavigate();
  const sendSearch = (event) => {
    if (event.keyCode === 13 && searchEntry) {
      navigate(`/results?search=${searchEntry}`);
    }
  };

  const sendSearchBtn = () => {
      searchEntry && navigate(`/results?search=${searchEntry}`)
    }
    

  return (
    <nav className="navbar side-margin">
      <a href="#">
        <img className="logo" src={logo} alt="MovieBox" />
      </a>

      <div className="search-bar-container">
        <input
          placeholder="What do you want to watch"
          type="text"
          name="searchBar"
          className="searchBar"
          onChange={(e) => searchHandler(e)}
          onKeyDown={(e) => sendSearch(e)}
        />
        <span className="search-icon" onClick={sendSearchBtn}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
      </div>

      <div className="links-and-menu">
        <a href="/">
          <span className="sign-in-btn">Sign in</span>
        </a>

        <div className="menu-btn" onClick={openMenu}>
          {!isMenuClose ? (
            <FontAwesomeIcon icon={faBars} />
          ) : (
            <FontAwesomeIcon icon={faXmark} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
