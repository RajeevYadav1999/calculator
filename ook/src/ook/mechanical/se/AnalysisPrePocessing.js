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
export default function AnalysisPrePocessing() {
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
            <footer className='main-footer'>
                <div className='footer-section-one'>
                    <br></br>
                    <img src={Navlogo} alt='' />
                    <br></br>
                    <br></br>
                    <p>OOK THE Ocean Of Knowlegde.<br />Here u can know about technologies.<br /><br /> Go Ahead explore more</p>
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
            </section>
        </>
    )
}
