import React from 'react';

export default function LengthOfBeam(props) {
    return (
        <>
            <h3 className='color-white text-aligh-center'>Input</h3>
            <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-evenly',
                padding: '1vw 0'
            }}>
                <button
                    onClick={() => props.MetricOrImperialbtn("option1")}
                    style={{
                        padding: '0.2vw 1vw',
                        fontSize: '1.2vw',
                        borderRadius: '10px',
                        backgroundColor: '#fff'
                    }}
                >
                    Metric
                </button>
                <button
                    onClick={() => props.MetricOrImperialbtn("option2")}
                    style={{
                        padding: '0.2vw 1vw',
                        fontSize: '1.2vw',
                        borderRadius: '10px',
                        backgroundColor: '#fff'
                    }}
                >
                    Imperial
                </button>
            </div>
            <br />
            {props.MetricOrImperial === 'option1' && (
                <>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h3 className='claculator-conversation-title'>Length of Beam :</h3>
                <div className='Calculator-Side-A' style={{ width: '50%' }}>
                    <br />
                    <h3 className='sigma-symbol' style={{ fontSize: '0.8vw' }}>(L)</h3>
                    <div className='input-and-select-div'>
                        <input
                            className='calculator-input'
                            type="number"
                            value={props.BeamLengthvalue}
                            onChange={props.BeamLengthonChange}
                        />                    
                        <select
                            className='Calculator-select-option'
                            value={props.BeamLengthSelectvalue}
                            onChange={props.BeamLengthSelectonChange}
                        >
                            {props.BeamLengthSelectOptions}
                        </select>
                    </div>
                </div>
            </div>
            </>
            )}
            {props.MetricOrImperial === 'option2' && (
                <>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h3 className='claculator-conversation-title'>Length of Beam :</h3>
                <div className='Calculator-Side-A' style={{ width: '50%' }}>
                    <br />
                    <h3 className='sigma-symbol' style={{ fontSize: '0.8vw' }}>(L)</h3>
                    <div className='input-and-select-div'>
                        <input
                            className='calculator-input'
                            type="number"
                            value={props.ImperialBeamLengthvalue}
                            onChange={props.ImperialBeamLengthonChange}
                        />                   
                        <select
                            className='Calculator-select-option'
                            value={props.ImperialBeamLengthSelectvalue}
                            onChange={props.ImperialBeamLengthSelectonChange}
                        >
                            {props.ImperialBeamLengthSelectOptions}
                        </select>
                    </div>
                </div>
            </div>
            </>
            )}


        </>
    );
}