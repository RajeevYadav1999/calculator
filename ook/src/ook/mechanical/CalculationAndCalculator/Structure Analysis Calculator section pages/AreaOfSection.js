import React, { useEffect, useState, useRef } from 'react';

import Areaimg from '../Screenshot (165).jpg'
import SquareImg from '../../CalculationAndCalculator/images/images/area/square.png'
import ReactangleImg from '../../CalculationAndCalculator/images/images/area/rectangle.png'
import HollowReactangleImg from '../../CalculationAndCalculator/images/images/area/hollow rect.png'
import TeeSectionImg from '../../CalculationAndCalculator/images/images/area/t section.png'
import ChannelImg from '../../CalculationAndCalculator/images/images/area/c channel.png'
import IsectionImg from '../../CalculationAndCalculator/images/images/area/i section.png'
import LsectionImg from '../../CalculationAndCalculator/images/images/area/l angle.png'
import SolidCircleImg from '../../CalculationAndCalculator/images/images/area/circle.png'
import HollowcircleImg from '../../CalculationAndCalculator/images/images/area/hollow circle.png'

export default function AreaOfSection() {
    const [isActive, setIsActive] = useState(true);

    const toggleClass = () => {
        setIsActive(!isActive);
    };
    // Black box tranaction
    const textRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                });
            },
            { threshold: 1 }
        );

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => {
            if (textRef.current) {
                observer.unobserve(textRef.current);
            }
        };
    }, []);
    // scroll transtion

    const targetRef = useRef(null);

    // Function to handle the button click
    const handleScroll = () => {
        targetRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const handleCombinedClick = () => {
        handleScroll();
        toggleClass();
    };
    return (
        <>
            <section className='structure-analysis-calculator-formula-dropdown-section'>
                <div className='mae-cad-info-second-section-main-grid-explore-more-grid'>
                    <div className='calculator-Area '>
                        <div className='calculator-area-overlay'  ></div>
                        <h3 className={`gbp-h3 structure-analysis-calculator-information-h3 ${isVisible ? 'scrolled' : ''}`}  >Area of section(A):</h3>
                        <br ref={textRef} />
                        <h3 className={`gbp-h3 structure-analysis-calculator-information-h3 defination scrollfromhere  ${isVisible ? 'scrolled' : ''}`} >Total amount of space inside the section.</h3>
                        <br />
                        <button className={`gbp-h3 structure-analysis-calculator-information-h3-button-Discovermore  ${isVisible ? 'scrolled' : ''}`} onClick={handleCombinedClick}>Discover more</button>
                        <br /><br />
                    </div>
                    <div>
                        <img className='structure-analysis-calculator-formula-dropdown-section-img areaimg' src={Areaimg} alt='' />
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <h3 className='calculator-defination-section first-important heading' style={{ fontSize: '2vw', }}>
                    What are the significance of area of sections?
                </h3>
                <h3 className='calculator-defination-section second-important' style={{ marginTop: '15px' }}>
                    Used for calculations of stress, strain, and moments of inertia.
                </h3>
                <br />
                <br />
                <h3 className='calculator-defination-section third-important heading' style={{ fontSize: '2vw', }}>
                    What are the inputs to calculate the area of section?
                </h3>
                <h3 className='calculator-defination-section third-important' style={{ marginTop: '15px' }}>
                    Dimension of cross-section
                </h3>
                <br />
                <br />
                <h3 className='calculator-defination-section third-important heading' style={{ fontSize: '2vw', }}>
                    How to calculate the area of cross section?
                </h3>
                <h3 className='calculator-defination-section third-important' style={{ marginTop: '15px' }}>
                    Area of section for various cross section can be calculated by using these formulas:
                </h3>

                <br ref={targetRef} />
                <br />
                <div className={isActive ? 'mae-calculator-info ' : 'mae-calculator-info  active'} >
                    <br />
                    <br />
                    <br />
                    <table className='structure-analysis-calculator-formula-dropdown-section-formula-data' style={{ width: '90%' }}>
                        <tr>

                            <td style={{ width: '30%' }}>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px '> Cross Section Shape </h3>
                            </td>
                            <td style={{ width: '40%' }}>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px '> Formula </h3>
                            </td>
                            <td style={{ width: '30%' }}>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px '>Section Name</h3>
                            </td>

                        </tr>
                        <tr>

                            <td >
                                <img src={SquareImg} className='structure-analysis-calculator-formula-dropdown-section-img' alt=''
                                    style={{
                                        width: '18vw',
                                        height: '14vw',
                                    }} />

                            </td>
                            <td >
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px formula-text'> A
                                    <span className='equalesto'>=</span>
                                    a<span className='power'>2</span></h3>
                            </td>
                            <td >
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px '>Square</h3>
                            </td>

                        </tr>

                        <tr>
                            <td>
                                <img src={ReactangleImg} className='structure-analysis-calculator-formula-dropdown-section-img' alt='' />
                            </td>
                            <td>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px formula-text'>A
                                    <span className='equalesto'>=</span>
                                    d.b</h3>
                            </td>
                            <td>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px '>Rectangle</h3>
                            </td>

                        </tr>

                        <tr>
                            <td>
                                <img src={HollowReactangleImg} className='structure-analysis-calculator-formula-dropdown-section-img' alt='' />
                            </td>
                            <td>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px formula-text'>A
                                    <span className='equalesto'>=</span>
                                    (d.b) – (d<span className='LowerPower'>i</span>.b<span className='LowerPower'>i</span>)</h3>
                            </td>
                            <td>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px '>Hollow rectangle</h3>
                            </td>
                        </tr>


                        <tr>
                            <td>
                                <img className='structure-analysis-calculator-formula-dropdown-section-img' src={TeeSectionImg} alt='' />
                            </td>
                            <td>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px formula-text'>A
                                    =
                                    t.b
                                    +t
                                    <span className='LowerPowerminus2px'>w</span>
                                    .d</h3>
                            </td>
                            <td>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px '>Tee Section</h3>
                            </td>
                        </tr>




                        <tr>
                            <td>
                                <img className='structure-analysis-calculator-formula-dropdown-section-img' src={ChannelImg} alt='' />
                            </td>
                            <td>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px formula-text'>
                                    A
                                    <span className='equalesto'>=</span>
                                    t.b+2t
                                    <span className='LowerPowerminus2px'>w</span>

                                    .d</h3>
                            </td>
                            <td>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px '>C channel</h3>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img className='structure-analysis-calculator-formula-dropdown-section-img' src={IsectionImg} alt='' />
                            </td>
                            <td>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px formula-text'>
                                    A
                                    <span className='equalesto'>=</span>
                                    t
                                    <span className='LowerPowerminus2px'>w</span>

                                    .d+2t.b</h3>
                            </td>
                            <td>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px '>I Section</h3>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <img className='structure-analysis-calculator-formula-dropdown-section-img' src={LsectionImg} alt='' />
                            </td>
                            <td>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px formula-text'>
                                    A
                                    <span className='equalesto'>=</span>
                                    t(b+d−t)</h3>
                            </td>
                            <td>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px '>L section</h3>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img className='structure-analysis-calculator-formula-dropdown-section-img' src={SolidCircleImg} alt=''
                                    style={{
                                        width: '13vw',
                                        height: '15vw',
                                    }} />
                            </td>
                            <td>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px formula-text'>
                                    A
                                    <span className='equalesto'>=</span>
                                    π.r
                                    <span className='power'>2</span>
                                </h3>
                            </td>
                            <td>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px '>Circle</h3>
                            </td>

                        </tr>

                        <tr>
                            <td>
                                <img className='structure-analysis-calculator-formula-dropdown-section-img' src={HollowcircleImg} alt=''
                                    style={{
                                        width: '15vw',
                                        height: '15vw',
                                    }} />
                            </td>
                            <td>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px formula-text'>
                                    A
                                    <span className='equalesto'>=</span>
                                    π(r-r
                                    <span className='LowerPower'>i</span>
                                    )
                                </h3>
                            </td>

                            <td>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px '>Hollow circle</h3>
                            </td>
                        </tr>
                    </table>
                    <br />
                <br />
                <br />
                <br />
                <br />
                </div>
                <h3 className='calculator-defination-section first-important heading' style={{ fontSize: '1.8vw', }}>
                    What are the units of area of cross-section?
                </h3>
                <h3 className='calculator-defination-section second-important' style={{ marginTop: '15px' }}>
                    S.I Units of area of cross-section is mm
                                    <span className='power'>2</span>

                </h3>
                <h3 className='calculator-defination-section third-important' style={{ marginTop: '15px' }}>
                    Imperial Units of the area of cross-section is in
                                    <span className='power'>2</span>
                    .
                </h3>
                <br />
                <br />
                <br />
                <br />
            </section>
        </>
    )
}
