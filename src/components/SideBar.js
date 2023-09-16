import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faCircleStop } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../images/Logo-black.png";
import "./../styles/dashboard.css";

const SideBar = ({ currentPage }) => {
    const homePage = useRef();
    const moviesPage = useRef();
    const tvSeriesPage = useRef();
    const upcomingPage = useRef();
    const bookmarkPage = useRef();
  
    const activePageStyle = (pageRef) => {
      homePage.current.classList.remove("active-link");
      moviesPage.current.classList.remove("active-link");
      tvSeriesPage.current.classList.remove("active-link");
      upcomingPage.current.classList.remove("active-link");
      bookmarkPage.current.classList.remove("active-link");
  
      pageRef.current.classList.add("active-link");
    };
  
    const pageSwitchHandler = (e, pageName, pageRef) => {
      e.preventDefault(); 
      activePageStyle(pageRef);
      currentPage(pageName);
      console.log(pageName)
    };

  return (
    <div className="sidebar">
      <div className="logo-links">
        {/* logo */}
        <Link to="/movies">
          <img src={logo} alt="MovieBox" className="logo" />
        </Link>

        {/* link */}
        <ul className="d-links">
          <li ref={homePage} onClick={(e) => pageSwitchHandler(e, "Home", homePage)}>
            <Link to="/movies"></Link>
            <span>
              <FontAwesomeIcon icon={faHouse} />
            </span>
            Home
          </li>
          <li  className="active-link" ref={moviesPage} onClick={(e) => pageSwitchHandler(e, "Movies", moviesPage)}>
            <Link to="/movies"></Link>
            <span>
              <FontAwesomeIcon icon={faVideo} />
            </span>
            Movies
          </li>
          <li
            ref={tvSeriesPage}
            onClick={(e) => pageSwitchHandler(e, "Tv Series", tvSeriesPage)}
          >
            <Link to="/movies"></Link>
            <span>
              <FontAwesomeIcon icon={faCircleStop} />
            </span>
            Tv Series
          </li>
          <li ref={upcomingPage} onClick={(e) => pageSwitchHandler(e, "Upcoming", upcomingPage)}>
            <Link to="/movies"></Link>
            <span>
              <FontAwesomeIcon icon={faCalendar} />
            </span>
            Upcoming
          </li>
          <li ref={bookmarkPage} onClick={(e) => pageSwitchHandler(e, "Bookmark", bookmarkPage)}>
            <Link to="/movies"></Link>
            <span>
              <FontAwesomeIcon icon={faCalendar} />
            </span>
            Bookmark
          </li>
        </ul>
      </div>

      {/* quiz & logout */}
      <div className="quiz-access-sigining">
        <div className="quiz">
          <h4>Play movie quizes and earn free tickets</h4>
          <p>50k people are playing now</p>
          <button className="start-playing">Start playing</button>
        </div>

        <div className="user-access-state">
          <span>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
          </span>

          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
