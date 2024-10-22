import React, { useState, useEffect } from 'react';
// import './cae-calucater.css'
// import IMG from './Screenshot (149) 2 .png'
import Navlogo from '../images/vig (1).png'
import { AiFillMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go"
import { IoIosCall } from "react-icons/io";
import { BsInstagram, BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { AiFillCaretRight } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";
import { Link } from 'react-router-dom';
import NavlogoBlack from "../images/vig (2).png"
import CalulatorUnitConverter from './UnitSelectionProperty/square'
import Img1 from './1.png'
import Img2 from './2.png'
import Img3 from './3.png'
import Img4 from './4.png'
import Img5 from './5.png'
import Img6 from './6.png'
import Img7 from './7.png'
import Img8 from './8.png'
import Img9 from './9.png'
import RectangleUnitConverter from './UnitSelectionProperty/Rectangle';
import HollowCircle from './UnitSelectionProperty/Hollowcircle';
import SolidCircle from './SolidCircle';
import HollowReactangle from './HollowReactangle';
import TeeSection from './TeeSection';
// import ImageChanger from './Calculatorimgchanger';
function SectionWithDivs() {

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

    const [selectedOption, setSelectedOption] = useState('option1');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };


    return (
        <>
            <nav className='ME-navbar'>
                <img className="MeNavlogo" src={Navlogo} alt=''></img>
            </nav>
            <br />
            <br />
            <br />
            <br />
            <section className={isToggled ? 'cae mae-cad-info-section fullscreen' : ' cae mae-cad-info-section'}>

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
                                <a href="/" className="mae-cad-info-leftside-navbar-nav-link">
                                    <Link to='/Mechcinal/Analyis/Pre-processing'><span className="mae-cad-info-leftside-navbar-nav-link-nav-text Analyis-dropdown">Analysis</span></Link>
                                    <AiFillCaretRight />
                                </a>
                                {isMenuActive(1) && (
                                    <div className="mae-cad-info-leftside-navbar-dropdown-menu">
                                        <a href="/" alt='' className="mae-cad-info-leftside-navbar-dropdown-menu-dropdown-link" onClick={handleToggle}><Link to='/Mechcinal/Analyis/Pre-processing'>Pre processing</Link></a>
                                        <hr />
                                        <a href="/" alt='' className="mae-cad-info-leftside-navbar-dropdown-menu-dropdown-link" onClick={handleToggle}><Link to='/Mechcinal/Analyis/Meshing'>Meshing </Link></a>
                                        <hr />
                                        <a href="/" alt='' className="mae-cad-info-leftside-navbar-dropdown-menu-dropdown-link"><Link to='/Mechcinal/Analyis/Post-processing'>Post processing</Link> </a>
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
                <div className='container2'>
                    <div class="relative overflow-hidden">
                        <div className='SheetMetal mae-cad-info-views-explore-more-section-blue-text mae-cad-info-blue-section-main active calulator'>
                            <br />

                            <h3 className='mae-cad-info-blue-section-main-topic'>Bending stress</h3>
                            <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill />When a beam is subjected to external loads (like lifting, wind load etc.),</h3>
                            <h3 className='mae-cad-info-blue-section-main-decsription not-icon'>  will experience bending and shear forces due to bending an internal force will generate that resist the bending is known as bending stress (flexural stress).</h3><br />
                            <h3 className='mae-cad-info-blue-section-main-decsription not-icon'>As a beam bends downward, its upper part experiences compressive stress, &  its lower part experiences tensile stress.</h3>
                            <h3 className='mae-cad-info-blue-section-main-topic'>How to calculate bending stress:</h3>
                            <h3 className='mae-cad-info-blue-section-main-decsription not-icon'>Bending stress is calculated through the bending stress equation: </h3>
                            <h3 className='mae-cad-info-blue-section-main-decsription not-icon'>σ = Mc/I</h3>
                            <h3 className='mae-cad-info-blue-section-main-topic'>where:</h3>
                            <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill />σ – Bending stress (in pascals or newtons per square meter) that the </h3>
                            <h3 className='mae-cad-info-blue-section-main-decsription not-icon'>beam experiences at a the beam experiences at a distance c from the neutral axis;</h3>
                            <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill />M – Bending moment applied to the beam in newton-meters (N⋅m);</h3>
                            <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill />c – Perpendicular distance of a point along the cross-section of </h3>
                            <h3 className='mae-cad-info-blue-section-main-decsription not-icon'>the beam from its neutral axis in meters (m);</h3>
                            <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill />I – Area moment of inertia of the beam in meters to the fourth power </h3>
                            <h3 className='mae-cad-info-blue-section-main-decsription not-icon'>(m4).</h3>



                            <br />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="sub-container top">
                        <select id="options" value={selectedOption} onChange={handleOptionChange}>
                            <option value="option1">Square</option>
                            <option value="option2">Rectangle</option>
                            <option value="option3">Hollow rectangle (rectangle tube)</option>
                            <option value="option4">Tee section</option>
                            <option value="option5">Channel section</option>
                            <option value="option6">I-beam with equal flanges</option>
                            <option value="option7">Angle (unequal legs)</option>
                            <option value="option8">Solid circle</option>
                            <option value="option9">Hollow circle or pipe</option>
                            {/* Add more options as needed */}
                        </select>

                        <br />

                        {/* Display different images based on the selected option */}
                        {selectedOption === 'option1' && (
                            <img src={Img1} alt="" />
                        )}
                        {selectedOption === 'option2' && (
                            <img src={Img2} alt="" />
                        )}
                        {selectedOption === 'option3' && (
                            <img src={Img3} alt="" />
                        )}
                        {selectedOption === 'option4' && (
                            <img src={Img4} alt="" />
                        )}
                        {selectedOption === 'option5' && (
                            <img src={Img5} alt="" />
                        )}
                        {selectedOption === 'option6' && (
                            <img src={Img6} alt="" />
                        )}
                        {selectedOption === 'option7' && (
                            <img src={Img7} alt="" />
                        )}
                        {selectedOption === 'option8' && (
                            <img src={Img8} alt="" />
                        )}
                        {selectedOption === 'option9' && (
                            <img src={Img9} alt="" />
                        )}


                        {/* <ImageChanger/> */}
                    </div>
                    <div className="sub-container center">
                        {/* <img src={IMG} alt='' /> */}
                    </div>
                    {/* {renderDivs()} */}
                    {selectedOption === 'option1' && (
                        <CalulatorUnitConverter />
                    )}
                    {selectedOption === 'option2' && (
                        <RectangleUnitConverter/>
                    )}
                    {selectedOption === 'option3' && (
                        <HollowReactangle/>
                    )}
                    {selectedOption === 'option4' && (
                        <TeeSection/>
                    )}
                    {selectedOption === 'option8' && (
                        <SolidCircle/>
                    )}
                    {selectedOption === 'option9' && (
                        <HollowCircle/>
                    )}
                </div>
            </section>
            <br />
            <br />
            <footer className={isToggled ? 'fullscreen' : 'nav-screen'}>
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
        </>
    );
}

export default SectionWithDivs;
