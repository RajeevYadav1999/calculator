import React, { useState, useEffect } from 'react';

const units = ['mm', 'cm', 'm'];
const conversionFactors = {
  mm: [1, 0.1, 0.001],
  cm: [10, 1, 0.01],
  m: [1000, 100, 1],
};

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('mm');
  const [backgroundValue, setBackgroundValue] = useState(0);

  const handleInputChange = (value) => {
    setInputValue(value);
    const valueInMm = parseFloat(value) * conversionFactors[selectedUnit][0];
    setBackgroundValue(valueInMm);
  };

  const handleUnitChange = (unit) => {
    const valueInMm = parseFloat(inputValue) * conversionFactors[selectedUnit][0];
    const newValue = valueInMm / conversionFactors[unit][0];
    setSelectedUnit(unit);
    setInputValue(newValue.toString());
  };

  const Heightunits = ['mm', 'cm', 'm'];
  const HeightConversionFactors = {
    mm: [1, 0.1, 0.001],
    cm: [10, 1, 0.01],
    m: [1000, 100, 1],
  };

  const [HeightInputValue, setHeightInputValue] = useState('');
  const [heightSelectedUnit, setHeightSelectedUnit] = useState('mm');
  const [backgroundHeightValue, setBackgroundHeightValue] = useState(0);

  const handleHeightInputValue = (value) => {
    setHeightInputValue(value);
    const valueInMm = parseFloat(value) * HeightConversionFactors[heightSelectedUnit][0];
    setBackgroundHeightValue(valueInMm);
  };

  const handleHeightSelectedUnit = (unit) => {
    const valueInMm = parseFloat(HeightInputValue) * HeightConversionFactors[heightSelectedUnit][0];
    const newValue = valueInMm / HeightConversionFactors[unit][0];
    setHeightSelectedUnit(unit);
    setHeightInputValue(newValue.toString());
  };

  const CentroidUnits = ['mm', 'cm', 'm'];
  const CentroidconversionFactors = {
    mm: [1, 0.1, 0.001],
    cm: [10, 1, 0.01],
    m: [1000, 100, 1],
  };

  const [Centroid, setCentroid] = useState('');
  const [CentroidSelectedunit, setCentroidSelectedUnit] = useState('mm');

  const handleCentroidUnitChange = (unit) => {
    setCentroidSelectedUnit(unit);
    const CentroidFactor = CentroidconversionFactors[unit][CentroidUnits.indexOf(CentroidSelectedunit)];
    setCentroid((parseFloat(Centroid) / CentroidFactor));
  };

  const calculateCentroidInputChangeValue = () => {
    setCentroid(backgroundValue);
  };

  useEffect(() => {
    calculateCentroidInputChangeValue();
  }, [backgroundValue]);

  // MomentOfInertia
  const [momentOfInertia, setMomentOfInertiaIx] = useState('');
  const [momentOfInertiaSelectedUnit, setMomentOfInertiaIxSelectedUnit] = useState('mm⁴');

  const MomentOfInertiaUnits = ['mm⁴', 'cm⁴', 'm⁴'];
  const MomentOfInertiaConversionFactors = {
    'mm⁴': [1, 1e-4, 1e-12],
    'cm⁴': [1e4, 1, 1e-8],
    'm⁴': [1e12, 1e8, 1],
  };

  const handleMomentOfInertiaUnitChange = (newUnit) => {
    const currentFactor = MomentOfInertiaConversionFactors[momentOfInertiaSelectedUnit][MomentOfInertiaUnits.indexOf(newUnit)];
    const convertedValue = parseFloat(momentOfInertia) * currentFactor;
    setMomentOfInertiaIxSelectedUnit(newUnit);
    setMomentOfInertiaIx(convertedValue.toString());
  };

  const calculateMomentOfInertia = () => {
    const parsedB = backgroundValue;
    const parsedD = backgroundHeightValue;
    if (!isNaN(parsedB) && !isNaN(parsedD)) {
      const momentOfInertiamultiplyValue = ((Math.pow(parsedB, 4) - Math.pow(parsedD, 4)));
      const divdeinertiaValue = 4;
      const momentOfInertia = ((Math.PI * momentOfInertiamultiplyValue) / divdeinertiaValue).toFixed(3);
      const currentFactor = MomentOfInertiaConversionFactors['mm⁴'][MomentOfInertiaUnits.indexOf(momentOfInertiaSelectedUnit)];
      setMomentOfInertiaIx((momentOfInertia * currentFactor).toString());
    }
  };

  useEffect(() => {
    calculateMomentOfInertia();
  }, [backgroundValue, backgroundHeightValue, momentOfInertiaSelectedUnit]);

  // SectionModules
  const SectionModulesUnits = ['mm³', 'cm³', 'm³'];
  const SectionModulesConversionUnit = {
    'mm³': [1, 0.001, 1e-9],
    'cm³': [1000, 1, 1e-6],
    'm³': [1e9, 1e6, 1],
  };
  const [sectionModules, setSectionModules] = useState('');
  const [sectionModulesSelectedUnit, setSectionModulesSelectedUnit] = useState('mm³');
  
  const handleSectionModulesUnitChange = (unit) => {
    setSectionModulesSelectedUnit(unit);
    const SectionModulesFactor = SectionModulesConversionUnit[unit][SectionModulesUnits.indexOf(sectionModulesSelectedUnit)];
    setSectionModules((parseFloat(sectionModules) * SectionModulesFactor));
  };

  const calculateSectionModules = () => {
    const parsedB = backgroundValue;
    const parsedD = backgroundHeightValue;
    const momentOfInertiamultiplyValue = ((Math.pow(parsedB, 4) - Math.pow(parsedD, 4)));
    const divdeinertiaValue = 4;
    const Iy = (Math.PI * momentOfInertiamultiplyValue) / divdeinertiaValue;
    const Xc = backgroundValue;
    const sectionModules = (Iy / Xc).toFixed(3);
    setSectionModules(sectionModules);
  };

  useEffect(() => {
    calculateSectionModules();
  }, [momentOfInertia, Centroid]);

  return (
    <div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
      <div>
        <label>Input Value:</label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => handleInputChange(e.target.value)}
        />
        <select value={selectedUnit} onChange={(e) => handleUnitChange(e.target.value)}>
          {units.map((unit) => (
            <option key={unit} value={unit}>{unit}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Height Input Value:</label>
        <input
          type="text"
          value={HeightInputValue}
          onChange={(e) => handleHeightInputValue(e.target.value)}
        />
        <select value={heightSelectedUnit} onChange={(e) => handleHeightSelectedUnit(e.target.value)}>
          {Heightunits.map((unit) => (
            <option key={unit} value={unit}>{unit}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Centroid:</label>
        <input type="text" value={Centroid} readOnly />
        <select value={CentroidSelectedunit} onChange={(e) => handleCentroidUnitChange(e.target.value)}>
          {CentroidUnits.map((unit) => (
            <option key={unit} value={unit}>{unit}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Moment of Inertia:</label>
        <input type="text" value={momentOfInertia} readOnly />
        <select value={momentOfInertiaSelectedUnit} onChange={(e) => handleMomentOfInertiaUnitChange(e.target.value)}>
          {MomentOfInertiaUnits.map((unit) => (
            <option key={unit} value={unit}>{unit}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Section Modules:</label>
        <input type="text" value={sectionModules} readOnly />
        <select value={sectionModulesSelectedUnit} onChange={(e) => handleSectionModulesUnitChange(e.target.value)}>
          {SectionModulesUnits.map((unit) => (
            <option key={unit} value={unit}>{unit}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default App;
