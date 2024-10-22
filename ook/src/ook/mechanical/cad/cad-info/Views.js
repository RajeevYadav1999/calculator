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
    const [isToggled, setToggled] = useState(true);

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
                                    <a href="#" className="mae-cad-info-leftside-navbar-dropdown-menu-dropdown-link">Dimension </a>
                                    <hr />
                                    <a href="#" className="mae-cad-info-leftside-navbar-dropdown-menu-dropdown-link">Constraints</a>
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
                    <div className='mae-cad-info-section-main-section-info-sec-nav'><p className='mae-cad-info-section-main-section-info-sec-nav-p'>CAD <AiOutlineRight /> DRAFTING <AiOutlineRight /><span> VIEWS</span></p></div>
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
                            <h2 className='mae-cad-info-second-section-main-grid-text-h2-heading'>Views </h2>
                            <h2 className='mae-cad-info-second-section-main-grid-text-p-defination'>Graphical representations of a part or assembly from different perspectives help to communicate the design intent, shape, and structure of the object accurately. Provide a detailed description of the object's features, dimensions, and relationships</h2>
                            {/* <div className='mae-cad-info-second-section-main-grid-explore-more-grid'>
                                <p className='mae-cad-info-second-section-main-grid-explore-more-grid-p'>Explore more</p>
                                <AiOutlineCaretDown className={ isActive? 'mae-cad-info-second-section-main-grid-explore-more-grid-icon' : 'mae-cad-info-second-section-main-grid-explore-more-grid-icon rotate'}onClick={toggleClass} />
                            </div> */}
                        </div>
                        <div className='mae-cad-info-second-section-main-grid-image'>
                            <img className='mae-cad-info-second-section-main-grid-image-img' src={Gridimg} />
                            <div className={isToggled ? 'mae-cad-info-second-section-main-grid-image-overlay':' mae-cad-info-second-section-main-grid-image-overlay fullscreen-btn'}>
                                <button className='mae-cad-info-second-section-main-grid-image-overlay-button'><Link to='/Mechcinal/cad/DRAFTING/VIEWS/types'>TYPES</Link></button>
                            </div>
                        </div>
                    </section>
                    <br/>
                    <br/>
                    {/* <section className='mae-cad-info-views-explore-more-section ' >
                        <div className={isActive ? ' mae-cad-info-views-explore-more-section-blue-text mae-cad-info-blue-section-main ': ' mae-cad-info-views-explore-more-section-blue-text mae-cad-info-blue-section-main active '}>
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
                    {/* <div className='mae-cad-info-blue-section-main'>
                        <br />

                        <h3 className='mae-cad-info-blue-section-main-topic'>Line</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill /> A combination of two points is called a line.</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill /> The line is a 2d entity in any software we can draw lines with specific lengths, orientations, </h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription not-icon'>and relationships to other objects.</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill /> Lines can serve as the foundation for creating 2D sketches or forming the edges of 3D models.</h3>

                        <h3 className='mae-cad-info-blue-section-main-topic'>Circle</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill /> A circle is a two-dimensional geometric figure that is defined as a set of</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription not-icon'>points equidistant from a fixed center point. </h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill /> This tool helps you to draw circles. Various types of circles can be drawn such</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription not-icon'>as center diameter circles, perimeter circles, etc. </h3>

                        <h3 className='mae-cad-info-blue-section-main-topic'>Rectangle</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill /> A rectangle has opposing sides parallel and equal in length. </h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill /> The opposite sides of a rectangle are also congruent, meaning they have the same length. </h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill /> In cad, we have different types of rectangles such as corner rectangles, center</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription not-icon'>rectangles, 3-point corner rectangles, etc.</h3>

                        <h3 className='mae-cad-info-blue-section-main-topic'>Polygon</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill />  Allows you to create equally spaced multiple sides.</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill /> You can define the number of sides you want.</h3>

                        <h3 className='mae-cad-info-blue-section-main-topic'>Spline</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill /> This tool helps draw a smooth and curvy sketch. </h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill /> The spline can be created using control points, fit points, or a mix of control & fit points.</h3>

                        <h3 className='mae-cad-info-blue-section-main-topic'>Arc</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill />  An arc is a section of a curve, typically part of a circle. </h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill />  Used to create different types of arcs like center point arc, tangent arc, 3</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription not-icon'>point arc, etc. </h3>

                        <h3 className='mae-cad-info-blue-section-main-topic'>  Ellipse</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill />  Helps in creating ellipses using center, edge, or three-point methods. </h3>

                        <h3 className='mae-cad-info-blue-section-main-topic'>  Slot</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill /> Used to create different types of slots such as straight slots, center point</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription not-icon'>straight slots, 3-point arc slots, etc.</h3>

                        <h3 className='mae-cad-info-blue-section-main-topic'>  Text</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill />  It is used to create text within your sketches.</h3>

                        <h3 className='mae-cad-info-blue-section-main-topic'>  Point</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill /> This sketch tool is used to create points that can be used to create relations to</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription not-icon'>other sketch entities.</h3>

                        <br />
                    </div> */}
                    <br />
                    {/* <hr />
                    <br />
                    <div className={"video-container " + (addClass ? 'paused' : '')} data-volume-level="high">
                        <div className="video-controls-container">
                            <div className="timeline-container">
                                <div className="timeline">
                                    <img className="preview-img" alt="" />
                                    <div className="thumb-indicator"></div>
                                    <input
                                        className="timeline"
                                        type="range"
                                        min={0}
                                        max={duration}
                                        step={0.1}
                                        value={currentTime}
                                        onChange={handleSeek} />
                                </div>
                            </div>
                            <div className="controls" >
                                <button className="play-pause-btn" onClick={Changemyclass}> */}
                    {/* <svg className="play-icon" viewBox="0 0 24 24"> */}
                    {/* {isPlaying ? <FaPause onClick={handlePlayPause} /> : <FaPlay onClick={handlePlayPause} />} */}
                    {/* </svg> */}
                    {/* </button>
                                <div className="volume-container">
                                    <button className="mute-btn" onClick={handleMuteToggle}>
                                        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                                    </button>
                                    <input
                                        className="volume-slider"
                                        type="range"
                                        min={0}
                                        max={1}
                                        step={0.01}
                                        value={volume}
                                        onChange={handleVolumeChange}
                                    />
                                </div>
                                <div className="duration-container">
                                    <div className="current-time">{formatTime(currentTime)}</div>
                                    /
                                    <div className="total-time">05:26</div>
                                </div>
                                <button className="captions-btn">
                                    <svg viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M18,11H16.5V10.5H14.5V13.5H16.5V13H18V14A1,1 0 0,1 17,15H14A1,1 0 0,1 13,14V10A1,1 0 0,1 14,9H17A1,1 0 0,1 18,10M11,11H9.5V10.5H7.5V13.5H9.5V13H11V14A1,1 0 0,1 10,15H7A1,1 0 0,1 6,14V10A1,1 0 0,1 7,9H10A1,1 0 0,1 11,10M19,4H5C3.89,4 3,4.89 3,6V18A2,2 0 0,0 5,20H19A2,2 0 0,0 21,18V6C21,4.89 20.1,4 19,4Z" />
                                    </svg>
                                </button>
                                <p className="speed-btn wide-btn" onClick={handleTextClick}>
                                    {videoSpeed}x
                                </p>
                                <button className="theater-btn" onClick={handleTheaterMode}>
                                    <svg className="tall" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z" />
                                    </svg>
                                    <svg className="wide" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z" />
                                    </svg>
                                </button>
                                <button className="full-screen-btn" onClick={handleFullScreen}>
                                    {isFullScreen ? <FaCompress /> : <FaExpand />}
                                </button>
                            </div>
                        </div>
                        <video src={Video} ref={videoRef} playbackRate={videoSpeed} />
                    </div> */}
                    <br />
                    {/* <hr />
                    <br />
                    <div className='mae-cad-info-sketch-table'>
                        <div className='mae-cad-info-sketch-table-rows'>
                            <div className='mae-cad-info-sketch-table-rows-headings first'>Sr. No.</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-first'>1</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-first'>2</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-first'>3</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-first'>4</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-first'>5</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-first'>6</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-first'>7</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-first'>8</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-first'>9</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-first'>10</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-first  last-row'>11</div>
                        </div>
                        <div className='mae-cad-info-sketch-table-rows'>
                            <div className='mae-cad-info-sketch-table-rows-headings second'>Sketch</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-second'>Line</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-second'>Rectangle</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-second'>Rectangle (Polygon)</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-second'>Circles</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-second'>Fillet</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-second'>Arc</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-second'>Curve</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-second'>Trim</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-second'>Trim Corner</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-second'>Offset</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-second  last-row'>Move</div>
                        </div>
                        <div className='mae-cad-info-sketch-table-rows'>
                            <div className='mae-cad-info-sketch-table-rows-headings third'>Tools</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-third'>Line, Point, Free Sketch</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-third'>Rectangle by Center, Rectangle by 2 Points, Rectangle by 3 Points</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-third'>N/A</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-third'>Circle by Centre Point, Circle by 3 Points, Tangent Circle, Ellipse by Circle, Ellipse by 3 Point</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-third'>Fillet, Chamfer</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-third'>Tangent Arc, Arc by 3 Point, Arc by Center Point</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-third'>N/A</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-third'>N/A</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-third'>N/A</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-third'>N/A</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-third last-row'>Move, Rotate</div>
                        </div>
                        <div className='mae-cad-info-sketch-table-rows'>
                            <div className='mae-cad-info-sketch-table-rows-headings last'>Timings</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-last'>00:36 – 03:32</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-last'>03:34 – 04:02</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-last'>04:04 – 04:20</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-last'>04:22 – 05:07</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-last'>05:09 – 06:38</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-last'>06:40 – 07:36</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-last'>07:38 – 11:20</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-last'>11:22 – 11:52</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-last'>11:54 – 12:24</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-last'>12:26 – 12:48</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-last last-row'>12:50 – 14:10</div>
                        </div>
                    </div>*/}
                    <br />
                </div>
            </section>
        </>
    )
}
