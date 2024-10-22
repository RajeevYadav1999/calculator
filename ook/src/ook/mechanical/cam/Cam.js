import React from 'react'
import '../css/solid.css'
import Cad from '../images/cad 1.png'
import Cam from '../images/cam 1.png'
import Navlogo from "../images/vig (1).png"
import Footer from '../Footer/Footer.js'
import Machining from '../images/machining.jpg'
import Forging from '../images/forging.jpeg'
import Assembly from '../images/assembly.jpg'
// import { Link } from 'react-router-dom'
import Camslider from './cam-slider.js'
import Camslider1 from './cam-slider-1.js'
import Camslider2 from './cam-slider-2.js'
// import Headervideo from '../videos/video 1.mp4'
import { Link as PageLink } from 'react-router-dom'
import { Link } from 'react-scroll';
import Casting from '../images/casting.jpeg'

export default function CamTopics() {
    return (
        <>
            <nav className='ME-navbar'>
                <img className="MeNavlogo" src={Navlogo} alt=''></img>
            </nav>
            <section>
                <div className='ME-header-section'>
                    <img src={Cad}></img>
                    <h3 class="gbp-h3 left">MANUFACTURING</h3>
                </div>
                <h2 className='ME-header-overview'>Manufacturing process are steps and activities involved in converting raw materials or components into finished goods.</h2>
            </section>
            <h2 className='ME-header-overview left'>TYPES OF MANUFACTURING</h2>
            <br />
            <navbar className='ME-Cam-link-navbar'>
                <ul className='ME-Cam-link-navbar-ul'>
                    <li className='ME-Cam-link-navbar-ul-li'>
                        <Link to="CASTING" smooth={true} duration={500}>CASTING</Link>
                    </li>
                    <li className='ME-Cam-link-navbar-ul-li'>
                        <Link to="CASTING" smooth={true} duration={500}>FORMING</Link>
                    </li>
                    <li className='ME-Cam-link-navbar-ul-li'>
                        <Link to="MACHINING" smooth={true} duration={500}>MACHINING</Link>
                    </li>
                    <li className='ME-Cam-link-navbar-ul-li'>
                        <Link to="MACHINING" smooth={true} duration={500}>JOINING</Link>
                    </li>
                    <li className='ME-Cam-link-navbar-ul-li'>
                        <Link to="ASSEMBLY" smooth={true} duration={500}>FINISHING</Link>
                    </li>
                </ul>
            </navbar>
            <br />
            <br />

            <section className='ME-section-second'>
                <div className='ME-background-two-images' id='CASTING'>
                    <br />
                    <br />
                    <br />
                    <br />
                    <img src={Casting} alt='' />
                    <div className='Cam-sec-section-casting-img-overlay' />
                    <div className='CamImg text-1'>
                        <br />
                        <br />
                        <br />
                        <br />

                        <h3>CASTING</h3>
                        <h4>Components are formed by pouring molten metal into a mold or cavity</h4>
                        <button><PageLink to="/Mechcinal/cam/topics/casting">Learn more</PageLink></button>
                    </div>
                    <img src={Forging} alt='' />
                    <div className='Cam-sec-section-forging-img-overlay' />
                    <div className='CamImg text-2'>
                        <br />
                        <br />
                        <br />
                        <br />

                        <h3>FORMING</h3>
                        <h4>Metal forming involves the use of mechanical force to shape a material into a specific form.</h4>
                        <button><PageLink to="/Mechcinal/cam/topics/forming">Learn more</PageLink></button>
                    </div>
                </div>


                <div className='ME-background-two-images' id='MACHINING'>
                    <br />
                    <br />
                    <img src={Machining} alt='' />
                    <div className='Cam-sec-section-machining-img-overlay' />
                    <div className='CamImg text-3'>
                        <br />
                        <br />
                        <br />

                        <h3>MACHINING</h3>
                        <h4>Cutting tools are used to remove material from a workpiece to create the desired shape</h4>
                        <button><PageLink to="/Mechcinal/cam/topics/machining">Learn more</PageLink></button>
                    </div>
                    <img src={Cam} alt='' />
                    <div className='Cam-sec-section-joining-img-overlay' />
                    <div className='CamImg text-4'>
                        <br />
                        <br />
                        <br />

                        <h3>JOINING</h3>
                        <h4>Metal forming involves the use of mechanical force to shape a material into a specific form.</h4>
                        <button><PageLink to="/Mechcinal/cam/topics/joining">Learn more</PageLink></button>
                    </div>
                </div>


                <div className='ME-background-two-images' id='ASSEMBLY'>
                    <br />
                    {/* <br />
                   <img src={Assembly} alt='' />
                   <div className='CamImg text-5'>
                       <h3>ASSEMBLY</h3>
                       <h4>Assembly involves combining multiple components or parts to create a finished product.</h4>
                       <button><PageLink to="/Mechcinal/cam/topics/assembly">Learn more</PageLink></button>
                   </div> */}
                    <img src={Cam} alt='' />
                    <div className='Cam-sec-section-finishing-img-overlay' />
                    <div className='CamImg text-5'>
                        <h3>FINISHING</h3>
                        <h4>Metal forming involves the use of mechanical force to shape a material into a specific form.</h4>
                        <button><PageLink to="/Mechcinal/cam/topics/finishing">Learn more</PageLink></button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
