import React from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom"
export default function Forum(){

    return(
        <div className="forum">
            <div className="forum-titles">
                <NavLink to="community" className="fitleA"><h4>Community</h4></NavLink>
                <NavLink to="chat" className="fitleA"><h4>Chat</h4></NavLink>
            </div>
            <Outlet />
        </div>
    )
        
}