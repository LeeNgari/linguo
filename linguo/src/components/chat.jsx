import React from "react";

export default function chat(){

    return(
        <div className="chats">
            <h1>Messages</h1>
             <div className="chat-one">
                <div className="chat-pic"> 
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP_OabdsCCaMG2VZuKpRn8t_oMhJMqM_TLyA&s" alt="profile-pic" />
                </div>
                <div className="chat-details"> 
                    <p>Lee baraka</p>
                    <h6><b>New message:</b>Where are you?</h6>
                </div>
             </div>
             <div className="chat-one">
                <div className="chat-pic"> 
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP_OabdsCCaMG2VZuKpRn8t_oMhJMqM_TLyA&s" alt="profile-pic" />
                </div>
                <div className="chat-details"> 
                    <p>Dorcas Mwihaki</p>
                    <h6><b>New message:</b>Let's go to the park tomorrow</h6>
                </div>
             </div>
             <div className="chat-one">
                <div className="chat-pic"> 
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP_OabdsCCaMG2VZuKpRn8t_oMhJMqM_TLyA&s" alt="profile-pic" />
                </div>
                <div className="chat-details"> 
                    <p>Chantel Masilela</p>
                    <h6><b>New message:</b>Hit me up when you're in nairobi again</h6>
                </div>
             </div>
             <div className="chat-one">
                <div className="chat-pic"> 
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP_OabdsCCaMG2VZuKpRn8t_oMhJMqM_TLyA&s" alt="profile-pic" />
                </div>
                <div className="chat-details"> 
                    <p>Prince Waithaka</p>
                    <h6><b>New message:</b>How about dinner?</h6>
                </div>
             </div>
        </div>
    )
}