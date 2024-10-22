import React, { useState, useEffect, useRef } from 'react';

import './AboutUs.css'

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import Backgroundimg from '../mechanical/CalculationAndCalculator/image folder/reaize images/AboutUs1.jpg'
import DamanAnand from './member images/DamanAnand.png'
import HimanshuGupta from './member images/HimanshuGupta.png'
import Meghaanand from './member images/DamanAnand.png'

import { GiProgression } from "react-icons/gi";
import { GiDiceTarget } from "react-icons/gi";
import { GrVulnerability } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
export default function AboutUs() {

    const [expanded, setExpanded] = useState(false);
    const [Vision, setVision] = useState(false);
    const [mission, setMission] = useState(false);
    const [capabilities, setCapabilities] = useState(false);
    const [OurTeam, setOurTeam] = useState(false);
    const [Member1, setMember1] = useState(false);
    const [Member2, setMember2] = useState(false);
    const [Member3, setMember3] = useState(false);
    const [WorkWithUs, setWorkWithUs] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100 && !expanded) {
                setExpanded(true);
            }
            if (window.scrollY > 600 && !Vision) {
                setVision(true);
            }
            if (window.scrollY > 1000 && !mission) {
                setMission(true);
            }
            if (window.scrollY > 1600 && !capabilities) {
                setCapabilities(true);
            }
            if (window.scrollY > 2000 && !OurTeam) {
                setOurTeam(true);
            }
            if (window.scrollY > 2400 && !Member1) {
                setMember1(true);
            }
            if (window.scrollY > 2400 && !Member2) {
                setMember2(true);
            }
            if (window.scrollY > 2400 && !Member3) {
                setMember3(true);
            }
            if (window.scrollY > 2900 && !WorkWithUs) {
                setWorkWithUs(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [expanded, Vision, mission, capabilities, OurTeam, Member1, Member2, Member3, WorkWithUs]);

    const ABOUTUSIntroHeadingRef = useRef(null);
    const ABOUTUSIntroRef = useRef(null);
    const AboutusSpecialityVisionRef = useRef(null);
    const AboutusSpecialityVisionheadingRef = useRef(null);
    const AboutusSpecialityVisiondefinationRef = useRef(null);
    const AboutusSpecialityMissionRef = useRef(null);
    const AboutusSpecialityMissionheadingRef = useRef(null);
    const AboutusSpecialityMissiondefinationRef = useRef(null);
    const AboutusSpecialityCapabilitiesRef = useRef(null);
    const AboutusSpecialityCapabilitiesheadingRef = useRef(null);
    const AboutusSpecialityCapabilitiesdefinationRef = useRef(null);
    const AboutusOurTeamHeadingRef = useRef(null);
    const AboutusOurTeamRef = useRef(null);
    const AboutusMember1Ref = useRef(null);
    const AboutusMember2Ref = useRef(null);
    const AboutusMember3Ref = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const ABOUTUSIntro = document.querySelector('.Aboutus-information');
            const AboutusSpecialityVision = document.querySelector('.vision');
            const AboutusSpecialityMission = document.querySelector('.mission');
            const AboutusSpecialityCapabilities = document.querySelector('.Capabilities');
            const AboutusSpecialityOurTeam = document.querySelector('.OurTeam');
            const AboutusSpecialityMember1 = document.querySelector('.Member-1');
            const AboutusSpecialityMember2 = document.querySelector('.Member-2');
            const AboutusSpecialityMember3 = document.querySelector('.Member-3');
            // const AboutusSpecialityOurTeam= document.querySelector('.OurTeam');
            const ABOUTUSIntroPosition = ABOUTUSIntro.getBoundingClientRect().top;
            const AboutusSpecialityVisionPosition = AboutusSpecialityVision.getBoundingClientRect().top;
            const AboutusSpecialityMissionPosition = AboutusSpecialityMission.getBoundingClientRect().top;
            const AboutusSpecialityCapabilitiesPosition = AboutusSpecialityCapabilities.getBoundingClientRect().top;
            const AboutusSpecialityOurTeamPosition = AboutusSpecialityOurTeam.getBoundingClientRect().top;
            const AboutusSpecialityMember1Position = AboutusSpecialityMember1.getBoundingClientRect().top;
            const AboutusSpecialityMember2Position = AboutusSpecialityMember2.getBoundingClientRect().top;
            const AboutusSpecialityMember3Position = AboutusSpecialityMember3.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (ABOUTUSIntroPosition < screenHeight) {
                ABOUTUSIntroRef.current.classList.add('expanded');
                ABOUTUSIntroHeadingRef.current.classList.add('expanded');
            }
            if (AboutusSpecialityVisionPosition < screenHeight) {
                AboutusSpecialityVisionRef.current.classList.add('expanded');
                AboutusSpecialityVisionheadingRef.current.classList.add('expanded');
                AboutusSpecialityVisiondefinationRef.current.classList.add('expanded');
            }
            if (AboutusSpecialityMissionPosition < screenHeight) {
                AboutusSpecialityMissionRef.current.classList.add('expanded');
                AboutusSpecialityMissionheadingRef.current.classList.add('expanded');
                AboutusSpecialityMissiondefinationRef.current.classList.add('expanded');
            }
            if (AboutusSpecialityCapabilitiesPosition < screenHeight) {
                AboutusSpecialityCapabilitiesRef.current.classList.add('expanded');
                AboutusSpecialityCapabilitiesheadingRef.current.classList.add('expanded');
                AboutusSpecialityCapabilitiesdefinationRef.current.classList.add('expanded');
            }
            if (AboutusSpecialityOurTeamPosition < screenHeight) {
                AboutusOurTeamHeadingRef.current.classList.add('expanded');
                AboutusOurTeamRef.current.classList.add('expanded');
            }
            if (AboutusSpecialityMember1Position < screenHeight) {
                AboutusMember1Ref.current.classList.add('expanded');
            }
            if (AboutusSpecialityMember2Position < screenHeight) {
                AboutusMember2Ref.current.classList.add('expanded');
            }
            if (AboutusSpecialityMember3Position < screenHeight) {
                AboutusMember3Ref.current.classList.add('expanded');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <div className='Background-Black'></div>
            <div className='ME-navbar-links'>
                <ul className='ME-navbar-links-ul'>
                    <li className='ME-navbar-links-li'>
                        <Link to='/PadEyecalculatorPage'>
                            Pad eye
                        </Link>
                    </li>
                    <li className='ME-navbar-links-li'>
                        <Link to='/Singlepage'>
                            Beam Properties
                        </Link>
                    </li>
                    <li className='ME-navbar-links-li'>
                        <Link to='/BeamDeflectionCalculator'>
                            Beam Deflection
                        </Link>
                    </li>
                    <li className='ME-navbar-links-li'>
                        <Link to='/AboutUs'>
                            About US
                        </Link>
                    </li>
                </ul>
            </div>
            <section className='Aboutus-header-section'>
                <div className='Aboutus-header-section-background'>
                    <div className='Aboutus-header-section-backgroundimg'>
                        <img src={Backgroundimg} alt='' />
                    </div>
                    <div className='calculator-first-section-textdiv'>

                        <h1 className='Aboutus-header-section-backgroundtext-title'>ABOUT US</h1>
                        <div className='Aboutus-lower-line'></div>
                    </div>
                    {/* <div className='Aboutus-header-section-backgroundtext'> */}
                    {/* </div> */}
                </div>
            </section>

            <br />
            <br />
            <br />
            <br />

            <section className='Aboutus-information' >
                <div className={`calculator-defination-div AboutUs`}>
                    <h3 className={`Beam-properties-calculator-heading AboutUs `} ref={ABOUTUSIntroHeadingRef}>
                        <span>About US</span>
                    </h3>
                    <div className={`calculator-defination-section-div AboutUs `} ref={ABOUTUSIntroRef}>
                        <br />
                        <h2 className='Aboutus-information-information'>OOK was founded on July 30th with a vision to revolutionize engineering and education by offering precise,<br /> reliable, and innovative tools for complex problem-solving. Our mission is to drive advancements in<br /> technology and learning, ensuring excellence and innovation in every aspect of <br />our work and transforming the future of these fields.</h2>
                    </div>
                </div>
            </section>

            <section className='Aboutus-Speciality'>
                <div className={`calculator-defination-div AboutUsVision`} >
                    <div className='vision'>
                        <h3 className={`Beam-properties-calculator-heading AboutUsVision `} ref={AboutusSpecialityVisionRef}>

                            <div className='-animation'>
                                <motion.div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    <GiProgression style={{ fontSize: '5vw', }} />
                                </motion.div>
                            </div>
                        </h3>
                        <div className='vision-text'>
                            <h3 className={`Beam-properties-calculator-heading AboutUsVision `} ref={AboutusSpecialityVisionheadingRef}>
                                <h1>VISION</h1></h3>
                            <div className={`calculator-defination-section-div AboutUsVision `} ref={AboutusSpecialityVisiondefinationRef}>
                                <h2 className='AboutUsVision-h2'>Our vision is to provide groundbreaking and dependable engineering calculators, consistently advancing technological frontiers to empower global society. We strive to facilitate problem-solving and foster accessibility worldwide, revolutionizing engineering</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <hr style={{ width: '40%' }} />
                <div className={`calculator-defination-div AboutUsVision`}>
                    <div className='mission'>
                        <h3 className={`Beam-properties-calculator-heading AboutUsVision `} ref={AboutusSpecialityMissionRef}>

                            <div className='-animation'>
                                <motion.div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    <GiDiceTarget style={{ fontSize: '5vw', }} />
                                </motion.div>
                            </div>
                        </h3>
                        <div className='mission-text'>
                            <h3 className={`Beam-properties-calculator-heading AboutUsVision `} ref={AboutusSpecialityMissionheadingRef}>
                                <h1>MISSION</h1></h3>
                            <div className={`calculator-defination-section-div AboutUsVision `} ref={AboutusSpecialityMissiondefinationRef}>
                                <h2 className='AboutUsVision-h2'>Our mission is to deliver precise and efficient results, enabling engineers and students to attain excellence. We are dedicated to providing innovative solutions that enhance productivity and facilitate success in every aspect of their work.</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <hr style={{ width: '40%' }} />
                <div className={`calculator-defination-div AboutUsVision Capabilities`}>
                    <div className='mission'>
                        <h3 className={`Beam-properties-calculator-heading AboutUsVision `} ref={AboutusSpecialityCapabilitiesRef}>

                            <div className='-animation'>
                                <motion.div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    <GrVulnerability style={{ fontSize: '5vw', }} />
                                </motion.div>
                            </div>
                        </h3>
                        <div className='capabilities-text'>
                            <h3 className={`Beam-properties-calculator-heading AboutUsVision `} ref={AboutusSpecialityCapabilitiesheadingRef}>
                                <h1>CAPABILITIES</h1></h3>
                            <div className={`calculator-defination-section-div AboutUsVision `} ref={AboutusSpecialityCapabilitiesdefinationRef}>
                                <h2 className='AboutUsVision-h2'>Structure Design | Engineering Calculators <br />| Web Designing | Consultancy.</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <br />
            <br />

            <section className='Aboutus-Meetourteam'>
                <div className={`calculator-defination-div AboutUs OurTeam`}>
                    <h3 className={`Beam-properties-calculator-heading AboutUs OurTeam `} ref={AboutusOurTeamHeadingRef}>
                        <span>OUR TEAM</span>
                    </h3>
                    <div className={`calculator-defination-section-div AboutUs OurTeam `} ref={AboutusOurTeamRef}>
                        {/* <h1 className='Aboutus-Meetourteam-heading'></h1> */}
                        {/* <br /> */}
                        <h2 className='Aboutus-Meetourteam-defination'>Our team, featuring highly skilled engineers, software developers, and industry experts,<br /> is devoted to creating innovative and dependable engineering solutions.<br /> We are committed to addressing the diverse needs of both<br /> professionals and students, driving excellence and<br /> technological advancement in all our endeavors.</h2>
                    </div>
                </div>
                <div className='Aboutus-Meetourteam-card-main'>
                    <div className={`calculator-defination-div Member1 Member-1`}>
                        <div className={`calculator-defination-section-div Member1 `} ref={AboutusMember1Ref}>
                            <div className='Aboutus-Meetourteam-card Meghaanand'>
                                <div className='Aboutus-Meetourteam-card-img'>
                                    <img src={DamanAnand} alt='' />
                                </div>
                                <div className='Aboutus-Meetourteam-card-text'>
                                    <div>
                                        <h1 className='Aboutus-Meetourteam-card-text-name' style={{ transform: 'translate(45px, 0px)', display: 'grid', gridTemplateColumns: '3fr 1fr', float: 'right', width: '100%', alignItems: 'center' }}>Daman Anand
                                            <Link style={{ float: 'right', marginRight: '15px', color: '#2275b4', width: "fit-content", height: '35px' }} ><FaLinkedin></FaLinkedin></Link>
                                        </h1>
                                    </div>
                                    <br />
                                    <h2 className='Aboutus-Meetourteam-card-text-information' style={{ fontSize: '1.5vw', fontStyle: 'italic', fontWeight: '300' }}>Founder</h2>
                                    <h2 className='Aboutus-Meetourteam-card-text-information'>With a Bachelor's degree in Mechanical & Automation Engineering, Daman is a skilled Design and Structural Engineer at Dimension Consultants Pte Ltd.<br /><div style={{ marginTop: '0.5vw' }} />His goal is to utilize research and marketing skills, along with providing calculators, to continually foster mutually beneficial relationships between the company and its users.</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`calculator-defination-div Member1 Member-2`}>
                        <div className={`calculator-defination-section-div Member1 `} ref={AboutusMember2Ref}>
                            <div className='Aboutus-Meetourteam-card Meghaanand'>
                                <div className='Aboutus-Meetourteam-card-img'>
                                    <img src={HimanshuGupta} alt='' />
                                </div>
                                <div className='Aboutus-Meetourteam-card-text'>
                                    <div>
                                        <h1 className='Aboutus-Meetourteam-card-text-name' style={{ transform: 'translate(45px, 0px)', display: 'grid', gridTemplateColumns: '3fr 1fr', float: 'right', width: '100%', alignItems: 'center' }}>Himanshu Gupta
                                            <Link style={{ float: 'right', marginRight: '15px', color: '#2275b4', width: "fit-content", height: '35px' }} ><FaLinkedin></FaLinkedin></Link>
                                        </h1>
                                    </div>
                                    <br />
                                    <h2 className='Aboutus-Meetourteam-card-text-information' style={{ fontSize: '1.5vw', fontStyle: 'italic', fontWeight: '300' }}>Quality Assurance</h2>
                                    <h2 className='Aboutus-Meetourteam-card-text-information'>Himanshu has a Bachelor's Degree in Mechanical & Automation Engineering, Himanshu is an experienced Mechanical Designer at Dimension Consultants Pte Ltd.<br /><div style={{ marginTop: '0.5vw' }} />Himanshu responsibilities include result verification and handling technical data. He brings exceptional technical skills and a positive attitude to support both our users and the development team.</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`calculator-defination-div Member1 Member-3`}>
                        <div className={`calculator-defination-section-div Member1 `} ref={AboutusMember3Ref}>
                            <div className='Aboutus-Meetourteam-card Meghaanand'>
                                <div className='Aboutus-Meetourteam-card-img'>
                                    <img src={Meghaanand} alt='' />
                                </div>
                                <div className='Aboutus-Meetourteam-card-text'>
                                    <h1 className='Aboutus-Meetourteam-card-text-name' style={{ transform: 'translate(45px, 0px)', display: 'grid', gridTemplateColumns: '3fr 1fr', float: 'right', width: '100%', alignItems: 'center' }}>Megha Anand
                                        <Link style={{ float: 'right', marginRight: '15px', color: '#2275b4', width: "fit-content", height: '35px' }} ><FaLinkedin></FaLinkedin></Link>
                                    </h1>
                                    <br />
                                    <h2 className='Aboutus-Meetourteam-card-text-information' style={{ fontSize: '1.5vw', fontStyle: 'italic', fontWeight: '300' }}>Product Developer </h2>

                                    <h2 className='Aboutus-Meetourteam-card-text-information'>With a strong background in programming, Megha is a versatile individual who brings extensive knowledge and experience.<br /><div style={{ marginTop: '0.5vw' }} />Megha is dedicated to the development and ongoing maintenance of various OOK Calculators. </h2>
                                    <br />
                                    <br />
                                    <br />
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
            </section >



            {/* <div className={`calculator-defination-div Workwithus`}>
                <div className={`calculator-defination-section-div Workwithus ${WorkWithUs ? 'expanded' : ''}`}>
                    <section className='Aboutus-UpworkWork'>
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className='Aboutus-UpworkWork-div'>
                            <h1 className='Aboutus-UpworkWork-heading'>WORK WITH US</h1>
                            <h2 className='Aboutus-UpworkWork-subheading'>Developing innovative and reliable engineering Solutions that address <br />the needs of both professionals and students.</h2>
                            <br />
                            <button className='aboutus-upworkwork-btn'><Link to="https://www.upwork.com/">Upwork</Link></button>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                    </section >
                </div>
            </div> */}

            <br />
            <br />
            <br />
            <footer className='footer'></footer>
        </>
    )
}
