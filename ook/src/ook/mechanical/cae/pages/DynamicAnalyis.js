import React from 'react'
import CAEsec1 from '../images/Slide4_8.jpg'
import CAEsec2 from '../images/sec2.jpg'
import CAEsec3 from '../images/sce3.avif'
import CAEsec4 from '../images/sce4.avif'
import CAEfirst from '../images/first.jpeg'
import Navlogo from '../../images/vig (1).png'
import { IoIosArrowDown } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { AiFillMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go"
import { IoIosCall } from "react-icons/io";
import { BsInstagram, BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { AiOutlineRight } from "react-icons/ai";

export default function StaticAnalyis() {
    return (
        <>
            <nav className='ME-navbar'>
                <img classname="MeNavlogo" src={Navlogo} alt=''></img>
            </nav>
            <section className='cae-first-section' >
                <div className='cae-first-section-div first' >
                    <div className='cae-first-section-imgdiv' >
                        <img className='cae-first-section-imgdiv-img' src={CAEfirst} />
                        <div className='cae-first-section-imgdiv-shades' />
                    </div>
                    <div className='cae-first-section-textdiv'>
                        <h3 className='cae-first-section-textdiv-h1'>Dynamic Analyis</h3>
                        <p className='cae-first-section-textdiv-p'>Highlighting a legacy of class-defining Mercedes-Benz cars that<br /> paved the way for the new Concept CLA Class.</p>
                        <button className='cae-first-section-textdiv-button'>Discover more <AiOutlineRight /></button>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </section>

            <section className='cae-sec-section'>
                <div className="cse-info-box first">
                    <div className="cse-info-box__img">
                        <img src={CAEsec1} alt="service" /></div>
                    <div className="cse-info-box__description">
                        <div className="cse-info-box__inner">
                            <h4 className="cse-info-box__title"> <a href="#">Tranbient Analyis</a><i className="cse-fa fa-chevron-right" aria-hidden="true" ><IoIosArrowDown /></i>
                            </h4>
                            <div className="cse-info-box__hidden">
                                <p>Canthigaster rostrata spikefish brown trout loach summer flounder.
                                    European minnow black dragonfish orbicular</p><a className="cse-info-box__link with--line" href="#"><Link to="/Mechcinal/cae2/StaticAnalyis">Explore more <BsArrowRight /></Link></a>
                            </div>
                        </div>
                    </div>
                </div>






                <div className="cse-info-box second">
                    <div className="cse-info-box__img">
                        <img src={CAEsec2} alt="service" /></div>
                    <div className="cse-info-box__description">
                        <div className="cse-info-box__inner">
                            <h4 className="cse-info-box__title"> <a href="#">Rigid Body Dynamic</a><i className="cse-fa fa-chevron-right" aria-hidden="true" ><IoIosArrowDown /></i>
                            </h4>
                            <div className="cse-info-box__hidden">
                                <p>Canthigaster rostrata spikefish brown trout loach summer flounder.
                                    European minnow black dragonfish orbicular</p><a className="cse-info-box__link with--line" href="#"><Link to="/Mechcinal/cae2/DynamicAnalyis">Explore more <BsArrowRight /></Link></a>
                            </div>
                        </div>
                    </div>
                </div>










                <div className="cse-info-box first">
                    <div className="cse-info-box__img">
                        <img src={CAEsec3} alt="service" /></div>
                    <div className="cse-info-box__description">
                        <div className="cse-info-box__inner">
                            <h4 className="cse-info-box__title"> <a href="#">Model Analyis</a><i className="cse-fa fa-chevron-right" aria-hidden="true" ><IoIosArrowDown /></i>
                            </h4>
                            <div className="cse-info-box__hidden">
                                <p>Canthigaster rostrata spikefish brown trout loach summer flounder.
                                    European minnow black dragonfish orbicular</p><a className="cse-info-box__link with--line" href="#"><Link to="/Mechcinal/cae2/ImplicitAnalyis">Explore more <BsArrowRight /></Link></a>
                            </div>
                        </div>
                    </div>
                </div>




            </section>


<section className='cae-sec-section'>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
</section>


            <footer>
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
                        <li><a>MAE</a></li>
                        <li><a>ASE</a></li>
                        <li><a>CSE</a></li>
                        <li><a>Animation</a></li>
                    </ul>
                </div>
                <div className='footer-section-three'>
                    <li><a><BsInstagram />  Instagram</a></li>
                    <li><a><BsFacebook />  Fackbook</a></li>
                    <li><a><BsTwitter />  Twitter</a></li>
                    <li><a><BsLinkedin />  linkdin</a></li>
                </div>
                <div className='footer-section-four'>
                    <div className='contact-us'>
                        <li className='contact-us'>CONTACT US</li>
                        <li><a><AiFillMail /></a> ook@gmail.com</li>
                        <li><a><IoIosCall /></a> +91 70068 56070</li>
                        <li><a><GoLocation /></a> mohail chandigarh</li>
                    </div>
                </div>
            </footer>



        </>
    )
}
