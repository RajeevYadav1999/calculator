import React from 'react'
import Html from '../images/html(1).jpg'
// import HtmlNavBackground from '../images/htmlNavBackground.jpg.png'
import { useState } from 'react'
import { BiAccessibility } from "react-icons/bi";
import { SiHtml5 } from 'react-icons/si'
import { SiCss3 } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { SiJquery } from 'react-icons/si'
import { FaPython } from 'react-icons/fa'
import { SiCplusplus } from 'react-icons/si'
import { Link } from 'react-scroll';
import { RxCross2 } from "react-icons/rx";
import { GrLinkTop } from "react-icons/gr";
import HtmlHomeLink from './html\'sHomeLink';
import HtmlBackground from '../videos/html other section background.mp4'
import Animation from './scrollAnimation.js'
import Animatedimg1 from '../images/animated1.jpg'

export default function HTML2() {
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
                    <source src={Html} media="(min-width: 992px)" /><img className="cse-jarallax-img img-bg" src={Html} alt="img" />
                </picture>
                <div className="cse-container">
                    <div className="cse-row">
                        <div className="cse-col-12">
                            <div className="cse-align-container">
                                <div className="cse-align-item"><span>OOK</span>
                                    <h1 className="cse-title">HTML</h1>
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
                    <h1>HTML</h1>
                    <hr></hr>
                    <ul>
                        <li className='cse-nav-list'>
                            <Link to="Intro-of-html" smooth={true} duration={500} offset={-70} onClick={ToggleClass}>
                                HTML Introduction
                            </Link>
                        </li>
                        <li className='cse-nav-list'>
                            <Link to='HTML-STRUCTURE' smooth={true} duration={500} offset={-70} onClick={ToggleClass}>
                                HTML Document Structure
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
                {/* <div className='cse-nav-right-div-img'>
                    <img src={HtmlNavBackground} alt=''></img>
                </div> */}
            </section>
        </>
    )
}
