import React, { useState, useEffect } from 'react';

function HollowCircle(props) {
  const units = ['mm', 'cm', 'm'];
  // const [exponent, setExponent] = useState(4);

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


  const Heightunits = ['mm', 'cm', 'm'];

  const HeightConversionFactors = {
    mm: [1, 0.1, 0.001],
    cm: [10, 1, 0.01],
    m: [1000, 100, 1],
  };

  const [HeightInputValue, setHeightInputValue] = useState('');
  const [heightSelectedUnit, setHeightSelectedUnit] = useState('mm');
  const [internalHeightInputValue, setInternalHeightInputValue] = useState(0); // Always in mm

  const handleHeightInputValue = (value) => {
    setHeightInputValue(value);
    const factor = HeightConversionFactors[heightSelectedUnit][0];
    setInternalHeightInputValue(parseFloat(value) * factor);
  };

  const handleHeightSelectedUnit = (unit) => {
    const newMetricValueInMM = parseFloat(HeightInputValue) * HeightConversionFactors[heightSelectedUnit][0];
    const convertedValue = newMetricValueInMM / HeightConversionFactors[unit][0];
    setHeightSelectedUnit(unit);
    setHeightInputValue(convertedValue.toFixed(3));
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



  useEffect(() => {
    const value = internalinputValue;
    const centroidValue = value;
    setCentroid((centroidValue / conversionFactors[CentroidSelectedunit][0]));
  }, [internalinputValue, CentroidSelectedunit]);

  useEffect(() => {
    const value = internalinputValue;
    if (!isNaN(value)) {
      const pi  = Math.PI
      const parsedB = internalinputValue;
      const parsedD = internalHeightInputValue;
      const momentOfInertiamultiplyValue = ((Math.pow(parsedB, 4) - Math.pow(parsedD, 4)));
      const divdeinertiaValue = 4;
      const inertia = ((pi * momentOfInertiamultiplyValue) / divdeinertiaValue)
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
  }, [internalinputValue, internalHeightInputValue, momentOfInertiaSelectedUnit]);

  useEffect(() => {
    const value = internalinputValue;
    if (!isNaN(value)) {
      const pi  = Math.PI
      const parsedB = internalinputValue;
      const parsedD = internalHeightInputValue;
      const momentOfInertiamultiplyValue = ((Math.pow(parsedB, 4) - Math.pow(parsedD, 4)));
      const divdeinertiaValue = 4;
      const Iy = ((pi * momentOfInertiamultiplyValue) / divdeinertiaValue)
  
      const Xc = inputValue
      const sectionModulesValue = (Iy / Xc)
      const convertedValue = (sectionModulesValue * SectionModulesConversionFactors['mm³'][SectionModulesUnits.indexOf(sectionModulesSelectedUnit)]);
  
      let formattedValue;
      switch (sectionModulesSelectedUnit) {
        case 'mm³':
          formattedValue = convertedValue.toFixed(2);
          break;
        case 'cm³':
          formattedValue = convertedValue.toFixed(4);
          break;
        case 'm³':
          formattedValue = convertedValue.toExponential(3);
          break;
        default:
          formattedValue = convertedValue;
      }
  
      setSectionModules(formattedValue);
    }
  }, [internalinputValue, internalHeightInputValue, sectionModulesSelectedUnit]);

  const pi = 22 / 7;










  const Imperialunits = ['in'];
  const ImperialconversionFactors = {
    in: [1]
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

  const ImperialHeightunits = ['in'];

  const ImperialHeightConversionFactors = {
    in: [1]
  };

  const [ImperialHeightInputValue, setImperialHeightInputValue] = useState('');
  const [ImperialHeightSelectedUnit, setImperialHeightSelectedUnit] = useState('in');

  const handleImperialHeightInputValue = (values) => {
    setImperialHeightInputValue(values);
  };

  const handleImperialHeightSelectedUnit = (units) => {
    setImperialHeightSelectedUnit(units);
    const Hrightfactor = ImperialHeightConversionFactors[units][ImperialHeightunits.indexOf(ImperialHeightSelectedUnit)];
    setImperialHeightInputValue((parseFloat(ImperialHeightInputValue) / Hrightfactor).toFixed(4));

  }


  const [ImperialCentroid, setImperialCentroid] = useState('');
  const [ImperialCentroidSelectedunit, setImperialCentroidSelectedUnit] = useState('in');

  const handleImperialCentroidUnitChange = (unit) => {
    setImperialCentroidSelectedUnit(unit);
  };

  const calculateImperialCentroidInputChangeValue = () => {
    const ImperialCentroid = ImperialinputValue;
    setImperialCentroid(ImperialCentroid);
  };

  useEffect(() => {
    calculateImperialCentroidInputChangeValue();
  }, [ImperialinputValue]);


  const [ImperialmomentOfInertia, setImperialmomentOfInertia] = useState('');
  const [ImperialmomentOfInertiaSelectedUnit, setImperialmomentOfInertiaSelectedUnit] = useState('in⁴');

  const ImperialMomentOfInertiaUnits = ['in⁴'];
  const ImperialMomentOfInertiaConversionFactors = {
    'in⁴': [1],
  };

  const handleImperialMomentOfInertiaUnitChange = (newUnit) => {
    const currentFactor = ImperialMomentOfInertiaConversionFactors[ImperialmomentOfInertiaSelectedUnit][ImperialMomentOfInertiaUnits.indexOf(newUnit)];
    const convertedValue = parseFloat(ImperialmomentOfInertia) * currentFactor;
    setImperialmomentOfInertiaSelectedUnit(newUnit);
    setImperialmomentOfInertia(convertedValue.toString());
  };

  const calculateImperialMomentOfInertia = (ImperialinputValue, ImperialHeightInputValue) => {
    const parsedB = parseFloat(ImperialinputValue);
    const parsedD = parseFloat(ImperialHeightInputValue);
    if (!isNaN(parsedB) && !isNaN(parsedD)) {
      const ImperialmomentOfInertiamultiplyValue = ((Math.pow(parsedB, 4) - Math.pow(parsedD, 4)));
      const divdeinertiaValue = 4;
      // const ImperialmomentOfInertia = ;
      const ImperialmomentOfInertia = ((pi * ImperialmomentOfInertiamultiplyValue) / divdeinertiaValue).toFixed(1);
      const currentFactor = ImperialMomentOfInertiaConversionFactors['in⁴'][ImperialMomentOfInertiaUnits.indexOf(ImperialmomentOfInertiaSelectedUnit)];
      setImperialmomentOfInertia((ImperialmomentOfInertia * currentFactor).toString());
    }
  };

  useEffect(() => {
    calculateImperialMomentOfInertia(ImperialinputValue, ImperialHeightInputValue);
  }, [ImperialinputValue, ImperialHeightInputValue, ImperialmomentOfInertiaSelectedUnit]);




  // SectionModules
  // ImperialSectionModules
  // ImperialSectionModulesSelectedUnit
  // calculateImperialSectionModules
  // handleImperialSectionModulesUnitChange
  const ImperialSectionModulesUnits = ['in³'];
  const SectionModulesConversionUnitImperial = {
    'in³': [1],
  };
  const [ImperialSectionModules, setImperialSectionModules] = useState('');
  const [ImperialSectionModulesSelectedUnit, setImperialSectionModulesSelectedUnit] = useState('in³');
  const handleImperialSectionModulesUnitChange = (units) => {
    setImperialSectionModulesSelectedUnit(units);
    const SectionModulesfactors = SectionModulesConversionUnitImperial[units][ImperialSectionModulesUnits.indexOf(ImperialSectionModulesSelectedUnit)];
    setImperialSectionModules((parseFloat(ImperialSectionModules) / SectionModulesfactors));
  };

  const calculateImperialSectionModules = () => {
    const d = parseFloat(ImperialHeightInputValue);
    const b = parseFloat(ImperialinputValue);
    const Inertia = parseFloat(ImperialmomentOfInertia);
    if (!isNaN(d) && !isNaN(Inertia)) {
      const Iy = ((pi * ((Math.pow(b, 4) - Math.pow(d, 4)))) / 4);
      // const Xc = inputValue
      const ImperialSectionModules = (Iy / b).toFixed(2)
      setImperialSectionModules(ImperialSectionModules);
    }
  };

  useEffect(() => {
    calculateImperialSectionModules();
  }, [ImperialmomentOfInertia, ImperialHeightInputValue]);

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

          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h3 className='claculator-conversation-title'>Inner radius (Ri) :</h3>
            <div className='Calculator-Side-A'>
              <input
                className='calculator-input'
                type="number"
                value={HeightInputValue}
                onChange={(e) => handleHeightInputValue(e.target.value)}
              />
              <select
                className='Calculator-select-option'
                value={heightSelectedUnit}
                onChange={(e) => handleHeightSelectedUnit(e.target.value)}
              >
                {Heightunits.map((units) => (
                  <option key={units} value={units}>
                    {units}
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
                <span className='LowerPowerminus2px sectionmodulesSolutionLowerPower' style={{ left: '-3px' }}>c </span>

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
            <br />
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

          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h3 className='claculator-conversation-title'>Inner radius (Ri) :</h3>
            <div className='Calculator-Side-A'>
              <input
                className='calculator-input'
                type="number"
                value={ImperialHeightInputValue}
                onChange={(e) => handleImperialHeightInputValue(e.target.value)}
              />
              <select
                className='Calculator-select-option'
                value={ImperialHeightSelectedUnit}
                onChange={(e) => handleImperialHeightSelectedUnit(e.target.value)}
              >
                {ImperialHeightunits.map((units) => (
                  <option key={units} value={units}>
                    {units}
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
                <span className='LowerPowerminus2px sectionmodulesSolutionLowerPower' style={{ left: '-3px' }}>c </span>

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
                    {Imperialunits.map((unit) => (
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
                    value={(ImperialmomentOfInertia)}
                    onChange={(e) => calculateImperialMomentOfInertia(e.target.value)}
                  />
                  <select
                    className='Calculator-select-option'
                    value={ImperialmomentOfInertiaSelectedUnit}
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
            <br />
          </div>
        </>)}


    </>
  );
}

export default HollowCircle;
