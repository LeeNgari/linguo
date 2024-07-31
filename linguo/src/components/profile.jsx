import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft, faDownload, faGear, faDoorOpen, faDoorClosed, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { getAuth, signOut } from "firebase/auth";
import { NavLink, useNavigate } from 'react-router-dom';

export default function profile({value}){

  
    if( value === true){
        return(
            null
        )
    }
   
    const navigate = useNavigate();

    function userSignOut(){
        const auth = getAuth();
        signOut(auth).then(() => {
          console.log("userSignedOut")
        }).catch((error) => {
        console.log(error)
        });
    }
   
   
    
     return(
        <div className="modal profe">
            <div className="profile-tab">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP_OabdsCCaMG2VZuKpRn8t_oMhJMqM_TLyA&s" alt="pic" />
                <div className="info">
                    <p>Lee Ngari</p>
                    <h6>leengari76@gmail.com</h6>
                </div>
            </div>
            <div className="rest">
                <div className="history flex underline">
                    <FontAwesomeIcon icon={faClockRotateLeft} className="size"/>
                    <h6>Change language</h6>
                </div>
                <div className="download flex underline">
                    <FontAwesomeIcon icon={faDownload} className="size" />
                    <h6>Downloaded languages</h6>
                </div>
                <div className="settings flex underline">
                    <FontAwesomeIcon icon={faGear} className="size"/>
                    <h6>Font Settings</h6>
                </div>
                <div className="sign-out flex underline">
                    <FontAwesomeIcon icon={faLightbulb} className="size"/>
                    <button onClick={userSignOut}>High Contrast mode</button>
                </div>
            </div>
        </div>
     )
}