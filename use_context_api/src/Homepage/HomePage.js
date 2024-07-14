import React from "react";
import { Link, Outlet } from "react-router-dom";

function Homepage() {
    return (
        <div>
            <Link to={'team'}>Team</Link>
            <Link to={'task'}>Task</Link>
            <Outlet/>
        </div>
    );
}

export default Homepage;