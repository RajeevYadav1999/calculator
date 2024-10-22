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
                                <span className="mae-cad-info-leftside-navbar-nav-link-nav-text"><FaHome/>Home</span>
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
                    <br />
                    <div className='mae-cad-info-section-main-section-info-sec-nav transform-left-100px'><p className='mae-cad-info-section-main-section-info-sec-nav-p'>MANUFACTURING <AiOutlineRight /> CASTING <AiOutlineRight /><span> CASTING PROPERTIES OF MATERIAL</span></p></div>
                    <hr />
                    <br />
                    <br />
                    {/* <Castingpropertyslider/> */}
                    <div className='SheetMetal mae-cad-info-views-explore-more-section-blue-text mae-cad-info-blue-section-main active '>
                        <br />

                        <h3 className='mae-cad-info-blue-section-main-topic'>Frame </h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill />Structure consists of the beam and column joined together with a pin or </h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription not-icon'> other fixed connection that supports load.</h3>
                        
                        <h3 className='mae-cad-info-blue-section-main-topic'>Trusses</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill /> Triangular units composed of straight members connected at their ends </h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription not-icon'>by joints, providing a rigid structure that can span larger distances.</h3>
                        <br />
                    </div>
                    <br />
                    <hr />
                    <br />
                    <br />
                </div>
            </section>

        </>
    )
}
export default ImageScrollEffect; 