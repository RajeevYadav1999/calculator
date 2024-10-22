import React, { useState, useEffect } from 'react';


export default function Channel(props) {

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


    const twunits = ['mm', 'cm', 'm'];
    const twconversionFactors = {
        mm: [1, 0.1, 0.001],
        cm: [10, 1, 0.01],
        m: [1000, 100, 1],
    };

    const [twinputValue, setTwInputValue] = useState('');
    const [TwselectedUnit, settwSelectedUnit] = useState('mm');
    const [internaltwinputValue, setInternaltwinputValue] = useState(0); // Always in mm

    const handletwInputChange = (value) => {
        setTwInputValue(value);
        const factor = twconversionFactors[TwselectedUnit][0];
        setInternaltwinputValue(parseFloat(value) * factor);
    };

    const handletwUnitChange = (unit) => {
        const newMetricValueInMM = parseFloat(twinputValue) * twconversionFactors[TwselectedUnit][0];
        const convertedValue = newMetricValueInMM / twconversionFactors[unit][0];
        settwSelectedUnit(unit);
        setTwInputValue(convertedValue.toFixed(3));
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




    const t = parseFloat(internalTValue);
    const tw = parseFloat(internaltwinputValue);
    const b = parseFloat(internalbinputValue);
    const d = parseFloat(internaldinputValue);

    useEffect(() => {
        const value = parseFloat(internalbinputValue) * dconversionFactors[selectedUnit][0];
        if (!isNaN(value)) {
            const areaValue = (t * b + 2 * (tw * d)).toFixed(3);
            setArea((areaValue / AreaConversionFactors[AreaUnit][0]));
        } else {
            setArea('');
        }
    }, [internalTValue, internaltwinputValue, internalbinputValue, internaldinputValue, AreaUnit]);


    useEffect(() => {
        const value = internalbinputValue;
        const centroidValue = (value / 2);
        setCentroidXc((centroidValue / bconversionFactors[centroidXcSelectedUnit][0]));
    }, [internalTValue, internaltwinputValue, internalbinputValue, internaldinputValue, centroidXcSelectedUnit]);


    // CentriodYcUnits

    useEffect(() => {
        const t = parseFloat(internalTValue);
        const tw = parseFloat(internaltwinputValue);
        const b = parseFloat(internalbinputValue);
        const d = parseFloat(internaldinputValue);
      
        const numerator = (b * (t * t)) + (2 * tw * d * (2 * t + d));
        const denominator = 2 * ((t * b) + (2 * tw * d));
        const calculatedCentroidYc = numerator / denominator;
      
        let formattedValue;
        switch (centroidYcSelectedUnit) {
          case 'm':
            formattedValue = (calculatedCentroidYc / bconversionFactors[centroidYcSelectedUnit][0]).toFixed(5);
            break;
          case 'cm':
            formattedValue = (calculatedCentroidYc / bconversionFactors[centroidYcSelectedUnit][0]).toFixed(3);
            break;
          case 'mm':
            formattedValue = (calculatedCentroidYc / bconversionFactors[centroidYcSelectedUnit][0]).toFixed(2);
            break;
          default:
            formattedValue = calculatedCentroidYc / bconversionFactors[centroidYcSelectedUnit][0];
        }
      
        setCentroidYc(formattedValue);
      }, [internalTValue, internaltwinputValue, internalbinputValue, internaldinputValue, centroidYcSelectedUnit]);


      useEffect(() => {
        const value = b;
        if (!isNaN(value)) {
          const numeratorYc = (b * (t * t)) + (2 * tw * d * (2 * t + d));
          const denominatorYc = 2 * (t * b + 2 * tw * d);
          const Yc = numeratorYc / denominatorYc;
          const numeratorIx = b * Math.pow(d + t, 3);
          const subtractValueIx1 = Math.pow(d, 3) * (b - 2 * tw);
          const subtractValueIx2 = (t * b + 2 * tw * d) * Math.pow(d + t - Yc, 2);
          const momentOfInertiaIx = (((numeratorIx - subtractValueIx1) / 3) - subtractValueIx2);
      
          let formattedValue;
          switch (momentOfInertiaIxSelectedUnit) {
            case 'm⁴':
              formattedValue = (momentOfInertiaIx * MomentOfInertiaIxConversionFactors['mm⁴'][MomentOfInertiaIxUnits.indexOf(momentOfInertiaIxSelectedUnit)]).toExponential(4);
              break;
            case 'cm⁴':
              formattedValue = (momentOfInertiaIx * MomentOfInertiaIxConversionFactors['mm⁴'][MomentOfInertiaIxUnits.indexOf(momentOfInertiaIxSelectedUnit)]).toFixed(4);
              break;
            case 'mm⁴':
              formattedValue = (momentOfInertiaIx * MomentOfInertiaIxConversionFactors['mm⁴'][MomentOfInertiaIxUnits.indexOf(momentOfInertiaIxSelectedUnit)]).toFixed(2);
              break;
            default:
              formattedValue = momentOfInertiaIx * MomentOfInertiaIxConversionFactors['mm⁴'][MomentOfInertiaIxUnits.indexOf(momentOfInertiaIxSelectedUnit)];
          }
      
          setMomentOfInertiaIx(formattedValue);
        }
      }, [b, d, t, tw, momentOfInertiaIxSelectedUnit]);

      useEffect(() => {
        const value = b;
        if (!isNaN(value)) {
          const numeratorIy = (d + t) * Math.pow(b, 3);
          const subtractValueIy = d * Math.pow((b - 2 * tw), 3);
          const denominatorIy = 12;
          const momentOfInertiaIy = ((numeratorIy - subtractValueIy) / denominatorIy);
      
          let convertedValue;
          switch (momentOfInertiaIySelectedUnit) {
            case 'mm⁴':
              convertedValue = (momentOfInertiaIy * MomentOfInertiaIyConversionFactors['mm⁴'][MomentOfInertiaIyUnits.indexOf(momentOfInertiaIySelectedUnit)]).toFixed(2);
              break;
            case 'cm⁴':
              convertedValue = (momentOfInertiaIy * MomentOfInertiaIyConversionFactors['mm⁴'][MomentOfInertiaIyUnits.indexOf(momentOfInertiaIySelectedUnit)]).toFixed(4);
              break;
            case 'm⁴':
              convertedValue = (momentOfInertiaIy * MomentOfInertiaIyConversionFactors['mm⁴'][MomentOfInertiaIyUnits.indexOf(momentOfInertiaIySelectedUnit)]).toExponential(4);
              break;
            default:
              convertedValue = momentOfInertiaIy * MomentOfInertiaIyConversionFactors['mm⁴'][MomentOfInertiaIyUnits.indexOf(momentOfInertiaIySelectedUnit)];
          }
      
          setMomentOfInertiaIy(convertedValue);
        }
      }, [b, d, t, tw, momentOfInertiaIySelectedUnit]);


    useEffect(() => {
        const value = b
        if (!isNaN(value)) {
            const numerator = (b * t * t) + (2 * tw * d * (2 * t + d));
            const denominator = 2 * (t * b + 2 * tw * d);
            const Yc = numerator / denominator;
            const numeratorIx = b * Math.pow(d + t, 3);
            const subtractValueIx1 = Math.pow(d, 3) * (b - 2 * tw);
            const subtractValueIx2 = (t * b + 2 * tw * d) * Math.pow(d + t - Yc, 2);
            const momentOfInertiaIx = (((numeratorIx - subtractValueIx1) / 3) - subtractValueIx2).toFixed(3);
            const denominatorSx = d + t - Yc;
            const sectionModulesValue = (momentOfInertiaIx / denominatorSx).toFixed(3);
            // const convertedValue = (sectionModulesValue * SectionModulusSxConversionFactors['mm³'][SectionModulusSxUnits.indexOf(sectionModulusSxSelectedUnit)]);

            let convertedValue;
          switch (sectionModulusSxSelectedUnit) {
            case 'mm³':
              convertedValue = (sectionModulesValue * SectionModulusSxConversionFactors['mm³'][SectionModulusSxUnits.indexOf(sectionModulusSxSelectedUnit)]).toFixed(2);
              break;
            case 'cm³':
              convertedValue = (sectionModulesValue * SectionModulusSxConversionFactors['mm³'][SectionModulusSxUnits.indexOf(sectionModulusSxSelectedUnit)]).toFixed(4);
              break;
            case 'm³':
              convertedValue = (sectionModulesValue * SectionModulusSxConversionFactors['mm³'][SectionModulusSxUnits.indexOf(sectionModulusSxSelectedUnit)]).toExponential(4);
              break;
            default:
              convertedValue = sectionModulesValue * SectionModulusSxConversionFactors['mm³'][SectionModulusSxUnits.indexOf(sectionModulusSxSelectedUnit)];
          }

            setSectionModulusSx(convertedValue);
        }
    }, [b, d, t, tw, sectionModulusSxSelectedUnit]);
    
    useEffect(() => {
        const value = b;
        if (!isNaN(value)) {
            const numeratorIy = (d + t) * Math.pow(b, 3);
            const subtractValueIy = d * Math.pow(b - 2 * tw, 3);
            const momentOfInertiaIy = ((numeratorIy - subtractValueIy) / 12);
            const Xc = b / 2;
            const sectionModulesValue = (momentOfInertiaIy / Xc).toFixed(4);
            const convertedValue = (sectionModulesValue * SectionModulusSyConversionFactors['mm³'][SectionModulusSyUnits.indexOf(SectionModulusSySelectedUnit)]);
            setSectionModulusSy(convertedValue);
        }
    }, [b, d, t, tw, SectionModulusSySelectedUnit]);
















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
        setImperialbInputValue((parseFloat(ImperialbinputValue) / Imperialbfactor).toFixed(4));
    };


    const Imperialdunits = ['in'];
    const ImperialdconversionFactors = {
        in: [1],
    };

    const [ImperialdinputValue, setImperialdInputValue] = useState('');
    const [ImperialdselectedUnit, setImperialdSelectedUnit] = useState('in');

    const handleImperialdInputChange = (value) => {
        setImperialdInputValue(value);
    };

    const handleImperialdUnitChange = (unit) => {
        setImperialdSelectedUnit(unit);
        const Imperialdfactor = ImperialdconversionFactors[unit][dunits.indexOf(ImperialdselectedUnit)];
        setImperialdInputValue((parseFloat(ImperialdinputValue) / Imperialdfactor).toFixed(4));
    };


    const Imperialtwunits = ['in'];
    const ImperialtwconversionFactors = {
        in: [1],
    };

    const [ImperialtwinputValue, setImperialTwInputValue] = useState('');
    const [ImperialTwselectedUnit, setImperialtwSelectedUnit] = useState('in');

    const handleImperialtwInputChange = (value) => {
        setImperialTwInputValue(value);
    };

    const handleImperialtwUnitChange = (unit) => {
        setImperialtwSelectedUnit(unit);
        const Imperialtwfactor = ImperialtwconversionFactors[unit][Imperialtwunits.indexOf(ImperialTwselectedUnit)];
        setImperialTwInputValue((parseFloat(ImperialtwinputValue) / Imperialtwfactor).toFixed(4));
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
        setImperialTValue((parseFloat(ImperialTValue) / ImperialTValuefactor).toFixed(4));
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
        const d = parseFloat(ImperialdinputValue);
        const b = parseFloat(ImperialbinputValue);
        const t = parseFloat(ImperialTValue);
        const tw = parseFloat(ImperialtwinputValue);
        // ImperialbinputValue
// ImperialdinputValue
// ImperialtwinputValue
// ImperialTValue
        const calculatedImperialArea = (t * b + 2 * (tw * d))

        // const calculatedImperialArea = (t * b + ((2*tw) * d));
        setImperialArea(calculatedImperialArea);
    };

    useEffect(() => {
        calculateImperialArea();
    }, [ImperialTValue, ImperialtwinputValue, ImperialbinputValue, ImperialdinputValue]);

    // CentroidXcUnits
    const ImperialCentroidXcUnits = ['in'];
    const ImperialCentroidXcConversionFactors = {
        in: [1],
    };
    const [ImperialCentroidXc, setImperialCentroidXc] = useState('');
    const [ImperialCentroidXcSelectedUnit, setImperialCentroidXcSelectedUnit] = useState('in');

    // Handle change in centroid Xc unit
    const handleImperialCentroidXcUnitChange = (unit) => {
        const conversionFactor = ImperialCentroidXcConversionFactors[ImperialCentroidXcSelectedUnit][ImperialCentroidXcUnits.indexOf(unit)];
        const newImperialCentroidXc = parseFloat(ImperialCentroidXc) * conversionFactor;
        setImperialCentroidXc(newImperialCentroidXc);
        setImperialCentroidXcSelectedUnit(unit);
    };

    // Calculate centroid Xc based on input value
    const calculateImperialCentroidXc = (ImperialbinputValue) => {
        if (!isNaN(ImperialbinputValue)) {
            const centroidXc = ImperialbinputValue / 2;
            setImperialCentroidXc(centroidXc);
        }
    };

    useEffect(() => {
        calculateImperialCentroidXc(ImperialbinputValue);
    }, [ImperialbinputValue]);

    // CentriodYcUnits

    const ImperialCentroidYcUnits = ['in'];
    const ImperialCentroidYcConversionFactors = {
        in: [1],
    };
    const [ImperialCentroidYc, setImperialCentroidYc] = useState('');
    const [ImperialCentroidYcSelectedUnit, setImperialCentroidYcSelectedUnit] = useState('in');

    // Handle change in centroid Xc unit
    const handleImperialCentroidYcUnitChange = (unit) => {
        const conversionFactor = ImperialCentroidYcConversionFactors[ImperialCentroidYcSelectedUnit][ImperialCentroidYcUnits.indexOf(unit)];
        const newImperialCentroidYc = parseFloat(ImperialCentroidYc) * conversionFactor;
        setImperialCentroidYc(newImperialCentroidYc);
        setImperialCentroidYcSelectedUnit(unit);
    };

    // Calculate centroid Xc based on input value
    const calculateImperialCentroidYc = (ImperialTValue, ImperialtwinputValue, ImperialbinputValue, ImperialdinputValue) => {
        const t = parseFloat(ImperialTValue);
        const tw = parseFloat(ImperialtwinputValue);
        const b = parseFloat(ImperialbinputValue);
        const d = parseFloat(ImperialdinputValue);
        if (!isNaN(b)) {
            const numerator = (b * (t * t)) + (2 * tw * d * (2 * t + d));
            const denominator = 2 * ((t * b) + (2 * tw * d));
            const ImperialCentroidYc = (numerator / denominator).toFixed(2);
            setImperialCentroidYc(ImperialCentroidYc);
        } else {
            setImperialCentroidYc('');
        }
    };

    useEffect(() => {
        calculateImperialCentroidYc(ImperialTValue, ImperialtwinputValue, ImperialbinputValue, ImperialdinputValue);
    }, [ImperialTValue, ImperialtwinputValue, ImperialbinputValue, ImperialdinputValue]);

    // MomentOfInertia Ix

    const ImperialMomentOfInertiaIxUnits = ['in⁴'];
    const ImperialMomentOfInertiaIxConversionFactors = {
        'in⁴': [1],
    };

    const [ImperialMomentOfInertiaIx, setImperialMomentOfInertiaIx] = useState('');
    const [ImperialMomentOfInertiaIxSelectedUnit, setImperialMomentOfInertiaIxSelectedUnit] = useState('in⁴');

    // Handle change in moment of inertia unit
    const handleImperialMomentOfInertiaUnitChange = (newUnit) => {
        const currentFactor = ImperialMomentOfInertiaIxConversionFactors[ImperialMomentOfInertiaIxSelectedUnit][ImperialMomentOfInertiaIxUnits.indexOf(newUnit)];
        const convertedValue = parseFloat(ImperialMomentOfInertiaIx) * currentFactor;
        setImperialMomentOfInertiaIxSelectedUnit(newUnit);
        setImperialMomentOfInertiaIx(convertedValue.toString());
    };

    // Calculate moment of inertia Ix
    const calculateImperialMomentOfInertiaIx = (ImperialTValue, ImperialtwinputValue, ImperialbinputValue, ImperialdinputValue) => {
        const t = parseFloat(ImperialTValue);
        const tw = parseFloat(ImperialtwinputValue);
        const b = parseFloat(ImperialbinputValue);
        const d = parseFloat(ImperialdinputValue);
        if (!isNaN(t) && !isNaN(tw) && !isNaN(b) && !isNaN(d)) {
            const numeratorYc = (b * (t * t)) + (2 * tw * d * (2 * t + d));
            const denominatorYc = 2 * (t * b + 2 * tw * d);
            const Yc = numeratorYc / denominatorYc;
            const numeratorIx = b * Math.pow(d + t, 3);
            const subtractValueIx1 = Math.pow(d, 3) * (b - 2 * tw);
            const subtractValueIx2 = (t * b + 2 * tw * d) * Math.pow(d + t - Yc, 2);
            const ImperialMomentOfInertiaIx = (((numeratorIx - subtractValueIx1) / 3) - subtractValueIx2).toFixed(2);

            const currentFactor = ImperialMomentOfInertiaIxConversionFactors['in⁴'][ImperialMomentOfInertiaIxUnits.indexOf(ImperialMomentOfInertiaIxSelectedUnit)];
            setImperialMomentOfInertiaIx((ImperialMomentOfInertiaIx * currentFactor).toString());
        }
    };

    useEffect(() => {
        calculateImperialMomentOfInertiaIx(ImperialTValue, ImperialtwinputValue, ImperialbinputValue, ImperialdinputValue);
    }, [ImperialTValue, ImperialtwinputValue, ImperialbinputValue, ImperialdinputValue, ImperialMomentOfInertiaIxSelectedUnit]);

    // MomentOfInertia Iy

    const ImperialMomentOfInertiaIyUnits = ['in⁴'];
    const ImperialMomentOfInertiaIyConversionFactors = {
        'in⁴': [1],
    };

    const [ImperialMomentOfInertiaIy, setImperialMomentOfInertiaIy] = useState('');
    const [ImperialMomentOfInertiaIySelectedUnit, setImperialMomentOfInertiaIySelectedUnit] = useState('in⁴');

    // Handle change in moment of inertia unit
    const handleImperialMomentOfInertiaIyUnitChange = (newUnit) => {
        const currentFactor = ImperialMomentOfInertiaIyConversionFactors[ImperialMomentOfInertiaIySelectedUnit][ImperialMomentOfInertiaIyUnits.indexOf(newUnit)];
        const convertedValue = parseFloat(ImperialMomentOfInertiaIy) * currentFactor;
        setImperialMomentOfInertiaIySelectedUnit(newUnit);
        setImperialMomentOfInertiaIy(convertedValue.toString());
    };

    // Calculate moment of inertia Iy
    const calculateImperialMomentOfInertiaIy = (ImperialTValue, ImperialtwinputValue, ImperialbinputValue, ImperialdinputValue) => {
        const t = parseFloat(ImperialTValue);
        const tw = parseFloat(ImperialtwinputValue);
        const b = parseFloat(ImperialbinputValue);
        const d = parseFloat(ImperialdinputValue);
        if (!isNaN(t) && !isNaN(tw) && !isNaN(b) && !isNaN(d)) {
            const numeratorIy = (d + t) * Math.pow(b, 3);
            const subtractValueIy = d * Math.pow((b - 2 * tw), 3);
            const denominatorIy = 12;
            const ImperialMomentOfInertiaIy = ((numeratorIy - subtractValueIy) / denominatorIy).toFixed(2);
            const currentFactor = ImperialMomentOfInertiaIyConversionFactors['in⁴'][ImperialMomentOfInertiaIyUnits.indexOf(ImperialMomentOfInertiaIySelectedUnit)];
            setImperialMomentOfInertiaIy((ImperialMomentOfInertiaIy * currentFactor).toString());
        } else {
            setImperialMomentOfInertiaIy('');
        }
    };

    useEffect(() => {
        calculateImperialMomentOfInertiaIy(ImperialTValue, ImperialtwinputValue, ImperialbinputValue, ImperialdinputValue);
    }, [ImperialTValue, ImperialtwinputValue, ImperialbinputValue, ImperialdinputValue, ImperialMomentOfInertiaIySelectedUnit]);



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
        const t = parseFloat(ImperialTValue);
        const tw = parseFloat(ImperialtwinputValue);
        const b = parseFloat(ImperialbinputValue);
        const d = parseFloat(ImperialdinputValue);
        const numerator = (b * t * t) + (2 * tw * d * (2 * t + d));
        const denominator = 2 * (t * b + 2 * tw * d);
        const Yc = numerator / denominator;
        const numeratorIx = b * Math.pow(d + t, 3);
        const subtractValueIx1 = Math.pow(d, 3) * (b - 2 * tw);
        const subtractValueIx2 = (t * b + 2 * tw * d) * Math.pow(d + t - Yc, 2);
        const momentOfInertiaIx = (((numeratorIx - subtractValueIx1) / 3) - subtractValueIx2);
        const denominatorSx = d + t - Yc;
        const ImperialsectionModulesSx = (momentOfInertiaIx / denominatorSx).toFixed(2);
        setImperialSectionModules(ImperialsectionModulesSx);
    };

    useEffect(() => {
        calculateImperialSectionModulesSx();
    }, [ImperialTValue, ImperialtwinputValue, ImperialbinputValue, ImperialdinputValue]);

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
        const d = parseFloat(ImperialdinputValue);
        const b = parseFloat(ImperialbinputValue);
        const t = parseFloat(ImperialTValue);
        const tw = parseFloat(ImperialtwinputValue);

        const numeratorIy = (d + t) * Math.pow(b, 3);
        const subtractValueIy = d * Math.pow((b - 2 * tw), 3);
        const denominatorIy = 12;
        const Iy = (numeratorIy - subtractValueIy) / denominatorIy;
        
        const Xc = b / 2;
        const ImperialsectionModulesSy = (Iy / Xc).toFixed(2);
        // setSectionModulesSy(sectionModulesSy.toString());
        setImperialSectionModulesSy(ImperialsectionModulesSy.toString());
        // setImperialSectionModulesSy(ImperialsectionModulesSy);
    };

    useEffect(() => {
        calculateImperialSectionModulesSy();
    }, [ImperialTValue, ImperialtwinputValue, ImperialbinputValue, ImperialdinputValue]);



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
                        <h3 className='claculator-conversation-title'>Height (b) :</h3>
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
                        <h3 className='claculator-conversation-title'>Flange (d) :</h3>
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
                        <h3 className='claculator-conversation-title'>Web Thickness (tw) :</h3>
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

                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <h3 className='claculator-conversation-title'>Flange Thickness (t) :</h3>
                        <div className='Calculator-Side-A'>
                            <input
                                className='calculator-input'
                                type="number"
                                value={twinputValue}
                                onChange={(e) => handletwInputChange(e.target.value)}
                            />
                            <select
                                className='Calculator-select-option'
                                value={TwselectedUnit}
                                onChange={(e) => handletwUnitChange(e.target.value)}
                            >
                                {twunits.map((unit) => (
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
                </>)}

            {props.MetricOrImperial === 'option2' && (
                <>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <h3 className='claculator-conversation-title'>Height :</h3>
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
                        <h3 className='claculator-conversation-title'>Flange :</h3>
                        <div className='Calculator-Side-A'>
                            <input
                                className='calculator-input'
                                type="number"
                                value={ImperialdinputValue}
                                onChange={(e) => handleImperialdInputChange(e.target.value)}
                            />
                            <select
                                className='Calculator-select-option'
                                value={ImperialdselectedUnit}
                                onChange={(e) => handleImperialdUnitChange(e.target.value)}
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
                        <h3 className='claculator-conversation-title'>Web Thickness :</h3>
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

                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <h3 className='claculator-conversation-title'>Thickness :</h3>
                        <div className='Calculator-Side-A'>
                            <input
                                className='calculator-input'
                                type="number"
                                value={ImperialtwinputValue}
                                onChange={(e) => handleImperialtwInputChange(e.target.value)}
                            />
                            <select
                                className='Calculator-select-option'
                                value={ImperialTwselectedUnit}
                                onChange={(e) => handleImperialtwUnitChange(e.target.value)}
                            >
                                {Imperialtwunits.map((unit) => (
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
                                            onChange={(e) => handleImperialMomentOfInertiaUnitChange(e.target.value)}
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
                                            value={ImperialSectionModulesSx}
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
                                            value={ImperialsectionModulesSy}
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
                            <br />
                            <br />
                        </div>
                    </div >
                </>
            )}
        </>
    )
}
