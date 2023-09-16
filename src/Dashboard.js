import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Bookmark from "./Bookmark";
import SideBar from "./components/SideBar";
import Dashboardhome from "./Home2";
import Movies from "./Movies";
import Series from "./Series";
import Upcoming from "./Upcoming";

const Dashboard = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    let mName;;
  
    // Iterate through the query parameters
    for (const [key, value] of queryParams.entries()) {
      if (key === 'title') {
        mName = value;
      }
    }

  const [currentPage, setCurrentPage] = useState("Movies");
  const switchBetweenLinks = (pageName) => {
    setCurrentPage(pageName);
  };

  const getPage = () => {
    let page;

    switch (currentPage) {
      case "Home":
        page = <Dashboardhome />;
        break;
      case "Movies":
        page = <Movies movieName={mName}/>;
        break;
      case "Tv Series":
        page = <Series />;
        break;
      case "Upcoming":
        page = <Upcoming />;
        break;
      case "Bookmark":
        page = <Bookmark />;
        break;
      default:
        page = <Movies />;
        break;
    }

    return page;
  };

  return (
    <div className="dashboard">
      {/* sidebar */}
      <SideBar currentPage={switchBetweenLinks} />

      <div className="content">
        {/* <h2>{title}</h2> */}
        {getPage()}</div>
    </div>
  );
};

export default Dashboard;
