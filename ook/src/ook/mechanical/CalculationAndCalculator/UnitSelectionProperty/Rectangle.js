import React, { useState, useEffect } from 'react';

function UnitConverter(props) {
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


  const b = internalinputValue
  const d = internalHeightInputValue



  const AreaUnits = ['mm²', 'cm²', 'm²'];
  const AreaConversionFactors = {
    'mm²': [1, 0.01, 0.000001],
    'cm²': [100, 1, 0.0001],
    'm²': [1000000, 10000, 1],
  };
  const [Area, setArea] = useState('');
  const [AreaUnit, setAreaUnit] = useState('mm²');
  useEffect(() => {
    const value = parseFloat(internalinputValue) * conversionFactors[selectedUnit][0];
    if (!isNaN(value)) {
      const areaValue = (b * d);
      setArea((areaValue / AreaConversionFactors[AreaUnit][0]));
    } else {
      setArea('');
    }
  }, [internalinputValue, internalHeightInputValue, AreaUnit, selectedUnit]);


  // CentroidXcUnits
  const CentroidXcUnits = ['mm', 'cm', 'm'];

  const [CentroidXc, setCentroidXc] = useState('');
  const [CentroidXcSelectedUnit, setCentroidXcSelectedUnit] = useState('mm');

  useEffect(() => {
    const value = internalinputValue;
    const centroidValue = (value / 2);
    setCentroidXc((centroidValue / conversionFactors[CentroidXcSelectedUnit][0]));
  }, [internalinputValue, CentroidXcSelectedUnit]);


  // CentriodYcUnits
  const CentriodYcUnits = ['mm', 'cm', 'm'];

  const [CentriodYc, setCentriodYc] = useState('');
  const [CentriodYcSelectedUnit, setCentriodYcSelectedUnit] = useState('mm');


  useEffect(() => {
    const d = internalHeightInputValue;
    const centroidValue = (d / 2);
    setCentriodYc((centroidValue / conversionFactors[CentriodYcSelectedUnit][0]));
  }, [internalHeightInputValue, CentriodYcSelectedUnit]);




  // MomentOfInertia Ix
  const [momentOfInertiaIx, setMomentOfInertiaIx] = useState('');
  const [momentOfInertiaIxSelectedUnit, setMomentOfInertiaIxSelectedUnit] = useState('mm⁴');

  const MomentOfInertiaIxUnits = ['mm⁴', 'cm⁴', 'm⁴'];
  const MomentOfInertiaIxConversionFactors = {
    'mm⁴': [1, 1e-4, 1e-12],
    'cm⁴': [1e4, 1, 1e-8],
    'm⁴': [1e12, 1e8, 1],
  };

  useEffect(() => {
    const value = b;
    const dvalue = d;
    if (!isNaN(value)) {
      const momentOfInertiaIx = ((value * Math.pow(dvalue, 3)) / 12).toFixed(1)
      // const inertia = ((value ** 4) / 12).toFixed(3);
      const convertedValue = (momentOfInertiaIx * MomentOfInertiaIxConversionFactors['mm⁴'][MomentOfInertiaIxUnits.indexOf(momentOfInertiaIxSelectedUnit)]);
      setMomentOfInertiaIx(convertedValue);
    }
  }, [b, d, momentOfInertiaIxSelectedUnit]);


  // MomentOfInertia Iy
  const [momentOfInertiaIy, setMomentOfInertiaIy] = useState('');
  const [momentOfInertiaIySelectedUnit, setMomentOfInertiaIySelectedUnit] = useState('mm⁴');

  const MomentOfInertiaIyUnits = ['mm⁴', 'cm⁴', 'm⁴'];
  const MomentOfInertiaIyConversionFactors = {
    'mm⁴': [1, 1e-4, 1e-12],
    'cm⁴': [1e4, 1, 1e-8],
    'm⁴': [1e12, 1e8, 1],
  };
  useEffect(() => {
    const value = b;
    const dvalue = d;
    if (!isNaN(value)) {
      const momentOfInertiaIy = ((dvalue * Math.pow(value, 3)) / 12).toFixed(1);
      // const inertia = ((value ** 4) / 12).toFixed(3);
      const convertedValue = (momentOfInertiaIy * MomentOfInertiaIyConversionFactors['mm⁴'][MomentOfInertiaIyUnits.indexOf(momentOfInertiaIySelectedUnit)]);
      setMomentOfInertiaIy(convertedValue);
    }
  }, [b, d, momentOfInertiaIySelectedUnit]);



  // SectionModules Sx
  const SectionModulesSxUnits = ['mm³', 'cm³', 'm³'];
  const SectionModulesSxConversionUnit = {
    'mm³': [1, 0.001, 1e-9],
    'cm³': [1000, 1, 1e-6],
    'm³': [1e9, 1e6, 1],
  };
  const [SectionModulesSx, setSectionModulesSx] = useState('');
  const [SectionModulesSxSelectedUnit, setSectionModulesSxSelectedUnit] = useState('mm³');

  useEffect(() => {
    const value = b;
    const dvalue = d;

    if (!isNaN(value)) {
      // const centroidValue = (value / 2).toFixed(3);
      // const momentOfInertiaValue = (value * Math.pow(dvalue, 3)) / 12;
      const momentOfInertiaValue = ((value * Math.pow(dvalue, 3)) / 12)
      const sectionModulesValue = (b * Math.pow(d, 2) / 6).toFixed(2);
      const convertedValue = (sectionModulesValue * SectionModulesSxConversionUnit['mm³'][SectionModulesSxUnits.indexOf(SectionModulesSxSelectedUnit)]);
      setSectionModulesSx(convertedValue);
    }
  }, [b, d, SectionModulesSxSelectedUnit]);


  // const SectionModulesSx = Ix / Yc

  // Sy
  const SectionModulesSyUnits = ['mm³', 'cm³', 'm³'];
  const SectionModulesSyConversionUnit = {
    'mm³': [1, 0.001, 1e-9],
    'cm³': [1000, 1, 1e-6],
    'm³': [1e9, 1e6, 1],
  };
  const [SectionModulesSy, setSectionModulesSy] = useState('');
  const [SectionModulesSelectedUnitSy, setSectionModulesSelectedUnitSy] = useState('mm³');
  useEffect(() => {
    const value = b;

    if (!isNaN(value)) {
      // const sectionModulesValue = (momentOfInertiaValue / centroidValue).toFixed(5);
      const sectionModulesValue = (d * Math.pow(b, 2) / 6).toFixed(2);
      const convertedValue = (sectionModulesValue * SectionModulesSyConversionUnit['mm³'][SectionModulesSyUnits.indexOf(SectionModulesSelectedUnitSy)]);
      setSectionModulesSy(convertedValue);
    }
  }, [b, d, SectionModulesSelectedUnitSy]);

  // TorsionalConstant

  const TorsionalConstantUnits = ['mm⁴', 'cm⁴', 'm⁴'];
  const TorsionalConstantConversionFactors = {
    'mm⁴': [1, 1e-4, 1e-12],
    'cm⁴': [1e4, 1, 1e-8],
    'm⁴': [1e12, 1e8, 1],
  };

  const [torsionalConstant, setTorsionalConstant] = useState('');
  const [torsionalConstantSelectedUnit, setTorsionalConstantSelectedUnit] = useState('mm⁴');

  useEffect(() => {
    const value = b;
    const dvalue = d;
    if (!isNaN(value)) {
      const torsional = ((value * Math.pow(dvalue, 3)) / 3 - 0.21 * Math.pow(dvalue, 4) + 0.0175 * Math.pow(dvalue, 8) / Math.pow(value, 4)).toFixed(2);
      const convertedValue = (torsional * TorsionalConstantConversionFactors['mm⁴'][TorsionalConstantUnits.indexOf(torsionalConstantSelectedUnit)]);
      setTorsionalConstant(convertedValue);
    }
  }, [b, d, torsionalConstantSelectedUnit]);

  // const torsionalConstant = (parsedB * Math.pow(parsedD, 3)) / 3 - 0.21 * Math.pow(parsedD, 4) + 0.0175 * Math.pow(parsedD, 8) / Math.pow(parsedB, 4);





  // imperial units


  const unitsImperial = ['in'];
  const conversionFactorsImperial = {
    in: [1],
  };

  const [inputValueImperial, setInputValueImperial] = useState('');
  const [selectedUnitImperial, setSelectedUnitImperial] = useState('in');

  const handleInputChangeImperial = (value) => {
    setInputValueImperial(value);
  };

  const handleUnitChangeImperial = (unit) => {
    setSelectedUnitImperial(unit);
    const factor = conversionFactorsImperial[unit][unitsImperial.indexOf(selectedUnitImperial)];
    setInputValueImperial((parseFloat(inputValueImperial) / factor).toFixed(4));
  };

  const HeightunitsImperial = ['in'];
  const HeightConversionFactorsImperial = {
    in: [1],
  };

  const [HeightInputValueImperial, setHeightInputValueImperial] = useState('');
  const [heightSelectedUnitImperial, setHeightSelectedUnitImperial] = useState('in');

  const handleHeightInputValueImperial = (values) => {
    setHeightInputValueImperial(values);
  };

  const handleHeightSelectedUnitImperial = (units) => {
    setHeightSelectedUnitImperial(units);
    const Hrightfactor = HeightConversionFactorsImperial[units][HeightunitsImperial.indexOf(heightSelectedUnitImperial)];
    setHeightInputValueImperial((parseFloat(HeightInputValueImperial) / Hrightfactor).toFixed(4));
  };

  const bImperial = inputValueImperial;
  const dImperial = HeightInputValueImperial;

  const AreaUnitsImperial = ['in²'];
  const AreaConversionFactorsImperial = {
    'in²': [1],
  };

  const [AreaImperial, setAreaImperial] = useState('');
  const [AreaUnitImperial, setAreaUnitImperial] = useState('in²');

  // Handle change in area unit
  const handleAreaUnitChangeImperial = (unit) => {
    const currentAreaInNewUnit = AreaImperial / AreaConversionFactorsImperial[unit][AreaUnitsImperial.indexOf(AreaUnitImperial)];
    setAreaImperial(currentAreaInNewUnit);
    setAreaUnitImperial(unit);
  };

  // Calculate area based on input values
  const calculatehandleAreaInputChangeValueImperial = (value) => {
    const b = parseFloat(inputValueImperial);
    const d = parseFloat(HeightInputValueImperial);

    if (!isNaN(b) && !isNaN(d)) {
      const areaValue = b * d;
      setAreaImperial(areaValue);
    } else {
      setAreaImperial('');
    }
  };

  useEffect(() => {
    calculatehandleAreaInputChangeValueImperial();
  }, [inputValueImperial, HeightInputValueImperial]);

  // CentroidXcUnits
  const CentroidXcUnitsImperial = ['in'];
  const CentroidXcconversionFactorsImperial = {
    in: [1],
  };

  const [CentroidXcImperial, setCentroidXcImperial] = useState('');
  const [CentroidXcSelectedUnitImperial, setCentroidXcSelectedUnitImperial] = useState('in');

  const handleCentroidXcUnitChangeImperial = (unit) => {
    setCentroidXcSelectedUnitImperial(unit);
    const CentroidFactor = CentroidXcconversionFactorsImperial[unit][CentroidXcUnitsImperial.indexOf(CentroidXcSelectedUnitImperial)];
    setCentroidXcImperial((parseFloat(CentroidXcImperial) / CentroidFactor).toFixed(3));
  };

  const calculateCentroidXcInputChangeValueImperial = () => {
    const b = parseFloat(inputValueImperial);
    const CentroidXc = b / 2;
    setCentroidXcImperial(CentroidXc);
  };

  useEffect(() => {
    calculateCentroidXcInputChangeValueImperial();
  }, [inputValueImperial]);

  // CentriodYcUnits
  const CentriodYcUnitsImperial = ['in'];
  const CentriodYcconversionFactorsImperial = {
    in: [1],
  };

  const [CentriodYcImperial, setCentriodYcImperial] = useState('');
  const [CentriodYcSelectedUnitImperial, setCentriodYcSelectedUnitImperial] = useState('in');

  const handleCentriodYcUnitChangeImperial = (unit) => {
    setCentriodYcSelectedUnitImperial(unit);
    const CentriodYcFactor = CentriodYcconversionFactorsImperial[unit][CentriodYcUnitsImperial.indexOf(CentriodYcSelectedUnitImperial)];
    setCentriodYcImperial((parseFloat(CentriodYcImperial) / CentriodYcFactor).toFixed(3));
  };

  const calculateCentriodYcInputChangeValueImperial = () => {
    const d = parseFloat(HeightInputValueImperial);
    const CentriodYc = d / 2;
    setCentriodYcImperial(CentriodYc);
  };

  useEffect(() => {
    calculateCentriodYcInputChangeValueImperial();
  }, [HeightInputValueImperial]);

  // MomentOfInertia Ix
  const [momentOfInertiaIxImperial, setMomentOfInertiaIxImperial] = useState('');
  const [momentOfInertiaIxSelectedUnitImperial, setMomentOfInertiaIxSelectedUnitImperial] = useState('in⁴');

  const MomentOfInertiaIxUnitsImperial = ['in⁴'];
  const MomentOfInertiaIxConversionFactorsImperial = {
    'in⁴': [1],
  };

  const handleMomentOfInertiaIxUnitChangeImperial = (newUnit) => {
    const currentFactor = MomentOfInertiaIxConversionFactorsImperial[momentOfInertiaIxSelectedUnitImperial][MomentOfInertiaIxUnitsImperial.indexOf(newUnit)];
    const convertedValue = parseFloat(momentOfInertiaIxImperial) * currentFactor;
    setMomentOfInertiaIxSelectedUnitImperial(newUnit);
    setMomentOfInertiaIxImperial(convertedValue.toString());
  };

  const calculateMomentOfInertiaIxImperial = (b, d) => {
    const parsedB = parseFloat(b);
    const parsedD = parseFloat(d);
    if (!isNaN(parsedB) && !isNaN(parsedD)) {
      // .toFixed(1)
      // .toFixed(2)
      const momentOfInertiaIx = ((parsedB * Math.pow(parsedD, 3)) / 12).toFixed(1);
      const currentFactor = MomentOfInertiaIxConversionFactorsImperial['in⁴'][MomentOfInertiaIxUnitsImperial.indexOf(momentOfInertiaIxSelectedUnitImperial)];
      setMomentOfInertiaIxImperial((momentOfInertiaIx * currentFactor).toString());
    }
  };

  useEffect(() => {
    calculateMomentOfInertiaIxImperial(inputValueImperial, HeightInputValueImperial);
  }, [inputValueImperial, HeightInputValueImperial, momentOfInertiaIxSelectedUnitImperial]);

  // MomentOfInertia Iy
  const [momentOfInertiaIyImperial, setMomentOfInertiaIyImperial] = useState('');
  const [momentOfInertiaIySelectedUnitImperial, setMomentOfInertiaIySelectedUnitImperial] = useState('in⁴');

  const MomentOfInertiaIyUnitsImperial = ['in⁴'];
  const MomentOfInertiaIyConversionFactorsImperial = {
    'in⁴': [1],
  };

  const handleMomentOfInertiaIyUnitChangeImperial = (newUnit) => {
    const currentFactor = MomentOfInertiaIyConversionFactorsImperial[momentOfInertiaIySelectedUnitImperial][MomentOfInertiaIyUnitsImperial.indexOf(newUnit)];
    const convertedValue = parseFloat(momentOfInertiaIyImperial) * currentFactor;
    setMomentOfInertiaIySelectedUnitImperial(newUnit);
    setMomentOfInertiaIyImperial(convertedValue.toString());
  };

  const calculateMomentOfInertiaIyImperial = (b, d) => {
    const parsedB = parseFloat(b);
    const parsedD = parseFloat(d);
    if (!isNaN(parsedB) && !isNaN(parsedD)) {
      const momentOfInertiaIy = ((parsedD * Math.pow(parsedB, 3)) / 12).toFixed(1);
      const currentFactor = MomentOfInertiaIyConversionFactorsImperial['in⁴'][MomentOfInertiaIyUnitsImperial.indexOf(momentOfInertiaIySelectedUnitImperial)];
      setMomentOfInertiaIyImperial((momentOfInertiaIy * currentFactor).toString());
    }
  };

  useEffect(() => {
    calculateMomentOfInertiaIyImperial(inputValueImperial, HeightInputValueImperial);
  }, [inputValueImperial, HeightInputValueImperial, momentOfInertiaIySelectedUnitImperial]);

  // SectionModules Sx
  const SectionModulesSxUnitsImperial = ['in³'];
  const SectionModulesSxConversionUnitImperial = {
    'in³': [1],
  };
  const [SectionModulesSxImperial, setSectionModulesSxImperial] = useState('');
  const [SectionModulesSxSelectedUnitImperial, setSectionModulesSxSelectedUnitImperial] = useState('in³');
  const handleSectionModulesSxUnitChangeImperial = (units) => {
    setSectionModulesSxSelectedUnitImperial(units);
    const SectionModulesSxfactors = SectionModulesSxConversionUnitImperial[units][SectionModulesSxUnitsImperial.indexOf(SectionModulesSxSelectedUnitImperial)];
    setSectionModulesSxImperial((parseFloat(SectionModulesSxImperial) / SectionModulesSxfactors));
  };

  const calculateSectionModulesSxInputChangeImperial = () => {
    const d = parseFloat(HeightInputValueImperial);
    const b = parseFloat(inputValueImperial)
    const SectionModulesSxImperial = (b * Math.pow(d, 2) / 6).toFixed(2);
    setSectionModulesSxImperial(SectionModulesSxImperial);

  };

  useEffect(() => {
    calculateSectionModulesSxInputChangeImperial();
  }, [momentOfInertiaIxImperial, HeightInputValueImperial]);

  // SectionModules Sy
  const SectionModulesSyUnitsImperial = ['in³'];
  const SectionModulesSyConversionUnitImperial = {
    'in³': [1],
  };
  const [SectionModulesSyImperial, setSectionModulesSyImperial] = useState('');
  const [SectionModulesSySelectedUnitImperial, setSectionModulesSySelectedUnitImperial] = useState('in³');
  const handleSectionModulesSyUnitChangeImperial = (units) => {
    setSectionModulesSySelectedUnitImperial(units);
    const SectionModulesSyfactors = SectionModulesSyConversionUnitImperial[units][SectionModulesSyUnitsImperial.indexOf(SectionModulesSySelectedUnitImperial)];
    setSectionModulesSyImperial((parseFloat(SectionModulesSyImperial) / SectionModulesSyfactors));
  };

  const calculateSectionModulesSyInputChangeImperial = () => {
    const d = parseFloat(HeightInputValueImperial);
    const b = parseFloat(inputValueImperial)
    const SectionModulesSyImperial = (d * Math.pow(b, 2) / 6).toFixed(2);
    setSectionModulesSyImperial(SectionModulesSyImperial);

  };

  useEffect(() => {
    calculateSectionModulesSyInputChangeImperial();
  }, [momentOfInertiaIyImperial, inputValueImperial]);


  const TorsionalConstantUnitsImperial = ['in⁴'];
  const TorsionalConstantConversionFactorsImperial = {
    'in⁴': [1],
  };

  const [torsionalConstantImperial, setTorsionalConstantImperial] = useState('');
  const [torsionalConstantSelectedUnitImperial, setTorsionalConstantSelectedUnitImperial] = useState('in⁴');

  const handleTorsionalConstantUnitChangeImperial = (newUnit) => {
    const currentFactor = TorsionalConstantConversionFactorsImperial[torsionalConstantSelectedUnitImperial][TorsionalConstantUnitsImperial.indexOf(newUnit)];
    const convertedValue = parseFloat(torsionalConstantImperial) / currentFactor;
    setTorsionalConstantSelectedUnitImperial(newUnit);
    setTorsionalConstantImperial(convertedValue.toString());
  };

  const calculateTorsionalConstantImperial = (b, d) => {
    const parsedB = parseFloat(b);
    const parsedD = parseFloat(d);

    if (!isNaN(parsedB) && !isNaN(parsedD)) {
      const torsionalConstant = ((parsedB * Math.pow(parsedD, 3)) / 3 - 0.21 * Math.pow(parsedD, 4) + 0.0175 * Math.pow(parsedD, 8) / Math.pow(parsedB, 4)).toFixed(2);
      const currentFactor = TorsionalConstantConversionFactorsImperial['in⁴'][TorsionalConstantUnitsImperial.indexOf(torsionalConstantSelectedUnitImperial)];
      setTorsionalConstantImperial((torsionalConstant * currentFactor).toString());
    }
  };

  useEffect(() => {
    calculateTorsionalConstantImperial(inputValueImperial, HeightInputValueImperial);
  }, [inputValueImperial, HeightInputValueImperial, torsionalConstantSelectedUnitImperial]);


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
            <h3 className='claculator-conversation-title'>Width (b) :</h3>
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
            <h3 className='claculator-conversation-title'>Height (d) :</h3>
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
          <br />

          <button className='structure-analysis-calculator-calculator-right-show-hidden-btn' onClick={props.toggleBreaks}>{props.togglefunction ? ' Hide ' : ' Solve '}</button>

          <div className={props.togglefunction ? 'show Sectionmodules  ' : 'hidden Sectionmodules  '} style={{
            height: '45vw',
          }}>
            <br />
            <br />
            <h3 className='text-aligh-center color-white'>Section Properties Of Beam</h3>
            <br />
            <br />
            <div className='' style={{
              borderRadius: '10px',
              width: '90%',
              margin: 'auto',
            }}>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h3 className='color-white bold-heading-solution' style={{ fontSize: '1.8vw', width: '100%' }}>
                  Area:
                </h3>
                <div className='Calculator-Side-A'>
                  <div className='input-and-select-div'>
                    <input
                      className='calculator-input'
                      type="number"
                      value={Area}
                      readOnly

                    />
                    <select
                      className='Calculator-select-option'
                      value={AreaUnit}
                      onChange={(e) => setAreaUnit(e.target.value)}
                    >
                      {AreaUnits.map((unit) => (
                        <option key={unit} value={unit}>
                          {unit}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <br />

              <h3 className='color-white bold-heading-solution' style={{ fontSize: '1.8vw' }}>Centroid:</h3>

              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h3 className='claculator-conversation-title'>
                  X
                  <span className='LowerPowerminus2px sectionmodulesSolutionLowerPower'>c </span>
                  :
                </h3>
                <div className='Calculator-Side-A'>
                  <div className='input-and-select-div'>
                    <input
                      className='calculator-input'
                      type="number"
                      value={CentroidXc}
                      readOnly

                    />
                    <select
                      className='Calculator-select-option'
                      value={CentroidXcSelectedUnit}
                      onChange={(e) => setCentroidXcSelectedUnit(e.target.value)}
                    >
                      {CentroidXcUnits.map((unit) => (
                        <option key={unit} value={unit}>
                          {unit}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h3 className='claculator-conversation-title'>
                  Y
                  <span className='LowerPowerminus2px sectionmodulesSolutionLowerPower' style={{ left: '-3px' }}>c </span>
                  :
                </h3>
                <div className='Calculator-Side-A'>
                  <div className='input-and-select-div'>
                    <input
                      className='calculator-input'
                      type="number"
                      value={CentriodYc}
                      readOnly

                    />
                    <select
                      className='Calculator-select-option'
                      value={CentriodYcSelectedUnit}
                      onChange={(e) => setCentriodYcSelectedUnit(e.target.value)}
                    >
                      {CentriodYcUnits.map((unit) => (
                        <option key={unit} value={unit}>
                          {unit}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <br />

              <h3 className='color-white bold-heading-solution' style={{ fontSize: '1.8vw' }}>Moments of Inertia :</h3>

              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h3 className='claculator-conversation-title'>
                  I
                  <span className='LowerPowerminus2px sectionmodulesSolutionLowerPower'>x </span>
                  :
                </h3>
                <div className='Calculator-Side-A'>
                  <div className='input-and-select-div'>
                    <input
                      className='calculator-input'
                      type="number"
                      value={momentOfInertiaIx}
                      readOnly

                    />
                    <select
                      className='Calculator-select-option'
                      value={momentOfInertiaIxSelectedUnit}
                      onChange={(e) => setMomentOfInertiaIxSelectedUnit(e.target.value)}
                    >
                      {MomentOfInertiaIxUnits.map((unit) => (
                        <option key={unit} value={unit}>
                          {unit}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h3 className='claculator-conversation-title'>
                  I
                  <span className='LowerPowerminus2px sectionmodulesSolutionLowerPower'>y </span>
                  :
                </h3>
                <div className='Calculator-Side-A'>
                  <div className='input-and-select-div'>
                    <input
                      className='calculator-input'
                      type="number"
                      value={momentOfInertiaIy}
                      readOnly

                    />
                    <select
                      className='Calculator-select-option'
                      value={momentOfInertiaIySelectedUnit}
                      onChange={(e) => setMomentOfInertiaIySelectedUnit(e.target.value)}
                    >
                      {MomentOfInertiaIyUnits.map((unit) => (
                        <option key={unit} value={unit}>
                          {unit}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <h3 className='color-white bold-heading-solution' style={{ fontSize: '1.8vw' }}>Section Modulus :</h3>

              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h3 className='claculator-conversation-title'>
                  S
                  <span className='LowerPowerminus2px sectionmodulesSolutionLowerPower'>x </span>
                  :
                </h3>
                <div className='Calculator-Side-A'>
                  <div className='input-and-select-div'>
                    <input
                      className='calculator-input'
                      type="number"
                      value={(SectionModulesSx)}
                      readOnly

                    />
                    <select
                      className='Calculator-select-option'
                      value={SectionModulesSxSelectedUnit}
                      onChange={(e) => setSectionModulesSxSelectedUnit(e.target.value)}
                    >
                      {SectionModulesSxUnits.map((unit) => (
                        <option key={unit} value={unit}>
                          {unit}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h3 className='claculator-conversation-title'>
                  S
                  <span className='LowerPowerminus2px sectionmodulesSolutionLowerPower'>y </span>
                  :
                </h3>
                <div className='Calculator-Side-A'>
                  <div className='input-and-select-div'>
                    <input
                      className='calculator-input'
                      type="number"
                      value={(SectionModulesSy)}
                      readOnly

                    />
                    <select
                      className='Calculator-select-option'
                      value={SectionModulesSelectedUnitSy}
                      onChange={(e) => setSectionModulesSelectedUnitSy(e.target.value)}
                    >
                      {SectionModulesSyUnits.map((unit) => (
                        <option key={unit} value={unit}>
                          {unit}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>


              </div>

              <h3 className='color-white bold-heading-solution' style={{ fontSize: '1.8vw' }}>Torsional Constant:</h3>

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
          </div >
        </>
      )}










      {props.MetricOrImperial === 'option2' && (
        <>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h3 className='claculator-conversation-title'>Width (b) :</h3>
            <div className='Calculator-Side-A'>
              <input
                className='calculator-input'
                type="number"
                value={inputValueImperial}
                onChange={(e) => handleInputChangeImperial(e.target.value)}
              />
              <select
                className='Calculator-select-option'
                value={selectedUnitImperial}
                onChange={(e) => handleUnitChangeImperial(e.target.value)}
              >
                {unitsImperial.map((unit) => (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h3 className='claculator-conversation-title'>Height (d) :</h3>
            <div className='Calculator-Side-A'>
              <input
                className='calculator-input'
                type="number"
                value={HeightInputValueImperial}
                onChange={(e) => handleHeightInputValueImperial(e.target.value)}
              />
              <select
                className='Calculator-select-option'
                value={heightSelectedUnitImperial}
                onChange={(e) => handleHeightSelectedUnitImperial(e.target.value)}
              >
                {HeightunitsImperial.map((unit) => (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <br />

          <button className='structure-analysis-calculator-calculator-right-show-hidden-btn' onClick={props.toggleBreaks}>{props.togglefunction ? ' Hide ' : ' Solve '}</button>

          <div className={props.togglefunction ? 'show Sectionmodules  ' : 'hidden Sectionmodules  '} style={{ height: '45vw' }}>
            <br />
            <br />
            <h3 className='text-aligh-center color-white'>Section Properties Of Beam</h3>
            <br />
            <br />
            <div className='' style={{ borderRadius: '10px', width: '90%', margin: 'auto' }}>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h3 className='color-white bold-heading-solution' style={{ fontSize: '1.8vw', width: '100%' }}>Area:</h3>
                <div className='Calculator-Side-A'>
                  <div className='input-and-select-div'>
                    <input
                      className='calculator-input'
                      type="number"
                      value={AreaImperial}
                      readOnly
                    />
                    <select
                      className='Calculator-select-option'
                      value={AreaUnitImperial}
                      onChange={(e) => handleAreaUnitChangeImperial(e.target.value)}
                    >
                      {AreaUnitsImperial.map((unit) => (
                        <option key={unit} value={unit}>
                          {unit}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <br />

              <h3 className='color-white bold-heading-solution' style={{ fontSize: '1.8vw' }}>Centroid:</h3>

              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h3 className='claculator-conversation-title'>
                  X
                  <span className='LowerPowerminus2px sectionmodulesSolutionLowerPower'>c </span>
                  :
                </h3>
                <div className='Calculator-Side-A'>
                  <div className='input-and-select-div'>
                    <input
                      className='calculator-input'
                      type="number"
                      value={CentroidXcImperial}
                      readOnly
                    />
                    <select
                      className='Calculator-select-option'
                      value={CentroidXcSelectedUnitImperial}
                      onChange={(e) => handleCentroidXcUnitChangeImperial(e.target.value)}
                    >
                      {CentroidXcUnitsImperial.map((unit) => (
                        <option key={unit} value={unit}>
                          {unit}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h3 className='claculator-conversation-title'>
                  Y
                  <span className='LowerPowerminus2px sectionmodulesSolutionLowerPower' style={{ left: '-3px' }}>c </span>
                  :
                </h3>
                <div className='Calculator-Side-A'>
                  <div className='input-and-select-div'>
                    <input
                      className='calculator-input'
                      type="number"
                      value={CentriodYcImperial}
                      readOnly
                    />
                    <select
                      className='Calculator-select-option'
                      value={CentriodYcSelectedUnitImperial}
                      onChange={(e) => handleCentriodYcUnitChangeImperial(e.target.value)}
                    >
                      {CentriodYcUnitsImperial.map((unit) => (
                        <option key={unit} value={unit}>
                          {unit}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <br />

              <h3 className='color-white bold-heading-solution' style={{ fontSize: '1.8vw' }}>Moments of Inertia :</h3>

              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h3 className='claculator-conversation-title'>
                  I
                  <span className='LowerPowerminus2px sectionmodulesSolutionLowerPower'>x </span>
                  :
                </h3>
                <div className='Calculator-Side-A'>
                  <div className='input-and-select-div'>
                    <input
                      className='calculator-input'
                      type="number"
                      value={momentOfInertiaIxImperial}
                      readOnly
                    />
                    <select
                      className='Calculator-select-option'
                      value={momentOfInertiaIxSelectedUnitImperial}
                      onChange={(e) => handleMomentOfInertiaIxUnitChangeImperial(e.target.value)}
                    >
                      {MomentOfInertiaIxUnitsImperial.map((unit) => (
                        <option key={unit} value={unit}>
                          {unit}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h3 className='claculator-conversation-title'>
                  I
                  <span className='LowerPowerminus2px sectionmodulesSolutionLowerPower'>y </span>
                  :
                </h3>
                <div className='Calculator-Side-A'>
                  <div className='input-and-select-div'>
                    <input
                      className='calculator-input'
                      type="number"
                      value={momentOfInertiaIyImperial}
                      readOnly
                    />
                    <select
                      className='Calculator-select-option'
                      value={momentOfInertiaIySelectedUnitImperial}
                      onChange={(e) => handleMomentOfInertiaIyUnitChangeImperial(e.target.value)}
                    >
                      {MomentOfInertiaIyUnitsImperial.map((unit) => (
                        <option key={unit} value={unit}>
                          {unit}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <h3 className='color-white bold-heading-solution' style={{ fontSize: '1.8vw' }}>Section Modulus :</h3>

              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h3 className='claculator-conversation-title'>
                  S
                  <span className='LowerPowerminus2px sectionmodulesSolutionLowerPower'>x </span>
                  :
                </h3>
                <div className='Calculator-Side-A'>
                  <div className='input-and-select-div'>
                    <input
                      className='calculator-input'
                      type="number"
                      value={SectionModulesSxImperial}
                      readOnly
                    />
                    <select
                      className='Calculator-select-option'
                      value={SectionModulesSxSelectedUnitImperial}
                      onChange={(e) => handleSectionModulesSxUnitChangeImperial(e.target.value)}
                    >
                      {SectionModulesSxUnitsImperial.map((unit) => (
                        <option key={unit} value={unit}>
                          {unit}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h3 className='claculator-conversation-title'>
                  S
                  <span className='LowerPowerminus2px sectionmodulesSolutionLowerPower'>y </span>
                  :
                </h3>
                <div className='Calculator-Side-A'>
                  <div className='input-and-select-div'>
                    <input
                      className='calculator-input'
                      type="number"
                      value={SectionModulesSyImperial}
                      readOnly
                    />
                    <select
                      className='Calculator-select-option'
                      value={SectionModulesSySelectedUnitImperial}
                      onChange={(e) => handleSectionModulesSyUnitChangeImperial(e.target.value)}
                    >
                      {SectionModulesSyUnitsImperial.map((unit) => (
                        <option key={unit} value={unit}>
                          {unit}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <br />

              <h3 className='color-white bold-heading-solution' style={{ fontSize: '1.8vw' }}>Torsional Constant:</h3>

              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h3 className='claculator-conversation-title'>
                  K :
                </h3>
                <div className='Calculator-Side-A'>
                  <div className='input-and-select-div'>
                    <input
                      className='calculator-input'
                      type="number"
                      value={torsionalConstantImperial}
                      onChange={(e) => calculateTorsionalConstantImperial(e.target.value)}
                    />
                    <select
                      className='Calculator-select-option'
                      value={torsionalConstantSelectedUnitImperial}
                      onChange={(e) => handleTorsionalConstantUnitChangeImperial(e.target.value)}
                    >
                      {TorsionalConstantUnitsImperial.map((unit) => (
                        <option key={unit} value={unit}>
                          {unit}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </>
      )}
    </>
  );
}

export default UnitConverter;
