import React, { useEffect, useState, useRef } from 'react';

// import ShackelBlackBoxImg from '../../padeye calcultor/padeye calcultor/New folder/New folder/G5263-01.jpg'
import ShackelBlackBoxImg from '../../Padeyeimages/G5263-01-removebg-preview (1)/G5263-01-removebg-preview (1).png'
// import ShackelBlackBoxImg from '../../Padeyeimages/G5263-01-removebg-preview/G5263-01-removebg-preview.png'
// import ShackelBlackBoxImg from '../../Padeyeimages/New folder/New folder/G5263-01.jpg'
import InputParametersInShackle from './InputParametersInShackle';

export default function Shackle() {
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
                        <h3 className={`gbp-h3 structure-analysis-calculator-information-h3 ${isVisible ? 'scrolled' : ''}`}>Shackle:</h3>
                        <br ref={textRef} />
                        <h3 className={`gbp-h3 structure-analysis-calculator-information-h3 defination ${isVisible ? 'scrolled' : ''}`}>
                            U-shaped, load-bearing connecting device designed to be strong, durdable, and capable of withstanding high stress and loads. Shackles are typically made of metal, and they come in a variety of shapes and sizes.
                        </h3>
                        <br />
                        <button className={`gbp-h3 structure-analysis-calculator-information-h3-button-Discovermore ${isVisible ? 'scrolled' : ''}`} onClick={handleCombinedClick}>Discover more</button>
                        <br /><br />
                    </div>
                    <div>
                        <img className='structure-analysis-calculator-formula-dropdown-section-img areaimg' src={ShackelBlackBoxImg} alt='' />
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div className={isActive ? 'mae-calculator-info PadeyeDropDown ' : 'mae-calculator-info PadeyeDropDown  active'} style={{ border: '2px solid', borderRadius: '30px' }} ref={targetRef}>
                    <br />
                    <br />
                    <br />
                    <div>
                        <InputParametersInShackle />
                        <br />
                        <h3 className='calculator-info-blue-section-main-topic MainHeadingOfDropdown' style={{ padding: '0', margin: 'auto', width: '90%', justifyContent: 'left', textTransform: 'uppercase', fontWeight: '600', fontSize: '3.6vw', important: true }}>
                            Shackles are used in a wide variety of applications, including :
                        </h3>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                            <div>
                                <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>Lifting and rigging : </h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>Shackles are used to lift and move heavy objects. They are typically used with other lifting equipment, such as cranes and hoists.</h3>
                                <br />
                                <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>Towing :</h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>Shackles are used to tow vehicles and other objects. They are typically used in conjunction with chains or tow straps.</h3>
                                <br />
                                <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>Securing :</h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>Shackles are used to secure objects in place. They are typically used to secure cargo, equipment, and livestock.</h3>
                                <br />
                            </div>
                        </div>


                        <br />
                        <h3 className='calculator-info-blue-section-main-topic MainHeadingOfDropdown' style={{ padding: '0', margin: 'auto', width: '90%', justifyContent: 'left', textTransform: 'uppercase', fontWeight: '600', fontSize: '3.6vw', important: true }}>
                            Choosing the Right Shackle :
                        </h3>
                        <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '90%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>
                            When choosing a shackle, it is essential to consider the following factors:
                        </h3>

                        <br />
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                            <div>
                                <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>Load capacity : </h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>Shackle swl (Safe Working Load) should be higher than the weight of the load.</h3>
                                <br />
                                <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>Type of load :</h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>Shackle must be compatible with the type of load. For example, a chain shackle should not be used to tow a vehicle.</h3>
                                <br />
                                <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>Environmental Conditions :</h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>Shackle must withstand the environment in which it will be used. For example, a shackle used in a marine environment must be made of stainless steel.</h3>
                                <br />
                                <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>Price :</h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>Shackles can range from a few dollars to hundreds of dollars. It is vital to choose a shackle that fits your budget.</h3>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
