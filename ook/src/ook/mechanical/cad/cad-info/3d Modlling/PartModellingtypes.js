import React from 'react'
import '../slider.css'
import { useState } from 'react';
import { BsFillBookmarkFill } from 'react-icons/bs'
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Detailview from '../../../images/Odd Input Shaft & Gears_page-0001.jpg'
import { BsArrowRight } from "react-icons/bs";
import { MdNavigateNext } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { PiGridFourFill } from "react-icons/pi";
export default function PartModellingtypes() {
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
                    <li className='mae-drawing-slider-nav-logo'>Discover <BsArrowRight/></li>
                </div>
                <div className='mae-drawing-slider-nav-topic-right'>
                    <li className='mae-drawing-slider-nav-topics'><Link to='/Mechcinal/cad/3dModeling/partModlling/types/PartModelling'>Part Modelling</Link></li>
                    <li className='mae-drawing-slider-nav-topics'><Link to='/Mechcinal/cad/3dModeling/partModlling/types/PartModelling'>Weldments </Link></li>
                    <li className='mae-drawing-slider-nav-topics'><Link to='/Mechcinal/cad/3dModeling/partModlling/types/PartModelling'>Sheet Metal</Link></li>
                    <li className='mae-drawing-slider-nav-topics'><Link to='/Mechcinal/cad/3dModeling/partModlling/types/PartModelling'>Surface Modelling</Link></li>
                    {/* <li className='mae-drawing-slider-nav-topics'><Link to='/Mechcinal/cad/DRAFTING/VIEWS/types/Section'>Section</Link></li> */}
                    {/* <li className='mae-drawing-slider-nav-topics'><Link to='/Mechcinal/cad/DRAFTING/VIEWS/types/Detail'>Detail</Link></li> */}
                    {/* <li className='mae-drawing-slider-nav-topics'><Link to='/Mechcinal/cad/DRAFTING/VIEWS/types/Auxiliary'>Auxiliary</Link></li> */}
                </div>
            </ul>
            <div className='mae-drawing-slider-button-bookmarks'>

                <button className='mae-drawing-slider-button-bookmark-xd' onClick={toggleClass}>
                    <span className='mae-drawing-slider-button-bookmark-text'><PiGridFourFill/></span>
                </button>

                <button className='mae-drawing-slider-button-bookmark-xd' onClick={removeClass}>
                    <span className='mae-drawing-slider-button-bookmark-text'><IoIosArrowBack/></span>
                </button>

                <button className='mae-drawing-slider-button-bookmark-ui ' onClick={addClass}>
                    <span className='mae-drawing-slider-button-bookmark-text small'><MdNavigateNext/></span>
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
                        <img src={Detailview} />
                        <h1 className='mae-cad-learn-more-slider-topic'>Part <br />Modelling</h1>
                        <h1 className='defination'>Creation of virtual representation of 3d objects<br /> with the help of cad software is usually used to <br />create the solid parts. </h1>
                        {/* <h1 className='defination'> The three primary orthographic views include</h1> */}
                    </div>
                </div>
                <div className={`carousel-slide2 ${isActive ? ' active' : ''} ${transitions ? ' transtionstart' : ''}`} >
                    <div className='prev-button'>
                        <img src={Detailview} />
                        <h1 className='mae-cad-learn-more-slider-topic'>Weldments</h1>
                        <h1 className='defination'>Display the internal details of the part or<br /> assembly that are not visible in<br /> orthographic views.</h1>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className={transitions ? "carousel carousel2  transtionstart" : ' carousel carousel2'}>
                <div className={`carousel2-slide1 ${isActive ? '' : ' active'} ${transitions ? ' transtionstart' : ''}`} >
                    <div className='next-button'>
                        <img src={Detailview} />
                        <h1 className='mae-cad-learn-more-slider-topic'>Sheet Metal</h1>
                        <h1 className='defination'>Display the magnified region of the<br /> orthographic view to provide a clear<br /> representation of the detail. </h1>
                    </div>
                </div>
                <div className={`carousel2-slide2 ${isActive ? ' active' : ''} ${transitions ? ' transtionstart' : ''}`} >
                    <div className='prev-button'>
                        <img src={Detailview} />
                        <h1 className='mae-cad-learn-more-slider-topic'>Surface <br />Modelling</h1>
                        <h1 className='defination'>Display an object or feature that is not<br /> parallel to any of the orthographic planes. </h1>
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