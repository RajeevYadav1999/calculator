import React, { useEffect, useState, useRef } from 'react';
import Areaimg from '../../padeye calcultor/padeye calcultor/New folder/New folder/1.jpeg'

export default function Slings() {
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
                        <h3 className={`gbp-h3 structure-analysis-calculator-information-h3 ${isVisible ? 'scrolled' : ''} `}>Slings:</h3>
                        <br ref={textRef} />
                        <h3 className={`gbp-h3 structure-analysis-calculator-information-h3 defination ${isVisible ? 'scrolled' : ''} `}>
                            Essential component designed to move large and heavy loads that would be extremely difficult or impossible to move manually.
                        </h3>
                        <br />
                        <button className={`gbp-h3 structure-analysis-calculator-information-h3-button-Discovermore ${isVisible ? 'scrolled' : ''} `} onClick={handleCombinedClick}>Discover more</button>
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
                <div className={isActive ? 'mae-calculator-info PadeyeDropDown  ' : 'mae-calculator-info PadeyeDropDown   active'} style={{ border: '2px solid', borderRadius: '30px' }} ref={targetRef}>
                    <br />
                        <br />
                    <div>
                        <h3 className='calculator-info-blue-section-main-topic MainHeadingOfDropdown' style={{ padding: '0', margin: 'auto', width: '90%', justifyContent: 'left', textTransform: 'uppercase', fontWeight: '600', fontSize: '3.6vw', important: true }}>
                            Input parameter :
                        </h3>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start'}}>
                        <div style={{width:'100%'}}>
                                <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>Sling diameter (

                                    <span className='power' style={{ fontSize: '1.5vw', top: '-0.1vw', color: '#000', fontFamily: "'Kanit', sans-serif !important", fontWeight: '700' }}>  D</span>
                                    <span className='LowerPower' style={{ color: '#000', fontWeight: '700' }}>sling </span>

                                    ) : </h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>Sling diameter directly influences the strength and its load-bearing capacity</h3>
                                <br />

                            </div>
                        </div>


                        <br />
                        <h3 className='calculator-info-blue-section-main-topic MainHeadingOfDropdown' style={{ padding: '0', margin: 'auto', width: '90%', justifyContent: 'left', textTransform: 'uppercase', fontWeight: '600', fontSize: '3.6vw', important: true }}>
                            Factor affecting sling selection :
                        </h3>

                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                            <div>
                                <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>Weight of the Load : </h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>Sling has a specific load-carrying capacity. Always ensure the selected sling’s capacity exceeds the load weight.</h3>
                                <br />
                                <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>Sling angle :</h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>As the angle decreases form, the tension on sling increases, which could potentially exceed the sling's rated capacity and cause a failure. Sling angle should not be less than 60deg.</h3>
                                <br />
                                <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>Type of Lift :</h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>Nature of the lift, such as vertical, choker, or basket lift, also affects sling selection. Each type has different load capacities and application methods suited to specific lifting scenarios.</h3>
                                <br />
                                <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>Environmental Conditions :</h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>Environmental factors, such as temperature, chemicals, and moisture, can impact the material properties of the sling.</h3>
                                <br />
                            </div>
                        </div>

                        <br />
                        <h3 className='calculator-info-blue-section-main-topic MainHeadingOfDropdown' style={{ padding: '0', margin: 'auto', width: '90%', justifyContent: 'left', textTransform: 'uppercase', fontWeight: '600', fontSize: '3.6vw', important: true }}>
                            Sling Material :
                        </h3>

                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                            <div style={{width:'100%'}}>
                                <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>Wire Rope Slings : </h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>Suitable for heavy-duty applications, high strength, and resistance to abrasion and heat.</h3>
                                <br />
                                <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>Chain Slings :</h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>Durable, adjustable, ideal for high-temperature environments and rugged conditions.</h3>
                                <br />
                                <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>Synthetic Slings (
                                    <span className='power' style={{ fontSize: '1.5vw', top: '1px', color: '#000', fontFamily: "'Kanit', sans-serif !important", fontWeight: '700' }}>  Nylon and Polyester</span>

                                    ) :</h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>Lightweight, flexible, and non-conductive. Nylon slings absorb shock loads but are susceptible to chemical damage. Polyester slings are resistant to most chemicals and UV light.</h3>
                                <br />
                                <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>Metal Mesh Slings :</h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>High temperature and abrasion resistance, good for handling abrasive materials.</h3>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
