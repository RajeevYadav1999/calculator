
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

import Detailview from '../../images/Odd Input Shaft & Gears_page-0001.jpg'
import CNC from '../../images/CNC-milling.jpg.jpeg'
import LaserCutting from '../../images/laser-cutting.jpg'
import Flame from '../../images/flame-cut-steel.jpg'
import Sawing from '../../images/sawing.jpg'
import Plasma from '../../images/plasma cutting.jpg'
import Abrasive from '../../images/abrasive cutting.jpg'
import Waterjet from '../../images/watercutting.jpeg'
import EDM from '../../images/edm.jpg'
import Ultrasonic from '../../images/ultrasonic cutting.png'
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
                        {/* <li className='mae-drawing-slider-nav-topics'><Link to='/Mechcinal/cad/DRAFTING/VIEWS/types/Detail'>Detail</Link></li> */}
                        {/* <li className='mae-drawing-slider-nav-topics'><Link to='/Mechcinal/cad/DRAFTING/VIEWS/types/Auxiliary'>Auxiliary</Link></li> */}
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
                            <img src={Abrasive} />
                            <h1 className='mae-cad-learn-more-slider-topic'>Abrasive <br /> Cutting</h1>
                            <h1 className='defination'>Abrasive particles such as sandpaper <br />or grinding wheels to cut through materials <br />use for precision cutting or shaping of materials.</h1>
                            {/* <h1 className='defination'> The three primary orthographic views include</h1> */}
                        </div>
                    </div>
                    <div className={`carousel-slide2 ${isActive ? ' active' : ''} ${transitions ? ' transtionstart' : ''}`} >
                        <div className='prev-button'>
                            <img src={Plasma} />
                            <h1 className='mae-cad-learn-more-slider-topic'>Plasma <br />Cutting </h1>
                            <h1 className='defination'>use of a high-velocity jet of ionized <br />gas (plasma) to melt through metal and <br />separate it.</h1>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <div className={transitions ? " carousel carousel2  transtionstart" : 'forming carousel carousel2'}>
                    <div className={`carousel2-slide1 ${isActive ? '' : ' active'} ${transitions ? ' transtionstart' : ''}`} >
                        <div className='next-button'>
                            <img src={Waterjet} />
                            <h1 className='mae-cad-learn-more-slider-topic'>Waterjet <br />cutting </h1>
                            <h1 className='defination'>High-pressure jet of water, sometimes <br />mixed with abrasive particles to cut through<br /> materials. Use for cutting materials that are<br /> sensitive to heat, such as glass or certain metals.</h1>
                        </div>
                    </div>
                    <div className={`carousel2-slide2 ${isActive ? ' active' : ''} ${transitions ? ' transtionstart' : ''}`} >
                        <div className='prev-button'>
                            <img src={LaserCutting} />
                            <h1 className='mae-cad-learn-more-slider-topic'>Laser <br />Cutting</h1>
                            <h1 className='defination'>High-power laser melts, burns, or vaporizes<br /> the material to create precise cuts. Often employed <br />for metal, plastic, or wood cutting.</h1>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div className={transitions ? "carousel carousel2 carousel3 transtionstart" : 'forming carousel carousel2 carousel3 '}>
                    <div className={`carousel2-slide1 ${isActive ? '' : ' active'} ${transitions ? ' transtionstart' : ''}`} >
                        <div className='next-button'>
                            <img src={EDM} />
                            <h1 className='mae-cad-learn-more-slider-topic'>Electrical <br />Discharge <br />Machining (EDM)</h1>
                            <h1 className='defination'>Electrical discharges are used to remove<br /> material from a workpiece.</h1>
                        </div>
                    </div>
                    <div className={`carousel2-slide2 ${isActive ? ' active' : ''} ${transitions ? ' transtionstart' : ''}`} >
                        <div className='prev-button'>
                            <img src={Flame} />
                            <h1 className='mae-cad-learn-more-slider-topic'>Flame  <br />Cutting</h1>
                            <h1 className='defination'>flame generated by the combustion of fuel <br />gases, typically acetylene or propane, combined with <br />oxygen to heat and melt through materials.</h1>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div className={transitions ? "carousel carousel2 carousel5 transtionstart" : 'forming carousel carousel2 carousel5 '}>
                    <div className={`carousel2-slide1 ${isActive ? '' : ' active'} ${transitions ? ' transtionstart' : ''}`} >
                        <div className='next-button'>
                            <img src={Ultrasonic} />
                            <h1 className='mae-cad-learn-more-slider-topic'>Ultrasonic <br />cutting </h1>
                            <h1 className='defination'>High-frequency vibrations are used to <br />cut through materials such as plastic, rubber,<br /> and composites.</h1>
                        </div>
                    </div>
                    <div className={`carousel2-slide2 ${isActive ? ' active' : ''} ${transitions ? ' transtionstart' : ''}`} >
                        <div className='prev-button'>
                            <img src={Sawing} />
                            <h1 className='mae-cad-learn-more-slider-topic'>Sawing</h1>
                            <h1 className='defination'>Saw blade is used to cut through <br />various materials such as wood, metal,<br /> and plastic.</h1>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div className={transitions ? "carousel carousel2 carousel6 transtionstart" : 'forming carousel carousel6 carousel6 '}>
                    <div className={`carousel2-slide1 ${isActive ? '' : ' active'} ${transitions ? ' transtionstart' : ''}`} >
                        <div className='next-button'>
                            <img src={CNC} />
                            <h1 className='mae-cad-learn-more-slider-topic'>CNC <br />Machining</h1>
                            <h1 className='defination'>Computer-controlled machines are <br />used to create complex and precise parts <br />and components from various materials. Computer <br /> programcontrols the movement of cutting tools and<br /> other machines to perform various operations, such as<br /> drilling, cutting, milling, and turning.</h1>
                        </div>
                    </div>
                </div>
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

