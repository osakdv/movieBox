import { useState } from "react";
import SideBar from "./components/SideBar"

const Dashboard = () => {
    const switchBetweenLinks = (pageName) => {
        console.log(pageName)
    }
    
    return(
        <div className="dashboard">
            {/* sidebar */}
            <SideBar currentPage={switchBetweenLinks} />
            {/* content */}
        </div>
    )
}

export default Dashboard;