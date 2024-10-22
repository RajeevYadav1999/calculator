
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

import Plasma from '../manufacturing/manufacturing/cutting/plasma cutting.jpg'
import Logo from '../../images/img/vig (1).png'





import { MdNavigateNext } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { PiGridFourFill } from "react-icons/pi";
export default function ConstraintsTypes() {
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
                            <img src={Plasma} />
                            <h1 className='mae-cad-learn-more-slider-topic'>Dimensions</h1>
                            <h1 className='defination'>Dimensions provide measurements of various features in <br/>the drawing, such as lengths, diameters, angles, and <br/>distances between objects. They help define the size<br/> and position of the part or model.</h1>

                            {/* <h1 className='defination'> The three primary orthographic views include</h1> */}
                        </div>
                    </div>
                    <div className={`carousel-slide2 ${isActive ? ' active' : ''} ${transitions ? ' transtionstart' : ''}`} >
                        <div className='prev-button'>
                            <img src={Plasma} />
                            <h1 className='mae-cad-learn-more-slider-topic'>Notes</h1>
                            <h1 className='defination'>Notes are used to provide additional information or instructions.<br/> They can include explanations, manufacturing processes, or any<br/> other details that are not easily conveyed through other<br/> annotations.</h1>

                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <div className={transitions ? " carousel carousel2  transtionstart" : 'forming carousel carousel2'}>
                    <div className={`carousel2-slide1 ${isActive ? '' : ' active'} ${transitions ? ' transtionstart' : ''}`} >
                        <div className='next-button'>
                            <img src={Plasma} />
                            <h1 className='mae-cad-learn-more-slider-topic'>Symbols</h1>
                            <h1 className='defination'>Symbols are graphical representations used to convey<br/> specific meanings</h1>

                        </div>
                    </div>
                    <div className={`carousel2-slide2 ${isActive ? ' active' : ''} ${transitions ? ' transtionstart' : ''}`} >
                        <div className='prev-button'>
                            <img src={Plasma} />
                            <h1 className='mae-cad-learn-more-slider-topic'>Leaders and Text</h1>
                            <h1 className='defination'>Leaders are lines with arrowheads that point to specific areas<br/> or features on the drawing. Text is placed adjacent to the<br/> leader lines and is used to label or describe the indicated<br/> elements.</h1>

                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className={transitions ? "carousel carousel2 carousel6 transtionstart" : 'forming carousel carousel6 carousel6 '}>
                    <div className={`carousel2-slide1 ${isActive ? '' : ' active'} ${transitions ? ' transtionstart' : ''}`} >
                        <div className='next-button'>
                            <img src={Plasma} />
                            <h1 className='mae-cad-learn-more-slider-topic'>Balloons</h1>
                            <h1 className='defination'>Balloons are numbered circles or rectangles used to identify individual parts or components in an assembly drawing.<br/> They help correlate the parts list with the physical components shown in the drawing.</h1>

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

