import React, { useState } from 'react'

export default function PadeyeInputParametersDropDown() {

    const [PadeyeInputParametersDropDown, setPadeyeInputParametersDropDown] = useState(false);

    const TogglePadeyeInputParametersDropDown = () => {
        setPadeyeInputParametersDropDown(!PadeyeInputParametersDropDown);
    };
    
    return (
        <>

            <div className='DropDownMainDiv'
                style={{
                    padding: '2% 4%',
                    margin: 'auto',
                    width: '80%',
                    background: 'rgb(247 247 247)',
                    borderRadius: '12px',
                }}
            >
                <h3 className='calculator-info-blue-section-main-topic InnerDropDownHeading' style={{
                    padding: '0',
                    margin: 'auto',
                    width: '100%',
                    justifyContent: 'left',
                    textTransform: 'uppercase',
                    fontWeight: '600',
                    fontSize: '3vw !important',
                    important: true
                }}>
                    Input parameters :
                </h3>
                <button
                    className='gbp-h3 structure-analysis-calculator-information-h3-button-Discovermore InnerDropDownBtn'
                    onClick={TogglePadeyeInputParametersDropDown}
                    style={{ margin: '0.8vw 0', background: '#fff' }}
                >Discover more</button>
            </div>
            <br />
            <br />

            <div className={PadeyeInputParametersDropDown ? ' Padeye-InputParameters-DropDown active ' : ' Padeye-InputParameters-DropDown '}>
                <br />
                <br />
                <br />
                <h3 className='calculator-info-blue-section-main-topic MainHeadingOfDropdown' style={{
                    padding: '0',
                    margin: 'auto',
                    width: '90%',
                    justifyContent: 'left',
                    textTransform: 'uppercase',
                    fontWeight: '600',
                    fontSize: '3.6vw',
                    important: true,
                }}>
                    PADEYE MATERIAL PARAMETER :
                </h3>
                <br />

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', width: '100%', margin: 'auto' }}>

                    <div>
                        <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>Yield Strength : </h3>
                        <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>Stress at which material start deform plastically (permanent changes in shape even after the load is removed).</h3>
                        <br />
                        <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>Tensile Strength :</h3>
                        <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>Maximum amount of tensile stress that a material can sustain before failure.</h3>
                        <br />
                        <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>Modulus of elasticity :</h3>
                        <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>Material property which indicates how much a material will deform when subjected to load. Materials having high elastic modulus can resist deformation more effectively, while with a low elastic modulus are more flexible and deform more easily under the same load.</h3>
                        <br />
                    </div>
                </div>
                <br />
                <h3 className='calculator-info-blue-section-main-topic MainHeadingOfDropdown'  style={{
                    padding: '0',
                    margin: 'auto',
                    width: '90%',
                    justifyContent: 'left',
                    textTransform: 'uppercase',
                    fontWeight: '600',
                    fontSize: '3.6vw',
                    important: true,
                }}>
                    WELDING PARAMETERSs :
                </h3>
                <br />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', width: '100%', margin: 'auto' }}>
                    <div>
                        <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>Weld Leg Size
                            (
                            <span className='power' style={{ fontSize: '1.5vw', top: '0vw', color: '#000' }}> t</span>
                            <span className='LowerPower' style={{ color: '#000', fontWeight: '700' }}>wc </span>

                            )
                            :
                        </h3>
                        <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>The length of each side of the triangular cross-section of a fillet weld, measured from the root of the weld (where the two pieces of metal meet) to the toe (the outermost point of the weld) on each side.</h3>
                        <br />
                    </div>
                </div>

                <br />
                <br />
                <h3 className='calculator-info-blue-section-main-topic MainHeadingOfDropdown' style={{
                    padding: '0',
                    margin: 'auto',
                    width: '90%',
                    justifyContent: 'left',
                    textTransform: 'uppercase',
                    fontWeight: '600',
                    fontSize: '3.6vw',
                    important: true,
                }}>
                    padeye load parameters :
                </h3>
                <br />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', width: '100%', margin: 'auto' }}>

                    <div>
                        <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>Angle of load with vertical (
                            
                            <span className='power' style={{ fontSize: '1.5vw', top: '2px', color: '#000', padding: '0px 0px',fontWeight: '500' }}> θ </span>

                            ) 
                            : </h3>
                        <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>Angle of sling with respect to padeye in a plane parallel to the padeye.</h3>
                        <br />
                        <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>Out of plane angle
                            (
                                
                            <span className='power' style={{ fontSize: '1.5vw', top: '2px', color: '#000', padding: '0px 0px',fontWeight: '500' }}>Φ</span>

                            )
                             :</h3>
                        <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>Angle of sling with respect to padeye in a plane perpendicular to the padeye.</h3>
                        <br />
                        <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>Dynamic load factor
                            (
                                
                                <span className='power' style={{ fontSize: '1.5vw', top: '2px', color: '#000', fontFamily: "'Kanit', sans-serif !important", fontWeight: '700' }}>  DLF</span>
                            <span className='LowerPower' style={{ color: '#000', fontWeight: '700' }}></span>

                            ) 
                            : </h3>
                        <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>Used to account for the dynamic forces that can be experienced by a padeye due to sudden accelerations, decelerations, and other dynamic forces that can significantly increase the stresses on the padeye beyond the static load during a lifting operation.</h3>
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        </>
    )
}
