import React, { useRef, useState, useEffect } from 'react';
import { AiFillCaretRight } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";
import Video from '../videos/relations1.mp4'
import { Link } from 'react-router-dom';
import { AiOutlineCaretDown } from "react-icons/ai";
import { FaPlay, FaPause, FaExpand, FaCompress, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import Navlogo from "../images/vig (1).png"
import Gridimg from '../images/zoom.webp'
import { FaHome } from "react-icons/fa";
import { GiMechanicGarage } from "react-icons/gi";
import { RiComputerFill } from "react-icons/ri";
import { ImRocket } from "react-icons/im";
import NavlogoBlack from "../images/vig (2).png"
import { TbPhotoEdit } from "react-icons/tb";
import { AiFillMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go"
import { IoIosCall } from "react-icons/io";
import { BsInstagram, BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs'
import Detailview from '../images/sand-casting-2.jpg'
import { PiGridFourFill } from "react-icons/pi";
import { MdNavigateNext } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";

import IMG1 from '../New folder/truss 01.jpg'
import IMG2 from '../New folder/truss 02.jpg'
import IMG3 from '../New folder/truss 03.jpeg'
import IMG4 from '../New folder/truss 04.jpg'
const ImageScrollEffect = () => {
    const [activeMenu, setActiveMenu] = useState(null);

    const handleMenuHover = (menuIndex) => {
        setActiveMenu(menuIndex);
    };

    const handleMenuLeave = () => {
        setActiveMenu(null);
    };

    const isMenuActive = (menuIndex) => {
        return activeMenu === menuIndex;
    };
    const [isToggled, setToggled] = useState(false);

    const handleToggle = () => {
        setToggled(!isToggled);
    };

    const [addClass, setAddClass] = useState(true);

    const Changemyclass = () => {
        addClass ? setAddClass(false) : setAddClass(true);
    }

    //  explore more section
    const [isActive, setIsActive] = useState(true);

    const toggleClass = () => {
        setIsActive(!isActive);
    };
    // 
    const [isTranstionActive, setIsTranstionActive] = useState(false);

    const AddClasses = () => {
        setIsTranstionActive(true);
    };

    const removeClass = () => {
        setIsTranstionActive(false);
    };

    const [transitions, setTransitions] = useState(false);

    const toggleSlides = () => {
        setTransitions(!transitions);
    };
    //  background img zoom

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const calculateScaleFactor = () => {
        return 1 - (scrollPosition / 1000); //Adjust the scaling behavior as needed
    };

    const calculateBlurRadius = () => {
        return scrollPosition / 100; //Adjust the blur behavior as needed
    };
    const [Toggletext, setToggletext] = useState(false);

    const Togglemytext = () => {
        Toggletext ? setToggletext(false) : setToggletext(true);
        console.log(Toggletext);
    }



    return (
        <>
            <nav className='ME-navbar'>
                <img className="MeNavlogo" src={Navlogo} alt=''></img>
            </nav>
            <br />
            <section className={isToggled ? 'mae-cad-info-section fullscreen' : 'mae-cad-info-section'}>
                <nav className="mae-cad-info-leftside-navbar">
                    <div className={isToggled ? 'mae-cad-info-section-line unactive' : 'mae-cad-info-section-line'} onClick={handleToggle}>
                        <div className='mae-cad-info-section-burgur-line'></div>
                        <div className='mae-cad-info-section-burgur-line'></div>
                        <div className='mae-cad-info-section-burgur-line'></div>
                    </div>
                    <ul className={isToggled ? 'mae-cad-info-leftside-navbar-navbar-nav unactive' : 'mae-cad-info-leftside-navbar-navbar-nav'}>
                        <li className='mae-cad-info-section-in-left-side-div-ul-li-heading'>
                            <img className="MeNavlogo" src={NavlogoBlack} alt=''></img>
                        </li>
                        <li className='nav-item mae-cad-info-leftside-navbar-one'>
                            <Link to='/Mechcinal/STRUCTURE-ENGINEERING' className="mae-cad-info-leftside-navbar-nav-link">
                                <span className="mae-cad-info-leftside-navbar-nav-link-nav-text">Introduction</span>
                            </Link>
                        </li>
                        <hr />
                        <li className='nav-item mae-cad-info-leftside-navbar-one'>
                            <Link to='/Mechcinal/CalculationAndCalculator' className="mae-cad-info-leftside-navbar-nav-link">
                                <span className="mae-cad-info-leftside-navbar-nav-link-nav-text">Calculation & Calculator</span>
                            </Link>
                        </li>
                        <hr />
                        <li className='nav-item mae-cad-info-leftside-navbar-one'>
                            <Link to='/Mechcinal/cad/3dModeling/partModlling/types/Weldments' className="mae-cad-info-leftside-navbar-nav-link">
                                <span className="mae-cad-info-leftside-navbar-nav-link-nav-text">CAD</span>
                            </Link>
                        </li>
                        <hr />
                        <li className='nav-item mae-cad-info-leftside-navbar-one'
                        >
                            <li
                                className={`nav-item mae-cad-info-leftside-navbar-one ${isMenuActive(1) ? 'active' : ''}`}
                                onMouseEnter={() => handleMenuHover(1)}
                                onMouseLeave={handleMenuLeave}
                            >
                                <a href="#" className="mae-cad-info-leftside-navbar-nav-link">
                                    <Link to='/Mechcinal/Analyis/Pre-processing'><span className="mae-cad-info-leftside-navbar-nav-link-nav-text Analyis-dropdown">Analysis</span></Link>
                                    <AiFillCaretRight />
                                </a>
                                {isMenuActive(1) && (
                                    <div className="mae-cad-info-leftside-navbar-dropdown-menu">
                                        <a href="#" className="mae-cad-info-leftside-navbar-dropdown-menu-dropdown-link" onClick={handleToggle}><Link to='/Mechcinal/Analyis/Pre-processing'>Pre processing</Link></a>
                                        <hr />
                                        <a href="#" className="mae-cad-info-leftside-navbar-dropdown-menu-dropdown-link" onClick={handleToggle}><Link to='/Mechcinal/Analyis/Meshing'>Meshing </Link></a>
                                        <hr />
                                        <a href="#" className="mae-cad-info-leftside-navbar-dropdown-menu-dropdown-link"><Link to='/Mechcinal/Analyis/Post-processing'>Post processing</Link> </a>
                                    </div>
                                )}
                            </li>


                        </li>
                        <hr />

                        <li className='nav-item mae-cad-info-leftside-navbar-one'>
                            <Link to='/Mechcinal/cad/DRAFTING/VIEWS' className="mae-cad-info-leftside-navbar-nav-link">
                                <span className="mae-cad-info-leftside-navbar-nav-link-nav-text">Drafting</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className='mae-cad-info-section-main-section-info'>
                    <br />
                    <br />
                    <div className='mae-cad-info-section-main-section-info-sec-nav'><p className='mae-cad-info-section-main-section-info-sec-nav-p'>MECHACINAL <AiOutlineRight /> <span> STRUCTURE ENGINEERING</span></p></div>
                    <hr />
                    <br />
                    <br />

                    <div className='mae-cad-info-section-main-section-info-zoom-section overlay-1 se '>
                        <div className='mae-cad-info-section-main-section-info-zoom-section-overlay-1 img' style={{ filter: `blur(10px)` }}></div>
                        <div className='mae-cad-info-section-main-section-info-zoom-section-overlay-1 img zoom' style={{ transform: `scale(${calculateScaleFactor()})`, }}></div>
                        <div className='mae-cad-info-section-main-section-info-zoom-section-overlay-1 black-background'></div>
                    </div>


                    <br />
                    <br />
                    <hr />
                    <br />
                    <br />
                    <section className='mae-cad-info-view-second-section-main-grid'>
                        <div className='mae-cad-info-second-section-main-grid-text'>
                            <h2 className='mae-cad-info-second-section-main-grid-text-h2-heading'>STRUCTURES</h2>
                            <br />
                            <h2 className='mae-cad-info-second-section-main-grid-text-p-defination'>Combination of members connected in such a way as to serve a useful purpose and resist external load.<br /> The member that constitutes a structure is called a structure member.</h2>
                            <br />
                            <div className='mae-cad-info-second-section-main-grid-explore-more-grid'>
                                <p className='mae-cad-info-second-section-main-grid-explore-more-grid-p'>Explore more</p>
                                <AiOutlineCaretDown className={isActive ? 'mae-cad-info-second-section-main-grid-explore-more-grid-icon' : 'mae-cad-info-second-section-main-grid-explore-more-grid-icon rotate'} onClick={toggleClass} />
                            </div>
                        </div>
                        <div className='mae-cad-info-second-section-main-grid-image'>
                            <div className={isToggled ? 'mae-cad-info-second-section-main-grid-image-overlay' : ' mae-cad-info-second-section-main-grid-image-overlay fullscreen-btn'}>
                            </div>
                        </div>
                    </section>
                    <br />
                    <div className={isActive ? 'SheetMetal mae-cad-info-views-explore-more-section-blue-text mae-cad-info-blue-section-main ' : 'SheetMetal mae-cad-info-views-explore-more-section-blue-text mae-cad-info-blue-section-main active '}>
                        <br />

                        <h3 className='mae-cad-info-blue-section-main-topic margin-bottom-10px font-style-italic'><Link to='/Mechcinal/STRUCTURE-ENGINEERING/Types-of-structural-members'>Types of structural members</Link></h3>

                        <h3 className='mae-cad-info-blue-section-main-topic margin-bottom-10px font-style-italic'><Link to='/Mechcinal/STRUCTURE-ENGINEERING/Types-of-structure'>Types of structure</Link></h3>

                        <br />
                    </div>
                    <br />
                    <div className={isToggled ? 'carousel-buttons fullscreen' : 'carousel-buttons'}>
                        <div>
                            <button className='mae-drawing-slider-button-bookmark-xd xd-one' onClick={toggleSlides}>
                                <span className='mae-drawing-slider-button-bookmark-text'><PiGridFourFill /></span>
                            </button>

                            <button className='mae-drawing-slider-button-bookmark-xd xd-two' onClick={removeClass}>
                                <span className='mae-drawing-slider-button-bookmark-text'><IoIosArrowBack /></span>
                            </button>

                            <button className='mae-drawing-slider-button-bookmark-ui ui-three' onClick={AddClasses}>
                                <span className='mae-drawing-slider-button-bookmark-text small'><MdNavigateNext /></span>
                            </button>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className={transitions ? 'mae-drawing-slider-borders active' : 'mae-drawing-slider-borders '}>
                        <div className="carousel">
                            <div className={`carousel-slide1 ${isTranstionActive ? '' : ' active'} ${transitions ? ' transtionstart' : ''}`} >
                                <div className='next-button'>
                                    <img src={IMG1} />
                                    <h1 className='mae-cad-learn-more-slider-topic'>Sand casting</h1>
                                    <h1 className='defination'>Molten materials are poured into the sand mold to get <br />the desired shape.</h1>
                                    {/* <h1 className='defination'> The three primary orthographic views include</h1> */}
                                </div>
                            </div>
                            <div className={`carousel-slide2 ${isTranstionActive ? ' active' : ''} ${transitions ? ' transtionstart' : ''}`} >
                                <div className='prev-button'>
                                    <img src={IMG2} />
                                    <h1 className='mae-cad-learn-more-slider-topic'>Die casting </h1>
                                    <h1 className='defination'>Molten material is forcibly injected into a metal mold<br /> (die) under high pressure.</h1>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div className={transitions ? " carousel carousel2  transtionstart" : 'forming carousel carousel2'}>
                            <div className={`carousel2-slide1 ${isTranstionActive ? '' : ' active'} ${transitions ? ' transtionstart' : ''}`} >
                                <div className='next-button'>
                                    <img src={IMG3} />
                                    <h1 className='mae-cad-learn-more-slider-topic'>Investment Casting <br />(or Lost Wax Process) </h1>
                                    <h1 className='defination'>A wax pattern is coated with refractory material to <br />create a mold and molten metal is poured and <br />melted into the wax pattern to get the <br />desired shape.</h1>
                                </div>
                            </div>
                            <div className={`carousel2-slide2 ${isTranstionActive ? ' active' : ''} ${transitions ? ' transtionstart' : ''}`} >
                                <div className='prev-button'>
                                    <img src={IMG4} />
                                    <h1 className='mae-cad-learn-more-slider-topic'>Permanent Mold Casting</h1>
                                    <h1 className='defination'>Molten materials are poured into a reused, permanent <br />mold typically made of metal to get the desired shape.</h1>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                    </div>
                    <br />
                    <hr />
                    <br />
                    <footer>
                        <div className='footer-section-one'>
                            <br></br>
                            <img src={NavlogoBlack} alt='' />
                            <br></br>
                            <p>OOK THE Ocean Of Knowlegde.<br />Here u can know about technologies.<br /> Go Ahead explore more</p>
                            <br></br>
                            <br></br>
                        </div>
                        <div className='footer-section-two'>
                            <ul>
                                <li><a href="true" alt=''>MAE</a></li>
                                <li><a href="true" alt=''>ASE</a></li>
                                <li><a href="true" alt=''>CSE</a></li>
                                <li><a href="true" alt=''>Animation</a></li>
                            </ul>
                        </div>
                        <div className='footer-section-three'>
                            <li><a href="true" alt=''><BsInstagram />  Instagram</a></li>
                            <li><a href="true" alt=''><BsFacebook />  Fackbook</a></li>
                            <li><a href="true" alt=''><BsTwitter />  Twitter</a></li>
                            <li><a href="true" alt=''><BsLinkedin />  Linkedin</a></li>
                        </div>
                        <div className='footer-section-four'>
                            <div className='contact-us'>
                                <li className='contact-us'>CONTACT US</li>
                                <li><a href="true" alt=''><AiFillMail /></a> ook@gmail.com</li>
                                <li><a href="true" alt=''><IoIosCall /></a> +91 70068 56070</li>
                                <li><a href="true" alt=''><GoLocation /></a> mohail chandigarh</li>
                            </div>
                        </div>
                    </footer>
                </div>
            </section>

        </>
    )
}
export default ImageScrollEffect; 