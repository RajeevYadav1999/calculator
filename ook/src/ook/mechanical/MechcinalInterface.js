import React from 'react'
import Navlogo from './images/vig (1).png'
import Background from './videos/mechanical.mp4'
// import { a } from 'react-router-dom'
import Cad from './images/cad.jpg'
import Cam from './images/cam 1.png'
import MANUFACTURING from './images/Manufacturing.jpg'
import Cae from './images/cam.jpeg'
import { AiFillMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go"
import { IoIosCall } from "react-icons/io";
import { BsInstagram, BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { Link } from 'react-router-dom';
// import './new css/HomePageME.css'
export default function MechcinalInterface() {
    return (
        <>
            <nav className='ME-navbar'>
                <img className="MeNavlogo" src={Navlogo} alt=''></img>
            </nav>
            <section className='ME-Home-page-section-one'>
                <div className='ME-background'>
                    {/* <img src={sectionone} alt='' /> */}
                    <video src={Background} autoPlay muted loop id="myVideo"/>
                </div>

            </section>
            <section className='ME-Home-page-section-second'>
                <br />
                <br />
                <br />
                <h1 className='ME-overview'>Overview</h1>
                <br />
                <h3 className='ME-overview-text'>Letter Run is a Webflow-based 3D clubhouse scavenger hunt with custom music that <br />uses a collection of technologies like Blender, Spline, React,<br /> and ThreeJS to integrate with Webflow.</h3>
                <br />
                <br />
                <br />
                <br />
                <div className='ME-background-two-images'>
                    <div className='ME-background-two-images-darklayer first' />
                    <img src={Cad} alt='' />
                    <div className='text-1'>
                        <br />
                        <br />
                        <br />
                        <br />
                        <h3>CAD</h3>
                        <h4>Computer aided design (CAD) is the virtual way of creating the real-life product before manufacturing in the form of 2D drawing and 3D model with the help of CAD software like AUTOCAD, SOLIDWORKS, PTC CREO, CATIA etc.</h4>
                        <button><Link to="/Mechcinal/cad">Learn more</Link></button>
                    </div>
                    <div className='ME-background-two-images-darklayer second' />
                    <img src={MANUFACTURING} alt='' />
                    <div className='text-2'>
                        <br />
                        <br />
                        <br />
                        <br />
                        <h3>MANUFACTURING</h3>
                        <h4>Manufacturing process are steps and activities involved in converting raw materials or components into finished goods.</h4>
                        <button><Link to="/Mechcinal/cam/topics">Learn more</Link></button>
                    </div>
                    <br />
                    <br />
                </div>
                <div className='ME-background-two-images'>
                    <div className='ME-background-two-images-darklayer third' />
                    <br />
                    <br />
                    <img src={Cae} alt='' className='MechcinalthirdImg' />
                    <div className='text-3'>
                        <br />
                        <br />
                        <br />
                        <h3>CAE</h3>
                        <button><Link to="/Mechcinal/cae2">Learn more</Link></button>
                    </div>
                    <div className='ME-background-two-images-darklayer fourth' />
                    <br />
                    <br />
                    <img src={Cam} alt='' className='MechcinalthirdImg' />
                    <div className='text-4'>
                        <br />
                        <br />
                        <br />
                        <h3>TOOLS</h3>
                        <button><Link to="/Mechcinal/tools">Learn more</Link></button>
                    </div>
                </div>
                
                <div className='ME-background-two-images'>
                    <div className='ME-background-two-images-darklayer fifth' />
                    <br />
                    <br />
                    <img src={Cae} alt='' className='MechcinalthirdImg' />
                    <div className='text-5'>
                        <br />
                        <br />
                        <br />
                        <h3>CAM</h3>
                        <button><Link to="/Mechcinal/cam/working">Learn more</Link></button>
                    </div>
                    <div className='ME-background-two-images-darklayer sixth' />
                    <br />
                    <br />
                    <img src={Cam} alt='' className='MechcinalthirdImg' />
                    <div className='text-6'>
                        <br />
                        <br />
                        <br />
                        <h3>STRUCTURE ENGINEERING</h3>
                        <button><Link to="/Mechcinal/STRUCTURE-ENGINEERING">Learn more</Link></button>
                    </div>
                </div>
                
            </section>

            
            
            <section className='ME-section-third'>
                <br />
                <br />
                <br />
                <div className='ME-History'>
                <h1 className='ME-history-topices'>Carrer</h1>
                <br />
                <p >Letter Run is a Webflow-based 3D clubhouse scavenger hunt with custom music that <br />uses a collection of technologies like Blender, Spline, React,<br /> and ThreeJS to integrate with Webflow.</p>
                </div>
                <br />
                <br />
                <br />
            </section>
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
        </>
    )
}
