import React, { useState, useEffect } from 'react';

export default function Lsection(props) {

    const bunits = ['mm', 'cm', 'm'];
    const bconversionFactors = {
        mm: [1, 0.1, 0.001],
        cm: [10, 1, 0.01],
        m: [1000, 100, 1],
    };

    const [binputValue, setbInputValue] = useState('');
    const [bselectedUnit, setbSelectedUnit] = useState('mm');
    const [internalbinputValue, setInternalbinputValue] = useState(0); // Always in mm

    const handlebInputChange = (value) => {
        setbInputValue(value);
        const factor = bconversionFactors[bselectedUnit][0];
        setInternalbinputValue(parseFloat(value) * factor);
    };

    const handlebUnitChange = (unit) => {
        const newMetricValueInMM = parseFloat(binputValue) * bconversionFactors[bselectedUnit][0];
        const convertedValue = newMetricValueInMM / bconversionFactors[unit][0];
        setbSelectedUnit(unit);
        setbInputValue(convertedValue.toFixed(3));
    };



    const dunits = ['mm', 'cm', 'm'];
    const dconversionFactors = {
        mm: [1, 0.1, 0.001],
        cm: [10, 1, 0.01],
        m: [1000, 100, 1],
    };

    const [dinputValue, setdInputValue] = useState('');
    const [selectedUnit, setSdelectedUnit] = useState('mm');
    const [internaldinputValue, setInternaldinputValue] = useState(0); // Always in mm

    const handledInputChange = (value) => {
        setdInputValue(value);
        const factor = dconversionFactors[selectedUnit][0];
        setInternaldinputValue(parseFloat(value) * factor);
    };

    const handledUnitChange = (unit) => {
        const newMetricValueInMM = parseFloat(dinputValue) * dconversionFactors[selectedUnit][0];
        const convertedValue = newMetricValueInMM / dconversionFactors[unit][0];
        setSdelectedUnit(unit);
        setdInputValue(convertedValue.toFixed(3));
    };
    const TValueunits = ['mm', 'cm', 'm'];
    const TValueconversionFactors = {
        mm: [1, 0.1, 0.001],
        cm: [10, 1, 0.01],
        m: [1000, 100, 1],
    };

    const [TValue, setTValue] = useState('');
    const [selectedTUnit, setTValueSelectedUnit] = useState('mm');
    const [internalTValue, setInternalTValue] = useState(0); // Always in mm

    const handleTValueInputChange = (value) => {
        setTValue(value);
        const factor = TValueconversionFactors[selectedTUnit][0];
        setInternalTValue(parseFloat(value) * factor);
    };

    const handleTValueUnitChange = (unit) => {
        const newMetricValueInMM = parseFloat(TValue) * TValueconversionFactors[selectedTUnit][0];
        const convertedValue = newMetricValueInMM / TValueconversionFactors[unit][0];
        setTValueSelectedUnit(unit);
        setTValue(convertedValue.toFixed(3));
    };










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





    const t = parseFloat(internalTValue);
    const b = parseFloat(internalbinputValue);
    const d = parseFloat(internaldinputValue);

    useEffect(() => {
        const value = parseFloat(internalbinputValue) * dconversionFactors[selectedUnit][0];
        if (!isNaN(value)) {
            const areaValue = t * (b - (-d) - t);
            setArea((areaValue / AreaConversionFactors[AreaUnit][0]));
        } else {
            setArea('');
        }
    }, [internalTValue, internalbinputValue, internaldinputValue, AreaUnit]);


    useEffect(() => {
        const b = internalbinputValue;
        const numerator = (b * b) + (d * t) - (t * t);
        const denominator = 2 * (b - (-d) - t);
        const centroidXcValue = numerator / denominator;
        const convertedValue = (centroidXcValue / bconversionFactors[centroidXcSelectedUnit][0]);

        let formattedValue;
        switch (centroidXcSelectedUnit) {
            case 'mm':
                formattedValue = convertedValue.toFixed(2);
                break;
            case 'cm':
                formattedValue = convertedValue.toFixed(3);
                break;
            case 'm':
                formattedValue = convertedValue.toFixed(4);
                break;
            default:
                formattedValue = convertedValue;
        }

        setCentroidXc(formattedValue);
    }, [internalTValue, internalbinputValue, internaldinputValue, centroidXcSelectedUnit]);

    // CentriodYcUnits

    useEffect(() => {
        const t = parseFloat(internalTValue);
        const b = parseFloat(internalbinputValue);
        const d = parseFloat(internaldinputValue);

        const numerator = (d * d) + (b * t) - (t * t);
        const denominator = 2 * (b - (-d) - t);
        const calculatedCentroidYc = numerator / denominator;
        const convertedValue = (calculatedCentroidYc / bconversionFactors[centroidYcSelectedUnit][0]);

        let formattedValue;
        switch (centroidYcSelectedUnit) {
            case 'm':
                formattedValue = convertedValue.toFixed(5);
                break;
            case 'cm':
                formattedValue = convertedValue.toFixed(4);
                break;
            case 'mm':
                formattedValue = convertedValue.toFixed(2);
                break;
            default:
                formattedValue = convertedValue;
        }

        setCentroidYc(formattedValue);
    }, [internalTValue, internalbinputValue, internaldinputValue, centroidYcSelectedUnit]);


    useEffect(() => {
        const value = b;
        if (!isNaN(value)) {
            const ycValuenumerator = (d * d) + (b * t) - (t * t);
            const ycValuedenominator = 2 * (b - (-d) - t);
            const ycValue = ycValuenumerator / ycValuedenominator;
            const area = t * (b - (-d) - t);
            const numerator = (b * Math.pow(d, 3)) - ((b - t) * Math.pow(d - t, 3));
            const momentOfInertiaIx = ((numerator / 3) - (area * Math.pow(d - ycValue, 2)));
            const convertedValue = (momentOfInertiaIx * MomentOfInertiaIxConversionFactors['mm⁴'][MomentOfInertiaIxUnits.indexOf(momentOfInertiaIxSelectedUnit)]);

            let formattedValue;
            switch (momentOfInertiaIxSelectedUnit) {
                case 'm⁴':
                    formattedValue = convertedValue.toExponential(4);
                    break;
                case 'cm⁴':
                    formattedValue = convertedValue.toFixed(4);
                    break;
                case 'mm⁴':
                    formattedValue = convertedValue.toFixed(2);
                    break;
                default:
                    formattedValue = convertedValue;
            }

            setMomentOfInertiaIx(formattedValue);
        }
    }, [b, d, t, momentOfInertiaIxSelectedUnit]);

    useEffect(() => {
        const value = b;
        if (!isNaN(value)) {
      
          const area = t * (b - (-d) - t);
          const xcnumerator = (b * b) + (d * t) - (t * t);
          const xcdenominator = 2 * (b - (-d) - t);
          const xc = xcnumerator / xcdenominator;
          const numerator = (d * Math.pow(b, 3)) - ((d - t) * Math.pow(b - t, 3));
          const momentOfInertiaIy = ((numerator / 3) - (area * Math.pow(b - xc, 2)));
          const convertedValue = (momentOfInertiaIy * MomentOfInertiaIyConversionFactors['mm⁴'][MomentOfInertiaIyUnits.indexOf(momentOfInertiaIySelectedUnit)]);
      
          let formattedValue;
          switch (momentOfInertiaIySelectedUnit) {
            case 'm⁴':
              formattedValue = convertedValue.toExponential(4);
              break;
            case 'cm⁴':
              formattedValue = convertedValue.toFixed(4);
              break;
            case 'mm⁴':
              formattedValue = convertedValue.toFixed(2);
              break;
            default:
              formattedValue = convertedValue;
          }
      
          setMomentOfInertiaIy(formattedValue);
        }
      }, [b, d, t, momentOfInertiaIySelectedUnit]);


      useEffect(() => {
        const value = b;
        if (!isNaN(value)) {
          const ycnumerator = (d * d) + (b * t) - (t * t);
          const ycdenominator = 2 * (b - (-d) - t);
          const yc = ycnumerator / ycdenominator;
          const area = t * (b - (-d) - t);
          const numerator = (b * Math.pow(d, 3)) - ((b - t) * Math.pow(d - t, 3));
          const ix = (numerator / 3) - (area * Math.pow(d - yc, 2));
          const sectionModulesValue = (ix / (d - yc));
          const convertedValue = (sectionModulesValue * SectionModulusSxConversionFactors['mm³'][SectionModulusSxUnits.indexOf(sectionModulusSxSelectedUnit)]);
      
          let formattedValue;
          switch (sectionModulusSxSelectedUnit) {
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
      
          setSectionModulusSx(formattedValue);
        }
      }, [b, d, t, sectionModulusSxSelectedUnit]);


      useEffect(() => {
        const value = b;
        if (!isNaN(value)) {
          const area = t * (b - (-d) - t);
          const xcnumerator = (b * b) + (d * t) - (t * t);
          const xcdenominator = 2 * (b - (-d) - t);
          const xc = xcnumerator / xcdenominator;
          const numerator = (d * Math.pow(b, 3)) - ((d - t) * Math.pow(b - t, 3));
          const iy = (numerator / 3) - (area * Math.pow(b - xc, 2));
          const sectionModulesValue = (iy / (b - xc));
          const convertedValue = (sectionModulesValue * SectionModulusSyConversionFactors['mm³'][SectionModulusSyUnits.indexOf(SectionModulusSySelectedUnit)]);
      
          let formattedValue;
          switch (SectionModulusSySelectedUnit) {
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
      
          setSectionModulusSy(formattedValue);
        }
      }, [b, d, t, SectionModulusSySelectedUnit]);


    const Imperialbunits = ['in'];
    const ImperialbconversionFactors = {
        in: [1],
    };

    const [ImperialbinputValue, setImperialbInputValue] = useState('');
    const [ImperialbselectedUnit, setImperialbSelectedUnit] = useState('in');

    const handleImperialbInputChange = (value) => {
        setImperialbInputValue(value);
    };

    const handleImperialbUnitChange = (unit) => {
        setImperialbSelectedUnit(unit);
        const Imperialbfactor = ImperialbconversionFactors[unit][Imperialbunits.indexOf(ImperialbselectedUnit)];
        setImperialbInputValue((parseFloat(ImperialbinputValue) / Imperialbfactor).toFixed(3));
    };


    const Imperialdunits = ['in'];
    const ImperialdconversionFactors = {
        in: [1],
    };

    const [ImperialdinputValue, setImperialdInputValue] = useState('');
    const [ImperialdselectedUnit, setImperialSdelectedUnit] = useState('in');

    const handledImperialInputChange = (value) => {
        setImperialdInputValue(value);
    };

    const handledImperialUnitChange = (unit) => {
        setImperialSdelectedUnit(unit);
        const dfactor = ImperialdconversionFactors[unit][Imperialdunits.indexOf(ImperialdselectedUnit)];
        setImperialdInputValue((parseFloat(ImperialdinputValue) / dfactor).toFixed(3));
    };

    const ImperialTValueunits = ['in'];
    const ImperialTValueconversionFactors = {
        in: [1],
    };

    const [ImperialTValue, setImperialTValue] = useState('');
    const [ImperialTVselectedTUnit, setImperialTValueSelectedUnit] = useState('in');

    const handleImperialTValueInputChange = (value) => {
        setImperialTValue(value);
    };

    const handleImperialTValueUnitChange = (unit) => {
        setImperialTValueSelectedUnit(unit);
        const ImperialTValuefactor = ImperialTValueconversionFactors[unit][ImperialTValueunits.indexOf(ImperialTVselectedTUnit)];
        setImperialTValue((parseFloat(ImperialTValue) / ImperialTValuefactor).toFixed(3));
    };

    // const ImperialTValueunits = ['in'];
    // const ImperialTValueconversionFactors = {
    //     in: [1],
    // };

    // const [ImperialTValue, setImperialTValue] = useState('');
    // const [ImperialTVselectedTUnit, setImperialTValueSelectedUnit] = useState('in');

    // const handleImperialTValueInputChange = (value) => {
    //     setImperialTValue(value);
    // };

    // const handleImperialTValueUnitChange = (unit) => {
    //     setImperialTValueSelectedUnit(unit);
    //     const ImperialTValuefactor = ImperialTValueconversionFactors[unit][ImperialTValueunits.indexOf(ImperialTVselectedTUnit)];
    //     setImperialTValue((parseFloat(ImperialTValue) / ImperialTValuefactor));
    // };

    const ImperialAreaUnits = ['in²'];
    const ImperialAreaConversionFactors = {
        'in²': [1],
    };
    const [ImperialArea, setImperialArea] = useState('');
    const [ImperialAreaUnit, setImperialAreaUnit] = useState('in²');
    const handleImperialAreaUnitChange = (unit) => {
        const ImperialAreaFactor = ImperialAreaConversionFactors[unit][ImperialAreaUnits.indexOf(ImperialAreaUnit)];
        setImperialAreaUnit(unit);
        setImperialArea((parseFloat(ImperialArea) / ImperialAreaFactor));
    };
    const calculateImperialArea = () => {
        const t = parseFloat(ImperialTValue);
        const b = parseFloat(ImperialbinputValue);
        const d = parseFloat(ImperialdinputValue);
        const area = t * (b - (-d) - t);
        setImperialArea(area);
    };
    useEffect(() => {
        calculateImperialArea();
    }, [ImperialTValue, ImperialbinputValue, ImperialdinputValue]);

    // CentroidXcUnits
    const ImperialCentroidXcUnits = ['in'];
    const ImperialCentroidXcConversionFactors = {
        in: [1],
    };
    const [ImperialCentroidXc, setImperialCentroidXc] = useState('');
    const [ImperialCentroidXcSelectedUnit, setImperialCentroidXcSelectedUnit] = useState('in');
    const handleImperialCentroidXcUnitChange = (unit) => {
        const CentroidFactor = ImperialCentroidXcConversionFactors[unit][ImperialCentroidXcUnits.indexOf(ImperialCentroidXcSelectedUnit)];
        setImperialCentroidXcSelectedUnit(unit);
        setImperialCentroidXc((parseFloat(ImperialCentroidXc) / CentroidFactor));
    };
    const calculateImperialCentroidXc = () => {
        const t = parseFloat(ImperialTValue);
        const b = parseFloat(ImperialbinputValue);
        const d = parseFloat(ImperialdinputValue);
        const numerator = (b * b) + (d * t) - (t * t);
        const denominator = 2 * (b - (-d) - t);
        const ImperialCentroidXc = (numerator / denominator).toFixed(2);
        setImperialCentroidXc(ImperialCentroidXc);
    };
    useEffect(() => {
        calculateImperialCentroidXc();
    }, [ImperialbinputValue, ImperialTValue, ImperialdinputValue]);

    // CentroidYcUnits
    const ImperialCentroidYcUnits = ['in'];
    const ImperialCentroidYcConversionFactors = {
        in: [1],
    };
    const [ImperialCentroidYc, setImperialCentroidYc] = useState('');
    const [ImperialCentroidYcSelectedUnit, setImperialCentroidYcSelectedUnit] = useState('in');
    const handleImperialCentroidYcUnitChange = (unit) => {
        const ImperialCentroidYcFactor = ImperialCentroidYcConversionFactors[unit][ImperialCentroidYcUnits.indexOf(ImperialCentroidYcSelectedUnit)];
        setImperialCentroidYcSelectedUnit(unit);
        setImperialCentroidYc((parseFloat(ImperialCentroidYc) / ImperialCentroidYcFactor));
    };
    const calculateImperialCentroidYc = () => {
        const t = parseFloat(ImperialTValue);
        const b = parseFloat(ImperialbinputValue);
        const d = parseFloat(ImperialdinputValue);
        const numerator = (d * d) + (b * t) - (t * t);
        const denominator = 2 * (b - (-d) - t);
        const centroidYc = (numerator / denominator).toFixed(2);
        setImperialCentroidYc(centroidYc);
    };
    useEffect(() => {
        calculateImperialCentroidYc();
    }, [ImperialTValue, ImperialbinputValue, ImperialdinputValue]);

    // MomentOfInertia Ix
    const ImperialMomentOfInertiaIxUnits = ['in⁴'];
    const ImperialMomentOfInertiaIxConversionFactors = {
        'in⁴': [1],
    };
    const [ImperialMomentOfInertiaIx, setImperialMomentOfInertiaIx] = useState('');
    const [ImperialMomentOfInertiaIxSelectedUnit, setImperialMomentOfInertiaIxSelectedUnit] = useState('in⁴');
    const handleImperialMomentOfInertiaIxUnitChange = (unit) => {
        const ImperialMomentOfInertiaIxFactor = ImperialMomentOfInertiaIxConversionFactors[unit][ImperialMomentOfInertiaIxUnits.indexOf(ImperialMomentOfInertiaIxSelectedUnit)];
        setImperialMomentOfInertiaIxSelectedUnit(unit);
        setImperialMomentOfInertiaIx((parseFloat(ImperialMomentOfInertiaIx) / ImperialMomentOfInertiaIxFactor));
    };
    const calculateImperialMomentOfInertiaIx = () => {
        const t = parseFloat(ImperialTValue);
        const b = parseFloat(ImperialbinputValue);
        const d = parseFloat(ImperialdinputValue);
        const ycnumerator = (d * d) + (b * t) - (t * t);
        const ycdenominator = 2 * (b - (-d) - t);
        const yc = ycnumerator / ycdenominator;
        const area = t * (b - (-d) - t);
        const numerator = (b * Math.pow(d, 3)) - ((b - t) * Math.pow(d - t, 3));
        const momentOfInertiaIx = ((numerator / 3) - (area * Math.pow(d - yc, 2))).toFixed(2);
        setImperialMomentOfInertiaIx(momentOfInertiaIx);
    };
    useEffect(() => {
        calculateImperialMomentOfInertiaIx();
    }, [ImperialTValue, ImperialbinputValue, ImperialdinputValue, Area, centroidYc]);

    // MomentOfInertia Iy
    const ImperialMomentOfInertiaIyUnits = ['in⁴'];
    const ImperialMomentOfInertiaIyConversionFactors = {
        'in⁴': [1],
    };

    const [ImperialMomentOfInertiaIy, setImperialMomentOfInertiaIy] = useState('');
    const [ImperialMomentOfInertiaIySelectedUnit, setImperialMomentOfInertiaIySelectedUnit] = useState('in⁴');

    const handleImperialMomentOfInertiaIyUnitChange = (newUnit) => {
        if (ImperialMomentOfInertiaIy === '') return;

        const currentFactor = ImperialMomentOfInertiaIyConversionFactors[ImperialMomentOfInertiaIySelectedUnit][ImperialMomentOfInertiaIyUnits.indexOf(newUnit)];
        const convertedValue = parseFloat(ImperialMomentOfInertiaIy) * currentFactor;
        setImperialMomentOfInertiaIySelectedUnit(newUnit);
        setImperialMomentOfInertiaIy(convertedValue.toString());
    };

    const calculateImperialMomentOfInertiaIy = () => {
        const t = parseFloat(ImperialTValue);
        const b = parseFloat(ImperialbinputValue);
        const d = parseFloat(ImperialdinputValue);

        if (!isNaN(t) && !isNaN(b) && !isNaN(d)) {
            const area = t * (b - (-d) - t);
            const xcnumerator = (b * b) + (d * t) - (t * t);
            const xcdenominator = 2 * (b - (-d) - t);
            const xc = xcnumerator / xcdenominator;
            const numerator = (d * Math.pow(b, 3)) - ((d - t) * Math.pow(b - t, 3));
            const ImperialMomentOfInertiaIy = ((numerator / 3) - (area * Math.pow(b - xc, 2))).toFixed(2);
            const currentFactor = ImperialMomentOfInertiaIyConversionFactors['in⁴'][ImperialMomentOfInertiaIyUnits.indexOf(ImperialMomentOfInertiaIySelectedUnit)];
            setImperialMomentOfInertiaIy((ImperialMomentOfInertiaIy * currentFactor).toString());
        }
    };

    useEffect(() => {
        calculateImperialMomentOfInertiaIy();
    }, [ImperialTValue, ImperialbinputValue, ImperialdinputValue, ImperialMomentOfInertiaIySelectedUnit]);

    // SectionModulus Sx
    const ImperialSectionModulusSxUnits = ['in³'];
    const ImperialSectionModulusSxConversionFactors = {
        'in³': [1],
    };
    const [ImperialSectionModulusSx, setImperialSectionModulusSx] = useState('');
    const [ImperialSectionModulusSxSelectedUnit, setImperialSectionModulusSxSelectedUnit] = useState('in³');

    const handleImperialSectionModulusSxUnitChange = (newUnit) => {
        if (ImperialSectionModulusSx === '') return;

        const currentFactor = ImperialSectionModulusSxConversionFactors[ImperialSectionModulusSxSelectedUnit][ImperialSectionModulusSxUnits.indexOf(newUnit)];
        const convertedValue = parseFloat(ImperialSectionModulusSx) * currentFactor;
        setImperialSectionModulusSxSelectedUnit(newUnit);
        setImperialSectionModulusSx(convertedValue.toString());
    };

    const calculateImperialSectionModulusSx = () => {
        const t = parseFloat(ImperialTValue);
        const b = parseFloat(ImperialbinputValue);
        const d = parseFloat(ImperialdinputValue);

        if (!isNaN(t) && !isNaN(b) && !isNaN(d)) {
            const ycnumerator = (d * d) + (b * t) - (t * t);
            const ycdenominator = 2 * (b - (-d) - t);
            const yc = ycnumerator / ycdenominator;
            const area = t * (b - (-d) - t);
            const numerator = (b * Math.pow(d, 3)) - ((b - t) * Math.pow(d - t, 3));
            const ix = (numerator / 3) - (area * Math.pow(d - yc, 2));
            const ImperialSectionModulusSx = (ix / (d - yc)).toFixed(2);
            const currentFactor = ImperialSectionModulusSxConversionFactors['in³'][ImperialSectionModulusSxUnits.indexOf(ImperialSectionModulusSxSelectedUnit)];
            setImperialSectionModulusSx((ImperialSectionModulusSx * currentFactor).toString());
        }
    };

    useEffect(() => {
        calculateImperialSectionModulusSx();
    }, [ImperialTValue, ImperialbinputValue, ImperialdinputValue, ImperialSectionModulusSxSelectedUnit]);

    // SectionModulus Sy

    const ImperialSectionModulusSyUnits = ['in³'];
    const ImperialSectionModulusSyConversionFactors = {
        'in³': [1],
    };

    const [ImperialSectionModulusSy, setImperialSectionModulusSy] = useState('');
    const [ImperialSectionModulusSySelectedUnit, setImperialSectionModulusSySelectedUnit] = useState('in³');

    const handleImperialSectionModulusSyUnitChange = (newUnit) => {
        if (ImperialSectionModulusSy === '') return;

        const currentFactor = ImperialSectionModulusSyConversionFactors[ImperialSectionModulusSySelectedUnit][ImperialSectionModulusSyUnits.indexOf(newUnit)];
        const convertedValue = parseFloat(ImperialSectionModulusSy) * currentFactor;
        setImperialSectionModulusSySelectedUnit(newUnit);
        setImperialSectionModulusSy(convertedValue.toString());
    };

    const calculateImperialSectionModulusSy = () => {
        const t = parseFloat(ImperialTValue);
        const b = parseFloat(ImperialbinputValue);
        const d = parseFloat(ImperialdinputValue);

        if (!isNaN(t) && !isNaN(b) && !isNaN(d)) {
            const area = t * (b - (-d) - t);
            const xcnumerator = (b * b) + (d * t) - (t * t);
            const xcdenominator = 2 * (b - (-d) - t);
            const xc = xcnumerator / xcdenominator;
            const numerator = (d * Math.pow(b, 3)) - ((d - t) * Math.pow(b - t, 3));
            const iy = (numerator / 3) - (area * Math.pow(b - xc, 2));
            const ImperialSectionModulusSy =( iy / (b - xc)).toFixed(2);
            const currentFactor = ImperialSectionModulusSyConversionFactors['in³'][ImperialSectionModulusSyUnits.indexOf(ImperialSectionModulusSySelectedUnit)];
            setImperialSectionModulusSy((ImperialSectionModulusSy * currentFactor).toString());
        }
    };

    useEffect(() => {
        calculateImperialSectionModulusSy();
    }, [ImperialTValue, ImperialbinputValue, ImperialdinputValue, ImperialSectionModulusSySelectedUnit]);


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
                                value={binputValue}
                                onChange={(e) => handlebInputChange(e.target.value)}
                            />
                            <select
                                className='Calculator-select-option'
                                value={bselectedUnit}
                                onChange={(e) => handlebUnitChange(e.target.value)}
                            >
                                {bunits.map((unit) => (
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
                                value={dinputValue}
                                onChange={(e) => handledInputChange(e.target.value)}
                            />
                            <select
                                className='Calculator-select-option'
                                value={selectedUnit}
                                onChange={(e) => handledUnitChange(e.target.value)}
                            >
                                {dunits.map((unit) => (
                                    <option key={unit} value={unit}>
                                        {unit}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <h3 className='claculator-conversation-title'>Thickness (t) :</h3>
                        <div className='Calculator-Side-A'>
                            <input
                                className='calculator-input'
                                type="number"
                                value={TValue}
                                onChange={(e) => handleTValueInputChange(e.target.value)}
                            />
                            <select
                                className='Calculator-select-option'
                                value={selectedTUnit}
                                onChange={(e) => handleTValueUnitChange(e.target.value)}
                            >
                                {TValueunits.map((unit) => (
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

                            <br />

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
                                            value={sectionModulusSx}
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
                                            value={SectionModulusSy}
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
                            <br />
                            <br />
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
                                value={ImperialbinputValue}
                                onChange={(e) => handleImperialbInputChange(e.target.value)}
                            />
                            <select
                                className='Calculator-select-option'
                                value={ImperialbselectedUnit}
                                onChange={(e) => handleImperialbUnitChange(e.target.value)}
                            >
                                {Imperialbunits.map((unit) => (
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
                                value={ImperialdinputValue}
                                onChange={(e) => handledImperialInputChange(e.target.value)}
                            />
                            <select
                                className='Calculator-select-option'
                                value={ImperialdselectedUnit}
                                onChange={(e) => handledImperialUnitChange(e.target.value)}
                            >
                                {Imperialdunits.map((unit) => (
                                    <option key={unit} value={unit}>
                                        {unit}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <h3 className='claculator-conversation-title'>Thickness (t) :</h3>
                        <div className='Calculator-Side-A'>
                            <input
                                className='calculator-input'
                                type="number"
                                value={ImperialTValue}
                                onChange={(e) => handleImperialTValueInputChange(e.target.value)}
                            />




                            <select
                                className='Calculator-select-option'
                                value={ImperialTVselectedTUnit}
                                onChange={(e) => handleImperialTValueUnitChange(e.target.value)}
                            >
                                {ImperialTValueunits.map((unit) => (
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
                                            value={ImperialCentroidXcSelectedUnit}
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
                                            value={ImperialCentroidYcSelectedUnit}
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
                                            value={ImperialMomentOfInertiaIxSelectedUnit}
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
                                            value={ImperialMomentOfInertiaIySelectedUnit}
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

                            <br />

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
                                            value={ImperialSectionModulusSx}
                                            onChange={(e) => calculateImperialSectionModulusSx(e.target.value)}
                                        />
                                        <select
                                            className='Calculator-select-option'
                                            value={ImperialSectionModulusSxSelectedUnit}
                                            onChange={(e) => handleImperialSectionModulusSxUnitChange(e.target.value)}
                                        >
                                            {ImperialSectionModulusSxUnits.map((unit) => (
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
                                            value={ImperialSectionModulusSy}
                                            onChange={(e) => calculateImperialSectionModulusSy(e.target.value)}
                                        />
                                        <select
                                            className='Calculator-select-option'
                                            value={ImperialSectionModulusSySelectedUnit}
                                            onChange={(e) => handleImperialSectionModulusSyUnitChange(e.target.value)}
                                        >
                                            {ImperialSectionModulusSyUnits.map((unit) => (
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
                    </div >
                </>
            )}

        </>
    )
}
