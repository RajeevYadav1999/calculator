import React, { useRef, useState, useEffect } from 'react';
import './cad-info.css'
import { AiFillCaretRight } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";
import Navlogo from './vig (1).png'
import Video from './relations/relations1.mp4'
import { Link } from 'react-router-dom';
// import { AiOutlineCaretDown } from "react-icons/ai";
import { FaPlay, FaPause, FaExpand, FaCompress, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import Gridimg from './zoom.webp'

export default function Cadinfo() {
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

    // explore more section
    // const [isActive, setIsActive] = useState(true);

    // const toggleClass = () => {
    //     setIsActive(!isActive);
    // };

    // background img zoom

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
        return 1 - (scrollPosition / 1000); // Adjust the scaling behavior as needed
    };

    const calculateBlurRadius = () => {
        return scrollPosition / 100; // Adjust the blur behavior as needed
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
            <br/>
            <section className={isToggled ?   'mae-cad-info-section fullscreen':'mae-cad-info-section'}>
                <nav className="mae-cad-info-leftside-navbar">
                    <div className={isToggled ?  'mae-cad-info-section-line unactive':'mae-cad-info-section-line' } onClick={handleToggle}>
                        <div className='mae-cad-info-section-burgur-line'></div>
                        <div className='mae-cad-info-section-burgur-line'></div>
                        <div className='mae-cad-info-section-burgur-line'></div>
                    </div>
                    <ul className={isToggled ?  'mae-cad-info-leftside-navbar-navbar-nav unactive':'mae-cad-info-leftside-navbar-navbar-nav'}>
                        <br />
                        <li className='mae-cad-info-section-in-left-side-div-ul-li-heading'>CAD</li>
                        <br />
                        <br />
                        <li
                            className={`nav-item mae-cad-info-leftside-navbar-one ${isMenuActive(1) ? 'active' : ''}`}
                            onMouseEnter={() => handleMenuHover(1)}
                            onMouseLeave={handleMenuLeave}
                        >
                            <a href="#" className="mae-cad-info-leftside-navbar-nav-link">
                                <span className="mae-cad-info-leftside-navbar-nav-link-nav-text">SKETCHING</span>
                                <AiFillCaretRight />
                            </a>
                            {isMenuActive(1) && (
                                <div className="mae-cad-info-leftside-navbar-dropdown-menu">
                                    <a href="#" className="mae-cad-info-leftside-navbar-dropdown-menu-dropdown-link" onClick={handleToggle}><Link to='/Mechcinal/cad'>Sketch tools</Link></a>
                                    <hr />
                                    <a href="#" className="mae-cad-info-leftside-navbar-dropdown-menu-dropdown-link" onClick={handleToggle}><Link to='/EditingTools'>Editing tools </Link></a>
                                    <hr />
                                    <a href="#" className="mae-cad-info-leftside-navbar-dropdown-menu-dropdown-link"><Link to='/Mechcinal/cad/sketching/dimension'>Dimension</Link> </a>
                                    <hr />
                                    <a href="#" className="mae-cad-info-leftside-navbar-dropdown-menu-dropdown-link"><Link to='/Mechcinal/cad/sketching/Constraints'>Constraints</Link></a>
                                </div>
                            )}
                        </li>
                        <hr />
                        <li
                            className={`nav-item mae-cad-info-leftside-navbar-two ${isMenuActive(2) ? 'active' : ''}`}
                            onMouseEnter={() => handleMenuHover(2)}
                            onMouseLeave={handleMenuLeave}
                        >
                            <a href="#" className="mae-cad-info-leftside-navbar-nav-link">
                                <span className="mae-cad-info-leftside-navbar-nav-link-nav-text">3d Modelling </span>
                                <AiFillCaretRight />
                            </a>
                            {isMenuActive(2) && (
                                 <div className="mae-cad-info-leftside-navbar-dropdown-menu">
                                 <a href="#" className="mae-cad-info-leftside-navbar-dropdown-menu-dropdown-link"><Link to='/Mechcinal/cad/3dModeling/partModlling'>Solid Modeling <span className='mae-cad-info-leftside-navbar-dropdown-menu-dropdown-link-span-space'>(3D)</span></Link>
                                     <div className='mae-cad-info-leftside-navbar-dropdown-menu-dropdown-link-dropdown'>
                                         <ul className='mae-cad-info-leftside-navbar-dropdown-menu-dropdown-link-dropdown-ul'>
                                             <li className='mae-cad-info-leftside-navbar-dropdown-menu-dropdown-link-dropdown-ul-li'><Link to='/Mechcinal/cad/3dModeling/partModlling/shape'>Shape </Link></li>
                                             <hr />
                                             <li className='mae-cad-info-leftside-navbar-dropdown-menu-dropdown-link-dropdown-ul-li'><Link to='/Mechcinal/cad/3dModeling/partModlling/EditingTools'>Editing Tools</Link></li>
                                             <hr />
                                             <li className='mae-cad-info-leftside-navbar-dropdown-menu-dropdown-link-dropdown-ul-li'><Link to='/Mechcinal/cad/3dModeling/partModlling/ReferenceGeometry'>Reference Geometry</Link></li>
                                         </ul>
                                     </div>
                                 </a>
                                 <hr />
                                 <a href="#" className="mae-cad-info-leftside-navbar-dropdown-menu-dropdown-link"><Link to='/Mechcinal/cad/3dModeling/partModlling/types/SheetMetal'>Sheet Metal </Link></a>
                                 <hr />
                                 <a href="#" className="mae-cad-info-leftside-navbar-dropdown-menu-dropdown-link"><Link to='/Mechcinal/cad/3dModeling/partModlling/types/Weldments'>Weldments</Link></a>
                                 <hr />
                                 <a href="#" className="mae-cad-info-leftside-navbar-dropdown-menu-dropdown-link"><Link to='/Mechcinal/cad/3dModeling/partModlling/types/SurfaceModelling'>Surface Modeling <span className='mae-cad-info-leftside-navbar-dropdown-menu-dropdown-link-span-space'>(2D)</span></Link></a>
                             </div>
                            )}
                        </li>
                        <hr />
                        <li
                            className={`nav-item mae-cad-info-leftside-navbar-three ${isMenuActive(3) ? 'active' : ''}`}
                            onMouseEnter={() => handleMenuHover(3)}
                            onMouseLeave={handleMenuLeave}
                        >
                            <a href="#" className="mae-cad-info-leftside-navbar-nav-link">
                                <span className="mae-cad-info-leftside-navbar-nav-link-nav-text">Assembly </span>
                                <AiFillCaretRight />
                            </a>
                            {isMenuActive(3) && (
                                <div className="mae-cad-info-leftside-navbar-dropdown-menu">
                                    <a href="#" className="mae-cad-info-leftside-navbar-dropdown-menu-dropdown-link"><Link to='/Mechcinal/cad/assembly/top-down'>Top down assembly</Link></a>
                                    <hr />
                                    <a href="#" className="mae-cad-info-leftside-navbar-dropdown-menu-dropdown-link"><Link to='/Mechcinal/cad/assembly/Bottom-down'>Bottom up assembly</Link></a>
                                </div>
                            )}
                        </li>
                        <hr />
                        <li
                            className={`nav-item mae-cad-info-leftside-navbar-four ${isMenuActive(4) ? 'active' : ''}`}
                            onMouseEnter={() => handleMenuHover(4)}
                            onMouseLeave={handleMenuLeave}
                        >
                            <a href="#" className="mae-cad-info-leftside-navbar-nav-link">
                                <span className="mae-cad-info-leftside-navbar-nav-link-nav-text">DRAFTING </span>
                                <AiFillCaretRight />
                            </a>
                            {isMenuActive(4) && (
                                <div className="mae-cad-info-leftside-navbar-dropdown-menu">
                                    <li href="#" className="mae-cad-info-leftside-navbar-dropdown-menu-dropdown-link"><Link to='/Mechcinal/cad/DRAFTING/VIEWS'>VIEWS</Link></li>
                                    <hr />
                                    <li href="#" className="mae-cad-info-leftside-navbar-dropdown-menu-dropdown-link">ANNOTATION</li>
                                </div>
                            )}
                        </li>
                    </ul>
                </nav>
                <div className='mae-cad-info-section-main-section-info'>
                    <br />
                    <br />
                    <div className='mae-cad-info-section-main-section-info-sec-nav'><p className='mae-cad-info-section-main-section-info-sec-nav-p'>CAD <AiOutlineRight /> Sketching <AiOutlineRight /><span> Constraints</span></p></div>
                    <hr />
                    <br/>
                    <br/>

                    <div className='mae-cad-info-section-main-section-info-zoom-section overlay-1'>
                        <div className='mae-cad-info-section-main-section-info-zoom-section-overlay-1 img' style={{ filter: `blur(10px)` }}></div>
                        <div className='mae-cad-info-section-main-section-info-zoom-section-overlay-1 img zoom' style={{ transform: `scale(${calculateScaleFactor()})`, }}></div>
                        <div className='mae-cad-info-section-main-section-info-zoom-section-overlay-1 black-background'></div>
                    </div>


                    <br />
                    <br />
                    <br />
                    <br />


                    <section className='mae-cad-info-view-second-section-main-grid'>
                        <div className='mae-cad-info-second-section-main-grid-text'>
                            <h2 className='mae-cad-info-second-section-main-grid-text-h2-heading'>Constraints </h2>
                            <h2 className='mae-cad-info-second-section-main-grid-text-p-defination'>Constraints are used to restrict the degree of freedom Entities do not have any constraints and can move in any direction to restrict their movement relations are used. It is also known as constraints.</h2>
                           
                        </div>
                        <div className='mae-cad-info-second-section-main-grid-image'>
                            <img className='mae-cad-info-second-section-main-grid-image-img' src={Gridimg} />
                            <div className={isToggled ? 'mae-cad-info-second-section-main-grid-image-overlay':' mae-cad-info-second-section-main-grid-image-overlay fullscreen-btn'}>
                                <button className='mae-cad-info-second-section-main-grid-image-overlay-button'><Link to='/Mechcinal/cad/sketch/constraints/types'>TYPES</Link></button>
                            </div>
                        </div>
                    </section>
                    <br/>
                </div>
            </section>
        </>
    )
}
