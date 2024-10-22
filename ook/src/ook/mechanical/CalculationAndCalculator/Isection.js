import React, { useState, useEffect } from 'react';

export default function Isection(props) {
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
    const [internalTValue, setinternalTValue] = useState(0); // Always in mm

    const handleTValueInputChange = (value) => {
        setTValue(value);
        const factor = TValueconversionFactors[selectedTUnit][0];
        setinternalTValue(parseFloat(value) * factor);
    };

    const handleTValueUnitChange = (unit) => {
        const newMetricValueInMM = parseFloat(TValue) * TValueconversionFactors[selectedTUnit][0];
        const convertedValue = newMetricValueInMM / TValueconversionFactors[unit][0];
        setTValueSelectedUnit(unit);
        setTValue(convertedValue.toFixed(5));
    };
  
    const twunits = ['mm', 'cm', 'm'];
    const twconversionFactors = {
        mm: [1, 0.1, 0.001],
        cm: [10, 1, 0.01],
        m: [1000, 100, 1],
    };
    const [twinputValue, settwinputValue] = useState('');
    const [TwselectedUnit, settwinputValueSelectedUnit] = useState('mm');
    const [internaltwinputValue, setInternaltwinputValue] = useState(0); // Always in mm

    const handletwInputChange = (value) => {
        settwinputValue(value);
        const factor = twconversionFactors[TwselectedUnit][0];
        setInternaltwinputValue(parseFloat(value) * factor);
    };

    const handletwUnitChange = (unit) => {
        const newMetricValueInMM = parseFloat(twinputValue) * twconversionFactors[TwselectedUnit][0];
        const convertedValue = newMetricValueInMM / twconversionFactors[unit][0];
        settwinputValueSelectedUnit(unit);
        settwinputValue(convertedValue.toFixed(5));
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
            const areaValue = (tw * d) + 2 * (t * b);
            setArea((areaValue / AreaConversionFactors[AreaUnit][0]));
        } else {
            setArea('');
        }
    }, [internalTValue, internaltwinputValue, internalbinputValue, internaldinputValue, AreaUnit]);


    useEffect(() => {
        const b = internalbinputValue;
        const centroidXcValue = b / 2;
        setCentroidXc((centroidXcValue / bconversionFactors[centroidXcSelectedUnit][0]));
    }, [internalTValue, internaltwinputValue, internalbinputValue, internaldinputValue, centroidXcSelectedUnit]);


    // CentriodYcUnits

    useEffect(() => {
        const t = parseFloat(internalTValue);
        const tw = parseFloat(internaltwinputValue);
        const b = parseFloat(internalbinputValue);
        const d = parseFloat(internaldinputValue);

        const calculatedCentroidYc = (d / 2) - (-t);

        setCentroidYc((calculatedCentroidYc / bconversionFactors[centroidYcSelectedUnit][0]));
    }, [internalTValue, internaltwinputValue, internalbinputValue, internaldinputValue, centroidYcSelectedUnit]);


    useEffect(() => {
        const value = b;
        if (!isNaN(value)) {
            const firstValueIx = (b * Math.pow((d - (-2 * t)), 3));
            const subtractedValueIx = (b - tw) * Math.pow(d, 3);
            const momentOfInertiaIx = ((firstValueIx - subtractedValueIx) / 12).toFixed(3);
            const convertedValue = (momentOfInertiaIx * MomentOfInertiaIxConversionFactors['mm⁴'][MomentOfInertiaIxUnits.indexOf(momentOfInertiaIxSelectedUnit)]);
            setMomentOfInertiaIx(convertedValue);
        }
    }, [b, d, t, tw, momentOfInertiaIxSelectedUnit]);

    useEffect(() => {
        const value = b;
        if (!isNaN(value)) {
            const numeratorIy = (Math.pow(b, 3) * t) / 6;
            const denominatorIy = (Math.pow(tw, 3) * d) / 12;
            const momentOfInertiaIy = (numeratorIy + denominatorIy).toFixed(2);

            const convertedValue = (momentOfInertiaIy * MomentOfInertiaIyConversionFactors['mm⁴'][MomentOfInertiaIyUnits.indexOf(momentOfInertiaIySelectedUnit)]);
            setMomentOfInertiaIy(convertedValue);
        }
    }, [b, d, t, tw, momentOfInertiaIySelectedUnit]);


    useEffect(() => {
        const value = b
        if (!isNaN(value)) {
            const firstValueIx = (b * Math.pow((d - (-2 * t)), 3));
            const subtractedValueIx = (b - tw) * Math.pow(d, 3);
            const Ix = (firstValueIx - subtractedValueIx) / 12;
            const Yc = (d / 2) - (-t);
            const sectionModulesValue = (Ix / Yc).toFixed(2);
            const convertedValue = (sectionModulesValue * SectionModulusSxConversionFactors['mm³'][SectionModulusSxUnits.indexOf(sectionModulusSxSelectedUnit)]);
            setSectionModulusSx(convertedValue);
        }
    }, [b, d, t, tw, sectionModulusSxSelectedUnit]);
    useEffect(() => {
        const value = b;
        if (!isNaN(value)) {
            const Xc = b / 2
            const numeratorIy = (Math.pow(b, 3) * t) / 6;
            const denominatorIy = (Math.pow(tw, 3) * d) / 12;
            const Iy = numeratorIy + denominatorIy;
            const sectionModulesValue = (Iy / Xc).toFixed(3);
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
        const bfactor = ImperialbconversionFactors[unit][Imperialbunits.indexOf(ImperialbselectedUnit)];
        setImperialbInputValue((parseFloat(ImperialbinputValue) / bfactor).toFixed(4));
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
        const dfactor = ImperialdconversionFactors[unit][Imperialdunits.indexOf(ImperialdselectedUnit)];
        setImperialdInputValue((parseFloat(ImperialdinputValue) / dfactor).toFixed(4));
    };


    const Imperialtwunits = ['in'];
    const ImperialtwconversionFactors = {
        in: [1],
    };

    const [ImperialtwinputValue, setImperialTwInputValue] = useState('');
    const [ImperialTWSelectedValue, setImperialtwSelectedUnit] = useState('in');

    const handleImperialtwInputChange = (value) => {
        setImperialTwInputValue(value);
    };

    const handleImperialtwUnitChange = (unit) => {
        setImperialtwSelectedUnit(unit);
        const Imperialtwfactor = ImperialtwconversionFactors[unit][Imperialtwunits.indexOf(ImperialTWSelectedValue)];
        setImperialTwInputValue((parseFloat(ImperialtwinputValue) / Imperialtwfactor).toFixed(4));
    };

    const Imperialtunits = ['in'];
    const ImperialtconversionFactors = {
        in: [1],
    };

    const [Imperialt, setImperialt] = useState('');
    const [ImperialtselectedTUnit, setImperialtSelectedUnit] = useState('in');

    const handleImperialtInputChange = (value) => {
        setImperialt(value);
    };

    const handleImperialtUnitChange = (unit) => {
        setImperialtSelectedUnit(unit);
        const Imperialtfactor = ImperialtconversionFactors[unit][Imperialtunits.indexOf(ImperialtselectedTUnit)];
        setImperialt((parseFloat(Imperialt) / Imperialtfactor).toFixed(4));
    };


    const ImperialAreaUnits = ['in²'];
    const ImperialAreaconversionFactors = {
        'in²': [1],
    };

    const [ImperialArea, setImperialArea] = useState(0);
    const [ImperialAreaUnit, setImperialAreaUnit] = useState('in²');

    // Handler for changing area unit
    const handleImperialAreaUnitChange = (unit) => {
        setImperialAreaUnit(unit);
        const currentFactor = ImperialAreaconversionFactors[ImperialAreaUnit][ImperialAreaUnits.indexOf(unit)];
        setImperialArea((prevImperialArea) => prevImperialArea * currentFactor);
    };

    // Calculate area based on inputs
    const calculateImperialArea = () => {
        const t = parseFloat(Imperialt);
        const tw = parseFloat(ImperialtwinputValue);
        const b = parseFloat(ImperialbinputValue);
        const d = parseFloat(ImperialdinputValue);
        const areaValue = (tw * d) + 2 * (t * b);
        setImperialArea(areaValue);
    };

    // Effect to recalculate area whenever inputs change
    useEffect(() => {
        calculateImperialArea();
    }, [Imperialt, ImperialtwinputValue, ImperialbinputValue, ImperialdinputValue]);



    // CentroidXcUnits
    const ImperialCentroidXcUnits = ['in'];
    const ImperialCentroidXcconversionFactors = {
        in: [1],
    };

    const [ImperialCentroidXc, setImperialCentroidXc] = useState(0);
    const [ImperialCentroidXcSelectedUnit, setImperialCentroidXcSelectedUnit] = useState('in');

    // Handler for changing centroid Xc unit
    const handleImperialCentroidXcUnitChange = (unit) => {
        setImperialCentroidXcSelectedUnit(unit);
        const currentFactor = ImperialCentroidXcconversionFactors[unit][ImperialCentroidXcUnits.indexOf(ImperialCentroidXcSelectedUnit)];
        setImperialCentroidXc((prevImperialCentroidXc) => prevImperialCentroidXc * currentFactor);
    };

    // Calculate centroid Xc based on input value
    const calculateImperialCentroidXc = () => {
        const b = parseFloat(ImperialbinputValue);
        const ImperialCentroidXc = b / 2;
        setImperialCentroidXc(ImperialCentroidXc);
    };

    // Effect to recalculate centroid Xc whenever binputValue changes
    useEffect(() => {
        calculateImperialCentroidXc();
    }, [ImperialbinputValue]);


    // CentriodYcUnits
    const ImperialCentriodYcUnits = ['in'];
    const ImperialCentriodYcconversionFactors = {
        in: [1],
    };
    const [ImperialCentriodYc, setImperialCentriodYc] = useState(0);
    const [ImperialCentriodYcSelectedUnit, setImperialCentriodYcSelectedUnit] = useState('in');

    // Handler for changing centroid Yc unit
    const handleImperialCentriodYcUnitChange = (unit) => {
        setImperialCentriodYcSelectedUnit(unit);
        const currentFactor = ImperialCentriodYcconversionFactors[unit][ImperialCentriodYcUnits.indexOf(ImperialCentriodYcSelectedUnit)];
        setImperialCentriodYc((prevImperialCentriodYc) => prevImperialCentriodYc * currentFactor);
    };

    // Calculate centroid Yc based on input values
    const calculateImperialCentriodYc = () => {

        const t = parseFloat(Imperialt);
        const d = parseFloat(ImperialdinputValue);
        const ImperialCentriodYc = (d / 2) - (-t);
        setImperialCentriodYc(ImperialCentriodYc);
    };

    // Effect to recalculate centroid Yc whenever TValue or dinputValue changes
    useEffect(() => {
        calculateImperialCentriodYc();
    }, [Imperialt, ImperialdinputValue]);



    // MomentOfInertia Ix
    const [ImperialMomentOfInertiaIx, setImperialMomentOfInertiaIx] = useState(0);
    const [ImperialMomentOfInertiaIxSelectedUnit, setImperialMomentOfInertiaIxSelectedUnit] = useState('in⁴');

    // Handler for changing moment of inertia Ix unit
    const ImperialMomentOfInertiaIxUnits = ['in⁴', 'cm⁴', 'm⁴', 'in⁴'];
    const ImperialMomentOfInertiaIxconversionFactors = {
        'in⁴': [1]
    };
    const handleImperialMomentOfInertiaUnitChange = (unit) => {
        setImperialMomentOfInertiaIxSelectedUnit(unit);
        const currentFactor = ImperialMomentOfInertiaIxconversionFactors[unit][ImperialMomentOfInertiaIxUnits.indexOf(ImperialMomentOfInertiaIxSelectedUnit)];
        setImperialMomentOfInertiaIx((prevImperialMomentOfInertiaIx) => prevImperialMomentOfInertiaIx / currentFactor);
    };

    // Calculate moment of inertia Ix based on input values
    const calculateImperialMomentOfInertiaIx = () => {
        const t = parseFloat(Imperialt);
        const tw = parseFloat(ImperialtwinputValue);
        const b = parseFloat(ImperialbinputValue);
        const d = parseFloat(ImperialdinputValue);

        const firstValueIx = (b * Math.pow((d - (-2 * t)), 3));
        const subtractedValueIx = (b - tw) * Math.pow(d, 3);
        const momentOfInertiaIxValue = ((firstValueIx - subtractedValueIx) / 12).toFixed(2);

        setImperialMomentOfInertiaIx(momentOfInertiaIxValue);
    };

    // Effect to recalculate moment of inertia Ix whenever inputs change
    useEffect(() => {
        calculateImperialMomentOfInertiaIx();
    }, [Imperialt, ImperialtwinputValue, ImperialbinputValue, ImperialdinputValue]);

    // ImperialMomentOfInertia Iy
    const ImperialMomentOfInertiaIyUnits = ['in⁴', 'cm⁴', 'm⁴', 'in⁴'];
    const ImperialMomentOfInertiaIyconversionFactors = {
        'in³': [1]
    };

    const [ImperialMomentOfInertiaIy, setImperialMomentOfInertiaIy] = useState(0);
    const [ImperialMomentOfInertiaIySelectedUnit, setImperialMomentOfInertiaIySelectedUnit] = useState('in⁴');

    // Handler for changing moment of inertia Iy unit
    const handleImperialMomentOfInertiaIyUnitChange = (unit) => {
        setImperialMomentOfInertiaIySelectedUnit(unit);
        const currentFactor = ImperialMomentOfInertiaIyconversionFactors[unit][ImperialMomentOfInertiaIyUnits.indexOf(ImperialMomentOfInertiaIySelectedUnit)];
        setImperialMomentOfInertiaIy((prevImperialMomentOfInertiaIy) => prevImperialMomentOfInertiaIy / currentFactor);
    };

    // Calculate moment of inertia Iy based on input values
    const calculateImperialMomentOfInertiaIy = () => {

        const t = parseFloat(Imperialt);
        const tw = parseFloat(ImperialtwinputValue);
        const b = parseFloat(ImperialbinputValue);
        const d = parseFloat(ImperialdinputValue);

        const numeratorIy = (Math.pow(b, 3) * t) / 6;
        const denominatorIy = (Math.pow(tw, 3) * d) / 12;
        const momentOfInertiaIyValue =( numeratorIy + denominatorIy).toFixed(2);

        setImperialMomentOfInertiaIy(momentOfInertiaIyValue);
    };

    // Effect to recalculate moment of inertia Iy whenever inputs change
    useEffect(() => {
        calculateImperialMomentOfInertiaIy();
    }, [Imperialt, ImperialtwinputValue, ImperialbinputValue, ImperialdinputValue]);



    // SectionModules Sx
    const ImperialSectionModulesSxUnits = ['in³', 'cm³', 'm³', 'in³'];
    const ImperialSectionModulesSxConversionUnit = {
        'in³': [1]
    };
    const [ImperialSectionModulesSx, setImperialSectionModulesSx] = useState('');
    const [ImperialSectionModulesSxSelectedUnit, setImperialSectionModulesSxSelectedUnit] = useState('in³');
    const handleImperialSectionModulesSxUnitChange = (unit) => {
        setImperialSectionModulesSxSelectedUnit(unit);
        const ImperialSectionModulesSxFactor = ImperialSectionModulesSxConversionUnit[unit][ImperialSectionModulesSxUnits.indexOf(ImperialSectionModulesSxSelectedUnit)];
        setImperialSectionModulesSx((parseFloat(ImperialSectionModulesSx) / ImperialSectionModulesSxFactor));
    };
    const calculateImperialSectionModulesSxInputChangeValue = () => {

        const t = parseFloat(Imperialt);
        const tw = parseFloat(ImperialtwinputValue);
        const b = parseFloat(ImperialbinputValue);
        const d = parseFloat(ImperialdinputValue);

        const firstValueIx = (b * Math.pow((d - (-2 * t)), 3));
        const subtractedValueIx = (b - tw) * Math.pow(d, 3);
        const Ix = (firstValueIx - subtractedValueIx) / 12;
        const Yc = (d / 2) - (-t);
        const ImperialSectionModulesSx = (Ix / Yc).toFixed(2);
        setImperialSectionModulesSx(ImperialSectionModulesSx);
    };
    useEffect(() => {
        calculateImperialSectionModulesSxInputChangeValue();
    }, [ImperialMomentOfInertiaIy, centroidYc]);


    // Sy

    const ImperialSectionModulesSyUnits = ['in³', 'cm³', 'm³', 'in³'];
    const ImperialSectionModulesSyConversionUnit = {
        'in³': [1]
    };
    const [ImperialSectionModulesSy, setImperialSectionModulesSy] = useState(0);
    const [ImperialSectionModulesSySelectedUnit, setImperialSectionModulesSySelectedUnit] = useState('in³');

    // Handler for changing ImperialSectionModulesSy unit
    const handleImperialSectionModulesSyUnitChange = (unit) => {
        setImperialSectionModulesSySelectedUnit(unit);
        const currentFactor = ImperialSectionModulesSyConversionUnit[unit][ImperialSectionModulesSyUnits.indexOf(ImperialSectionModulesSySelectedUnit)];
        setImperialSectionModulesSy((prevImperialSectionModulesSy) => prevImperialSectionModulesSy * currentFactor);
    };

    // Calculate ImperialSectionModulesSy based on MomentOfInertiaIy and CentroidXc
    const calculateImperialSectionModulesSy = () => {
        const t = parseFloat(Imperialt);
        const tw = parseFloat(ImperialtwinputValue);
        const b = parseFloat(ImperialbinputValue);
        const d = parseFloat(ImperialdinputValue);
        const Xc = b / 2
        const numeratorIy = (Math.pow(b, 3) * t) / 6;
        const denominatorIy = (Math.pow(tw, 3) * d) / 12;
        const Iy = numeratorIy + denominatorIy;
        if (Xc !== 0) {

            const ImperialSectionModulesSyValue = (Iy / Xc).toFixed(2);
            setImperialSectionModulesSy(ImperialSectionModulesSyValue);
        } else {
            setImperialSectionModulesSy(0);
        }
    };

    // Effect to recalculate ImperialSectionModulesSy whenever MomentOfInertiaIy or CentroidXc changes
    useEffect(() => {
        calculateImperialSectionModulesSy();
    });


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
    const [a, setA] = useState(2);
    const [bValue, setB] = useState(3);
    const [c, setC] = useState(4);
    const [dValue, setD] = useState(5);
    const [tValue, setT] = useState(6);
    const [t1, setT1] = useState(7);
    const [r, setR] = useState(8);
    const [result, setResult] = useState(null);
    const calculateImperialTorsionalConstant = (value) => {

        const tOverT1 = bValue < dValue ? bValue / dValue : dValue / bValue;
        const D = tOverT1 * (0.15 + 0.1 * r / bValue);
        const alpha = D;

        const K1 = (a * Math.pow(bValue, 3)) / 3 - 0.21 * Math.pow(bValue, 4) + 0.0175 * Math.pow(bValue, 8) / Math.pow(a, 4);
        const K2 = (c * Math.pow(dValue, 3)) / 3;

        const K = (2 * K1 + K2 + 2 * alpha * Math.pow(D, 4)).toFixed(2);

        setResult(K);
    };

    useEffect(() => {
        calculateImperialTorsionalConstant(ImperialbinputValue);
    }, [ImperialbinputValue, ImperialTorsionalConstantSelectedUnit]);





















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
            {/* {result} */}
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
                        <h3 className='claculator-conversation-title'>Web Height (d) :</h3>
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
                        <h3 className='claculator-conversation-title'>Flange Thickness (t) :</h3>
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
                        <h3 className='claculator-conversation-title'>Web Thickness (tw) :</h3>
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

                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <h3 className='claculator-conversation-title'>Fillet radius (r) :</h3>
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
                                            value={result}
                                            readOnly
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
                        <h3 className='claculator-conversation-title'>Web Height (d) :</h3>
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
                        <h3 className='claculator-conversation-title'>Flange Thickness (t) :</h3>
                        <div className='Calculator-Side-A'>
                            <input
                                className='calculator-input'
                                type="number"
                                value={Imperialt}
                                onChange={(e) => handleImperialtInputChange(e.target.value)}
                            />
                            <select
                                className='Calculator-select-option'
                                value={ImperialtselectedTUnit}
                                onChange={(e) => handleImperialtUnitChange(e.target.value)}
                            >
                                {Imperialtunits.map((unit) => (
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
                                value={ImperialtwinputValue}
                                onChange={(e) => handleImperialtwInputChange(e.target.value)}
                            />
                            <select
                                className='Calculator-select-option'
                                value={ImperialTWSelectedValue}
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

                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <h3 className='claculator-conversation-title'>Fillet Radius (r) :</h3>
                        <div className='Calculator-Side-A'>
                            <input
                                className='calculator-input'
                                type="number"
                                value={ImperialtwinputValue}
                                onChange={(e) => handleImperialtwInputChange(e.target.value)}
                            />
                            <select
                                className='Calculator-select-option'
                                value={ImperialTWSelectedValue}
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
                                            value={ImperialCentriodYc}
                                            onChange={(e) => calculateImperialCentriodYc(e.target.value)}
                                        />
                                        <select
                                            className='Calculator-select-option'
                                            value={ImperialCentriodYcSelectedUnit}
                                            onChange={(e) => handleImperialCentriodYcUnitChange(e.target.value)}
                                        >
                                            {ImperialCentriodYcUnits.map((unit) => (
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
                                            onChange={(e) => calculateImperialSectionModulesSxInputChangeValue(e.target.value)}
                                        />
                                        <select
                                            className='Calculator-select-option'
                                            value={ImperialSectionModulesSxSelectedUnit}
                                            onChange={(e) => handleImperialSectionModulesSxUnitChange(e.target.value)}
                                        >
                                            {ImperialSectionModulesSxUnits.map((unit) => (
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
                                            value={ImperialSectionModulesSy}
                                            onChange={(e) => calculateImperialSectionModulesSy(e.target.value)}
                                        />
                                        <select
                                            className='Calculator-select-option'
                                            value={ImperialSectionModulesSySelectedUnit}
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
                                            value={result}
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
                            <br />
                            <br />
                        </div>
                    </div >
                </>
            )}


        </>
    )
}
