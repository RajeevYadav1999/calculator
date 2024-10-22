
import React from 'react'
import { useState } from 'react';
import { BsFillBookmarkFill } from 'react-icons/bs'
import { BsArrowRight } from 'react-icons/bs'
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { Link } from 'react-router-dom';

// images 

import Assembly from '../../images/automtion-semi_auto_assembly_banner.jpg'
import Welding from '../../images/automated.jpg'
import Logo from '../../images/vig (1).png'





import { MdNavigateNext } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { PiGridFourFill } from "react-icons/pi";
export default function MachiningTypes() {
    const [isActive, setIsActive] = useState(false);

    const addClass = () => {
        setIsActive(true);
    };

    const removeClass = () => {
        setIsActive(false);
    };

    const [transitions, setTransitions] = useState(false);

    const toggleClass = () => {
        setTransitions(!transitions);
    };

    return (
        <>
            <nav className='mae-drawing-slider-navbar'>
                <ul className='mae-drawing-slider-navbar-ul'>
                    <div className='mae-drawing-slider-nav-logo-left'>
                        <li className='mae-drawing-slider-nav-logo'>Discover <BsArrowRight /></li>
                    </div>
                    <div className='mae-drawing-slider-nav-topic-right'>
                        <li className='mae-drawing-slider-nav-topics'><Link to='/Mechcinal/cam/topics/machining/types/Assembly'>Assembly</Link></li>
                        <li className='mae-drawing-slider-nav-topics'><Link to='/Mechcinal/cam/topics/machining/types/Welding'>Welding</Link></li>
                    </div>
                </ul>
                <div className='mae-drawing-slider-button-bookmarks'>

                    <button className='mae-drawing-slider-button-bookmark-xd' onClick={toggleClass}>
                        <span className='mae-drawing-slider-button-bookmark-text'><PiGridFourFill /></span>
                    </button>

                    <button className='mae-drawing-slider-button-bookmark-xd' onClick={removeClass}>
                        <span className='mae-drawing-slider-button-bookmark-text'><IoIosArrowBack /></span>
                    </button>

                    <button className='mae-drawing-slider-button-bookmark-ui ' onClick={addClass}>
                        <span className='mae-drawing-slider-button-bookmark-text small'><MdNavigateNext /></span>
                    </button>
                </div>
            </nav>
            <br />
            <br />
            <div className="bubble bubble1"></div>
            <div className="bubble bubble2"></div>
            <div className="bubble bubble3"></div>
            <div className='mae-drawing-slider-borders'>
                <div className="carousel">
                    <div className={`carousel-slide1 ${isActive ? '' : ' active'} ${transitions ? ' transtionstart' : ''}`} >
                        <div className='next-button'>
                            <img src={Assembly} />
                            <h1 className='mae-cad-learn-more-slider-topic'>Assembly</h1>
                            <h1 className='defination'>Combining multiple components or parts <br/>to create a finished product.</h1>
                            {/* <h1 className='defination'> The three primary orthographic views include</h1> */}
                        </div>
                    </div>
                    <div className={`carousel-slide2 ${isActive ? ' active' : ''} ${transitions ? ' transtionstart' : ''}`} >
                        <div className='prev-button'>
                            <img src={Welding} />
                            <h1 className='mae-cad-learn-more-slider-topic'>Welding</h1>
                            <h1 className='defination'>Joining of similar or dissimilar metals <br/>by means of heat & pressure to make a<br/> permanent joint.</h1>
                        </div>
                    </div>
                </div>
                <br />
                <br />
               
            </div>
            <br />
            <br />
            <br />
            <footer className='mae-drawing-slider-footer'>
                <div className='mae-drawing-slider-footer-logo'><p>OOK</p></div>
                <div className='mae-drawing-slider-footer-descripiton'><p>Take a dive of ocean <br />OCEAN OF KNOWELAGE</p></div>
                <div className='mae-drawing-slider-footer-social-media'>
                    <BsInstagram />
                    <BsFacebook />
                    <BsLinkedin />
                    <BsTwitter />
                </div>
            </footer>
        </>
    )
}

