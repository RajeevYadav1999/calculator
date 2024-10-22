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
                        <li className='nav-item mae-cad-info-leftside-navbar-one'
                        >
                            <Link to='/Mechcinal'className="mae-cad-info-leftside-navbar-nav-link">
                                <span className="mae-cad-info-leftside-navbar-nav-link-nav-text"><FaHome/>Information</span>
                            </Link>

                        </li>
                        <hr />
                        <li className='nav-item mae-cad-info-leftside-navbar-one'
                        >
                            <Link to='/Mechcinal'className="mae-cad-info-leftside-navbar-nav-link">
                                <span className="mae-cad-info-leftside-navbar-nav-link-nav-text"><GiMechanicGarage/>Mech</span>
                            </Link>

                        </li>
                        <hr />
                        <li className='nav-item mae-cad-info-leftside-navbar-one'
                        >
                            <Link to='/Cse'className="mae-cad-info-leftside-navbar-nav-link">
                                <span className="mae-cad-info-leftside-navbar-nav-link-nav-text"><RiComputerFill/>Cse</span>
                            </Link>

                        </li>
                        <hr />
                        <li className='nav-item mae-cad-info-leftside-navbar-one'
                        >
                            <Link to=''className="mae-cad-info-leftside-navbar-nav-link">
                                <span className="mae-cad-info-leftside-navbar-nav-link-nav-text"><ImRocket/>Ase</span>
                            </Link>

                        </li>
                        <hr />
                        <li className='nav-item mae-cad-info-leftside-navbar-one'
                        >
                            <Link to=''className="mae-cad-info-leftside-navbar-nav-link">
                                <span className="mae-cad-info-leftside-navbar-nav-link-nav-text"><TbPhotoEdit/>Animation</span>
                            </Link>

                        </li>
                        <hr />

                    </ul>
                </nav>
                <div className='mae-cad-info-section-main-section-info'>
                    <br />
                    <br />
                    <div className='mae-cad-info-section-main-section-info-sec-nav'><p className='mae-cad-info-section-main-section-info-sec-nav-p'>MANUFACTURING <AiOutlineRight /> <span> CASTING</span></p></div>
                    <hr />
                    <br />
                    <br />

                    <div className='mae-cad-info-section-main-section-info-zoom-section overlay-1'>
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
                            <h2 className='mae-cad-info-second-section-main-grid-text-h2-heading'>CASTING  </h2>
                            <h2 className='mae-cad-info-second-section-main-grid-text-p-defination'>The molten material is poured into a mold or cavity to get the desired shape.</h2>
                            <div className='mae-cad-info-second-section-main-grid-explore-more-grid'>
                                <p className='mae-cad-info-second-section-main-grid-explore-more-grid-p'>Explore more</p>
                                <AiOutlineCaretDown className={isActive ? 'mae-cad-info-second-section-main-grid-explore-more-grid-icon' : 'mae-cad-info-second-section-main-grid-explore-more-grid-icon rotate'} onClick={toggleClass} />
                            </div>
                        </div>
                        <div className='mae-cad-info-second-section-main-grid-image'>
                            <img className='mae-cad-info-second-section-main-grid-image-img' src={Gridimg} />
                            <div className={isToggled ? 'mae-cad-info-second-section-main-grid-image-overlay':' mae-cad-info-second-section-main-grid-image-overlay fullscreen-btn'}>
                                <button className='mae-cad-info-second-section-main-grid-image-overlay-button'><Link to='/Mechcinal/cam/topics/casting/types'>TYPES</Link></button>
                            </div>
                        </div>
                    </section>
                    <br />
                    <div className={isActive ? 'SheetMetal mae-cad-info-views-explore-more-section-blue-text mae-cad-info-blue-section-main ' : 'SheetMetal mae-cad-info-views-explore-more-section-blue-text mae-cad-info-blue-section-main active '}>
                        <br />

                        <h3 className='mae-cad-info-blue-section-main-topic margin-bottom-10px font-style-italic'><Link to='/Mechcinal/cam/topics/casting/CASTINGPROPERTIESOFMATERIAL'>CASTING PROPERTIES OF MATERIAL</Link></h3>
                        
                        <h3 className='mae-cad-info-blue-section-main-topic margin-bottom-10px font-style-italic'><Link to='/Mechcinal/cam/topics/casting/COMPONENTSUSEDINCASTING'>COMPONENTS USED IN CASTING</Link></h3>
                      
                        <h3 className='mae-cad-info-blue-section-main-topic font-style-italic'><Link to='/Mechcinal/cam/topics/casting/STEPSINVOLVEDINTHECASTINGPROCESS'>STEPS INVOLVED IN THE CASTING PROCESS</Link></h3>
                        
                        <br />
                    </div>
                    <br />
                    <hr />
                    <br />
                    <br />
                    <br />
                    {/* <section className='mae-cad-info-views-explore-more-section ' >
                   <div className={isActive ? ' mae-cad-info-views-explore-more-section-blue-text mae-cad-info-blue-section-main ' : ' mae-cad-info-views-explore-more-section-blue-text mae-cad-info-blue-section-main active '}>
                       <br />

                       <h3 className='mae-cad-info-blue-section-main-topic'>Advantages</h3>
                       <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill /> A combination of two points is called a line.</h3>
                       <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill /> The line is a 2d entity in any software we can draw lines with specific lengths, orientations, </h3>
                       <h3 className='mae-cad-info-blue-section-main-decsription not-icon'>and relationships to other objects.</h3>
                       <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill /> Lines can serve as the foundation for creating 2D sketches or forming the edges of 3D models.</h3>

                       <h3 className='mae-cad-info-blue-section-main-topic'>Disadvantages</h3>
                       <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill /> A circle is a two-dimensional geometric figure that is defined as a set of</h3>
                       <h3 className='mae-cad-info-blue-section-main-decsription not-icon'>points equidistant from a fixed center point. </h3>
                       <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill /> This tool helps you to draw circles. Various types of circles can be drawn such</h3>
                       <h3 className='mae-cad-info-blue-section-main-decsription not-icon'>as center diameter circles, perimeter circles, etc. </h3>
                       <br />
                   </div>
               </section> */}
                    <br />
                    <br />
                    <br />
                </div>
            </section>

        </>
    )
}
export default ImageScrollEffect; 