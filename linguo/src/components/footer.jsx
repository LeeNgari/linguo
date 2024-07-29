import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCamera, faComment, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from "react-router-dom"
import { useNavigate } from 'react-router-dom';

export default function footer(){

    const location = useLocation()
    if (location.pathname === "/"){
        return null
    }
    
    return(
        <footer>
            <Link className="nav-links"  to="/home">
                <span ><FontAwesomeIcon icon={faHouse} />HOME</span>  
            </Link>
            <Link className="nav-links"  to="/camera">
                <span ><FontAwesomeIcon icon={faCamera} />CAMERA</span>  
            </Link>
            <Link className="nav-links"  to="/forum/community">
                <span ><FontAwesomeIcon icon={faGlobe} />FORUM</span>  
            </Link>
            <Link className="nav-links"  to="/support">
                <span><FontAwesomeIcon icon={faComment} />SUPPORT</span>  
            </Link> 
        </footer>
    )
}