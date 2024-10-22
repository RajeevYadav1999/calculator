import React, { useState } from 'react';

import Areaimg from '../../Screenshot (165).jpg'

export default function BendingMoment() {
    const [isActive, setIsActive] = useState(true);

    const toggleClass = () => {
        setIsActive(!isActive);
    };
    return (
        <>
            <section className='structure-analysis-calculator-formula-dropdown-section'>
                <div className='mae-cad-info-second-section-main-grid-explore-more-grid'>
                    <div className='calculator-Area '>
                        <div className='calculator-area-overlay'></div>
                        <h3 className='gbp-h3 structure-analysis-calculator-information-h3'>Bending Moment:</h3>
                        <br />
                        <h3 className='gbp-h3 structure-analysis-calculator-information-h3 defination'>
                            Measure of the internal bending forces experienced within a structural member, such as a beam or column, when subjected to external loads or moments.
                        </h3>
                        <br />
                        <button className='gbp-h3 structure-analysis-calculator-information-h3-button-Discovermore' onClick={toggleClass}>Discover more</button>
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
                <h3 className='calculator-defination-section third-important' style={{ color: '#000', textTransform: 'uppercase' }}>
                    Formula
                </h3>
                <br />
                <h3 className='calculator-defination-section third-important' style={{ textAlign: 'center', width: '54%', color: '#1d1d1dbf' }}>
                    M=∑F×d
                </h3>
                <br />
                <br />
                <br />
                <h3 className='calculator-defination-section third-important' style={{ color: '#000', textTransform: 'uppercase' }}>
                    where
                </h3>
                <br />
                <h3 className='calculator-defination-section third-important' style={{ textAlign: 'left', width: '62%', color: '#1d1d1dbf' }}>
                    M = Bending moment at the point (in units of force times distance)
                </h3>
                <h3 className='calculator-defination-section third-important' style={{ textAlign: 'left', width: '62%', color: '#1d1d1dbf' }}>
                    F = Applied force perpendicular to the beam axis
                </h3>
                <h3 className='calculator-defination-section third-important' style={{ textAlign: 'left', width: '62%', color: '#1d1d1dbf' }}>
                    d = Perpendicular distance from the point to the line of action of the force
                </h3>
                <h3 className='calculator-defination-section third-important' style={{ textAlign: 'left', width: '62%', color: '#1d1d1dbf' }}>
                    SI unit of bending moment is a Newton meter (Nm)
                </h3>

                <br />
                <br />
                <br />
                <div className={isActive ? 'mae-calculator-info ' : 'mae-calculator-info  active'} style={{ border: '2px solid', borderRadius: '30px'}}>
                    <br />
                    <br />
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <dot />
                            <hr style={{ height: '11.8vw', border: '1px solid' }} />
                            <dot />
                        </div>
                        <div>
                            <h3 className='calculator-info-blue-section-main-topic' style={{ padding: '0', margin: 'auto', width: '80%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>Sign convention: </h3>
                            <h3 className='calculator-info-blue-section-main-topic' style={{ padding: '0', margin: 'auto', width: '80%', justifyContent: 'left' }}>Sign convention helps to determine the type of bending (sagging or hogging) at a given section of the beam. Bending moments are considered positive when they cause concave bending on the top of the beam called sagging and convex bending on the bottom of the beam called hogging. </h3>
                            <br />
                            <h3 className='calculator-info-blue-section-main-topic' style={{ padding: '0', margin: 'auto', width: '80%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>Bending moment diagram:</h3>
                            <h3 className='calculator-info-blue-section-main-topic' style={{ padding: '0', margin: 'auto', width: '80%', justifyContent: 'left' }}>Graphical representation of how the bending moment varies along the length of the structural member. Plotted between the length of the member along the horizontal axis and the magnitude of the bending moment along the vertical axis. Bending moment diagrams are essential for analysing the behavior of the member under load and for designing structures to resist bending stresses.</h3>
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </section>
            <br/>
            <br/>
            <br/>
        </>
    )
}
