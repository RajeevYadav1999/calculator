import React, { useEffect, useState, useRef } from 'react';

// import PadeyeBlackbox from '../../padeye calcultor/padeye calcultor/New folder/New folder/Padeye-Lift-Lug-PE0650.jpg'
import PadeyeBlackbox from '../../Padeyeimages/Padeye-Lift-Lug-PE0650-removebg-preview/Padeye-Lift-Lug-PE0650-removebg-preview.png'
// import PadeyeBlackbox from '../../Padeyeimages/New folder/New folder/Padeye-Lift-Lug-PE0650.jpg'
import PadeyeInputParametersDropDown from './PadeyeInputParametersDropDown';
import OutputparametersDropDown from './OutputparametersDropDown';
import Shackle from './Shackle';
import Slings from './Slings';

export default function Padeye() {
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
                        <h3 className={`gbp-h3 structure-analysis-calculator-information-h3 ${isVisible ? 'scrolled' : ''}`} >Pad-Eye:</h3>
                        <br ref={textRef} />
                        <h3 className={`gbp-h3 structure-analysis-calculator-information-h3 defination ${isVisible ? 'scrolled' : ''}`} >
                            Consist of main plate having hole and with or without occasional ring stiffeners (cheek plate)
                            welded to the main plate.

                        </h3>
                        <br />
                        <button className={`gbp-h3 structure-analysis-calculator-information-h3-button-Discovermore ${isVisible ? 'scrolled' : ''}`}  onClick={handleCombinedClick}>Discover more</button>
                        <br /><br />
                    </div>
                    <div>
                        <img className='structure-analysis-calculator-formula-dropdown-section-img areaimg' src={PadeyeBlackbox} alt='' />
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
                        <h3 className='calculator-info-blue-section-main-topic MainHeadingOfDropdown' style={{ padding: '0', margin: 'auto', width: '90%', justifyContent: 'left', textTransform: 'uppercase', fontWeight: '600', fontSize: '3.6vw', important: true }}>
                            Factors affecting pad-eye selection are :
                        </h3>
                        <br />
                        <br />

                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                            <div>
                                <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>Load Capacity: </h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>For single point lift padeye load capacity should be exceeded then the total weight of the load. For multi-point, the load capacity of total number of padeye should be exceeded then the total weight of the load.</h3>
                                <br />
                                <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>Material Selection:</h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>Padeye material must be crossive resistant, ductile, and have good strength and durability.</h3>
                                <br />
                                <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>Shackle Compatibility:</h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>SWL (Safe Working Load) of the shackle should equal or exceed the SWL of the padeye. Padeye hole diameter must match the shackle pin diameter, with a clearance not exceeding 6% of the pin diameter.</h3>
                                <br />
                                <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>Weld Type and Size:</h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>The type and size of welds must be suitable to handle the load that will be applied to the padeye. Welds must be designed to distribute stress evenly and avoid creating weak points.</h3>
                                <br />
                                <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>Lift Configuration:</h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>Types of lift, such as straight lifting or multi-point lifts, will affect the padeye design. Such as vertical padeyes are used for straight lifts, while angular designs may be needed for multi-point lifts to prevent lateral bending moments.</h3>
                                <br />
                            </div>
                        </div>
                        <br />
                        <br />

                        <h3 className='calculator-info-blue-section-main-topic MainHeadingOfDropdown' style={{ padding: '0', margin: 'auto', width: '90%', justifyContent: 'left', textTransform: 'uppercase', fontWeight: '600', fontSize: '3.6vw', important: true }}>
                            Applications of pad-eye :
                        </h3>
                        <br />

                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                            <div>
                                <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>Lifting and Rigging Operation: </h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>Padeyes are used for lifting heavier or complex loads. Designed to withstand the forces associated during lifting. </h3>
                                <br />
                                <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>Towing & Mooring:</h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>Padeyes are used for towing vessel or securing them at docks.</h3>
                                <br />
                                <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>Securing Cargo:</h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>Padeyes on decks serve as attachment points for cargo and preventing movement it during transportation and ensuring goods are transported safely.</h3>
                                <br />
                            </div>
                        </div>
                        <br />
                        <br />
                        <PadeyeInputParametersDropDown />
                        <br />
                        <br />
                        <OutputparametersDropDown />

                    </div>

                </div>
            </section>
            <hr class="Beam-properties-calculator-hr"></hr>
            <br />
            <br />
            <br />
            <Shackle />
            <br />
            <br />
            <br />
            <hr class="Beam-properties-calculator-hr"></hr>
            <br />
            <br />
            <br />
            <Slings />
        </>
    )
}
