import React, { useEffect, useState, useRef } from 'react';

import Areaimg from '../../Screenshot (165).jpg'

// type of loads images
import PointLoadImg from '../deflection/deflection/types of load/point load.png'
import UniformdistributedLoadImg from '../deflection/deflection/types of load/distributed support.png'
import NonuniformdistributedLoadImg from '../deflection/deflection/types of load/non distributed support.png'

// types of support images
import FixedImage from '../deflection/deflection/types of support/fixed support.png'
import PinnedImage from '../deflection/deflection/types of support/pined support.png'
import RollerImage from '../deflection/deflection/types of support/roller support.png'
export default function BeamDeflection() {
    const [isActive, setIsActive] = useState(true);

    const toggleClass = () => {
        setIsActive(!isActive);
    };
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
                        <div className='calculator-area-overlay'></div>
                        <h3 className={`gbp-h3 structure-analysis-calculator-information-h3 ${isVisible ? 'scrolled' : ''}`}>Inputs Parameters:</h3>
                        <br ref={textRef} />
                        <h3 className='gbp-h3 structure-analysis-calculator-information-h3 defination'>
                        </h3>
                        <br />
                        <button className={`gbp-h3 structure-analysis-calculator-information-h3-button-Discovermore ${isVisible ? 'scrolled' : ''}`} onClick={handleCombinedClick}>Discover more</button>
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
                <br />
                <div className={isActive ? 'mae-calculator-info PadeyeDropDown ' : 'mae-calculator-info PadeyeDropDown  active'} style={{ border: '2px solid', borderRadius: '30px' }} ref={targetRef}>
                    <br />
                    <br />
                    <br />
                    <div>
                        <h3 className='calculator-info-blue-section-main-topic MainHeadingOfDropdown' style={{ padding: '0', margin: 'auto', width: '90%', justifyContent: 'left', textTransform: 'uppercase', fontWeight: '600', fontSize: '3.6vw', important: true }}>
                            Inputs parameters :
                        </h3>

                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>

                            <div>
                                <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>	Length of the Beam : </h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>Deflection is directly proportional to the beam's length</h3>
                                <br/>
                                <br/>
                                <div style={{justifyContent:'center', alignItems:'center', display:'flex'}}>
                                <hr style={{width:'80%'}}/>
                                </div>
                                <br/>
                                <br/>
                                <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>	Young’s modulus (<span className='power' style={{ fontSize: '1.5vw', top: '0px', color: '#000', fontFamily: "'Kanit', sans-serif !important", fontWeight: '700' }}>  E</span>) :</h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>Property that indicates how much a material will deform when subjected to load.</h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>Materials having high elastic modulus can resist deformation more effectively, While with a low elastic modulus are more flexible and deform more easily under the same load.</h3>
                                <br/>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>How to calculate Young’s Modulus?</h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>Young’s Modulus is calculated by using this formula:</h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '80%', justifyContent: 'left', fontSize: '1.8vw' }}>E = σ/ε</h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '80%', justifyContent: 'left', fontSize: '1.8vw' }}>Where:</h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '78%', justifyContent: 'left', fontSize: '1.8vw' }}>
                                    <span className='power' style={{ fontSize: '2vw', top: '0px', color: '#000', fontFamily: "'Kanit', sans-serif !important", fontWeight: '100', marginRight: '5px' }}>  σ is the stress </span>
                                </h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '78%', justifyContent: 'left', fontSize: '1.8vw' }}>
                                    <span className='power' style={{ fontSize: '2vw', top: '0px', color: '#000', fontFamily: "'Kanit', sans-serif !important", fontWeight: '100', marginRight: '5px' }}>  ε is the strain </span>
                                </h3>
                                <br />
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2vw'  }}>What are the units of Young’s Modulus?</h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '80%', justifyContent: 'left' }}>S.I Units of youngs modulus is Pascal (Pa).</h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '80%', justifyContent: 'left' }}>Imperial units of young modulus is Pounds per square inch (psi).</h3>
                                <br/>
                                <br/>
                                <div style={{justifyContent:'center', alignItems:'center', display:'flex'}}>
                                <hr style={{width:'80%'}}/>
                                </div>
                                <br/>
                                <br/>
                                <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>Second moment of area :</h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>Measure of cross-section resistance to bending due to its shape.</h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>A larger second moment of area means greater resistance to bending stress and beam deflection.</h3>
                                <br/>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>How to calculate second moment of area?</h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>Area moment of inertia can be calculated by using this formula:</h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '80%', justifyContent: 'left', fontSize: '1.8vw' }}>
                                    <span className='power' style={{ fontSize: '2vw', top: '0px', color: '#000', fontFamily: "'Kanit', sans-serif !important", fontWeight: '600', marginRight: '5px', marginLeft: '8px'}}> Iy = ∫x
                                        <span className='power' style={{ fontSize: '1.2vw', marginRight: '2px' }}>  2 </span>
                                        
                                        dA</span>
                                </h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '80%', justifyContent: 'left', fontSize: '1.8vw' }}>
                                <span className='power' style={{ fontSize: '2vw', top: '0px', color: '#000', fontFamily: "'Kanit', sans-serif !important", fontWeight: '600', marginRight: '5px' , marginLeft: '8px'}}> Ix = ∫y
                                        <span className='power' style={{ fontSize: '1.2vw', marginRight: '2px' }}>  2 </span>
                                    
                                    dA</span>
                                
                                </h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '80%', justifyContent: 'left', fontSize: '1.8vw' }}>Where:</h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '78%', justifyContent: 'left', fontSize: '1.8vw' }}>
                                    <span className='power' style={{ fontSize: '2vw', top: '0px', color: '#000', fontFamily: "'Kanit', sans-serif !important", fontWeight: '100', marginRight: '5px' }}> distance from the x axis to area dA</span>
                                </h3>
                                <br />
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2vw'  }}>What are the units of area moment of inertia?</h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '80%', justifyContent: 'left' }}>S.I Units of area moment of inertia are millimeter
                                <span className='power' style={{ fontSize: '1.2vw', marginRight: '2px' }}>  4 </span>
                                (mm
                                    <span className='power' style={{ fontSize: '1.2vw', marginRight: '2px' }}>  4</span>
                                    ).</h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '80%', justifyContent: 'left' }}>Imperial units of area moment of inertia is inch
                                        <span className='power' style={{ fontSize: '1.2vw', marginRight: '2px' }}>  4 </span>
                                     (in
                                        <span className='power' style={{ fontSize: '1.2vw', marginRight: '2px' }}>  4</span>
                                    ) .</h3>
                                <br/>
                                <br/>
                                <div style={{justifyContent:'center', alignItems:'center', display:'flex'}}>
                                <hr style={{width:'80%'}}/>
                                </div>
                                <br/>
                                <br/>
                                <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>Load :</h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>External force or weight acts on a structure that can cause stress and strain in the structure.</h3>
                                <br/>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>How to calculate load?</h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>Load is calculated by using the formula:</h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '80%', justifyContent: 'left', fontSize: '1.8vw' }}><br/>
                                <span className='power' style={{ fontSize: '2vw', top: '0px', color: '#000', fontFamily: "'Kanit', sans-serif !important", fontWeight: '100', marginRight: '5px' , marginLeft: '8px'}}> F=σ⋅A</span>
                                </h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '80%', justifyContent: 'left', fontSize: '1.8vw' }}>Where:</h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '78%', justifyContent: 'left', fontSize: '1.8vw' }}>
                                    <span className='power' style={{ fontSize: '2vw', top: '0px', color: '#000', fontFamily: "'Kanit', sans-serif !important", fontWeight: '100', marginRight: '5px' }}> F is the load applied.</span>
                                </h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '78%', justifyContent: 'left', fontSize: '1.8vw' }}>
                                    <span className='power' style={{ fontSize: '2vw', top: '0px', color: '#000', fontFamily: "'Kanit', sans-serif !important", fontWeight: '100', marginRight: '5px' }}> σ is the stress.</span>
                                </h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '78%', justifyContent: 'left', fontSize: '1.8vw' }}>
                                    <span className='power' style={{ fontSize: '2vw', top: '0px', color: '#000', fontFamily: "'Kanit', sans-serif !important", fontWeight: '100', marginRight: '5px' }}>A is the cross-sectional area.</span>
                                </h3>
                                <br />
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2vw'  }}>What are the units of load?</h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '80%', justifyContent: 'left' }}>S.I Units of load are Newton (N).</h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '80%', justifyContent: 'left' }}>Imperial units of load is Pound (lb).</h3>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <div style={{justifyContent:'center', alignItems:'center', display:'flex'}}>
                                <hr style={{width:'80%'}}/>
                                </div>
                                <br/>
                            </div>
                        </div>
                        <br />
                        <br />


                        <h3 className='calculator-info-blue-section-main-topic MainHeadingOfDropdown' style={{ padding: '0', margin: 'auto', width: '90%', justifyContent: 'left', textTransform: 'uppercase', fontWeight: '600', fontSize: '3.6vw', important: true }}>
                            Type of load acting in beams that cause deflection in beams :
                        </h3>
                        <br />

                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>

                            <div>
                                <div style={{ display: 'flex', }}>
                                    <div>
                                        <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '80%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>Point Load: </h3>
                                        <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '80%', justifyContent: 'left' }}>Act over a very small area of a structural element but considered to as a single point.</h3>
                                    </div>
                                    <img src={PointLoadImg} alt='' style={{ width: '20vw' }} />
                                </div>
                                <br/>
                                <br/>
                                <div style={{justifyContent:'center', alignItems:'center', display:'flex'}}>
                                <hr style={{width:'80%'}}/>
                                </div>
                                <br/>
                                <br/>
                                <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>	Distributed load  :</h3>
                                <br />
                                <div style={{ display: 'flex', }}>
                                    <div>
                                        <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '80%', justifyContent: 'left', fontSize: '1.7vw' }}>1.	Uniform distributed Loads</h3>
                                        <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '75%', justifyContent: 'left' }}>Constant load along the length of the beam i.e. the beam experiences the same load from the start and end point of beams.</h3>
                                    </div>
                                    <img src={UniformdistributedLoadImg} alt='' style={{ width: '20vw' }} />
                                </div>
                                <br />
                                <div style={{ display: 'flex', }}>
                                    <div>
                                        <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '80%', justifyContent: 'left', fontSize: '1.7vw' }}>2.	Non-uniform distributed Loads</h3>
                                        <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '75%', justifyContent: 'left' }}>Varying load along the length of the beam i.e. the beam experiences different loads from the start and end point of the beams.</h3>
                                    </div>
                                    <img src={NonuniformdistributedLoadImg} alt='' style={{ width: '20vw' }} />

                                </div>
                                <br />
                            </div>
                        </div>
                        <br/>
                                <br/>
                                <div style={{justifyContent:'center', alignItems:'center', display:'flex'}}>
                                <hr style={{width:'80%'}}/>
                                </div>
                                <br/>
                                <br/>

                        <h3 className='calculator-info-blue-section-main-topic MainHeadingOfDropdown' style={{ padding: '0', margin: 'auto', width: '90%', justifyContent: 'left', textTransform: 'uppercase', fontWeight: '600', fontSize: '3.6vw', important: true }}>
                            Support  :
                        </h3>
                        <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '90%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>
                            Essential components in a structure that provide stability and resistance to forces under various loads acting on it.</h3>
                        <br />
                        <h3 class="calculator-info-blue-section-main-topic TopicOfDropdown" style={{ padding: '0px', margin: 'auto', width: '90%', justifyContent: 'left', fontSize: '2.5vw', }}>Type of supports:</h3>
                        <br />

                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                            <div>
                                <div style={{ display: 'flex', }}>
                                    <div>
                                        <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '80%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>Fixed support : </h3>
                                        <br />
                                        <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '76%', justifyContent: 'left' }}>Restrict all translation in horizontal
                                            (x) and vertical
                                            (y) direction as well as rotational movement of the structural member.
                                        </h3>
                                        <div style={{ marginTop: '15px' }}></div>
                                        <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '76%', justifyContent: 'left', display: 'block' }}>
                                            Fixed support produces reaction forces in horizontal reaction
                                            (R<span className='LowerPowerminus2px sectionmodulesSolutionLowerPower' style={{ left: '-1px' }}>x</span>)
                                            , vertical reaction
                                            (R<span className='LowerPowerminus2px sectionmodulesSolutionLowerPower'>y</span>)
                                            , and moment
                                            (M).
                                        </h3>
                                        <div style={{ marginTop: '15px' }}></div>

                                        <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '76%', justifyContent: 'left' }}>
                                            Fixed support is used in satiation where complete rigidity is required such as cantilever beams, fixed-end beams, and frame structures.
                                        </h3>
                                    </div>
                                    <img src={FixedImage} alt='' style={{ width: '24vw', height: '14vw', marginTop: '2vw' }} />

                                </div>
                                <br/>
                                <br/>
                                <div style={{justifyContent:'center', alignItems:'center', display:'flex'}}>
                                <hr style={{width:'80%'}}/>
                                </div>
                                <br/>
                                <br/>
                                <div style={{ display: 'flex', }}>
                                    <div>
                                        <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '80%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>	Pin support :</h3>
                                        <br />
                                        <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '76%', justifyContent: 'left' }}>Restrict translation in both horizontal(x) and vertical(y) direction but allow rotation of structural member.
                                        </h3>
                                        <div style={{ marginTop: '15px' }}></div>
                                        <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '76%', justifyContent: 'left', display: 'block' }}>
                                            Pin support produces reaction forces in both horizontal
                                            (R<span className='LowerPowerminus2px sectionmodulesSolutionLowerPower' style={{ left: '-1px' }}>x</span>)
                                            , and vertical
                                            (R<span className='LowerPowerminus2px sectionmodulesSolutionLowerPower'>y</span>)
                                            reactions.
                                        </h3>
                                        <div style={{ marginTop: '15px' }}></div>
                                        <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '76%', justifyContent: 'left' }}>
                                            Commonly used in bridges, trusses, and other structures that require rotation but restrict translational movement.
                                        </h3>
                                    </div>
                                    <img src={PinnedImage} alt='' style={{ width: '19vw', height: '10vw', marginTop: '3vw' }} />

                                </div>
                                <br/>
                                <br/>
                                <div style={{justifyContent:'center', alignItems:'center', display:'flex'}}>
                                <hr style={{width:'80%'}}/>
                                </div>
                                <br/>
                                <br/>

                                <div style={{ display: 'flex', }}>
                                    <div>
                                        <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '80%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>	Roller support :</h3>
                                        <br />
                                        <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '76%', justifyContent: 'left' }}>Allows rotation and translation in horizontal (x) direction but does not allow translation in vertical (y) direction.
                                        </h3>
                                        <div style={{ marginTop: '15px' }}></div>
                                        <div style={{ marginTop: '15px' }}></div>
                                        <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '76%', justifyContent: 'left' }}>
                                            Produce only vertical reaction (R<span className='LowerPowerminus2px sectionmodulesSolutionLowerPower'>y</span>).
                                        </h3>
                                        <div style={{ marginTop: '15px' }}></div>
                                        <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '76%', justifyContent: 'left' }}>
                                            Used in bridges and large structures which allows thermal expansion and contraction to distribute the load.
                                        </h3>
                                    </div>
                                    <img src={RollerImage} alt='' style={{ width: '19vw', height: '10vw', marginTop: '3vw' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
