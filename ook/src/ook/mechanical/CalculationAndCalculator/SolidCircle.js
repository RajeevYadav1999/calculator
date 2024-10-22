import React, { useState, useEffect } from 'react';

function UnitConverter(props) {

  const units = ['mm', 'cm', 'm'];
  const conversionFactors = {
    mm: [1, 0.1, 0.001],
    cm: [10, 1, 0.01],
    m: [1000, 100, 1],
  };

  const [inputValue, setInputValue] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('mm');
  const [internalinputValue, setInternalinputValue] = useState(0); // Always in mm


  const handleInputChange = (value) => {
    setInputValue(value);
    const factor = conversionFactors[selectedUnit][0];
    setInternalinputValue(parseFloat(value) * factor);
  };

  const handleUnitChange = (unit) => {
    const newMetricValueInMM = parseFloat(inputValue) * conversionFactors[selectedUnit][0];
    const convertedValue = newMetricValueInMM / conversionFactors[unit][0];
    setSelectedUnit(unit);
    setInputValue(convertedValue.toFixed(3));
  };


  const CentroidUnits = ['mm', 'cm', 'm'];

  const [Centroid, setCentroid] = useState('');
  const [CentroidSelectedunit, setCentroidSelectedUnit] = useState('mm');



  // MomentOfInertia
  const MomentOfInertiaUnits = ['mm⁴', 'cm⁴', 'm⁴'];
  const MomentOfInertiaConversionFactors = {
    'mm⁴': [1, 1e-4, 1e-12,],
    'cm⁴': [1e4, 1, 1e-8,],
    'm⁴': [1e12, 1e8, 1,],
  };
  const [momentOfInertia, setMomentOfInertia] = useState('');
  const [momentOfInertiaSelectedUnit, setMomentOfInertiaSelectedUnit] = useState('mm⁴');


  const SectionModulesUnits = ['mm³', 'cm³', 'm³'];
  const SectionModulesConversionFactors = {
    'mm³': [1, 0.001, 1e-9],
    'cm³': [1000, 1, 1e-6],
    'm³': [1e9, 1e6, 1,],
  };
  const [sectionModules, setSectionModules] = useState('');
  const [sectionModulesSelectedUnit, setSectionModulesSelectedUnit] = useState('mm³');




  const TorsionalConstantUnits = ['mm⁴', 'cm⁴', 'm⁴'];
  const TorsionalConstantConversionFactors = {
    'mm⁴': [1, 1e-4, 1e-12],
    'cm⁴': [1e4, 1, 1e-8],
    'm⁴': [1e12, 1e8, 1],
  };

  const [torsionalConstant, setTorsionalConstant] = useState('');
  const [torsionalConstantSelectedUnit, setTorsionalConstantSelectedUnit] = useState('mm⁴');

  useEffect(() => {
    const value = internalinputValue;
    const centroidValue = (value);
    setCentroid((centroidValue / conversionFactors[CentroidSelectedunit][0]));
  }, [internalinputValue, CentroidSelectedunit]);

  useEffect(() => {
    const value = internalinputValue;
    if (!isNaN(value)) {
      const pi = Math.PI
      const inertia = ((pi *Math.pow(value,4))/4);
      const convertedValue = (inertia * MomentOfInertiaConversionFactors['mm⁴'][MomentOfInertiaUnits.indexOf(momentOfInertiaSelectedUnit)]);
  
      let formattedValue;
      switch (momentOfInertiaSelectedUnit) {
        case 'mm⁴':
          formattedValue = convertedValue.toFixed(1);
          break;
        case 'cm⁴':
          formattedValue = convertedValue.toFixed(4);
          break;
        case 'm⁴':
          formattedValue = convertedValue.toExponential(4);
          break;
        default:
          formattedValue = convertedValue;
      }
  
      setMomentOfInertia(formattedValue);
    }
  }, [internalinputValue, momentOfInertiaSelectedUnit]);

  useEffect(() => {
    const value = internalinputValue;
    if (!isNaN(value)) {
      const pi = Math.PI
      const momentOfInertiaValue = ((pi *Math.pow(value,4))/4);
      const sectionModulesValue = (momentOfInertiaValue / value);
      const convertedValue = (sectionModulesValue * SectionModulesConversionFactors['mm³'][SectionModulesUnits.indexOf(sectionModulesSelectedUnit)]);
  
      let formattedValue;
      switch (sectionModulesSelectedUnit) {
        case 'm³':
          formattedValue = convertedValue.toExponential(4);
          break;
        case 'cm³':
          formattedValue = convertedValue.toFixed(4);
          break;
        case 'mm³':
          formattedValue = convertedValue.toFixed(2);
          break;
        default:
          formattedValue = convertedValue;
      }
  
      setSectionModules(formattedValue);
    }
  }, [internalinputValue, sectionModulesSelectedUnit]);

  useEffect(() => {
    const value = internalinputValue;
    if (!isNaN(value)) {
      const pi = Math.PI
      const torsional = ((pi * Math.pow(value, 4)) / 2);
      const convertedValue = (torsional * TorsionalConstantConversionFactors['mm⁴'][TorsionalConstantUnits.indexOf(torsionalConstantSelectedUnit)]);
  
      let formattedValue;
      switch (torsionalConstantSelectedUnit) {
        case 'm⁴':
          formattedValue = convertedValue.toExponential(4);
          break;
        case 'cm⁴':
          formattedValue = convertedValue.toFixed(4);
          break;
        case 'mm⁴':
          formattedValue = convertedValue.toFixed(1);
          break;
        default:
          formattedValue = convertedValue;
      }
  
      setTorsionalConstant(formattedValue);
    }
  }, [internalinputValue, torsionalConstantSelectedUnit]);






  const Imperialunits = ['in'];
  const ImperialconversionFactors = {
    in: [1],
  };

  const [ImperialinputValue, setImperialInputValue] = useState('');
  const [ImperialselectedUnit, setImperialSelectedUnit] = useState('in');

  const handleImperialInputChange = (value) => {
    setImperialInputValue(value);
  };

  const handleImperialUnitChange = (unit) => {
    setImperialSelectedUnit(unit);
    const factor = ImperialconversionFactors[unit][Imperialunits.indexOf(ImperialselectedUnit)];
    setImperialInputValue((parseFloat(ImperialinputValue) / factor).toFixed(3));
  };

  const ImperialCentroidUnits = ['in'];
  const ImperialCentroidconversionFactors = {
    in: [1],
  };

  const [ImperialCentroid, setImperialCentroid] = useState('');
  const [ImperialCentroidSelectedunit, setImperialCentroidSelectedUnit] = useState('in');

  const handleImperialCentroidUnitChange = (unit) => {
    setImperialCentroidSelectedUnit(unit);
    const ImperialCentroidFactor = ImperialCentroidconversionFactors[unit][ImperialCentroidUnits.indexOf(ImperialCentroidSelectedunit)];
    setImperialCentroid((parseFloat(ImperialCentroid) / ImperialCentroidFactor));
  };

  const calculateImperialCentroidInputChangeValue = () => {
    const Input = parseFloat(ImperialinputValue)
    const ImperialCentroid = Input / 2
    setImperialCentroid(ImperialCentroid);
  };
  useEffect(() => {
    calculateImperialCentroidInputChangeValue();
  }, [ImperialinputValue]);


  // MomentOfInertia
  const ImperialMomentOfInertiaUnits = ['in⁴'];
  const ImperialMomentOfInertiaConversionFactors = {
    'in⁴': [1],
  };
  const [ImperialMomentOfInertia, setImperialMomentOfInertia] = useState('');
  const [ImperialMomentOfInertiaSelectedUnit, setImperialMomentOfInertiaSelectedUnit] = useState('in⁴');

  const handleImperialMomentOfInertiaUnitChange = (newUnit) => {
    const currentFactor = ImperialMomentOfInertiaConversionFactors[ImperialMomentOfInertiaSelectedUnit][ImperialMomentOfInertiaUnits.indexOf(newUnit)];
    const convertedValue = parseFloat(ImperialMomentOfInertia) * currentFactor;
    setImperialMomentOfInertiaSelectedUnit(newUnit);
    setImperialMomentOfInertia(convertedValue.toString());
  };

  const calculateImperialMomentOfInertia = (value) => {
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      const pi = 22 / 7;
      const ImperialMomentOfInertia = ((pi / 4) * (ImperialinputValue ** 4));
      const currentFactor = ImperialMomentOfInertiaConversionFactors['in⁴'][ImperialMomentOfInertiaUnits.indexOf(ImperialMomentOfInertiaSelectedUnit)];
      setImperialMomentOfInertia((ImperialMomentOfInertia * currentFactor).toString());
    }
  };

  useEffect(() => {
    calculateImperialMomentOfInertia(ImperialinputValue);
  }, [ImperialinputValue, ImperialMomentOfInertiaSelectedUnit]);


  const ImperialSectionModulesUnits = ['in³'];
  const ImperialSectionModulesConversionFactors = {
    'in³': [1],
  };
  const [ImperialSectionModules, setImperialSectionModules] = useState('');
  const [ImperialSectionModulesSelectedUnit, setImperialSectionModulesSelectedUnit] = useState('in³');

  const handleImperialSectionModulesUnitChange = (newUnit) => {
    const currentFactor = ImperialSectionModulesConversionFactors[ImperialSectionModulesSelectedUnit][ImperialSectionModulesUnits.indexOf(newUnit)];
    const convertedValue = parseFloat(ImperialSectionModules) * currentFactor;
    setImperialSectionModulesSelectedUnit(newUnit);
    setImperialSectionModules(convertedValue.toString());
  };

  const calculateImperialSectionModules = (value) => {
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      const pi = 22 / 7;
      const ImperialSectionModules = ((pi / 4) * (ImperialinputValue ** 3));
      const currentFactor = ImperialSectionModulesConversionFactors['in³'][ImperialSectionModulesUnits.indexOf(ImperialSectionModulesSelectedUnit)];
      setImperialSectionModules((ImperialSectionModules * currentFactor).toString());
    }
  };

  useEffect(() => {
    calculateImperialSectionModules(ImperialinputValue);
  }, [ImperialinputValue, ImperialSectionModulesSelectedUnit]);



  const ImperialTorsionalConstantUnits = ['in⁴'];
  const ImperialTorsionalConstantConversionFactors = {
    'in⁴': [1],
  };
  const [ImperialTorsionalConstant, setImperialTorsionalConstant] = useState('');
  const [ImperialTorsionalConstantSelectedUnit, setImperialTorsionalConstantSelectedUnit] = useState('in⁴');

  const handleImperialTorsionalConstantUnitChange = (newUnit) => {
    const currentFactor = ImperialTorsionalConstantConversionFactors[ImperialTorsionalConstantSelectedUnit][ImperialTorsionalConstantUnits.indexOf(newUnit)];
    const convertedValue = parseFloat(ImperialTorsionalConstant) * currentFactor;
    setImperialTorsionalConstantSelectedUnit(newUnit);
    setImperialTorsionalConstant(convertedValue.toString());
  };

  const calculateImperialTorsionalConstant = (value) => {
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      const torsional = (Math.PI * Math.pow(parsedValue, 4)) / 2;
      const currentFactor = ImperialTorsionalConstantConversionFactors['in⁴'][ImperialTorsionalConstantUnits.indexOf(ImperialTorsionalConstantSelectedUnit)];
      setImperialTorsionalConstant((torsional * currentFactor).toString());
    }
  };

  useEffect(() => {
    calculateImperialTorsionalConstant(ImperialinputValue);
  }, [ImperialinputValue, ImperialTorsionalConstantSelectedUnit]);







  return (
    <>

      <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        padding: '1vw 0'
      }}>
        <button className='metricBtn'
          onClick={() => props.MetricOrImperialBtn("option1")}
          style={{
            padding: '0.2vw 1vw',
            fontSize: '1.2vw',
            borderRadius: '10px',
            backgroundColor: '#fff'
          }}
        >
          Metric
        </button>
        <button className='ImperialBtn'
          onClick={() => props.MetricOrImperialBtn("option2")}
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

      {props.MetricOrImperial === 'option1' && (
        <>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h3 className='claculator-conversation-title'>Radius (R) :</h3>
            <div className='Calculator-Side-A'>
              <input
                className='calculator-input'
                type="number"
                value={inputValue}
                onChange={(e) => handleInputChange(e.target.value)}
              />
              <select
                className='Calculator-select-option'
                value={selectedUnit}
                onChange={(e) => handleUnitChange(e.target.value)}
              >
                {units.map((unit) => (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                ))}
              </select>
            </div>
          </div>



          <button className='structure-analysis-calculator-calculator-right-show-hidden-btn' onClick={props.toggleBreaks}>{props.togglefunction ? ' Hide ' : ' Solve '}</button>

          <div className={props.togglefunction ? 'show Sectionmodules ' : 'hidden Sectionmodules '} style={{
            height: '45vw',
          }}>
            <br />
            <br />
            <h3 className='text-aligh-center color-white'>Section Properties Of Beam</h3>
            <br />
            <br />
            <h3 className='color-white bold-heading-solution' style={{ fontSize: '1.8vw' }}>Centroid:</h3>

            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <h3 className='claculator-conversation-title'>
                X
                <span className='LowerPowerminus2px sectionmodulesSolutionLowerPower' >c</span>

                <span className='equalesto'>=</span>

                Y
                <span className='LowerPowerminus2px sectionmodulesSolutionLowerPower' style={{ left: '-3px' }} >c </span>

                :
              </h3>
              <div className='Calculator-Side-A'>
                <div className='input-and-select-div'>
                  <input
                    className='calculator-input'
                    type="number"
                    value={Centroid}
                    readOnly

                  />
                  <select
                    className='Calculator-select-option'
                    value={CentroidSelectedunit}
                    onChange={(e) => setCentroidSelectedUnit(e.target.value)}
                  >
                    {CentroidUnits.map((unit) => (
                      <option key={unit} value={unit}>
                        {unit}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <br />
            <h3 className='color-white bold-heading-solution' style={{ fontSize: '1.8vw' }}>Moment of inertia:</h3>


            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <h3 className='claculator-conversation-title'>
                I
                <span className='LowerPower sectionmodulesSolutionLowerPower' >x</span>
                <span className='equalesto'>=</span>
                I
                <span className='LowerPower sectionmodulesSolutionLowerPower' >y </span>
                :
              </h3>
              <div className='Calculator-Side-A'>
                <div className='input-and-select-div'>
                  <input
                    className='calculator-input'
                    type="number"
                    value={(momentOfInertia)}
                    readOnly

                  />
                  <select
                    className='Calculator-select-option'
                    value={momentOfInertiaSelectedUnit}
                    onChange={(e) => setMomentOfInertiaSelectedUnit(e.target.value)}
                  >
                    {MomentOfInertiaUnits.map((unit) => (
                      <option key={unit} value={unit}>
                        {unit}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <br />
            <h3 className='color-white bold-heading-solution' style={{ fontSize: '1.8vw' }}>Section Modules:</h3>

            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <h3 className='claculator-conversation-title'>
                S
                <span className='LowerPower sectionmodulesSolutionLowerPower' >x</span>
                <span className='equalesto'>=</span>
                S
                <span className='LowerPower sectionmodulesSolutionLowerPower' >y </span>
                :
              </h3>
              <div className='Calculator-Side-A'>
                <div className='input-and-select-div'>
                  <input
                    className='calculator-input'
                    type="number"
                    value={sectionModules}
                    readOnly


                  />
                  <select
                    className='Calculator-select-option'
                    value={sectionModulesSelectedUnit}
                    onChange={(e) => setSectionModulesSelectedUnit(e.target.value)}
                  >
                    {SectionModulesUnits.map((unit) => (
                      <option key={unit} value={unit}>
                        {unit}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <br />
            <h3 className='color-white bold-heading-solution' style={{ fontSize: '1.8vw' }}>Torsional Constant :</h3>

            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <h3 className='claculator-conversation-title'>
                K :
              </h3>
              <div className='Calculator-Side-A'>
                <div className='input-and-select-div'>
                  <input
                    className='calculator-input'
                    type="number"
                    value={torsionalConstant}
                    readOnly


                  />
                  <select
                    className='Calculator-select-option'
                    value={torsionalConstantSelectedUnit}
                    onChange={(e) => setTorsionalConstantSelectedUnit(e.target.value)}
                  >
                    {TorsionalConstantUnits.map((unit) => (
                      <option key={unit} value={unit}>
                        {unit}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </>)}

      {props.MetricOrImperial === 'option2' && (
        <>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h3 className='claculator-conversation-title'>Radius (R) :</h3>
            <div className='Calculator-Side-A'>
              <input
                className='calculator-input'
                type="number"
                value={ImperialinputValue}
                onChange={(e) => handleImperialInputChange(e.target.value)}
              />
              <select
                className='Calculator-select-option'
                value={ImperialselectedUnit}
                onChange={(e) => handleImperialUnitChange(e.target.value)}
              >
                {Imperialunits.map((unit) => (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                ))}
              </select>
            </div>
          </div>


          <button className='structure-analysis-calculator-calculator-right-show-hidden-btn' onClick={props.toggleBreaks}>{props.togglefunction ? ' Hide ' : ' Solve '}</button>

          <div className={props.togglefunction ? 'show Sectionmodules ' : 'hidden Sectionmodules '} style={{
            height: '45vw',
          }}>
            <br />
            <br />
            <h3 className='text-aligh-center color-white'>Section Properties Of Beam</h3>
            <br />
            <br />
            <h3 className='color-white bold-heading-solution' style={{ fontSize: '1.8vw' }}>Centroid:</h3>

            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <h3 className='claculator-conversation-title'>
                X
                <span className='LowerPowerminus2px sectionmodulesSolutionLowerPower' >c</span>

                <span className='equalesto'>=</span>

                Y
                <span className='LowerPowerminus2px sectionmodulesSolutionLowerPower' style={{ left: '-3px' }} >c </span>

                :
              </h3>
              <div className='Calculator-Side-A'>
                <div className='input-and-select-div'>
                  <input
                    className='calculator-input'
                    type="number"
                    value={ImperialCentroid}
                    onChange={(e) => calculateImperialCentroidInputChangeValue(e.target.value)}

                  />
                  <select
                    className='Calculator-select-option'
                    value={ImperialCentroidSelectedunit}
                    onChange={(e) => handleImperialCentroidUnitChange(e.target.value)}
                  >
                    {ImperialCentroidUnits.map((unit) => (
                      <option key={unit} value={unit}>
                        {unit}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <br />
            <h3 className='color-white bold-heading-solution' style={{ fontSize: '1.8vw' }}>Moment of inertia:</h3>


            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <h3 className='claculator-conversation-title'>
                I
                <span className='LowerPower sectionmodulesSolutionLowerPower' >x</span>
                <span className='equalesto'>=</span>
                I
                <span className='LowerPower sectionmodulesSolutionLowerPower' >y </span>
                :
              </h3>
              <div className='Calculator-Side-A'>
                <div className='input-and-select-div'>
                  <input
                    className='calculator-input'
                    type="number"
                    value={(ImperialMomentOfInertia)}
                    onChange={(e) => calculateImperialMomentOfInertia(e.target.value)}
                  />
                  <select
                    className='Calculator-select-option'
                    value={ImperialMomentOfInertiaSelectedUnit}
                    onChange={(e) => handleImperialMomentOfInertiaUnitChange(e.target.value)}
                  >
                    {ImperialMomentOfInertiaUnits.map((unit) => (
                      <option key={unit} value={unit}>
                        {unit}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <br />
            <h3 className='color-white bold-heading-solution' style={{ fontSize: '1.8vw' }}>Section Modules:</h3>

            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <h3 className='claculator-conversation-title'>
                S
                <span className='LowerPower sectionmodulesSolutionLowerPower' >x</span>
                <span className='equalesto'>=</span>
                S
                <span className='LowerPower sectionmodulesSolutionLowerPower' >y </span>
                :
              </h3>
              <div className='Calculator-Side-A'>
                <div className='input-and-select-div'>
                  <input
                    className='calculator-input'
                    type="number"
                    value={ImperialSectionModules}
                    onChange={(e) => calculateImperialSectionModules(e.target.value)}

                  />
                  <select
                    className='Calculator-select-option'
                    value={ImperialSectionModulesSelectedUnit}
                    onChange={(e) => handleImperialSectionModulesUnitChange(e.target.value)}
                  >
                    {ImperialSectionModulesUnits.map((unit) => (
                      <option key={unit} value={unit}>
                        {unit}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <br />
            <h3 className='color-white bold-heading-solution' style={{ fontSize: '1.8vw' }}>Torsional Constant :</h3>

            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <h3 className='claculator-conversation-title'>
                K :
              </h3>
              <div className='Calculator-Side-A'>
                <div className='input-and-select-div'>
                  <input
                    className='calculator-input'
                    type="number"
                    value={ImperialTorsionalConstant}
                    onChange={(e) => calculateImperialTorsionalConstant(e.target.value)}

                  />
                  <select
                    className='Calculator-select-option'
                    value={ImperialTorsionalConstantSelectedUnit}
                    onChange={(e) => handleImperialTorsionalConstantUnitChange(e.target.value)}
                  >
                    {ImperialTorsionalConstantUnits.map((unit) => (
                      <option key={unit} value={unit}>
                        {unit}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </>)}

    </>
  );
}

export default UnitConverter;
