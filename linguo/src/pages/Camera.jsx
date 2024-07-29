import React, {useCallback, useState, useRef} from "react";
import Webcam from "react-webcam"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft, faMicrophone } from '@fortawesome/free-solid-svg-icons'

function WebcamImage() {
    const [img, setImg] = useState(null);
    const webcamRef = useRef(null);
  
    const videoConstraints = {
      width: 420,
      height: 420,
      facingMode: "user",
    };
  
    const capture = useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImg(imageSrc);
    }, [webcamRef]);
  
    return (
      <div className="camera-container">
        {img === null ? (
          <>
            <Webcam
              audio={false}
              mirrored={true}
              height={400}
              width={400}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
              imageSmoothing={true}
            />
            <button className="camera-before"onClick={capture}>
                 <span className="profile"><FontAwesomeIcon icon={faCamera} /></span>
            </button>
          </>
        ) : (
          <>
            <div className="img-container">
                <img src={img} alt="screenshot" />
                <div className="translated-text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <button><span><FontAwesomeIcon icon={faMicrophone} /></span></button>
                </div>
            </div>
            
            
            <button className="camera-capture" onClick={() => setImg(null)}>
              <span ><FontAwesomeIcon icon={faCamera} /></span>
            </button>
          </>
        )}
      </div>
    );
  }
  
  export default WebcamImage;