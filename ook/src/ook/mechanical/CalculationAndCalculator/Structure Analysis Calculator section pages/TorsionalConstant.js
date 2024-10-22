import React, { useEffect, useState, useRef } from 'react';
// icons
import { LiaLessThanSolid } from "react-icons/lia";
// images
import Areaimg from '../Screenshot (165).jpg'
import Circle from '../../CalculationAndCalculator/images/images/torsional constant/circle.png'
import SquareImg from '../../CalculationAndCalculator/images/images/torsional constant/square.png'
import Rectangle from '../../CalculationAndCalculator/images/images/torsional constant/rectangle.png'
import Hollowwalledrectangle from '../../CalculationAndCalculator/images/images/torsional constant/hollow rect.png'
import Isection from '../Torsional constant/i section.png'
export default function TorsionalConstant() {
    const [isActive, setIsActive] = useState(true);

    const toggleClass = () => {
        setIsActive(!isActive);
    };
    // black box tranaction
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
                        <h3 className={`gbp-h3 structure-analysis-calculator-information-h3 ${isVisible ? 'scrolled' : ''}`}  >Torsional Constant:</h3>
                        <br ref={textRef} />
                        <h3 className={`gbp-h3 structure-analysis-calculator-information-h3 defination scrollfromhere  ${isVisible ? 'scrolled' : ''}`} >                            Geometrical property of bar cross section that describes
                            its resistance to torsional deformation during torsion.</h3>
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
                <h3 className='calculator-defination-section first-important heading' style={{ fontSize: '2vw', textTransform: 'uppercase' }}>
                What are the Significance of torsional constant:
                </h3>
                <h3 className='calculator-defination-section second-important' style={{ marginTop: '15px' }}>
                    Crucial for designing shafts that transmit power in machinery.
                </h3>
                <h3 className='calculator-defination-section third-important' style={{ marginTop: '10px' }}>
                    Knowing the torsional constant allows for the design of
                </h3>
                <h3 className='calculator-defination-section third-important'>
                    shafts that can safely transfer torque without
                </h3>
                <h3 className='calculator-defination-section third-important'>
                    excessive twisting or failure.
                </h3>
                <br />
                <br />
                <h3 className='calculator-defination-section first-important heading' style={{ fontSize: '2vw', }}>
                    How to calculate torsional constant?
                </h3>
                <h3 className='calculator-defination-section third-important' >
                    Torsional constant can be calculated by<br/> using the formula:
                </h3>
                <h3 className='calculator-defination-section third-important' style={{ marginTop: '15px' }}>
                    ϕ=TL/kg or K =TL/ ϕg
                </h3>
                <br />
                <br />
                <h3 className='calculator-defination-section third-important heading' style={{ color: '#000', textTransform: 'uppercase' }}>
                    In this equation:
                </h3>
                <h3 className='calculator-defination-section third-important' style={{ textAlign: 'left', width: '45%', color: '#1d1d1dbf', marginTop: '15px' }}>
                    ϕ — Angle of twist.
                </h3>
                <h3 className='calculator-defination-section third-important' style={{ textAlign: 'left', width: '45%', color: '#1d1d1dbf' }}>
                    T — Torque applied to the beam.
                </h3>
                <h3 className='calculator-defination-section third-important' style={{ textAlign: 'left', width: '45%', color: '#1d1d1dbf' }}>
                    L — Shaft length.
                </h3>
                <h3 className='calculator-defination-section third-important' style={{ textAlign: 'left', width: '45%', color: '#1d1d1dbf' }}>
                    G — Shear modulus of the shaft material.
                </h3>
                <h3 className='calculator-defination-section third-important' style={{ textAlign: 'left', width: '45%', color: '#1d1d1dbf' }}>
                    K — Beam torsional constant, the one we get with this calculator.
                </h3>

                <br />
                <br />
                <h3 className='calculator-defination-section third-important' style={{ width: '55%', color: '#1d1d1dbf' }}>
                    The torsional constant in this formula has the same function as the polar moment (polar moment of inertia - describes a cross section resistance to torsion due to its shape or measure the strength (max. applicable torque) of shaft )circular beam, but we termed it here with the
                    K symbol to differentiate both.

                </h3>
                <br />
                <br ref={targetRef} />
                <br />
                <br />

                <div className={isActive ? 'mae-calculator-info ' : 'mae-calculator-info  active'} >
                    <br />
                    <br />
                    <br />
                    <table className='structure-analysis-calculator-formula-dropdown-section-formula-data' style={{ width: '90%' }}>
                        <tr>

                            <td style={{ width: '40%' }}>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px '> Cross Section Shape </h3>
                            </td>
                            <td style={{ width: '30%' }}>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px '> Formula </h3>
                            </td>
                            <td style={{ width: '30%' }}>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px '>Section Name</h3>
                            </td>

                        </tr>
                        <tr>

                            <td >
                                <img src={Circle} className='structure-analysis-calculator-formula-dropdown-section-img' alt='' style={{ width: '10vw' }} />

                            </td>
                            <td >
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px formula-text'>
                                    K
                                    <span className='equalesto'>=</span>
                                    <span style={{ textAlign: 'center' }}>
                                        (π.r
                                        <span className='power'>4</span>
                                        )
                                        <hr />
                                        2
                                    </span>
                                </h3>
                            </td>
                            <td >
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px '>Circle</h3>
                            </td>

                        </tr>

                        <tr>

                            <td >
                                <img src={SquareImg} className='structure-analysis-calculator-formula-dropdown-section-img' alt='' style={{ width: '10vw', height: '10vw' }} />

                            </td>
                            <td >
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px formula-text'>
                                    K
                                    <span className='equalesto'>=</span>
                                    <span style={{ textAlign: 'center' }}>
                                        9
                                        <hr />
                                        64
                                    </span>
                                    <span style={{ marginLeft: '8px' }}>a
                                        <span className='power'>4</span>
                                    </span>
                                </h3>
                            </td>
                            <td >
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px '>Square</h3>
                            </td>

                        </tr>
                        <tr>

                            <td >
                                <img src={Rectangle} className='structure-analysis-calculator-formula-dropdown-section-img' alt='' style={{ width: '10vw', height: '10vw' }} />

                            </td>
                            <td >
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px formula-text'>
                                    K
                                    <span className='equalesto'>=</span>
                                    <span style={{ textAlign: 'center' }}>
                                        ab
                                        <span className='power'>3</span>
                                        <hr />
                                        3
                                    </span>
                                    <span className='equalesto'>−</span>

                                    <span style={{ textAlign: 'center' }}>
                                        0.21b
                                        <span className='power'>4</span>
                                        +0.0175
                                    </span>
                                    <span style={{ textAlign: 'center', marginLeft: '5px' }}>b
                                        <span className='power'>8</span>
                                        <hr />
                                        a
                                        <span className='power'>4</span>
                                    </span>
                                </h3>
                            </td>
                            <td >
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px '>Rectangle</h3>
                            </td>

                        </tr>
                        <tr>

                            <td >
                                <img src={Hollowwalledrectangle} className='structure-analysis-calculator-formula-dropdown-section-img' alt='' style={{ width: '10vw', height: '10vw' }} />

                            </td>
                            <td >
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px formula-text'>
                                    K
                                    <span className='equalesto'>=</span>
                                    <span style={{ textAlign: 'center' }}>
                                        (2tt
                                        <span className='LowerPowerminus2px torsinalConstantFormula'>1</span>
                                        (a−t)
                                        <span className='power'>2</span>
                                        (b−t
                                        <span className='LowerPowerminus2px torsinalConstantFormula'>1 </span>)
                                        <span className='power'>2</span>
                                        )
                                        <hr />
                                        (at+bt
                                        <span className='LowerPowerminus2px torsinalConstantFormula'>1</span>
                                        -t
                                        <span className='power'>2</span>
                                        -t
                                        <span className='LowerPowerminus2px torsinalConstantFormula'>1</span>
                                        <span className='power'>2</span>

                                        )
                                    </span>

                                </h3>
                            </td>
                            <td >
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px '>Hollow rectangle</h3>
                            </td>

                        </tr>

                        <tr>

                            <td >
                                <img src={Isection} className='structure-analysis-calculator-formula-dropdown-section-img' alt='' style={{ width: '10vw', height: '10vw' }} />

                            </td>
                            <td >
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px formula-text'>
                                    K
                                    <span className='equalesto'>=</span>
                                    2K
                                    <span className='LowerPowerminus2px torsinalConstantFormula'>1</span>
                                    +K
                                    <span className='LowerPower'>2</span>
                                    +2αD
                                    <span className='power'>4</span>
                                </h3>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px formula-text'>
                                    K<span className='LowerPowerminus2px torsinalConstantFormula'>1</span>
                                    <span className='equalesto'>=</span>
                                    <span style={{ textAlign: 'center' }}>
                                        (ab
                                        <span className='power'>3</span>
                                        )
                                        <hr />
                                        3
                                    </span>
                                    <span className='equalesto'>–</span>
                                    0.21b<span className='power'>4</span>
                                    <span className='equalesto'>+</span>
                                    0.0175
                                    <span style={{ textAlign: 'center', marginLeft: '5px' }}>
                                        b<span className='power'>8</span>
                                        <hr />
                                        a
                                        <span className='power'>4</span>
                                    </span>
                                </h3>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px formula-text'>
                                    K<span className='LowerPower'>2</span>
                                    <span className='equalesto'>=</span>
                                    <span style={{ textAlign: 'center' }}>
                                        cd
                                        <span className='power'>3</span>
                                        <hr />
                                        3
                                    </span>
                                </h3>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px formula-text'>
                                    D
                                    <span className='equalesto'>=</span>
                                    <span style={{ textAlign: 'center' }}>
                                        t
                                        <hr />
                                        t<span className='LowerPowerminus2px torsinalConstantFormula'>1</span>

                                    </span>
                                    (0.15
                                    <span className='equalesto'>+</span>
                                    0.1
                                    <span style={{ textAlign: 'center', fontSize: '1vw', marginRight: '5px' }}>
                                        r<hr />b
                                    </span >
                                    )
                                </h3>

                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px formula-text'>
                                    α
                                    <span className='equalesto'>=</span>
                                    <span style={{ textAlign: 'center' }}>
                                        t
                                        <hr />
                                        t<span className='LowerPowerminus2px torsinalConstantFormula'>1</span>

                                    </span>
                                    (0.15
                                    <span className='equalesto'>+</span>
                                    0.1
                                    <span style={{ textAlign: 'center', fontSize: '1vw', marginRight: '5px' }}>
                                        r<hr />b
                                    </span >
                                    )
                                </h3>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px formula-text'>
                                    If b <LiaLessThanSolid style={{ fontSize: '1vw' }} /> d, then
                                    <span style={{ textAlign: 'center', marginLeft: '10px' }}>
                                        t
                                        <hr />
                                        t<span className='LowerPowerminus2px torsinalConstantFormula'>1</span>

                                    </span>
                                    <span className='equalesto'>=</span>
                                    <span style={{ textAlign: 'center' }}>
                                        b
                                        <hr />
                                        d
                                    </span>
                                </h3>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px formula-text'>
                                    If d <LiaLessThanSolid style={{ fontSize: '1vw' }} /> b, then
                                    <span style={{ textAlign: 'center', marginLeft: '10px' }}>
                                        t
                                        <hr />
                                        t<span className='LowerPowerminus2px torsinalConstantFormula'>1</span>

                                    </span>
                                    <span className='equalesto'>=</span>
                                    <span style={{ textAlign: 'center' }}>
                                        d
                                        <hr />
                                        b
                                    </span>
                                </h3>
                            </td>
                            <td >
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px '>I section</h3>
                            </td>

                        </tr>
                    </table>
                <br />
                <br />
                </div>
                <h3 className='calculator-defination-section first-important heading' style={{ fontSize: '2vw', textTransform: 'uppercase' }}>
                What are the units of torsional constant?
                </h3>
                <h3 className='calculator-defination-section second-important' style={{ marginTop: '15px' }}>
                    S.I Units of torsional constant is mm
                    <span className='power'>4</span>
                    .
                </h3>
                <h3 className='calculator-defination-section second-important' style={{ marginTop: '10px' }}>
                    Imperial units of torsional constant is in
                    <span className='power'>4</span>.
                </h3>
                <br />
                <br />
            </section>
        </>
    )
}
