import React, { useState } from 'react';
import HtmlBackgroundsixth from '../videos/html background sixth.mp4'
import HtmlNavBackground from '../images/htmlNavBackground.jpg.png'
import { Link } from 'react-scroll';
import { RxCross2 } from "react-icons/rx";
import HtmlHomeLink from "../frontend/html'sHomeLink.js";
import Animation from '../frontend/scrollAnimation.js'
import Animatedimg1 from '../images/animated1.jpg'
export default function HTML() {

    const [Toggle, setToggle] = useState(false)

    const ToggleClass = () => {
        Toggle ? setToggle(false) : setToggle(true);
    }
    const [Toggletext, setToggletext] = useState(true);

    const Togglemytext = () => {
        setToggletext(!Toggletext);
        console.log(Toggletext);
    }
    const [inputValue, setInputValue] = useState('');

    const handleButtonClick = (value) => {
        setInputValue(value);
    };

    const [compiledHtml, setCompiledHtml] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const compileHtml = () => {
        setCompiledHtml(inputValue);
    };
    // toggle function
    const [isToggled, setIsToggled] = useState(false);

    const toggle = () => {
        setIsToggled((prev) => !prev); // Toggle the state value
    };
    return (
        <>
            <section className={Toggletext ? 'cse-promo-primary' : 'cse-promo-primary blur'} id='cse-HTML-header'>
                <div className="cse-overlay" />
                <picture>
                    <video autoPlay muted loop id="background-video">
                        <source src={HtmlBackgroundsixth} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </picture>
                <div className="cse-container">
                    <div className="cse-row">
                        <div className="cse-col-12">
                            <div className="cse-align-container">
                                <div className="cse-align-item">
                                    <h1 className="cse-title">CSS</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='cse-burgur' onClick={ToggleClass}>
                <div className='cse-burgur-line'></div>
                <div className='cse-burgur-line'></div>
                <div className='cse-burgur-line'></div>
            </div>
            <section className={Toggle ? "cse cse-navbar open" : "cse cse-navbar "}>
                <div>
                    <HtmlHomeLink />
                    <hr></hr>
                    <RxCross2 className='closs-nav-btn' onClick={ToggleClass} />
                    <br />
                    <h1>CSS</h1>
                    <hr></hr>
                    <ul>
                        <li className='cse-nav-list'>
                            <Link to="Intro-of-html" smooth={true} duration={500} offset={-70} onClick={ToggleClass}>
                                CSS Introduction
                            </Link>
                        </li>
                        <li className='cse-nav-list'>
                            <Link to='HTML-STRUCTURE' smooth={true} duration={500} offset={-70} onClick={ToggleClass}>
                                CSS pointers
                            </Link>
                        </li>
                        <li className='cse-nav-list'>
                            <Link to='HTML-STRUCTURE' smooth={true} duration={500} offset={-70} onClick={ToggleClass}>
                                HTML Headings
                            </Link>
                        </li>
                        <li className='cse-nav-list'>
                            <Link to='HTML-STRUCTURE' smooth={true} duration={500} offset={-70} onClick={ToggleClass}>
                                HTML Paragraph
                            </Link>
                        </li>
                        <li className='cse-nav-list'>
                            <Link to='HTML-STRUCTURE' smooth={true} duration={500} offset={-70} onClick={ToggleClass}>
                                HTML Hyperlinks
                            </Link>
                        </li>
                        <li className='cse-nav-list'>
                            <Link to='HTML-STRUCTURE' smooth={true} duration={500} offset={-70} onClick={ToggleClass}>
                                HTML File Links
                            </Link>
                        </li>
                        <li className='cse-nav-list'>
                            <Link to='HTML-STRUCTURE' smooth={true} duration={500} offset={-70} onClick={ToggleClass}>
                                HTML Styles
                            </Link>
                        </li>
                        <li className='cse-nav-list'>HTML5 Video and Audio</li>
                        <li className='cse-nav-list'>HTML5 Canvas</li>
                        <li className='cse-nav-list'>HTML5 Geolocation</li>
                        <li className='cse-nav-list'>HTML Forms</li>
                    </ul>
                </div>
                <div className='cse-nav-right-div-img'>
                    <img src={HtmlNavBackground} alt=''></img>
                </div>
            </section>
            <section className=' transform-160px-top cse-HTML-intro'>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Animation />
                <div className='HTML-intro-flex'>
                    <div className='HTML-intro' id='Intro-of-html'>
                        <h1 className='black-white heading-font'>CSS INTRODUCTION</h1>
                        <br />
                        <p className='black-white  description'>HTML, also known as Hypertext Markup Language. Used to create web pages by using some elements like hyperlinks, video, images, headings, and some other elements. HTML uses a specific Document Structure with a lot of tag like <span>&lt;</span>html<span>&gt;</span>, <span>&lt;</span>head<span>&gt;</span>, <span>&lt;</span>body<span>&gt;</span>, and etc.</p>
                    </div>
                    <img src={Animatedimg1} alt='not-responding'/>
                </div>
                <br />
            </section>
        </>
    )

}