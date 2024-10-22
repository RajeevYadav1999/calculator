import React from 'react'
import './slider.css'
import { useState } from 'react';
import { BsFillBookmarkFill } from 'react-icons/bs'
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import img1 from '../../images/AUXILLARY VIEW.png'
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
                    <li className='mae-drawing-slider-nav-logo'>Lab</li>
                </div>
                <div className='mae-drawing-slider-nav-topic-right'>
                    <li className='mae-drawing-slider-nav-topics'>Topic1</li>
                    <li className='mae-drawing-slider-nav-topics'>Topic2</li>
                    <li className='mae-drawing-slider-nav-topics'>Topic3</li>
                    <li className='mae-drawing-slider-nav-topics'>Topic4</li>
                </div>
            </ul>
            <div className='mae-drawing-slider-button-bookmarks'>

                <button className='mae-drawing-slider-button-bookmark-xd' onClick={toggleClass}>
                    <span className='mae-drawing-slider-button-bookmark-text'>Xd</span>
                </button>

                <button className='mae-drawing-slider-button-bookmark-xd' onClick={removeClass}>
                    <span className='mae-drawing-slider-button-bookmark-text'>Xd</span>
                </button>

                <button className='mae-drawing-slider-button-bookmark-ui' onClick={addClass}>
                    <span className='mae-drawing-slider-button-bookmark-text'>UI</span>
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
<img src={img1} />
                    </div>
                </div>
                <div className={`carousel-slide2 ${isActive ? ' active' : ''} ${transitions ? ' transtionstart' : ''}`} >
                    <div className='prev-button'>
                        <h1>my text with image at the top2</h1>
                        <h1>my text with image at the top2</h1>
                        <h1>my text with image at the top2</h1>
                        <h1>my text with image at the top2</h1>
                        <h1>my text with image at the top2</h1>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <div className={transitions? "carousel carousel2  transtionstart" : ' carousel carousel2'}>
                <div className={`carousel2-slide1 ${isActive ? '' : ' active'} ${transitions ? ' transtionstart' : ''}`} >
                    <div className='next-button'>
                        <h1>my text with image at the top1</h1>
                        <h1>my text with image at the top1</h1>
                        <h1>my text with image at the top1</h1>
                        <h1>my text with image at the top1</h1>
                        <h1>my text with image at the top1</h1>
                    </div>
                </div>
                <div className={`carousel2-slide2 ${isActive ? ' active' : ''} ${transitions ? ' transtionstart' : ''}`} >
                    <div className='prev-button'>
                        <h1>my text with image at the top2</h1>
                        <h1>my text with image at the top2</h1>
                        <h1>my text with image at the top2</h1>
                        <h1>my text with image at the top2</h1>
                        <h1>my text with image at the top2</h1>
                    </div>
                </div>
            </div>
        </div>
        <br />
        <br />
        <br />
        <footer className='mae-drawing-slider-footer'>
            <div className='mae-drawing-slider-footer-logo'><p>OOK</p></div>
            <div className='mae-drawing-slider-footer-descripiton'><p>Take a dive of ocean <br/>OCEAN OF KNOWELAGE</p></div>
            <div className='mae-drawing-slider-footer-social-media'>
                <BsInstagram/>
                <BsFacebook/>
                <BsLinkedin/>
                <BsTwitter/>
            </div>
        </footer>
    </>
    )
}