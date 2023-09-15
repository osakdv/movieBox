import { useState } from "react";
import Bookmark from "./Bookmark";
import SideBar from "./components/SideBar"
import Dashboardhome from "./Home2";
import Movies from "./Movies";
import Series from "./Series";
import Upcoming from "./Upcoming";

const Dashboard = () => {
    const [currentPage, setCurrentPage] = useState("Movies")
    const switchBetweenLinks = (pageName) => {
        console.log(pageName)
        setCurrentPage(pageName)
    }

    const getPage = () => {
        let page;

        switch (currentPage) {
            case "Home": page = <Dashboardhome />
            break;
            case "Movies": page = <Movies />
            break;
            case "Tv Series": page = <Series />
            break;
            case "Upcoming": page = <Upcoming />
            break;
            case "Bookmark": page = <Bookmark />
            break;
            default: page = <Movies/>
            break
        }

        console.log(currentPage)
        return page
    }
    
    return(
        <div className="dashboard">
            {/* sidebar */}
            <SideBar currentPage={switchBetweenLinks} />
            
            <div className="content">
            {
                getPage()
            }
            </div>
        </div>
    )
}

export default Dashboard;