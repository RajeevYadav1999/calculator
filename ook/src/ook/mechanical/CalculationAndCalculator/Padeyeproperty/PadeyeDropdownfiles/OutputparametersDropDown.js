import React, { useState } from 'react'
import BearingStressImg from '../../padeye calcultor/padeye calcultor/padeye/padeye/bearing stress.png'
import HertzStressImg from '../../padeye calcultor/padeye calcultor/padeye/padeye/hertz stress.png'
import ShearStressImg from '../../padeye calcultor/padeye calcultor/padeye/padeye/shear stress.png'
// import ShearStressImg from '../../padeye cal/padeye cal/padeye/padeye/shear stress.png'
import TensilestressareaImg from '../../padeye calcultor/padeye calcultor/padeye/padeye/tensile stress area.png'
// import TensilestressareaImg from '../../padeye cal/padeye cal/padeye/padeye/tensile stress area.png'
export default function OutputparametersDropDown() {

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
                    fontSize: '3vw',
                    important: true
                }}>
                    Output parameters :
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
                    important: true,
                    fontSize: '3.6vw',
                }}>
                    Output parameters :
                </h3>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', width: '100%', margin: 'auto' }}>
                    <div>
                        <div style={{ display: 'flex', }}>
                            <div>
                                <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '80%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>Bearing stress

                                    (
                                    <span className='power' style={{ fontSize: '1.5vw', top: '0', color: '#000', fontFamily: "'Kanit', sans-serif !important", fontWeight: '100' }}>  σ</span>
                                    <span className='LowerPower' style={{ color: '#000', fontWeight: '700' }}>b </span>
                                    )
                                    : </h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '80%', justifyContent: 'left' }}>Stress induced between the surface of the pin and the inner surface of the hole due to point contact.</h3>

                                <br />
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '80%', justifyContent: 'left' }}>Allowable values for bearing stresses are:</h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '80%', justifyContent: 'left' }}>Allowable bearing stress:
                                    <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <span className='power' style={{ marginLeft: '5px', fontSize: '1.5vw', top: '0', color: '#000', fontFamily: "'Kanit', sans-serif !important", fontWeight: '100' }}> σ</span>
                                        <span className='LowerPower' style={{ color: '#000', fontWeight: '700' }}>be(allow) </span>
                                        <span style={{ margin: '5px', }}>=</span>
                                        <span style={{ fontSize: '1.4vw', }}>0.9</span>

                                        <span style={{ margin: '5px', }}>x</span>

                                        <span className='power' style={{ fontSize: '1.5vw', top: '0', color: '#000', fontFamily: "'Kanit', sans-serif !important", fontWeight: '100' }}> σ</span>
                                        <span className='LowerPower' style={{ color: '#000', fontWeight: '700' }}>y</span>
                                        <span className='' style={{ marginLeft: '5px', color: '#000', fontWeight: '700' }}>(Mpa) </span>
                                        <span style={{ margin: '5px', }}></span>

                                    </span>
                                </h3>
                            </div>
                            <img src={BearingStressImg} alt='' style={{ width: '25vw', height: '15vw' }} />
                        </div>



                        <br />
                        <div style={{ display: 'flex', }}>
                            <div>
                                <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '80%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>Tensile stress
                                    (
                                    <span className='power' style={{ fontSize: '1.5vw', top: '-2px', color: '#000', fontFamily: "'Kanit', sans-serif !important", fontWeight: '100' }}>  σ</span>
                                    <span className='LowerPower' style={{ color: '#000', fontWeight: '700' }}>t </span>
                                    )
                                    :
                                </h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '80%', justifyContent: 'left' }}>When load is lifting with the help of padeye. padeye experiences a tensile force due to the load of the component and the sling connected to padeye. This tensile force creates stress within the material of the padeye. The cheek plates are not included in this stress calculation</h3>
                            </div>
                            <br />
                            <img src={TensilestressareaImg} alt='' style={{ width: '25vw', height: '15vw' }} />
                        </div>
                        <br />
                        <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>Allowable values for tensile stresses are:</h3>
                        <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>Allowable tensile stress:
                            <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <span className='power' style={{ marginLeft: '5px', fontSize: '1.5vw', top: '0', color: '#000', fontFamily: "'Kanit', sans-serif !important", fontWeight: '100' }}> σ</span>
                                <span className='LowerPower' style={{ color: '#000', fontWeight: '700' }}>t(allow) </span>
                                <span style={{ margin: '5px', }}>=</span>
                                <span style={{ fontSize: '1.4vw', }}>0.6</span>

                                <span style={{ margin: '5px', }}>x</span>

                                <span className='power' style={{ fontSize: '1.5vw', top: '0', color: '#000', fontFamily: "'Kanit', sans-serif !important", fontWeight: '100' }}> σ</span>
                                <span className='LowerPower' style={{ color: '#000', fontWeight: '700' }}>y</span>
                                <span className='' style={{ marginLeft: '5px', color: '#000', fontWeight: '700' }}>(Mpa) </span>
                                <span style={{ margin: '5px', }}></span>

                            </span>
                        </h3>
                        <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown ' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>Allowable tensile stress at pin hole:
                            <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <span className='power' style={{ marginLeft: '5px', fontSize: '1.5vw', top: '0', color: '#000', fontFamily: "'Kanit', sans-serif !important", fontWeight: '100' }}> σ</span>
                                <span className='LowerPower' style={{ color: '#000', fontWeight: '700' }}>tp(allow) </span>
                                <span style={{ margin: '5px', }}>=</span>
                                <span style={{ fontSize: '1.4vw', }}>0.45</span>

                                <span style={{ margin: '5px', }}>x</span>

                                <span className='power' style={{ fontSize: '1.5vw', top: '0', color: '#000', fontFamily: "'Kanit', sans-serif !important", fontWeight: '100' }}> σ</span>
                                <span className='LowerPower' style={{ color: '#000', fontWeight: '700' }}>y</span>
                                <span className='' style={{ marginLeft: '5px', color: '#000', fontWeight: '700' }}>(Mpa) </span>
                                <span style={{ margin: '5px', }}></span>

                            </span>
                        </h3>
                        <br />

                        <div style={{ display: 'flex', }}>
                            <div style={{ width: '100%' }}>
                                <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '80%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>
                                    Shear stress (
                                    <span className='power' style={{ fontSize: '1.5vw', top: '0px', color: '#000', padding: '0px 5px', fontFamily: "'Kanit', sans-serif !important", fontWeight: '100' }}> τ </span>
                                    ) </h3>

                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '80%', justifyContent: 'left' }}>When the load is lifted due to lateral forces or shifting can cause the padeye to experience shear forces. These shear forces act parallel to the surface of the padeye and can result in shear stress within the material of the lug.</h3>

                                <br />
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '80%', justifyContent: 'left' }}>Allowable tensile stress:
                                    <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <span className='power' style={{ marginLeft: '5px', fontSize: '1.5vw', top: '0', color: '#000', fontFamily: "'Kanit', sans-serif !important", fontWeight: '100' }}> σ</span>
                                        <span className='LowerPower' style={{ color: '#000', fontWeight: '700' }}>s(allow) </span>
                                        <span style={{ margin: '5px', }}>=</span>
                                        <span style={{ fontSize: '1.4vw', }}>0.4</span>

                                        <span style={{ margin: '5px', }}>x</span>

                                        <span className='power' style={{ fontSize: '1.5vw', top: '0', color: '#000', fontFamily: "'Kanit', sans-serif !important", fontWeight: '100' }}> σ</span>
                                        <span className='LowerPower' style={{ color: '#000', fontWeight: '700' }}>y</span>
                                        <span className='' style={{ marginLeft: '5px', color: '#000', fontWeight: '700' }}>(Mpa) </span>
                                        <span style={{ margin: '5px', }}></span>

                                    </span>
                                </h3>
                            </div>
                            <img src={ShearStressImg} alt='' style={{ width: '25vw', height: '15vw' }} />
                        </div>
                        <br />

                        <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>When the load is not perfectly aligned with the axis of the padeye, it can induce bending moments. These bending moments can also lead to shear stress in the padeye, especially at points where the padeye is attached to the lifting apparatus.</h3>
                        <br />

                        <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>Bending stress: </h3>
                        <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>Developed at the padeye base due to lateral loads.</h3>
                        <br />
                        <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2vw' }}>Types of bending stress:</h3>
                        <br />
                        <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '80%', justifyContent: 'left', fontSize: '1.8vw', important: true }}>In plane bending stress
                            (
                            <span className='power' style={{ fontSize: '1.5vw', top: '-2px', color: '#000', fontFamily: "'Kanit', sans-serif !important", fontWeight: '100' }}>  σ</span>
                            <span className='LowerPower' style={{ color: '#000', fontWeight: '700' }}>Bd</span>
                            )
                            <span className='LowerPower' style={{ color: '#000', fontWeight: '700' }}>allow </span>

                            :
                        </h3>
                        <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '80%', justifyContent: 'left' }}>Produce when the load is applied parallel to the plane of the material.</h3>
                        <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '80%', justifyContent: 'left' }}>Allowable bending stress (in plane):
                            <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <span className='power' style={{ marginLeft: '10px', fontSize: '1.5vw', top: '0', color: '#000', fontFamily: "'Kanit', sans-serif !important", fontWeight: '100' }}> σ</span>
                                <span className='LowerPower' style={{ color: '#000', fontWeight: '700' }}>bd(allow) </span>
                                <span style={{ margin: '5px', }}>=</span>
                                <span style={{ fontSize: '1.4vw', }}>0.6</span>

                                <span style={{ margin: '5px', }}>x</span>

                                <span className='power' style={{ fontSize: '1.5vw', top: '0', color: '#000', fontFamily: "'Kanit', sans-serif !important", fontWeight: '100' }}> σ</span>
                                <span className='LowerPower' style={{ color: '#000', fontWeight: '700' }}>y</span>
                                <span className='' style={{ marginLeft: '5px', color: '#000', fontWeight: '700' }}>(Mpa) </span>
                                <span style={{ margin: '5px', }}></span>

                            </span>
                        </h3>
                        <br />
                        <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '80%', justifyContent: 'left', fontSize: '1.8vw', important: true }}>Out of plane bending stress
                            (<span className='power' style={{ fontSize: '1.5vw', top: '-2px', color: '#000', fontFamily: "'Kanit', sans-serif !important", fontWeight: '100' }}>  σ</span>
                            <span className='LowerPower' style={{ color: '#000', fontWeight: '700' }}>Bdo</span>
                            )
                            <span className='LowerPower' style={{ color: '#000', fontWeight: '700' }}>allow </span>
                            :
                        </h3>
                        <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '80%', justifyContent: 'left' }}>Produce when the load is applied perpendicular to the plane of the material.</h3>

                        <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '80%', justifyContent: 'left' }}>Allowable bending stress (out of plane):
                            <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <span className='power' style={{ marginLeft: '10px', fontSize: '1.5vw', top: '0', color: '#000', fontFamily: "'Kanit', sans-serif !important", fontWeight: '100' }}> σ</span>
                                <span className='LowerPower' style={{ color: '#000', fontWeight: '700' }}>bo(allow) </span>
                                <span style={{ margin: '5px', }}>=</span>
                                <span style={{ fontSize: '1.4vw', }}>0.75</span>

                                <span style={{ margin: '5px', }}>x</span>

                                <span className='power' style={{ fontSize: '1.5vw', top: '0', color: '#000', fontFamily: "'Kanit', sans-serif !important", fontWeight: '100' }}> σ</span>
                                <span className='LowerPower' style={{ color: '#000', fontWeight: '700' }}>y</span>
                                <span className='' style={{ marginLeft: '5px', color: '#000', fontWeight: '700' }}>(Mpa) </span>
                                <span style={{ margin: '5px', }}></span>

                            </span>
                        </h3>
                        <br />
                        <div style={{ display: 'flex', }}>
                            <div>
                                <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '80%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>Hertz stress (
                                    <span className='power' style={{ fontSize: '1.5vw', top: '0px', color: '#000', padding: '0px 5px' }}> H </span>
                                    ):
                                </h3>
                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '80%', justifyContent: 'left' }}>Used to calculate the amount of stress produced when two curved surfaces (such as a pin and a padeye hole)  come into contact and deform slightly under the loads involved.</h3>

                                <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '80%', justifyContent: 'left' }}>Allowable weld stress:
                                    <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <span className='power' style={{ marginLeft: '5px', fontSize: '1.5vw', top: '0', color: '#000', fontFamily: "'Kanit', sans-serif !important", fontWeight: '100' }}> σ</span>
                                        <span className='LowerPower' style={{ color: '#000', fontWeight: '700' }}>H(allow) </span>
                                        <span style={{ margin: '5px', }}>=</span>
                                        <span style={{ fontSize: '1.4vw', }}>0.25</span>

                                        <span style={{ margin: '5px', }}>x</span>

                                        <span className='power' style={{ fontSize: '1.5vw', top: '0', color: '#000', fontFamily: "'Kanit', sans-serif !important", fontWeight: '100' }}> σ</span>
                                        <span className='LowerPower' style={{ color: '#000', fontWeight: '700' }}>u</span>
                                        <span className='' style={{ marginLeft: '5px', color: '#000', fontWeight: '700' }}>(Mpa) </span>
                                        <span style={{ margin: '5px', }}></span>

                                    </span>

                                </h3>
                            </div>
                            <img src={HertzStressImg} alt='' style={{ width: '25vw', height: '15vw' }} />
                        </div>
                        <br />
                        <br />
                        <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>Weld stress
                            (
                            <span className='power' style={{ fontSize: '1.5vw', top: '-2px', color: '#000', fontFamily: "'Kanit', sans-serif !important", fontWeight: '100' }}>  σ</span>
                            <span className='LowerPower' style={{ color: '#000', fontWeight: '700' }}>w</span>

                            )

                            : </h3>
                        <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>Both shear and tensile/compressive stresses developed at the welded connections of a padeye, depending on the type of joint and loading conditions.</h3>
                        <br />
                        <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>Allowable weld stress:

                            <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <span className='power' style={{ marginLeft: '5px', fontSize: '1.5vw', top: '0', color: '#000', fontFamily: "'Kanit', sans-serif !important", fontWeight: '100' }}> σ</span>
                                <span className='LowerPower' style={{ color: '#000', fontWeight: '700' }}>w(allow) </span>
                                <span style={{ margin: '5px', }}>=</span>
                                <span style={{ fontSize: '1.4vw', }}>0.3</span>

                                <span style={{ margin: '5px', }}>x</span>

                                <span className='power' style={{ fontSize: '1.5vw', top: '0', color: '#000', fontFamily: "'Kanit', sans-serif !important", fontWeight: '100' }}> σ</span>
                                <span className='LowerPower' style={{ color: '#000', fontWeight: '700' }}>u</span>
                                <span className='' style={{ marginLeft: '5px', color: '#000', fontWeight: '700' }}>(Mpa) </span>
                                <span style={{ margin: '5px', }}></span>

                            </span>
                        </h3>
                        <br />
                        <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>Throat Thickness (
                            <span className='power' style={{ fontSize: '1.5vw', top: '-2px', color: '#000', fontFamily: "'Kanit', sans-serif !important", fontWeight: '100' }}>  σ</span>
                            <span className='LowerPower' style={{ color: '#000', fontWeight: '700' }}>wtc</span>
                            ) : </h3>
                        <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>Shortest distance from the root of the fillet weld to the face of the weld. It is the critical dimension that determines the cross-sectional area of the weld that resists shear and tensile forces.</h3>
                        <br />
                        <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>	Weld length
                            (
                            <span className='power' style={{ fontSize: '1.5vw', top: '-2px', color: '#000', fontFamily: "'Kanit', sans-serif !important", fontWeight: '700' }}>  L</span>
                            <span className='LowerPower' style={{ color: '#000', fontWeight: '700' }}>wc</span>
                            )
                            : </h3>
                        <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>Total length of the joint weld the joint. </h3>
                        <br />
                        <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>Welded area
                            (
                            <span className='power' style={{ fontSize: '1.5vw', top: '-2px', color: '#000', fontFamily: "'Kanit', sans-serif !important", fontWeight: '700' }}>  A</span>
                            <span className='LowerPower' style={{ color: '#000', fontWeight: '700' }}>wc</span>
                            )
                            : </h3>
                        <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>Cross-sectional area of the weld that is effective in resisting applied loads.</h3>
                        <br />
                        <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>	Design load
                            (
                            <span className='power' style={{ fontSize: '1.5vw', top: '-2px', color: '#000', fontFamily: "'Kanit', sans-serif !important", fontWeight: '700' }}>  P </span>
                            <span className='LowerPower' style={{ color: '#000', fontWeight: '700' }}>d</span>
                            )
                            : </h3>
                        <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>Maximum amount of load that a structure is designed to handle.</h3>
                        <br />
                        <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>Section modulus of weld
                            (
                            <span className='power' style={{ fontSize: '1.5vw', top: '-2px', color: '#000', fontFamily: "'Kanit', sans-serif !important", fontWeight: '700' }}>  Z</span>
                            )

                            : </h3>
                        <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>Measure of the distribution of the cross-sectional area of a structure relative to a given axis and is used to calculate the bending strength.In padeye it is used to determine the strength and stability of welded joints.</h3>
                        <br />
                        <h3 className='calculator-info-blue-section-main-topic TopicOfDropdown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left', fontSize: '2.2vw', important: true }}>Design moment
                            (
                            <span className='power' style={{ fontSize: '1.5vw', top: '-2px', color: '#000', fontFamily: "'Kanit', sans-serif !important", fontWeight: '700' }}>  M</span>
                            <span className='LowerPower' style={{ color: '#000', fontWeight: '700' }}>d</span>
                            )
                            : </h3>
                        <h3 className='calculator-info-blue-section-main-topic DefinatinOfDropDown' style={{ padding: '0', margin: 'auto', width: '85%', justifyContent: 'left' }}>Maximum moment that a structural element, such as a beam, column, or welded joint, can safely withstand without failure.</h3>

<br/>
<br/>
                    </div>
                </div>
                <br />
            </div>
        </>
    )
}
