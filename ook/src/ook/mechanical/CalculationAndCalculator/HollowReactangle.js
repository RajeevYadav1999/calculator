import React, { useState, useEffect } from 'react';

function UnitConverter(props) {
  const Units = ['mm', 'cm', 'm'];
  const ConversionFactors = {
    mm: [1, 0.1, 0.001],
    cm: [10, 1, 0.01],
    m: [1000, 100, 1],
  };
  const [inputValue, setInputValue] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('mm');
  const [internalinputValue, setInternalinputValue] = useState(0); // Always in mm

  const handleInputChange = (value) => {
    setInputValue(value);
    const factor = ConversionFactors[selectedUnit][0];
    setInternalinputValue(parseFloat(value) * factor);
  };

  const handleUnitChange = (unit) => {
    const newMetricValueInMM = parseFloat(inputValue) * ConversionFactors[selectedUnit][0];
    const convertedValue = newMetricValueInMM / ConversionFactors[unit][0];
    setSelectedUnit(unit);
    setInputValue(convertedValue.toFixed(5));
  };


  const Heightunits = ['mm', 'cm', 'm'];
  const HeightConversionFactors = {
    mm: [1, 0.1, 0.001],
    cm: [10, 1, 0.01],
    m: [1000, 100, 1],
  };
  const [HeightInputValue, setHeightInputValue] = useState('');
  const [heightSelectedUnit, setheightSelectedUnit] = useState('mm');
  const [internalHeightInputValue, setinternalHeightInputValue] = useState(0); // Always in mm

  const handleHeightInputValue = (value) => {
    setHeightInputValue(value);
    const factor = HeightConversionFactors[heightSelectedUnit][0];
    setinternalHeightInputValue(parseFloat(value) * factor);
  };

  const handleHeightSelectedUnit = (unit) => {
    const newMetricValueInMM = parseFloat(HeightInputValue) * HeightConversionFactors[heightSelectedUnit][0];
    const convertedValue = newMetricValueInMM / HeightConversionFactors[unit][0];
    setheightSelectedUnit(unit);
    setHeightInputValue(convertedValue.toFixed(5));
  };



  const Innerunits = ['mm', 'cm', 'm'];
  const InnerconversionFactors = {
    mm: [1, 0.1, 0.001],
    cm: [10, 1, 0.01],
    m: [1000, 100, 1],
  };
  const [inputInnerValue, setinputInnerValue] = useState('');
  const [selectedInnerUnit, setSelectedInnerUnit] = useState('mm');
  const [internalinputInnerValue, setInternalinputInnerValue] = useState(0); // Always in mm

  const handleInputinnerChange = (value) => {
    setinputInnerValue(value);
    const factor = InnerconversionFactors[selectedInnerUnit][0];
    setInternalinputInnerValue(parseFloat(value) * factor);
  };

  const handleUnitinnerChange = (unit) => {
    const newMetricValueInMM = parseFloat(inputInnerValue) * InnerconversionFactors[selectedInnerUnit][0];
    const convertedValue = newMetricValueInMM / InnerconversionFactors[unit][0];
    setSelectedInnerUnit(unit);
    setinputInnerValue(convertedValue.toFixed(5));
  };

  const HeightInnerunits = ['mm', 'cm', 'm'];
  const HeightInnerConversionFactors = {
    mm: [1, 0.1, 0.001],
    cm: [10, 1, 0.01],
    m: [1000, 100, 1],
  };
  const [HeightInnerInputValue, setHeightInnerInputValue] = useState('');
  const [heightinnerSelectedUnit, setheightinnerSelectedUnit] = useState('mm');
  const [internalHeightInnerInputValue, setInternalHeightInnerInputValue] = useState(0); // Always in mm

  const handleHeightinnerInputValue = (value) => {
    setHeightInnerInputValue(value);
    const factor = HeightInnerConversionFactors[heightinnerSelectedUnit][0];
    setInternalHeightInnerInputValue(parseFloat(value) * factor);
  };

  const handleHeightinnerSelectedUnit = (unit) => {
    const newMetricValueInMM = parseFloat(HeightInnerInputValue) * HeightInnerConversionFactors[heightinnerSelectedUnit][0];
    const convertedValue = newMetricValueInMM / HeightInnerConversionFactors[unit][0];
    setheightinnerSelectedUnit(unit);
    setHeightInnerInputValue(convertedValue.toFixed(5));
  };

  // const HeightInnerunits = ['mm', 'cm', 'm'];

  // const HeightInnerConversionFactors = {
  //   mm: [1, 0.1, 0.001],
  //   cm: [10, 1, 0.01],
  //   m: [1000, 100, 1],
  // };

  // const [HeightInnerInputValue, setHeightinnerInputValue] = useState('');
  // const [heightinnerSelectedUnit, setHeightinnerSelectedUnit] = useState('mm');
  // const [internalHeightInnerInputValue, setInternalHeightInnerInputValue] = useState(0); // Always in mm

  // const handleHeightinnerInputValue = (value) => {
  //   setHeightinnerInputValue(value);
  //   const factor = HeightInnerConversionFactors[heightinnerSelectedUnit][0];
  //   setInternalHeightInnerInputValue(parseFloat(value) * factor);
  // };

  // const handleHeightinnerSelectedUnit = (unit) => {
  //   const newMetricValueInMM = parseFloat(HeightInputValue) * HeightInnerConversionFactors[heightinnerSelectedUnit][0];
  //   const convertedValue = newMetricValueInMM / HeightInnerConversionFactors[unit][0];
  //   setHeightinnerSelectedUnit(unit);
  //   setHeightinnerInputValue(convertedValue.toFixed(5));
  // };


  // Area
  const AreaUnits = ['mm²', 'cm²', 'm²'];
  const AreaConversionFactors = {
    'mm²': [1, 0.01, 0.000001],
    'cm²': [100, 1, 0.0001],
    'm²': [1000000, 10000, 1],
  };
  const [Area, setArea] = useState('');
  const [AreaUnit, setAreaUnit] = useState('mm²');

  // CentroidXc
  const CentroidXcUnits = ['mm', 'cm', 'm'];

  const [centroidXc, setCentroidXc] = useState('');
  const [centroidXcSelectedUnit, setCentroidXcSelectedUnit] = useState('mm');

  // CentroidYc
  const CentroidYcUnits = ['mm', 'cm', 'm'];

  const [centroidYc, setCentroidYc] = useState('');
  const [centroidYcSelectedUnit, setCentroidYcSelectedUnit] = useState('mm');

  const MomentOfInertiaIxUnits = ['mm⁴', 'cm⁴', 'm⁴'];
  const MomentOfInertiaIxConversionFactors = {
    'mm⁴': [1, 1e-4, 1e-12],
    'cm⁴': [1e4, 1, 1e-8],
    'm⁴': [1e12, 1e8, 1],
  };

  const [momentOfInertiaIx, setMomentOfInertiaIx] = useState('');
  const [momentOfInertiaIxSelectedUnit, setMomentOfInertiaIxSelectedUnit] = useState('mm⁴');


  // Moment of Inertia Iy
  const MomentOfInertiaIyUnits = ['mm⁴', 'cm⁴', 'm⁴'];
  const MomentOfInertiaIyConversionFactors = {
    'mm⁴': [1, 1e-4, 1e-12],
    'cm⁴': [1e4, 1, 1e-8],
    'm⁴': [1e12, 1e8, 1],
  };
  const [momentOfInertiaIy, setMomentOfInertiaIy] = useState('');
  const [momentOfInertiaIySelectedUnit, setMomentOfInertiaIySelectedUnit] = useState('mm⁴');


  // Section Modulus Sx
  const SectionModulusSxUnits = ['mm³', 'cm³', 'm³'];
  const SectionModulusSxConversionFactors = {
    'mm³': [1, 1e-3, 1e-9],
    'cm³': [1e3, 1, 1e-6],
    'm³': [1e9, 1e6, 1],
  };
  const [sectionModulusSx, setSectionModulusSx] = useState('');
  const [sectionModulusSxSelectedUnit, setSectionModulusSxSelectedUnit] = useState('mm³');






  const SectionModulusSyUnits = ['mm³', 'cm³', 'm³'];
  const SectionModulusSyConversionFactors = {
    'mm³': [1, 1e-3, 1e-9],
    'cm³': [1e3, 1, 1e-6],
    'm³': [1e9, 1e6, 1],
  };
  const [SectionModulusSy, setSectionModulusSy] = useState('');
  const [SectionModulusSySelectedUnit, setSectionModulusSySelectedUnit] = useState('mm³');


  // Torsional Constant
  const TorsionalConstantUnits = ['mm⁴', 'cm⁴', 'm⁴'];
  const TorsionalConstantConversionFactors = {
    'mm⁴': [1, 1e-4, 1e-12],
    'cm⁴': [1e4, 1, 1e-8],
    'm⁴': [1e12, 1e8, 1],
  };
  const [torsionalConstant, setTorsionalConstant] = useState('');
  const [torsionalConstantSelectedUnit, setTorsionalConstantSelectedUnit] = useState('mm⁴');



  useEffect(() => {
    const value = parseFloat(internalinputValue) * HeightConversionFactors[heightSelectedUnit][0];
    if (!isNaN(value)) {
      const b = internalinputValue
      const d = internalHeightInputValue
      const bi = internalinputInnerValue
      const di = internalHeightInnerInputValue
      const areaValue = (d * b) - (di * bi);
      setArea((areaValue / AreaConversionFactors[AreaUnit][0]));
    } else {
      setArea('');
    }
  }, [internalinputValue, internalinputInnerValue, internalHeightInnerInputValue, internalHeightInputValue, AreaUnit]);


  useEffect(() => {
    const value = internalinputValue;
    const centroidValue = (value / 2);
    setCentroidXc((centroidValue / ConversionFactors[centroidXcSelectedUnit][0]));
  }, [internalinputValue, internalinputInnerValue, internalHeightInnerInputValue, internalHeightInputValue, centroidXcSelectedUnit]);


  // CentriodYcUnits

  useEffect(() => {
    const d = internalHeightInputValue;
    const centroidValue = (d / 2);
    setCentroidYc((centroidValue / ConversionFactors[centroidYcSelectedUnit][0]));
  }, [internalinputValue, internalinputInnerValue, internalHeightInnerInputValue, internalHeightInputValue, centroidYcSelectedUnit]);



  const b = internalinputValue
  const d = internalHeightInputValue
  const bi = internalinputInnerValue
  const di = internalHeightInnerInputValue

  useEffect(() => {
    const value = b;
    if (!isNaN(value)) {
      const momentOfInertiaIx =( ((b * Math.pow(d, 3)) - (bi * Math.pow(di, 3))) / 12).toFixed(1);
      // const momentOfInertiaIx = (value * Math.pow(dvalue, 3)) / 12;
      // const inertia = ((value ** 4) / 12);
      const convertedValue = (momentOfInertiaIx * MomentOfInertiaIxConversionFactors['mm⁴'][MomentOfInertiaIxUnits.indexOf(momentOfInertiaIxSelectedUnit)]);
      setMomentOfInertiaIx(convertedValue);
    }
  }, [b, d, bi, di, momentOfInertiaIxSelectedUnit]);

  useEffect(() => {
    const value = b;
    if (!isNaN(value)) {
      const momentOfInertiaIy = (((d * Math.pow(b, 3)) - (di * Math.pow(bi, 3))) / 12).toFixed(1)
      // const momentOfInertiaIy = (dvalue * Math.pow(value, 3)) / 12;
      // const inertia = ((value ** 4) / 12);
      const convertedValue = (momentOfInertiaIy * MomentOfInertiaIyConversionFactors['mm⁴'][MomentOfInertiaIyUnits.indexOf(momentOfInertiaIySelectedUnit)]);
      setMomentOfInertiaIy(convertedValue);
    }
  }, [b, d, bi, di, momentOfInertiaIySelectedUnit]);


  useEffect(() => {
    const value = b
    if (!isNaN(value)) {
      const momentOfInertia = ((b * Math.pow(d, 3)) - (bi * Math.pow(di, 3))) / 12;
      const centroid = d / 2;
      const sectionModulesValue = (momentOfInertia / centroid).toFixed(1);
      const convertedValue = (sectionModulesValue * SectionModulusSxConversionFactors['mm³'][SectionModulusSxUnits.indexOf(sectionModulusSxSelectedUnit)]);
      setSectionModulusSx(convertedValue);
    }
  }, [b, d, bi, di, sectionModulusSxSelectedUnit]);
  useEffect(() => {
    const value = b;
    if (!isNaN(value)) {
      const momentOfInertia = ((d * Math.pow(b, 3)) - (di * Math.pow(bi, 3))) / 12;
      const centroid = b / 2;
      const sectionModulesValue = (momentOfInertia / centroid).toFixed(1);
      const convertedValue = (sectionModulesValue * SectionModulusSyConversionFactors['mm³'][SectionModulusSyUnits.indexOf(SectionModulusSySelectedUnit)]);
      setSectionModulusSy(convertedValue);
    }
  }, [b, d, bi, di, SectionModulusSySelectedUnit]);


  useEffect(() => {
    const value = b;
    if (!isNaN(value)) {
      const torsional = ((2 * Math.PI * Math.pow(bi * (b - di), 2) * Math.pow(d - bi, 2)) / (b * di + d * bi - Math.pow(di, 2) - Math.pow(bi, 2))).toFixed(2);
      const convertedValue = (torsional * TorsionalConstantConversionFactors['mm⁴'][TorsionalConstantUnits.indexOf(torsionalConstantSelectedUnit)]);
      setTorsionalConstant(convertedValue);
    }
  }, [b, d, bi, di, torsionalConstantSelectedUnit]);

  // imperial units


  const Imperialunits = ['in'];

  const ImperialconversionFactors = {
    in: [1],
  };

  const [inputValueImperial, setInputValueImperial] = useState('');
  const [selectedUnitImperial, setSelectedUnitImperial] = useState('in');

  const handleInputChangeImperial = (value) => {
    setInputValueImperial(value);
  };

  const handleUnitChangeImperial = (unit) => {
    setSelectedUnitImperial(unit);
    const factor = ImperialconversionFactors[unit][Imperialunits.indexOf(selectedUnitImperial)];
    setInputValueImperial((parseFloat(inputValueImperial) / factor));
  };

  const HeightUnitsImperial = ['in'];

  const HeightConversionFactorsImperial = {
    in: [1],
  };

  const [HeightInputValueImperial, setHeightInputValueImperial] = useState('');
  const [heightSelectedUnitImperial, setHeightSelectedUnitImperial] = useState('in');

  const handleHeightInputChangeImperial = (value) => {
    setHeightInputValueImperial(value);
  };

  const handleHeightUnitChangeImperial = (unit) => {
    setHeightSelectedUnitImperial(unit);
    const factor = HeightConversionFactorsImperial[unit][HeightUnitsImperial.indexOf(heightSelectedUnitImperial)];
    setHeightInputValueImperial((parseFloat(HeightInputValueImperial) / factor));
  };

  const InnerUnitsImperial = ['in'];

  const InnerConversionFactorsImperial = {
    in: [1],
  };

  const [inputInnerValueImperial, setInputInnerValueImperial] = useState('');
  const [selectedInnerUnitImperial, setSelectedInnerUnitImperial] = useState('in');

  const handleInputInnerChangeImperial = (value) => {
    setInputInnerValueImperial(value);
  };

  const handleUnitInnerChangeImperial = (unit) => {
    setSelectedInnerUnitImperial(unit);
    const factor = InnerConversionFactorsImperial[unit][InnerUnitsImperial.indexOf(selectedInnerUnitImperial)];
    setInputInnerValueImperial((parseFloat(inputInnerValueImperial) / factor));
  };

  const HeightInnerUnitsImperial = ['in'];

  const HeightInnerConversionFactorsImperial = {
    in: [1],
  };

  const [HeightInnerInputValueImperial, setHeightInnerInputValueImperial] = useState('');
  const [heightInnerSelectedUnitImperial, setHeightInnerSelectedUnitImperial] = useState('in');

  const handleHeightInnerInputChangeImperial = (value) => {
    setHeightInnerInputValueImperial(value);
  };

  const handleHeightInnerUnitChangeImperial = (unit) => {
    setHeightInnerSelectedUnitImperial(unit);
    const factor = HeightInnerConversionFactorsImperial[unit][HeightInnerUnitsImperial.indexOf(heightInnerSelectedUnitImperial)];
    setHeightInnerInputValueImperial((parseFloat(HeightInnerInputValueImperial) / factor));
  };

  // Area
  const AreaUnitsImperial = ['in²'];
  const AreaConversionFactorsImperial = {
    'in²': [1],
  };

  const [areaImperial, setAreaImperial] = useState('');
  const [areaUnitImperial, setAreaUnitImperial] = useState('in²');

  const handleAreaUnitChangeImperial = (unit) => {
    const conversionFactor = AreaConversionFactorsImperial[unit][AreaUnitsImperial.indexOf(areaUnitImperial)];
    const convertedValue = parseFloat(areaImperial) / conversionFactor;
    setAreaUnitImperial(unit);
    setAreaImperial(convertedValue.toString());
  };

  const calculateAreaImperial = () => {
    const b = parseFloat(inputValueImperial);
    const d = parseFloat(HeightInputValueImperial);
    const bi = parseFloat(inputInnerValueImperial);
    const di = parseFloat(HeightInnerInputValueImperial);

    if (!isNaN(b) && !isNaN(d) && !isNaN(bi) && !isNaN(di)) {
      const calculatedArea = (d * b) - (di * bi);
      setAreaImperial(calculatedArea);
    }
  };

  useEffect(() => {
    calculateAreaImperial();
  }, [inputValueImperial, HeightInputValueImperial, inputInnerValueImperial, HeightInnerInputValueImperial]);

  // CentroidXc
  const CentroidXcUnitsImperial = ['in'];
  const CentroidXcConversionFactorsImperial = {
    in: [1],
  };
  const [centroidXcImperial, setCentroidXcImperial] = useState('');
  const [centroidXcSelectedUnitImperial, setCentroidXcSelectedUnitImperial] = useState('in');

  const handleCentroidXcUnitChangeImperial = (unit) => {
    const conversionFactor = CentroidXcConversionFactorsImperial[unit][CentroidXcUnitsImperial.indexOf(centroidXcSelectedUnitImperial)];
    const convertedValue = parseFloat(centroidXcImperial) / conversionFactor;
    setCentroidXcSelectedUnitImperial(unit);
    setCentroidXcImperial(convertedValue.toString());
  };

  const calculateCentroidXcImperial = () => {
    const b = parseFloat(inputValueImperial);
    if (!isNaN(b)) {
      const calculatedCentroidXc = b / 2;
      setCentroidXcImperial(calculatedCentroidXc);
    }
  };

  useEffect(() => {
    calculateCentroidXcImperial();
  }, [inputValueImperial]);

  // CentroidYc
  const CentroidYcUnitsImperial = ['in'];
  const CentroidYcConversionFactorsImperial = {
    in: [1],
  };
  const [centroidYcImperial, setCentroidYcImperial] = useState('');
  const [centroidYcSelectedUnitImperial, setCentroidYcSelectedUnitImperial] = useState('in');

  const handleCentroidYcUnitChangeImperial = (unit) => {
    const conversionFactor = CentroidYcConversionFactorsImperial[unit][CentroidYcUnitsImperial.indexOf(centroidYcSelectedUnitImperial)];
    const convertedValue = parseFloat(centroidYcImperial) / conversionFactor;
    setCentroidYcSelectedUnitImperial(unit);
    setCentroidYcImperial(convertedValue.toString());
  };

  const calculateCentroidYcImperial = () => {
    const d = parseFloat(HeightInputValueImperial);
    if (!isNaN(d)) {
      const calculatedCentroidYc = d / 2;
      setCentroidYcImperial(calculatedCentroidYc);
    }
  };

  useEffect(() => {
    calculateCentroidYcImperial();
  }, [HeightInputValueImperial]);

  // Moment of Inertia Ix
  const MomentOfInertiaIxUnitsImperial = ['in⁴'];
  const MomentOfInertiaIxConversionFactorsImperial = {
    'in⁴': [1],
  };
  const [momentOfInertiaIxImperial, setMomentOfInertiaIxImperial] = useState('');
  const [momentOfInertiaIxSelectedUnitImperial, setMomentOfInertiaIxSelectedUnitImperial] = useState('in⁴');

  const handleMomentOfInertiaIxUnitChangeImperial = (unit) => {
    const conversionFactor = MomentOfInertiaIxConversionFactorsImperial[unit][MomentOfInertiaIxUnitsImperial.indexOf(momentOfInertiaIxSelectedUnitImperial)];
    const convertedValue = parseFloat(momentOfInertiaIxImperial) / conversionFactor;
    setMomentOfInertiaIxSelectedUnitImperial(unit);
    setMomentOfInertiaIxImperial(convertedValue.toString());
  };

  const calculateMomentOfInertiaIxImperial = () => {
    const b = parseFloat(inputValueImperial);
    const d = parseFloat(HeightInputValueImperial);
    const bi = parseFloat(inputInnerValueImperial);
    const di = parseFloat(HeightInnerInputValueImperial);

    if (!isNaN(b) && !isNaN(d) && !isNaN(bi) && !isNaN(di)) {
      const calculatedMomentOfInertiaIx = (((b * Math.pow(d, 3)) - (bi * Math.pow(di, 3))) / 12).toFixed(1);
      setMomentOfInertiaIxImperial(calculatedMomentOfInertiaIx);
    }
  };

  useEffect(() => {
    calculateMomentOfInertiaIxImperial();
  }, [inputValueImperial, HeightInputValueImperial, inputInnerValueImperial, HeightInnerInputValueImperial]);

  // Moment of Inertia Iy
  const MomentOfInertiaIyUnitsImperial = ['in⁴'];
  const MomentOfInertiaIyConversionFactorsImperial = {
    'in⁴': [1],
  };
  const [momentOfInertiaIyImperial, setMomentOfInertiaIyImperial] = useState('');
  const [momentOfInertiaIySelectedUnitImperial, setMomentOfInertiaIySelectedUnitImperial] = useState('in⁴');

  const handleMomentOfInertiaIyUnitChangeImperial = (unit) => {
    const conversionFactor = MomentOfInertiaIyConversionFactorsImperial[unit][MomentOfInertiaIyUnitsImperial.indexOf(momentOfInertiaIySelectedUnitImperial)];
    const convertedValue = parseFloat(momentOfInertiaIyImperial) / conversionFactor;
    setMomentOfInertiaIySelectedUnitImperial(unit);
    setMomentOfInertiaIyImperial(convertedValue.toString());
  };

  const calculateMomentOfInertiaIyImperial = () => {
    const b = parseFloat(inputValueImperial);
    const d = parseFloat(HeightInputValueImperial);
    const bi = parseFloat(inputInnerValueImperial);
    const di = parseFloat(HeightInnerInputValueImperial);

    if (!isNaN(b) && !isNaN(d) && !isNaN(bi) && !isNaN(di)) {
      const calculatedMomentOfInertiaIy = (((d * Math.pow(b, 3)) - (di * Math.pow(bi, 3))) / 12).toFixed(1);
      setMomentOfInertiaIyImperial(calculatedMomentOfInertiaIy);
    }
  };

  useEffect(() => {
    calculateMomentOfInertiaIyImperial();
  }, [inputValueImperial, HeightInputValueImperial, inputInnerValueImperial, HeightInnerInputValueImperial]);

  // Section Modulus Sx
  const SectionModulusSxUnitsImperial = ['in³'];
  const SectionModulusSxConversionFactorsImperial = {
    'in³': [1],
  };
  const [sectionModulusSxImperial, setSectionModulusSxImperial] = useState('');
  const [sectionModulusSxSelectedUnitImperial, setSectionModulusSxSelectedUnitImperial] = useState('in³');

  const handleSectionModulusSxUnitChangeImperial = (unit) => {
    const conversionFactor = SectionModulusSxConversionFactorsImperial[unit][SectionModulusSxUnitsImperial.indexOf(sectionModulusSxSelectedUnitImperial)];
    const convertedValue = parseFloat(sectionModulusSxImperial) / conversionFactor;
    setSectionModulusSxSelectedUnitImperial(unit);
    setSectionModulusSxImperial(convertedValue.toString());
  };

  const calculateSectionModulusSxImperial = () => {
    const b = parseFloat(inputValueImperial);
    const d = parseFloat(HeightInputValueImperial);
    const bi = parseFloat(inputInnerValueImperial);
    const di = parseFloat(HeightInnerInputValueImperial);
    const momentOfInertia = ((b * Math.pow(d, 3)) - (bi * Math.pow(di, 3))) / 12;
    const centroid = d / 2;

    if (!isNaN(momentOfInertia) && !isNaN(centroid) && centroid !== 0) {
      const calculatedSectionModulusSx = (momentOfInertia / centroid).toFixed(2);
      setSectionModulusSxImperial(calculatedSectionModulusSx);
    }
  };

  useEffect(() => {
    calculateSectionModulusSxImperial();
  }, [momentOfInertiaIxImperial, centroidYcImperial]);




  // Section Modulus Sx
  const SectionModulusSyUnitsImperial = ['in³'];
  const SectionModulusSyConversionFactorsImperial = {
    'in³': [1],
  };
  const [sectionModulusSyImperial, setSectionModulusSyImperial] = useState('');
  const [sectionModulusSySelectedUnitImperial, setSectionModulusSySelectedUnitImperial] = useState('in³');

  const handleSectionModulusSyUnitChangeImperial = (unit) => {
    const conversionFactor = SectionModulusSyConversionFactorsImperial[unit][SectionModulusSyUnitsImperial.indexOf(sectionModulusSySelectedUnitImperial)];
    const convertedValue = parseFloat(sectionModulusSyImperial) / conversionFactor;
    setSectionModulusSySelectedUnitImperial(unit);
    setSectionModulusSyImperial(convertedValue.toString());
  };

  const calculateSectionModulusSyImperial = () => {
    const b = parseFloat(inputValueImperial);
    const d = parseFloat(HeightInputValueImperial);
    const bi = parseFloat(inputInnerValueImperial);
    const di = parseFloat(HeightInnerInputValueImperial);
    const momentOfInertia = ((d * Math.pow(b, 3)) - (di * Math.pow(bi, 3))) / 12;
    const centroid = b / 2;

    if (!isNaN(momentOfInertia) && !isNaN(centroid) && centroid !== 0) {
      const calculatedSectionModulusSy = (momentOfInertia / centroid).toFixed(2);
      setSectionModulusSyImperial(calculatedSectionModulusSy);
    }
  };

  useEffect(() => {
    calculateSectionModulusSyImperial();
  }, [momentOfInertiaIxImperial, centroidYcImperial]);



  // Torsional Constant
  const TorsionalConstantUnitsImperial = ['in⁴'];
  const TorsionalConstantConversionFactorsImperial = {
    'in⁴': [1],
  };
  const [torsionalConstantImperial, setTorsionalConstantImperial] = useState('');
  const [torsionalConstantSelectedUnitImperial, setTorsionalConstantSelectedUnitImperial] = useState('in⁴');

  const handleTorsionalConstantUnitChangeImperial = (unit) => {
    const conversionFactor = TorsionalConstantConversionFactorsImperial[unit][TorsionalConstantUnitsImperial.indexOf(torsionalConstantSelectedUnitImperial)];
    const convertedValue = parseFloat(torsionalConstantImperial) / conversionFactor;
    setTorsionalConstantSelectedUnitImperial(unit);
    setTorsionalConstantImperial(convertedValue.toString());
  };

  const calculateTorsionalConstantImperial = () => {
    const b = parseFloat(inputValueImperial);
    const d = parseFloat(HeightInputValueImperial);
    const bi = parseFloat(inputInnerValueImperial);
    const di = parseFloat(HeightInnerInputValueImperial);

    if (!isNaN(b) && !isNaN(d) && !isNaN(bi) && !isNaN(di)) {
      const calculatedTorsionalConstant = ((2 * Math.PI * Math.pow(bi * (b - di), 2) * Math.pow(d - bi, 2)) / (b * di + d * bi - Math.pow(di, 2) - Math.pow(bi, 2))).toFixed(2);
      setTorsionalConstantImperial(calculatedTorsionalConstant);
    }
  };

  useEffect(() => {
    calculateTorsionalConstantImperial();
  }, [inputValueImperial, HeightInputValueImperial, inputInnerValueImperial, HeightInnerInputValueImperial]);



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
                {Units.map((unit) => (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h3 className='claculator-conversation-title'>Depth (d) :</h3>
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

          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h3 className='claculator-conversation-title'>
              Inner width (b
              <span className='LowerPower'>i</span>
              ) :</h3>
            <div className='Calculator-Side-A'>
              <input
                className='calculator-input'
                type="number"
                value={inputInnerValue}
                onChange={(e) => handleInputinnerChange(e.target.value)}
              />
              <select
                className='Calculator-select-option'
                value={selectedInnerUnit}
                onChange={(e) => handleUnitinnerChange(e.target.value)}
              >
                {Innerunits.map((units) => (
                  <option key={units} value={units}>
                    {units}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h3 className='claculator-conversation-title'>
              Inner depth (d
              <span className='LowerPower'>i</span>
              ) :</h3>
            <div className='Calculator-Side-A'>
              <input
                className='calculator-input'
                type="number"
                value={HeightInnerInputValue}
                onChange={(e) => handleHeightinnerInputValue(e.target.value)}
              />
              <select
                className='Calculator-select-option'
                value={heightinnerSelectedUnit}
                onChange={(e) => handleHeightinnerSelectedUnit(e.target.value)}
              >
                {HeightInnerunits.map((units) => (
                  <option key={units} value={units}>
                    {units}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button className='structure-analysis-calculator-calculator-right-show-hidden-btn' onClick={props.toggleBreaks}>{props.togglefunction ? ' Hide ' : ' Solve '}</button>

          <div className={props.togglefunction ? 'show  Sectionmodules  ' : 'hidden  Sectionmodules  '} style={{
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
                      value={centroidXc}
                      readOnly
                    />
                    <select
                      className='Calculator-select-option'
                      value={centroidXcSelectedUnit}
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
                      value={centroidYc}
                      readOnly
                    />
                    <select
                      className='Calculator-select-option'
                      value={centroidYcSelectedUnit}
                      onChange={(e) => setCentroidYcSelectedUnit(e.target.value)}
                    >
                      {CentroidYcUnits.map((unit) => (
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
                      value={(sectionModulusSx)}
                      readOnly
                    />
                    <select
                      className='Calculator-select-option'
                      value={sectionModulusSxSelectedUnit}
                      onChange={(e) => setSectionModulusSxSelectedUnit(e.target.value)}
                    >
                      {SectionModulusSxUnits.map((unit) => (
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
                      value={(SectionModulusSy)}
                      readOnly
                    />
                    <select
                      className='Calculator-select-option'
                      value={SectionModulusSySelectedUnit}
                      onChange={(e) => setSectionModulusSySelectedUnit(e.target.value)}
                    >
                      {SectionModulusSyUnits.map((unit) => (
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
                {Imperialunits.map((unit) => (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h3 className='claculator-conversation-title'>Depth (d) :</h3>
            <div className='Calculator-Side-A'>
              <input
                className='calculator-input'
                type="number"
                value={HeightInputValueImperial}
                onChange={(e) => handleHeightInputChangeImperial(e.target.value)}
              />
              <select
                className='Calculator-select-option'
                value={heightSelectedUnitImperial}
                onChange={(e) => handleHeightUnitChangeImperial(e.target.value)}
              >
                {HeightUnitsImperial.map((unit) => (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h3 className='claculator-conversation-title'>
              Inner width (b
              <span className='LowerPower'>i</span>
              ) :</h3>
            <div className='Calculator-Side-A'>
              <input
                className='calculator-input'
                type="number"
                value={inputInnerValueImperial}
                onChange={(e) => handleInputInnerChangeImperial(e.target.value)}
              />
              <select
                className='Calculator-select-option'
                value={selectedInnerUnitImperial}
                onChange={(e) => handleUnitInnerChangeImperial(e.target.value)}
              >
                {InnerUnitsImperial.map((unit) => (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h3 className='claculator-conversation-title'>
              Inner depth (d
              <span className='LowerPower'>i</span>
              ) :</h3>
            <div className='Calculator-Side-A'>
              <input
                className='calculator-input'
                type="number"
                value={HeightInnerInputValueImperial}
                onChange={(e) => handleHeightInnerInputChangeImperial(e.target.value)}
              />
              <select
                className='Calculator-select-option'
                value={heightInnerSelectedUnitImperial}
                onChange={(e) => handleHeightInnerUnitChangeImperial(e.target.value)}
              >
                {HeightInnerUnitsImperial.map((unit) => (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button className='structure-analysis-calculator-calculator-right-show-hidden-btn' onClick={props.toggleBreaks}>{props.togglefunction ? ' Hide ' : ' Solve '}</button>

          <div className={props.togglefunction ? 'show Sectionmodules' : 'hidden Sectionmodules'} style={{ height: '45vw' }}>
            <br />
            <br />
            <h3 className='text-aligh-center color-white'>Section Properties Of Beam</h3>
            <br />
            <br />
            <div className='' style={{ borderRadius: '10px', width: '90%', margin: 'auto' }}>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h3 className='color-white bold-heading-solution' style={{ fontSize: '1.8vw', width: '100%' }}>
                  Area:
                </h3>
                <div className='Calculator-Side-A'>
                  <div className='input-and-select-div'>
                    <input
                      className='calculator-input'
                      type="number"
                      value={areaImperial}
                      onChange={(e) => calculateAreaImperial(e.target.value)}
                    />
                    <select
                      className='Calculator-select-option'
                      value={areaUnitImperial}
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
                      value={centroidXcImperial}
                      onChange={(e) => calculateCentroidXcImperial(e.target.value)}
                    />
                    <select
                      className='Calculator-select-option'
                      value={centroidXcSelectedUnitImperial}
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
                      value={centroidYcImperial}
                      onChange={(e) => calculateCentroidYcImperial(e.target.value)}
                    />
                    <select
                      className='Calculator-select-option'
                      value={centroidYcSelectedUnitImperial}
                      onChange={(e) => handleCentroidYcUnitChangeImperial(e.target.value)}
                    >
                      {CentroidYcUnitsImperial.map((unit) => (
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
                      onChange={(e) => calculateMomentOfInertiaIxImperial(e.target.value)}
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
                      onChange={(e) => calculateMomentOfInertiaIyImperial(e.target.value)}
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
                      value={(sectionModulusSxImperial)}
                      onChange={(e) => calculateSectionModulusSxImperial(e.target.value)}
                    />
                    <select
                      className='Calculator-select-option'
                      value={sectionModulusSxSelectedUnitImperial}
                      onChange={(e) => handleSectionModulusSxUnitChangeImperial(e.target.value)}
                    >
                      {SectionModulusSxUnitsImperial.map((unit) => (
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
                      value={(sectionModulusSyImperial)}
                      onChange={(e) => calculateSectionModulusSyImperial(e.target.value)}
                    />
                    <select
                      className='Calculator-select-option'
                      value={sectionModulusSySelectedUnitImperial}
                      onChange={(e) => handleSectionModulusSyUnitChangeImperial(e.target.value)}
                    >
                      {SectionModulusSyUnitsImperial.map((unit) => (
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