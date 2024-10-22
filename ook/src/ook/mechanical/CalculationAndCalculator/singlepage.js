import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import CalulatorUnitConverter from './UnitSelectionProperty/square'
import RectangleUnitConverter from './UnitSelectionProperty/Rectangle';
import HollowCircle from './UnitSelectionProperty/Hollowcircle';
import SolidCircle from './SolidCircle';
import HollowReactangle from './HollowReactangle';
import TeeSection from './TeeSection';

import SquareImgcalculator from './images/images/section/square.png'
import ReactangleImgcalculator from './images/rectangle.png'
import HollowReactangleImgcalculator from './images/images/section/hollow rect.png'
import TeeSectionImgcalculator from './images/images/section/t section.png'
import ChannelImgcalculator from './c channel.png'
import IsectionImgcalculator from './images/images/section/i section.png'
import LsectionImgcalculator from './images/images/section/l angle.png'
import SolidCircleImgcalculator from './images/images/section/circle.png'
import HollowcircleImgcalculator from './images/images/section/hollow circle.png'

import Backgroundimg from '../CalculationAndCalculator/image folder/Beam-Properties2.jpg'
import '../new css/calculatorsinglepage.css'
// files
import SectionModulus from './Structure Analysis Calculator section pages/Section Modulus';
import AreaMomentsofInertia from './Structure Analysis Calculator section pages/AreaMomentsofInertia';
import Centroid from './Structure Analysis Calculator section pages/Centroid';
import PrincipleAxis from './Structure Analysis Calculator section pages/PrincipleAxis';
import AreaOfSection from './Structure Analysis Calculator section pages/AreaOfSection';
import TorsionalConstant from './Structure Analysis Calculator section pages/TorsionalConstant';
import Channel from './Channel';
import Isection from './Isection';
import Lsection from './Lsection';
import { GrLinkTop } from "react-icons/gr";

// import {ToggleBr} from '../CalculationAndCalculator/UnitSelectionProperty/square.js'
export default function Singlepage() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const [selectedOption, setSelectedOption] = useState("option1");

    const handleOptionChange = (option) => {
        setSelectedOption(option)
    }

    const [isActive3, setIsActive3] = useState(false);

    const toggleClass3 = () => {
        setIsActive3(previsActive3 => !previsActive3);

    };

    const [MetricOrImperial, setMetricOrImperial] = useState("option1");

    const toggleMetricOrImperial = (option) => {
        setMetricOrImperial(option);

    };

    const [expanded, setExpanded] = useState(false);
    const [Sectionthird, setSectionthird] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100 && !expanded) {
                setExpanded(true);
            }
            if (window.scrollY > 350 && !Sectionthird) {
                setSectionthird(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [expanded, Sectionthird]);
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
            <section className='background-white'>
                <div className='calculator-first-section-div'>
                    <div className='calculator-first-section-imgdiv' style={{ height: '80vh', overflow: 'hidden' }}>
                        <img className='calculator-first-section-imgdiv-img' src={Backgroundimg} alt='' style={{ transform: 'translate(-9%, -2.5vw)', width: '125%' }} />
                        <div className='calculator-first-section-imgdiv-shades' />
                    </div>
                    <div className='calculator-first-section-textdiv'>
                        <h3 className='calculator-first-section-textdiv-h1'>Beam Properties Calculator</h3>
                        <p className='calculator-first-section-textdiv-p'>Powerful tool for engineers, architects, and researchers <br />
                            to evaluate the behavior of different kinds <br /> of Cross Sections.
                        </p>
                    </div>
                </div>

                <section className='calculator-defination-section '>
                    <br />
                    <hr className='Beam-properties-calculator-hr' />
                    <div className={`calculator-defination-div SectionModules`}>
                        <h3 className={`Beam-properties-calculator-heading SectionModules ${expanded ? 'expanded' : ''}`}>
                            <span>OOK Beam Properties Calculator</span>
                        </h3>
                        <div className={`calculator-defination-section-div SectionModules ${expanded ? 'expanded' : ''}`}>
                            <h3 className='calculator-defination-section first-important'>
                                Specialized tool designed for the analysis and design<br />
                                of structural elements, such as beams, columns,<br />
                                shafts, and members of varying cross-sections.<br />
                            </h3>
                            <br />
                            <h3 className='calculator-defination-section second-important'>
                                This calculator makes it easier to analyze and optimize section properties in detail for<br />
                                structural integrity, efficiency, and safety in a variety of construction projects.<br />
                            </h3>
                            <br />
                            <h3 className='calculator-defination-section third-important'>
                                Easily calculate and visualize the geometric properties of various cross-section shapes,<br />
                                including Area, Centroid distances, Moments of Inertia, Section Modulus, and<br />
                                Torsional Constant essential for structural analysis and design.<br />
                            </h3>
                        </div>
                    </div>
                    <hr className='Beam-properties-calculator-hr' />
                    <br />
                </section>

                <section className='structure-analysis-calculator-calculator'>
                    <div className='structure-analysis-calculator-calculator-left'>
                        <br /><br />
                        <button onClick={() => handleOptionChange("option1")}>Square</button>
                        <button onClick={() => handleOptionChange("option2")}>Rectangle</button>
                        <button onClick={() => handleOptionChange("option3")}>Hollow rectangle (rectangle tube)</button>
                        <button onClick={() => handleOptionChange("option4")}>Tee section</button>
                        <button onClick={() => handleOptionChange("option5")}>Channel section</button>
                        <button onClick={() => handleOptionChange("option6")}>I-beam with equal flanges</button>
                        <button onClick={() => handleOptionChange("option7")}>L section (unequal legs)</button>
                        <button onClick={() => handleOptionChange("option8")}>Solid circle</button>
                        <button onClick={() => handleOptionChange("option9")}>Hollow circle or pipe</button>
                        <br /><br />
                    </div>
                    <div className='structure-analysis-calculator-calculator-center center'>
                        {selectedOption === 'option1' && (
                            <img src={SquareImgcalculator} alt="" />
                        )}
                        {selectedOption === 'option2' && (
                            <img src={ReactangleImgcalculator} alt="" />
                        )}
                        {selectedOption === 'option3' && (
                            <img src={HollowReactangleImgcalculator} alt="" />
                        )}
                        {selectedOption === 'option4' && (
                            <img src={TeeSectionImgcalculator} alt="" />
                        )}
                        {selectedOption === 'option5' && (
                            <img src={ChannelImgcalculator} alt=""
                                style={{
                                    transform: 'translate(5%, 0px)'
                                }} />
                        )}
                        {selectedOption === 'option6' && (
                            <img src={IsectionImgcalculator} alt="" />
                        )}
                        {selectedOption === 'option7' && (
                            <img src={LsectionImgcalculator} alt="" />
                        )}
                        {selectedOption === 'option8' && (
                            <img src={SolidCircleImgcalculator} alt="" style={{ width: '450px', height: '450px' }} />
                        )}
                        {selectedOption === 'option9' && (
                            <img src={HollowcircleImgcalculator} alt="" />
                        )}
                    </div>
                    <div className='structure-analysis-calculator-calculator-right bemProperties'>
                        <h3 className='color-white text-aligh-center'>Input</h3>
                        <br />
                        {selectedOption === 'option1' && (

                            <CalulatorUnitConverter
                                togglefunction={isActive3}
                                toggleBreaks={toggleClass3}

                                MetricOrImperial={MetricOrImperial}
                                MetricOrImperialBtn={toggleMetricOrImperial}
                            />
                        )}
                        {selectedOption === 'option2' && (

                            <RectangleUnitConverter
                                togglefunction={isActive3}
                                toggleBreaks={toggleClass3}

                                MetricOrImperial={MetricOrImperial}
                                MetricOrImperialBtn={toggleMetricOrImperial}
                            />
                        )}
                        {selectedOption === 'option3' && (

                            <HollowReactangle
                                togglefunction={isActive3}
                                toggleBreaks={toggleClass3}

                                MetricOrImperial={MetricOrImperial}
                                MetricOrImperialBtn={toggleMetricOrImperial}
                            />
                        )}
                        {selectedOption === 'option4' && (

                            <TeeSection
                                togglefunction={isActive3}
                                toggleBreaks={toggleClass3}

                                MetricOrImperial={MetricOrImperial}
                                MetricOrImperialBtn={toggleMetricOrImperial}
                            />
                        )}
                        {selectedOption === 'option5' && (

                            <Channel
                                togglefunction={isActive3}
                                toggleBreaks={toggleClass3}

                                MetricOrImperial={MetricOrImperial}
                                MetricOrImperialBtn={toggleMetricOrImperial}
                            />
                        )}
                        {selectedOption === 'option6' && (

                            <Isection
                                togglefunction={isActive3}
                                toggleBreaks={toggleClass3}

                                MetricOrImperial={MetricOrImperial}
                                MetricOrImperialBtn={toggleMetricOrImperial}
                            />
                        )}
                        {selectedOption === 'option7' && (

                            <Lsection
                                togglefunction={isActive3}
                                toggleBreaks={toggleClass3}

                                MetricOrImperial={MetricOrImperial}
                                MetricOrImperialBtn={toggleMetricOrImperial}
                            />
                        )}
                        {selectedOption === 'option8' && (

                            <SolidCircle
                                togglefunction={isActive3}
                                toggleBreaks={toggleClass3}

                                MetricOrImperial={MetricOrImperial}
                                MetricOrImperialBtn={toggleMetricOrImperial}
                            />
                        )}
                        {selectedOption === 'option9' && (

                            <HollowCircle
                                togglefunction={isActive3}
                                toggleBreaks={toggleClass3}

                                MetricOrImperial={MetricOrImperial}
                                MetricOrImperialBtn={toggleMetricOrImperial}
                            />
                        )}
                    </div>
                </section>
                <div className={isActive3 ? ' height110 ' : ' height110 height0 '} ></div>

                <br />
                <br />
                <br />
                <br />
                <hr class="Beam-properties-calculator-hr"></hr>
                <br />
                <br />
                <br />
                <AreaOfSection />
                <hr class="Beam-properties-calculator-hr"></hr>
                <br />
                <br />
                <br />
                <PrincipleAxis />
                <br />
                <br />
                <br />
                <br />
                <hr class="Beam-properties-calculator-hr"></hr>
                <br />
                <br />
                <br />
                <br />
                <Centroid />
                <hr class="Beam-properties-calculator-hr"></hr>
                <br />
                <br />
                <br />
                <br />
                <br />
                <AreaMomentsofInertia />
                <hr class="Beam-properties-calculator-hr"></hr>
                <br />
                <br />
                <br />
                <br />
                <SectionModulus />
                <hr class="Beam-properties-calculator-hr"></hr>
                <br />
                <br />
                <br />
                <br />
                <TorsionalConstant />

                <section className='cse-header-top' onClick={scrollToTop}>
                    <Link  smooth={true} duration={500} offset={-70}>
                        <GrLinkTop className='' />
                    </Link>
                </section>
                
            </section >
            <footer className='footer'></footer>
        </>
    )
}
