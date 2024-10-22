import React, { useState, useEffect } from 'react';

function TeeSection(props) {
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


  const b = parseFloat(internalinputValue);
  const d = parseFloat(internalHeightInputValue);
  const t = parseFloat(internalinputInnerValue);
  const tw = parseFloat(internalHeightInnerInputValue);

  useEffect(() => {
    const value = parseFloat(internalinputValue) * HeightConversionFactors[heightSelectedUnit][0];
    if (!isNaN(value)) {
      const areaValue = (t * b) + (tw * d);
      setArea((areaValue / AreaConversionFactors[AreaUnit][0]));
    } else {
      setArea('');
    }
  }, [internalinputValue, internalinputInnerValue, internalHeightInnerInputValue, internalHeightInputValue, AreaUnit]);


  useEffect(() => {
    const value = internalinputValue;
    const centroidValue = (value / 2);
    setCentroidXc((centroidValue / conversionFactors[centroidXcSelectedUnit][0]));
  }, [internalinputValue, internalinputInnerValue, internalHeightInnerInputValue, internalHeightInputValue, centroidXcSelectedUnit]);


  // CentriodYcUnits

  useEffect(() => {
    const b = parseFloat(internalinputValue);
    const d = parseFloat(internalHeightInputValue);
    const t = parseFloat(internalinputInnerValue);
    const tw = parseFloat(internalHeightInnerInputValue);

    const numerator = (b * Math.pow(t, 2)) + ((tw * d) * (2 * t + d));
    const denominator = 2 * (t * b + tw * d);
    const calculatedImperialCentroidYc = (numerator / denominator).toFixed(4);

    setCentroidYc((calculatedImperialCentroidYc / conversionFactors[centroidYcSelectedUnit][0]));
  }, [internalinputValue, internalinputInnerValue, internalHeightInnerInputValue, internalHeightInputValue, centroidYcSelectedUnit]);


  useEffect(() => {
    const value = b;
    if (!isNaN(value)) {
      const numerator = (b * Math.pow(t, 2)) + ((tw * d) * (2 * t + d));
      const denominator = 2 * (t * b + tw * d);
      const Yc = numerator / denominator;
      const term1 = b * Math.pow((d + t), 3) - Math.pow(d, 3) * (b - tw);
      const term2 = 3;
      const Area = (t * b) + (tw * d);
      const term3 = Area * Math.pow((d + t - Yc), 2);
      const momentOfInertiaIx = ((term1 / term2) - term3).toFixed(1);
      const convertedValue = (momentOfInertiaIx * MomentOfInertiaIxConversionFactors['mm⁴'][MomentOfInertiaIxUnits.indexOf(momentOfInertiaIxSelectedUnit)]);
      
      
      setMomentOfInertiaIx(convertedValue);
    }
  }, [b, d, t, tw, momentOfInertiaIxSelectedUnit]);

  useEffect(() => {
    const value = b;
    if (!isNaN(value)) {
      const term1 = ((t * Math.pow(b, 3)) + (d * Math.pow(tw, 3)));
      const term2 = 12;
      const momentOfInertiaIy = (term1 / term2);
  
      const convertedValue = (momentOfInertiaIy * MomentOfInertiaIyConversionFactors['mm⁴'][MomentOfInertiaIyUnits.indexOf(momentOfInertiaIySelectedUnit)]);
  
      let formattedValue;
      switch (momentOfInertiaIySelectedUnit) {
        case 'mm⁴':
          formattedValue = convertedValue.toFixed(2);
          break;
        case 'cm⁴':
          formattedValue = convertedValue.toFixed(4);
          break;
        case 'm⁴':
          formattedValue = convertedValue;
          break;
        default:
          formattedValue = convertedValue;
      }
  
      setMomentOfInertiaIy(formattedValue);
    }
  }, [b, d, t, tw, momentOfInertiaIySelectedUnit]);

  useEffect(() => {
    const value = b
    if (!isNaN(value)) {
      const numerator = (b * Math.pow(t, 2)) + ((tw * d) * (2 * t + d));
      const denominator = 2 * (t * b + tw * d);
      const Yc = numerator / denominator;
      const term1 = b * Math.pow((d + t), 3) - Math.pow(d, 3) * (b - tw);
      const term2 = 3;
      const area = (t * b) + (tw * d);
      const term3 = area * Math.pow((d + t - Yc), 2);
      const Ix = (term1 / term2) - term3;
      const Sxdenomenator = (d + t) - Yc;
      const sectionModulesValue = (Ix / Sxdenomenator).toFixed(2);
      const convertedValue = (sectionModulesValue * SectionModulusSxConversionFactors['mm³'][SectionModulusSxUnits.indexOf(sectionModulusSxSelectedUnit)]);
      setSectionModulusSx(convertedValue);
    }
  }, [b, d, t, tw, sectionModulusSxSelectedUnit]);

  useEffect(() => {
    const value = b;
    if (!isNaN(value)) {
      const term1 = ((t * Math.pow(b, 3)) + (d * Math.pow(tw, 3)));
      const term2 = 12;
      const Iy = (term1 / term2).toFixed(2);
      const Xc = b / 2;
      const sectionModulesValue = (Iy / Xc).toFixed(4);
      const convertedValue = (sectionModulesValue * SectionModulusSyConversionFactors['mm³'][SectionModulusSyUnits.indexOf(SectionModulusSySelectedUnit)]);
  
      let formattedValue;
      switch (SectionModulusSySelectedUnit) {
        case 'mm³':
          formattedValue = convertedValue.toFixed(2);
          break;
        case 'cm³':
          formattedValue = convertedValue.toFixed(4);
          break;
        case 'm³':
          formattedValue = convertedValue;
          break;
        default:
          formattedValue = convertedValue;
      }
  
      setSectionModulusSy(formattedValue);
    }
  }, [b, d, t, tw, SectionModulusSySelectedUnit]);



































  const Imperialunits = ['in'];
  // const [exponent, setExponent] = useState(4);

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
    const Imperialfactor = ImperialconversionFactors[unit][Imperialunits.indexOf(ImperialselectedUnit)];
    setImperialInputValue((parseFloat(ImperialinputValue) / Imperialfactor).toFixed(4));
  };

  const ImperialHeightunits = ['in'];

  const ImperialHeightConversionFactors = {
    in: [1]
  };

  const [ImperialHeightInputValue, setImperialHeightInputValue] = useState('');
  const [ImperialheightSelectedUnit, setImperialHeightSelectedUnit] = useState('in');

  const handleImperialHeightInputValue = (values) => {
    setImperialHeightInputValue(values);
  };

  const handleImperialHeightSelectedUnit = (units) => {
    setImperialHeightSelectedUnit(units);
    const Hrightfactor = ImperialHeightConversionFactors[units][ImperialHeightunits.indexOf(ImperialheightSelectedUnit)];
    setImperialHeightInputValue((parseFloat(ImperialHeightInputValue) / Hrightfactor).toFixed(4));
  };

  const ImperialInnerunits = ['in'];
  // const [exponent, setExponent] = useState(4);

  const ImperialInnerconversionFactors = {
    in: [1]
  };

  const [ImperialinputInnerValue, ImperialsetInputInnerValue] = useState('');
  const [ImperialselectedInnerUnit, ImperialsetSelectedInnerUnit] = useState('in');

  const handleImperialInputinnerChange = (value) => {
    ImperialsetInputInnerValue(value);
  };

  const handleImperialUnitinnerChange = (unit) => {
    ImperialsetSelectedInnerUnit(unit);
    const innerfactor = ImperialInnerconversionFactors[unit][ImperialInnerunits.indexOf(ImperialselectedInnerUnit)];
    ImperialsetInputInnerValue((parseFloat(ImperialinputInnerValue) / innerfactor).toFixed(4));
  };

  const ImperialHeightInnerunits = ['in'];

  const ImperialHeightInnerConversionFactors = {
    in: [1]
  };

  const [ImperialHeightInnerInputValue, setImperialHeightinnerInputValue] = useState('');
  const [ImperialheightinnerSelectedUnit, setImperialHeightinnerSelectedUnit] = useState('in');

  const handleImperialHeightinnerInputValue = (values) => {
    setImperialHeightinnerInputValue(values);
  };

  const handleImperialHeightinnerSelectedUnit = (units) => {
    setImperialHeightinnerSelectedUnit(units);
    const Hrightfactor = ImperialHeightInnerConversionFactors[units][ImperialHeightInnerunits.indexOf(ImperialheightinnerSelectedUnit)];
    setImperialHeightinnerInputValue((parseFloat(ImperialHeightInnerInputValue) / Hrightfactor).toFixed(4));
  };

  const ImperialAreaUnits = ['in²'];
  const ImperialAreaConversionFactors = {
    'in²': [1],
  };
  const [ImperialArea, setImperialArea] = useState('');
  const [ImperialAreaUnit, setImperialAreaUnit] = useState('in²');

  const handleImperialAreaUnitChange = (unit) => {
    const currentImperialAreaInNewUnit = ImperialArea * ImperialAreaConversionFactors[ImperialAreaUnit][ImperialAreaUnits.indexOf(unit)];
    setImperialArea(currentImperialAreaInNewUnit);
    setImperialAreaUnit(unit);
  };

  const calculateImperialArea = () => {
    const d = parseFloat(ImperialHeightInputValue);
    const b = parseFloat(ImperialinputValue);
    const t = parseFloat(ImperialinputInnerValue);
    const tw = parseFloat(ImperialHeightInnerInputValue);
    const calculatedImperialArea = (t * b) + (tw * d);
    setImperialArea(calculatedImperialArea);
  };

  useEffect(() => {
    calculateImperialArea();
  }, [ImperialinputValue, ImperialHeightInputValue, ImperialinputInnerValue, ImperialHeightInnerInputValue]);

  // CentroidXc

  const ImperialCentroidXcUnits = ['in²'];
  const ImperialCentroidXcconversionFactors = {
    'in²': [1],
  };
  const [ImperialCentroidXc, setImperialCentroidXc] = useState('');
  const [ImperialCentroidXcUnit, setImperialCentroidXcUnit] = useState('in²');

  const handleImperialCentroidXcUnitChange = (unit) => {
    const currentImperialCentroidXcInNewUnit = ImperialCentroidXc * ImperialCentroidXcconversionFactors[ImperialCentroidXcUnit][ImperialCentroidXcUnits.indexOf(unit)];
    setImperialCentroidXc(currentImperialCentroidXcInNewUnit);
    setImperialCentroidXcUnit(unit);
  };

  const calculateImperialCentroidXc = () => {
    const b = parseFloat(ImperialinputValue);
    const calculatedImperialCentroidXc = b / 2;
    setImperialCentroidXc(calculatedImperialCentroidXc);
  };

  useEffect(() => {
    calculateImperialCentroidXc();
  }, [ImperialinputValue, ImperialHeightInputValue, ImperialinputInnerValue, ImperialHeightInnerInputValue]);


  // CentroidYc

  const ImperialCentroidYcUnits = ['in²'];
  const ImperialCentroidYcconversionFactors = {
    'in²': [1],
  };
  const [ImperialCentroidYc, setImperialCentroidYc] = useState('');
  const [ImperialCentroidYcUnit, setImperialCentroidYcUnit] = useState('in²');

  const handleImperialCentroidYcUnitChange = (unit) => {
    const currentImperialCentroidYcInNewUnit = ImperialCentroidYc * ImperialCentroidYcconversionFactors[ImperialCentroidYcUnit][ImperialCentroidYcUnits.indexOf(unit)];
    setImperialCentroidYc(currentImperialCentroidYcInNewUnit);
    setImperialCentroidYcUnit(unit);
  };

  const calculateImperialCentroidYc = () => {
    const d = parseFloat(ImperialHeightInputValue);
    const b = parseFloat(ImperialinputValue);
    const t = parseFloat(ImperialinputInnerValue);
    const tw = parseFloat(ImperialHeightInnerInputValue);

    const numerator = (b * Math.pow(t, 2)) + ((tw * d) * (2 * t + d));
    const denominator = 2 * (t * b + tw * d);
    const calculatedImperialCentroidYc = (numerator / denominator).toFixed(3);
    setImperialCentroidYc(calculatedImperialCentroidYc);
  };

  useEffect(() => {
    calculateImperialCentroidYc();
  }, [ImperialinputValue, ImperialHeightInputValue, ImperialinputInnerValue, ImperialHeightInnerInputValue]);

  // Moment of Inertia Ix
  const [ImperialMomentOfInertiaIx, setImperialMomentOfInertiaIx] = useState('');
  const [ImperialMomentOfInertiaIxUnit, setImperialMomentOfInertiaIxUnit] = useState('in⁴');

  const ImperialMomentOfInertiaIxUnits = ['in⁴'];
  const ImperialMomentOfInertiaIxConversionFactors = {
    'in⁴': [1]
  };

  const handleImperialMomentOfInertiaIxUnitChange = (unit) => {
    const currentImperialMomentOfInertiaIxInNewUnit = ImperialMomentOfInertiaIx * ImperialMomentOfInertiaIxConversionFactors[ImperialMomentOfInertiaIxUnit][ImperialMomentOfInertiaIxUnits.indexOf(unit)];
    setImperialMomentOfInertiaIx(currentImperialMomentOfInertiaIxInNewUnit);
    setImperialMomentOfInertiaIxUnit(unit);
  };

  const calculateImperialMomentOfInertiaIx = () => {
    const d = parseFloat(ImperialHeightInputValue);
    const b = parseFloat(ImperialinputValue);
    const t = parseFloat(ImperialinputInnerValue);
    const tw = parseFloat(ImperialHeightInnerInputValue);
    const numerator = (b * Math.pow(t, 2)) + ((tw * d) * (2 * t + d));
    const denominator = 2 * (t * b + tw * d);
    const Yc = numerator / denominator;
    const term1 = b * Math.pow((d + t), 3) - Math.pow(d, 3) * (b - tw);
    const term2 = 3;
    const area = (t * b) + (tw * d)
    const term3 = area * Math.pow((d + t - Yc), 2);
    const ImperialMomentOfInertiaIx = ((term1 / term2) - term3).toFixed(3);
    setImperialMomentOfInertiaIx(ImperialMomentOfInertiaIx);
  };

  useEffect(() => {
    calculateImperialMomentOfInertiaIx();
  }, [ImperialinputValue, ImperialHeightInputValue, ImperialinputInnerValue, ImperialHeightInnerInputValue]);

  // Moment of Inertia Iy
  const [ImperialMomentOfInertiaIy, setImperialMomentOfInertiaIy] = useState('');
  const [ImperialMomentOfInertiaIyUnit, setImperialMomentOfInertiaIyUnit] = useState('in⁴');

  const ImperialMomentOfInertiaIyUnits = ['in⁴'];
  const ImperialMomentOfInertiaIyConversionFactors = {
    'in⁴': [1]
  };

  const handleImperialMomentOfInertiaIyUnitChange = (unit) => {
    const currentImperialMomentOfInertiaIyInNewUnit = ImperialMomentOfInertiaIy * ImperialMomentOfInertiaIyConversionFactors[ImperialMomentOfInertiaIyUnit][ImperialMomentOfInertiaIyUnits.indexOf(unit)];
    setImperialMomentOfInertiaIy(currentImperialMomentOfInertiaIyInNewUnit);
    setImperialMomentOfInertiaIyUnit(unit);
  };

  const calculateImperialMomentOfInertiaIy = () => {
    const d = parseFloat(ImperialHeightInputValue);
    const b = parseFloat(ImperialinputValue);
    const t = parseFloat(ImperialinputInnerValue);
    const tw = parseFloat(ImperialHeightInnerInputValue);
    const term1 = (t * Math.pow(b, 3)) + (d * Math.pow(tw, 3));
    const term2 = 12;
    const ImperialMomentOfInertiaIy = (term1 / term2).toFixed(3);
    setImperialMomentOfInertiaIy(ImperialMomentOfInertiaIy);
  };

  useEffect(() => {
    calculateImperialMomentOfInertiaIy();
  }, [ImperialinputValue, ImperialHeightInputValue, ImperialinputInnerValue, ImperialHeightInnerInputValue]);


  // Section Modulus Sx
  const ImperialSectionModulesUnits = ['in³'];
  const ImperialSectionModulesConversionFactors = {
    'in³': [1]
  };
  const [ImperialSectionModulesSx, setImperialSectionModules] = useState('');
  const [ImperialSectionModulesSxUnit, setImperialSectionModulesSxUnit] = useState('in³');

  const handleImperialSectionModulesSxUnitChange = (unit) => {
    const currentImperialSectionModulesSxInNewUnit = ImperialSectionModulesSx * ImperialSectionModulesConversionFactors[ImperialSectionModulesSxUnit][ImperialSectionModulesUnits.indexOf(unit)];
    setImperialSectionModulesSxUnit(unit);
    setImperialSectionModules(currentImperialSectionModulesSxInNewUnit);
  };

  const calculateImperialSectionModulesSx = () => {
    const d = parseFloat(ImperialHeightInputValue);
    const b = parseFloat(ImperialinputValue);
    const t = parseFloat(ImperialinputInnerValue);
    const tw = parseFloat(ImperialHeightInnerInputValue);
    const numerator = (b * Math.pow(t, 2)) + ((tw * d) * (2 * t + d));
    const denominator = 2 * (t * b + tw * d);
    const Yc = numerator / denominator;
    const term1 = b * Math.pow((d + t), 3) - Math.pow(d, 3) * (b - tw);
    const term2 = 3;
    const term3 = ImperialArea * Math.pow((d + t - Yc), 2);
    const Ix = (term1 / term2) - term3;
    const Sxdenomenator = (d + t) - Yc;
    const sectionModulesSx = (Ix / Sxdenomenator).toFixed(2);
    setImperialSectionModules(sectionModulesSx);
  };

  useEffect(() => {
    calculateImperialSectionModulesSx();
  }, [ImperialHeightInputValue, ImperialinputValue, ImperialinputInnerValue, ImperialHeightInnerInputValue, ImperialArea]);

  // Section Modulus Sy
  const ImperialSectionModulesSyUnits = ['in³'];
  const ImperialSectionModulesSyConversionFactors = {
    'in³': [1]
  };

  const [ImperialsectionModulesSy, setImperialSectionModulesSy] = useState('');
  const [ImperialsectionModulesSyUnit, setImperialSectionModulesSyUnit] = useState('in³');

  const handleImperialSectionModulesSyUnitChange = (unit) => {
    const currentImperialSectionModulesSyInNewUnit = ImperialsectionModulesSy * ImperialSectionModulesSyConversionFactors[ImperialsectionModulesSyUnit][ImperialSectionModulesSyUnits.indexOf(unit)];
    setImperialSectionModulesSyUnit(unit);
    setImperialSectionModulesSy(currentImperialSectionModulesSyInNewUnit);
  };

  const calculateImperialSectionModulesSy = () => {
    const d = parseFloat(ImperialHeightInputValue);
    const b = parseFloat(ImperialinputValue);
    const t = parseFloat(ImperialinputInnerValue);
    const tw = parseFloat(ImperialHeightInnerInputValue);
    const Iy = (((t) * (b * b * b)) + ((d) * (tw * tw * tw))) / 12;
    const Xc = b / 2;
    const ImperialsectionModulesSy = (Iy / Xc).toFixed(2);
    setImperialSectionModulesSy(ImperialsectionModulesSy);
  };

  useEffect(() => {
    calculateImperialSectionModulesSy();
  }, [ImperialHeightInputValue, ImperialinputValue, ImperialinputInnerValue, ImperialHeightInnerInputValue]);
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
            <h3 className='claculator-conversation-title'>Width (b):</h3>
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
            <h3 className='claculator-conversation-title'>Depth (d):</h3>
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
            <h3 className='claculator-conversation-title'>Thickness (t):</h3>
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
            <h3 className='claculator-conversation-title'>Web Thickness (t
              <span className='LowerPowerminus2px'>w</span>
              ):</h3>
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

          <div className={props.togglefunction ? 'show Sectionmodules ' : 'hidden Sectionmodules '} style={{
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
            </div>
          </div >

        </>)}
      {props.MetricOrImperial === 'option2' && (
        <>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h3 className='claculator-conversation-title'>Width (b):</h3>
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
            <h3 className='claculator-conversation-title'>Depth (d):</h3>
            <div className='Calculator-Side-A'>
              <input
                className='calculator-input'
                type="number"
                value={ImperialHeightInputValue}
                onChange={(e) => handleImperialHeightInputValue(e.target.value)}
              />
              <select
                className='Calculator-select-option'
                value={ImperialheightSelectedUnit}
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
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h3 className='claculator-conversation-title'>Thickness (t):</h3>
            <div className='Calculator-Side-A'>
              <input
                className='calculator-input'
                type="number"
                value={ImperialinputInnerValue}
                onChange={(e) => handleImperialInputinnerChange(e.target.value)}
              />
              <select
                className='Calculator-select-option'
                value={ImperialselectedInnerUnit}
                onChange={(e) => handleImperialUnitinnerChange(e.target.value)}
              >
                {ImperialInnerunits.map((units) => (
                  <option key={units} value={units}>
                    {units}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h3 className='claculator-conversation-title'>Web Thickness (t
              <span className='LowerPowerminus2px'>w</span>
              ):</h3>
            <div className='Calculator-Side-A'>
              <input
                className='calculator-input'
                type="number"
                value={ImperialHeightInnerInputValue}
                onChange={(e) => handleImperialHeightinnerInputValue(e.target.value)}
              />
              <select
                className='Calculator-select-option'
                value={ImperialheightinnerSelectedUnit}
                onChange={(e) => handleImperialHeightinnerSelectedUnit(e.target.value)}
              >
                {ImperialHeightInnerunits.map((units) => (
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
                      value={ImperialArea}
                      onChange={(e) => calculateImperialArea(e.target.value)}

                    />
                    <select
                      className='Calculator-select-option'
                      value={ImperialAreaUnit}
                      onChange={(e) => handleImperialAreaUnitChange(e.target.value)}
                    >
                      {ImperialAreaUnits.map((unit) => (
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
                      value={ImperialCentroidXc}
                      onChange={(e) => calculateImperialCentroidXc(e.target.value)}

                    />
                    <select
                      className='Calculator-select-option'
                      value={ImperialCentroidXcUnit}
                      onChange={(e) => handleImperialCentroidXcUnitChange(e.target.value)}
                    >
                      {ImperialCentroidXcUnits.map((unit) => (
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
                      value={ImperialCentroidYc}
                      onChange={(e) => calculateImperialCentroidYc(e.target.value)}

                    />
                    <select
                      className='Calculator-select-option'
                      value={ImperialCentroidYcUnit}
                      onChange={(e) => handleImperialCentroidYcUnitChange(e.target.value)}
                    >
                      {ImperialCentroidYcUnits.map((unit) => (
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
                      value={ImperialMomentOfInertiaIx}
                      onChange={(e) => calculateImperialMomentOfInertiaIx(e.target.value)}

                    />
                    <select
                      className='Calculator-select-option'
                      value={ImperialMomentOfInertiaIxUnit}
                      onChange={(e) => handleImperialMomentOfInertiaIxUnitChange(e.target.value)}
                    >
                      {ImperialMomentOfInertiaIxUnits.map((unit) => (
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
                      value={ImperialMomentOfInertiaIy}
                      onChange={(e) => calculateImperialMomentOfInertiaIy(e.target.value)}

                    />
                    <select
                      className='Calculator-select-option'
                      value={ImperialMomentOfInertiaIyUnit}
                      onChange={(e) => handleImperialMomentOfInertiaIyUnitChange(e.target.value)}
                    >
                      {ImperialMomentOfInertiaIyUnits.map((unit) => (
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
                      value={(ImperialSectionModulesSx)}
                      onChange={(e) => calculateImperialSectionModulesSx(e.target.value)}

                    />
                    <select
                      className='Calculator-select-option'
                      value={ImperialSectionModulesSxUnit}
                      onChange={(e) => handleImperialSectionModulesSxUnitChange(e.target.value)}
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
                      value={(ImperialsectionModulesSy)}
                      onChange={(e) => calculateImperialSectionModulesSy(e.target.value)}

                    />
                    <select
                      className='Calculator-select-option'
                      value={ImperialsectionModulesSyUnit}
                      onChange={(e) => handleImperialSectionModulesSyUnitChange(e.target.value)}
                    >
                      {ImperialSectionModulesSyUnits.map((unit) => (
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

        </>)}


    </>
  );
}

export default TeeSection;