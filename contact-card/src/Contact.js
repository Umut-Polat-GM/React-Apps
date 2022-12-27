import React from "react";
// import PhoneLogo from './images/phone-icon.png'
// import EmailLogo from './images/mail-icon.png'

function Contact(props){
    return (
        <div className="contact-card">
            <img src={props.img} alt="cat"/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src="./images/phone-icon.png" alt="phone"/>
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src="./images/mail-icon.png" alt="email"/>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Contact