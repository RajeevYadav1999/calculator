import React, { useEffect, useState, useRef } from 'react';

import Areaimg from '../Screenshot (165).jpg'
import SquareImg from '../images/images/centroid/square.png'
import ReactangleImg from '../images/images/centroid/rectangle.png'
import HollowReactangleImg from '../images/images/centroid/hollow rect.png'
import TsectionImg from '../images/images/centroid/t section.png'
import Cchannelimg from '../images/images/centroid/c channel.png'
import Isection from '../images/images/centroid/i section.png'
import Langle from '../images/images/centroid/l angle.png'
import Circle from '../images/images/centroid/circle.png'
import HollowCircle from '../images/images/centroid/hollow circle.png'

export default function Centroid() {
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
                        <h3 className={`gbp-h3 structure-analysis-calculator-information-h3 ${isVisible ? 'scrolled' : ''}`}   >Centroid:</h3>
                        <br ref={textRef} />
                        <h3 className={`gbp-h3 structure-analysis-calculator-information-h3 defination ${isVisible ? 'scrolled' : ''}`} >Center of mass for the geometric shape
                            or point within the section where the area could be
                            balanced without any rotation.
                        </h3>
                        <br />
                        <button className={`gbp-h3 structure-analysis-calculator-information-h3-button-Discovermore ${isVisible ? 'scrolled' : ''}`}  onClick={handleCombinedClick}>Discover more</button>
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
                What are the significances of centroid:
                </h3>
                <br />
                <h3 className='calculator-defination-section second-important' style={{ marginTop:'15px' }}>
                    Used to Calcualte the moments of inertia.
                </h3>
                <h3 className='calculator-defination-section third-important' style={{ margin: '10px 0px' }}>
                    Centroid is crucial for designing stable structures.
                </h3>
                <h3 className='calculator-defination-section third-important'>
                    Determining the location of the neutral axis of section or member.
                </h3>
                <br />
                <br />
                <br />
                <h3 className='calculator-defination-section third-important heading' style={{ fontSize: '2vw', textTransform: 'uppercase' }}>
                What are the inputs to calculate centroid?
                </h3>
                <h3 className='calculator-defination-section third-important' style={{ marginTop:'15px' }}>
                    Dimensions of cross-sections
                </h3>
                <br />
                <br />
                <br />
                <h3 className='calculator-defination-section third-important heading' style={{ fontSize: '2vw', textTransform: 'uppercase' }}>
                How to calculate the centroid of section?
                </h3>
                <h3 className='calculator-defination-section third-important' style={{ marginTop:'15px' }}>
                Centroid of various section can be calculated by using these formula:
                </h3>

                <br />
                <br ref={targetRef}/>
                <br />
                <br />
                <div className={isActive ? 'mae-calculator-info ' : 'mae-calculator-info  active'}>
                    <br />
                    <br />
                    <br />
                    <table className='structure-analysis-calculator-formula-dropdown-section-formula-data' style={{ width: '90%' }}>
                        <tr>

                            <td style={{ width: '30%' }}>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px '>Cross Section Shape</h3>
                            </td>
                            <td style={{ width: '40%' }}>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px '>Formula</h3>
                            </td>
                            <td style={{ width: '30%' }}>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px '>Section Name</h3>
                            </td>

                        </tr>
                        <tr>

                            <td >
                                <img src={SquareImg} className='structure-analysis-calculator-formula-dropdown-section-img' alt='' />

                            </td>
                            <td >
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px formula-text'>
                                    Y
                                    <span className='LowerPowerminus2px'>c</span>
                                    <span className='equalesto'>=</span>
                                    X
                                    <span className='LowerPower'>c</span>
                                    <span className='equalesto'>=</span>
                                    <span>a<hr />2</span>
                                </h3>
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
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px formula-text'>
                                    x
                                    <span className='LowerPower'>
                                        c
                                    </span>
                                    <span className='equalesto'>=</span>

                                    <span>
                                        b
                                        <hr></hr>
                                        2
                                    </span>
                                </h3>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px formula-text'>
                                    y
                                    <span className='LowerPowerminus2px'>
                                        c
                                    </span>
                                    <span className='equalesto'>=</span>

                                    <span>
                                        d
                                        <hr></hr>
                                        2
                                    </span>
                                </h3>
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
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px formula-text'>
                                    x
                                    <span className='LowerPower'>
                                        c
                                    </span>
                                    <span className='equalesto'>=</span>

                                    <span>
                                        b
                                        <hr></hr>
                                        2
                                    </span>
                                </h3>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px formula-text'>
                                    y
                                    <span className='LowerPowerminus2px'>
                                        c
                                    </span>
                                    <span className='equalesto'>=</span>

                                    <span>
                                        d
                                        <hr></hr>
                                        2
                                    </span>
                                </h3>
                            </td>
                            <td>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px '>Hollow rectangle</h3>
                            </td>

                        </tr>

                        <tr>
                            <td>
                                <img src={TsectionImg} className='structure-analysis-calculator-formula-dropdown-section-img' alt='' />
                            </td>
                            <td>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px formula-text'>
                                    y
                                    <span className='LowerPowerminus2px'>c</span>
                                    <span className='equalesto'>=</span>
                                    <span style={{ textAlign: 'center' }} >
                                        (b.t
                                        <span className='power'>2</span>
                                        +t
                                        <span className='LowerPowerminus2px'>w</span>
                                        .d(2t+d))
                                        <hr />
                                        2(t.b+t
                                        <span className='LowerPowerminus2px'>w</span>
                                        .d)
                                    </span>
                                </h3>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px formula-text'>
                                    x
                                    <span className='LowerPower'>c</span>
                                    <span className='equalesto'>=</span>
                                    <span style={{ textAlign: 'center' }}>
                                        b
                                        <hr />
                                        2
                                    </span>
                                </h3>
                            </td>
                            <td>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px '>Tee section</h3>
                            </td>

                        </tr>

                        <tr>
                            <td>
                                <img src={Cchannelimg} className='structure-analysis-calculator-formula-dropdown-section-img' alt='' />
                            </td>
                            <td>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px formula-text'>
                                    y
                                    <span className='LowerPowerminus2px'>c</span>
                                    <span className='equalesto'>=</span>
                                    <span style={{ textAlign: 'center' }}>
                                        <span>
                                            (b.t
                                            <span className='power'>2</span>
                                            +2t
                                            <span className='LowerPowerminus2px'>w</span>
                                            .d(2t+d))
                                        </span>
                                        <span>
                                            <hr />
                                        </span>
                                        <span>
                                            2(t.b+2t
                                            <span className='LowerPowerminus2px'>w</span>
                                            .d)
                                        </span>
                                    </span>
                                </h3>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px formula-text'>
                                    x
                                    <span className='LowerPower'>c</span>
                                    <span className='equalesto'>=</span>
                                    <span style={{ textAlign: 'center' }}>
                                        b
                                        <hr />
                                        2
                                    </span>
                                </h3>
                            </td>
                            <td>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px '>Channel section</h3>
                            </td>

                        </tr>

                        <tr>
                            <td>
                                <img src={Isection} className='structure-analysis-calculator-formula-dropdown-section-img' alt='' />
                            </td>
                            <td>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px formula-text'>
                                    y
                                    <span className='LowerPowerminus2px'>c</span>
                                    <span className='equalesto'>=</span>
                                    <span style={{ textAlign: 'center' }}>
                                        d
                                        <hr />
                                        2+t
                                    </span>
                                </h3>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px formula-text'>
                                    x
                                    <span className='LowerPower'>c</span>
                                    <span className='equalesto'>=</span>
                                    <span style={{ textAlign: 'center' }}>
                                        b
                                        <hr />
                                        2
                                    </span>
                                </h3>
                            </td>
                            <td>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px '>I section</h3>
                            </td>

                        </tr>

                        <tr>
                            <td>
                                <img src={Langle} className='structure-analysis-calculator-formula-dropdown-section-img' alt='' />
                            </td>
                            <td>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px formula-text'>
                                    y
                                    <span className='LowerPowerminus2px'>c</span>
                                    <span className='equalesto'>=</span>
                                    <span>
                                        (d
                                        <span className='power'>2</span>
                                        +b.t−t
                                        <span className='power'>2</span>
                                        ) <hr /> (2.(b+d−t))
                                    </span>
                                </h3>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px formula-text'>
                                    x
                                    <span className='LowerPower'>c</span>
                                    <span className='equalesto'>=</span>
                                    <span>
                                        (b
                                        <span className='power'>2</span>
                                        +d.t−t
                                        <span className='power'>2</span>
                                        ) <hr /> (2.(b+d−t))
                                    </span>
                                </h3>
                            </td>
                            <td>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px '>L section</h3>
                            </td>

                        </tr>

                        <tr>
                            <td>
                                <img src={Circle} className='structure-analysis-calculator-formula-dropdown-section-img' alt='' />
                            </td>
                            <td>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px  formula-text'>
                                    Y
                                    <span className='LowerPowerminus2px'>c</span>
                                    <span className='equalesto'>=</span>
                                    X
                                    <span className='LowerPower'>c</span>
                                    <span className='equalesto'>=</span>
                                    R
                                </h3>
                            </td>
                            <td>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px '>Circle</h3>
                            </td>

                        </tr>

                        <tr>
                            <td>
                                <img src={HollowCircle} className='structure-analysis-calculator-formula-dropdown-section-img' alt='' style={{
                                        width: '21vw',
                                        height: '18vw',
                                }} />
                            </td>
                            <td>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px formula-text'>
                                    Y
                                    <span className='LowerPowerminus2px'>c</span>
                                    <span className='equalesto'>=</span>
                                    X
                                    <span className='LowerPower'>c</span>
                                    <span className='equalesto'>=</span>
                                    R
                                </h3>
                            </td>
                            <td>
                                <h3 className='calculator-info-blue-section-main-topic margin-bottom-10px '>Hollow circle</h3>
                            </td>

                        </tr>
                    </table>
                <br />
                <br />
                </div>
                <h3 className='calculator-defination-section first-important heading' style={{ fontSize: '2vw', textTransform: 'uppercase' }}>
                What are the units of centroid?
                </h3>
                <h3 className='calculator-defination-section second-important' style={{ marginTop:'15px' }}>
                S.I Units of centroid is mm.
                </h3>
                <h3 className='calculator-defination-section second-important' style={{ marginTop:'15px' }}>
                Imperial of centroid is in.
                </h3>
                <br />
                <br />
                <br />
            </section>
        </>
    )
}
