import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faUser, faMicrophone, faArrowRight, faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import Profile from "../components/profile"
import Favourite from "../components/favourites"
import { Mic, MicOff } from "lucide-react";
import { useVoiceToText } from "react-speakup";
import { useTextToVoice } from "react-speakup";

import { Play, Pause, StepForward } from "lucide-react";

export default function main(){

    const { speak, isSpeaking, pause, ref, resume, setVoice, voices } =
    useTextToVoice<HTMLDivElement>({ pitch: 1, rate: 1, volume: 1 });
    
    const [favourite, setFavourite] = React.useState(true)
    const [profile, setProfile] = React.useState(true)
    const [formData, setFormData] = React.useState({
        LanguageOne:'',
        LanguageTwo:'',
        one:'',
        two:''
     })
     const [favs, setFavs] = React.useState([]);
     const [faves, setFaves] = React.useState([]);

     function handleChangeOne(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
       
    }
    function submitChange(e){
        
        e.preventDefault()
            const fetchTranslation = async () => {
              const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/text';
              const options = {
                method: 'POST',
                headers: {
                  'x-rapidapi-key': 'db47648b08mshbc0b5eafd69c16ap14b383jsnf465898e09ec',
                  'x-rapidapi-host': 'google-translate113.p.rapidapi.com',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  from: 'auto',
                  to: `${formData.two}`,
                  text: `${formData.LanguageOne}`
                })
              };
        
              try {
                const response = await fetch(url, options);
                const result = await response.json();
                setFormData(prevFormData => ({
                    ...prevFormData,
                    LanguageTwo: result.trans 
                  }));
              } catch (error) {
                console.error(error);
              }
            };
        
            fetchTranslation();
    }
    function store(){
        setFavs(prevFaves => {
            console.log("lee")
            const updatedTranslations = [
                ...prevFaves,
                {
                  before: formData.one,
                  after: formData.two,
                  text: formData.LanguageTwo
                }
              ];
            localStorage.setItem('translations', JSON.stringify(updatedTranslations));
            console.log(updatedTranslations)
            
          });
          const storedFaves = localStorage.getItem('translations');
          if (storedFaves) {
            setFaves(JSON.parse(storedFaves));
          }
    }
    const { startListening, stopListening, transcript } = useVoiceToText({
        continuous: true,
        lang: "en-US",
      });
    function voiceText(){
        setFormData(prevFormData => ({
            ...prevFormData,
            LanguageOne: transcript 
          }));
    }
    function speakUp(){
        console.log("house")
        const value = new SpeechSynthesisUtterance(formData.LanguageTwo)
        speak(value)
    }
    return(
        <div className="main">
            <div className="header">
               <button onClick={() => setFavourite(thumb => !thumb)}><span className="user"><FontAwesomeIcon icon={faStar} />SAVED</span></button> 
               <FontAwesomeIcon icon={faVolumeHigh} />
                <button onClick={() => setProfile(thumb => !thumb)}><span className="profile"><FontAwesomeIcon icon={faUser} />PROFILE</span></button>
            </div>
            <div className="text-area-main">
                 <label htmlFor="text-input" className="label-one">ORIGINAL</label>
                <form className="text-area-one" onSubmit={submitChange} >
                     
                    <textarea 
                        name="LanguageOne" 
                        id="text-input" 
                        placeholder="Enter text to translate"
                        value = {FormData.LanguageOne}
                        onChange={handleChangeOne}
                    />
                    <button className="translate-btn">Translate</button>
                </form>
                
                <div className="text-area-two">
                   <label htmlFor="text-input">TRANSLATED</label>

                    <textarea 
                        name="LanguageTwo" 
                        id="text-output"
                        placeholder = {formData.LanguageTwo}
                        value = {FormData.LanguageTwo}
                        />
                        <div className="two-btns">
                            <button onClick={store} className="btn-gold"><span className="gold"><FontAwesomeIcon icon={faStar} /></span></button>
                            <button onClick={speakUp} className="black"><span ><FontAwesomeIcon icon={faVolumeHigh} /></span></button>
                        </div>
                      
                </div>
            </div>
            <div className="controls">
                <div className="translation-languages">
                <select className="language-one" value={formData.one} id="one" onChange={handleChangeOne} name="one">
                    <option value="">Choose</option>
                    <option value="en">English</option>
                    <option value="sw">Kiswahili</option>
                    <option value="fr">French</option>
                    <option value="es">Spanish</option>
                </select>  
                <span className="profile"><FontAwesomeIcon icon={faArrowRight} /></span>
                <select className="language-two" value={formData.two} id="one" onChange={handleChangeOne} name="two">
                    <option value="">Choose</option>
                    <option value="en">English</option>
                    <option value="sw">Kiswahili</option>
                    <option value="fr">French</option>
                    <option value="es">Spanish</option>
                </select>                   
                </div>
                <div className="mics">
                    <Mic className="microphone mic-one" onClick={startListening} role="button" />MIC ON
                    <MicOff className="microphone mic-two" onClick={stopListening} role="button" /> MIC OFF  
                    <button onClick={voiceText} className="translate-btn">TRANSLATE</button>           
                </div>
            </div>
            <Favourite value={favourite} favs={faves}/>
            <Profile value={profile}/>

        </div>
    )
}