import React from 'react'
import { useState } from 'react';
import { BsFillBookmarkFill } from 'react-icons/bs'
import { BsArrowRight } from 'react-icons/bs'
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Detailview from '../../images/Odd Input Shaft & Gears_page-0001.jpg'
import Forging from '../../images/forging.jpeg'
import Rolling from '../../images/profileRolling-Machines.jpg'
import Logo from '../../images/vig (1).png'
import { MdNavigateNext } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { PiGridFourFill } from "react-icons/pi";
export default function Slider() {
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


    return (<>
        <nav className='mae-drawing-slider-navbar'>
            <ul className='mae-drawing-slider-navbar-ul'>
                <div className='mae-drawing-slider-nav-logo-left'>
                    <li className='mae-drawing-slider-nav-logo'>Discover <BsArrowRight /></li>
                </div>
                <div className='mae-drawing-slider-nav-topic-right'>
                    <li className='mae-drawing-slider-nav-topics'><Link to='/Mechcinal/cam/topics/forming/types/forging'>Forging </Link></li>
                    <br />
                    <li className='mae-drawing-slider-nav-topics'><Link to='/Mechcinal/cam/topics/forming/types/rolling'>Rolling </Link></li>
                    <br/>
                    <li className='mae-drawing-slider-nav-topics'><Link to='/Mechcinal/cam/topics/forming/types/rolling'>Extrusion </Link></li>
                    <br/>
                    <li className='mae-drawing-slider-nav-topics'><Link to='/Mechcinal/cam/topics/forming/types/rolling'>Sheet Metal </Link></li>
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
                        <img src={Forging} />
                        <h1 className='mae-cad-learn-more-slider-topic'>Forging<br /> </h1>
                        <h1 className='defination'>Reshaping of metal using compressive <br/>forces. The force can be delivered with a  <br/>hammer(often a power hammer) or a die.</h1>
                        {/* <h1 className='defination'> The three primary orthographic views include</h1> */}
                    </div>
                </div>
                <div className={`carousel-slide2 ${isActive ? ' active' : ''} ${transitions ? ' transtionstart' : ''}`} >
                    <div className='prev-button'>
                        <img src={Rolling} />
                        <h1 className='mae-cad-learn-more-slider-topic'>Rolling <br /></h1>
                        <h1 className='defination'>Metal stock is passed through one or <br/>more pairs of rolls to reduce the thickness  <br/>and to make the thickness uniform. Parts obtained<br/> by the rolling process are more rigid than the<br/> original material.</h1>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <div className={transitions ? " carousel carousel2  transtionstart" : 'forming carousel carousel2'}>
                <div className={`carousel2-slide1 ${isActive ? '' : ' active'} ${transitions ? ' transtionstart' : ''}`} >
                    <div className='next-button'>
                        <img src={Detailview} />
                        <h1 className='mae-cad-learn-more-slider-topic'>Extrusion <br /></h1>
                        <h1 className='defination'>Material in a Hot, semi-liquid state is<br/> forced through a shaped opening, called a die, <br/>to produce a continuous shape or profile.<br/> Material can be metals, plastics, and ceramics</h1>
                    </div>
                </div>
                <div className={`carousel2-slide2 ${isActive ? ' active' : ''} ${transitions ? ' transtionstart' : ''}`} >
                    <div className='prev-button'>
                        <img src={Detailview} />
                        <h1 className='mae-cad-learn-more-slider-topic'>Sheet Metal<br /></h1>
                        <h1 className='defination'>used to form and shape metal sheets into<br/> different products.</h1>
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