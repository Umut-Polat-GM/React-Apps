import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src="./images/troll-face.png" 
                className="header--image"
                alt="meme"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h3 className="header--project">React Course - Project 3</h3>
        </header>
    )
}