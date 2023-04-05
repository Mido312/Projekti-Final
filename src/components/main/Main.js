import React from 'react'
import './MainStyles.css'
import {AiOutlineSearch} from 'react-icons/ai'
import myVideo from "../../assets/main.mp4"


function Hero() {
    return (
        <div className='hero'>
            <video controls autoPlay loop muted id='video'>
                <source src={myVideo} type="video/mp4"></source>
            </video>
            <div className="overlay">
            </div>
            <div className="content">
                <h1>First Class Travel</h1>
                <h2>Best Locations Worldwide!</h2>
                <form className="form">
                    <div>
                        <input type="text" placeholder='Search Destinations' />
                    </div>
                    <div>
                        <button><AiOutlineSearch className='icon'/></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero
