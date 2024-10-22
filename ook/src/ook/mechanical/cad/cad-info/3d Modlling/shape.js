import React, { useRef, useState, useEffect } from 'react';
import '../cad-info.css'
import { AiFillCaretRight } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";
import Navlogo from '../vig (1).png'
import Video from '../relations/relations1.mp4'
import { Link } from 'react-router-dom';
import { FaPlay, FaPause, FaExpand, FaCompress, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

export default function Shape() {
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

    // video player js
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [isTheaterMode, setIsTheaterMode] = useState(false);
    const [videoSpeed, setVideoSpeed] = useState(1);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);

    useEffect(() => {
        const video = videoRef.current;

        const handleFullScreenChange = () => {
            setIsFullScreen(
                document.fullscreenElement ||
                document.mozFullScreenElement ||
                document.webkitFullscreenElement ||
                document.msFullscreenElement
            );
        };

        document.addEventListener('fullscreenchange', handleFullScreenChange);
        document.addEventListener('mozfullscreenchange', handleFullScreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullScreenChange);
        document.addEventListener('msfullscreenchange', handleFullScreenChange);

        const handleTimeUpdate = () => {
            setCurrentTime(video.currentTime);
        };

        const handleLoadedMetadata = () => {
            setDuration(video.duration);
        };

        video.addEventListener('timeupdate', handleTimeUpdate);
        video.addEventListener('loadedmetadata', handleLoadedMetadata);

        return () => {
            document.removeEventListener('fullscreenchange', handleFullScreenChange);
            document.removeEventListener('mozfullscreenchange', handleFullScreenChange);
            document.removeEventListener('webkitfullscreenchange', handleFullScreenChange);
            document.removeEventListener('msfullscreenchange', handleFullScreenChange);
            video.removeEventListener('timeupdate', handleTimeUpdate);
            video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        };
    }, []);

    const handlePlayPause = () => {
        const video = videoRef.current;
        if (isPlaying) {
            video.pause();
        } else {
            video.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleFullScreen = () => {
        const video = videoRef.current;

        if (!isFullScreen) {
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.mozRequestFullScreen) {
                video.mozRequestFullScreen();
            } else if (video.webkitRequestFullscreen) {
                video.webkitRequestFullscreen();
            } else if (video.msRequestFullscreen) {
                video.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }

        setIsFullScreen(!isFullScreen);
    };

    const handleTheaterMode = () => {
        setIsTheaterMode(!isTheaterMode);
    };

    const handleTextClick = () => {
        const minSpeed = 0.25;
        const maxSpeed = 2;
        let newSpeed = videoSpeed === maxSpeed ? minSpeed : videoSpeed + 0.25;
        newSpeed = Math.min(newSpeed, maxSpeed);
        setVideoSpeed(newSpeed);
        videoRef.current.playbackRate = newSpeed;
    };

    const handleSeek = (e) => {
        const seekTime = parseFloat(e.target.value);
        videoRef.current.currentTime = seekTime;
        setCurrentTime(seekTime);
    };

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        videoRef.current.volume = newVolume;
        setIsMuted(newVolume === 0);
    };

    const handleMuteToggle = () => {
        const newMuted = !isMuted;
        setIsMuted(newMuted);
        videoRef.current.muted = newMuted;
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    return (
        <>
            <nav className='ME-navbar'>
                <img className="MeNavlogo" src={Navlogo} alt=''></img>
            </nav>
            <br />
            <br />
            <section className={isToggled ? 'mae-cad-info-section' : 'mae-cad-info-section fullscreen'}>
            <nav className="mae-cad-info-leftside-navbar">
                    <div className={isToggled ? 'mae-cad-info-section-line' : 'mae-cad-info-section-line unactive'} onClick={handleToggle}>
                        <div className='mae-cad-info-section-burgur-line'></div>
                        <div className='mae-cad-info-section-burgur-line'></div>
                        <div className='mae-cad-info-section-burgur-line'></div>
                    </div>
                    <ul className={isToggled ? 'mae-cad-info-leftside-navbar-navbar-nav' : 'mae-cad-info-leftside-navbar-navbar-nav unactive'}>
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
                                <span className="mae-cad-info-leftside-navbar-nav-link-nav-text">Modeling </span>
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
                    <div className='mae-cad-info-section-main-section-info-sec-nav'><p className='mae-cad-info-section-main-section-info-sec-nav-p'>CAD <AiOutlineRight /> 3d Modeling <AiOutlineRight /> Part Modlling<AiOutlineRight /><span>Shape</span></p></div>
                    <hr />
                    <br/>
                    <div className='mae-cad-info-blue-section-main'>
                        <br />

                        <h3 className='mae-cad-info-blue-section-main-topic'>Extrude</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill /> Allows the user to convert the 2d geometry into 3d shapes in a straight path. </h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription not-icon'> It is similar to the extrusion process. </h3>
                        <br />
                        <h3 className='mae-cad-info-blue-section-main-topic'>Extrude Cut</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill /> Similar to the extrude feature but this feature allows us to remove material </h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription not-icon'>instead of adding material.</h3>
                        <br />
                        <h3 className='mae-cad-info-blue-section-main-topic'>Revolve</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill /> Allow the user to create a 3d shape by revolving the sketch about the specified axis.</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription not-icon'>The revolve feature is commonly used to create objects that have rotational symmetry, </h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription not-icon'>such as cylindrical shapes, rings, cups, and more.</h3>
                        <br />
                        <h3 className='mae-cad-info-blue-section-main-topic'>Revolve Cut</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill />  Allow the user to remove the material by revolving the sketch about the specified axis.</h3>
                        <br />
                        <h3 className='mae-cad-info-blue-section-main-topic'>Sweep</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill /> Allows the user to create the 3d shape by providing the path to the 2d sketch or geometry.</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill /> It is useful for creating objects like pipes, cables or any form with a variable cross-section.</h3>
                        <br />
                        <h3 className='mae-cad-info-blue-section-main-topic'>Sweep Cut</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill /> Allow the user to remove the material by providing the path to the 2d sketch or geometry.</h3>
                        <br />
                        <h3 className='mae-cad-info-blue-section-main-topic'>  Loft</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill /> Allow the user to create a 3d shape by joining two or more different profiles with or without a path</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill /> It is commonly used to create complex shapes that cannot be easily achieved with other basic features.</h3>
                        <br />
                        <h3 className='mae-cad-info-blue-section-main-topic'>  Loft Cut</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill /> Allow the user to remove material by joining different profiles with or without a path.</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill />It is commonly used to remove material of complex shapes that cannot be easily removed with other basic features.</h3>

                        <br />
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div className={"video-container " + (addClass ? 'paused' : '')} data-volume-level="high">
                        <div className="video-controls-container">
                            <div className="timeline-container">
                                <div className="timeline-container-main">
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
                                <button className="play-pause-btn" onClick={Changemyclass}>
                                    {/* <svg className="play-icon" viewBox="0 0 24 24"> */}
                                    {isPlaying ? <FaPause onClick={handlePlayPause} /> : <FaPlay onClick={handlePlayPause} />}
                                    {/* </svg> */}
                                </button>
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
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div className='mae-cad-info-sketch-table'>
                        <div className='mae-cad-info-sketch-table-rows'>
                            <div className='mae-cad-info-sketch-table-rows-headings first'>Sr. No.</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-first hover-1'>1</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-first hover-2'>2</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-first hover-3'>3</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-first hover-4'>4</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-first hover-5'>5</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-first hover-6'>6</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-first hover-7'>7</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-first hover-8'>8</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-first hover-9'>9</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-first hover-10'>10</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-first  last-row hover-11'>11</div>
                        </div>
                        <div className='mae-cad-info-sketch-table-rows'>
                            <div className='mae-cad-info-sketch-table-rows-headings second'>Sketch</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-second hover-1'>Line</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-second hover-2'>Rectangle</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-second hover-3'>Rectangle (Polygon)</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-second hover-4'>Circles</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-second hover-5'>Fillet</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-second hover-6'>Arc</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-second hover-7'>Curve</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-second hover-8'>Trim</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-second hover-9'>Trim Corner</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-second hover-10'>Offset</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-second  last-row hover-11'>Move</div>
                        </div>
                        <div className='mae-cad-info-sketch-table-rows'>
                            <div className='mae-cad-info-sketch-table-rows-headings third'>Tools</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-third hover-1'>Line, Point, Free Sketch</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-third hover-2'>Rectangle by Center, Rectangle by 2 Points, Rectangle by 3 Points</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-third hover-3'>N/A</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-third hover-4'>Circle by Centre Point, Circle by 3 Points, Tangent Circle, Ellipse by Circle, Ellipse by 3 Point</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-third hover-5'>Fillet, Chamfer</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-third hover-6'>Tangent Arc, Arc by 3 Point, Arc by Center Point</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-third hover-7'>N/A</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-third hover-8'>N/A</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-third hover-9'>N/A</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-third hover-10'>N/A</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-third last-row hover-11'>Move, Rotate</div>
                        </div>
                        <div className='mae-cad-info-sketch-table-rows'>
                            <div className='mae-cad-info-sketch-table-rows-headings last'>Timings</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-last hover-1'>00:36 – 03:32</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-last hover-2'>03:34 – 04:02</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-last hover-3'>04:04 – 04:20</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-last hover-4'>04:22 – 05:07</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-last hover-5'>05:09 – 06:38</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-last hover-6'>06:40 – 07:36</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-last hover-7'>07:38 – 11:20</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-last hover-8'>11:22 – 11:52</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-last hover-9'>11:54 – 12:24</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-last hover-10'>12:26 – 12:48</div>
                            <div className='mae-cad-info-sketch-table-rows-topic-last last-row hover-11'>12:50 – 14:10</div>
                        </div>
                    </div>
                    <br />
                </div>
            </section>
        </>
    )
}
