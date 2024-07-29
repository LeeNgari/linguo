import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faMicrophone } from '@fortawesome/free-solid-svg-icons'


export default function favourite({value, favs}){

   
    if( value === true){
        return(
            null
        )
    }
    console.log("lee")
    console.log(favs)
     return(
        <div className="modal favs">
                <div className="top-area">
                    <h6>Favourites</h6>
                    <h6>LOGO</h6>
                    <button onClick={() => setFavourite(thumb => !thumb)}><span ><FontAwesomeIcon icon={faArrowLeft} /></span></button>
                </div>

                <div className="fav-label">
      {favs.map((translation, index) => (
        <div key={index} className="lan-one">
          <div className="text">
            <h5>{translation.text}</h5>
            <button><span><FontAwesomeIcon icon={faMicrophone} /></span></button>
          </div>
          <div className="before-after">
            <h6>{translation.before}</h6>
            <h6>{translation.after}</h6>
          </div>
        </div>
      ))}
    </div>
                
        </div>
     )
}