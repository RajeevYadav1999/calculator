import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// images
import Backgroundimg from '../CalculationAndCalculator/padeye calcultor/padeye calcultor/11.jpg'
import './PadEyecalculatorPageCss.css'
import MaterialProperties from './Padeyeimages/stress.jpg'
import Geometry from './padeye cal/padeye/padeye/padeye geometry.png'
import ShackleGeometryimg from './padeye cal/padeye/padeye/shackle.png'
import PadeyeLoadimg from './padeye cal/padeye/padeye/padeye load.png'
import Slingimg from './padeye cal/padeye/padeye/sling dia.png'
import WeldSizeimg from './padeye cal/padeye/padeye/weld size.png'
import ShackleGeometry from './Padeyeproperty/ShackleGeomtry.js'
//  components
import Materialproperty from './Padeyeproperty/Materialproperty';
// import HollowReactangle from './HollowReactangle';
import PadeyeGeometry from './Padeyeproperty/PadeyeGeometry';
import SlingGeometry from './Padeyeproperty/SlingGeometry';
import PadEyeLoad from './Padeyeproperty/PadEyeLoad';
import WeldSize from './Padeyeproperty/WeldSize';
import Padeye from './Padeyeproperty/PadeyeDropdownfiles/Padeye.js';
export default function PadEyecalculatorPage() {

    const [selectedOption, setSelectedOption] = useState("option1");

    const handleOptionChange = (option) => {
        setSelectedOption(option)
    }

    const [isActive3, setIsActive3] = useState(true);

    const toggleClass3 = () => {
        setIsActive3(previsActive3 => !previsActive3);

    };

    const MaterialYieldStressunits = ['Mpa', 'Pa'];
    const MaterialYieldStressConversionFactors = {
        Mpa: [1, 1e6],
        Pa: [1e-6, 1],
    };
    const [MaterialYieldStresValue, setMaterialYieldStressValue] = useState('');
    const [MaterialYieldStresselectedUnit, setMaterialYieldStressSelectedUnit] = useState('Mpa');
    const [MaterialYieldStressInMPa, setMaterialYieldStressInMPa] = useState('');

    const handleMaterialYieldStresChange = (value) => {
        setMaterialYieldStressValue(value);
        const factor = MaterialYieldStressConversionFactors[MaterialYieldStresselectedUnit][0];
        setMaterialYieldStressInMPa(parseFloat(value) * factor);
    };

    const handleMaterialYieldStreschange = (unit) => {
        let newValue = parseFloat(MaterialYieldStresValue);
        if (unit === 'Pa' && MaterialYieldStresselectedUnit === 'Mpa') {
            newValue *= 1e6;
            if (newValue >= 1000) {
                newValue = newValue.toExponential(3);
            }
        } else if (unit === 'Mpa' && MaterialYieldStresselectedUnit === 'Pa') {
            newValue /= 1e6;
        }
        setMaterialYieldStressSelectedUnit(unit);
        setMaterialYieldStressValue(newValue);
    };

    const ElectrodeTensileStrengthunits = ['Mpa', 'Pa'];

    const ElectrodeTensileStrengthFactors = {
        Mpa: [1, 1e6],
        Pa: [1e-6, 1],
    };

    const [ElectrodeTensileStrength, setElectrodeTensileStrength] = useState('');
    const [ElectrodeTensileStrengthSelectedUnit, setElectrodeTensileStrengthSelectedUnit] = useState('Mpa');
    const [ElectrodeTensileStrengthInMpa, setElectrodeTensileStrengthInMpa] = useState('');

    const handleElectrodeTensileStrength = (value) => {
        setElectrodeTensileStrength(value);
        const factor = ElectrodeTensileStrengthFactors[ElectrodeTensileStrengthSelectedUnit][0];
        setElectrodeTensileStrengthInMpa(parseFloat(value) * factor);
    };

    const handleElectrodeTensileStrengthSelectedUnit = (unit) => {
        const newMetricValueInMM = parseFloat(ElectrodeTensileStrength) * ElectrodeTensileStrengthFactors[ElectrodeTensileStrengthSelectedUnit][0];
        let convertedValue = newMetricValueInMM / ElectrodeTensileStrengthFactors[unit][0];
        if (unit === 'Pa' && convertedValue >= 1000) {
            convertedValue = convertedValue.toExponential(3);
        }
        setElectrodeTensileStrengthSelectedUnit(unit);
        setElectrodeTensileStrength(convertedValue);
    };

    const ModulusofElasticityunits = ['Mpa', 'Pa'];

    const ModulusofElasticityFactors = {
        Mpa: [1, 1e6],
        Pa: [1e-6, 1],
    };

    const [ModulusofElasticityValue, setModulusofElasticityValue] = useState('');
    const [ModulusofElasticitySelectedUnit, setModulusofElasticitySelectedUnit] = useState('Mpa');
    const [ModulusofElasticityValueInMpa, setModulusofElasticityValueInMpa] = useState('');

    const handleModulusofElasticChange = (value) => {
        setModulusofElasticityValue(value);
        const factor = ModulusofElasticityFactors[ModulusofElasticitySelectedUnit][0];
        setModulusofElasticityValueInMpa(parseFloat(value) * factor);
    };

    const handleModulusofElasticUnitChange = (unit) => {
        const newMetricValueInMM = parseFloat(ModulusofElasticityValue) * ModulusofElasticityFactors[ModulusofElasticitySelectedUnit][0];
        let convertedValue = newMetricValueInMM / ModulusofElasticityFactors[unit][0];
        if (unit === 'Pa' && convertedValue >= 1000) {
            convertedValue = convertedValue.toExponential(3);
        }
        setModulusofElasticitySelectedUnit(unit);
        setModulusofElasticityValue(convertedValue);
    };


    const [PoissonsRatio, setPoissonsRatio] = useState('')
    const handlePoissonsRatioChange = (value) => {
        setPoissonsRatio(value);
    };


    // padeye Geometry

    const RadiusofMainPlateunits = ['mm', 'cm'];
    // RadiusofMainPlate
    const RadiusofMainPlateconversionFactors = {
        mm: [1, 0.1],
        cm: [10, 1],
    };

    const [RadiusofMainPlateValue, setRadiusofMainPlateValue] = useState('');
    const [RadiusofMainPlateselectedUnit, setRadiusofMainPlateSelectedUnit] = useState('mm');
    const [internalRadiusofMainPlateValue, setInternalRadiusofMainPlateValue] = useState(0); // Always in mm
    const handleRadiusofMainPlateInputChange = (value) => {
        setRadiusofMainPlateValue(value);
        const factor = RadiusofMainPlateconversionFactors[RadiusofMainPlateselectedUnit][0];
        setInternalRadiusofMainPlateValue(parseFloat(value) * factor);
    };

    const handleRadiusofMainPlateUnitChange = (unit) => {
        const newMetricValueInMM = parseFloat(RadiusofMainPlateValue) * RadiusofMainPlateconversionFactors[RadiusofMainPlateselectedUnit][0];
        const convertedValue = newMetricValueInMM / RadiusofMainPlateconversionFactors[unit][0];
        setRadiusofMainPlateSelectedUnit(unit);
        setRadiusofMainPlateValue(convertedValue);
    };

    // Thickness of Main Plate
    const ThicknessofMainPlateunits = ['mm', 'cm'];

    const ThicknessofMainPlateConversionFactors = {
        mm: [1, 0.1],
        cm: [10, 1],
    };
    const [ThicknessofMainPlateValue, setThicknessofMainPlateValue] = useState('');
    const [ThicknessofMainPlateSelectedUnit, setThicknessofMainPlateSelectedUnit] = useState('mm');
    const [internalThicknessofMainPlateValue, setInternalThicknessofMainPlateValue] = useState(0); // Always in mm
    const handleThicknessofMainPlateValue = (value) => {
        setThicknessofMainPlateValue(value);
        const factor = ThicknessofMainPlateConversionFactors[ThicknessofMainPlateSelectedUnit][0];
        setInternalThicknessofMainPlateValue(parseFloat(value) * factor);
    };

    const handleThicknessofMainPlateSelectedUnit = (unit) => {
        const newMetricValueInMM = parseFloat(ThicknessofMainPlateValue) * ThicknessofMainPlateConversionFactors[ThicknessofMainPlateSelectedUnit][0];
        const convertedValue = newMetricValueInMM / ThicknessofMainPlateConversionFactors[unit][0];
        setThicknessofMainPlateSelectedUnit(unit);
        setThicknessofMainPlateValue(convertedValue);
    };

    // Diameterofeyepinhole
    const Diameterofeyepinholeunits = ['mm', 'cm'];

    const DiameterofeyepinholeconversionFactors = {
        mm: [1, 0.1],
        cm: [10, 1],
    };
    const [DiameterofeyepinholeValue, setDiameterofeyepinholeValue] = useState('');
    const [DiameterofeyepinholeselectedUnit, setDiameterofeyepinholeSelectedUnit] = useState('mm');

    const [internalDiameterofeyepinholeValue, setInternalDiameterofeyepinholeValue] = useState(0); // Always in mm
    const handleDiameterofeyepinholeChange = (value) => {
        setDiameterofeyepinholeValue(value);
        const factor = DiameterofeyepinholeconversionFactors[DiameterofeyepinholeselectedUnit][0];
        setInternalDiameterofeyepinholeValue(parseFloat(value) * factor);
    };

    const handleDiameterofeyepinholeUnitChange = (unit) => {
        const newMetricValueInMM = parseFloat(DiameterofeyepinholeValue) * DiameterofeyepinholeconversionFactors[DiameterofeyepinholeselectedUnit][0];
        const convertedValue = newMetricValueInMM / DiameterofeyepinholeconversionFactors[unit][0];
        setDiameterofeyepinholeSelectedUnit(unit);
        setDiameterofeyepinholeValue(convertedValue);
    };


    // Diameter of Cheek Plate
    const DiameterofCheekPlateunits = ['mm', 'cm'];

    const DiameterofCheekPlateConversionFactors = {
        mm: [1, 0.1],
        cm: [10, 1],
    };

    const [DiameterofCheekPlateInputValue, setDiameterofCheekPlateInputValue] = useState('');
    const [DiameterofCheekPlateSelectedUnit, setDiameterofCheekPlateSelectedUnit] = useState('mm');

    const [internalDiameterofCheekPlateInputValue, setInternalDiameterofCheekPlateInputValue] = useState(0); // Always in mm

    const handleDiameterofCheekPlateInputValue = (value) => {
        setDiameterofCheekPlateInputValue(value);
        const factor = DiameterofCheekPlateConversionFactors[DiameterofCheekPlateSelectedUnit][0];
        setInternalDiameterofCheekPlateInputValue(parseFloat(value) * factor);
    };

    const handleDiameterofCheekPlateSelectedUnit = (unit) => {
        const newMetricValueInMM = parseFloat(DiameterofCheekPlateInputValue) * DiameterofCheekPlateConversionFactors[DiameterofCheekPlateSelectedUnit][0];
        const convertedValue = newMetricValueInMM / DiameterofCheekPlateConversionFactors[unit][0];
        setDiameterofCheekPlateSelectedUnit(unit);
        setDiameterofCheekPlateInputValue(convertedValue);
    };

    // Thickness of Cheek Plate
    const ThicknessofCheekPlateunits = ['mm', 'cm'];

    const ThicknessofCheekPlateConversionFactors = {
        mm: [1, 0.1],
        cm: [10, 1],
    };

    const [ThicknessofCheekPlateInputValue, setThicknessofCheekPlateInputValue] = useState('');
    const [ThicknessofCheekPlateSelectedUnit, setThicknessofCheekPlateSelectedUnit] = useState('mm');

    const [internalThicknessofCheekPlateInputValue, setInternalThicknessofCheekPlateInputValue] = useState(0); // Always in mm

    const handleThicknessofCheekPlateInputValue = (value) => {
        setThicknessofCheekPlateInputValue(value);
        const factor = ThicknessofCheekPlateConversionFactors[ThicknessofCheekPlateSelectedUnit][0];
        setInternalThicknessofCheekPlateInputValue(parseFloat(value) * factor);
    };

    const handleThicknessofCheekPlateSelectedUnit = (unit) => {
        const newMetricValueInMM = parseFloat(ThicknessofCheekPlateInputValue) * ThicknessofCheekPlateConversionFactors[ThicknessofCheekPlateSelectedUnit][0];
        const convertedValue = newMetricValueInMM / ThicknessofCheekPlateConversionFactors[unit][0];
        setThicknessofCheekPlateSelectedUnit(unit);
        setThicknessofCheekPlateInputValue(convertedValue);
    };

    // Total Height of Pad-eye
    const TotalHeightofPadeyeunits = ['mm', 'cm'];

    const TotalHeightofPadeyeconversionFactors = {
        mm: [1, 0.1],
        cm: [10, 1],
    };

    const [inputTotalHeightofPadeyeValue, setInputTotalHeightofPadeyeValue] = useState('');
    const [selectedTotalHeightofPadeyeUnit, setSelectedTotalHeightofPadeyeUnit] = useState('mm');
    const [internalinputTotalHeightofPadeyeValue, setInternalinputTotalHeightofPadeyeValue] = useState(0); // Always in mm

    const handleInputTotalHeightofPadeyeChange = (value) => {
        setInputTotalHeightofPadeyeValue(value);
        const factor = TotalHeightofPadeyeconversionFactors[selectedTotalHeightofPadeyeUnit][0];
        setInternalinputTotalHeightofPadeyeValue(parseFloat(value) * factor);
    };

    const handleUnitTotalHeightofPadeyeChange = (unit) => {
        const newMetricValueInMM = parseFloat(inputTotalHeightofPadeyeValue) * TotalHeightofPadeyeconversionFactors[selectedTotalHeightofPadeyeUnit][0];
        const convertedValue = newMetricValueInMM / TotalHeightofPadeyeconversionFactors[unit][0];
        setSelectedTotalHeightofPadeyeUnit(unit);
        setInputTotalHeightofPadeyeValue(convertedValue);
    };

    const LengthofBasePlateunits = ['mm', 'cm'];

    const LengthofBasePlateConversionFactors = {
        mm: [1, 0.1],
        cm: [10, 1],
    };

    const [LengthofBasePlateInputValue, setLengthofBasePlateInputValue] = useState('');
    const [LengthofBasePlateSelectedUnit, setLengthofBasePlateSelectedUnit] = useState('mm');
    const [internalLengthofBasePlateInputValue, setInternalLengthofBasePlateInputValue] = useState(0); // Always in mm

    const handleLengthofBasePlateInputValue = (value) => {
        setLengthofBasePlateInputValue(value);
        const factor = LengthofBasePlateConversionFactors[LengthofBasePlateSelectedUnit][0];
        setInternalLengthofBasePlateInputValue(parseFloat(value) * factor);
    };

    const handleLengthofBasePlateSelectedUnit = (unit) => {
        const newMetricValueInMM = parseFloat(LengthofBasePlateInputValue) * LengthofBasePlateConversionFactors[LengthofBasePlateSelectedUnit][0];
        const convertedValue = newMetricValueInMM / LengthofBasePlateConversionFactors[unit][0];
        setLengthofBasePlateSelectedUnit(unit);
        setLengthofBasePlateInputValue(convertedValue);
    };

    // weld size
    const BaseWeldLegSizeUnits = ['mm', 'cm'];

    const BaseWeldLegSizeconversionFactors = {
        mm: [1, 0.1],
        cm: [10, 1],
    };
    const [BaseWeldLegSize, setBaseWeldLegSize] = useState('');
    const [BaseWeldLegSizeUnit, setBaseWeldLegSizeUnit] = useState('mm');
    const [internalBaseWeldLegSize, setInternalBaseWeldLegSize] = useState(0); // Always in mm

    const handleBaseWeldLegSizevalue = (value) => {
        setBaseWeldLegSize(value);
        const factor = BaseWeldLegSizeconversionFactors[BaseWeldLegSizeUnit][0];
        setInternalBaseWeldLegSize(parseFloat(value) * factor);
    };

    const handleBaseWeldLegSizeUnit = (unit) => {
        const newMetricValueInMM = parseFloat(BaseWeldLegSize) * BaseWeldLegSizeconversionFactors[BaseWeldLegSizeUnit][0];
        const convertedValue = newMetricValueInMM / BaseWeldLegSizeconversionFactors[unit][0];
        setBaseWeldLegSizeUnit(unit);
        setBaseWeldLegSize(convertedValue);
    };


    const CheekPlateWeldLegSizeUnits = ['mm', 'cm'];

    const CheekPlateWeldLegSizeconversionFactors = {
        mm: [1, 0.1],
        cm: [10, 1],
    };
    const [CheekPlateWeldLegSize, setCheekPlateWeldLegSize] = useState('');
    const [CheekPlateWeldLegSizeUnit, setCheekPlateWeldLegSizeUnit] = useState('mm');
    const [internalCheekPlateWeldLegSize, setInternalCheekPlateWeldLegSize] = useState(0); // Always in mm

    const handleCheekPlateWeldLegSizevalue = (value) => {
        setCheekPlateWeldLegSize(value);
        const factor = CheekPlateWeldLegSizeconversionFactors[CheekPlateWeldLegSizeUnit][0];
        setInternalCheekPlateWeldLegSize(parseFloat(value) * factor);
    };

    const handleCheekPlateWeldLegSizeUnit = (unit) => {
        const newMetricValueInMM = parseFloat(CheekPlateWeldLegSize) * CheekPlateWeldLegSizeconversionFactors[CheekPlateWeldLegSizeUnit][0];
        const convertedValue = newMetricValueInMM / CheekPlateWeldLegSizeconversionFactors[unit][0];
        setCheekPlateWeldLegSizeUnit(unit);
        setCheekPlateWeldLegSize(convertedValue);
    };

    // shackel Geometry


    const ShackleSWLUnits = ['MT', 'N'];
    const ShackleSWLconversionFactors = {
        MT: [1, 0.0001019716],
        N: [9806.65, 1],
    };

    const [ShackleSWL, setShackleSWL] = useState('');
    const [ShackleSWLUnit, setShackleSWLUnit] = useState('MT');
    const [ShackleSWLInMT, setShackleSWLInMT] = useState('');

    const handleShackleSWLvalue = (value) => {
        setShackleSWL(value);
        const factor = ShackleSWLconversionFactors[ShackleSWLUnit][0];
        setShackleSWLInMT(parseFloat(value) * factor);
    };

    const handleShackleSWLUnit = (unit) => {
        let convertedValue;
        if (ShackleSWLUnit === 'MT') {
            convertedValue = parseFloat(ShackleSWL) / ShackleSWLconversionFactors['MT'][0] * ShackleSWLconversionFactors[unit][0];
        } else {
            convertedValue = parseFloat(ShackleSWL) / ShackleSWLconversionFactors['N'][0] * ShackleSWLconversionFactors[unit][0];
        }
        if (unit === 'MT' && (convertedValue.toFixed(3).length > 6 || convertedValue.toString().length > 5)) {
            convertedValue = convertedValue.toFixed(5);
        }
        setShackleSWLUnit(unit);
        setShackleSWL(convertedValue);
    };

    const ShackleInsideLengthUnits = ['mm', 'cm'];

    const ShackleInsideLengthconversionFactors = {
        mm: [1, 0.1],
        cm: [10, 1],
    };
    const [ShackleInsideLength, setShackleInsideLength] = useState('');
    const [ShackleInsideLengthUnit, setShackleInsideLengthUnit] = useState('mm');

    const [internalShackleInsideLength, setInternalShackleInsideLength] = useState(0); // Always in mm

    const handleShackleInsideLengthvalue = (value) => {
        setShackleInsideLength(value);
        const factor = ShackleInsideLengthconversionFactors[ShackleInsideLengthUnit][0];
        setInternalShackleInsideLength(parseFloat(value) * factor);
    };

    const handleShackleInsideLengthUnit = (unit) => {
        const newMetricValueInMM = parseFloat(ShackleInsideLength) * ShackleInsideLengthconversionFactors[ShackleInsideLengthUnit][0];
        const convertedValue = newMetricValueInMM / ShackleInsideLengthconversionFactors[unit][0];
        setShackleInsideLengthUnit(unit);
        setShackleInsideLength(convertedValue);
    };


    const ShackleJawWidthUnits = ['mm', 'cm'];

    const ShackleJawWidthconversionFactors = {
        mm: [1, 0.1],
        cm: [10, 1],
    };
    const [ShackleJawWidth, setShackleJawWidth] = useState('');
    const [ShackleJawWidthUnit, setShackleJawWidthUnit] = useState('mm');

    const [internalShackleJawWidth, setInternalShackleJawWidth] = useState(0); // Always in mm

    const handleShackleJawWidthvalue = (value) => {
        setShackleJawWidth(value);
        const factor = ShackleJawWidthconversionFactors[ShackleJawWidthUnit][0];
        setInternalShackleJawWidth(parseFloat(value) * factor);
    };

    const handleShackleJawWidthUnit = (unit) => {
        const newMetricValueInMM = parseFloat(ShackleJawWidth) * ShackleJawWidthconversionFactors[ShackleJawWidthUnit][0];
        const convertedValue = newMetricValueInMM / ShackleJawWidthconversionFactors[unit][0];
        setShackleJawWidthUnit(unit);
        setShackleJawWidth(convertedValue);
    };


    const ShacklePinDiameterUnits = ['mm', 'cm'];

    const ShacklePinDiameterconversionFactors = {
        mm: [1, 0.1],
        cm: [10, 1],
    };
    const [ShacklePinDiameter, setShacklePinDiameter] = useState('');
    const [ShacklePinDiameterUnit, setShacklePinDiameterUnit] = useState('mm');

    const [internalShacklePinDiameter, setInternalShacklePinDiameter] = useState(0); // Always in mm

    const handleShacklePinDiametervalue = (value) => {
        setShacklePinDiameter(value);
        const factor = ShacklePinDiameterconversionFactors[ShacklePinDiameterUnit][0];
        setInternalShacklePinDiameter(parseFloat(value) * factor);
    };

    const handleShacklePinDiameterUnit = (unit) => {
        const newMetricValueInMM = parseFloat(ShacklePinDiameter) * ShacklePinDiameterconversionFactors[ShacklePinDiameterUnit][0];
        const convertedValue = newMetricValueInMM / ShacklePinDiameterconversionFactors[unit][0];
        setShacklePinDiameterUnit(unit);
        setShacklePinDiameter(convertedValue);
    };


    // SlingDiameter
    const SlingDiameterUnits = ['mm', 'cm'];

    const SlingDiameterconversionFactors = {
        mm: [1, 0.1],
        cm: [10, 1],
    };
    const [SlingDiameter, setSlingDiameter] = useState('');
    const [SlingDiameterUnit, setSlingDiameterUnit] = useState('mm');
    const [internalSlingDiameter, setInternalSlingDiameter] = useState(0); // Always in mm

    const handleSlingDiametervalue = (value) => {
        setSlingDiameter(value);
        const factor = SlingDiameterconversionFactors[SlingDiameterUnit][0];
        setInternalSlingDiameter(parseFloat(value) * factor);
    };

    const handleSlingDiameterUnit = (unit) => {
        const newMetricValueInMM = parseFloat(SlingDiameter) * SlingDiameterconversionFactors[SlingDiameterUnit][0];
        const convertedValue = newMetricValueInMM / SlingDiameterconversionFactors[unit][0];
        setSlingDiameterUnit(unit);
        setSlingDiameter(convertedValue);
    };


    // pad-eye load
    const LoadonPadeyeunits = ['MT', 'N'];
    const LoadonPadeyeFactors = {
        MT: [1, 0.0001019716],
        N: [9806.65, 1],
    };

    const [LoadonPadeyeValue, setLoadonPadeyeValue] = useState('');
    const [LoadonPadeyeSelectedUnit, setLoadonPadeyeSelectedUnit] = useState('MT');
    const [LoadonPadeyeValueInMT, setLoadonPadeyeValueInMT] = useState('');

    const handleLoadonPadeyeValueChange = (value) => {
        setLoadonPadeyeValue(value);
        const factor = LoadonPadeyeFactors[LoadonPadeyeSelectedUnit][0];
        setLoadonPadeyeValueInMT(parseFloat(value) * factor);
    };

    const handleLoadonPadeyeUnitChange = (unit) => {
        let convertedValue;
        if (LoadonPadeyeSelectedUnit === 'MT') {
            convertedValue = parseFloat(LoadonPadeyeValue) / LoadonPadeyeFactors['MT'][0] * LoadonPadeyeFactors[unit][0];
        } else {
            convertedValue = parseFloat(LoadonPadeyeValue) / LoadonPadeyeFactors['N'][0] * LoadonPadeyeFactors[unit][0];
        }
        if (unit === 'MT' && (convertedValue.toFixed(3).length > 6 || convertedValue.toString().length > 5)) {
            convertedValue = convertedValue.toFixed(5);
        }
        setLoadonPadeyeSelectedUnit(unit);
        setLoadonPadeyeValue(convertedValue);
    };



    const AngleofLoadwithVerticalunit = ['Degrees'];
    const AngleofLoadwithVerticalFactors = {
        Degrees: [1],
    };
    const [AngleofLoadwithVerticalvalue, setAngleofLoadwithVerticalvalue] = useState('');
    const [AngleofLoadwithVerticalSelectedUnit, setAngleofLoadwithVerticalSelectedUnit] = useState('Degrees');
    const handleAngleofLoadwithVerticalvalue = (values) => {
        setAngleofLoadwithVerticalvalue(values);
    };
    const handleAngleofLoadwithVerticalSelectedUnit = (units) => {
        setAngleofLoadwithVerticalSelectedUnit(units);
        const DLFFactors = AngleofLoadwithVerticalFactors[units][AngleofLoadwithVerticalunit.indexOf(AngleofLoadwithVerticalSelectedUnit)];
        setAngleofLoadwithVerticalvalue((parseFloat(AngleofLoadwithVerticalvalue) / DLFFactors));
    };




    const OutofPlaneAngleUnits = ['Degrees'];
    const OutofPlaneAngleFactors = {
        Degrees: [1],
    };
    const [OutofPlaneAngleValue, setOutofPlaneAngleValue] = useState('');
    const [OutofPlaneAngleselectedUnit, setOutofPlaneAngleselectedUnit] = useState('Degrees');
    const handleOutofPlaneAngleValueStresChange = (value) => {
        setOutofPlaneAngleValue(value);
    };
    const handleOutofPlaneAngleunitchange = (unit) => {
        setOutofPlaneAngleselectedUnit(unit);
        const OutofPlaneAngleFactor = OutofPlaneAngleFactors[unit][OutofPlaneAngleUnits.indexOf(OutofPlaneAngleselectedUnit)];
        setOutofPlaneAngleValue((parseFloat(OutofPlaneAngleValue) / OutofPlaneAngleFactor));
    };


    const [DLFValue, setDLFValue] = useState('');
    const handleDLFValue = (values) => {
        setDLFValue(values);
    };




    const AllowableBearingStressunits = ['Mpa', 'Pa'];
    const AllowableBearingStressConversionFactors = {
        Mpa: [1, 1e6],
        Pa: [1e-6, 1],
    };

    const [AllowableBearingStressValue, setAllowableBearingStressValue] = useState('');
    const [AllowableBearingStressselectedUnit, setAllowableBearingStressSelectedUnit] = useState('Mpa');

    const handleAllowableBearingStressUnitChange = (unit) => {
        const AllowableBearingStressFactor = AllowableBearingStressConversionFactors[unit][AllowableBearingStressunits.indexOf(AllowableBearingStressselectedUnit)];
        let newValue = parseFloat(AllowableBearingStressValue) / AllowableBearingStressFactor;
        newValue = formatValue(newValue, unit);
        setAllowableBearingStressSelectedUnit(unit);
        setAllowableBearingStressValue(newValue);
    };

    const calculateAllowableBearingStressValue = () => {
        const MaterialYieldStress = parseFloat(MaterialYieldStressInMPa);
        if (!isNaN(MaterialYieldStress)) {
            let newValue = MaterialYieldStress * 0.9;
            newValue = formatValue(newValue, AllowableBearingStressselectedUnit);
            setAllowableBearingStressValue(newValue);
        }
    };
    const formatValue = (value, unit) => {
        const floatValue = parseFloat(value);
        if (unit === 'Mpa') {
            return floatValue.toFixed(2);
        } else {
            if (floatValue >= 1000) {
                return floatValue.toExponential(3);
            }
            return floatValue.toFixed(2);
        }
    };

    useEffect(() => {
        calculateAllowableBearingStressValue();
    }, [MaterialYieldStressInMPa]);



    const AllowableBendingStressInPlaneunits = ['Mpa', 'Pa'];
    const AllowableBendingStressInPlaneconversionFactors = {
        Mpa: [1, 1e6],
        Pa: [1e-6, 1],
    };

    const [AllowableBendingStressInPlaneValue, setAllowableBendingStressInPlaneValue] = useState('');
    const [AllowableBendingStressInPlaneselectedUnit, setAllowableBendingStressInPlaneselectedUnit] = useState('Mpa');

    const handleAllowableBendingStressInPlaneUnitChange = (unit) => {
        const AllowableBendingStressInPlaneFactor = AllowableBendingStressInPlaneconversionFactors[unit][AllowableBendingStressInPlaneunits.indexOf(AllowableBendingStressInPlaneselectedUnit)];
        let newValue = parseFloat(AllowableBendingStressInPlaneValue) / AllowableBendingStressInPlaneFactor;
        newValue = AllowableBendingStressInPlaneFormatValue(newValue, unit);
        setAllowableBendingStressInPlaneselectedUnit(unit);
        setAllowableBendingStressInPlaneValue(newValue);
    };

    const calculateAllowableBendingStressInPlaneValue = () => {
        const MaterialYieldStress = parseFloat(MaterialYieldStressInMPa);
        if (!isNaN(MaterialYieldStress)) {
            let newValue = MaterialYieldStress * 0.6;
            newValue = AllowableBendingStressInPlaneFormatValue(newValue, AllowableBendingStressInPlaneselectedUnit);
            setAllowableBendingStressInPlaneValue(newValue);
        }
    };

    const AllowableBendingStressInPlaneFormatValue = (value, unit) => {
        const floatValue = parseFloat(value);
        if (unit === 'Mpa') {
            return floatValue.toFixed(2);
        } else {
            if (floatValue >= 1000) {
                return floatValue.toExponential(3);
            }
            return floatValue.toFixed(2);
        }
    };

    useEffect(() => {
        calculateAllowableBendingStressInPlaneValue();
    }, [MaterialYieldStressInMPa]);







    const AllowableBendingStressOutofPlaneunits = ['Mpa', 'Pa'];
    const AllowableBendingStressOutofPlaneconversionFactors = {
        Mpa: [1, 1e6],
        Pa: [1e-6, 1],
    };

    const [AllowableBendingStressOutofPlaneValue, setAllowableBendingStressOutofPlaneValue] = useState('');
    const [AllowableBendingStressOutofPlaneselectedUnit, setAllowableBendingStressOutofPlaneselectedUnit] = useState('Mpa');

    const handleAllowableBendingStressOutofPlaneselectedUnitChange = (unit) => {
        const AllowableBendingStressOutofPlaneFactor = AllowableBendingStressOutofPlaneconversionFactors[unit][AllowableBendingStressOutofPlaneunits.indexOf(AllowableBendingStressOutofPlaneselectedUnit)];
        let newValue = parseFloat(AllowableBendingStressOutofPlaneValue) / AllowableBendingStressOutofPlaneFactor;
        newValue = AllowableBendingStressOutofPlaneFormatValue(newValue, unit);
        setAllowableBendingStressOutofPlaneselectedUnit(unit);
        setAllowableBendingStressOutofPlaneValue(newValue);
    };

    const calculateAllowableBendingStressOutofPlaneValue = () => {
        const MaterialYieldStress = parseFloat(MaterialYieldStressInMPa);
        if (!isNaN(MaterialYieldStress)) {
            let newValue = MaterialYieldStress * 0.75;
            newValue = AllowableBendingStressOutofPlaneFormatValue(newValue, AllowableBendingStressOutofPlaneselectedUnit);
            setAllowableBendingStressOutofPlaneValue(newValue);
        }
    };

    const AllowableBendingStressOutofPlaneFormatValue = (value, unit) => {
        const floatValue = parseFloat(value);
        if (unit === 'Mpa') {
            return floatValue.toFixed(2);
        } else {
            if (floatValue >= 1000) {
                return floatValue.toExponential(3);
            }
            return floatValue.toFixed(2);
        }
    };

    useEffect(() => {
        calculateAllowableBendingStressOutofPlaneValue();
    }, [MaterialYieldStressInMPa]);










    const AllowableTensileStressUnits = ['Mpa', 'Pa'];
    const [AllowableTensileStressValue, setAllowableTensileStressValue] = useState('');
    const [AllowableTensileStressSelectedUnit, setAllowableTensileStressSelectedUnit] = useState('Mpa');

    const handleAllowableTensileStressselectedUnitChange = (unit) => {
        let newValue = parseFloat(AllowableTensileStressValue);
        if (unit === 'Pa' && AllowableTensileStressSelectedUnit === 'Mpa') {
            newValue *= 1e6;
        } else if (unit === 'Mpa' && AllowableTensileStressSelectedUnit === 'Pa') {
            newValue /= 1e6;
        }
        newValue = AllowableTensileStressFormatValue(newValue, unit);
        setAllowableTensileStressSelectedUnit(unit);
        setAllowableTensileStressValue(newValue);
    };

    const calculateAllowableTensileStressValue = () => {
        const MaterialYieldStressFloat = parseFloat(MaterialYieldStressInMPa);
        if (!isNaN(MaterialYieldStressFloat)) {
            let newValue = MaterialYieldStressFloat * 0.6;
            newValue = AllowableTensileStressFormatValue(newValue, AllowableTensileStressSelectedUnit);
            setAllowableTensileStressValue(newValue);
        }
    };

    const AllowableTensileStressFormatValue = (value, unit) => {
        const floatValue = parseFloat(value);
        if (unit === 'Mpa') {
            return floatValue.toFixed(2);
        } else {
            if (floatValue >= 1000) {
                return floatValue.toExponential(3);
            } else {
                return floatValue.toFixed(2);
            }
        }
    };

    useEffect(() => {
        calculateAllowableTensileStressValue();
    }, [MaterialYieldStressInMPa]);









    const AllowableTensileStressatpinholeUnits = ['MPa', 'Pa'];
    const [AllowableTensileStressatpinholeValue, setAllowableTensileStressatpinholeValue] = useState('');
    const [AllowableTensileStressatpinholeSelectedUnit, setAllowableTensileStressatpinholeSelectedUnit] = useState('MPa');

    const handleAllowableTensileStressatpinholeselectedUnitChange = (unit) => {
        let newValue = parseFloat(AllowableTensileStressatpinholeValue);
        if (unit === 'Pa' && AllowableTensileStressatpinholeSelectedUnit === 'MPa') {
            newValue *= 1e6;
        } else if (unit === 'MPa' && AllowableTensileStressatpinholeSelectedUnit === 'Pa') {
            newValue /= 1e6;
        }
        newValue = AllowableTensileStressatpinholeFormatValue(newValue, unit);
        setAllowableTensileStressatpinholeSelectedUnit(unit);
        setAllowableTensileStressatpinholeValue(newValue);
    };

    const calculateAllowableTensileStressatpinholeValue = () => {
        const MaterialYieldStressFloat = parseFloat(MaterialYieldStressInMPa);
        if (!isNaN(MaterialYieldStressFloat)) {
            let newValue = MaterialYieldStressFloat * 0.45;
            newValue = AllowableTensileStressatpinholeFormatValue(newValue, AllowableTensileStressatpinholeSelectedUnit);
            setAllowableTensileStressatpinholeValue(newValue);
        }
    };

    const AllowableTensileStressatpinholeFormatValue = (value, unit) => {
        const floatValue = parseFloat(value);
        if (unit === 'MPa') {
            return floatValue.toFixed(3);
        } else {
            if (floatValue >= 1000) {
                return floatValue.toExponential(3);
            }
            return floatValue.toFixed(3);
        }
    };

    useEffect(() => {
        calculateAllowableTensileStressatpinholeValue();
    }, [MaterialYieldStressInMPa]);





    const AllowableShearStressUnits = ['Mpa', 'Pa'];
    const AllowableShearStressFactors = {
        Mpa: [1, 1e6],
        Pa: [1e-6, 1],
    };

    const [AllowableShearStressValue, setAllowableShearStressValue] = useState('');
    const [AllowableShearStressSelectedUnit, setAllowableShearStressSelectedUnit] = useState('Mpa');

    const handleAllowableShearStressselectedUnitChange = (unit) => {
        const AllowableShearStressfactor = AllowableShearStressFactors[unit][AllowableShearStressUnits.indexOf(AllowableShearStressSelectedUnit)];
        let newValue = parseFloat(AllowableShearStressValue) / AllowableShearStressfactor;
        newValue = AllowableShearStressFormatValue(newValue, unit);
        setAllowableShearStressSelectedUnit(unit);
        setAllowableShearStressValue(newValue);
    };

    const calculateAllowableShearStressValue = () => {
        const MaterialYieldStressFloat = parseFloat(MaterialYieldStressInMPa);
        if (!isNaN(MaterialYieldStressFloat)) {
            let newValue = MaterialYieldStressFloat * 0.4;
            newValue = AllowableShearStressFormatValue(newValue, AllowableShearStressSelectedUnit);
            setAllowableShearStressValue(newValue);
        }
    };

    const AllowableShearStressFormatValue = (value, unit) => {
        const floatValue = parseFloat(value);
        if (unit === 'Mpa') {
            return floatValue.toFixed(2);
        } else {
            if (floatValue >= 1000) {
                return floatValue.toExponential(3);
            }
            return floatValue.toFixed(2);
        }
    };

    useEffect(() => {
        calculateAllowableShearStressValue();
    }, [MaterialYieldStressInMPa]);

    const AllowableHertzStressatPinHoleUnits = ['Mpa', 'Pa'];
    const AllowableHertzStressatPinHoleFactors = {
        Mpa: [1, 1e6],
        Pa: [1e-6, 1],
    };

    const [AllowableHertzStressatPinHoleValue, setAllowableHertzStressatPinHoleValue] = useState('');
    const [AllowableHertzStressatPinHoleSelectedUnit, setAllowableHertzStressatPinHoleSelectedUnit] = useState('Mpa');

    const handleAllowableHertzStressatPinHoleselectedUnitChange = (unit) => {
        const AllowableHertzStressfactor = AllowableHertzStressatPinHoleFactors[unit][AllowableHertzStressatPinHoleUnits.indexOf(AllowableHertzStressatPinHoleSelectedUnit)];
        let newValue = parseFloat(AllowableHertzStressatPinHoleValue) / AllowableHertzStressfactor;
        newValue = AllowableHertzStressatPinHoleFormatValue(newValue, unit);
        setAllowableHertzStressatPinHoleSelectedUnit(unit);
        setAllowableHertzStressatPinHoleValue(newValue);
    };

    const calculateAllowableHertzStressatPinHoleValue = () => {
        const MaterialYieldStressFloat = parseFloat(MaterialYieldStressInMPa);
        if (!isNaN(MaterialYieldStressFloat)) {
            let newValue = MaterialYieldStressFloat * 2.5;
            newValue = AllowableHertzStressatPinHoleFormatValue(newValue, AllowableHertzStressatPinHoleSelectedUnit);
            setAllowableHertzStressatPinHoleValue(newValue);
        }
    };

    const AllowableHertzStressatPinHoleFormatValue = (value, unit) => {
        const floatValue = parseFloat(value);
        if (unit === 'Mpa') {
            return floatValue.toFixed(2);
        } else {
            if (floatValue >= 1000) {
                return floatValue.toExponential(3);
            }
            return floatValue.toFixed(2);
        }
    };

    useEffect(() => {
        calculateAllowableHertzStressatPinHoleValue();
    }, [MaterialYieldStressInMPa]);

    const AllowableWeldStressUnits = ['Mpa', 'Pa'];
    const AllowableWeldStressFactors = {
        Mpa: [1, 1e6],
        Pa: [1e-6, 1],
    };

    const [AllowableWeldStressValue, setAllowableWeldStressValue] = useState('');
    const [AllowableWeldStressSelectedUnit, setAllowableWeldStressSelectedUnit] = useState('Mpa');

    const handleAllowableWeldStressselectedUnitChange = (unit) => {
        const AllowableWeldStressfactor = AllowableWeldStressFactors[unit][AllowableWeldStressUnits.indexOf(AllowableWeldStressSelectedUnit)];
        let newValue = parseFloat(AllowableWeldStressValue) / AllowableWeldStressfactor;
        newValue = AllowableWeldStressFormatValue(newValue, unit);
        setAllowableWeldStressSelectedUnit(unit);
        setAllowableWeldStressValue(newValue);
    };

    const calculateAllowableWeldStressValue = () => {
        const ElectrodeTensileStrengthFloat = parseFloat(ElectrodeTensileStrengthInMpa);
        if (!isNaN(ElectrodeTensileStrengthFloat)) {
            let newValue = ElectrodeTensileStrengthFloat * 0.3;
            newValue = AllowableWeldStressFormatValue(newValue, AllowableWeldStressSelectedUnit);
            setAllowableWeldStressValue(newValue);
        }
    };

    const AllowableWeldStressFormatValue = (value, unit) => {
        const floatValue = parseFloat(value);
        if (unit === 'Mpa') {
            return floatValue.toFixed(2);
        } else {
            if (floatValue >= 1000) {
                return floatValue.toExponential(3);
            }
            return floatValue.toFixed(2);
        }
    };

    useEffect(() => {
        calculateAllowableWeldStressValue();
    }, [ElectrodeTensileStrengthInMpa]);




    const cosRadians = (degrees) => {
        const radians = degrees * Math.PI / 180;
        return Math.cos(radians);
    };

    const sinRadians = (degrees) => {
        const radians = degrees * Math.PI / 180;
        return Math.sin(radians);
    };



    const LoadinVerticalDirectionZdirectionUnits = ['MT', 'N'];
    const LoadinVerticalDirectionZdirectionFactors = {
        MT: [1, 0.0001019716],
        N: [9806.65, 1],
    };

    const [LoadinVerticalDirectionZdirectionValue, setLoadinVerticalDirectionZdirectionValue] = useState('');
    const [LoadinVerticalDirectionZdirectionSelectedUnit, setLoadinVerticalDirectionZdirectionSelectedUnit] = useState('MT');

    const handleLoadinVerticalDirectionZdirectionselectedUnitChange = (unit) => {
        setLoadinVerticalDirectionZdirectionSelectedUnit(unit);
        const factor = LoadinVerticalDirectionZdirectionFactors[unit][LoadinVerticalDirectionZdirectionUnits.indexOf(LoadinVerticalDirectionZdirectionSelectedUnit)];
        setLoadinVerticalDirectionZdirectionValue((parseFloat(LoadinVerticalDirectionZdirectionValue) * factor).toFixed(2));
    };

    const calculateLoadinVerticalDirectionZdirectionValue = () => {
        const LoadonPadeye = LoadonPadeyeValueInMT
        const multiplyValue = Math.cos(AngleofLoadwithVerticalvalue * Math.PI / 180);
        const LoadinVerticalDirectionZdirectionValue = (LoadonPadeye * multiplyValue).toFixed(2);
        setLoadinVerticalDirectionZdirectionValue(LoadinVerticalDirectionZdirectionValue);
    };
    useEffect(() => {
        calculateLoadinVerticalDirectionZdirectionValue();
    }, [LoadonPadeyeValueInMT, AngleofLoadwithVerticalvalue]);



    const LoadinHorizontalDirectionYdirectionUnits = ['MT', 'N'];
    const LoadinHorizontalDirectionYdirectionFactors = {
        MT: [1, 0.0001019716],
        N: [9806.65, 1],
    };

    const [LoadinHorizontalDirectionYdirection, setLoadinHorizontalDirectionYdirection] = useState('');
    const [LoadinHorizontalDirectionYdirectionSelectedUnit, setLoadinHorizontalDirectionYdirectionSelectedUnit] = useState('MT');

    const handleLoadinHorizontalDirectionYdirectionselectedUnitChange = (unit) => {
        setLoadinHorizontalDirectionYdirectionSelectedUnit(unit);
        const factor = LoadinHorizontalDirectionYdirectionFactors[unit][LoadinHorizontalDirectionYdirectionUnits.indexOf(LoadinHorizontalDirectionYdirectionSelectedUnit)];
        setLoadinHorizontalDirectionYdirection((parseFloat(LoadinHorizontalDirectionYdirection) * factor).toFixed(2));
    };

    const calculateLoadinHorizontalDirectionYdirectionValue = () => {
        const LoadonPadeye = parseFloat(LoadonPadeyeValueInMT);
        const AngleofLoadwithVertical = parseFloat(AngleofLoadwithVerticalvalue);
        const pi = Math.PI;
        const LoadinHorizontalDirectionYdirectionMultipleValue = Math.sin(AngleofLoadwithVertical * 3.14159265358979 / 180) * Math.cos(OutofPlaneAngleValue * 3.14159265358979 / 180)
        const LoadinHorizontalDirectionYdirection = (LoadonPadeye * LoadinHorizontalDirectionYdirectionMultipleValue).toFixed(2);
        setLoadinHorizontalDirectionYdirection(LoadinHorizontalDirectionYdirection); // Adjust to your precision needs
    };
    useEffect(() => {
        calculateLoadinHorizontalDirectionYdirectionValue();
    }, [LoadonPadeyeValueInMT, AngleofLoadwithVerticalvalue, OutofPlaneAngleValue]);



    const OutofplaneLoadLateralLoadXdirectionUnits = ['MT', 'N'];
    const OutofplaneLoadLateralLoadXdirectionFactors = {
        MT: [1, 0.0001019716],
        N: [9806.65, 1],
    };

    const [OutofplaneLoadLateralLoadXdirection, setOutofplaneLoadLateralLoadXdirection] = useState('');
    const [OutofplaneLoadLateralLoadXdirectionSelectedUnit, setOutofplaneLoadLateralLoadXdirectionSelectedUnit] = useState('MT');

    const handleOutofplaneLoadLateralLoadXdirectionselectedUnitChange = (unit) => {
        setOutofplaneLoadLateralLoadXdirectionSelectedUnit(unit);
        const factor = OutofplaneLoadLateralLoadXdirectionFactors[unit][OutofplaneLoadLateralLoadXdirectionUnits.indexOf(OutofplaneLoadLateralLoadXdirectionSelectedUnit)];
        setOutofplaneLoadLateralLoadXdirection((parseFloat(OutofplaneLoadLateralLoadXdirection) * factor).toFixed(2));
    };

    const calculateOutofplaneLoadLateralLoadXdirectionValue = () => {
        const D13 = parseFloat(LoadonPadeyeValueInMT);
        const D30 = parseFloat(AngleofLoadwithVerticalvalue);
        const D31 = parseFloat(OutofPlaneAngleValue);
        const radiansD30 = D30 * Math.PI / 180;
        const radiansD31 = D31 * Math.PI / 180;
        const sineD30 = Math.sin(radiansD30);
        const sineD31 = Math.sin(radiansD31);
        const calculationResult = (D13 * sineD30 * sineD31).toFixed(2);
        setOutofplaneLoadLateralLoadXdirection(calculationResult); // Adjust to your precision needs
    };
    useEffect(() => {
        calculateOutofplaneLoadLateralLoadXdirectionValue();
    }, [LoadonPadeyeValueInMT, AngleofLoadwithVerticalvalue, OutofPlaneAngleValue]);




    const PadEyeDesignLoadUnits = ['MT', 'N'];
    const PadEyeDesignLoadFactors = {
        MT: [1, 0.0001019716],
        N: [9806.65, 1],
    };

    const [PadEyeDesignLoad, setPadEyeDesignLoad] = useState('');
    const [PadEyeDesignLoadSelectedUnit, setPadEyeDesignLoadSelectedUnit] = useState('MT');

    const handlePadEyeDesignLoadselectedUnitChange = (unit) => {
        setPadEyeDesignLoadSelectedUnit(unit);
        const factor = PadEyeDesignLoadFactors[unit][PadEyeDesignLoadUnits.indexOf(PadEyeDesignLoadSelectedUnit)];
        setPadEyeDesignLoad((parseFloat(PadEyeDesignLoad) * factor).toFixed(2));
    };

    const calculatePadEyeDesignLoadValue = () => {
        const LoadonPadeye = parseFloat(LoadonPadeyeValueInMT);
        const DLF = parseFloat(DLFValue)
        const PadEyeDesignLoad = (LoadonPadeye * DLF).toFixed(2);
        setPadEyeDesignLoad(PadEyeDesignLoad);
    };
    useEffect(() => {
        calculatePadEyeDesignLoadValue();
    }, [LoadonPadeyeValueInMT, DLFValue]);




    // DesignLoadinVerticalDirectionZdirection
    const DesignLoadinVerticalDirectionZdirectionUnits = ['MT', 'N'];
    const DesignLoadinVerticalDirectionZdirectionFactors = {
        MT: [1, 0.000101971621],
        N: [9806.65, 1],
    };

    const [DesignLoadinVerticalDirectionZdirection, setDesignLoadinVerticalDirectionZdirection] = useState('');
    const [DesignLoadinVerticalDirectionZdirectionSelectedUnit, setDesignLoadinVerticalDirectionZdirectionSelectedUnit] = useState('MT');

    const handleDesignLoadinVerticalDirectionZdirectionselectedUnitChange = (unit) => {
        setDesignLoadinVerticalDirectionZdirectionSelectedUnit(unit);
        const factor = DesignLoadinVerticalDirectionZdirectionFactors[unit][DesignLoadinVerticalDirectionZdirectionUnits.indexOf(DesignLoadinVerticalDirectionZdirectionSelectedUnit)];
        setDesignLoadinVerticalDirectionZdirection((parseFloat(DesignLoadinVerticalDirectionZdirection) * factor).toFixed(2));
    };

    const calculateDesignLoadinVerticalDirectionZdirectionValue = () => {
        const LoadonPadeye = LoadonPadeyeValueInMT
        const multiplyValue = Math.cos(AngleofLoadwithVerticalvalue * Math.PI / 180);
        const LoadinVerticalDirectionZdirectionValue = LoadonPadeye * multiplyValue;
        const DLF = parseFloat(DLFValue);
        const DesignLoadinVerticalDirectionZdirection = (LoadinVerticalDirectionZdirectionValue * DLF).toFixed(2);
        setDesignLoadinVerticalDirectionZdirection(DesignLoadinVerticalDirectionZdirection); // Adjust to your precision needs
    };

    useEffect(() => {
        calculateDesignLoadinVerticalDirectionZdirectionValue();
    }, [LoadinVerticalDirectionZdirectionValue, DLFValue, LoadonPadeyeValueInMT]);




    // DesignLoadinHorizontalDirectionYdirection

    const DesignLoadinHorizontalDirectionYdirectionUnits = ['MT', 'N'];
    const DesignLoadinHorizontalDirectionYdirectionFactors = {
        MT: [1, 0.000101971621],
        N: [9806.65, 1],
    };

    const [DesignLoadinHorizontalDirectionYdirection, setDesignLoadinHorizontalDirectionYdirection] = useState('');
    const [DesignLoadinHorizontalDirectionYdirectionSelectedUnit, setDesignLoadinHorizontalDirectionYdirectionSelectedUnit] = useState('MT');

    const handleDesignLoadinHorizontalDirectionYdirectionselectedUnitChange = (unit) => {
        setDesignLoadinHorizontalDirectionYdirectionSelectedUnit(unit);
        const factor = DesignLoadinHorizontalDirectionYdirectionFactors[unit][DesignLoadinHorizontalDirectionYdirectionUnits.indexOf(DesignLoadinHorizontalDirectionYdirectionSelectedUnit)];
        setDesignLoadinHorizontalDirectionYdirection((parseFloat(DesignLoadinHorizontalDirectionYdirection) * factor).toFixed(2)); // Adjust to your precision needs
    };

    const calculateDesignLoadinHorizontalDirectionYdirectionValue = () => {
        const pi = Math.PI;
        const LoadinHorizontalDirectionYdirectionMultipleValue = Math.sin(AngleofLoadwithVerticalvalue * pi / 180) * Math.cos(OutofPlaneAngleValue * pi / 180);
        const LoadinHorizontalDirectionYdirection = (LoadonPadeyeValueInMT * LoadinHorizontalDirectionYdirectionMultipleValue).toFixed(1);
        const DesignLoadinHorizontalDirectionYdirection = (LoadinHorizontalDirectionYdirection * DLFValue).toFixed(3);
        setDesignLoadinHorizontalDirectionYdirection(DesignLoadinHorizontalDirectionYdirection); // Adjust to your precision needs
    };

    useEffect(() => {
        calculateDesignLoadinHorizontalDirectionYdirectionValue();
    }, [LoadonPadeyeValueInMT, AngleofLoadwithVerticalvalue, DLFValue, OutofPlaneAngleValue]); // Dependencies to ensure calculation runs when these values change

    // DesignLoadOutofPlaneLateralXdirection2




    const DesignLoadOutofPlaneLateralXdirectionUnits = ['MT', 'N'];
    const DesignLoadOutofPlaneLateralXdirectionFactors = {
        MT: [1, 0.000101971621],
        N: [9806.65, 1],
    };

    const [DesignLoadOutofPlaneLateralXdirection, setDesignLoadOutofPlaneLateralXdirection] = useState('');
    const [DesignLoadOutofPlaneLateralXdirectionSelectedUnit, setDesignLoadOutofPlaneLateralXdirectionSelectedUnit] = useState('MT');

    const handleDesignLoadOutofPlaneLateralXdirectionselectedUnitChange = (unit) => {
        const currentFactor = DesignLoadOutofPlaneLateralXdirectionFactors[unit][DesignLoadOutofPlaneLateralXdirectionUnits.indexOf(DesignLoadOutofPlaneLateralXdirectionSelectedUnit)];
        const newValue = parseFloat((DesignLoadOutofPlaneLateralXdirection) * currentFactor);
        setDesignLoadOutofPlaneLateralXdirection(newValue.toFixed(7)); // Adjust to your precision needs
        setDesignLoadOutofPlaneLateralXdirectionSelectedUnit(unit);
    };

    const calculateDesignLoadOutofPlaneLateralXdirectionValue = () => {
        const LoadonPadeye = parseFloat(LoadonPadeyeValueInMT)
        const DLF = parseFloat(DLFValue);
        const pi = Math.PI;
        const PadEyeDesignLoadvalue = LoadonPadeye * DLF;
        const OutofplaneLoadLateralLoadXdirectionMultiplyValue = Math.sin(AngleofLoadwithVerticalvalue * pi / 180) * Math.sin(OutofPlaneAngleValue * pi / 180)
        const OutofplaneLoadLateralLoadXdirection = LoadonPadeye * OutofplaneLoadLateralLoadXdirectionMultiplyValue;
        const DesignLoadOutofPlaneLateralXdirection = ((OutofplaneLoadLateralLoadXdirection * DLF) + (0.05 * PadEyeDesignLoadvalue)).toFixed(2);
        setDesignLoadOutofPlaneLateralXdirection(DesignLoadOutofPlaneLateralXdirection); // Adjust to your precision needs
    };

    useEffect(() => {
        calculateDesignLoadOutofPlaneLateralXdirectionValue();
    }, [OutofplaneLoadLateralLoadXdirection, DLFValue, PadEyeDesignLoad, LoadonPadeyeValueInMT]);





    // Geometry check
    const ClearancebetweenpinholediaandpindiaUnits = ['mm', 'cm'];
    const ClearancebetweenpinholediaandpindiaFactors = {
        mm: [1, 0.1],
        cm: [10, 1],
    };

    const [Clearancebetweenpinholediaandpindia, setClearancebetweenpinholediaandpindia] = useState('');
    const [ClearancebetweenpinholediaandpindiaSelectedunit, setClearancebetweenpinholediaandpindiaSelectedUnit] = useState('mm');

    const handleClearancebetweenpinholediaandpindiaselectedUnitChange = (unit) => {
        setClearancebetweenpinholediaandpindiaSelectedUnit(unit);
        const ClearancebetweenpinholediaandpindiaFactor = ClearancebetweenpinholediaandpindiaFactors[unit][ClearancebetweenpinholediaandpindiaUnits.indexOf(ClearancebetweenpinholediaandpindiaSelectedunit)];
        setClearancebetweenpinholediaandpindia((parseFloat(Clearancebetweenpinholediaandpindia) / ClearancebetweenpinholediaandpindiaFactor).toFixed(3));
    };

    const calculateClearancebetweenpinholediaandpindiaValue = () => {
        const Diameterofeyepinhole = parseFloat(internalDiameterofeyepinholeValue);
        const Clearancebetweenpinholediaandpindia = Diameterofeyepinhole - internalShacklePinDiameter;
        setClearancebetweenpinholediaandpindia(Clearancebetweenpinholediaandpindia.toFixed(3));
    };
    useEffect(() => {
        calculateClearancebetweenpinholediaandpindiaValue();
    }, [internalDiameterofeyepinholeValue, internalShacklePinDiameter]);



    const LengthClearanceofShackleUnits = ['mm', 'cm'];
    const LengthClearanceofShackleFactors = {
        mm: [1, 0.1],
        cm: [10, 1],
    };

    const [LengthClearanceofShackle, setLengthClearanceofShackle] = useState('');
    const [LengthClearanceofShackleselectedunit, setLengthClearanceofShackleSelectedUnit] = useState('mm');

    const handleLengthClearanceofShackleselectedUnitChange = (unit) => {
        setLengthClearanceofShackleSelectedUnit(unit);
        const ClearancebetweenpinholediaandpindiaFactor = LengthClearanceofShackleFactors[unit][LengthClearanceofShackleUnits.indexOf(LengthClearanceofShackleselectedunit)];
        setLengthClearanceofShackle((parseFloat(LengthClearanceofShackle) / ClearancebetweenpinholediaandpindiaFactor).toFixed(3));
    };

    const calculateLengthClearanceofShackleValue = () => {
        const ShackleInsideLengthvalue = parseFloat(internalShackleInsideLength);
        const Plusvalue = ShackleInsideLengthvalue + (internalShacklePinDiameter / 2)
        const minusValue = internalRadiusofMainPlateValue - (- internalSlingDiameter);
        // const LengthClearanceofShackle = Plusvalue - minusValue;
        const LengthClearanceofShackle = (Plusvalue - minusValue).toFixed(3);
        // const LengthClearanceofShackle = ShackleInsideLengthvalue + (ShacklePinDiameter / 2) - internalRadiusofMainPlateValue - SlingDiameter;
        setLengthClearanceofShackle(LengthClearanceofShackle);
    };
    useEffect(() => {
        calculateLengthClearanceofShackleValue();
    }, [internalShackleInsideLength, internalShacklePinDiameter, internalSlingDiameter, internalRadiusofMainPlateValue]);





    const WidthClearanceofShackleUnits = ['mm', 'cm'];
    const WidthClearanceofShackleFactors = {
        mm: [1, 0.1],
        cm: [10, 1],
    };

    const [WidthClearanceofShackle, setWidthClearanceofShackle] = useState('');
    const [WidthClearanceofShackleSelectedUnit, setWidthClearanceofShackleSelectedunit] = useState('mm');

    const handleWidthClearanceofShackleUnitChange = (unit) => {
        setWidthClearanceofShackleSelectedunit(unit);
        const WidthClearanceofShackleFactor = WidthClearanceofShackleFactors[unit][WidthClearanceofShackleUnits.indexOf(WidthClearanceofShackleSelectedUnit)];
        setWidthClearanceofShackle((parseFloat(WidthClearanceofShackle) / WidthClearanceofShackleFactor));
    };

    const calculateWidthClearanceofShackleValue = () => {
        const ShackleJawWidthvalue = parseFloat(internalShackleJawWidth);
        // const WidthClearanceofShackle = (( ShackleJawWidthvalue) );
        const WidthClearanceofShackleMinusValue = ((ShackleJawWidthvalue - internalThicknessofMainPlateValue));
        const WidthClearanceofShackle = (WidthClearanceofShackleMinusValue - (2 * internalThicknessofCheekPlateInputValue));
        setWidthClearanceofShackle(WidthClearanceofShackle);
    };
    useEffect(() => {
        calculateWidthClearanceofShackleValue();
    }, [internalShackleJawWidth, internalThicknessofMainPlateValue, internalThicknessofCheekPlateInputValue]);



    // Stress Checks at Pin Hole
    // Bearing Area


    const pi = Math.PI;
    const PI = 22 / 7
    const piby4 = pi / 4

    const BearingAreaUnits = ['mm²', 'cm²'];
    const BearingAreaFactors = {
        'mm²': [1, 0.01],
        'cm²': [100, 1],
    };

    const [BearingArea, setBearingArea] = useState('');
    const [BearingAreaSelectedUnit, setBearingAreaSelectedUnit] = useState('mm²');

    const handleBearingAreaUnitChange = (unit) => {
        setBearingAreaSelectedUnit(unit);
        const BearingAreaFactor = BearingAreaFactors[unit][BearingAreaUnits.indexOf(BearingAreaSelectedUnit)];
        setBearingArea((parseFloat(BearingArea) / BearingAreaFactor).toFixed(4));
    };

    const calculateBearingAreaValue = () => {
        const Dp = parseFloat(internalShacklePinDiameter);
        const t = parseFloat(internalThicknessofMainPlateValue);
        const tc = parseFloat(internalThicknessofCheekPlateInputValue);
        const BearingArea = piby4 * Dp * (t + 2 * tc)
        setBearingArea(BearingArea.toFixed(3));
    };
    useEffect(() => {
        calculateBearingAreaValue();
    }, [internalShacklePinDiameter, internalThicknessofMainPlateValue, internalThicknessofCheekPlateInputValue]);

    const BearingStressActualUnits = ['Mpa', 'Pa'];
    const BearingStressActualFactors = {
        Mpa: [1, 1e6],
        Pa: [1e-6, 1],
    };

    const [BearingStressActual, setBearingStressActual] = useState('');
    const [BearingStressActualSelectedUnit, setBearingStressActualSelectedUnit] = useState('Mpa');

    const handleBearingStressActualUnitChange = (unit) => {
        const AllowableBendingStressInPlaneFactor = BearingStressActualFactors[unit][BearingStressActualUnits.indexOf(BearingStressActualSelectedUnit)];
        let newValue = parseFloat(BearingStressActual) / AllowableBendingStressInPlaneFactor;
        newValue = BearingStressActualFormatValue(newValue, unit);
        setBearingStressActualSelectedUnit(unit);
        setBearingStressActual(newValue);
    };

    const calculateBearingStressActualValue = () => {
        const LoadonPadeyeValueInMTValue = parseFloat(LoadonPadeyeValueInMT);
        const DLF = parseFloat(DLFValue);
        const ShacklePinDiameter = parseFloat(internalShacklePinDiameter);
        const ThicknessofMainPlateValue = parseFloat(internalThicknessofMainPlateValue);
        const ThicknessofCheekPlateInputValue = parseFloat(internalThicknessofCheekPlateInputValue);
        if (!isNaN(LoadonPadeyeValueInMTValue) && !isNaN(DLF) && !isNaN(ShacklePinDiameter) && !isNaN(ThicknessofMainPlateValue) && !isNaN(ThicknessofCheekPlateInputValue)) {
            const LoadonPadeye = parseFloat(LoadonPadeyeValueInMT);
            const DLF = parseFloat(DLFValue)
            const PadEyeDesignLoad = LoadonPadeye * DLF;
            const Dp = parseFloat(internalShacklePinDiameter);
            const t = parseFloat(internalThicknessofMainPlateValue);
            const tc = parseFloat(internalThicknessofCheekPlateInputValue);
            const BearingArea = piby4 * Dp * (t + 2 * tc)
            const BearingStressActual = (PadEyeDesignLoad / BearingArea * 9810);
            setBearingStressActual(BearingStressActual.toFixed(2));
        }
    };

    const BearingStressActualFormatValue = (value, unit) => {
        const floatValue = parseFloat(value);
        if (unit === 'Mpa') {
            return floatValue.toFixed(2);
        } else {
            if (floatValue >= 1000) {
                return floatValue.toExponential(4);
            }
            return floatValue.toFixed(2);
        }
    };

    useEffect(() => {
        calculateBearingStressActualValue();
    }, [LoadonPadeyeValueInMT, DLFValue, internalShacklePinDiameter, internalThicknessofMainPlateValue, internalThicknessofCheekPlateInputValue]);



    //Shear Stress Check at Pin Hole     

    const RadiusofCheekPlateUnits = ['mm', 'cm'];
    const RadiusofCheekPlateFactors = {
        mm: [1, 0.1],
        cm: [10, 1],
    };

    const [RadiusofCheekPlate, setRadiusofCheekPlate] = useState('');
    const [RadiusofCheekPlateSelectedUnit, setRadiusofCheekPlateSelectedUnit] = useState('mm');

    const handleRadiusofCheekPlateUnitChange = (unit) => {
        setRadiusofCheekPlateSelectedUnit(unit);
        const RadiusofCheekPlateFactor = RadiusofCheekPlateFactors[unit][RadiusofCheekPlateUnits.indexOf(RadiusofCheekPlateSelectedUnit)];
        setRadiusofCheekPlate((parseFloat(RadiusofCheekPlate) / RadiusofCheekPlateFactor));
    };

    const calculateRadiusofCheekPlateValue = () => {
        const RadiusofCheekPlate = (internalDiameterofCheekPlateInputValue / 2).toFixed(2);
        setRadiusofCheekPlate(RadiusofCheekPlate);
    };
    useEffect(() => {
        calculateRadiusofCheekPlateValue();
    }, [internalDiameterofCheekPlateInputValue]);


    // Shear Area of pin hole - See Fig 4



    const ShearAreaofpinholeUnits = ['mm²', 'cm²'];
    const ShearAreaofpinholeFactors = {
        'mm²': [1, 0.01],
        'cm²': [100, 1],
    };

    const [ShearAreaofpinhole, setShearAreaofpinhole] = useState('');
    const [ShearAreaofpinholeSelectedUnit, setShearAreaofpinholeSelectedUnit] = useState('mm²');

    const handleShearAreaofpinholeUnitChange = (unit) => {
        setShearAreaofpinholeSelectedUnit(unit);
        const ShearAreaofpinholeFactor = ShearAreaofpinholeFactors[unit][ShearAreaofpinholeUnits.indexOf(ShearAreaofpinholeSelectedUnit)];
        setShearAreaofpinhole((parseFloat(ShearAreaofpinhole) / ShearAreaofpinholeFactor));
    };

    const calculateShearAreaofpinholeValue = () => {
        const R = parseFloat(internalRadiusofMainPlateValue);
        const De = parseFloat(internalDiameterofeyepinholeValue);
        const t = parseFloat(internalThicknessofMainPlateValue);
        const DiameterofCheekPlate = parseFloat(internalDiameterofCheekPlateInputValue);
        const RadiusofCheekPlate = (DiameterofCheekPlate / 2);
        const Rc = parseFloat(RadiusofCheekPlate);
        const tc = parseFloat(internalThicknessofCheekPlateInputValue);
        const ShearAreaofpinholePluesValue1 = (R - De / 2) * t;
        const ShearAreaofpinholePluesValue2 = 2 * (Rc - De / 2) * tc;
        const ShearAreaofpinhole = 2 * (ShearAreaofpinholePluesValue1 + ShearAreaofpinholePluesValue2);
        setShearAreaofpinhole(ShearAreaofpinhole);
    };
    useEffect(() => {
        calculateShearAreaofpinholeValue();
    }, [internalRadiusofMainPlateValue, internalDiameterofeyepinholeValue, RadiusofCheekPlate, internalThicknessofCheekPlateInputValue, internalThicknessofMainPlateValue, internalDiameterofCheekPlateInputValue]);


    // Shear Stress at pin hole

    const ShearStressatpinholeUnits = ['Mpa', 'Pa'];
    const ShearStressatpinholeFactors = {
        Mpa: [1, 1e6],
        Pa: [1e-6, 1],
    };

    const [ShearStressatpinhole, setShearStressatpinhole] = useState('');
    const [ShearStressatpinholeSelectedUnit, setShearStressatpinholeSelectedUnit] = useState('Mpa');

    const handleShearStressatpinholeUnitChange = (unit) => {
        const AllowableBendingStressInPlaneFactor = ShearStressatpinholeFactors[unit][ShearStressatpinholeUnits.indexOf(ShearStressatpinholeSelectedUnit)];
        let newValue = parseFloat(ShearStressatpinhole) / AllowableBendingStressInPlaneFactor;
        newValue = calculateShearStressatpinholeValue(newValue, unit);
        setShearStressatpinholeSelectedUnit(unit);
        setShearStressatpinhole(newValue);
    };

    const calculateShearStressatpinhole = () => {
        const DiameterofCheekPlate = parseFloat(internalDiameterofCheekPlateInputValue);
        const LoadonPadeye = parseFloat(LoadonPadeyeValueInMT);
        const t = parseFloat(internalThicknessofMainPlateValue);
        const R = parseFloat(internalRadiusofMainPlateValue);
        const Rc = parseFloat(internalDiameterofCheekPlateInputValue / 2);
        const De = parseFloat(internalDiameterofeyepinholeValue);
        const tc = parseFloat(internalThicknessofCheekPlateInputValue);
        const DLF = parseFloat(DLFValue)
        if (!isNaN(DiameterofCheekPlate) && !isNaN(LoadonPadeye) && !isNaN(t) && !isNaN(R) && !isNaN(Rc) && !isNaN(De) && !isNaN(tc) && !isNaN(DLF)) {
            const ShearAreaofpinhole = 2 * ((R - De / 2) * t + 2 * (Rc - De / 2) * tc);
            const pd = LoadonPadeye * DLF;
            const ShearStressatpinhole = (pd * 9810 / ShearAreaofpinhole).toFixed(2)
            setShearStressatpinhole(ShearStressatpinhole);
        }
    };

    const calculateShearStressatpinholeValue = (value, unit) => {
        const floatValue = parseFloat(value);
        if (unit === 'Mpa') {
            return floatValue.toFixed(2);
        } else {
            if (floatValue >= 1000) {
                return floatValue.toExponential(4);
            }
            return floatValue.toFixed(2);
        }
    };

    useEffect(() => {
        calculateShearStressatpinhole();
    }, [internalDiameterofCheekPlateInputValue, LoadonPadeyeValueInMT, internalThicknessofMainPlateValue, internalRadiusofMainPlateValue, internalDiameterofeyepinholeValue, internalThicknessofCheekPlateInputValue, DLFValue,]);


    // TensileAreaforsectionAA
    const TensileAreaforsectionAAUnits = ['mm²', 'cm²'];
    const TensileAreaforsectionAAFactors = {
        'mm²': [1, 0.01],
        'cm²': [100, 1],
    };

    const [TensileAreaforsectionAA, setTensileAreaforsectionAA] = useState('');
    const [TensileAreaforsectionAASelectedUnit, setTensileAreaforsectionAASelectedUnit] = useState('mm²');

    const handleTensileAreaforsectionAAUnitChange = (unit) => {
        setTensileAreaforsectionAASelectedUnit(unit);
        const TensileAreaforsectionAAFactor = TensileAreaforsectionAAFactors[unit][TensileAreaforsectionAAUnits.indexOf(TensileAreaforsectionAASelectedUnit)];
        setTensileAreaforsectionAA((parseFloat(TensileAreaforsectionAA) / TensileAreaforsectionAAFactor).toFixed(3));
    };

    const calculateTensileAreaforsectionAAValue = () => {
        const LoadonPadeye = parseFloat(LoadonPadeyeValueInMT);
        const t = parseFloat(internalThicknessofMainPlateValue);
        const R = parseFloat(internalRadiusofMainPlateValue);
        const DiameterofCheekPlate = parseFloat(internalDiameterofCheekPlateInputValue);
        const RadiusofCheekPlate = DiameterofCheekPlate / 2;
        const Rc = parseFloat(DiameterofCheekPlate / 2);
        const De = parseFloat(internalDiameterofeyepinholeValue);
        const tc = parseFloat(internalThicknessofCheekPlateInputValue);
        const DLF = parseFloat(DLFValue)
        const ShearAreaofpinhole = 2 * ((R - De / 2) * t + 2 * (Rc - De / 2) * tc);
        const PadEyeDesignLoad = LoadonPadeye * DLF;
        const TensileAreaforsectionAA = 2 * ((R - De / 2) * t + 2 * (Rc - De / 2) * tc);
        setTensileAreaforsectionAA(TensileAreaforsectionAA.toFixed(3));
    };
    useEffect(() => {
        calculateTensileAreaforsectionAAValue();
    }, [internalRadiusofMainPlateValue, internalDiameterofeyepinholeValue, RadiusofCheekPlate, internalThicknessofCheekPlateInputValue, internalThicknessofMainPlateValue, LoadonPadeyeValueInMT, internalDiameterofCheekPlateInputValue]);

    // const TensileStressatpinholeActualatsectionAA = pd * 9810 / TensileAreaforsectionAA


    const TensileStressatpinholeActualatsectionAAUnits = ['Mpa', 'Pa'];
    const TensileStressatpinholeActualatsectionAAFactors = {
        Mpa: [1, 1e6],
        Pa: [1e-6, 1],
    };

    const [TensileStressatpinholeActualatsectionAA, setTensileStressatpinholeActualatsectionAA] = useState('');
    const [TensileStressatpinholeActualatsectionAASelectedUnit, setTensileStressatpinholeActualatsectionAASelectedUnit] = useState('Mpa');

    const handleTensileStressatpinholeActualatsectionAAUnitChange = (unit) => {
        const AllowableBearingStressFactor = TensileStressatpinholeActualatsectionAAFactors[unit][TensileStressatpinholeActualatsectionAAUnits.indexOf(TensileStressatpinholeActualatsectionAASelectedUnit)];
        let newValue = parseFloat(TensileStressatpinholeActualatsectionAA) / AllowableBearingStressFactor;
        newValue = TensileStressatpinholeActualatsectionAAFormatValue(newValue, unit);
        setTensileStressatpinholeActualatsectionAASelectedUnit(unit);
        setTensileStressatpinholeActualatsectionAA(newValue);
    };

    const calculateTensileStressatpinholeActualatsectionAAValue = () => {
        const DiameterofCheekPlate = parseFloat(internalDiameterofCheekPlateInputValue);
        const LoadonPadeye = parseFloat(LoadonPadeyeValueInMT);
        const t = parseFloat(internalThicknessofMainPlateValue);
        const R = parseFloat(internalRadiusofMainPlateValue);
        const RadiusofCheekPlate = DiameterofCheekPlate / 2;
        const Rc = parseFloat(RadiusofCheekPlate);
        const De = parseFloat(internalDiameterofeyepinholeValue);
        const tc = parseFloat(internalThicknessofCheekPlateInputValue);
        const DLF = parseFloat(DLFValue)
        const PadEyeDesignLoad = LoadonPadeye * DLF;
        const TensileAreaforsectionAA = 2 * ((R - De / 2) * t + 2 * (Rc - De / 2) * tc);
        const pd = parseFloat(PadEyeDesignLoad);
        const TensileStressatpinholeActualatsectionAA = pd * 9810 / TensileAreaforsectionAA;
        setTensileStressatpinholeActualatsectionAA(TensileStressatpinholeActualatsectionAA.toFixed(3));
        // let newValue = MaterialYieldStress * 0.9;
        // newValue = TensileStressatpinholeActualatsectionAAFormatValue(newValue, TensileStressatpinholeActualatsectionAASelectedUnit);
        // setTensileStressatpinholeActualatsectionAA(newValue);
    };
    const TensileStressatpinholeActualatsectionAAFormatValue = (value, unit) => {
        const floatValue = parseFloat(value);
        if (unit === 'Mpa') {
            return floatValue.toFixed(3);
        } else {
            if (floatValue >= 1000) {
                return floatValue.toExponential(4);
            }
            return floatValue.toFixed(3);
        }
    };

    useEffect(() => {
        calculateTensileStressatpinholeActualatsectionAAValue();
    }, [internalDiameterofCheekPlateInputValue, LoadonPadeyeValueInMT, internalThicknessofMainPlateValue, internalRadiusofMainPlateValue, RadiusofCheekPlate, internalDiameterofeyepinholeValue, internalThicknessofCheekPlateInputValue, DLFValue, PadEyeDesignLoad,]);



    // TensileAreaforsectionBB
    const TensileAreaforsectionBBUnits = ['mm²', 'cm²'];
    const TensileAreaforsectionBBFactors = {
        'mm²': [1, 0.01],
        'cm²': [100, 1],
    };

    const [TensileAreaforsectionBB, setTensileAreaforsectionBB] = useState('');
    const [TensileAreaforsectionBBSelectedUnit, setTensileAreaforsectionBBSelectedUnit] = useState('mm²');

    const handleTensileAreaforsectionBBUnitChange = (unit) => {
        setTensileAreaforsectionBBSelectedUnit(unit);
        const TensileAreaforsectionAAFactor = TensileAreaforsectionBBFactors[unit][TensileAreaforsectionBBUnits.indexOf(TensileAreaforsectionBBSelectedUnit)];
        setTensileAreaforsectionBB((parseFloat(TensileAreaforsectionBB) / TensileAreaforsectionAAFactor).toFixed(3));
    };

    const calculateTensileAreaforsectionBBValue = () => {
        const DiameterofCheekPlate = parseFloat(internalDiameterofCheekPlateInputValue);
        const LoadonPadeye = parseFloat(LoadonPadeyeValueInMT);
        const t = parseFloat(internalThicknessofMainPlateValue);
        const R = parseFloat(internalRadiusofMainPlateValue);
        const RadiusofCheekPlate = DiameterofCheekPlate / 2;
        const Rc = parseFloat(RadiusofCheekPlate);
        const De = parseFloat(internalDiameterofeyepinholeValue);
        const tc = parseFloat(internalThicknessofCheekPlateInputValue);
        const DLF = parseFloat(DLFValue)
        const PadEyeDesignLoad = LoadonPadeye * DLF;
        const TensileAreaforsectionBB = ((2 * R) + (pi * Rc / 2)) * t
        setTensileAreaforsectionBB(TensileAreaforsectionBB.toFixed(3));
    };
    useEffect(() => {
        calculateTensileAreaforsectionBBValue();
    }, [internalRadiusofMainPlateValue, RadiusofCheekPlate, internalThicknessofMainPlateValue, LoadonPadeyeValueInMT, internalDiameterofeyepinholeValue, internalDiameterofCheekPlateInputValue, internalThicknessofCheekPlateInputValue]);

    // const TensileStressatpinholeActualatsectionAA = pd * 9810 / TensileAreaforsectionAA

    // TensileStressatpinholeActualatsectionBB

    const TensileStressatpinholeActualatsectionBBUnits = ['Mpa', 'Pa'];
    const TensileStressatpinholeActualatsectionBBFactors = {
        Mpa: [1, 1e6],
        Pa: [1e-6, 1],
    };

    const [TensileStressatpinholeActualatsectionBB, setTensileStressatpinholeActualatsectionBB] = useState('');
    const [TensileStressatpinholeActualatsectionBBSelectedUnit, setTensileStressatpinholeActualatsectionBBSelectedUnit] = useState('Mpa');

    const handleTensileStressatpinholeActualatsectionBBUnitChange = (unit) => {
        const AllowableBearingStressFactor = TensileStressatpinholeActualatsectionBBFactors[unit][TensileStressatpinholeActualatsectionBBUnits.indexOf(TensileStressatpinholeActualatsectionBBSelectedUnit)];
        let newValue = parseFloat(TensileStressatpinholeActualatsectionBB) / AllowableBearingStressFactor;
        newValue = TensileStressatpinholeActualatsectionBBFormatValue(newValue, unit);
        setTensileStressatpinholeActualatsectionBBSelectedUnit(unit);
        setTensileStressatpinholeActualatsectionBB(newValue);
    };

    const calculateTensileStressatpinholeActualatsectionBBValue = () => {
        const DiameterofCheekPlate = parseFloat(internalDiameterofCheekPlateInputValue);
        const LoadonPadeye = parseFloat(LoadonPadeyeValueInMT);
        const t = parseFloat(internalThicknessofMainPlateValue);
        const R = parseFloat(internalRadiusofMainPlateValue);
        const RadiusofCheekPlate = DiameterofCheekPlate / 2;
        const Rc = parseFloat(RadiusofCheekPlate);
        const DLF = parseFloat(DLFValue)
        const PadEyeDesignLoad = LoadonPadeye * DLF;
        const TensileAreaforsectionBB = ((2 * R) + (pi * Rc / 2)) * t
        const TensileStressatpinholeActualatsectionBB = PadEyeDesignLoad * 9810 / TensileAreaforsectionBB
        setTensileStressatpinholeActualatsectionBB(TensileStressatpinholeActualatsectionBB.toFixed(3));
        // let newValue = MaterialYieldStress * 0.9;
        // newValue = TensileStressatpinholeActualatsectionBBFormatValue(newValue, TensileStressatpinholeActualatsectionBBSelectedUnit);
        // setTensileStressatpinholeActualatsectionBB(newValue);
    };
    const TensileStressatpinholeActualatsectionBBFormatValue = (value, unit) => {
        const floatValue = parseFloat(value);
        if (unit === 'Mpa') {
            return floatValue.toFixed(3);
        } else {
            if (floatValue >= 1000) {
                return floatValue.toExponential(4);
            }
            return floatValue.toFixed(3);
        }
    };

    useEffect(() => {
        calculateTensileStressatpinholeActualatsectionBBValue();
    }, [internalDiameterofCheekPlateInputValue, LoadonPadeyeValueInMT, internalThicknessofMainPlateValue, internalRadiusofMainPlateValue, RadiusofCheekPlate, DLFValue,]);

    // Hertz/Contact Stress Check at Pin Hole

    // DesignLoadperunitLength
    const DesignLoadperunitLengthUnits = ['MT/mm'];
    const DesignLoadperunitLengthFactors = {
        'MT/mm': [1],
    };

    const [DesignLoadperunitLength, setDesignLoadperunitLength] = useState('');
    const [DesignLoadperunitLengthSelectedUnit, setDesignLoadperunitLengthSelectedUnit] = useState('MT/mm');

    const handleDesignLoadperunitLengthUnitChange = (unit) => {
        setDesignLoadperunitLengthSelectedUnit(unit);
        const DesignLoadperunitLengthFactor = DesignLoadperunitLengthFactors[unit][DesignLoadperunitLengthUnits.indexOf(DesignLoadperunitLengthSelectedUnit)];
        setDesignLoadperunitLength((parseFloat(DesignLoadperunitLength) / DesignLoadperunitLengthFactor).toFixed(3));
    };

    const calculateDesignLoadperunitLengthValue = () => {
        const LoadonPadeye = parseFloat(LoadonPadeyeValueInMT);
        const DLF = parseFloat(DLFValue)
        const PadEyeDesignLoad = (LoadonPadeye * DLF).toFixed(2);
        const pd = parseFloat(PadEyeDesignLoad);
        const t = parseFloat(internalThicknessofMainPlateValue);
        const tc = parseFloat(internalThicknessofCheekPlateInputValue);
        const DesignLoadperunitLength = pd / (t + 2 * tc);
        setDesignLoadperunitLength(DesignLoadperunitLength.toFixed(3));
    };
    useEffect(() => {
        calculateDesignLoadperunitLengthValue();
    }, [PadEyeDesignLoad, internalThicknessofMainPlateValue, internalThicknessofCheekPlateInputValue]);


    const HertzStressatPinHoleUnits = ['Mpa', 'Pa'];
    const HertzStressatPinHoleFactors = {
        Mpa: [1, 1e6],
        Pa: [1e-6, 1],
    };

    const [HertzStressatPinHole, setHertzStressatPinHole] = useState('');
    const [HertzStressatPinHoleSelectedUnit, setHertzStressatPinHoleSelectedUnit] = useState('Mpa');

    const handleHertzStressatPinHoleUnitChange = (unit) => {
        const AllowableBearingStressFactor = HertzStressatPinHoleFactors[unit][HertzStressatPinHoleUnits.indexOf(HertzStressatPinHoleSelectedUnit)];
        let newValue = parseFloat(HertzStressatPinHole) / AllowableBearingStressFactor;
        newValue = HertzStressatPinHoleFormatValue(newValue, unit);
        setHertzStressatPinHoleSelectedUnit(unit);
        setHertzStressatPinHole(newValue);
    };

    const calculateHertzStressatPinHoleValue = () => {
        const LoadonPadeye = parseFloat(LoadonPadeyeValueInMT);
        const DLF = parseFloat(DLFValue)
        const pd = LoadonPadeye * DLF;
        const t = parseFloat(internalThicknessofMainPlateValue);
        const tc = parseFloat(internalThicknessofCheekPlateInputValue);
        const D38 = pd / (t + 2 * tc);
        const D39 = parseFloat(ModulusofElasticityValueInMpa);
        const D40 = parseFloat(PoissonsRatio);
        const D41 = parseFloat(internalDiameterofeyepinholeValue)
        const D42 = parseFloat(internalShacklePinDiameter)
        const HertzStressatPinHole = (Math.sqrt(D38 * 9810 * D39 * (D41 - D42) / (PI * (1 - Math.pow(D40, 2)) * D41 * D42))).toFixed(3);
        // SQRT(D38*9810*D39*(D41-D42)/(PI()*(1-D40^2)*D41*D42))
        setHertzStressatPinHole(HertzStressatPinHole);
    };
    const HertzStressatPinHoleFormatValue = (value, unit) => {
        const floatValue = parseFloat(value);
        if (unit === 'Mpa') {
            return floatValue.toFixed(3);
        } else {
            if (floatValue >= 1000) {
                return floatValue.toExponential(5);
            }
            return floatValue.toFixed(3);
        }
    };

    useEffect(() => {
        calculateHertzStressatPinHoleValue();
    }, [LoadonPadeyeValueInMT, DLFValue, internalThicknessofMainPlateValue, internalThicknessofCheekPlateInputValue, ModulusofElasticityValueInMpa, PoissonsRatio, internalDiameterofeyepinholeValue, internalShacklePinDiameter]);

    // Stress Checks at Base Plate
    // Tensile Stress Check


    const TensileAreaUnits = ['mm²', 'cm²'];
    const TensileAreaFactors = {
        'mm²': [1, 0.01],
        'cm²': [100, 1],
    };

    const [TensileArea, setTensileArea] = useState('');
    const [TensileAreaSelectedUnit, setTensileAreaSelected] = useState('mm²');

    const handleTensileAreaUnitChange = (unit) => {
        setTensileAreaSelected(unit);
        const TensileAreaFactor = TensileAreaFactors[unit][TensileAreaUnits.indexOf(TensileAreaSelectedUnit)];
        setTensileArea((parseFloat(TensileArea) / TensileAreaFactor));
    };

    const calculateTensileAreaValue = () => {
        const L = parseFloat(internalLengthofBasePlateInputValue)
        const T = parseFloat(internalThicknessofMainPlateValue)
        const TensileArea = L * T;
        setTensileArea(TensileArea);
    };
    useEffect(() => {
        calculateTensileAreaValue();
    }, [internalLengthofBasePlateInputValue, internalThicknessofMainPlateValue]);


    // TensileStressatBaseActual


    const TensileStressatBaseActualUnits = ['Mpa', 'Pa'];
    const TensileStressatBaseActualFactors = {
        Mpa: [1, 1e6],
        Pa: [1e-6, 1],
    };

    const [TensileStressatBaseActual, setTensileStressatBaseActual] = useState('');
    const [TensileStressatBaseActualSelectedUnit, setTensileStressatBaseActualSelectedUnit] = useState('Mpa');

    const handleTensileStressatBaseActualUnitChange = (unit) => {
        const AllowableBendingStressInPlaneFactor = TensileStressatBaseActualFactors[unit][TensileStressatBaseActualUnits.indexOf(TensileStressatBaseActualSelectedUnit)];
        let newValue = parseFloat(TensileStressatBaseActual) / AllowableBendingStressInPlaneFactor;
        newValue = TensileStressatBaseActualValue(newValue, unit);
        setTensileStressatBaseActualSelectedUnit(unit);
        setTensileStressatBaseActual(newValue);
    };

    const calculateTensileStressatBaseActualValue = () => {
        const LoadonPadeye = LoadonPadeyeValueInMT
        const multiplyValue = Math.cos(AngleofLoadwithVerticalvalue * Math.PI / 180);
        const LoadinVerticalDirectionZdirectionValue = LoadonPadeye * multiplyValue;
        const DLF = parseFloat(DLFValue);
        const ValueofDesignLoadinVerticalDirectionZdirection = LoadinVerticalDirectionZdirectionValue * DLF;
        const pt = parseFloat(ValueofDesignLoadinVerticalDirectionZdirection)
        const L = parseFloat(internalLengthofBasePlateInputValue)
        const T = parseFloat(internalThicknessofMainPlateValue)
        const TensileAreavalue = L * T;
        const atb = parseFloat(TensileAreavalue)
        const TensileStressatBaseActual = pt * 9810 / atb;
        setTensileStressatBaseActual(TensileStressatBaseActual);
    };

    const TensileStressatBaseActualValue = (value, unit) => {
        const floatValue = parseFloat(value);
        if (unit === 'Mpa') {
            return floatValue.toFixed(3);
        } else {
            if (floatValue >= 1000) {
                return floatValue.toExponential(4);
            }
            return floatValue.toFixed(3);
        }
    };

    useEffect(() => {
        calculateTensileStressatBaseActualValue();
    }, [internalLengthofBasePlateInputValue, internalThicknessofMainPlateValue, LoadonPadeyeValueInMT, DLFValue]);


    // Moment lever for Horizontal/Lateral Force

    const MomentleverforHorizontalLateralForceUnits = ['mm', 'cm'];
    const MomentleverforHorizontalLateralForceFactors = {
        mm: [1, 0.1],
        cm: [10, 1],
    };

    const [MomentleverforHorizontalLateralForce, setMomentleverforHorizontalLateralForce] = useState('');
    const [MomentleverforHorizontalLateralForceSelectedUnit, setMomentleverforHorizontalLateralForceSelectedUnit] = useState('mm');

    const handleMomentleverforHorizontalLateralForceUnitChange = (unit) => {
        setMomentleverforHorizontalLateralForceSelectedUnit(unit);
        const MomentleverforHorizontalLateralForceFactor = MomentleverforHorizontalLateralForceFactors[unit][MomentleverforHorizontalLateralForceUnits.indexOf(MomentleverforHorizontalLateralForceSelectedUnit)];
        setMomentleverforHorizontalLateralForce((parseFloat(MomentleverforHorizontalLateralForce) / MomentleverforHorizontalLateralForceFactor).toFixed(2));
    };

    const calculateMomentleverforHorizontalLateralForceValue = () => {
        const H = parseFloat(internalinputTotalHeightofPadeyeValue)
        const R = parseFloat(internalRadiusofMainPlateValue)
        const MomentleverforHorizontalLateralForce = (H - R).toFixed(2);
        setMomentleverforHorizontalLateralForce(MomentleverforHorizontalLateralForce);
    };
    useEffect(() => {
        calculateMomentleverforHorizontalLateralForceValue();
    }, [internalinputTotalHeightofPadeyeValue, internalRadiusofMainPlateValue]);



    const MomentleverforVerticalForceUnits = ['mm', 'cm'];
    const MomentleverforVerticalForceFactors = {
        mm: [1, 0.1],
        cm: [10, 1],
    };

    const [MomentleverforVerticalForce, setMomentleverforVerticalForce] = useState('');
    const [MomentleverforVerticalForceSelectedUnit, setMomentleverforVerticalForceSelectedUnit] = useState('mm');

    const handleMomentleverforVerticalForceUnitChange = (unit) => {
        setMomentleverforVerticalForceSelectedUnit(unit);
        const MomentleverforVerticalForceFactor = MomentleverforVerticalForceFactors[unit][MomentleverforVerticalForceUnits.indexOf(MomentleverforVerticalForceSelectedUnit)];
        setMomentleverforVerticalForce((parseFloat(MomentleverforVerticalForce) / MomentleverforVerticalForceFactor).toFixed(2));
    };

    const calculateMomentleverforVerticalForceValue = () => {
        const L = parseFloat(internalLengthofBasePlateInputValue)
        const R = parseFloat(internalRadiusofMainPlateValue)
        const MomentleverforVerticalForce = (R - (L / 2)).toFixed(2);
        setMomentleverforVerticalForce(MomentleverforVerticalForce);
    };
    useEffect(() => {
        calculateMomentleverforVerticalForceValue();
    }, [internalLengthofBasePlateInputValue, internalRadiusofMainPlateValue]);



    // TotalDesignMomentaboutXaxisInplane
    const TotalDesignMomentaboutXaxisInplaneUnits = ['MT-Mm'];
    const TotalDesignMomentaboutXaxisInplaneFactors = {
        'MT-mm': [1]
    };

    const [TotalDesignMomentaboutXaxisInplane, setTotalDesignMomentaboutXaxisInplane] = useState('');
    const [TotalDesignMomentaboutXaxisInplaneSelectedUnit, setTotalDesignMomentaboutXaxisInplaneSelectedUnit] = useState('MT-mm');

    const handleTotalDesignMomentaboutXaxisInplaneUnitChange = (unit) => {
        setTotalDesignMomentaboutXaxisInplaneSelectedUnit(unit);
        const MomentleverforVerticalForceFactor = TotalDesignMomentaboutXaxisInplaneFactors[unit][TotalDesignMomentaboutXaxisInplaneUnits.indexOf(TotalDesignMomentaboutXaxisInplaneSelectedUnit)];
        setTotalDesignMomentaboutXaxisInplane((parseFloat(TotalDesignMomentaboutXaxisInplane) / MomentleverforVerticalForceFactor));
    };

    const calculateTotalDesignMomentaboutXaxisInplaneValue = () => {
        const DLF = parseFloat(DLFValue);
        const H = parseFloat(internalinputTotalHeightofPadeyeValue)
        const R = parseFloat(internalRadiusofMainPlateValue)
        const L = parseFloat(internalLengthofBasePlateInputValue)
        const pi = Math.PI;

        const LoadinHorizontalDirectionYdirectionMultipleValue = Math.sin(AngleofLoadwithVerticalvalue * pi / 180) * Math.cos(OutofPlaneAngleValue * pi / 180);
        const LoadinHorizontalDirectionYdirection = (LoadonPadeyeValueInMT * LoadinHorizontalDirectionYdirectionMultipleValue);
        const D6 = (LoadinHorizontalDirectionYdirection * DLFValue)

        const LoadonPadeye = LoadonPadeyeValueInMT
        const multiplyValue = Math.cos(AngleofLoadwithVerticalvalue * (Math.PI / 180));
        const LoadinVerticalDirectionZdirectionValue = LoadonPadeye * multiplyValue;
        const D7 = (LoadinVerticalDirectionZdirectionValue * DLF).toFixed(2)

        const D9 = (H - R).toFixed(2)

        const D10 = (R - (L / 2)).toFixed(2)
        // const TotalDesignMomentaboutXaxisInplane = D6
        const TotalDesignMomentaboutXaxisInplane = (D6 * D9 + D7 * D10).toFixed(2)
        setTotalDesignMomentaboutXaxisInplane(TotalDesignMomentaboutXaxisInplane);
    };
    useEffect(() => {
        calculateTotalDesignMomentaboutXaxisInplaneValue();
    }, [DLFValue, internalinputTotalHeightofPadeyeValue, internalRadiusofMainPlateValue, internalLengthofBasePlateInputValue, LoadonPadeyeValueInMT, AngleofLoadwithVerticalvalue, OutofPlaneAngleValue]);


    // Section Modulus of Base about X-axis


    const SectionModulusofBaseaboutXaxisUnits = ['mm³', 'cm³'];
    const SectionModulusofBaseaboutXaxisFactors = {
        'mm³': [1, 0.001],
        'cm³': [1000, 1],
    };

    const [SectionModulusofBaseaboutXaxis, setSectionModulusofBaseaboutXaxis] = useState('');
    const [SectionModulusofBaseaboutXaxisSelectedUnit, setSectionModulusofBaseaboutXaxisSelectedUnit] = useState('mm³');

    const handleSectionModulusofBaseaboutXaxisUnitChange = (unit) => {
        setSectionModulusofBaseaboutXaxisSelectedUnit(unit);
        const SectionModulusofBaseaboutXaxisFactor = SectionModulusofBaseaboutXaxisFactors[unit][SectionModulusofBaseaboutXaxisUnits.indexOf(SectionModulusofBaseaboutXaxisSelectedUnit)];
        setSectionModulusofBaseaboutXaxis((parseFloat(SectionModulusofBaseaboutXaxis) / SectionModulusofBaseaboutXaxisFactor).toFixed(2));
    };

    const calculateSectionModulusofBaseaboutXaxisValue = () => {
        const L = parseFloat(internalLengthofBasePlateInputValue)
        const T = parseFloat(internalThicknessofMainPlateValue)
        const SectionModulusofBaseaboutXaxis = T * Math.pow(L, 2) / 6;
        setSectionModulusofBaseaboutXaxis(SectionModulusofBaseaboutXaxis.toFixed(2));
    };
    useEffect(() => {
        calculateSectionModulusofBaseaboutXaxisValue();
    }, [DesignLoadinHorizontalDirectionYdirection, MomentleverforHorizontalLateralForce, DesignLoadinVerticalDirectionZdirection, MomentleverforVerticalForce, internalLengthofBasePlateInputValue]);



    const BendingStressActualaboutXaxisInplaneUnits = ['Mpa', 'Pa'];
    const BendingStressActualaboutXaxisInplaneFactors = {
        Mpa: [1, 1e6],
        Pa: [1e-6, 1],
    };

    const [BendingStressActualaboutXaxisInplane, setBendingStressActualaboutXaxisInplane] = useState('');
    const [BendingStressActualaboutXaxisInplaneSelectedUnit, setBendingStressActualaboutXaxisInplaneSelectedUnit] = useState('Mpa');

    const handleBendingStressActualaboutXaxisInplaneUnitChange = (unit) => {
        const AllowableBendingStressInPlaneFactor = BendingStressActualaboutXaxisInplaneFactors[unit][BendingStressActualaboutXaxisInplaneUnits.indexOf(BendingStressActualaboutXaxisInplaneSelectedUnit)];
        let newValue = parseFloat(BendingStressActualaboutXaxisInplane) / AllowableBendingStressInPlaneFactor;
        newValue = BendingStressActualaboutXaxisInplaneValue(newValue, unit);
        setBendingStressActualaboutXaxisInplaneSelectedUnit(unit);
        setBendingStressActualaboutXaxisInplane(newValue);
    };

    const calculateBendingStressActualaboutXaxisInplaneValue = () => {
        const H = parseFloat(internalinputTotalHeightofPadeyeValue)
        const R = parseFloat(internalRadiusofMainPlateValue)
        const pi = Math.PI;
        const LoadinHorizontalDirectionYdirectionMultipleValue = Math.sin(AngleofLoadwithVerticalvalue * pi / 180) * Math.cos(OutofPlaneAngleValue * pi / 180);
        const LoadinHorizontalDirectionYdirection = (LoadonPadeyeValueInMT * LoadinHorizontalDirectionYdirectionMultipleValue).toFixed(1);
        const pyd = (LoadinHorizontalDirectionYdirection * DLFValue).toFixed(2)
        const LoadonPadeye = LoadonPadeyeValueInMT
        const multiplyValue = Math.cos(AngleofLoadwithVerticalvalue * Math.PI / 180);
        const LoadinVerticalDirectionZdirectionValue = LoadonPadeye * multiplyValue;
        const DLF = parseFloat(DLFValue);
        const h = H - R
        const pzd = LoadinVerticalDirectionZdirectionValue * DLF;
        const L = parseFloat(internalLengthofBasePlateInputValue)
        const MomentleverforVerticalForce = R - (L / 2);
        const e = parseFloat(MomentleverforVerticalForce)
        const Mdxx = pyd * h + pzd * e;
        // const L = parseFloat(internalLengthofBasePlateInputValue)
        const T = parseFloat(internalThicknessofMainPlateValue)
        const Zbxx = T * Math.pow(L, 2) / 6;
        const BendingStressActualaboutXaxisInplane = Mdxx * 9810 / Zbxx;
        setBendingStressActualaboutXaxisInplane(BendingStressActualaboutXaxisInplane.toFixed(2));
    };

    const BendingStressActualaboutXaxisInplaneValue = (value, unit) => {
        const floatValue = parseFloat(value);
        if (unit === 'Mpa') {
            return floatValue.toFixed(2);
        } else {
            if (floatValue >= 1000) {
                return floatValue.toExponential(2);
            }
            return floatValue.toFixed(2);
        }
    };

    useEffect(() => {
        calculateBendingStressActualaboutXaxisInplaneValue();
    }, [TotalDesignMomentaboutXaxisInplane, internalThicknessofMainPlateValue, OutofPlaneAngleValue, internalinputTotalHeightofPadeyeValue, internalRadiusofMainPlateValue, DLFValue, internalLengthofBasePlateInputValue, MomentleverforVerticalForce]);


    // }, []);


    // Total Design Moment about Y-axis (Out-of Plane)

    const TotalDesignMomentaboutYaxisOutofPlaneUnits = ['MT-Mm'];
    const TotalDesignMomentaboutYaxisOutofPlaneFactors = {
        'MT-mm': [1]
    };

    const [TotalDesignMomentaboutYaxisOutofPlane, setTotalDesignMomentaboutYaxisOutofPlane] = useState('');
    const [TotalDesignMomentaboutYaxisOutofPlaneSelectedUnit, setTotalDesignMomentaboutYaxisOutofPlaneSelectedUnit] = useState('MT-Mm');

    const handleTotalDesignMomentaboutYaxisOutofPlaneUnitChange = (unit) => {
        setTotalDesignMomentaboutYaxisOutofPlaneSelectedUnit(unit);
        const TotalDesignMomentaboutYaxisOutofPlaneFactor = TotalDesignMomentaboutYaxisOutofPlaneFactors[unit][TotalDesignMomentaboutYaxisOutofPlaneUnits.indexOf(TotalDesignMomentaboutYaxisOutofPlaneSelectedUnit)];
        setTotalDesignMomentaboutYaxisOutofPlane((parseFloat(TotalDesignMomentaboutYaxisOutofPlane) / TotalDesignMomentaboutYaxisOutofPlaneFactor));
    };

    const calculateTotalDesignMomentaboutYaxisOutofPlaneValue = () => {
        const LoadonPadeye = parseFloat(LoadonPadeyeValueInMT)
        const DLF = parseFloat(DLFValue);
        const pi = Math.PI;
        const H = parseFloat(internalinputTotalHeightofPadeyeValue)
        const R = parseFloat(internalRadiusofMainPlateValue)
        const Hvalue = H - R;
        const PadEyeDesignLoadvalue = LoadonPadeye * DLF;
        const OutofplaneLoadLateralLoadXdirectionMultiplyValue = Math.sin(AngleofLoadwithVerticalvalue * pi / 180) * Math.sin(OutofPlaneAngleValue * pi / 180)
        const OutofplaneLoadLateralLoadXdirection = LoadonPadeye * OutofplaneLoadLateralLoadXdirectionMultiplyValue;
        const pxd = (OutofplaneLoadLateralLoadXdirection * DLF) + (0.05 * PadEyeDesignLoadvalue)
        const h = parseFloat(Hvalue)
        const TotalDesignMomentaboutYaxisOutofPlane = (pxd * h).toFixed(3);
        setTotalDesignMomentaboutYaxisOutofPlane(TotalDesignMomentaboutYaxisOutofPlane);
    };
    useEffect(() => {
        calculateTotalDesignMomentaboutYaxisOutofPlaneValue();
    }, [DesignLoadOutofPlaneLateralXdirection, MomentleverforHorizontalLateralForce, LoadonPadeyeValueInMT, DLFValue, internalinputTotalHeightofPadeyeValue, internalRadiusofMainPlateValue]);

    // Section Modulus of Base about Y-axis 

    const SectionModulusofBaseaboutYaxisUnits = ['mm³', 'cm³'];
    const SectionModulusofBaseaboutYaxisFactors = {
        'mm³': [1, 0.001],
        'cm³': [1000, 1],
    };

    const [SectionModulusofBaseaboutYaxis, setSectionModulusofBaseaboutYaxis] = useState('');
    const [SectionModulusofBaseaboutYaxisSelectedUnit, setSectionModulusofBaseaboutYaxisSelectedUnit] = useState('mm³');

    const handleSectionModulusofBaseaboutYaxisUnitChange = (unit) => {
        setSectionModulusofBaseaboutYaxisSelectedUnit(unit);
        const SectionModulusofBaseaboutYaxisFactor = SectionModulusofBaseaboutYaxisFactors[unit][SectionModulusofBaseaboutYaxisUnits.indexOf(SectionModulusofBaseaboutYaxisSelectedUnit)];
        setSectionModulusofBaseaboutYaxis((parseFloat(SectionModulusofBaseaboutYaxis) / SectionModulusofBaseaboutYaxisFactor));
    };

    const calculateSectionModulusofBaseaboutYaxisValue = () => {
        const L = parseFloat(internalLengthofBasePlateInputValue)
        const T = parseFloat(internalThicknessofMainPlateValue)
        const SectionModulusofBaseaboutYaxis = L * Math.pow(T, 2) / 6;
        setSectionModulusofBaseaboutYaxis(SectionModulusofBaseaboutYaxis);
    };
    useEffect(() => {
        calculateSectionModulusofBaseaboutYaxisValue();
    }, [internalLengthofBasePlateInputValue, internalThicknessofMainPlateValue]);


    // Bending Stress (Actual) - about Y-axis (Out-of-Plane)
    const BendingStressActualaboutYaxisOutofPlaneUnit = ['Mpa', 'Pa'];
    const BendingStressActualaboutYaxisOutofPlaneFactors = {
        Mpa: [1, 1e6],
        Pa: [1e-6, 1],
    };

    const [BendingStressActualaboutYaxisOutofPlane, setBendingStressActualaboutYaxisOutofPlane] = useState('');
    const [BendingStressActualaboutYaxisOutofPlaneSelectedUnit, setBendingStressActualaboutYaxisOutofPlaneSelectedUnit] = useState('Mpa');

    const handleBendingStressActualaboutYaxisOutofPlaneUnitChange = (unit) => {
        const AllowableBendingStressInPlaneFactor = BendingStressActualaboutYaxisOutofPlaneFactors[unit][BendingStressActualaboutYaxisOutofPlaneUnit.indexOf(BendingStressActualaboutYaxisOutofPlaneSelectedUnit)];
        let newValue = parseFloat(BendingStressActualaboutYaxisOutofPlane) / AllowableBendingStressInPlaneFactor;
        newValue = BendingStressActualaboutYaxisOutofPlaneValue(newValue, unit);
        setBendingStressActualaboutYaxisOutofPlaneSelectedUnit(unit);
        setBendingStressActualaboutYaxisOutofPlane(newValue);
    };

    const calculateBendingStressActualaboutYaxisOutofPlaneValue = () => {
        const L = parseFloat(internalLengthofBasePlateInputValue)
        const T = parseFloat(internalThicknessofMainPlateValue)
        const LoadonPadeye = parseFloat(LoadonPadeyeValueInMT)
        const DLF = parseFloat(DLFValue);
        if (!isNaN(L) && !isNaN(T) && !isNaN(LoadonPadeye) && !isNaN(DLF)) {
            const h = parseFloat(MomentleverforHorizontalLateralForce)
            const pi = Math.PI;
            const PadEyeDesignLoadvalue = LoadonPadeye * DLF;
            const OutofplaneLoadLateralLoadXdirectionMultiplyValue = Math.sin(AngleofLoadwithVerticalvalue * pi / 180) * Math.sin(OutofPlaneAngleValue * pi / 180)
            const OutofplaneLoadLateralLoadXdirection = LoadonPadeye * OutofplaneLoadLateralLoadXdirectionMultiplyValue;
            const pxd = (OutofplaneLoadLateralLoadXdirection * DLF) + (0.05 * PadEyeDesignLoadvalue)
            const Mdyy = pxd * h
            const Zbyy = L * Math.pow(T, 2) / 6
            const BendingStressActualaboutYaxisOutofPlane = Mdyy * 9810 / Zbyy;
            setBendingStressActualaboutYaxisOutofPlane(BendingStressActualaboutYaxisOutofPlane.toFixed(2));
        }
    };

    const BendingStressActualaboutYaxisOutofPlaneValue = (value, unit) => {
        const floatValue = parseFloat(value);
        if (unit === 'Mpa') {
            return floatValue.toFixed(3);
        } else {
            if (floatValue >= 1000) {
                return floatValue.toExponential(4);
            }
            return floatValue.toFixed(3);
        }
    };

    useEffect(() => {
        calculateBendingStressActualaboutYaxisOutofPlaneValue();
    }, [internalLengthofBasePlateInputValue, internalThicknessofMainPlateValue, LoadonPadeyeValueInMT, DLFValue,]);

    // Shear Stress Check at Base

    // Shear Area at Base (Horizontal)
    // ShearAreaatBaseHorizontal
    const ShearAreaatBaseHorizontalUnit = ['mm²', 'cm²'];
    const ShearAreaatBaseHorizontalFactors = {
        'mm²': [1, 0.01],
        'cm²': [100, 1],
    };

    const [ShearAreaatBaseHorizontal, setShearAreaatBaseHorizontal] = useState('');
    const [ShearAreaatBaseHorizontalSelectedUnit, setShearAreaatBaseHorizontalSelectedUnit] = useState('mm²');

    const handleShearAreaatBaseHorizontalUnitChange = (unit) => {
        setShearAreaatBaseHorizontalSelectedUnit(unit);
        const ShearAreaatBaseHorizontalFactor = ShearAreaatBaseHorizontalFactors[unit][ShearAreaatBaseHorizontalUnit.indexOf(ShearAreaatBaseHorizontalSelectedUnit)];
        setShearAreaatBaseHorizontal((parseFloat(ShearAreaatBaseHorizontal) / ShearAreaatBaseHorizontalFactor));
    };

    const calculateShearAreaatBaseHorizontalValue = () => {
        const L = parseFloat(internalLengthofBasePlateInputValue)
        const T = parseFloat(internalThicknessofMainPlateValue)
        const ShearAreaatBaseHorizontal = L * T;
        setShearAreaatBaseHorizontal(ShearAreaatBaseHorizontal);
    };
    useEffect(() => {
        calculateShearAreaatBaseHorizontalValue();
    }, [internalLengthofBasePlateInputValue, internalThicknessofMainPlateValue]);


    // Shear Stress at Base (Actual) - Horizontal (Y direction)
    // ShearStressatBaseActualHorizontalYdirection
    const ShearStressatBaseActualHorizontalYdirectionUnit = ['Mpa', 'Pa'];
    const ShearStressatBaseActualHorizontalYdirectionFactors = {
        Mpa: [1, 1e6],
        Pa: [1e-6, 1],
    };

    const [ShearStressatBaseActualHorizontalYdirection, setShearStressatBaseActualHorizontalYdirection] = useState('');
    const [ShearStressatBaseActualHorizontalYdirectionSelectedUnit, setShearStressatBaseActualHorizontalYdirectionSelectedUnit] = useState('Mpa');

    const handleShearStressatBaseActualHorizontalYdirectionUnitChange = (unit) => {
        const AllowableBendingStressInPlaneFactor = ShearStressatBaseActualHorizontalYdirectionFactors[unit][ShearStressatBaseActualHorizontalYdirectionUnit.indexOf(ShearStressatBaseActualHorizontalYdirectionSelectedUnit)];
        let newValue = parseFloat(ShearStressatBaseActualHorizontalYdirection) / AllowableBendingStressInPlaneFactor;
        newValue = ShearStressatBaseActualHorizontalYdirectionValue(newValue, unit);
        setShearStressatBaseActualHorizontalYdirectionSelectedUnit(unit);
        setShearStressatBaseActualHorizontalYdirection(newValue);
    };

    const calculateShearStressatBaseActualHorizontalYdirectionValue = () => {
        const pi = Math.PI;
        const LoadinHorizontalDirectionYdirectionMultipleValue = Math.sin(AngleofLoadwithVerticalvalue * pi / 180) * Math.cos(OutofPlaneAngleValue * pi / 180);
        const LoadinHorizontalDirectionYdirection = (LoadonPadeyeValueInMT * LoadinHorizontalDirectionYdirectionMultipleValue).toFixed(1);
        const pyd = (LoadinHorizontalDirectionYdirection * DLFValue).toFixed(2)
        const L = parseFloat(internalLengthofBasePlateInputValue)
        const T = parseFloat(internalThicknessofMainPlateValue)
        const asb = L * T
        const ShearStressatBaseActualHorizontalYdirection = (pyd * 9810 / asb).toFixed(3);
        setShearStressatBaseActualHorizontalYdirection(ShearStressatBaseActualHorizontalYdirection, OutofPlaneAngleValue);
    };

    const ShearStressatBaseActualHorizontalYdirectionValue = (value, unit) => {
        const floatValue = parseFloat(value);
        if (unit === 'Mpa') {
            return floatValue.toFixed(3);
        } else {
            if (floatValue >= 1000) {
                return floatValue.toExponential(4);
            }
            return floatValue.toFixed(3);
        }
    };

    useEffect(() => {
        calculateShearStressatBaseActualHorizontalYdirectionValue();
    }, [internalLengthofBasePlateInputValue, ShearAreaatBaseHorizontal, DLFValue, LoadonPadeyeValueInMT, internalThicknessofMainPlateValue]);

    // Shear Stress at Base (Actual) - Lateral (X direction)
    // ShearStressatBaseActualLateralXdirection
    const ShearStressatBaseActualLateralXdirectionUnits = ['Mpa', 'Pa'];
    const ShearStressatBaseActualLateralXdirectionFactors = {
        Mpa: [1, 1e6],
        Pa: [1e-6, 1],
    };

    const [ShearStressatBaseActualLateralXdirection, setShearStressatBaseActualLateralXdirection] = useState('');
    const [ShearStressatBaseActualLateralXdirectionSelectedUnit, setShearStressatBaseActualLateralXdirectionSelectedUnit] = useState('Mpa');

    const handleShearStressatBaseActualLateralXdirectionUnitChange = (unit) => {
        const AllowableBendingStressInPlaneFactor = ShearStressatBaseActualLateralXdirectionFactors[unit][ShearStressatBaseActualLateralXdirectionUnits.indexOf(ShearStressatBaseActualLateralXdirectionSelectedUnit)];
        let newValue = parseFloat(ShearStressatBaseActualLateralXdirection) / AllowableBendingStressInPlaneFactor;
        newValue = ShearStressatBaseActualLateralXdirectionValue(newValue, unit);
        setShearStressatBaseActualLateralXdirectionSelectedUnit(unit);
        setShearStressatBaseActualLateralXdirection(newValue);
    };

    const calculateShearStressatBaseActualLateralXdirectionValue = () => {
        const LoadonPadeye = parseFloat(LoadonPadeyeValueInMT)
        const DLF = parseFloat(DLFValue);
        const pi = Math.PI;
        const PadEyeDesignLoadvalue = LoadonPadeyeValueInMT * DLF;
        const OutofplaneLoadLateralLoadXdirectionMultiplyValue = Math.sin(AngleofLoadwithVerticalvalue * pi / 180) * Math.sin(OutofPlaneAngleValue * pi / 180)
        const OutofplaneLoadLateralLoadXdirection = LoadonPadeye * OutofplaneLoadLateralLoadXdirectionMultiplyValue;
        const pxd = (OutofplaneLoadLateralLoadXdirection * DLF) + (0.05 * PadEyeDesignLoadvalue);
        const L = parseFloat(internalLengthofBasePlateInputValue)
        const T = parseFloat(internalThicknessofMainPlateValue)
        const asb = L * T
        const ShearStressatBaseActualLateralXdirection = (pxd * 9810 / asb).toFixed(2);
        setShearStressatBaseActualLateralXdirection(ShearStressatBaseActualLateralXdirection);
    };

    const ShearStressatBaseActualLateralXdirectionValue = (value, unit) => {
        const floatValue = parseFloat(value);
        if (unit === 'Mpa') {
            return floatValue.toFixed(2);
        } else {
            if (floatValue >= 1000) {
                return floatValue.toExponential(3);
            }
            return floatValue.toFixed(2);
        }
    };

    useEffect(() => {
        calculateShearStressatBaseActualLateralXdirectionValue();
    }, [
        LoadonPadeyeValueInMT, DLFValue, AngleofLoadwithVerticalvalue, OutofPlaneAngleValue, internalLengthofBasePlateInputValue, internalThicknessofMainPlateValue,]);

    // DesignLoadOutofPlaneLateralXdirection

    const VonMisesStressatBaseActualUnits = ['Mpa', 'Pa'];
    const VonMisesStressatBaseActualFactors = {
        Mpa: [1, 1e6],
        Pa: [1e-6, 1],
    };

    const [VonMisesStressatBaseActual, setVonMisesStressatBaseActual] = useState('');
    const [VonMisesStressatBaseActualSelectedUnit, setVonMisesStressatBaseActualSelectedUnit] = useState('Mpa');

    const handleVonMisesStressatBaseActualUnitChange = (unit) => {
        const AllowableBendingStressInPlaneFactor = VonMisesStressatBaseActualFactors[unit][VonMisesStressatBaseActualUnits.indexOf(VonMisesStressatBaseActualSelectedUnit)];
        let newValue = parseFloat(VonMisesStressatBaseActual) / AllowableBendingStressInPlaneFactor;
        newValue = VonMisesStressatBaseActualValue(newValue, unit);
        setVonMisesStressatBaseActualSelectedUnit(unit);
        setVonMisesStressatBaseActual(newValue);
    };

    const calculateVonMisesStressatBaseActualValue = () => {
        const LoadonPadeye = LoadonPadeyeValueInMT
        const multiplyValue = Math.cos(AngleofLoadwithVerticalvalue * Math.PI / 180);
        const LoadinVerticalDirectionZdirectionValue = LoadonPadeye * multiplyValue;
        const DLF = parseFloat(DLFValue);
        const ValueofDesignLoadinVerticalDirectionZdirection = LoadinVerticalDirectionZdirectionValue * DLF;
        const pt = parseFloat(ValueofDesignLoadinVerticalDirectionZdirection)
        const L = parseFloat(internalLengthofBasePlateInputValue)
        const T = parseFloat(internalThicknessofMainPlateValue)
        const TensileAreavalue = L * T;
        const atb = parseFloat(TensileAreavalue)
        const TensileStressatBaseActualValue = pt * 9810 / atb;
        const sigmaTb = parseFloat(TensileStressatBaseActualValue)

        const H = parseFloat(internalinputTotalHeightofPadeyeValue)
        const R = parseFloat(internalRadiusofMainPlateValue)
        const pi = Math.PI;
        const LoadinHorizontalDirectionYdirectionMultipleValue = Math.sin(AngleofLoadwithVerticalvalue * pi / 180) * Math.cos(OutofPlaneAngleValue * pi / 180);
        const LoadinHorizontalDirectionYdirection = (LoadonPadeyeValueInMT * LoadinHorizontalDirectionYdirectionMultipleValue).toFixed(1);
        const pyd = (LoadinHorizontalDirectionYdirection * DLFValue).toFixed(2)
        const h = H - R
        const pzd = LoadinVerticalDirectionZdirectionValue * DLF;
        const MomentleverforVerticalForce = R - (L / 2);
        const e = parseFloat(MomentleverforVerticalForce)
        const Mdxx = pyd * h + pzd * e;
        const Zbxx = T * Math.pow(L, 2) / 6;
        const BendingStressActualaboutXaxisInplane = Mdxx * 9810 / Zbxx;
        const sigmaBbx = parseFloat(BendingStressActualaboutXaxisInplane)

        const PadEyeDesignLoadvalue = LoadonPadeye * DLF;
        const OutofplaneLoadLateralLoadXdirectionMultiplyValue = Math.sin(AngleofLoadwithVerticalvalue * pi / 180) * Math.sin(OutofPlaneAngleValue * pi / 180)
        const OutofplaneLoadLateralLoadXdirection = LoadonPadeye * OutofplaneLoadLateralLoadXdirectionMultiplyValue;
        const pxd = (OutofplaneLoadLateralLoadXdirection * DLF) + (0.05 * PadEyeDesignLoadvalue)
        const Mdyy = pxd * h
        const Zbyy = L * Math.pow(T, 2) / 6
        const BendingStressActualaboutYaxisOutofPlane = Mdyy * 9810 / Zbyy;
        const sigmaBby = parseFloat(BendingStressActualaboutYaxisOutofPlane)

        const asb = L * T
        const ShearStressatBaseActualHorizontalYdirection = (pyd * 9810 / asb).toFixed(3);
        const tauSbx = parseFloat(ShearStressatBaseActualHorizontalYdirection)


        const ShearStressatBaseActualLateralXdirection = (pxd * 9810 / asb).toFixed(2);
        const tauSby = parseFloat(ShearStressatBaseActualLateralXdirection)

        const sigmaTerm = Math.pow(sigmaTb + sigmaBbx + sigmaBby, 2);
        const tauTerm = 3 * (Math.pow(tauSbx, 2) + Math.pow(tauSby, 2));
        const VonMisesStressatBaseActual = Math.sqrt(sigmaTerm + tauTerm);
        setVonMisesStressatBaseActual(VonMisesStressatBaseActual.toFixed(3));
    };

    const VonMisesStressatBaseActualValue = (value, unit) => {
        const floatValue = parseFloat(value);
        if (unit === 'Mpa') {
            return floatValue.toFixed(3);
        } else {
            if (floatValue >= 1000) {
                return floatValue.toExponential(4);
            }
            return floatValue.toFixed(3);
        }
    };

    useEffect(() => {
        calculateVonMisesStressatBaseActualValue();
    }, [internalLengthofBasePlateInputValue, internalThicknessofMainPlateValue, LoadonPadeyeValueInMT, DLFValue,]);

    // const VonMisesStressatBaseActualUnits = ['Mpa', 'Pa'];
    // const VonMisesStressatBaseActualFactors = {
    //     Mpa: [1, 0.000001],
    //     Pa: [1000000, 1],
    // };

    // const [VonMisesStressatBaseActual, setVonMisesStressatBaseActual] = useState('');
    // const [VonMisesStressatBaseActualSelectedUnit, setVonMisesStressatBaseActualSelectedUnit] = useState('Mpa');

    // const handleVonMisesStressatBaseActualUnitChange = (unit) => {
    //     setVonMisesStressatBaseActualSelectedUnit(unit);
    //     const VonMisesStressatBaseActualFactor = VonMisesStressatBaseActualFactors[unit][VonMisesStressatBaseActualUnits.indexOf(VonMisesStressatBaseActualSelectedUnit)];
    //     setVonMisesStressatBaseActual((parseFloat(VonMisesStressatBaseActual) / VonMisesStressatBaseActualFactor).toFixed(3));
    // };

    // const calculateVonMisesStressatBaseActualValue = () => {
    //     const LoadonPadeye = LoadonPadeyeValueInMT
    //     const multiplyValue = Math.cos(AngleofLoadwithVerticalvalue * Math.PI / 180);
    //     const LoadinVerticalDirectionZdirectionValue = LoadonPadeye * multiplyValue;
    //     const DLF = parseFloat(DLFValue);
    //     const ValueofDesignLoadinVerticalDirectionZdirection = LoadinVerticalDirectionZdirectionValue * DLF;
    //     const pt = parseFloat(ValueofDesignLoadinVerticalDirectionZdirection)
    //     const L = parseFloat(internalLengthofBasePlateInputValue)
    //     const T = parseFloat(internalThicknessofMainPlateValue)
    //     const TensileAreavalue = L * T;
    //     const atb = parseFloat(TensileAreavalue)
    //     const TensileStressatBaseActualValue = pt * 9810 / atb;
    //     const sigmaTb = parseFloat(TensileStressatBaseActualValue)

    //     const H = parseFloat(internalinputTotalHeightofPadeyeValue)
    //     const R = parseFloat(internalRadiusofMainPlateValue)
    //     const pi = Math.PI;
    //     const LoadinHorizontalDirectionYdirectionMultipleValue = Math.sin(AngleofLoadwithVerticalvalue * pi / 180) * Math.cos(OutofPlaneAngleValue * pi / 180);
    //     const LoadinHorizontalDirectionYdirection = (LoadonPadeyeValueInMT * LoadinHorizontalDirectionYdirectionMultipleValue).toFixed(1);
    //     const pyd = (LoadinHorizontalDirectionYdirection * DLFValue).toFixed(2)
    //     const h = H - R
    //     const pzd = LoadinVerticalDirectionZdirectionValue * DLF;
    //     const MomentleverforVerticalForce = R - (L / 2);
    //     const e = parseFloat(MomentleverforVerticalForce)
    //     const Mdxx = pyd * h + pzd * e;
    //     const Zbxx = T * Math.pow(L, 2) / 6;
    //     const BendingStressActualaboutXaxisInplane = Mdxx * 9810 / Zbxx;
    //     const sigmaBbx = parseFloat(BendingStressActualaboutXaxisInplane)

    //     const PadEyeDesignLoadvalue = LoadonPadeye * DLF;
    //     const OutofplaneLoadLateralLoadXdirectionMultiplyValue = Math.sin(AngleofLoadwithVerticalvalue * pi / 180) * Math.sin(OutofPlaneAngleValue * pi / 180)
    //     const OutofplaneLoadLateralLoadXdirection = LoadonPadeye * OutofplaneLoadLateralLoadXdirectionMultiplyValue;
    //     const pxd = (OutofplaneLoadLateralLoadXdirection * DLF) + (0.05 * PadEyeDesignLoadvalue)
    //     const Mdyy = pxd * h
    //     const Zbyy = L * Math.pow(T, 2) / 6
    //     const BendingStressActualaboutYaxisOutofPlane = Mdyy * 9810 / Zbyy;
    //     const sigmaBby = parseFloat(BendingStressActualaboutYaxisOutofPlane)

    //     const asb = L * T
    //     const ShearStressatBaseActualHorizontalYdirection = (pyd * 9810 / asb).toFixed(3);
    //     const tauSbx = parseFloat(ShearStressatBaseActualHorizontalYdirection)


    //     const ShearStressatBaseActualLateralXdirection = (pxd * 9810 / asb).toFixed(2);
    //     const tauSby = parseFloat(ShearStressatBaseActualLateralXdirection)

    //     const sigmaTerm = Math.pow(sigmaTb + sigmaBbx + sigmaBby, 2);
    //     const tauTerm = 3 * (Math.pow(tauSbx, 2) + Math.pow(tauSby, 2));
    //     const VonMisesStressatBaseActual = Math.sqrt(sigmaTerm + tauTerm);
    //     setVonMisesStressatBaseActual(VonMisesStressatBaseActual.toFixed(3));
    // };
    // useEffect(() => {
    //     calculateVonMisesStressatBaseActualValue();
    // }, [TensileStressatBaseActual, BendingStressActualaboutXaxisInplane, BendingStressActualaboutYaxisOutofPlane, ShearStressatBaseActualHorizontalYdirection, ShearStressatBaseActualLateralXdirection]);


    // Weld Stress Check of Base Weld
    // Weld Dimensions and Design Loads
    // Throatthickness
    const ThroatthicknessUnits = ['mm', 'cm'];
    const ThroatthicknessFactors = {
        mm: [1, 0.1],
        cm: [10, 1],
    };

    const [Throatthickness, setThroatthickness] = useState('');
    const [ThroatthicknessSelectedUnit, setThroatthicknessSelectedUnit] = useState('mm');

    const handleThroatthicknessUnitChange = (unit) => {
        setThroatthicknessSelectedUnit(unit);
        const ThroatthicknessFactor = ThroatthicknessFactors[unit][ThroatthicknessUnits.indexOf(ThroatthicknessSelectedUnit)];
        setThroatthickness((parseFloat(Throatthickness) / ThroatthicknessFactor).toFixed(2));
    };

    const calculateThroatthicknessValue = () => {
        const Throatthickness = (internalBaseWeldLegSize / Math.sqrt(2)).toFixed(2);
        setThroatthickness(Throatthickness);
    };
    useEffect(() => {
        calculateThroatthicknessValue();
    }, [internalDiameterofeyepinholeValue, internalShacklePinDiameter, internalBaseWeldLegSize]);


    // WeldCheckatCheekPlateWeld
    const WeldCheckatCheekPlateWeldThroatthicknessUnits = ['mm', 'cm'];
    const WeldCheckatCheekPlateWeldThroatthicknessFactors = {
        mm: [1, 0.1],
        cm: [10, 1],
    };

    const [WeldCheckatCheekPlateWeldThroatthickness, setWeldCheckatCheekPlateWeldThroatthickness] = useState('');
    const [WeldCheckatCheekPlateWeldThroatthicknessSelectedUnit, setWeldCheckatCheekPlateWeldThroatthicknessSelectedUnit] = useState('mm');

    const handleWeldCheckatCheekPlateWeldThroatthicknessUnitChange = (unit) => {
        setWeldCheckatCheekPlateWeldThroatthicknessSelectedUnit(unit);
        const WeldCheckatCheekPlateWeldThroatthicknessFactor = WeldCheckatCheekPlateWeldThroatthicknessFactors[unit][WeldCheckatCheekPlateWeldThroatthicknessUnits.indexOf(WeldCheckatCheekPlateWeldThroatthicknessSelectedUnit)];
        setWeldCheckatCheekPlateWeldThroatthickness((parseFloat(WeldCheckatCheekPlateWeldThroatthickness) / WeldCheckatCheekPlateWeldThroatthicknessFactor));
    };

    const calculateWeldCheckatCheekPlateWeldThroatthicknessValue = () => {
        const WeldCheckatCheekPlateWeldThroatthickness = (internalCheekPlateWeldLegSize / Math.sqrt(2)).toFixed(1);
        setWeldCheckatCheekPlateWeldThroatthickness(WeldCheckatCheekPlateWeldThroatthickness);
    };
    useEffect(() => {
        calculateWeldCheckatCheekPlateWeldThroatthicknessValue();
    }, [internalDiameterofeyepinholeValue, internalShacklePinDiameter, internalCheekPlateWeldLegSize]);



    // Total Weld Length
    const TotalWeldLengthUnits = ['mm', 'cm'];
    const TotalWeldLengthFactors = {
        mm: [1, 0.1],
        cm: [10, 1],
    };

    const [TotalWeldLength, setTotalWeldLength] = useState('');
    const [TotalWeldLengthSelectedUnit, setTotalWeldLengthSelectedUnit] = useState('mm');

    const handleTotalWeldLengthUnitChange = (unit) => {
        setTotalWeldLengthSelectedUnit(unit);
        const TotalWeldLengthFactor = TotalWeldLengthFactors[unit][TotalWeldLengthUnits.indexOf(TotalWeldLengthSelectedUnit)];
        setTotalWeldLength((parseFloat(TotalWeldLength) / TotalWeldLengthFactor));
    };

    const calculateTotalWeldLengthValue = () => {
        const L = parseFloat(internalLengthofBasePlateInputValue)
        const T = parseFloat(internalThicknessofMainPlateValue)
        const TotalWeldLength = (2 * L) + (2 * T)
        setTotalWeldLength(TotalWeldLength);
    };
    useEffect(() => {
        calculateTotalWeldLengthValue();
    }, [internalLengthofBasePlateInputValue, internalThicknessofMainPlateValue]);


    // Shear Stress at Base Weld

    const ShearStressatBaseWeldUnits = ['mm²', 'cm²'];
    const ShearStressatBaseWeldFactors = {
        'mm²': [1, 0.01],
        'cm²': [100, 1],
    };

    const [ShearStressatBaseWeld, setShearStressatBaseWeld] = useState('');
    const [ShearStressatBaseWeldSelectedUnit, setShearStressatBaseWeldSelectedUnit] = useState('mm²');

    const handleShearStressatBaseWeldUnitChange = (unit) => {
        setShearStressatBaseWeldSelectedUnit(unit);
        const ShearStressatBaseWeldFactor = ShearStressatBaseWeldFactors[unit][ShearStressatBaseWeldUnits.indexOf(ShearStressatBaseWeldSelectedUnit)];
        setShearStressatBaseWeld((parseFloat(ShearStressatBaseWeld) / ShearStressatBaseWeldFactor).toFixed(3));
    };

    const calculateShearStressatBaseWeldValue = () => {
        const squarerootof2 = Math.sqrt(2)
        const twt = internalBaseWeldLegSize / squarerootof2;
        const L = parseFloat(internalLengthofBasePlateInputValue)
        const T = parseFloat(internalThicknessofMainPlateValue)
        const Lw = (2 * L) + (2 * T)
        const ShearStressatBaseWeld = twt * Lw
        setShearStressatBaseWeld(ShearStressatBaseWeld.toFixed(3));
    };
    useEffect(() => {
        calculateShearStressatBaseWeldValue();
    }, [Throatthickness, TotalWeldLength, internalThicknessofMainPlateValue, internalLengthofBasePlateInputValue, internalBaseWeldLegSize]);


    // Shear Stress at Base Weld(Actual) - Horizontal (Y -direction)

    const ShearStressatBaseWeldActualHorizontalYdirectionUnits = ['Mpa', 'Pa'];
    const ShearStressatBaseWeldActualHorizontalYdirectionFactors = {
        Mpa: [1, 1e6],
        Pa: [1e-6, 1],
    };

    const [ShearStressatBaseWeldActualHorizontalYdirection, setShearStressatBaseWeldActualHorizontalYdirection] = useState('');
    const [ShearStressatBaseWeldActualHorizontalYdirectionSelectedUnit, setShearStressatBaseWeldActualHorizontalYdirectionSelectedUnit] = useState('Mpa');

    const handleShearStressatBaseWeldActualHorizontalYdirectionUnitChange = (unit) => {
        const AllowableBearingStressFactor = ShearStressatBaseWeldActualHorizontalYdirectionFactors[unit][ShearStressatBaseWeldActualHorizontalYdirectionUnits.indexOf(ShearStressatBaseWeldActualHorizontalYdirectionSelectedUnit)];
        let newValue = parseFloat(ShearStressatBaseWeldActualHorizontalYdirection) / AllowableBearingStressFactor;
        newValue = ShearStressatBaseWeldActualHorizontalYdirectionFormatValue(newValue, unit);
        setShearStressatBaseWeldActualHorizontalYdirectionSelectedUnit(unit);
        setShearStressatBaseWeldActualHorizontalYdirection(newValue);
    };

    const calculateShearStressatBaseWeldActualHorizontalYdirectionValue = () => {
        const pi = Math.PI
        const squarerootof2 = Math.sqrt(2)
        const L = parseFloat(internalLengthofBasePlateInputValue)
        const T = parseFloat(internalThicknessofMainPlateValue)
        const LoadinHorizontalDirectionYdirectionMultipleValue = Math.sin(AngleofLoadwithVerticalvalue * pi / 180) * Math.cos(OutofPlaneAngleValue * pi / 180);
        const LoadinHorizontalDirectionYdirection = LoadonPadeyeValueInMT * LoadinHorizontalDirectionYdirectionMultipleValue;
        const twt = internalBaseWeldLegSize / squarerootof2;
        const Lw = (2 * L) + (2 * T)
        const Asbw = twt * Lw
        const Pyd = LoadinHorizontalDirectionYdirection * DLFValue
        const ShearStressatBaseWeldActualHorizontalYdirection = ((Pyd * 9810) / Asbw).toFixed(2)
        setShearStressatBaseWeldActualHorizontalYdirection(ShearStressatBaseWeldActualHorizontalYdirection);
    };
    const ShearStressatBaseWeldActualHorizontalYdirectionFormatValue = (value, unit) => {
        const floatValue = parseFloat(value);
        if (unit === 'Mpa') {
            return floatValue.toFixed(2);
        } else {
            if (floatValue >= 1000) {
                return floatValue.toExponential(3);
            }
            return floatValue.toFixed(2);
        }
    };

    useEffect(() => {
        calculateShearStressatBaseWeldActualHorizontalYdirectionValue();
    }, [
        internalLengthofBasePlateInputValue, internalThicknessofMainPlateValue, AngleofLoadwithVerticalvalue, OutofPlaneAngleValue, internalBaseWeldLegSize, DLFValue,]);


    // const ShearStressatBaseWeldActualHorizontalYdirectionUnits = ['Mpa', 'Pa'];
    // const ShearStressatBaseWeldActualHorizontalYdirectionFactors = {
    //     Mpa: [1, 0.000001],
    //     Pa: [1000000, 1],
    // };

    // const [ShearStressatBaseWeldActualHorizontalYdirection, setShearStressatBaseWeldActualHorizontalYdirection] = useState('');
    // const [ShearStressatBaseWeldActualHorizontalYdirectionSelectedUnit, setShearStressatBaseWeldActualHorizontalYdirectionSelectedUnit] = useState('Mpa');

    // const handleShearStressatBaseWeldActualHorizontalYdirectionUnitChange = (unit) => {
    //     setShearStressatBaseWeldActualHorizontalYdirectionSelectedUnit(unit);
    //     const ShearStressatBaseWeldFactor = ShearStressatBaseWeldActualHorizontalYdirectionFactors[unit][ShearStressatBaseWeldActualHorizontalYdirectionUnits.indexOf(ShearStressatBaseWeldActualHorizontalYdirectionSelectedUnit)];
    //     setShearStressatBaseWeldActualHorizontalYdirection((parseFloat(ShearStressatBaseWeldActualHorizontalYdirection) / ShearStressatBaseWeldFactor).toFixed(3));
    // };

    // const calculateShearStressatBaseWeldActualHorizontalYdirectionValue = () => {
    //     const pi = Math.PI
    //     const squarerootof2 = Math.sqrt(2)
    //     const L = parseFloat(internalLengthofBasePlateInputValue)
    //     const T = parseFloat(internalThicknessofMainPlateValue)
    //     const LoadinHorizontalDirectionYdirectionMultipleValue = Math.sin(AngleofLoadwithVerticalvalue * pi / 180) * Math.cos(OutofPlaneAngleValue * pi / 180);
    //     const LoadinHorizontalDirectionYdirection = LoadonPadeyeValueInMT * LoadinHorizontalDirectionYdirectionMultipleValue;
    //     const twt = internalBaseWeldLegSize / squarerootof2;
    //     const Lw = (2 * L) + (2 * T)
    //     const Asbw = twt * Lw
    //     const Pyd = LoadinHorizontalDirectionYdirection * DLFValue
    //     const ShearStressatBaseWeldActualHorizontalYdirection = (Pyd * 9810) / Asbw
    //     setShearStressatBaseWeldActualHorizontalYdirection(ShearStressatBaseWeldActualHorizontalYdirection.toFixed(3));
    // };
    // useEffect(() => {
    //     calculateShearStressatBaseWeldActualHorizontalYdirectionValue();
    // }, [internalBaseWeldLegSize, DesignLoadOutofPlaneLateralXdirection, ShearStressatBaseWeld, OutofPlaneAngleValue, LoadonPadeyeValueInMT, internalThicknessofMainPlateValue, internalLengthofBasePlateInputValue]);


    // Shear Stress at Base Weld(Actual) - Lateral (X - direction)


    const ShearStressatBaseWeldActualLateralXdirectionUnit = ['Mpa', 'Pa'];
    const ShearStressatBaseWeldActualLateralXdirectionFactors = {
        Mpa: [1, 1e6],
        Pa: [1e-6, 1],
    };

    const [ShearStressatBaseWeldActualLateralXdirection, setShearStressatBaseWeldActualLateralXdirection] = useState('');
    const [ShearStressatBaseWeldActualLateralXdirectionSelectedUnit, setShearStressatBaseWeldActualLateralXdirectionSelectedUnit] = useState('Mpa');

    const handleShearStressatBaseWeldActualLateralXdirectionUnitChange = (unit) => {
        const AllowableBendingStressInPlaneFactor = ShearStressatBaseWeldActualLateralXdirectionFactors[unit][ShearStressatBaseWeldActualLateralXdirectionUnit.indexOf(ShearStressatBaseWeldActualLateralXdirectionSelectedUnit)];
        let newValue = parseFloat(ShearStressatBaseWeldActualLateralXdirection) / AllowableBendingStressInPlaneFactor;
        newValue = ShearStressatBaseWeldActualLateralXdirectionValue(newValue, unit);
        setShearStressatBaseWeldActualLateralXdirectionSelectedUnit(unit);
        setShearStressatBaseWeldActualLateralXdirection(newValue);
    };

    const calculateShearStressatBaseWeldActualLateralXdirectionValue = () => {
        const L = parseFloat(internalLengthofBasePlateInputValue)
        const T = parseFloat(internalThicknessofMainPlateValue)
        const LoadonPadeye = parseFloat(LoadonPadeyeValueInMT)
        const DLF = parseFloat(DLFValue);
        if (!isNaN(L) && !isNaN(T) && !isNaN(LoadonPadeye) && !isNaN(DLF)) {
            const pi = Math.PI
            const squarerootof2 = Math.sqrt(2)
            const LoadinHorizontalDirectionYdirectionMultipleValue = Math.sin(AngleofLoadwithVerticalvalue * pi / 180) * Math.cos(OutofPlaneAngleValue * pi / 180);
            const LoadinHorizontalDirectionYdirection = LoadonPadeyeValueInMT * LoadinHorizontalDirectionYdirectionMultipleValue;
            const twt = internalBaseWeldLegSize / squarerootof2;
            const Lw = (2 * L) + (2 * T)
            const Asbw = twt * Lw
            const Pyd = LoadinHorizontalDirectionYdirection * DLFValue
            const PadEyeDesignLoadvalue = LoadonPadeye * DLF;
            const OutofplaneLoadLateralLoadXdirectionMultiplyValue = Math.sin(AngleofLoadwithVerticalvalue * pi / 180) * Math.sin(OutofPlaneAngleValue * pi / 180)
            const OutofplaneLoadLateralLoadXdirection = LoadonPadeye * OutofplaneLoadLateralLoadXdirectionMultiplyValue;
            const Pxd = (OutofplaneLoadLateralLoadXdirection * DLF) + (0.05 * PadEyeDesignLoadvalue)
            const ShearStressatBaseWeldActualLateralXdirection = (Pxd * 9810) / Asbw
            setShearStressatBaseWeldActualLateralXdirection(ShearStressatBaseWeldActualLateralXdirection.toFixed(3));
            // newValue = ShearStressatBaseWeldActualLateralXdirection(newValue, ShearStressatBaseWeldActualLateralXdirectionSelectedUnit);
            // setShearStressatBaseWeldActualLateralXdirection(newValue);
        }
    };

    const ShearStressatBaseWeldActualLateralXdirectionValue = (value, unit) => {
        const floatValue = parseFloat(value);
        if (unit === 'Mpa') {
            return floatValue.toFixed(3);
        } else {
            if (floatValue >= 1000) {
                return floatValue.toExponential(3);
            }
            return floatValue.toFixed(3);
        }
    };

    useEffect(() => {
        calculateShearStressatBaseWeldActualLateralXdirectionValue();
    }, [internalLengthofBasePlateInputValue, internalThicknessofMainPlateValue, AngleofLoadwithVerticalvalue, OutofPlaneAngleValue, LoadonPadeyeValueInMT, DLFValue, PadEyeDesignLoad,]);



    // Tensile Area at Base
    const TensileAreaatBaseUnit = ['mm²', 'cm²'];
    const TensileAreaatBaseFactors = {
        'mm²': [1, 0.01,],
        'cm²': [100, 1,],
    };

    const [TensileAreaatBase, setTensileAreaatBase] = useState('');
    const [TensileAreaatBaseSelectedUnit, setTensileAreaatBaseSelectedUnit] = useState('mm²');

    const handleTensileAreaatBaseUnitChange = (unit) => {
        setTensileAreaatBaseSelectedUnit(unit);
        const TensileAreaatBaseFactor = TensileAreaatBaseFactors[unit][TensileAreaatBaseUnit.indexOf(TensileAreaatBaseSelectedUnit)];
        setTensileAreaatBase((parseFloat(TensileAreaatBase) / TensileAreaatBaseFactor).toFixed(3));
    };

    const calculateTensileAreaatBaseValue = () => {
        const squarerootof2 = Math.sqrt(2)
        const twt = internalBaseWeldLegSize / squarerootof2;
        const L = parseFloat(internalLengthofBasePlateInputValue)
        const T = parseFloat(internalThicknessofMainPlateValue)
        const Lw = (2 * L) + (2 * T)
        const TensileAreaatBase = twt * Lw
        setTensileAreaatBase(TensileAreaatBase.toFixed(3));
    };
    useEffect(() => {
        calculateTensileAreaatBaseValue();
    }, [Throatthickness, TotalWeldLength]);



    // TensileStressatBaseWeldActual

    const TensileStressatBaseWeldActualUnit = ['Mpa', 'Pa'];
    const TensileStressatBaseWeldActualFactors = {
        Mpa: [1, 1e6],
        Pa: [1e-6, 1],
    };

    const [TensileStressatBaseWeldActual, setTensileStressatBaseWeldActual] = useState('');
    const [TensileStressatBaseWeldActualSelectedUnit, setTensileStressatBaseWeldActualSelectedUnit] = useState('Mpa');

    const handleTensileStressatBaseWeldActualUnitChange = (unit) => {
        const AllowableBendingStressInPlaneFactor = TensileStressatBaseWeldActualFactors[unit][TensileStressatBaseWeldActualUnit.indexOf(TensileStressatBaseWeldActualSelectedUnit)];
        let newValue = parseFloat(TensileStressatBaseWeldActual) / AllowableBendingStressInPlaneFactor;
        newValue = TensileStressatBaseWeldActualValue(newValue, unit);
        setTensileStressatBaseWeldActualSelectedUnit(unit);
        setTensileStressatBaseWeldActual(newValue);
    };

    const calculateTensileStressatBaseWeldActualValue = () => {
        const L = parseFloat(internalLengthofBasePlateInputValue)
        const T = parseFloat(internalThicknessofMainPlateValue)
        const LoadonPadeye = parseFloat(LoadonPadeyeValueInMT)
        const DLF = parseFloat(DLFValue);
        const squarerootof2 = Math.sqrt(2)
        const twt = internalBaseWeldLegSize / squarerootof2;
        const Lw = (2 * L) + (2 * T)
        const Asbw = twt * Lw
        const multiplyValue = Math.cos(AngleofLoadwithVerticalvalue * Math.PI / 180);
        const LoadinVerticalDirectionZdirectionValue = LoadonPadeye * multiplyValue;
        const Pyd = LoadinVerticalDirectionZdirectionValue * DLF;
        const TensileStressatBaseWeldActual = (Pyd * 9810) / Asbw
        setTensileStressatBaseWeldActual(TensileStressatBaseWeldActual.toFixed(3));
        // newValue = TensileStressatBaseWeldActual(newValue, TensileStressatBaseWeldActualSelectedUnit);
        // setTensileStressatBaseWeldActual(newValue);

    };

    const TensileStressatBaseWeldActualValue = (value, unit) => {
        const floatValue = parseFloat(value);
        if (unit === 'Mpa') {
            return floatValue.toFixed(3);
        } else {
            if (floatValue >= 1000) {
                return floatValue.toExponential(4);
            }
            return floatValue.toFixed(3);
        }
    };

    useEffect(() => {
        calculateTensileStressatBaseWeldActualValue();
    }, [internalLengthofBasePlateInputValue,internalThicknessofMainPlateValue,LoadonPadeyeValueInMT,DLFValue,AngleofLoadwithVerticalvalue]);

    // Section Modulus of Base Weld 
    // Section Modulus of Weld about X-axis
    const SectionModulusofWeldaboutXaxisUnit = ['mm³', 'cm³'];
    const SectionModulusofWeldaboutXaxisFactors = {
        'mm³': [1, 0.001],
        'cm³': [1000, 1],
    };

    const [SectionModulusofWeldaboutXaxis, setSectionModulusofWeldaboutXaxis] = useState('');
    const [SectionModulusofWeldaboutXaxisSelectedUnit, setSectionModulusofWeldaboutXaxisSelectedUnit] = useState('mm³');

    const handleSectionModulusofWeldaboutXaxisUnitChange = (unit) => {
        setSectionModulusofWeldaboutXaxisSelectedUnit(unit);
        const SectionModulusofWeldaboutXaxisFactor = SectionModulusofWeldaboutXaxisFactors[unit][SectionModulusofWeldaboutXaxisUnit.indexOf(SectionModulusofWeldaboutXaxisSelectedUnit)];
        setSectionModulusofWeldaboutXaxis((parseFloat(SectionModulusofWeldaboutXaxis) / SectionModulusofWeldaboutXaxisFactor).toFixed(3));
    };

    const calculateSectionModulusofWeldaboutXaxisValue = () => {
        const b = parseFloat(internalThicknessofMainPlateValue)
        const d = parseFloat(internalLengthofBasePlateInputValue)
        const tw = parseFloat(internalBaseWeldLegSize)
        const SectionModulusofWeldaboutXaxis = (b * d + Math.pow(d, 2) / 3) * tw;
        setSectionModulusofWeldaboutXaxis(SectionModulusofWeldaboutXaxis.toFixed(3));
    };
    useEffect(() => {
        calculateSectionModulusofWeldaboutXaxisValue();
    }, [internalThicknessofMainPlateValue, internalLengthofBasePlateInputValue, internalBaseWeldLegSize]);


    // Section Modulus of Weld about Y-axis
    const SectionModulusofWeldaboutYaxisUnit = ['mm³', 'cm³'];
    const SectionModulusofWeldaboutYaxisFactors = {
        'mm³': [1, 0.001],
        'cm³': [1000, 1],
    };

    const [SectionModulusofWeldaboutYaxis, setSectionModulusofWeldaboutYaxis] = useState('');
    const [SectionModulusofWeldaboutYaxisSelectedUnit, setSectionModulusofWeldaboutYaxisSelectedUnit] = useState('mm³');

    const handleSectionModulusofWeldaboutYaxisUnitChange = (unit) => {
        setSectionModulusofWeldaboutYaxisSelectedUnit(unit);
        const SectionModulusofWeldaboutYaxisFactor = SectionModulusofWeldaboutYaxisFactors[unit][SectionModulusofWeldaboutYaxisUnit.indexOf(SectionModulusofWeldaboutYaxisSelectedUnit)];
        setSectionModulusofWeldaboutYaxis((parseFloat(SectionModulusofWeldaboutYaxis) / SectionModulusofWeldaboutYaxisFactor).toFixed(3));
    };

    const calculateSectionModulusofWeldaboutYaxisValue = () => {
        const b = parseFloat(internalThicknessofMainPlateValue)
        const d = parseFloat(internalLengthofBasePlateInputValue)
        const tw = parseFloat(internalBaseWeldLegSize)
        const SectionModulusofWeldaboutYaxis = (b * d + Math.pow(b, 2) / 3) * tw;
        setSectionModulusofWeldaboutYaxis(SectionModulusofWeldaboutYaxis.toFixed(3));
    };
    useEffect(() => {
        calculateSectionModulusofWeldaboutYaxisValue();
    }, [internalThicknessofMainPlateValue, internalLengthofBasePlateInputValue, internalBaseWeldLegSize]);

    // Bending Stress Check at Base Weld
    // Total Design Moment about X-axis (In-plane)
    // TotalDesignMomentaboutXaxisInplane
    // BendingStressatBaseWeldActualaboutXAxisInPlane
    const BendingStressatBaseWeldActualaboutXAxisInPlaneUnit = ['Mpa', 'Pa'];
    const BendingStressatBaseWeldActualaboutXAxisInPlaneFactors = {
        Mpa: [1, 1e6],
        Pa: [1e-6, 1],
    };

    const [BendingStressatBaseWeldActualaboutXAxisInPlane, setBendingStressatBaseWeldActualaboutXAxisInPlane] = useState('');
    const [BendingStressatBaseWeldActualaboutXAxisInPlaneSelectedUnit, setBendingStressatBaseWeldActualaboutXAxisInPlaneSelectedUnit] = useState('Mpa');

    const handleBendingStressatBaseWeldActualaboutXAxisInPlaneUnitChange = (unit) => {
        const AllowableBendingStressInPlaneFactor = BendingStressatBaseWeldActualaboutXAxisInPlaneFactors[unit][BendingStressatBaseWeldActualaboutXAxisInPlaneUnit.indexOf(BendingStressatBaseWeldActualaboutXAxisInPlaneSelectedUnit)];
        let newValue = parseFloat(BendingStressatBaseWeldActualaboutXAxisInPlane) / AllowableBendingStressInPlaneFactor;
        newValue = BendingStressatBaseWeldActualaboutXAxisInPlaneValue(newValue, unit);
        setBendingStressatBaseWeldActualaboutXAxisInPlaneSelectedUnit(unit);
        setBendingStressatBaseWeldActualaboutXAxisInPlane(newValue);
    };

    const calculateBendingStressatBaseWeldActualaboutXAxisInPlaneValue = () => {
        const L = parseFloat(internalLengthofBasePlateInputValue)
        const T = parseFloat(internalThicknessofMainPlateValue)
        const LoadonPadeye = parseFloat(LoadonPadeyeValueInMT)
        const DLF = parseFloat(DLFValue);
        if (!isNaN(L) && !isNaN(T) && !isNaN(LoadonPadeye) && !isNaN(DLF)) {
            const H = parseFloat(internalinputTotalHeightofPadeyeValue)
            const R = parseFloat(internalRadiusofMainPlateValue)
            const pi = Math.PI;

            const LoadinHorizontalDirectionYdirectionMultipleValue = Math.sin(AngleofLoadwithVerticalvalue * pi / 180) * Math.cos(OutofPlaneAngleValue * pi / 180);
            const LoadinHorizontalDirectionYdirection = (LoadonPadeyeValueInMT * LoadinHorizontalDirectionYdirectionMultipleValue);
            const D6 = (LoadinHorizontalDirectionYdirection * DLFValue)

            const LoadonPadeye = LoadonPadeyeValueInMT
            const multiplyValue = Math.cos(AngleofLoadwithVerticalvalue * (Math.PI / 180));
            const LoadinVerticalDirectionZdirectionValue = LoadonPadeye * multiplyValue;
            const D7 = (LoadinVerticalDirectionZdirectionValue * DLF).toFixed(2)

            const D9 = (H - R).toFixed(2)

            const D10 = (R - (L / 2)).toFixed(2)
            // const TotalDesignMomentaboutXaxisInplane = D6
            const TotalDesignMomentaboutXaxisInplane = (D6 * D9 + D7 * D10).toFixed(2)
            const Mdxx = parseFloat(TotalDesignMomentaboutXaxisInplane)

            const b = parseFloat(internalThicknessofMainPlateValue)
            const d = parseFloat(internalLengthofBasePlateInputValue)
            const tw = parseFloat(internalBaseWeldLegSize)
            const SectionModulusofWeldaboutXaxis = (b * d + Math.pow(d, 2) / 3) * tw;
            const Zwbxx = parseFloat(SectionModulusofWeldaboutXaxis)

            const BendingStressatBaseWeldActualaboutXAxisInPlane = Mdxx * 9810 / Zwbxx
            setBendingStressatBaseWeldActualaboutXAxisInPlane(BendingStressatBaseWeldActualaboutXAxisInPlane.toFixed(3));
            // newValue = BendingStressatBaseWeldActualaboutXAxisInPlane(newValue, BendingStressatBaseWeldActualaboutXAxisInPlaneSelectedUnit);
            // setBendingStressatBaseWeldActualaboutXAxisInPlane(newValue);
        }
    };

    const BendingStressatBaseWeldActualaboutXAxisInPlaneValue = (value, unit) => {
        const floatValue = parseFloat(value);
        if (unit === 'Mpa') {
            return floatValue.toFixed(3);
        } else {
            if (floatValue >= 1000) {
                return floatValue.toExponential(4);
            }
            return floatValue.toFixed(3);
        }
    };

    useEffect(() => {
        calculateBendingStressatBaseWeldActualaboutXAxisInPlaneValue();
    }, [internalLengthofBasePlateInputValue, internalThicknessofMainPlateValue, LoadonPadeyeValueInMT, DLFValue,]);


    // BendingStressActualaboutYaxisOutofPlane
    // BendingStressaboutYaxisOutofPlane

    const BendingStressaboutYaxisOutofPlaneUnit = ['Mpa', 'Pa'];
    const BendingStressaboutYaxisOutofPlaneFactors = {
        Mpa: [1, 1e6],
        Pa: [1e-6, 1],
    };

    const [BendingStressaboutYaxisOutofPlane, setBendingStressaboutYaxisOutofPlane] = useState('');
    const [BendingStressaboutYaxisOutofPlaneSelectedUnit, setBendingStressaboutYaxisOutofPlaneSelectedUnit] = useState('Mpa');

    const handleBendingStressaboutYaxisOutofPlaneUnitChange = (unit) => {
        const AllowableBendingStressInPlaneFactor = BendingStressaboutYaxisOutofPlaneFactors[unit][BendingStressaboutYaxisOutofPlaneUnit.indexOf(BendingStressaboutYaxisOutofPlaneSelectedUnit)];
        let newValue = parseFloat(BendingStressaboutYaxisOutofPlane) / AllowableBendingStressInPlaneFactor;
        newValue = BendingStressaboutYaxisOutofPlaneValue(newValue, unit);
        setBendingStressaboutYaxisOutofPlaneSelectedUnit(unit);
        setBendingStressaboutYaxisOutofPlane(newValue);
    };

    const calculateBendingStressaboutYaxisOutofPlaneValue = () => {
        const b = parseFloat(internalThicknessofMainPlateValue)
        const d = parseFloat(internalLengthofBasePlateInputValue)
        const tw = parseFloat(internalBaseWeldLegSize)
        const ZwbyyValue = (b * d + Math.pow(b, 2) / 3) * tw;

        const LoadonPadeye = parseFloat(LoadonPadeyeValueInMT)
        const DLF = parseFloat(DLFValue);
        const pi = Math.PI;
        const PadEyeDesignLoadvalue = LoadonPadeye * DLF;
        const OutofplaneLoadLateralLoadXdirectionMultiplyValue = Math.sin(AngleofLoadwithVerticalvalue * pi / 180) * Math.sin(OutofPlaneAngleValue * pi / 180)
        const OutofplaneLoadLateralLoadXdirection = LoadonPadeye * OutofplaneLoadLateralLoadXdirectionMultiplyValue;
        const pxd = (OutofplaneLoadLateralLoadXdirection * DLF) + (0.05 * PadEyeDesignLoadvalue)
        const H = parseFloat(internalinputTotalHeightofPadeyeValue)
        const R = parseFloat(internalRadiusofMainPlateValue)
        const MomentleverforHorizontalLateralForce = (H - R).toFixed(2);
        const h = parseFloat(MomentleverforHorizontalLateralForce)
        const MdxxValue = pxd * h;

        const Mdxx = parseFloat(MdxxValue)
        const Zwbyy = parseFloat(ZwbyyValue)
        const BendingStressaboutYaxisOutofPlane = (Mdxx * 9810 / Zwbyy).toFixed(3)
        setBendingStressaboutYaxisOutofPlane(BendingStressaboutYaxisOutofPlane);
    };

    const BendingStressaboutYaxisOutofPlaneValue = (value, unit) => {
        const floatValue = parseFloat(value);
        if (unit === 'Mpa') {
            return floatValue.toFixed(3);
        } else {
            if (floatValue >= 1000) {
                return floatValue.toExponential(4);
            }
            return floatValue.toFixed(3);
        }
    };

    useEffect(() => {
        calculateBendingStressaboutYaxisOutofPlaneValue();
    }, [
        internalThicknessofMainPlateValue, internalLengthofBasePlateInputValue, internalBaseWeldLegSize, LoadonPadeyeValueInMT, DLFValue, AngleofLoadwithVerticalvalue, OutofPlaneAngleValue, internalinputTotalHeightofPadeyeValue, internalRadiusofMainPlateValue,]);


    // const BendingStressaboutYaxisOutofPlaneUnit = ['mm', 'cm'];
    // const BendingStressaboutYaxisOutofPlaneFactors = {
    //     mm: [1, 0.1],
    //     cm: [10, 1],
    // };

    // const [BendingStressaboutYaxisOutofPlane, setBendingStressaboutYaxisOutofPlane] = useState('');
    // const [BendingStressaboutYaxisOutofPlaneSelectedUnit, setBendingStressaboutYaxisOutofPlaneSelectedUnit] = useState('mm');

    // const handleBendingStressaboutYaxisOutofPlaneUnitChange = (unit) => {
    //     setBendingStressaboutYaxisOutofPlaneSelectedUnit(unit);
    //     const BendingStressaboutYaxisOutofPlaneFactor = BendingStressaboutYaxisOutofPlaneFactors[unit][BendingStressaboutYaxisOutofPlaneUnit.indexOf(BendingStressaboutYaxisOutofPlaneSelectedUnit)];
    //     setBendingStressaboutYaxisOutofPlane((parseFloat(BendingStressaboutYaxisOutofPlane) / BendingStressaboutYaxisOutofPlaneFactor).toFixed(3));
    // };

    // const calculateBendingStressaboutYaxisOutofPlaneValue = () => {

    //     const b = parseFloat(internalThicknessofMainPlateValue)
    //     const d = parseFloat(internalLengthofBasePlateInputValue)
    //     const tw = parseFloat(internalBaseWeldLegSize)
    //     const ZwbyyValue = (b * d + Math.pow(b, 2) / 3) * tw;
    //     const LoadonPadeye = parseFloat(LoadonPadeyeValueInMT)
    //     const DLF = parseFloat(DLFValue);
    //     const pi = Math.PI;
    //     const PadEyeDesignLoadvalue = LoadonPadeye * DLF;
    //     const OutofplaneLoadLateralLoadXdirectionMultiplyValue = Math.sin(AngleofLoadwithVerticalvalue * pi / 180) * Math.sin(OutofPlaneAngleValue * pi / 180)
    //     const OutofplaneLoadLateralLoadXdirection = LoadonPadeye * OutofplaneLoadLateralLoadXdirectionMultiplyValue;
    //     const pxd = (OutofplaneLoadLateralLoadXdirection * DLF) + (0.05 * PadEyeDesignLoadvalue)
    //     const h = parseFloat(MomentleverforHorizontalLateralForce)
    //     const MdxxValue = pxd * h;
    //     const Mdxx = parseFloat(MdxxValue)
    //     const Zwbyy = parseFloat(ZwbyyValue)
    //     const BendingStressaboutYaxisOutofPlane = (Mdxx * 9810 / Zwbyy).toFixed(3)
    //     setBendingStressaboutYaxisOutofPlane(BendingStressaboutYaxisOutofPlane);
    // };
    // useEffect(() => {
    //     calculateBendingStressaboutYaxisOutofPlaneValue();
    // }, [internalBaseWeldLegSize, TotalDesignMomentaboutYaxisOutofPlane, SectionModulusofWeldaboutYaxis, LoadonPadeyeValueInMT, internalThicknessofMainPlateValue, internalLengthofBasePlateInputValue]);


    // TotalStressatBaseWeldActual

    const TotalStressatBaseWeldActualUnit = ['Mpa', 'Pa'];
    const TotalStressatBaseWeldActualFactors = {
        Mpa: [1, 1e6],
        Pa: [1e-6, 1],
    };

    const [TotalStressatBaseWeldActual, setTotalStressatBaseWeldActual] = useState('');
    const [TotalStressatBaseWeldActualSelectedUnit, setTotalStressatBaseWeldActualSelectedUnit] = useState('Mpa');

    const handleTotalStressatBaseWeldActualUnitChange = (unit) => {
        const AllowableBendingStressInPlaneFactor = TotalStressatBaseWeldActualFactors[unit][TotalStressatBaseWeldActualUnit.indexOf(TotalStressatBaseWeldActualSelectedUnit)];
        let newValue = parseFloat(TotalStressatBaseWeldActual) / AllowableBendingStressInPlaneFactor;
        newValue = TotalStressatBaseWeldActualValue(newValue, unit);
        setTotalStressatBaseWeldActualSelectedUnit(unit);
        setTotalStressatBaseWeldActual(newValue);
    };

    const calculateTotalStressatBaseWeldActualValue = () => {
        const L = parseFloat(internalLengthofBasePlateInputValue)
        const T = parseFloat(internalThicknessofMainPlateValue)
        const LoadonPadeye = parseFloat(LoadonPadeyeValueInMT)
        const DLF = parseFloat(DLFValue);
        const squarerootof2 = Math.sqrt(2)
        const twt = internalBaseWeldLegSize / squarerootof2;
        const Lw = (2 * L) + (2 * T)
        const Asbw = twt * Lw
        const multiplyValue = Math.cos(AngleofLoadwithVerticalvalue * Math.PI / 180);
        const LoadinVerticalDirectionZdirectionValue = LoadonPadeye * multiplyValue;
        const Pyd = LoadinVerticalDirectionZdirectionValue * DLF;
        const TensileStressatBaseWeldActual = ((Pyd * 9810) / Asbw).toFixed(3)
        const σtbwAct = parseFloat(TensileStressatBaseWeldActual)

        const H = parseFloat(internalinputTotalHeightofPadeyeValue)
        const R = parseFloat(internalRadiusofMainPlateValue)
        const pi = Math.PI;

        const LoadinHorizontalDirectionYdirectionMultipleValue = Math.sin(AngleofLoadwithVerticalvalue * pi / 180) * Math.cos(OutofPlaneAngleValue * pi / 180);
        const LoadinHorizontalDirectionYdirection = (LoadonPadeyeValueInMT * LoadinHorizontalDirectionYdirectionMultipleValue);
        const D6 = (LoadinHorizontalDirectionYdirection * DLFValue)

        const D7 = (LoadinVerticalDirectionZdirectionValue * DLF).toFixed(2)

        const D9 = (H - R).toFixed(2)

        const D10 = (R - (L / 2)).toFixed(2)
        // const TotalDesignMomentaboutXaxisInplane = D6
        const TotalDesignMomentaboutXaxisInplane = (D6 * D9 + D7 * D10).toFixed(2)
        const Mdxx = parseFloat(TotalDesignMomentaboutXaxisInplane)

        const b = parseFloat(internalThicknessofMainPlateValue)
        const d = parseFloat(internalLengthofBasePlateInputValue)
        const tw = parseFloat(internalBaseWeldLegSize)
        const SectionModulusofWeldaboutXaxis = (b * d + Math.pow(d, 2) / 3) * tw;
        const Zwbxx = parseFloat(SectionModulusofWeldaboutXaxis)

        const BendingStressatBaseWeldActualaboutXAxisInPlane = Mdxx * 9810 / Zwbxx
        setBendingStressatBaseWeldActualaboutXAxisInPlane(BendingStressatBaseWeldActualaboutXAxisInPlane.toFixed(3));
        const σbbwxAct = parseFloat(BendingStressatBaseWeldActualaboutXAxisInPlane)


        const ZwbyyValue = (b * d + Math.pow(b, 2) / 3) * tw;
        const PadEyeDesignLoadvalue = LoadonPadeye * DLF;
        const OutofplaneLoadLateralLoadXdirectionMultiplyValue = Math.sin(AngleofLoadwithVerticalvalue * pi / 180) * Math.sin(OutofPlaneAngleValue * pi / 180)
        const OutofplaneLoadLateralLoadXdirection = LoadonPadeye * OutofplaneLoadLateralLoadXdirectionMultiplyValue;
        const pxd = (OutofplaneLoadLateralLoadXdirection * DLF) + (0.05 * PadEyeDesignLoadvalue)
        const h = parseFloat(MomentleverforHorizontalLateralForce)
        const MdxxValue = pxd * h;
        const Zwbyy = parseFloat(ZwbyyValue)
        const BendingStressaboutYaxisOutofPlane = (MdxxValue * 9810 / Zwbyy).toFixed(3)
        const σbbyAct = parseFloat(BendingStressaboutYaxisOutofPlane)

        const ShearStressatBaseWeldActualHorizontalYdirectionsquarerootof2 = Math.sqrt(2)
        const ShearStressatBaseWeldActualHorizontalYdirectionL = parseFloat(internalLengthofBasePlateInputValue)
        const ShearStressatBaseWeldActualHorizontalYdirectionT = parseFloat(internalThicknessofMainPlateValue)
        const ShearStressatBaseWeldActualHorizontalYdirectionLoadinHorizontalDirectionYdirectionMultipleValue = Math.sin(AngleofLoadwithVerticalvalue * pi / 180) * Math.cos(OutofPlaneAngleValue * pi / 180);
        const ShearStressatBaseWeldActualHorizontalYdirectionLoadinHorizontalDirectionYdirection = LoadonPadeyeValueInMT * ShearStressatBaseWeldActualHorizontalYdirectionLoadinHorizontalDirectionYdirectionMultipleValue;
        const ShearStressatBaseWeldActualHorizontalYdirectiontwt = internalBaseWeldLegSize / ShearStressatBaseWeldActualHorizontalYdirectionsquarerootof2;
        const ShearStressatBaseWeldActualHorizontalYdirectionLw = (2 * ShearStressatBaseWeldActualHorizontalYdirectionL) + (2 * ShearStressatBaseWeldActualHorizontalYdirectionT)
        const ShearStressatBaseWeldActualHorizontalYdirectionAsbw = ShearStressatBaseWeldActualHorizontalYdirectiontwt * ShearStressatBaseWeldActualHorizontalYdirectionLw
        const ShearStressatBaseWeldActualHorizontalYdirectionPyd = ShearStressatBaseWeldActualHorizontalYdirectionLoadinHorizontalDirectionYdirection * DLFValue
        const ShearStressatBaseWeldActualHorizontalYdirection = ((ShearStressatBaseWeldActualHorizontalYdirectionPyd * 9810) / ShearStressatBaseWeldActualHorizontalYdirectionAsbw).toFixed(2)
        const τsbwyAct = parseFloat(ShearStressatBaseWeldActualHorizontalYdirection)


        const Pxd = (OutofplaneLoadLateralLoadXdirection * DLF) + (0.05 * PadEyeDesignLoadvalue)
        const ShearStressatBaseWeldActualLateralXdirection = (Pxd * 9810) / Asbw
        setShearStressatBaseWeldActualLateralXdirection(ShearStressatBaseWeldActualLateralXdirection.toFixed(3));
        const τsbwxAct = parseFloat(ShearStressatBaseWeldActualLateralXdirection)
        const TotalStressatBaseWeldActual = (Math.sqrt(Math.pow(σtbwAct + σbbwxAct + σbbyAct, 2) + Math.pow(τsbwyAct, 2) + Math.pow(τsbwxAct, 2))).toFixed(3);
        setTotalStressatBaseWeldActual(TotalStressatBaseWeldActual);
    };

    const TotalStressatBaseWeldActualValue = (value, unit) => {
        const floatValue = parseFloat(value);
        if (unit === 'Mpa') {
            return floatValue.toFixed(3);
        } else {
            if (floatValue >= 1000) {
                return floatValue.toExponential(4);
            }
            return floatValue.toFixed(3);
        }
    };

    useEffect(() => {
        calculateTotalStressatBaseWeldActualValue();
    }, [internalLengthofBasePlateInputValue, internalThicknessofMainPlateValue, LoadonPadeyeValueInMT, DLFValue, internalBaseWeldLegSize, AngleofLoadwithVerticalvalue, internalinputTotalHeightofPadeyeValue, internalRadiusofMainPlateValue, AngleofLoadwithVerticalvalue, OutofPlaneAngleValue, LoadonPadeyeValueInMT, internalThicknessofMainPlateValue, internalLengthofBasePlateInputValue, internalBaseWeldLegSize, AngleofLoadwithVerticalvalue, OutofPlaneAngleValue, PadEyeDesignLoad]);

    // Weld Length
    const WeldLengthUnit = ['mm', 'cm'];
    const WeldLengthFactors = {
        mm: [1, 0.1],
        cm: [10, 1],
    };

    const [WeldLength, setWeldLength] = useState('');
    const [WeldLengthSelectedUnit, setWeldLengthSelectedUnit] = useState('mm');

    const handleWeldLengthUnitChange = (unit) => {
        setWeldLengthSelectedUnit(unit);
        const TotalStressatBaseWeldActualFactor = WeldLengthFactors[unit][WeldLengthUnit.indexOf(WeldLengthSelectedUnit)];
        setWeldLength((parseFloat(WeldLength) / TotalStressatBaseWeldActualFactor));
    };

    const calculateWeldLengthValue = () => {
        const WeldLength = ((Math.PI * internalDiameterofCheekPlateInputValue) / 2).toFixed(4);
        setWeldLength(WeldLength);
    };
    useEffect(() => {
        calculateWeldLengthValue();
    }, [internalDiameterofCheekPlateInputValue]);



    // Weld Area at Cheek Plate
    const WeldAreaatCheekPlateUnit = ['mm²', 'cm²'];
    const WeldAreaatCheekPlateFactors = {
        'mm²': [1, 0.01],
        'cm²': [100, 1],
    };

    const [WeldAreaatCheekPlate, setWeldAreaatCheekPlate] = useState('');
    const [WeldAreaatCheekPlateSelectedUnit, setWeldAreaatCheekPlateSelectedUnit] = useState('mm²');

    const handleWeldAreaatCheekPlateUnitChange = (unit) => {
        setWeldAreaatCheekPlateSelectedUnit(unit);
        const TotalStressatBaseWeldActualFactor = WeldAreaatCheekPlateFactors[unit][WeldAreaatCheekPlateUnit.indexOf(WeldAreaatCheekPlateSelectedUnit)];
        setWeldAreaatCheekPlate((parseFloat(WeldAreaatCheekPlate) / TotalStressatBaseWeldActualFactor));
    };

    const calculateWeldAreaatCheekPlateValue = () => {
        const DiameterofCheekPlate = parseFloat(internalDiameterofCheekPlateInputValue)
        const WeldLengthValue = (Math.PI * internalDiameterofCheekPlateInputValue) / 2
        const Throatthicknessvalue = internalCheekPlateWeldLegSize / 1.41421356
        const WeldAreaatCheekPlate = (Throatthicknessvalue * WeldLengthValue).toFixed(3);
        setWeldAreaatCheekPlate(WeldAreaatCheekPlate);
    };
    useEffect(() => {
        calculateWeldAreaatCheekPlateValue();
    }, [internalDiameterofCheekPlateInputValue, internalCheekPlateWeldLegSize, internalCheekPlateWeldLegSize,
    ]);


    // Design Load on one cheek plate

    const DesignLoadononecheekplateUnit = ['MT', 'N'];
    const DesignLoadononecheekplateFactors = {
        MT: [1, 0.0001019716],
        N: [9806.65, 1],
    };

    const [DesignLoadononecheekplate, setDesignLoadononecheekplate] = useState('');
    const [DesignLoadononecheekplateSelectedUnit, setDesignLoadononecheekplateSelectedUnit] = useState('MT');

    const handleDesignLoadononecheekplateUnitChange = (unit) => {
        setDesignLoadononecheekplateSelectedUnit(unit);
        const factor = DesignLoadononecheekplateFactors[unit][LoadinVerticalDirectionZdirectionUnits.indexOf(DesignLoadononecheekplateSelectedUnit)];
        setDesignLoadononecheekplate((parseFloat(DesignLoadononecheekplate) * factor).toFixed(2));
    };

    const calculateDesignLoadononecheekplateValue = () => {
        const LoadonPadeye = parseFloat(LoadonPadeyeValueInMT);
        const DLF = parseFloat(DLFValue)
        const PadEyeDesignLoadValue = (LoadonPadeye * DLF).toFixed(2);
        const pd = parseFloat(PadEyeDesignLoadValue)
        const tc = parseFloat(internalThicknessofCheekPlateInputValue)
        const t = parseFloat(internalThicknessofMainPlateValue)
        const DesignLoadononecheekplate = (pd * tc / (t + 2 * tc)).toFixed(2);
        setDesignLoadononecheekplate(DesignLoadononecheekplate);
    };
    useEffect(() => {
        calculateDesignLoadononecheekplateValue();
    }, [LoadonPadeyeValueInMT, PadEyeDesignLoad, internalThicknessofCheekPlateInputValue, internalThicknessofMainPlateValue]);


    const WeldStressatCheekWeldActualUnit = ['Mpa', 'Pa'];
    const WeldStressatCheekWeldActualFactors = {
        Mpa: [1, 1e6],
        Pa: [1e-6, 1],
    };

    const [WeldStressatCheekWeldActual, setWeldStressatCheekWeldActual] = useState('');
    const [WeldStressatCheekWeldActualSelectedUnit, setWeldStressatCheekWeldActualSelectedUnit] = useState('Mpa');

    const handleWeldStressatCheekWeldActualUnitChange = (unit) => {
        const AllowableBearingStressFactor = WeldStressatCheekWeldActualFactors[unit][WeldStressatCheekWeldActualUnit.indexOf(WeldStressatCheekWeldActualSelectedUnit)];
        let newValue = parseFloat(WeldStressatCheekWeldActual) / AllowableBearingStressFactor;
        newValue = FormatValueforWeldStressAtCheekWeldActual(newValue, unit);
        setWeldStressatCheekWeldActualSelectedUnit(unit);
        setWeldStressatCheekWeldActual(newValue);
    };

    const calculateWeldStressatCheekWeldActualValue = () => {
        const internalThicknessofMainPlateValueValue = parseFloat(internalThicknessofMainPlateValue);
        const internalThicknessofCheekPlateInputValueValue = parseFloat(internalThicknessofCheekPlateInputValue);
        const LoadonPadeye = parseFloat(LoadonPadeyeValueInMT);
        const DLF = parseFloat(DLFValue)
        const PadEyeDesignLoadValue = (LoadonPadeye * DLF).toFixed(2);
        if (!isNaN(internalThicknessofMainPlateValueValue) && !isNaN(internalThicknessofCheekPlateInputValueValue) && !isNaN(PadEyeDesignLoadValue)) {

            const LoadonPadeye = parseFloat(LoadonPadeyeValueInMT);
            const DLF = parseFloat(DLFValue)
            const pd = (LoadonPadeye * DLF).toFixed(2);
            const tc = parseFloat(internalThicknessofCheekPlateInputValue)
            const t = parseFloat(internalThicknessofMainPlateValue)
            const DesignLoadononecheekplateValue = pd * tc / (t + 2 * tc);
            const DiameterofCheekPlate = parseFloat(internalDiameterofCheekPlateInputValue)
            const WeldLengthValue = (Math.PI * DiameterofCheekPlate) / 2
            const Throatthicknessvalue = internalCheekPlateWeldLegSize / 1.41421356
            const WeldAreaatCheekPlate = Throatthicknessvalue * WeldLengthValue;
            const WeldStressatCheekWeldActual = (DesignLoadononecheekplateValue * 9810 / WeldAreaatCheekPlate).toFixed(2);
            setWeldStressatCheekWeldActual(WeldStressatCheekWeldActual);
            // newValue = FormatValueforWeldStressAtCheekWeldActual(newValue, WeldStressatCheekWeldActualSelectedUnit);
            // setWeldStressatCheekWeldActual(WeldStressatCheekWeldActual);
        }
    };
    const FormatValueforWeldStressAtCheekWeldActual = (value, unit) => {
        const floatValue = parseFloat(value);
        if (unit === 'Mpa') {
            return floatValue.toFixed(2);
        } else {
            if (floatValue >= 1000) {
                return floatValue.toExponential(3);
            }
            return floatValue.toFixed(2);
        }
    };

    useEffect(() => {
        calculateWeldStressatCheekWeldActualValue();
    }, [
        internalThicknessofMainPlateValue, internalThicknessofCheekPlateInputValue, LoadonPadeyeValueInMT, DLFValue, internalThicknessofCheekPlateInputValue, internalThicknessofMainPlateValue, internalDiameterofCheekPlateInputValue, internalCheekPlateWeldLegSize,]);

    // IF ELSE CONDITIONS

    // Main Plate Radius
    // MainPlateRadius
    if (internalRadiusofMainPlateValue > 1.25 * internalDiameterofeyepinholeValue) {
        var MainPlateRadius = <h1>OK</h1>;
    } else {
        var MainPlateRadius = <h1 style={{ color: '#bd2323' }}>NOT OK</h1>;
    }

    // Shackle Clearance checks
    // ShackleClearanceChecks

    if (Clearancebetweenpinholediaandpindia > 2) {
        var ShackleClearanceChecks = <h1>OK</h1>;
    } else {
        var ShackleClearanceChecks = <h1 style={{ color: '#bd2323' }}>NOT OK</h1>
    }

    // if (Clearancebetweenpinholediaandpindia > 2, Clearancebetweenpinholediaandpindia < 6, Clearancebetweenpinholediaandpindia > 0.02 * ShacklePinDiameter) {
    //     var ShackleClearanceChecks = <h1>OK</h1>;
    // } else {
    //     var ShackleClearanceChecks = <h1 style={{ color: '#bd2323' }}>NOT OK</h1>
    // }
    // Bearing Stress Check at Pin Hole
    // BearingStressCheckatPinHole
    if (BearingStressActual < MaterialYieldStresValue * 0.9) {
        var BearingStressCheckatPinHole = <h1>OK</h1>;
    } else {
        var BearingStressCheckatPinHole = <h1 style={{ color: '#bd2323' }}>NOT OK</h1>;
    }

    // Shear Stress Check at Pin Hole
    // ShearStressCheckatPinHole
    if (ShearStressatpinhole < MaterialYieldStresValue * 0.4) {
        var ShearStressCheckatPinHole = <h1>OK</h1>
    } else {
        var ShearStressCheckatPinHole = <h1 style={{ color: '#bd2323' }}>NOT OK</h1>
    }

    // Tensile Stress Check at Pin Hole
    // TensileStressCheckatPinHole
    if (Math.max(TensileStressatpinholeActualatsectionAA, TensileStressatpinholeActualatsectionBB) < MaterialYieldStresValue * 0.45) {
        var TensileStressCheckatPinHole = <h1>OK</h1>
    } else {
        var TensileStressCheckatPinHole = <h1 style={{ color: '#bd2323' }}>NOT OK!</h1>
    }

    //   Hertz/Contact Stress Check at Pin Hole
    if (HertzStressatPinHole < MaterialYieldStresValue * 2.5) {
        var HertzContactStressCheckatPinHole = <h1>OK</h1>;
    }
    else {
        var HertzContactStressCheckatPinHole = <h1 style={{ color: '#bd2323' }}>NOT OK</h1>;
    }
    // // Stress Checks at Base Plate
    // // Tensile Stress Check at Base
    if (TensileStressatBaseActual < MaterialYieldStresValue * 0.6) {
        var TensileStressCheckatBase = <h1>OK</h1>;
    } else {
        var TensileStressCheckatBase = <h1 style={{ color: '#bd2323' }}>NOT OK</h1>;
    }
    // //   Bending Stress Check at Base (X-axis)
    if (BendingStressActualaboutXaxisInplane < MaterialYieldStresValue * 0.6) {
        var BendingStressCheckatBaseXaxis = <h1>OK</h1>;
    } else {
        var BendingStressCheckatBaseXaxis = <h1 style={{ color: '#bd2323' }}>NOT OK</h1>;
    }

    // //   Bending Stress Check at Base (Y-axis)
    if (BendingStressActualaboutYaxisOutofPlane < MaterialYieldStresValue * 0.75) {
        var BendingStressCheckatBaseYaxis = <h1>OK</h1>
    } else {
        var BendingStressCheckatBaseYaxis = <h1 style={{ color: '#bd2323' }}>NOT OK</h1>;
    }

    // // Shear Stress Check at Base (Y direction)
    if (ShearStressatBaseActualHorizontalYdirection < MaterialYieldStresValue * 0.4) {
        var ShearStressCheckatBaseYdirection = <h1>OK</h1>;
    } else {
        var ShearStressCheckatBaseYdirection = <h1 style={{ color: '#bd2323' }}>NOT OK</h1>;
    }
    // Shear Stress Check at Base (X direction)
    if (ShearStressatBaseActualLateralXdirection < 35) {
        var ShearStressCheckatBaseXdirection = <h1>OK</h1>
    } else {
        var ShearStressCheckatBaseXdirection = <h1 style={{ color: '#bd2323' }}>NOT OK</h1>
    }

    // Combined Stress Check as per AISC H2-1
    const fa = TensileStressatBaseActual
    const ft = MaterialYieldStresValue * 0.6

    const fbx = BendingStressActualaboutXaxisInplane
    const Fbx = MaterialYieldStresValue * 0.6

    const fby = BendingStressaboutYaxisOutofPlane
    const Fby = MaterialYieldStresValue * 0.75
    const CombinedStressCheckasperAISCH21 = (fa / ft) + (fbx / Fbx) + (fby / Fby)
    if (CombinedStressCheckasperAISCH21 < 1) {
        var CombinedStressCheckatStressCheckBasePlate = <h1>OK</h1>;
    } else {
        var CombinedStressCheckatStressCheckBasePlate = <h1 style={{ color: '#bd2323' }}>NOT OK</h1>;
    }

    // Combined Stress Check at Base
    if (TotalStressatBaseWeldActual < ElectrodeTensileStrength * 0.3) {
        var CombinedStressCheckatBase = <h1>OK</h1>;
    } else {
        var CombinedStressCheckatBase = <h1 style={{ color: '#bd2323' }}>NOT OK</h1>;
    }

    // // Stress Check at Cheek Plate Weld
    if (WeldStressatCheekWeldActual < ElectrodeTensileStrength * 0.3) {
        var StressCheckatCheekPlateWeld = <h1>OK</h1>;
    } else {
        var StressCheckatCheekPlateWeld = <h1 style={{ color: '#bd2323' }}>NOT OK</h1>;
    }


    // scroll once tansaction 

    const [expanded, setExpanded] = useState(false);
    const [Sectionthird, setSectionthird] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100 && !expanded) {
                setExpanded(true);
            }
            if (window.scrollY > 350 && !Sectionthird) {
                setSectionthird(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [expanded, Sectionthird]);
    return (
        <>
            <div className='Background-Black'></div>
            <div className='ME-navbar-links'>
                <ul className='ME-navbar-links-ul'>
                    <li className='ME-navbar-links-li'>
                        <Link to='/PadEyecalculatorPage'>
                            Pad eye
                        </Link>
                    </li>
                    <li className='ME-navbar-links-li'>
                        <Link to='/Singlepage'>
                            Beam Properties
                        </Link>
                    </li>
                    <li className='ME-navbar-links-li'>
                        <Link to='/BeamDeflectionCalculator'>
                            Beam Deflection
                        </Link>
                    </li>
                    <li className='ME-navbar-links-li'>
                        <Link to='/AboutUs'>
                            About US
                        </Link>
                    </li>
                </ul>
            </div>
            <section className='background-white PadEye'>

                <div className='calculator-first-section-div'>
                    <div className='calculator-first-section-imgdiv'>
                        <img className='calculator-first-section-imgdiv-img' src={Backgroundimg} alt='' />
                    </div>
                    <div className='calculator-first-section-textdiv'>
                        <h3 className='calculator-first-section-textdiv-h1'>Pad-Eye Calculator</h3>
                        <div className='margin-top-10px'></div>
                        <p className='calculator-first-section-textdiv-p'>Padeye calculator is a tool used used in engineering and<br /> construction to determine the required dimensions and<br /> specifications for padeyes, which are integral for lifting<br /> and rigging systems.
                        </p>
                    </div>
                </div>

                <br />
                <br />
                <hr className="Beam-properties-calculator-hr"></hr>

                <section className='calculator-defination-section '>
                    <div className={`calculator-defination-div`}>
                        <h3 className={`Beam-properties-calculator-heading ${expanded ? 'expanded' : ''}`}>
                            <span>OOK Pad-Eye Calculator</span>
                        </h3>
                        <div className={`calculator-defination-section-div ${expanded ? 'expanded' : ''}`}>
                            <h3 className='calculator-defination-section first-important'>
                                Calculator help us to design a pad-eye to be used for<br /> lifting during transport.
                            </h3>
                            <br />
                            <h3 className='calculator-defination-section second-important'>
                                Calculator considers a number of factors, to make sure the Padeye <br />can safely support the intended load without failing, <br />including the weight of the load, the angle of lift,<br /> the material and thickness of the structure,<br /> and safety considerations.
                            </h3>
                            <br />
                            {/* <h3 className='calculator-defination-section third-important'>
                        including the weight of the load, the angle of lift, the material and thickness<br />  of the structure, and safety considerations.
                    </h3> */}
                        </div>
                    </div>
                    <br />
                    <br />
                    <hr className="Beam-properties-calculator-hr"></hr>
                    <br />
                    <br />
                    <br />
                    {/*  */}
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <h3 className={`calculator-defination-section third-important Beam-properties-calculator-heading ${Sectionthird ? 'expanded' : ''}`} style={{ color: '#000', textTransform: 'uppercase', fontSize: '1.8vw' }}>
                            It can be used for the design of a <br />standard Pad-eye with:
                        </h3>
                        <br />
                        <h3 className='calculator-defination-section third-important' style={{ textAlign: 'left', width: '56%', color: '#1d1d1dbf' }}>
                            1. No brackets
                        </h3>
                        <h3 className='calculator-defination-section third-important' style={{ textAlign: 'left', width: '56%', color: '#1d1d1dbf' }}>
                            2. Single cheek plate on either side
                        </h3>
                        <br />
                        <br />
                        {/*  */}
                        <h3 className='calculator-defination-section third-important' style={{ color: '#000', textTransform: 'uppercase', fontSize: '1.8vw' }}>
                            It makes the following checks:
                        </h3>
                        <br />

                        <h3 className='calculator-defination-section third-important' style={{ textAlign: 'left', width: '56%', color: '#1d1d1dbf' }}>
                            1. Geometry check: Main plate radius, Shackle clearances
                        </h3>
                        <h3 className='calculator-defination-section third-important' style={{ textAlign: 'left', width: '56%', color: '#1d1d1dbf' }}>
                            2. Stress Check for Pin Hole (Tensile, Bearing, Shear, Hertz stress)
                        </h3>
                        <h3 className='calculator-defination-section third-important' style={{ textAlign: 'left', width: '56%', color: '#1d1d1dbf' }}>
                            3. Stress check for Base Plate (Tensile, Bending, Shear, Von Mises, and Combined)
                        </h3>
                        <h3 className='calculator-defination-section third-important' style={{ textAlign: 'left', width: '56%', color: '#1d1d1dbf' }}>
                            4. Stress Check for Base Weld (Tensile, Bending, Shear, Total Stress)
                        </h3>
                        <h3 className='calculator-defination-section third-important' style={{ textAlign: 'left', width: '56%', color: '#1d1d1dbf' }}>
                            5. Shear Stress Check for Cheek Plate Weld
                        </h3>
                    </div>
                </section>
                <br />
                <br />
                <hr className="Beam-properties-calculator-hr"></hr>
                <br />
                <br />
                {/* {CombinedStressCheckasperAISCH21} */}
                <section className='structure-analysis-calculator-calculator'>
                    <div className='structure-analysis-calculator-calculator-left'>
                        <br />
                        <br />
                        <button onClick={() => handleOptionChange("option1")}>Material Properties</button>
                        <button onClick={() => handleOptionChange("option2")}>Pad-eye Geometry</button>
                        <button onClick={() => handleOptionChange("option3")}>Shackle Geometry</button>
                        <button onClick={() => handleOptionChange("option4")}>Sling Geometry</button>
                        <button onClick={() => handleOptionChange("option5")}>Pad-eye Load </button>
                        <button onClick={() => handleOptionChange("option6")}>Weld Size</button>
                        <br />
                        <br />
                    </div>
                    <div className='structure-analysis-calculator-calculator-center center'>
                        {selectedOption === 'option1' && (
                            <img className='Padeye-calculator-img' src={MaterialProperties} alt="" />
                        )}
                        {selectedOption === 'option2' && (
                            <img className='Padeye-calculator-img' src={Geometry} alt="" style={{ height: '32vw' }} />
                        )}
                        {selectedOption === 'option3' && (
                            <img className='Padeye-calculator-img' src={ShackleGeometryimg} alt="" style={{ height: '36vw', width: '90%' }} />
                        )}
                        {selectedOption === 'option4' && (
                            <img className='Padeye-calculator-img' src={Slingimg} alt="" style={{ height: '32vw' }} />
                        )}
                        {selectedOption === 'option5' && (
                            <img className='Padeye-calculator-img' src={PadeyeLoadimg} alt="" style={{ height: '32vw' }} />
                        )}
                        {selectedOption === 'option6' && (
                            <img className='Padeye-calculator-img' src={WeldSizeimg} alt="" style={{ height: '36vw', width: '60%' }} />
                        )}
                    </div>
                    <div className='structure-analysis-calculator-calculator-right PadeyeCalculator' >
                        <h3 className='color-white text-aligh-center '>Input</h3>
                        <br />
                        {selectedOption === 'option1' && (

                            <Materialproperty
                                // material proptery
                                // Material Yield Stres
                                MaterialYieldStresValue={MaterialYieldStresValue}
                                MaterialYieldStresselectedUnit={MaterialYieldStresselectedUnit}
                                MaterialYieldStresValueOnchange={((e) => handleMaterialYieldStresChange(e.target.value))}
                                MaterialYieldStressselectedunitOnchange={((e) => handleMaterialYieldStreschange(e.target.value))}
                                MaterialYieldStressoptions={
                                    MaterialYieldStressunits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // Electrode Tensile Strength (for Weld)
                                ElectrodeTensileStrengthValue={ElectrodeTensileStrength}
                                ElectrodeTensileStrengthSelectedUnitValue={ElectrodeTensileStrengthSelectedUnit}
                                ElectrodeTensileStrengthOnchange={((e) => handleElectrodeTensileStrength(e.target.value))}
                                ElectrodeTensileStrengthSelectedUnitOnchange={((e) => handleElectrodeTensileStrengthSelectedUnit(e.target.value))}
                                ElectrodeTensileStrengthoptions={
                                    ElectrodeTensileStrengthunits.map((Unit) => (
                                        <option key={Unit} value={Unit}>
                                            {Unit}
                                        </option>
                                    ))
                                }


                                // Modulus of Elasticity
                                ModulusofElasticityValue={ModulusofElasticityValue}
                                ModulusofElasticitySelectedUnit={ModulusofElasticitySelectedUnit}
                                ModulusofElasticityValueOnchange={((e) => handleModulusofElasticChange(e.target.value))}
                                ModulusofElasticitySelectedUnitOnchange={((e) => handleModulusofElasticUnitChange(e.target.value))}
                                ModulusofElasticityoptions={
                                    ModulusofElasticityunits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // Poisson's Ratio
                                PoissonsRatioValue={PoissonsRatio}
                                PoissonsRatioOnchange={((e) => handlePoissonsRatioChange(e.target.value))}

                                //OUtPUT VALUE
                                // Design Load_Allow Stresses
                                // Allowable Stresses1

                                AllowableBearingStressValue={AllowableBearingStressValue}
                                AllowableBearingStressselectedUnit={AllowableBearingStressselectedUnit}
                                AllowableBearingStressselectedUnitOnchange={(e) => handleAllowableBearingStressUnitChange(e.target.value)}
                                AllowableBearingStressOptions={
                                    AllowableBearingStressunits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                AllowableBendingStressInPlaneValue={AllowableBendingStressInPlaneValue}
                                AllowableBendingStressInPlaneselectedUnit={AllowableBendingStressInPlaneselectedUnit}
                                AllowableBendingStressInPlaneselectedUnitOnchange={(e) => handleAllowableBendingStressInPlaneUnitChange(e.target.value)}
                                AllowableBendingStressInPlaneOption={
                                    AllowableBendingStressInPlaneunits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                AllowableBendingStressOutofPlaneValue={AllowableBendingStressOutofPlaneValue}
                                AllowableBendingStressOutofPlaneselectedUnit={AllowableBendingStressOutofPlaneselectedUnit}
                                AllowableBendingStressOutofPlaneselectedUnitOnchange={(e) => handleAllowableBendingStressOutofPlaneselectedUnitChange(e.target.value)}
                                AllowableBendingStressOutofPlaneOption={
                                    AllowableBendingStressOutofPlaneunits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                AllowableTensileStressValue={AllowableTensileStressValue}
                                AllowableTensileStressSelectedUnit={AllowableTensileStressSelectedUnit}
                                AllowableTensileStressSelectedUnitOnchange={(e) => handleAllowableTensileStressselectedUnitChange(e.target.value)}
                                AllowableTensileStressOption={
                                    AllowableTensileStressUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                AllowableTensileStressatpinholeValue={AllowableTensileStressatpinholeValue}
                                AllowableTensileStressatpinholeSelectedUnit={AllowableTensileStressatpinholeSelectedUnit}
                                AllowableTensileStressatpinholeSelectedUnitOnchange={(e) => handleAllowableTensileStressatpinholeselectedUnitChange(e.target.value)}
                                AllowableTensileStressatpinholeUnits={
                                    AllowableTensileStressatpinholeUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                AllowableShearStressValue={AllowableShearStressValue}
                                AllowableShearStressSelectedUnit={AllowableShearStressSelectedUnit}
                                AllowableShearStressSelectedUnitOnchange={(e) => handleAllowableShearStressselectedUnitChange(e.target.value)}
                                AllowableShearStressOptions={
                                    AllowableShearStressUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                AllowableHertzStressatPinHoleValue={AllowableHertzStressatPinHoleValue}
                                AllowableHertzStressatPinHoleSelectedUnit={AllowableHertzStressatPinHoleSelectedUnit}
                                AllowableHertzStressatPinHoleSelectedUnitOnchange={(e) => handleAllowableHertzStressatPinHoleselectedUnitChange(e.target.value)}
                                AllowableHertzStressatPinHoleOptions={
                                    AllowableHertzStressatPinHoleUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                AllowableWeldStressValue={AllowableWeldStressValue}
                                AllowableWeldStressSelectedUnit={AllowableWeldStressSelectedUnit}
                                AllowableWeldStressSelectedUnitOnchange={(e) => handleAllowableWeldStressselectedUnitChange(e.target.value)}
                                AllowableWeldStressOptions={
                                    AllowableWeldStressUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                // Design Loads
                                LoadinVerticalDirectionZdirectionValue={LoadinVerticalDirectionZdirectionValue}
                                LoadinVerticalDirectionZdirectionSelectedUnit={LoadinVerticalDirectionZdirectionSelectedUnit}
                                handleLoadinVerticalDirectionZdirectionselectedUnitChange={(e) => handleLoadinVerticalDirectionZdirectionselectedUnitChange(e.target.value)}
                                LoadinVerticalDirectionZdirectionOptions={
                                    LoadinVerticalDirectionZdirectionUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }
                                // LoadinVerticalDirectionZdirectionValue={LoadinVerticalDirectionZdirectionValue}
                                // LoadinVerticalDirectionZdirectionSelectedUnit={LoadinVerticalDirectionZdirectionSelectedUnit}
                                // LoadinVerticalDirectionZdirectionValueOnchange={(e) => calculateLoadinVerticalDirectionZdirectionValue(e.target.value)}
                                // LoadinVerticalDirectionZdirectionSelectedUnitOnchange={(e) => handleLoadinVerticalDirectionZdirectionselectedUnitChange(e.target.value)}
                                // LoadinVerticalDirectionZdirectionOptions={
                                //     LoadinVerticalDirectionZdirectionUnits.map((unit) => (
                                //         <option key={unit} value={unit}>
                                //             {unit}
                                //         </option>
                                //     ))
                                // }

                                // handleLoadinVerticalDirectionZdirectionselectedUnitChange

                                LoadinHorizontalDirectionYdirectionValue={LoadinHorizontalDirectionYdirection}
                                LoadinHorizontalDirectionYdirectionSelectedUnit={LoadinHorizontalDirectionYdirectionSelectedUnit}
                                LoadinHorizontalDirectionYdirectionValueOnchange={(e) => calculateLoadinHorizontalDirectionYdirectionValue(e.target.value)}
                                LoadinHorizontalDirectionYdirectionSelectedUnitOnchange={(e) => handleLoadinHorizontalDirectionYdirectionselectedUnitChange(e.target.value)}
                                LoadinHorizontalDirectionYdirectionOptions={
                                    LoadinHorizontalDirectionYdirectionUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                OutofplaneLoadLateralLoadXdirectionValue={OutofplaneLoadLateralLoadXdirection}
                                OutofplaneLoadLateralLoadXdirectionSelectedUnit={OutofplaneLoadLateralLoadXdirectionSelectedUnit}
                                OutofplaneLoadLateralLoadXdirectionValueOnchange={(e) => calculateLoadinHorizontalDirectionYdirectionValue(e.target.value)}
                                OutofplaneLoadLateralLoadXdirectionSelectedUnitOnchange={(e) => handleOutofplaneLoadLateralLoadXdirectionselectedUnitChange(e.target.value)}
                                OutofplaneLoadLateralLoadXdirectionOptions={
                                    OutofplaneLoadLateralLoadXdirectionUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                PadEyeDesignLoadvalue={PadEyeDesignLoad}
                                PadEyeDesignLoadSelectedUnit={PadEyeDesignLoadSelectedUnit}
                                PadEyeDesignLoadvalueOnchange={(e) => calculateLoadinHorizontalDirectionYdirectionValue(e.target.value)}
                                PadEyeDesignLoadSelectedUnitOnchange={(e) => handlePadEyeDesignLoadselectedUnitChange(e.target.value)}
                                PadEyeDesignLoadOptions={
                                    PadEyeDesignLoadUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                DesignLoadinVerticalDirectionZdirectionvalue={DesignLoadinVerticalDirectionZdirection}
                                DesignLoadinVerticalDirectionZdirectionSelectedUnit={DesignLoadinVerticalDirectionZdirectionSelectedUnit}
                                DesignLoadinVerticalDirectionZdirectionvalueOnchange={(e) => calculateLoadinHorizontalDirectionYdirectionValue(e.target.value)}
                                DesignLoadinVerticalDirectionZdirectionSelectedUnitOnchange={(e) => handleDesignLoadinVerticalDirectionZdirectionselectedUnitChange(e.target.value)}
                                DesignLoadinVerticalDirectionZdirectionOptions={
                                    DesignLoadinVerticalDirectionZdirectionUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                DesignLoadinHorizontalDirectionYdirectionValue={DesignLoadinHorizontalDirectionYdirection}
                                DesignLoadinHorizontalDirectionYdirectionSelectedUnit={DesignLoadinHorizontalDirectionYdirectionSelectedUnit}
                                DesignLoadinHorizontalDirectionYdirectionValueOnchange={(e) => calculateLoadinHorizontalDirectionYdirectionValue(e.target.value)}
                                DesignLoadinHorizontalDirectionYdirectionSelectedUnitOnchange={(e) => handleDesignLoadinHorizontalDirectionYdirectionselectedUnitChange(e.target.value)}
                                DesignLoadinHorizontalDirectionYdirectionOption={
                                    DesignLoadinHorizontalDirectionYdirectionUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                DesignLoadOutofPlaneLateralXdirectionValue={DesignLoadOutofPlaneLateralXdirection}
                                DesignLoadOutofPlaneLateralXdirectionSelectedUnit={DesignLoadOutofPlaneLateralXdirectionSelectedUnit}
                                DesignLoadOutofPlaneLateralXdirectionValueOnchange={(e) => calculateLoadinHorizontalDirectionYdirectionValue(e.target.value)}
                                DesignLoadOutofPlaneLateralXdirectionSelectedUnitOnchange={(e) => handleDesignLoadOutofPlaneLateralXdirectionselectedUnitChange(e.target.value)}
                                DesignLoadOutofPlaneLateralXdirectionOption={
                                    DesignLoadOutofPlaneLateralXdirectionUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }



                                // geometry check

                                Clearancebetweenpinholediaandpindiavalue={Clearancebetweenpinholediaandpindia}
                                ClearancebetweenpinholediaandpindiaSelectedunit={ClearancebetweenpinholediaandpindiaSelectedunit}
                                ClearancebetweenpinholediaandpindiaSelectedunitOnchange={(e) => handleClearancebetweenpinholediaandpindiaselectedUnitChange(e.target.value)}
                                ClearancebetweenpinholediaandpindiaOptions={
                                    ClearancebetweenpinholediaandpindiaUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                LengthClearanceofShackleValue={LengthClearanceofShackle}
                                LengthClearanceofShackleselectedunit={LengthClearanceofShackleselectedunit}
                                LengthClearanceofShackleselectedunitOnchange={(e) => handleLengthClearanceofShackleselectedUnitChange(e.target.value)}
                                LengthClearanceofShackleOption={
                                    LengthClearanceofShackleUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                WidthClearanceofShackle={WidthClearanceofShackle}
                                WidthClearanceofShackleSelectedUnit={WidthClearanceofShackleSelectedUnit}
                                WidthClearanceofShackleSelectedUnitOnchange={(e) => handleWidthClearanceofShackleUnitChange(e.target.value)}
                                WidthClearanceofShackleOption={
                                    WidthClearanceofShackleUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                // Stress Checks at Pin Hole
                                // Bearing Area
                                BearingAreaValue={BearingArea}
                                BearingAreaSelectedUnit={BearingAreaSelectedUnit}
                                BearingAreaSelectedUnitOnchange={(e) => handleBearingAreaUnitChange(e.target.value)}
                                BearingAreaOptions={
                                    BearingAreaUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                // Bearing Stress (Actual)
                                BearingStressActualValue={BearingStressActual}
                                BearingStressActualSelectedUnit={BearingStressActualSelectedUnit}
                                BearingStressActualSelectedUnitOnchange={(e) => handleBearingStressActualUnitChange(e.target.value)}
                                BearingStressActualOptions={
                                    BearingStressActualUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                //Shear Stress Check at Pin Hole 
                                RadiusofCheekPlateValue={RadiusofCheekPlate}
                                RadiusofCheekPlateSelectedUnit={RadiusofCheekPlateSelectedUnit}
                                RadiusofCheekPlateSelectedUnitOnchange={(e) => handleRadiusofCheekPlateUnitChange(e.target.value)}
                                RadiusofCheekPlateOptions={
                                    RadiusofCheekPlateUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                ShearAreaofpinholeValue={ShearAreaofpinhole}
                                ShearAreaofpinholeSelectedUnit={ShearAreaofpinholeSelectedUnit}
                                ShearAreaofpinholeSelectedUnitOnchange={(e) => handleShearAreaofpinholeUnitChange(e.target.value)}
                                ShearAreaofpinholeOption={
                                    ShearAreaofpinholeUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                ShearStressatpinholeValue={ShearStressatpinhole}
                                ShearStressatpinholeSelectedUnit={ShearStressatpinholeSelectedUnit}
                                ShearStressatpinholeSelectedUnitOnchange={(e) => handleShearStressatpinholeUnitChange(e.target.value)}
                                ShearStressatpinholeOptions={
                                    ShearStressatpinholeUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                TensileAreaforsectionAAValue={TensileAreaforsectionAA}
                                TensileAreaforsectionAASelectedUnit={TensileAreaforsectionAASelectedUnit}
                                TensileAreaforsectionAASelectedUnitOnchange={(e) => handleTensileAreaforsectionAAUnitChange(e.target.value)}
                                TensileAreaforsectionAAOption={
                                    TensileAreaforsectionAAUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                TensileStressatpinholeActualatsectionAAValue={TensileStressatpinholeActualatsectionAA}
                                TensileStressatpinholeActualatsectionAASelectedUnit={TensileStressatpinholeActualatsectionAASelectedUnit}
                                TensileStressatpinholeActualatsectionAASelectedUnitOnchange={(e) => handleTensileStressatpinholeActualatsectionAAUnitChange(e.target.value)}
                                TensileStressatpinholeActualatsectionAAOption={
                                    TensileStressatpinholeActualatsectionAAUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                TensileAreaforsectionBBValue={TensileAreaforsectionBB}
                                TensileAreaforsectionBBSelectedUnit={TensileAreaforsectionBBSelectedUnit}
                                TensileAreaforsectionBBSelectedUnitOnchange={(e) => handleTensileAreaforsectionBBUnitChange(e.target.value)}
                                TensileAreaforsectionBBOption={
                                    TensileAreaforsectionBBUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                TensileStressatpinholeActualatsectionBBValue={TensileStressatpinholeActualatsectionBB}
                                TensileStressatpinholeActualatsectionBBSelectedUnit={TensileStressatpinholeActualatsectionBBSelectedUnit}
                                TensileStressatpinholeActualatsectionBBSelectedUnitOnchange={(e) => handleTensileStressatpinholeActualatsectionBBUnitChange(e.target.value)}
                                TensileStressatpinholeActualatsectionBBOption={
                                    TensileStressatpinholeActualatsectionBBUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                DesignLoadperunitLengthValue={DesignLoadperunitLength}
                                DesignLoadperunitLengthSelectedUnit={DesignLoadperunitLengthSelectedUnit}
                                DesignLoadperunitLengthSelectedUnitOnchange={(e) => handleDesignLoadperunitLengthUnitChange(e.target.value)}
                                DesignLoadperunitLengthOptions={
                                    DesignLoadperunitLengthUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                HertzStressatPinHoleValue={HertzStressatPinHole}
                                HertzStressatPinHoleSelectedUnit={HertzStressatPinHoleSelectedUnit}
                                HertzStressatPinHoleSelectedUnitOnchange={(e) => handleHertzStressatPinHoleUnitChange(e.target.value)}
                                HertzStressatPinHoleOptions={
                                    HertzStressatPinHoleUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // Stress Checks at Base Plate
                                // Tensile Stress Check

                                // Tensile Area
                                TensileAreaValue={TensileArea}
                                TensileAreaSelectedUnit={TensileAreaSelectedUnit}
                                TensileAreaSelectedUnitOnchange={(e) => handleTensileAreaUnitChange(e.target.value)}
                                TensileAreaOptions={
                                    TensileAreaUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // Tensile Stress at Base (Actual)
                                TensileStressatBaseActualValue={TensileStressatBaseActual}
                                TensileStressatBaseActualSelectedUnit={TensileStressatBaseActualSelectedUnit}
                                TensileStressatBaseActualSelectedUnitOnchange={(e) => handleTensileStressatBaseActualUnitChange(e.target.value)}
                                TensileStressatBaseActualOption={
                                    TensileStressatBaseActualUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // Bending Stress Check

                                //Moment lever for Horizontal/Lateral Force
                                MomentleverforHorizontalLateralForceValue={MomentleverforHorizontalLateralForce}
                                MomentleverforHorizontalLateralForceSelectedUnit={MomentleverforHorizontalLateralForceSelectedUnit}
                                MomentleverforHorizontalLateralForceSelectedUnitOnchange={(e) => handleMomentleverforHorizontalLateralForceUnitChange(e.target.value)}
                                MomentleverforHorizontalLateralForceOptions={
                                    MomentleverforHorizontalLateralForceUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                MomentleverforVerticalForceValue={MomentleverforVerticalForce}
                                MomentleverforVerticalForceSelectedUnit={MomentleverforVerticalForceSelectedUnit}
                                MomentleverforVerticalForceSelectedUnitOnchange={(e) => handleMomentleverforVerticalForceUnitChange(e.target.value)}
                                MomentleverforVerticalForceOptions={
                                    MomentleverforVerticalForceUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                TotalDesignMomentaboutXaxisInplaneValue={TotalDesignMomentaboutXaxisInplane}
                                TotalDesignMomentaboutXaxisInplaneSelectedUnit={TotalDesignMomentaboutXaxisInplaneSelectedUnit}
                                TotalDesignMomentaboutXaxisInplaneSelectedUnitOnchange={(e) => handleTotalDesignMomentaboutXaxisInplaneUnitChange(e.target.value)}
                                TotalDesignMomentaboutXaxisInplaneOptions={
                                    TotalDesignMomentaboutXaxisInplaneUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                SectionModulusofBaseaboutXaxisValue={SectionModulusofBaseaboutXaxis}
                                SectionModulusofBaseaboutXaxisSelectedUnit={SectionModulusofBaseaboutXaxisSelectedUnit}
                                SectionModulusofBaseaboutXaxisSelectedUnitOnchange={(e) => handleSectionModulusofBaseaboutXaxisUnitChange(e.target.value)}
                                SectionModulusofBaseaboutXaxisOption={
                                    SectionModulusofBaseaboutXaxisUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                BendingStressActualaboutXaxisInplaneValue={BendingStressActualaboutXaxisInplane}
                                BendingStressActualaboutXaxisInplaneSelectedUnit={BendingStressActualaboutXaxisInplaneSelectedUnit}
                                BendingStressActualaboutXaxisInplaneOnchange={(e) => handleBendingStressActualaboutXaxisInplaneUnitChange(e.target.value)}
                                BendingStressActualaboutXaxisInplaneOption={
                                    BendingStressActualaboutXaxisInplaneUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }
                                // Total Design Moment about Y-axis (Out-of Plane)
                                TotalDesignMomentaboutYaxisOutofPlaneValue={TotalDesignMomentaboutYaxisOutofPlane}
                                TotalDesignMomentaboutYaxisOutofPlaneSelectedUnit={TotalDesignMomentaboutYaxisOutofPlaneSelectedUnit}
                                TotalDesignMomentaboutYaxisOutofPlaneSelectedUnitOnchange={(e) => handleTotalDesignMomentaboutYaxisOutofPlaneUnitChange(e.target.value)}
                                TotalDesignMomentaboutYaxisOutofPlaneOption={
                                    TotalDesignMomentaboutYaxisOutofPlaneUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }
                                // Section Modulus of Base about Y-axis
                                SectionModulusofBaseaboutYaxisValue={SectionModulusofBaseaboutYaxis}
                                SectionModulusofBaseaboutYaxisSelectedUnit={SectionModulusofBaseaboutYaxisSelectedUnit}
                                SectionModulusofBaseaboutYaxisSelectedUnitOnchange={(e) => handleSectionModulusofBaseaboutYaxisUnitChange(e.target.value)}
                                SectionModulusofBaseaboutYaxisOption={
                                    SectionModulusofBaseaboutYaxisUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                // Bending Stress (Actual) - about Y-axis (Out-of-Plane)
                                BendingStressActualaboutYaxisOutofPlaneValue={BendingStressActualaboutYaxisOutofPlane}
                                BendingStressActualaboutYaxisOutofPlaneSelectedUnit={BendingStressActualaboutYaxisOutofPlaneSelectedUnit}
                                BendingStressActualaboutYaxisOutofPlaneSelectedUnitOnchange={(e) => handleBendingStressActualaboutYaxisOutofPlaneUnitChange(e.target.value)}
                                BendingStressActualaboutYaxisOutofPlaneOption={
                                    BendingStressActualaboutYaxisOutofPlaneUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                // ShearAreaatBaseHorizontal
                                ShearAreaatBaseHorizontalValue={ShearAreaatBaseHorizontal}
                                ShearAreaatBaseHorizontalSelectedUnit={ShearAreaatBaseHorizontalSelectedUnit}
                                ShearAreaatBaseHorizontalSelectedUnitOnchange={(e) => handleShearAreaatBaseHorizontalUnitChange(e.target.value)}
                                ShearAreaatBaseHorizontalOption={
                                    ShearAreaatBaseHorizontalUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // ShearStressatBaseActualHorizontalYdirection
                                ShearStressatBaseActualHorizontalYdirection={ShearStressatBaseActualHorizontalYdirection}
                                ShearStressatBaseActualHorizontalYdirectionSelectedUnit={ShearStressatBaseActualHorizontalYdirectionSelectedUnit}
                                ShearStressatBaseActualHorizontalYdirectionSelectedUnitOnchange={(e) => handleShearStressatBaseActualHorizontalYdirectionUnitChange(e.target.value)}
                                ShearStressatBaseActualHorizontalYdirectionOptions={
                                    ShearStressatBaseActualHorizontalYdirectionUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // ShearStressatBaseActualLateralXdirection
                                ShearStressatBaseActualLateralXdirection={ShearStressatBaseActualLateralXdirection}
                                ShearStressatBaseActualLateralXdirectionSelectedUnit={ShearStressatBaseActualLateralXdirectionSelectedUnit}
                                ShearStressatBaseActualLateralXdirectionSelectedUnitOnchange={(e) => handleShearStressatBaseActualLateralXdirectionUnitChange(e.target.value)}
                                ShearStressatBaseActualLateralXdirectionOption={
                                    ShearStressatBaseActualLateralXdirectionUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // VonMisesStressatBaseActual
                                VonMisesStressatBaseActual={VonMisesStressatBaseActual}
                                VonMisesStressatBaseActualSelectedUnit={VonMisesStressatBaseActualSelectedUnit}
                                VonMisesStressatBaseActualSelectedUnitOnchange={(e) => handleVonMisesStressatBaseActualUnitChange(e.target.value)}
                                VonMisesStressatBaseActualOption={
                                    VonMisesStressatBaseActualUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }
                                WeldCheckatCheekPlateWeld
                                // Throatthickness
                                ThroatthicknessValue={Throatthickness}
                                ThroatthicknessSelectedUnit={ThroatthicknessSelectedUnit}
                                ThroatthicknessSelectedUnitOnchange={(e) => handleThroatthicknessUnitChange(e.target.value)}
                                ThroatthicknessOption={
                                    ThroatthicknessUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // WeldCheckatCheekPlateWeldThroatthickness
                                WeldCheckatCheekPlateWeldThroatthicknessValue={WeldCheckatCheekPlateWeldThroatthickness}
                                WeldCheckatCheekPlateWeldThroatthicknessSelectedUnit={WeldCheckatCheekPlateWeldThroatthicknessSelectedUnit}
                                WeldCheckatCheekPlateWeldThroatthicknessSelectedUnitOnchange={(e) => handleWeldCheckatCheekPlateWeldThroatthicknessUnitChange(e.target.value)}
                                WeldCheckatCheekPlateWeldThroatthicknessOption={
                                    WeldCheckatCheekPlateWeldThroatthicknessUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                // TotalWeldLength
                                TotalWeldLengthvalue={TotalWeldLength}
                                TotalWeldLengthSelectedUnit={TotalWeldLengthSelectedUnit}
                                TotalWeldLengthSelectedUnitOnchange={(e) => handleTotalWeldLengthUnitChange(e.target.value)}
                                TotalWeldLengthOption={
                                    TotalWeldLengthUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // ShearStressatBaseWeld
                                ShearStressatBaseWeldValue={ShearStressatBaseWeld}
                                ShearStressatBaseWeldSelectedUnit={ShearStressatBaseWeldSelectedUnit}
                                ShearStressatBaseWeldSelectedUnitOnchange={(e) => handleShearStressatBaseWeldUnitChange(e.target.value)}
                                ShearStressatBaseWeldOption={
                                    ShearStressatBaseWeldUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // ShearStressatBaseWeldActualHorizontalYdirection
                                ShearStressatBaseWeldActualHorizontalYdirectionValue={ShearStressatBaseWeldActualHorizontalYdirection} ShearStressatBaseWeldActualHorizontalYdirectionSelectedUnit={ShearStressatBaseWeldActualHorizontalYdirectionSelectedUnit} ShearStressatBaseWeldActualHorizontalYdirectionSelectedUnitOnchange={(e) => handleShearStressatBaseWeldActualHorizontalYdirectionUnitChange(e.target.value)} ShearStressatBaseWeldActualHorizontalYdirectionOptions={ShearStressatBaseWeldActualHorizontalYdirectionUnits.map((unit) => (<option key={unit} value={unit}>{unit}</option>))}

                                // ShearStressatBaseWeldActualLateralXdirection
                                ShearStressatBaseWeldActualLateralXdirectionValue={ShearStressatBaseWeldActualLateralXdirection} ShearStressatBaseWeldActualLateralXdirectionSelectedUnit={ShearStressatBaseWeldActualLateralXdirectionSelectedUnit} ShearStressatBaseWeldActualLateralXdirectionSelectedUnitOnchange={(e) => handleShearStressatBaseWeldActualLateralXdirectionUnitChange(e.target.value)} ShearStressatBaseWeldActualLateralXdirectionOption={ShearStressatBaseWeldActualLateralXdirectionUnit.map((unit) => (<option key={unit} value={unit}>{unit}</option>))}

                                // TensileAreaatBase
                                TensileAreaatBase={TensileAreaatBase} TensileAreaatBaseSelectedUnit={TensileAreaatBaseSelectedUnit} TensileAreaatBaseSelectedUnitOnchange={(e) => handleTensileAreaatBaseUnitChange(e.target.value)} TensileAreaatBaseOption={TensileAreaatBaseUnit.map((unit) => (<option key={unit} value={unit}>{unit}</option>))}

                                // TensileStressatBaseWeldActual
                                TensileStressatBaseWeldActual={TensileStressatBaseWeldActual} TensileStressatBaseWeldActualSelectedUnit={TensileStressatBaseWeldActualSelectedUnit} TensileStressatBaseWeldActualSelectedUnitOnchange={(e) => handleTensileStressatBaseWeldActualUnitChange(e.target.value)} TensileStressatBaseWeldActualoption={TensileStressatBaseWeldActualUnit.map((unit) => (<option key={unit} value={unit}>{unit}</option>))}

                                // SectionModulusofWeldaboutXaxis
                                SectionModulusofWeldaboutXaxis={SectionModulusofWeldaboutXaxis} SectionModulusofWeldaboutXaxisSelectedUnit={SectionModulusofWeldaboutXaxisSelectedUnit} SectionModulusofWeldaboutXaxisSelectedUnitOnchange={(e) => handleSectionModulusofWeldaboutXaxisUnitChange(e.target.value)} SectionModulusofWeldaboutXaxisOptions={SectionModulusofWeldaboutXaxisUnit.map((unit) => (<option key={unit} value={unit}>{unit}</option>))}

                                // SectionModulusofWeldaboutYaxis
                                SectionModulusofWeldaboutYaxis={SectionModulusofWeldaboutYaxis} SectionModulusofWeldaboutYaxisSelectedUnit={SectionModulusofWeldaboutYaxisSelectedUnit} SectionModulusofWeldaboutYaxisSelectedUnitOnchange={(e) => handleSectionModulusofWeldaboutYaxisUnitChange(e.target.value)} SectionModulusofWeldaboutYaxisOptions={SectionModulusofWeldaboutYaxisUnit.map((unit) => (<option key={unit} value={unit}>{unit}</option>))}

                                // BendingStressatBaseWeldActualaboutXAxisInPlane
                                BendingStressatBaseWeldActualaboutXAxisInPlane={BendingStressatBaseWeldActualaboutXAxisInPlane}
                                BendingStressatBaseWeldActualaboutXAxisInPlaneSelectedUnit={BendingStressatBaseWeldActualaboutXAxisInPlaneSelectedUnit}
                                BendingStressatBaseWeldActualaboutXAxisInPlaneSelectedUnitOnchange={(e) => handleBendingStressatBaseWeldActualaboutXAxisInPlaneUnitChange(e.target.value)}
                                BendingStressatBaseWeldActualaboutXAxisInPlaneOptions={
                                    BendingStressatBaseWeldActualaboutXAxisInPlaneUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }
                                // TotalDesignMomentaboutYaxisOutofPlane
                                TotalDesignMomentaboutYaxisOutofPlane={TotalDesignMomentaboutYaxisOutofPlane}
                                TotalDesignMomentaboutYaxisOutofPlaneSelectedUnits={TotalDesignMomentaboutYaxisOutofPlaneSelectedUnit}
                                TotalDesignMomentaboutYaxisOutofPlaneSelectedUnitsOnchange={(e) => handleTotalDesignMomentaboutYaxisOutofPlaneUnitChange(e.target.value)}
                                TotalDesignMomentaboutYaxisOutofPlaneOptions={
                                    BendingStressActualaboutYaxisOutofPlaneUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }
                                // BendingStressaboutYaxisOutofPlane
                                BendingStressaboutYaxisOutofPlane={BendingStressaboutYaxisOutofPlane}
                                BendingStressaboutYaxisOutofPlaneSelectedUnit={BendingStressaboutYaxisOutofPlaneSelectedUnit}
                                BendingStressaboutYaxisOutofPlaneSelectedUnitOnchange={(e) => handleBendingStressaboutYaxisOutofPlaneUnitChange(e.target.value)}
                                BendingStressaboutYaxisOutofPlaneOptions={
                                    BendingStressaboutYaxisOutofPlaneUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // TotalStressatBaseWeldActual
                                TotalStressatBaseWeldActual={TotalStressatBaseWeldActual}
                                TotalStressatBaseWeldActualSelectedUnit={TotalStressatBaseWeldActualSelectedUnit}
                                TotalStressatBaseWeldActualSelectedUnitOnchange={(e) => handleTotalStressatBaseWeldActualUnitChange(e.target.value)}
                                TotalStressatBaseWeldActualOptions={
                                    TotalStressatBaseWeldActualUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // Weld Check at Cheek Plate Weld

                                // WeldLength
                                WeldLength={WeldLength}
                                WeldLengthSelectedUnit={WeldLengthSelectedUnit}
                                WeldLengthSelectedUnitOnchange={(e) => handleWeldLengthUnitChange(e.target.value)}
                                WeldLengthOptions={
                                    WeldLengthUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // WeldAreaatCheekPlate
                                WeldAreaatCheekPlate={WeldAreaatCheekPlate}
                                WeldAreaatCheekPlateSelectedUnit={WeldAreaatCheekPlateSelectedUnit}
                                WeldAreaatCheekPlateSelectedUnitOnchange={(e) => handleWeldAreaatCheekPlateUnitChange(e.target.value)}
                                WeldAreaatCheekPlateOptions={
                                    WeldAreaatCheekPlateUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }
                                // DesignLoadononecheekplate
                                DesignLoadononecheekplate={DesignLoadononecheekplate}
                                DesignLoadononecheekplateSelectedUnit={DesignLoadononecheekplateSelectedUnit}
                                DesignLoadononecheekplateSelectedUnitOnchange={(e) => handleDesignLoadononecheekplateUnitChange(e.target.value)}
                                DesignLoadononecheekplateOptions={
                                    DesignLoadononecheekplateUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }
                                // WeldStressatCheekWeldActual
                                WeldStressatCheekWeldActual={WeldStressatCheekWeldActual}
                                WeldStressatCheekWeldActualSelectedUnit={WeldStressatCheekWeldActualSelectedUnit}
                                WeldStressatCheekWeldActualSelectedUnitOnchange={(e) => handleWeldStressatCheekWeldActualUnitChange(e.target.value)}
                                WeldStressatCheekWeldActualoptions={
                                    WeldStressatCheekWeldActualUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // If else
                                MainPlateRadiusCondition={MainPlateRadius}
                                ShackleClearanceChecksCondition={ShackleClearanceChecks}
                                // 
                                BearingStressCheckatPinHoleCondition={BearingStressCheckatPinHole}
                                ShearStressCheckatPinHoleCondition={ShearStressCheckatPinHole}
                                TensileStressCheckatPinHoleCondition={TensileStressCheckatPinHole}
                                HertzContactStressCheckatPinHoleCondition={HertzContactStressCheckatPinHole}
                                // 
                                TensileStressCheckatBaseCondition={TensileStressCheckatBase}
                                BendingStressCheckatBaseXaxisCondition={BendingStressCheckatBaseXaxis}
                                BendingStressCheckatBaseYaxisCondition={BendingStressCheckatBaseYaxis}
                                ShearStressCheckatBaseYdirectionCondition={ShearStressCheckatBaseYdirection}
                                ShearStressCheckatBaseXdirectionCondition={ShearStressCheckatBaseXdirection}
                                CombinedStressCheckatStressCheckBasePlateCondition={CombinedStressCheckatStressCheckBasePlate}
                                // 
                                CombinedStressCheckatBaseCondition={CombinedStressCheckatBase}
                                // 
                                StressCheckatCheekPlateWeldCondition={StressCheckatCheekPlateWeld}

                                // toogle function
                                togglefunction={isActive3}
                                toggleBreaks={toggleClass3}
                            />
                        )}
                        {selectedOption === 'option2' && (
                            <>
                                <PadeyeGeometry

                                    // Radius of Main Plate
                                    RadiusofMainPlateValue={RadiusofMainPlateValue}
                                    RadiusofMainPlateselectedUnit={RadiusofMainPlateselectedUnit}
                                    RadiusofMainPlateValueOnchange={((e) => handleRadiusofMainPlateInputChange(e.target.value))}
                                    RadiusofMainPlateselectedUnitOnchange={((e) => handleRadiusofMainPlateUnitChange(e.target.value))}
                                    RadiusofMainPlateOptions={
                                        RadiusofMainPlateunits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }

                                    // Thickness of Main Plate
                                    ThicknessofMainPlateValue={ThicknessofMainPlateValue}
                                    ThicknessofMainPlateSelectedUnit={ThicknessofMainPlateSelectedUnit}
                                    ThicknessofMainPlateValueOnchange={((e) => handleThicknessofMainPlateValue(e.target.value))}
                                    ThicknessofMainPlateSelectedUnitOnchange={((e) => handleThicknessofMainPlateSelectedUnit(e.target.value))}
                                    ThicknessofMainPlateOptions={
                                        ThicknessofMainPlateunits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }

                                    // Diameter of eye pin hole
                                    DiameterofeyepinholeValue={DiameterofeyepinholeValue}
                                    DiameterofeyepinholeselectedUnit={DiameterofeyepinholeselectedUnit}
                                    DiameterofeyepinholeValueOnchange={((e) => handleDiameterofeyepinholeChange(e.target.value))}
                                    DiameterofeyepinholeselectedUnitOnchange={((e) => handleDiameterofeyepinholeUnitChange(e.target.value))}
                                    DiameterofeyepinholeOption={
                                        Diameterofeyepinholeunits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }

                                    // Diameter of Cheek Plate
                                    DiameterofCheekPlateInputValue={DiameterofCheekPlateInputValue}
                                    DiameterofCheekPlateSelectedUnit={DiameterofCheekPlateSelectedUnit}
                                    DiameterofCheekPlateInputValueOnchange={((e) => handleDiameterofCheekPlateInputValue(e.target.value))}
                                    DiameterofCheekPlateSelectedUnitOnchange={((e) => handleDiameterofCheekPlateSelectedUnit(e.target.value))}
                                    DiameterofCheekPlateOptions={
                                        DiameterofCheekPlateunits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }

                                    // Thickness of Cheek Plate
                                    ThicknessofCheekPlateInputValue={ThicknessofCheekPlateInputValue}
                                    ThicknessofCheekPlateSelectedUnit={ThicknessofCheekPlateSelectedUnit}
                                    ThicknessofCheekPlateInputValueOnchange={((e) => handleThicknessofCheekPlateInputValue(e.target.value))}
                                    ThicknessofCheekPlateSelectedUnitOnchange={((e) => handleThicknessofCheekPlateSelectedUnit(e.target.value))}
                                    ThicknessofCheekPlateOptions={
                                        ThicknessofCheekPlateunits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }


                                    // Total Height of Pad-eye
                                    inputTotalHeightofPadeyeValue={inputTotalHeightofPadeyeValue}
                                    selectedTotalHeightofPadeyeUnit={selectedTotalHeightofPadeyeUnit}
                                    inputTotalHeightofPadeyeValueOnchange={((e) => handleInputTotalHeightofPadeyeChange(e.target.value))}
                                    selectedTotalHeightofPadeyeUnitOnchange={((e) => handleUnitTotalHeightofPadeyeChange(e.target.value))}
                                    TotalHeightofPadeyeOptions={
                                        TotalHeightofPadeyeunits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }

                                    // Length of Base Plate
                                    LengthofBasePlateInputValue={LengthofBasePlateInputValue}
                                    LengthofBasePlateSelectedUnit={LengthofBasePlateSelectedUnit}
                                    LengthofBasePlateInputValueOnchange={((e) => handleLengthofBasePlateInputValue(e.target.value))}
                                    LengthofBasePlateSelectedUnitOnchange={((e) => handleLengthofBasePlateSelectedUnit(e.target.value))}
                                    LengthofBasePlateOptions={
                                        LengthofBasePlateunits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }


                                    AllowableBearingStressValue={AllowableBearingStressValue}
                                    AllowableBearingStressselectedUnit={AllowableBearingStressselectedUnit}
                                    AllowableBearingStressselectedUnitOnchange={(e) => handleAllowableBearingStressUnitChange(e.target.value)}
                                    AllowableBearingStressOptions={
                                        AllowableBearingStressunits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }

                                    AllowableBendingStressInPlaneValue={AllowableBendingStressInPlaneValue}
                                    AllowableBendingStressInPlaneselectedUnit={AllowableBendingStressInPlaneselectedUnit}
                                    AllowableBendingStressInPlaneselectedUnitOnchange={(e) => handleAllowableBendingStressInPlaneUnitChange(e.target.value)}
                                    AllowableBendingStressInPlaneOption={
                                        AllowableBendingStressInPlaneunits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }

                                    AllowableBendingStressOutofPlaneValue={AllowableBendingStressOutofPlaneValue}
                                    AllowableBendingStressOutofPlaneselectedUnit={AllowableBendingStressOutofPlaneselectedUnit}
                                    AllowableBendingStressOutofPlaneselectedUnitOnchange={(e) => handleAllowableBendingStressOutofPlaneselectedUnitChange(e.target.value)}
                                    AllowableBendingStressOutofPlaneOption={
                                        AllowableBendingStressOutofPlaneunits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }

                                    AllowableTensileStressValue={AllowableTensileStressValue}
                                    AllowableTensileStressSelectedUnit={AllowableTensileStressSelectedUnit}
                                    AllowableTensileStressSelectedUnitOnchange={(e) => handleAllowableTensileStressselectedUnitChange(e.target.value)}
                                    AllowableTensileStressOption={
                                        AllowableTensileStressUnits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }

                                    AllowableTensileStressatpinholeValue={AllowableTensileStressatpinholeValue}
                                    AllowableTensileStressatpinholeSelectedUnit={AllowableTensileStressatpinholeSelectedUnit}
                                    AllowableTensileStressatpinholeSelectedUnitOnchange={(e) => handleAllowableTensileStressatpinholeselectedUnitChange(e.target.value)}
                                    AllowableTensileStressatpinholeUnits={
                                        AllowableTensileStressatpinholeUnits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }

                                    AllowableShearStressValue={AllowableShearStressValue}
                                    AllowableShearStressSelectedUnit={AllowableShearStressSelectedUnit}
                                    AllowableShearStressSelectedUnitOnchange={(e) => handleAllowableShearStressselectedUnitChange(e.target.value)}
                                    AllowableShearStressOptions={
                                        AllowableShearStressUnits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }

                                    AllowableHertzStressatPinHoleValue={AllowableHertzStressatPinHoleValue}
                                    AllowableHertzStressatPinHoleSelectedUnit={AllowableHertzStressatPinHoleSelectedUnit}
                                    AllowableHertzStressatPinHoleSelectedUnitOnchange={(e) => handleAllowableHertzStressatPinHoleselectedUnitChange(e.target.value)}
                                    AllowableHertzStressatPinHoleOptions={
                                        AllowableHertzStressatPinHoleUnits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }

                                    AllowableWeldStressValue={AllowableWeldStressValue}
                                    AllowableWeldStressSelectedUnit={AllowableWeldStressSelectedUnit}
                                    AllowableWeldStressSelectedUnitOnchange={(e) => handleAllowableWeldStressselectedUnitChange(e.target.value)}
                                    AllowableWeldStressOptions={
                                        AllowableWeldStressUnits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }


                                    // Design Loads
                                    LoadinVerticalDirectionZdirectionValue={LoadinVerticalDirectionZdirectionValue}
                                    LoadinVerticalDirectionZdirectionSelectedUnit={LoadinVerticalDirectionZdirectionSelectedUnit}
                                    handleLoadinVerticalDirectionZdirectionselectedUnitChange={(e) => handleLoadinVerticalDirectionZdirectionselectedUnitChange(e.target.value)}
                                    LoadinVerticalDirectionZdirectionOptions={
                                        LoadinVerticalDirectionZdirectionUnits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }
                                    // LoadinVerticalDirectionZdirectionValue={LoadinVerticalDirectionZdirectionValue}
                                    // LoadinVerticalDirectionZdirectionSelectedUnit={LoadinVerticalDirectionZdirectionSelectedUnit}
                                    // LoadinVerticalDirectionZdirectionValueOnchange={(e) => calculateLoadinVerticalDirectionZdirectionValue(e.target.value)}
                                    // LoadinVerticalDirectionZdirectionSelectedUnitOnchange={(e) => handleLoadinVerticalDirectionZdirectionselectedUnitChange(e.target.value)}
                                    // LoadinVerticalDirectionZdirectionOptions={
                                    //     LoadinVerticalDirectionZdirectionUnits.map((unit) => (
                                    //         <option key={unit} value={unit}>
                                    //             {unit}
                                    //         </option>
                                    //     ))
                                    // }

                                    // handleLoadinVerticalDirectionZdirectionselectedUnitChange

                                    LoadinHorizontalDirectionYdirectionValue={LoadinHorizontalDirectionYdirection}
                                    LoadinHorizontalDirectionYdirectionSelectedUnit={LoadinHorizontalDirectionYdirectionSelectedUnit}
                                    LoadinHorizontalDirectionYdirectionValueOnchange={(e) => calculateLoadinHorizontalDirectionYdirectionValue(e.target.value)}
                                    LoadinHorizontalDirectionYdirectionSelectedUnitOnchange={(e) => handleLoadinHorizontalDirectionYdirectionselectedUnitChange(e.target.value)}
                                    LoadinHorizontalDirectionYdirectionOptions={
                                        LoadinHorizontalDirectionYdirectionUnits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }

                                    OutofplaneLoadLateralLoadXdirectionValue={OutofplaneLoadLateralLoadXdirection}
                                    OutofplaneLoadLateralLoadXdirectionSelectedUnit={OutofplaneLoadLateralLoadXdirectionSelectedUnit}
                                    OutofplaneLoadLateralLoadXdirectionValueOnchange={(e) => calculateLoadinHorizontalDirectionYdirectionValue(e.target.value)}
                                    OutofplaneLoadLateralLoadXdirectionSelectedUnitOnchange={(e) => handleOutofplaneLoadLateralLoadXdirectionselectedUnitChange(e.target.value)}
                                    OutofplaneLoadLateralLoadXdirectionOptions={
                                        OutofplaneLoadLateralLoadXdirectionUnits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }

                                    PadEyeDesignLoadvalue={PadEyeDesignLoad}
                                    PadEyeDesignLoadSelectedUnit={PadEyeDesignLoadSelectedUnit}
                                    PadEyeDesignLoadvalueOnchange={(e) => calculateLoadinHorizontalDirectionYdirectionValue(e.target.value)}
                                    PadEyeDesignLoadSelectedUnitOnchange={(e) => handlePadEyeDesignLoadselectedUnitChange(e.target.value)}
                                    PadEyeDesignLoadOptions={
                                        PadEyeDesignLoadUnits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }


                                    DesignLoadinVerticalDirectionZdirectionvalue={DesignLoadinVerticalDirectionZdirection}
                                    DesignLoadinVerticalDirectionZdirectionSelectedUnit={DesignLoadinVerticalDirectionZdirectionSelectedUnit}
                                    DesignLoadinVerticalDirectionZdirectionvalueOnchange={(e) => calculateLoadinHorizontalDirectionYdirectionValue(e.target.value)}
                                    DesignLoadinVerticalDirectionZdirectionSelectedUnitOnchange={(e) => handleDesignLoadinVerticalDirectionZdirectionselectedUnitChange(e.target.value)}
                                    DesignLoadinVerticalDirectionZdirectionOptions={
                                        DesignLoadinVerticalDirectionZdirectionUnits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }


                                    DesignLoadinHorizontalDirectionYdirectionValue={DesignLoadinHorizontalDirectionYdirection}
                                    DesignLoadinHorizontalDirectionYdirectionSelectedUnit={DesignLoadinHorizontalDirectionYdirectionSelectedUnit}
                                    DesignLoadinHorizontalDirectionYdirectionValueOnchange={(e) => calculateLoadinHorizontalDirectionYdirectionValue(e.target.value)}
                                    DesignLoadinHorizontalDirectionYdirectionSelectedUnitOnchange={(e) => handleDesignLoadinHorizontalDirectionYdirectionselectedUnitChange(e.target.value)}
                                    DesignLoadinHorizontalDirectionYdirectionOption={
                                        DesignLoadinHorizontalDirectionYdirectionUnits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }


                                    DesignLoadOutofPlaneLateralXdirectionValue={DesignLoadOutofPlaneLateralXdirection}
                                    DesignLoadOutofPlaneLateralXdirectionSelectedUnit={DesignLoadOutofPlaneLateralXdirectionSelectedUnit}
                                    DesignLoadOutofPlaneLateralXdirectionValueOnchange={(e) => calculateLoadinHorizontalDirectionYdirectionValue(e.target.value)}
                                    DesignLoadOutofPlaneLateralXdirectionSelectedUnitOnchange={(e) => handleDesignLoadOutofPlaneLateralXdirectionselectedUnitChange(e.target.value)}
                                    DesignLoadOutofPlaneLateralXdirectionOption={
                                        DesignLoadOutofPlaneLateralXdirectionUnits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }



                                    // geometry check

                                    Clearancebetweenpinholediaandpindiavalue={Clearancebetweenpinholediaandpindia}
                                    ClearancebetweenpinholediaandpindiaSelectedunit={ClearancebetweenpinholediaandpindiaSelectedunit}
                                    ClearancebetweenpinholediaandpindiaSelectedunitOnchange={(e) => handleClearancebetweenpinholediaandpindiaselectedUnitChange(e.target.value)}
                                    ClearancebetweenpinholediaandpindiaOptions={
                                        ClearancebetweenpinholediaandpindiaUnits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }

                                    LengthClearanceofShackleValue={LengthClearanceofShackle}
                                    LengthClearanceofShackleselectedunit={LengthClearanceofShackleselectedunit}
                                    LengthClearanceofShackleselectedunitOnchange={(e) => handleLengthClearanceofShackleselectedUnitChange(e.target.value)}
                                    LengthClearanceofShackleOption={
                                        LengthClearanceofShackleUnits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }

                                    WidthClearanceofShackle={WidthClearanceofShackle}
                                    WidthClearanceofShackleSelectedUnit={WidthClearanceofShackleSelectedUnit}
                                    WidthClearanceofShackleSelectedUnitOnchange={(e) => handleWidthClearanceofShackleUnitChange(e.target.value)}
                                    WidthClearanceofShackleOption={
                                        WidthClearanceofShackleUnits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }


                                    // Stress Checks at Pin Hole
                                    // Bearing Area
                                    BearingAreaValue={BearingArea}
                                    BearingAreaSelectedUnit={BearingAreaSelectedUnit}
                                    BearingAreaSelectedUnitOnchange={(e) => handleBearingAreaUnitChange(e.target.value)}
                                    BearingAreaOptions={
                                        BearingAreaUnits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }


                                    // Bearing Stress (Actual)
                                    BearingStressActualValue={BearingStressActual}
                                    BearingStressActualSelectedUnit={BearingStressActualSelectedUnit}
                                    BearingStressActualSelectedUnitOnchange={(e) => handleBearingStressActualUnitChange(e.target.value)}
                                    BearingStressActualOptions={
                                        BearingStressActualUnits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }

                                    //Shear Stress Check at Pin Hole 
                                    RadiusofCheekPlateValue={RadiusofCheekPlate}
                                    RadiusofCheekPlateSelectedUnit={RadiusofCheekPlateSelectedUnit}
                                    RadiusofCheekPlateSelectedUnitOnchange={(e) => handleRadiusofCheekPlateUnitChange(e.target.value)}
                                    RadiusofCheekPlateOptions={
                                        RadiusofCheekPlateUnits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }

                                    ShearAreaofpinholeValue={ShearAreaofpinhole}
                                    ShearAreaofpinholeSelectedUnit={ShearAreaofpinholeSelectedUnit}
                                    ShearAreaofpinholeSelectedUnitOnchange={(e) => handleShearAreaofpinholeUnitChange(e.target.value)}
                                    ShearAreaofpinholeOption={
                                        ShearAreaofpinholeUnits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }

                                    ShearStressatpinholeValue={ShearStressatpinhole}
                                    ShearStressatpinholeSelectedUnit={ShearStressatpinholeSelectedUnit}
                                    ShearStressatpinholeSelectedUnitOnchange={(e) => handleShearStressatpinholeUnitChange(e.target.value)}
                                    ShearStressatpinholeOptions={
                                        ShearStressatpinholeUnits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }

                                    TensileAreaforsectionAAValue={TensileAreaforsectionAA}
                                    TensileAreaforsectionAASelectedUnit={TensileAreaforsectionAASelectedUnit}
                                    TensileAreaforsectionAASelectedUnitOnchange={(e) => handleTensileAreaforsectionAAUnitChange(e.target.value)}
                                    TensileAreaforsectionAAOption={
                                        TensileAreaforsectionAAUnits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }


                                    TensileStressatpinholeActualatsectionAAValue={TensileStressatpinholeActualatsectionAA}
                                    TensileStressatpinholeActualatsectionAASelectedUnit={TensileStressatpinholeActualatsectionAASelectedUnit}
                                    TensileStressatpinholeActualatsectionAASelectedUnitOnchange={(e) => handleTensileStressatpinholeActualatsectionAAUnitChange(e.target.value)}
                                    TensileStressatpinholeActualatsectionAAOption={
                                        TensileStressatpinholeActualatsectionAAUnits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }

                                    TensileAreaforsectionBBValue={TensileAreaforsectionBB}
                                    TensileAreaforsectionBBSelectedUnit={TensileAreaforsectionBBSelectedUnit}
                                    TensileAreaforsectionBBSelectedUnitOnchange={(e) => handleTensileAreaforsectionBBUnitChange(e.target.value)}
                                    TensileAreaforsectionBBOption={
                                        TensileAreaforsectionBBUnits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }


                                    TensileStressatpinholeActualatsectionBBValue={TensileStressatpinholeActualatsectionBB}
                                    TensileStressatpinholeActualatsectionBBSelectedUnit={TensileStressatpinholeActualatsectionBBSelectedUnit}
                                    TensileStressatpinholeActualatsectionBBSelectedUnitOnchange={(e) => handleTensileStressatpinholeActualatsectionBBUnitChange(e.target.value)}
                                    TensileStressatpinholeActualatsectionBBOption={
                                        TensileStressatpinholeActualatsectionBBUnits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }

                                    DesignLoadperunitLengthValue={DesignLoadperunitLength}
                                    DesignLoadperunitLengthSelectedUnit={DesignLoadperunitLengthSelectedUnit}
                                    DesignLoadperunitLengthSelectedUnitOnchange={(e) => handleDesignLoadperunitLengthUnitChange(e.target.value)}
                                    DesignLoadperunitLengthOptions={
                                        DesignLoadperunitLengthUnits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }


                                    HertzStressatPinHoleValue={HertzStressatPinHole}
                                    HertzStressatPinHoleSelectedUnit={HertzStressatPinHoleSelectedUnit}
                                    HertzStressatPinHoleSelectedUnitOnchange={(e) => handleHertzStressatPinHoleUnitChange(e.target.value)}
                                    HertzStressatPinHoleOptions={
                                        HertzStressatPinHoleUnits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }

                                    // Stress Checks at Base Plate
                                    // Tensile Stress Check

                                    // Tensile Area
                                    TensileAreaValue={TensileArea}
                                    TensileAreaSelectedUnit={TensileAreaSelectedUnit}
                                    TensileAreaSelectedUnitOnchange={(e) => handleTensileAreaUnitChange(e.target.value)}
                                    TensileAreaOptions={
                                        TensileAreaUnits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }

                                    // Tensile Stress at Base (Actual)
                                    TensileStressatBaseActualValue={TensileStressatBaseActual}
                                    TensileStressatBaseActualSelectedUnit={TensileStressatBaseActualSelectedUnit}
                                    TensileStressatBaseActualSelectedUnitOnchange={(e) => handleTensileStressatBaseActualUnitChange(e.target.value)}
                                    TensileStressatBaseActualOption={
                                        TensileStressatBaseActualUnits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }

                                    // Bending Stress Check

                                    //Moment lever for Horizontal/Lateral Force
                                    MomentleverforHorizontalLateralForceValue={MomentleverforHorizontalLateralForce}
                                    MomentleverforHorizontalLateralForceSelectedUnit={MomentleverforHorizontalLateralForceSelectedUnit}
                                    MomentleverforHorizontalLateralForceSelectedUnitOnchange={(e) => handleMomentleverforHorizontalLateralForceUnitChange(e.target.value)}
                                    MomentleverforHorizontalLateralForceOptions={
                                        MomentleverforHorizontalLateralForceUnits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }


                                    MomentleverforVerticalForceValue={MomentleverforVerticalForce}
                                    MomentleverforVerticalForceSelectedUnit={MomentleverforVerticalForceSelectedUnit}
                                    MomentleverforVerticalForceSelectedUnitOnchange={(e) => handleMomentleverforVerticalForceUnitChange(e.target.value)}
                                    MomentleverforVerticalForceOptions={
                                        MomentleverforVerticalForceUnits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }

                                    TotalDesignMomentaboutXaxisInplaneValue={TotalDesignMomentaboutXaxisInplane}
                                    TotalDesignMomentaboutXaxisInplaneSelectedUnit={TotalDesignMomentaboutXaxisInplaneSelectedUnit}
                                    TotalDesignMomentaboutXaxisInplaneSelectedUnitOnchange={(e) => handleTotalDesignMomentaboutXaxisInplaneUnitChange(e.target.value)}
                                    TotalDesignMomentaboutXaxisInplaneOptions={
                                        TotalDesignMomentaboutXaxisInplaneUnits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }

                                    SectionModulusofBaseaboutXaxisValue={SectionModulusofBaseaboutXaxis}
                                    SectionModulusofBaseaboutXaxisSelectedUnit={SectionModulusofBaseaboutXaxisSelectedUnit}
                                    SectionModulusofBaseaboutXaxisSelectedUnitOnchange={(e) => handleSectionModulusofBaseaboutXaxisUnitChange(e.target.value)}
                                    SectionModulusofBaseaboutXaxisOption={
                                        SectionModulusofBaseaboutXaxisUnits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }

                                    BendingStressActualaboutXaxisInplaneValue={BendingStressActualaboutXaxisInplane}
                                    BendingStressActualaboutXaxisInplaneSelectedUnit={BendingStressActualaboutXaxisInplaneSelectedUnit}
                                    BendingStressActualaboutXaxisInplaneOnchange={(e) => handleBendingStressActualaboutXaxisInplaneUnitChange(e.target.value)}
                                    BendingStressActualaboutXaxisInplaneOption={
                                        BendingStressActualaboutXaxisInplaneUnits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }
                                    // Total Design Moment about Y-axis (Out-of Plane)
                                    TotalDesignMomentaboutYaxisOutofPlaneValue={TotalDesignMomentaboutYaxisOutofPlane}
                                    TotalDesignMomentaboutYaxisOutofPlaneSelectedUnit={TotalDesignMomentaboutYaxisOutofPlaneSelectedUnit}
                                    TotalDesignMomentaboutYaxisOutofPlaneSelectedUnitOnchange={(e) => handleTotalDesignMomentaboutYaxisOutofPlaneUnitChange(e.target.value)}
                                    TotalDesignMomentaboutYaxisOutofPlaneOption={
                                        TotalDesignMomentaboutYaxisOutofPlaneUnits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }
                                    // Section Modulus of Base about Y-axis
                                    SectionModulusofBaseaboutYaxisValue={SectionModulusofBaseaboutYaxis}
                                    SectionModulusofBaseaboutYaxisSelectedUnit={SectionModulusofBaseaboutYaxisSelectedUnit}
                                    SectionModulusofBaseaboutYaxisSelectedUnitOnchange={(e) => handleSectionModulusofBaseaboutYaxisUnitChange(e.target.value)}
                                    SectionModulusofBaseaboutYaxisOption={
                                        SectionModulusofBaseaboutYaxisUnits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }


                                    // Bending Stress (Actual) - about Y-axis (Out-of-Plane)
                                    BendingStressActualaboutYaxisOutofPlaneValue={BendingStressActualaboutYaxisOutofPlane}
                                    BendingStressActualaboutYaxisOutofPlaneSelectedUnit={BendingStressActualaboutYaxisOutofPlaneSelectedUnit}
                                    BendingStressActualaboutYaxisOutofPlaneSelectedUnitOnchange={(e) => handleBendingStressActualaboutYaxisOutofPlaneUnitChange(e.target.value)}
                                    BendingStressActualaboutYaxisOutofPlaneOption={
                                        BendingStressActualaboutYaxisOutofPlaneUnit.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }


                                    // ShearAreaatBaseHorizontal
                                    ShearAreaatBaseHorizontalValue={ShearAreaatBaseHorizontal}
                                    ShearAreaatBaseHorizontalSelectedUnit={ShearAreaatBaseHorizontalSelectedUnit}
                                    ShearAreaatBaseHorizontalSelectedUnitOnchange={(e) => handleShearAreaatBaseHorizontalUnitChange(e.target.value)}
                                    ShearAreaatBaseHorizontalOption={
                                        ShearAreaatBaseHorizontalUnit.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }

                                    // ShearStressatBaseActualHorizontalYdirection
                                    ShearStressatBaseActualHorizontalYdirection={ShearStressatBaseActualHorizontalYdirection}
                                    ShearStressatBaseActualHorizontalYdirectionSelectedUnit={ShearStressatBaseActualHorizontalYdirectionSelectedUnit}
                                    ShearStressatBaseActualHorizontalYdirectionSelectedUnitOnchange={(e) => handleShearStressatBaseActualHorizontalYdirectionUnitChange(e.target.value)}
                                    ShearStressatBaseActualHorizontalYdirectionOptions={
                                        ShearStressatBaseActualHorizontalYdirectionUnit.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }

                                    // ShearStressatBaseActualLateralXdirection
                                    ShearStressatBaseActualLateralXdirection={ShearStressatBaseActualLateralXdirection}
                                    ShearStressatBaseActualLateralXdirectionSelectedUnit={ShearStressatBaseActualLateralXdirectionSelectedUnit}
                                    ShearStressatBaseActualLateralXdirectionSelectedUnitOnchange={(e) => handleShearStressatBaseActualLateralXdirectionUnitChange(e.target.value)}
                                    ShearStressatBaseActualLateralXdirectionOption={
                                        ShearStressatBaseActualLateralXdirectionUnits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }

                                    // VonMisesStressatBaseActual
                                    VonMisesStressatBaseActual={VonMisesStressatBaseActual}
                                    VonMisesStressatBaseActualSelectedUnit={VonMisesStressatBaseActualSelectedUnit}
                                    VonMisesStressatBaseActualSelectedUnitOnchange={(e) => handleVonMisesStressatBaseActualUnitChange(e.target.value)}
                                    VonMisesStressatBaseActualOption={
                                        VonMisesStressatBaseActualUnits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }
                                    WeldCheckatCheekPlateWeld
                                    // Throatthickness
                                    ThroatthicknessValue={Throatthickness}
                                    ThroatthicknessSelectedUnit={ThroatthicknessSelectedUnit}
                                    ThroatthicknessSelectedUnitOnchange={(e) => handleThroatthicknessUnitChange(e.target.value)}
                                    ThroatthicknessOption={
                                        ThroatthicknessUnits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }

                                    // WeldCheckatCheekPlateWeldThroatthickness
                                    WeldCheckatCheekPlateWeldThroatthicknessValue={WeldCheckatCheekPlateWeldThroatthickness}
                                    WeldCheckatCheekPlateWeldThroatthicknessSelectedUnit={WeldCheckatCheekPlateWeldThroatthicknessSelectedUnit}
                                    WeldCheckatCheekPlateWeldThroatthicknessSelectedUnitOnchange={(e) => handleWeldCheckatCheekPlateWeldThroatthicknessUnitChange(e.target.value)}
                                    WeldCheckatCheekPlateWeldThroatthicknessOption={
                                        WeldCheckatCheekPlateWeldThroatthicknessUnits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }


                                    // TotalWeldLength
                                    TotalWeldLengthvalue={TotalWeldLength}
                                    TotalWeldLengthSelectedUnit={TotalWeldLengthSelectedUnit}
                                    TotalWeldLengthSelectedUnitOnchange={(e) => handleTotalWeldLengthUnitChange(e.target.value)}
                                    TotalWeldLengthOption={
                                        TotalWeldLengthUnits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }

                                    // ShearStressatBaseWeld
                                    ShearStressatBaseWeldValue={ShearStressatBaseWeld}
                                    ShearStressatBaseWeldSelectedUnit={ShearStressatBaseWeldSelectedUnit}
                                    ShearStressatBaseWeldSelectedUnitOnchange={(e) => handleShearStressatBaseWeldUnitChange(e.target.value)}
                                    ShearStressatBaseWeldOption={
                                        ShearStressatBaseWeldUnits.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }

                                    // ShearStressatBaseWeldActualHorizontalYdirection
                                    ShearStressatBaseWeldActualHorizontalYdirectionValue={ShearStressatBaseWeldActualHorizontalYdirection} ShearStressatBaseWeldActualHorizontalYdirectionSelectedUnit={ShearStressatBaseWeldActualHorizontalYdirectionSelectedUnit} ShearStressatBaseWeldActualHorizontalYdirectionSelectedUnitOnchange={(e) => handleShearStressatBaseWeldActualHorizontalYdirectionUnitChange(e.target.value)} ShearStressatBaseWeldActualHorizontalYdirectionOptions={ShearStressatBaseWeldActualHorizontalYdirectionUnits.map((unit) => (<option key={unit} value={unit}>{unit}</option>))}

                                    // ShearStressatBaseWeldActualLateralXdirection
                                    ShearStressatBaseWeldActualLateralXdirectionValue={ShearStressatBaseWeldActualLateralXdirection} ShearStressatBaseWeldActualLateralXdirectionSelectedUnit={ShearStressatBaseWeldActualLateralXdirectionSelectedUnit} ShearStressatBaseWeldActualLateralXdirectionSelectedUnitOnchange={(e) => handleShearStressatBaseWeldActualLateralXdirectionUnitChange(e.target.value)} ShearStressatBaseWeldActualLateralXdirectionOption={ShearStressatBaseWeldActualLateralXdirectionUnit.map((unit) => (<option key={unit} value={unit}>{unit}</option>))}

                                    // TensileAreaatBase
                                    TensileAreaatBase={TensileAreaatBase} TensileAreaatBaseSelectedUnit={TensileAreaatBaseSelectedUnit} TensileAreaatBaseSelectedUnitOnchange={(e) => handleTensileAreaatBaseUnitChange(e.target.value)} TensileAreaatBaseOption={TensileAreaatBaseUnit.map((unit) => (<option key={unit} value={unit}>{unit}</option>))}

                                    // TensileStressatBaseWeldActual
                                    TensileStressatBaseWeldActual={TensileStressatBaseWeldActual} TensileStressatBaseWeldActualSelectedUnit={TensileStressatBaseWeldActualSelectedUnit} TensileStressatBaseWeldActualSelectedUnitOnchange={(e) => handleTensileStressatBaseWeldActualUnitChange(e.target.value)} TensileStressatBaseWeldActualoption={TensileStressatBaseWeldActualUnit.map((unit) => (<option key={unit} value={unit}>{unit}</option>))}

                                    // SectionModulusofWeldaboutXaxis
                                    SectionModulusofWeldaboutXaxis={SectionModulusofWeldaboutXaxis} SectionModulusofWeldaboutXaxisSelectedUnit={SectionModulusofWeldaboutXaxisSelectedUnit} SectionModulusofWeldaboutXaxisSelectedUnitOnchange={(e) => handleSectionModulusofWeldaboutXaxisUnitChange(e.target.value)} SectionModulusofWeldaboutXaxisOptions={SectionModulusofWeldaboutXaxisUnit.map((unit) => (<option key={unit} value={unit}>{unit}</option>))}

                                    // SectionModulusofWeldaboutYaxis
                                    SectionModulusofWeldaboutYaxis={SectionModulusofWeldaboutYaxis} SectionModulusofWeldaboutYaxisSelectedUnit={SectionModulusofWeldaboutYaxisSelectedUnit} SectionModulusofWeldaboutYaxisSelectedUnitOnchange={(e) => handleSectionModulusofWeldaboutYaxisUnitChange(e.target.value)} SectionModulusofWeldaboutYaxisOptions={SectionModulusofWeldaboutYaxisUnit.map((unit) => (<option key={unit} value={unit}>{unit}</option>))}

                                    // BendingStressatBaseWeldActualaboutXAxisInPlane
                                    BendingStressatBaseWeldActualaboutXAxisInPlane={BendingStressatBaseWeldActualaboutXAxisInPlane}
                                    BendingStressatBaseWeldActualaboutXAxisInPlaneSelectedUnit={BendingStressatBaseWeldActualaboutXAxisInPlaneSelectedUnit}
                                    BendingStressatBaseWeldActualaboutXAxisInPlaneSelectedUnitOnchange={(e) => handleBendingStressatBaseWeldActualaboutXAxisInPlaneUnitChange(e.target.value)}
                                    BendingStressatBaseWeldActualaboutXAxisInPlaneOptions={
                                        BendingStressatBaseWeldActualaboutXAxisInPlaneUnit.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }
                                    // TotalDesignMomentaboutYaxisOutofPlane
                                    TotalDesignMomentaboutYaxisOutofPlane={TotalDesignMomentaboutYaxisOutofPlane}
                                    TotalDesignMomentaboutYaxisOutofPlaneSelectedUnits={TotalDesignMomentaboutYaxisOutofPlaneSelectedUnit}
                                    TotalDesignMomentaboutYaxisOutofPlaneSelectedUnitsOnchange={(e) => handleTotalDesignMomentaboutYaxisOutofPlaneUnitChange(e.target.value)}
                                    TotalDesignMomentaboutYaxisOutofPlaneOptions={
                                        BendingStressActualaboutYaxisOutofPlaneUnit.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }
                                    // BendingStressaboutYaxisOutofPlane
                                    BendingStressaboutYaxisOutofPlane={BendingStressaboutYaxisOutofPlane}
                                    BendingStressaboutYaxisOutofPlaneSelectedUnit={BendingStressaboutYaxisOutofPlaneSelectedUnit}
                                    BendingStressaboutYaxisOutofPlaneSelectedUnitOnchange={(e) => handleBendingStressaboutYaxisOutofPlaneUnitChange(e.target.value)}
                                    BendingStressaboutYaxisOutofPlaneOptions={
                                        BendingStressaboutYaxisOutofPlaneUnit.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }

                                    // TotalStressatBaseWeldActual
                                    TotalStressatBaseWeldActual={TotalStressatBaseWeldActual}
                                    TotalStressatBaseWeldActualSelectedUnit={TotalStressatBaseWeldActualSelectedUnit}
                                    TotalStressatBaseWeldActualSelectedUnitOnchange={(e) => handleTotalStressatBaseWeldActualUnitChange(e.target.value)}
                                    TotalStressatBaseWeldActualOptions={
                                        TotalStressatBaseWeldActualUnit.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }

                                    // Weld Check at Cheek Plate Weld

                                    // WeldLength
                                    WeldLength={WeldLength}
                                    WeldLengthSelectedUnit={WeldLengthSelectedUnit}
                                    WeldLengthSelectedUnitOnchange={(e) => handleWeldLengthUnitChange(e.target.value)}
                                    WeldLengthOptions={
                                        WeldLengthUnit.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }

                                    // WeldAreaatCheekPlate
                                    WeldAreaatCheekPlate={WeldAreaatCheekPlate}
                                    WeldAreaatCheekPlateSelectedUnit={WeldAreaatCheekPlateSelectedUnit}
                                    WeldAreaatCheekPlateSelectedUnitOnchange={(e) => handleWeldAreaatCheekPlateUnitChange(e.target.value)}
                                    WeldAreaatCheekPlateOptions={
                                        WeldAreaatCheekPlateUnit.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }
                                    // DesignLoadononecheekplate
                                    DesignLoadononecheekplate={DesignLoadononecheekplate}
                                    DesignLoadononecheekplateSelectedUnit={DesignLoadononecheekplateSelectedUnit}
                                    DesignLoadononecheekplateSelectedUnitOnchange={(e) => handleDesignLoadononecheekplateUnitChange(e.target.value)}
                                    DesignLoadononecheekplateOptions={
                                        DesignLoadononecheekplateUnit.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }
                                    // WeldStressatCheekWeldActual
                                    WeldStressatCheekWeldActual={WeldStressatCheekWeldActual}
                                    WeldStressatCheekWeldActualSelectedUnit={WeldStressatCheekWeldActualSelectedUnit}
                                    WeldStressatCheekWeldActualSelectedUnitOnchange={(e) => handleWeldStressatCheekWeldActualUnitChange(e.target.value)}
                                    WeldStressatCheekWeldActualoptions={
                                        WeldStressatCheekWeldActualUnit.map((unit) => (
                                            <option key={unit} value={unit}>
                                                {unit}
                                            </option>
                                        ))
                                    }

                                    // If else
                                    MainPlateRadiusCondition={MainPlateRadius}
                                    ShackleClearanceChecksCondition={ShackleClearanceChecks}
                                    // 
                                    BearingStressCheckatPinHoleCondition={BearingStressCheckatPinHole}
                                    ShearStressCheckatPinHoleCondition={ShearStressCheckatPinHole}
                                    TensileStressCheckatPinHoleCondition={TensileStressCheckatPinHole}
                                    HertzContactStressCheckatPinHoleCondition={HertzContactStressCheckatPinHole}
                                    // 
                                    TensileStressCheckatBaseCondition={TensileStressCheckatBase}
                                    BendingStressCheckatBaseXaxisCondition={BendingStressCheckatBaseXaxis}
                                    BendingStressCheckatBaseYaxisCondition={BendingStressCheckatBaseYaxis}
                                    ShearStressCheckatBaseYdirectionCondition={ShearStressCheckatBaseYdirection}
                                    ShearStressCheckatBaseXdirectionCondition={ShearStressCheckatBaseXdirection}
                                    CombinedStressCheckatStressCheckBasePlateCondition={CombinedStressCheckatStressCheckBasePlate}
                                    // 
                                    CombinedStressCheckatBaseCondition={CombinedStressCheckatBase}
                                    // 
                                    StressCheckatCheekPlateWeldCondition={StressCheckatCheekPlateWeld}

                                    // toogle function
                                    togglefunction={isActive3}
                                    toggleBreaks={toggleClass3}
                                />

                            </>
                        )}
                        {selectedOption === 'option3' && (
                            <ShackleGeometry
                                // Shackle SWL

                                ShackleSWLValue={ShackleSWL}
                                ShackleSWLValueOnchange={(e) => handleShackleSWLvalue(e.target.value)}
                                ShackleSWLUnit={ShackleSWLUnit}
                                ShackleSWLUnitOnchange={(e) => handleShackleSWLUnit(e.target.value)}
                                ShackleSWLOption={
                                    ShackleSWLUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // Shackle Inside Length
                                ShackleInsideLength={ShackleInsideLength}
                                ShackleInsideLengthOnchange={(e) => handleShackleInsideLengthvalue(e.target.value)}
                                ShackleInsideLengthUnit={ShackleInsideLengthUnit}
                                ShackleInsideLengthUnitOnchange={(e) => handleShackleInsideLengthUnit(e.target.value)}
                                ShackleInsideLengthoption={
                                    ShackleInsideLengthUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // Shackle Jaw Width
                                ShackleJawWidthvalue={ShackleJawWidth}
                                ShackleJawWidthvalueOnchange={(e) => handleShackleJawWidthvalue(e.target.value)}
                                ShackleJawWidthUnit={ShackleJawWidthUnit}
                                ShackleJawWidthUnitOnchange={(e) => handleShackleJawWidthUnit(e.target.value)}
                                ShackleJawWidthOptions={
                                    ShackleJawWidthUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // Shackle Pin Diameter
                                ShacklePinDiameterValue={ShacklePinDiameter}
                                ShacklePinDiameterValueOnchange={(e) => handleShacklePinDiametervalue(e.target.value)}
                                ShacklePinDiameterUnit={ShacklePinDiameterUnit}
                                ShacklePinDiameterUnitOnchange={(e) => handleShacklePinDiameterUnit(e.target.value)}
                                ShacklePinDiameterOption={
                                    ShacklePinDiameterUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                AllowableBearingStressValue={AllowableBearingStressValue}
                                AllowableBearingStressselectedUnit={AllowableBearingStressselectedUnit}
                                AllowableBearingStressselectedUnitOnchange={(e) => handleAllowableBearingStressUnitChange(e.target.value)}
                                AllowableBearingStressOptions={
                                    AllowableBearingStressunits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                AllowableBendingStressInPlaneValue={AllowableBendingStressInPlaneValue}
                                AllowableBendingStressInPlaneselectedUnit={AllowableBendingStressInPlaneselectedUnit}
                                AllowableBendingStressInPlaneselectedUnitOnchange={(e) => handleAllowableBendingStressInPlaneUnitChange(e.target.value)}
                                AllowableBendingStressInPlaneOption={
                                    AllowableBendingStressInPlaneunits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                AllowableBendingStressOutofPlaneValue={AllowableBendingStressOutofPlaneValue}
                                AllowableBendingStressOutofPlaneselectedUnit={AllowableBendingStressOutofPlaneselectedUnit}
                                AllowableBendingStressOutofPlaneselectedUnitOnchange={(e) => handleAllowableBendingStressOutofPlaneselectedUnitChange(e.target.value)}
                                AllowableBendingStressOutofPlaneOption={
                                    AllowableBendingStressOutofPlaneunits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                AllowableTensileStressValue={AllowableTensileStressValue}
                                AllowableTensileStressSelectedUnit={AllowableTensileStressSelectedUnit}
                                AllowableTensileStressSelectedUnitOnchange={(e) => handleAllowableTensileStressselectedUnitChange(e.target.value)}
                                AllowableTensileStressOption={
                                    AllowableTensileStressUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                AllowableTensileStressatpinholeValue={AllowableTensileStressatpinholeValue}
                                AllowableTensileStressatpinholeSelectedUnit={AllowableTensileStressatpinholeSelectedUnit}
                                AllowableTensileStressatpinholeSelectedUnitOnchange={(e) => handleAllowableTensileStressatpinholeselectedUnitChange(e.target.value)}
                                AllowableTensileStressatpinholeUnits={
                                    AllowableTensileStressatpinholeUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                AllowableShearStressValue={AllowableShearStressValue}
                                AllowableShearStressSelectedUnit={AllowableShearStressSelectedUnit}
                                AllowableShearStressSelectedUnitOnchange={(e) => handleAllowableShearStressselectedUnitChange(e.target.value)}
                                AllowableShearStressOptions={
                                    AllowableShearStressUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                AllowableHertzStressatPinHoleValue={AllowableHertzStressatPinHoleValue}
                                AllowableHertzStressatPinHoleSelectedUnit={AllowableHertzStressatPinHoleSelectedUnit}
                                AllowableHertzStressatPinHoleSelectedUnitOnchange={(e) => handleAllowableHertzStressatPinHoleselectedUnitChange(e.target.value)}
                                AllowableHertzStressatPinHoleOptions={
                                    AllowableHertzStressatPinHoleUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                AllowableWeldStressValue={AllowableWeldStressValue}
                                AllowableWeldStressSelectedUnit={AllowableWeldStressSelectedUnit}
                                AllowableWeldStressSelectedUnitOnchange={(e) => handleAllowableWeldStressselectedUnitChange(e.target.value)}
                                AllowableWeldStressOptions={
                                    AllowableWeldStressUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                // Design Loads
                                LoadinVerticalDirectionZdirectionValue={LoadinVerticalDirectionZdirectionValue}
                                LoadinVerticalDirectionZdirectionSelectedUnit={LoadinVerticalDirectionZdirectionSelectedUnit}
                                handleLoadinVerticalDirectionZdirectionselectedUnitChange={(e) => handleLoadinVerticalDirectionZdirectionselectedUnitChange(e.target.value)}
                                LoadinVerticalDirectionZdirectionOptions={
                                    LoadinVerticalDirectionZdirectionUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }
                                // LoadinVerticalDirectionZdirectionValue={LoadinVerticalDirectionZdirectionValue}
                                // LoadinVerticalDirectionZdirectionSelectedUnit={LoadinVerticalDirectionZdirectionSelectedUnit}
                                // LoadinVerticalDirectionZdirectionValueOnchange={(e) => calculateLoadinVerticalDirectionZdirectionValue(e.target.value)}
                                // LoadinVerticalDirectionZdirectionSelectedUnitOnchange={(e) => handleLoadinVerticalDirectionZdirectionselectedUnitChange(e.target.value)}
                                // LoadinVerticalDirectionZdirectionOptions={
                                //     LoadinVerticalDirectionZdirectionUnits.map((unit) => (
                                //         <option key={unit} value={unit}>
                                //             {unit}
                                //         </option>
                                //     ))
                                // }

                                // handleLoadinVerticalDirectionZdirectionselectedUnitChange

                                LoadinHorizontalDirectionYdirectionValue={LoadinHorizontalDirectionYdirection}
                                LoadinHorizontalDirectionYdirectionSelectedUnit={LoadinHorizontalDirectionYdirectionSelectedUnit}
                                LoadinHorizontalDirectionYdirectionValueOnchange={(e) => calculateLoadinHorizontalDirectionYdirectionValue(e.target.value)}
                                LoadinHorizontalDirectionYdirectionSelectedUnitOnchange={(e) => handleLoadinHorizontalDirectionYdirectionselectedUnitChange(e.target.value)}
                                LoadinHorizontalDirectionYdirectionOptions={
                                    LoadinHorizontalDirectionYdirectionUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                OutofplaneLoadLateralLoadXdirectionValue={OutofplaneLoadLateralLoadXdirection}
                                OutofplaneLoadLateralLoadXdirectionSelectedUnit={OutofplaneLoadLateralLoadXdirectionSelectedUnit}
                                OutofplaneLoadLateralLoadXdirectionValueOnchange={(e) => calculateLoadinHorizontalDirectionYdirectionValue(e.target.value)}
                                OutofplaneLoadLateralLoadXdirectionSelectedUnitOnchange={(e) => handleOutofplaneLoadLateralLoadXdirectionselectedUnitChange(e.target.value)}
                                OutofplaneLoadLateralLoadXdirectionOptions={
                                    OutofplaneLoadLateralLoadXdirectionUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                PadEyeDesignLoadvalue={PadEyeDesignLoad}
                                PadEyeDesignLoadSelectedUnit={PadEyeDesignLoadSelectedUnit}
                                PadEyeDesignLoadvalueOnchange={(e) => calculateLoadinHorizontalDirectionYdirectionValue(e.target.value)}
                                PadEyeDesignLoadSelectedUnitOnchange={(e) => handlePadEyeDesignLoadselectedUnitChange(e.target.value)}
                                PadEyeDesignLoadOptions={
                                    PadEyeDesignLoadUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                DesignLoadinVerticalDirectionZdirectionvalue={DesignLoadinVerticalDirectionZdirection}
                                DesignLoadinVerticalDirectionZdirectionSelectedUnit={DesignLoadinVerticalDirectionZdirectionSelectedUnit}
                                DesignLoadinVerticalDirectionZdirectionvalueOnchange={(e) => calculateLoadinHorizontalDirectionYdirectionValue(e.target.value)}
                                DesignLoadinVerticalDirectionZdirectionSelectedUnitOnchange={(e) => handleDesignLoadinVerticalDirectionZdirectionselectedUnitChange(e.target.value)}
                                DesignLoadinVerticalDirectionZdirectionOptions={
                                    DesignLoadinVerticalDirectionZdirectionUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                DesignLoadinHorizontalDirectionYdirectionValue={DesignLoadinHorizontalDirectionYdirection}
                                DesignLoadinHorizontalDirectionYdirectionSelectedUnit={DesignLoadinHorizontalDirectionYdirectionSelectedUnit}
                                DesignLoadinHorizontalDirectionYdirectionValueOnchange={(e) => calculateLoadinHorizontalDirectionYdirectionValue(e.target.value)}
                                DesignLoadinHorizontalDirectionYdirectionSelectedUnitOnchange={(e) => handleDesignLoadinHorizontalDirectionYdirectionselectedUnitChange(e.target.value)}
                                DesignLoadinHorizontalDirectionYdirectionOption={
                                    DesignLoadinHorizontalDirectionYdirectionUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                DesignLoadOutofPlaneLateralXdirectionValue={DesignLoadOutofPlaneLateralXdirection}
                                DesignLoadOutofPlaneLateralXdirectionSelectedUnit={DesignLoadOutofPlaneLateralXdirectionSelectedUnit}
                                DesignLoadOutofPlaneLateralXdirectionValueOnchange={(e) => calculateLoadinHorizontalDirectionYdirectionValue(e.target.value)}
                                DesignLoadOutofPlaneLateralXdirectionSelectedUnitOnchange={(e) => handleDesignLoadOutofPlaneLateralXdirectionselectedUnitChange(e.target.value)}
                                DesignLoadOutofPlaneLateralXdirectionOption={
                                    DesignLoadOutofPlaneLateralXdirectionUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }



                                // geometry check

                                Clearancebetweenpinholediaandpindiavalue={Clearancebetweenpinholediaandpindia}
                                ClearancebetweenpinholediaandpindiaSelectedunit={ClearancebetweenpinholediaandpindiaSelectedunit}
                                ClearancebetweenpinholediaandpindiaSelectedunitOnchange={(e) => handleClearancebetweenpinholediaandpindiaselectedUnitChange(e.target.value)}
                                ClearancebetweenpinholediaandpindiaOptions={
                                    ClearancebetweenpinholediaandpindiaUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                LengthClearanceofShackleValue={LengthClearanceofShackle}
                                LengthClearanceofShackleselectedunit={LengthClearanceofShackleselectedunit}
                                LengthClearanceofShackleselectedunitOnchange={(e) => handleLengthClearanceofShackleselectedUnitChange(e.target.value)}
                                LengthClearanceofShackleOption={
                                    LengthClearanceofShackleUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                WidthClearanceofShackle={WidthClearanceofShackle}
                                WidthClearanceofShackleSelectedUnit={WidthClearanceofShackleSelectedUnit}
                                WidthClearanceofShackleSelectedUnitOnchange={(e) => handleWidthClearanceofShackleUnitChange(e.target.value)}
                                WidthClearanceofShackleOption={
                                    WidthClearanceofShackleUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                // Stress Checks at Pin Hole
                                // Bearing Area
                                BearingAreaValue={BearingArea}
                                BearingAreaSelectedUnit={BearingAreaSelectedUnit}
                                BearingAreaSelectedUnitOnchange={(e) => handleBearingAreaUnitChange(e.target.value)}
                                BearingAreaOptions={
                                    BearingAreaUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                // Bearing Stress (Actual)
                                BearingStressActualValue={BearingStressActual}
                                BearingStressActualSelectedUnit={BearingStressActualSelectedUnit}
                                BearingStressActualSelectedUnitOnchange={(e) => handleBearingStressActualUnitChange(e.target.value)}
                                BearingStressActualOptions={
                                    BearingStressActualUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                //Shear Stress Check at Pin Hole 
                                RadiusofCheekPlateValue={RadiusofCheekPlate}
                                RadiusofCheekPlateSelectedUnit={RadiusofCheekPlateSelectedUnit}
                                RadiusofCheekPlateSelectedUnitOnchange={(e) => handleRadiusofCheekPlateUnitChange(e.target.value)}
                                RadiusofCheekPlateOptions={
                                    RadiusofCheekPlateUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                ShearAreaofpinholeValue={ShearAreaofpinhole}
                                ShearAreaofpinholeSelectedUnit={ShearAreaofpinholeSelectedUnit}
                                ShearAreaofpinholeSelectedUnitOnchange={(e) => handleShearAreaofpinholeUnitChange(e.target.value)}
                                ShearAreaofpinholeOption={
                                    ShearAreaofpinholeUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                ShearStressatpinholeValue={ShearStressatpinhole}
                                ShearStressatpinholeSelectedUnit={ShearStressatpinholeSelectedUnit}
                                ShearStressatpinholeSelectedUnitOnchange={(e) => handleShearStressatpinholeUnitChange(e.target.value)}
                                ShearStressatpinholeOptions={
                                    ShearStressatpinholeUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                TensileAreaforsectionAAValue={TensileAreaforsectionAA}
                                TensileAreaforsectionAASelectedUnit={TensileAreaforsectionAASelectedUnit}
                                TensileAreaforsectionAASelectedUnitOnchange={(e) => handleTensileAreaforsectionAAUnitChange(e.target.value)}
                                TensileAreaforsectionAAOption={
                                    TensileAreaforsectionAAUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                TensileStressatpinholeActualatsectionAAValue={TensileStressatpinholeActualatsectionAA}
                                TensileStressatpinholeActualatsectionAASelectedUnit={TensileStressatpinholeActualatsectionAASelectedUnit}
                                TensileStressatpinholeActualatsectionAASelectedUnitOnchange={(e) => handleTensileStressatpinholeActualatsectionAAUnitChange(e.target.value)}
                                TensileStressatpinholeActualatsectionAAOption={
                                    TensileStressatpinholeActualatsectionAAUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                TensileAreaforsectionBBValue={TensileAreaforsectionBB}
                                TensileAreaforsectionBBSelectedUnit={TensileAreaforsectionBBSelectedUnit}
                                TensileAreaforsectionBBSelectedUnitOnchange={(e) => handleTensileAreaforsectionBBUnitChange(e.target.value)}
                                TensileAreaforsectionBBOption={
                                    TensileAreaforsectionBBUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                TensileStressatpinholeActualatsectionBBValue={TensileStressatpinholeActualatsectionBB}
                                TensileStressatpinholeActualatsectionBBSelectedUnit={TensileStressatpinholeActualatsectionBBSelectedUnit}
                                TensileStressatpinholeActualatsectionBBSelectedUnitOnchange={(e) => handleTensileStressatpinholeActualatsectionBBUnitChange(e.target.value)}
                                TensileStressatpinholeActualatsectionBBOption={
                                    TensileStressatpinholeActualatsectionBBUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                DesignLoadperunitLengthValue={DesignLoadperunitLength}
                                DesignLoadperunitLengthSelectedUnit={DesignLoadperunitLengthSelectedUnit}
                                DesignLoadperunitLengthSelectedUnitOnchange={(e) => handleDesignLoadperunitLengthUnitChange(e.target.value)}
                                DesignLoadperunitLengthOptions={
                                    DesignLoadperunitLengthUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                HertzStressatPinHoleValue={HertzStressatPinHole}
                                HertzStressatPinHoleSelectedUnit={HertzStressatPinHoleSelectedUnit}
                                HertzStressatPinHoleSelectedUnitOnchange={(e) => handleHertzStressatPinHoleUnitChange(e.target.value)}
                                HertzStressatPinHoleOptions={
                                    HertzStressatPinHoleUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // Stress Checks at Base Plate
                                // Tensile Stress Check

                                // Tensile Area
                                TensileAreaValue={TensileArea}
                                TensileAreaSelectedUnit={TensileAreaSelectedUnit}
                                TensileAreaSelectedUnitOnchange={(e) => handleTensileAreaUnitChange(e.target.value)}
                                TensileAreaOptions={
                                    TensileAreaUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // Tensile Stress at Base (Actual)
                                TensileStressatBaseActualValue={TensileStressatBaseActual}
                                TensileStressatBaseActualSelectedUnit={TensileStressatBaseActualSelectedUnit}
                                TensileStressatBaseActualSelectedUnitOnchange={(e) => handleTensileStressatBaseActualUnitChange(e.target.value)}
                                TensileStressatBaseActualOption={
                                    TensileStressatBaseActualUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // Bending Stress Check

                                //Moment lever for Horizontal/Lateral Force
                                MomentleverforHorizontalLateralForceValue={MomentleverforHorizontalLateralForce}
                                MomentleverforHorizontalLateralForceSelectedUnit={MomentleverforHorizontalLateralForceSelectedUnit}
                                MomentleverforHorizontalLateralForceSelectedUnitOnchange={(e) => handleMomentleverforHorizontalLateralForceUnitChange(e.target.value)}
                                MomentleverforHorizontalLateralForceOptions={
                                    MomentleverforHorizontalLateralForceUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                MomentleverforVerticalForceValue={MomentleverforVerticalForce}
                                MomentleverforVerticalForceSelectedUnit={MomentleverforVerticalForceSelectedUnit}
                                MomentleverforVerticalForceSelectedUnitOnchange={(e) => handleMomentleverforVerticalForceUnitChange(e.target.value)}
                                MomentleverforVerticalForceOptions={
                                    MomentleverforVerticalForceUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                TotalDesignMomentaboutXaxisInplaneValue={TotalDesignMomentaboutXaxisInplane}
                                TotalDesignMomentaboutXaxisInplaneSelectedUnit={TotalDesignMomentaboutXaxisInplaneSelectedUnit}
                                TotalDesignMomentaboutXaxisInplaneSelectedUnitOnchange={(e) => handleTotalDesignMomentaboutXaxisInplaneUnitChange(e.target.value)}
                                TotalDesignMomentaboutXaxisInplaneOptions={
                                    TotalDesignMomentaboutXaxisInplaneUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                SectionModulusofBaseaboutXaxisValue={SectionModulusofBaseaboutXaxis}
                                SectionModulusofBaseaboutXaxisSelectedUnit={SectionModulusofBaseaboutXaxisSelectedUnit}
                                SectionModulusofBaseaboutXaxisSelectedUnitOnchange={(e) => handleSectionModulusofBaseaboutXaxisUnitChange(e.target.value)}
                                SectionModulusofBaseaboutXaxisOption={
                                    SectionModulusofBaseaboutXaxisUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                BendingStressActualaboutXaxisInplaneValue={BendingStressActualaboutXaxisInplane}
                                BendingStressActualaboutXaxisInplaneSelectedUnit={BendingStressActualaboutXaxisInplaneSelectedUnit}
                                BendingStressActualaboutXaxisInplaneOnchange={(e) => handleBendingStressActualaboutXaxisInplaneUnitChange(e.target.value)}
                                BendingStressActualaboutXaxisInplaneOption={
                                    BendingStressActualaboutXaxisInplaneUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }
                                // Total Design Moment about Y-axis (Out-of Plane)
                                TotalDesignMomentaboutYaxisOutofPlaneValue={TotalDesignMomentaboutYaxisOutofPlane}
                                TotalDesignMomentaboutYaxisOutofPlaneSelectedUnit={TotalDesignMomentaboutYaxisOutofPlaneSelectedUnit}
                                TotalDesignMomentaboutYaxisOutofPlaneSelectedUnitOnchange={(e) => handleTotalDesignMomentaboutYaxisOutofPlaneUnitChange(e.target.value)}
                                TotalDesignMomentaboutYaxisOutofPlaneOption={
                                    TotalDesignMomentaboutYaxisOutofPlaneUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }
                                // Section Modulus of Base about Y-axis
                                SectionModulusofBaseaboutYaxisValue={SectionModulusofBaseaboutYaxis}
                                SectionModulusofBaseaboutYaxisSelectedUnit={SectionModulusofBaseaboutYaxisSelectedUnit}
                                SectionModulusofBaseaboutYaxisSelectedUnitOnchange={(e) => handleSectionModulusofBaseaboutYaxisUnitChange(e.target.value)}
                                SectionModulusofBaseaboutYaxisOption={
                                    SectionModulusofBaseaboutYaxisUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                // Bending Stress (Actual) - about Y-axis (Out-of-Plane)
                                BendingStressActualaboutYaxisOutofPlaneValue={BendingStressActualaboutYaxisOutofPlane}
                                BendingStressActualaboutYaxisOutofPlaneSelectedUnit={BendingStressActualaboutYaxisOutofPlaneSelectedUnit}
                                BendingStressActualaboutYaxisOutofPlaneSelectedUnitOnchange={(e) => handleBendingStressActualaboutYaxisOutofPlaneUnitChange(e.target.value)}
                                BendingStressActualaboutYaxisOutofPlaneOption={
                                    BendingStressActualaboutYaxisOutofPlaneUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                // ShearAreaatBaseHorizontal
                                ShearAreaatBaseHorizontalValue={ShearAreaatBaseHorizontal}
                                ShearAreaatBaseHorizontalSelectedUnit={ShearAreaatBaseHorizontalSelectedUnit}
                                ShearAreaatBaseHorizontalSelectedUnitOnchange={(e) => handleShearAreaatBaseHorizontalUnitChange(e.target.value)}
                                ShearAreaatBaseHorizontalOption={
                                    ShearAreaatBaseHorizontalUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // ShearStressatBaseActualHorizontalYdirection
                                ShearStressatBaseActualHorizontalYdirection={ShearStressatBaseActualHorizontalYdirection}
                                ShearStressatBaseActualHorizontalYdirectionSelectedUnit={ShearStressatBaseActualHorizontalYdirectionSelectedUnit}
                                ShearStressatBaseActualHorizontalYdirectionSelectedUnitOnchange={(e) => handleShearStressatBaseActualHorizontalYdirectionUnitChange(e.target.value)}
                                ShearStressatBaseActualHorizontalYdirectionOptions={
                                    ShearStressatBaseActualHorizontalYdirectionUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // ShearStressatBaseActualLateralXdirection
                                ShearStressatBaseActualLateralXdirection={ShearStressatBaseActualLateralXdirection}
                                ShearStressatBaseActualLateralXdirectionSelectedUnit={ShearStressatBaseActualLateralXdirectionSelectedUnit}
                                ShearStressatBaseActualLateralXdirectionSelectedUnitOnchange={(e) => handleShearStressatBaseActualLateralXdirectionUnitChange(e.target.value)}
                                ShearStressatBaseActualLateralXdirectionOption={
                                    ShearStressatBaseActualLateralXdirectionUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // VonMisesStressatBaseActual
                                VonMisesStressatBaseActual={VonMisesStressatBaseActual}
                                VonMisesStressatBaseActualSelectedUnit={VonMisesStressatBaseActualSelectedUnit}
                                VonMisesStressatBaseActualSelectedUnitOnchange={(e) => handleVonMisesStressatBaseActualUnitChange(e.target.value)}
                                VonMisesStressatBaseActualOption={
                                    VonMisesStressatBaseActualUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }
                                WeldCheckatCheekPlateWeld
                                // Throatthickness
                                ThroatthicknessValue={Throatthickness}
                                ThroatthicknessSelectedUnit={ThroatthicknessSelectedUnit}
                                ThroatthicknessSelectedUnitOnchange={(e) => handleThroatthicknessUnitChange(e.target.value)}
                                ThroatthicknessOption={
                                    ThroatthicknessUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // WeldCheckatCheekPlateWeldThroatthickness
                                WeldCheckatCheekPlateWeldThroatthicknessValue={WeldCheckatCheekPlateWeldThroatthickness}
                                WeldCheckatCheekPlateWeldThroatthicknessSelectedUnit={WeldCheckatCheekPlateWeldThroatthicknessSelectedUnit}
                                WeldCheckatCheekPlateWeldThroatthicknessSelectedUnitOnchange={(e) => handleWeldCheckatCheekPlateWeldThroatthicknessUnitChange(e.target.value)}
                                WeldCheckatCheekPlateWeldThroatthicknessOption={
                                    WeldCheckatCheekPlateWeldThroatthicknessUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                // TotalWeldLength
                                TotalWeldLengthvalue={TotalWeldLength}
                                TotalWeldLengthSelectedUnit={TotalWeldLengthSelectedUnit}
                                TotalWeldLengthSelectedUnitOnchange={(e) => handleTotalWeldLengthUnitChange(e.target.value)}
                                TotalWeldLengthOption={
                                    TotalWeldLengthUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // ShearStressatBaseWeld
                                ShearStressatBaseWeldValue={ShearStressatBaseWeld}
                                ShearStressatBaseWeldSelectedUnit={ShearStressatBaseWeldSelectedUnit}
                                ShearStressatBaseWeldSelectedUnitOnchange={(e) => handleShearStressatBaseWeldUnitChange(e.target.value)}
                                ShearStressatBaseWeldOption={
                                    ShearStressatBaseWeldUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // ShearStressatBaseWeldActualHorizontalYdirection
                                ShearStressatBaseWeldActualHorizontalYdirectionValue={ShearStressatBaseWeldActualHorizontalYdirection} ShearStressatBaseWeldActualHorizontalYdirectionSelectedUnit={ShearStressatBaseWeldActualHorizontalYdirectionSelectedUnit} ShearStressatBaseWeldActualHorizontalYdirectionSelectedUnitOnchange={(e) => handleShearStressatBaseWeldActualHorizontalYdirectionUnitChange(e.target.value)} ShearStressatBaseWeldActualHorizontalYdirectionOptions={ShearStressatBaseWeldActualHorizontalYdirectionUnits.map((unit) => (<option key={unit} value={unit}>{unit}</option>))}

                                // ShearStressatBaseWeldActualLateralXdirection
                                ShearStressatBaseWeldActualLateralXdirectionValue={ShearStressatBaseWeldActualLateralXdirection} ShearStressatBaseWeldActualLateralXdirectionSelectedUnit={ShearStressatBaseWeldActualLateralXdirectionSelectedUnit} ShearStressatBaseWeldActualLateralXdirectionSelectedUnitOnchange={(e) => handleShearStressatBaseWeldActualLateralXdirectionUnitChange(e.target.value)} ShearStressatBaseWeldActualLateralXdirectionOption={ShearStressatBaseWeldActualLateralXdirectionUnit.map((unit) => (<option key={unit} value={unit}>{unit}</option>))}

                                // TensileAreaatBase
                                TensileAreaatBase={TensileAreaatBase} TensileAreaatBaseSelectedUnit={TensileAreaatBaseSelectedUnit} TensileAreaatBaseSelectedUnitOnchange={(e) => handleTensileAreaatBaseUnitChange(e.target.value)} TensileAreaatBaseOption={TensileAreaatBaseUnit.map((unit) => (<option key={unit} value={unit}>{unit}</option>))}

                                // TensileStressatBaseWeldActual
                                TensileStressatBaseWeldActual={TensileStressatBaseWeldActual} TensileStressatBaseWeldActualSelectedUnit={TensileStressatBaseWeldActualSelectedUnit} TensileStressatBaseWeldActualSelectedUnitOnchange={(e) => handleTensileStressatBaseWeldActualUnitChange(e.target.value)} TensileStressatBaseWeldActualoption={TensileStressatBaseWeldActualUnit.map((unit) => (<option key={unit} value={unit}>{unit}</option>))}

                                // SectionModulusofWeldaboutXaxis
                                SectionModulusofWeldaboutXaxis={SectionModulusofWeldaboutXaxis} SectionModulusofWeldaboutXaxisSelectedUnit={SectionModulusofWeldaboutXaxisSelectedUnit} SectionModulusofWeldaboutXaxisSelectedUnitOnchange={(e) => handleSectionModulusofWeldaboutXaxisUnitChange(e.target.value)} SectionModulusofWeldaboutXaxisOptions={SectionModulusofWeldaboutXaxisUnit.map((unit) => (<option key={unit} value={unit}>{unit}</option>))}

                                // SectionModulusofWeldaboutYaxis
                                SectionModulusofWeldaboutYaxis={SectionModulusofWeldaboutYaxis} SectionModulusofWeldaboutYaxisSelectedUnit={SectionModulusofWeldaboutYaxisSelectedUnit} SectionModulusofWeldaboutYaxisSelectedUnitOnchange={(e) => handleSectionModulusofWeldaboutYaxisUnitChange(e.target.value)} SectionModulusofWeldaboutYaxisOptions={SectionModulusofWeldaboutYaxisUnit.map((unit) => (<option key={unit} value={unit}>{unit}</option>))}

                                // BendingStressatBaseWeldActualaboutXAxisInPlane
                                BendingStressatBaseWeldActualaboutXAxisInPlane={BendingStressatBaseWeldActualaboutXAxisInPlane}
                                BendingStressatBaseWeldActualaboutXAxisInPlaneSelectedUnit={BendingStressatBaseWeldActualaboutXAxisInPlaneSelectedUnit}
                                BendingStressatBaseWeldActualaboutXAxisInPlaneSelectedUnitOnchange={(e) => handleBendingStressatBaseWeldActualaboutXAxisInPlaneUnitChange(e.target.value)}
                                BendingStressatBaseWeldActualaboutXAxisInPlaneOptions={
                                    BendingStressatBaseWeldActualaboutXAxisInPlaneUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }
                                // TotalDesignMomentaboutYaxisOutofPlane
                                TotalDesignMomentaboutYaxisOutofPlane={TotalDesignMomentaboutYaxisOutofPlane}
                                TotalDesignMomentaboutYaxisOutofPlaneSelectedUnits={TotalDesignMomentaboutYaxisOutofPlaneSelectedUnit}
                                TotalDesignMomentaboutYaxisOutofPlaneSelectedUnitsOnchange={(e) => handleTotalDesignMomentaboutYaxisOutofPlaneUnitChange(e.target.value)}
                                TotalDesignMomentaboutYaxisOutofPlaneOptions={
                                    BendingStressActualaboutYaxisOutofPlaneUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }
                                // BendingStressaboutYaxisOutofPlane
                                BendingStressaboutYaxisOutofPlane={BendingStressaboutYaxisOutofPlane}
                                BendingStressaboutYaxisOutofPlaneSelectedUnit={BendingStressaboutYaxisOutofPlaneSelectedUnit}
                                BendingStressaboutYaxisOutofPlaneSelectedUnitOnchange={(e) => handleBendingStressaboutYaxisOutofPlaneUnitChange(e.target.value)}
                                BendingStressaboutYaxisOutofPlaneOptions={
                                    BendingStressaboutYaxisOutofPlaneUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // TotalStressatBaseWeldActual
                                TotalStressatBaseWeldActual={TotalStressatBaseWeldActual}
                                TotalStressatBaseWeldActualSelectedUnit={TotalStressatBaseWeldActualSelectedUnit}
                                TotalStressatBaseWeldActualSelectedUnitOnchange={(e) => handleTotalStressatBaseWeldActualUnitChange(e.target.value)}
                                TotalStressatBaseWeldActualOptions={
                                    TotalStressatBaseWeldActualUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // Weld Check at Cheek Plate Weld

                                // WeldLength
                                WeldLength={WeldLength}
                                WeldLengthSelectedUnit={WeldLengthSelectedUnit}
                                WeldLengthSelectedUnitOnchange={(e) => handleWeldLengthUnitChange(e.target.value)}
                                WeldLengthOptions={
                                    WeldLengthUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // WeldAreaatCheekPlate
                                WeldAreaatCheekPlate={WeldAreaatCheekPlate}
                                WeldAreaatCheekPlateSelectedUnit={WeldAreaatCheekPlateSelectedUnit}
                                WeldAreaatCheekPlateSelectedUnitOnchange={(e) => handleWeldAreaatCheekPlateUnitChange(e.target.value)}
                                WeldAreaatCheekPlateOptions={
                                    WeldAreaatCheekPlateUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }
                                // DesignLoadononecheekplate
                                DesignLoadononecheekplate={DesignLoadononecheekplate}
                                DesignLoadononecheekplateSelectedUnit={DesignLoadononecheekplateSelectedUnit}
                                DesignLoadononecheekplateSelectedUnitOnchange={(e) => handleDesignLoadononecheekplateUnitChange(e.target.value)}
                                DesignLoadononecheekplateOptions={
                                    DesignLoadononecheekplateUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }
                                // WeldStressatCheekWeldActual
                                WeldStressatCheekWeldActual={WeldStressatCheekWeldActual}
                                WeldStressatCheekWeldActualSelectedUnit={WeldStressatCheekWeldActualSelectedUnit}
                                WeldStressatCheekWeldActualSelectedUnitOnchange={(e) => handleWeldStressatCheekWeldActualUnitChange(e.target.value)}
                                WeldStressatCheekWeldActualoptions={
                                    WeldStressatCheekWeldActualUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // If else
                                MainPlateRadiusCondition={MainPlateRadius}
                                ShackleClearanceChecksCondition={ShackleClearanceChecks}
                                // 
                                BearingStressCheckatPinHoleCondition={BearingStressCheckatPinHole}
                                ShearStressCheckatPinHoleCondition={ShearStressCheckatPinHole}
                                TensileStressCheckatPinHoleCondition={TensileStressCheckatPinHole}
                                HertzContactStressCheckatPinHoleCondition={HertzContactStressCheckatPinHole}
                                // 
                                TensileStressCheckatBaseCondition={TensileStressCheckatBase}
                                BendingStressCheckatBaseXaxisCondition={BendingStressCheckatBaseXaxis}
                                BendingStressCheckatBaseYaxisCondition={BendingStressCheckatBaseYaxis}
                                ShearStressCheckatBaseYdirectionCondition={ShearStressCheckatBaseYdirection}
                                ShearStressCheckatBaseXdirectionCondition={ShearStressCheckatBaseXdirection}
                                CombinedStressCheckatStressCheckBasePlateCondition={CombinedStressCheckatStressCheckBasePlate}
                                // 
                                CombinedStressCheckatBaseCondition={CombinedStressCheckatBase}
                                // 
                                StressCheckatCheekPlateWeldCondition={StressCheckatCheekPlateWeld}

                                // toogle function
                                togglefunction={isActive3}
                                toggleBreaks={toggleClass3}
                            />

                        )}
                        {selectedOption === 'option4' && (

                            <SlingGeometry
                                SlingDiameterValue={SlingDiameter}
                                SlingDiameterValueOnchange={(e) => handleSlingDiametervalue(e.target.value)}
                                SlingDiameterUnit={SlingDiameterUnit}
                                SlingDiameterUnitOnchange={(e) => handleSlingDiameterUnit(e.target.value)}
                                SlingDiameterOption={
                                    SlingDiameterUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                AllowableBearingStressValue={AllowableBearingStressValue}
                                AllowableBearingStressselectedUnit={AllowableBearingStressselectedUnit}
                                AllowableBearingStressselectedUnitOnchange={(e) => handleAllowableBearingStressUnitChange(e.target.value)}
                                AllowableBearingStressOptions={
                                    AllowableBearingStressunits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                AllowableBendingStressInPlaneValue={AllowableBendingStressInPlaneValue}
                                AllowableBendingStressInPlaneselectedUnit={AllowableBendingStressInPlaneselectedUnit}
                                AllowableBendingStressInPlaneselectedUnitOnchange={(e) => handleAllowableBendingStressInPlaneUnitChange(e.target.value)}
                                AllowableBendingStressInPlaneOption={
                                    AllowableBendingStressInPlaneunits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                AllowableBendingStressOutofPlaneValue={AllowableBendingStressOutofPlaneValue}
                                AllowableBendingStressOutofPlaneselectedUnit={AllowableBendingStressOutofPlaneselectedUnit}
                                AllowableBendingStressOutofPlaneselectedUnitOnchange={(e) => handleAllowableBendingStressOutofPlaneselectedUnitChange(e.target.value)}
                                AllowableBendingStressOutofPlaneOption={
                                    AllowableBendingStressOutofPlaneunits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                AllowableTensileStressValue={AllowableTensileStressValue}
                                AllowableTensileStressSelectedUnit={AllowableTensileStressSelectedUnit}
                                AllowableTensileStressSelectedUnitOnchange={(e) => handleAllowableTensileStressselectedUnitChange(e.target.value)}
                                AllowableTensileStressOption={
                                    AllowableTensileStressUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                AllowableTensileStressatpinholeValue={AllowableTensileStressatpinholeValue}
                                AllowableTensileStressatpinholeSelectedUnit={AllowableTensileStressatpinholeSelectedUnit}
                                AllowableTensileStressatpinholeSelectedUnitOnchange={(e) => handleAllowableTensileStressatpinholeselectedUnitChange(e.target.value)}
                                AllowableTensileStressatpinholeUnits={
                                    AllowableTensileStressatpinholeUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                AllowableShearStressValue={AllowableShearStressValue}
                                AllowableShearStressSelectedUnit={AllowableShearStressSelectedUnit}
                                AllowableShearStressSelectedUnitOnchange={(e) => handleAllowableShearStressselectedUnitChange(e.target.value)}
                                AllowableShearStressOptions={
                                    AllowableShearStressUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                AllowableHertzStressatPinHoleValue={AllowableHertzStressatPinHoleValue}
                                AllowableHertzStressatPinHoleSelectedUnit={AllowableHertzStressatPinHoleSelectedUnit}
                                AllowableHertzStressatPinHoleSelectedUnitOnchange={(e) => handleAllowableHertzStressatPinHoleselectedUnitChange(e.target.value)}
                                AllowableHertzStressatPinHoleOptions={
                                    AllowableHertzStressatPinHoleUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                AllowableWeldStressValue={AllowableWeldStressValue}
                                AllowableWeldStressSelectedUnit={AllowableWeldStressSelectedUnit}
                                AllowableWeldStressSelectedUnitOnchange={(e) => handleAllowableWeldStressselectedUnitChange(e.target.value)}
                                AllowableWeldStressOptions={
                                    AllowableWeldStressUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                // Design Loads
                                LoadinVerticalDirectionZdirectionValue={LoadinVerticalDirectionZdirectionValue}
                                LoadinVerticalDirectionZdirectionSelectedUnit={LoadinVerticalDirectionZdirectionSelectedUnit}
                                handleLoadinVerticalDirectionZdirectionselectedUnitChange={(e) => handleLoadinVerticalDirectionZdirectionselectedUnitChange(e.target.value)}
                                LoadinVerticalDirectionZdirectionOptions={
                                    LoadinVerticalDirectionZdirectionUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }
                                // LoadinVerticalDirectionZdirectionValue={LoadinVerticalDirectionZdirectionValue}
                                // LoadinVerticalDirectionZdirectionSelectedUnit={LoadinVerticalDirectionZdirectionSelectedUnit}
                                // LoadinVerticalDirectionZdirectionValueOnchange={(e) => calculateLoadinVerticalDirectionZdirectionValue(e.target.value)}
                                // LoadinVerticalDirectionZdirectionSelectedUnitOnchange={(e) => handleLoadinVerticalDirectionZdirectionselectedUnitChange(e.target.value)}
                                // LoadinVerticalDirectionZdirectionOptions={
                                //     LoadinVerticalDirectionZdirectionUnits.map((unit) => (
                                //         <option key={unit} value={unit}>
                                //             {unit}
                                //         </option>
                                //     ))
                                // }

                                // handleLoadinVerticalDirectionZdirectionselectedUnitChange

                                LoadinHorizontalDirectionYdirectionValue={LoadinHorizontalDirectionYdirection}
                                LoadinHorizontalDirectionYdirectionSelectedUnit={LoadinHorizontalDirectionYdirectionSelectedUnit}
                                LoadinHorizontalDirectionYdirectionValueOnchange={(e) => calculateLoadinHorizontalDirectionYdirectionValue(e.target.value)}
                                LoadinHorizontalDirectionYdirectionSelectedUnitOnchange={(e) => handleLoadinHorizontalDirectionYdirectionselectedUnitChange(e.target.value)}
                                LoadinHorizontalDirectionYdirectionOptions={
                                    LoadinHorizontalDirectionYdirectionUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                OutofplaneLoadLateralLoadXdirectionValue={OutofplaneLoadLateralLoadXdirection}
                                OutofplaneLoadLateralLoadXdirectionSelectedUnit={OutofplaneLoadLateralLoadXdirectionSelectedUnit}
                                OutofplaneLoadLateralLoadXdirectionValueOnchange={(e) => calculateLoadinHorizontalDirectionYdirectionValue(e.target.value)}
                                OutofplaneLoadLateralLoadXdirectionSelectedUnitOnchange={(e) => handleOutofplaneLoadLateralLoadXdirectionselectedUnitChange(e.target.value)}
                                OutofplaneLoadLateralLoadXdirectionOptions={
                                    OutofplaneLoadLateralLoadXdirectionUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                PadEyeDesignLoadvalue={PadEyeDesignLoad}
                                PadEyeDesignLoadSelectedUnit={PadEyeDesignLoadSelectedUnit}
                                PadEyeDesignLoadvalueOnchange={(e) => calculateLoadinHorizontalDirectionYdirectionValue(e.target.value)}
                                PadEyeDesignLoadSelectedUnitOnchange={(e) => handlePadEyeDesignLoadselectedUnitChange(e.target.value)}
                                PadEyeDesignLoadOptions={
                                    PadEyeDesignLoadUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                DesignLoadinVerticalDirectionZdirectionvalue={DesignLoadinVerticalDirectionZdirection}
                                DesignLoadinVerticalDirectionZdirectionSelectedUnit={DesignLoadinVerticalDirectionZdirectionSelectedUnit}
                                DesignLoadinVerticalDirectionZdirectionvalueOnchange={(e) => calculateLoadinHorizontalDirectionYdirectionValue(e.target.value)}
                                DesignLoadinVerticalDirectionZdirectionSelectedUnitOnchange={(e) => handleDesignLoadinVerticalDirectionZdirectionselectedUnitChange(e.target.value)}
                                DesignLoadinVerticalDirectionZdirectionOptions={
                                    DesignLoadinVerticalDirectionZdirectionUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                DesignLoadinHorizontalDirectionYdirectionValue={DesignLoadinHorizontalDirectionYdirection}
                                DesignLoadinHorizontalDirectionYdirectionSelectedUnit={DesignLoadinHorizontalDirectionYdirectionSelectedUnit}
                                DesignLoadinHorizontalDirectionYdirectionValueOnchange={(e) => calculateLoadinHorizontalDirectionYdirectionValue(e.target.value)}
                                DesignLoadinHorizontalDirectionYdirectionSelectedUnitOnchange={(e) => handleDesignLoadinHorizontalDirectionYdirectionselectedUnitChange(e.target.value)}
                                DesignLoadinHorizontalDirectionYdirectionOption={
                                    DesignLoadinHorizontalDirectionYdirectionUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                DesignLoadOutofPlaneLateralXdirectionValue={DesignLoadOutofPlaneLateralXdirection}
                                DesignLoadOutofPlaneLateralXdirectionSelectedUnit={DesignLoadOutofPlaneLateralXdirectionSelectedUnit}
                                DesignLoadOutofPlaneLateralXdirectionValueOnchange={(e) => calculateLoadinHorizontalDirectionYdirectionValue(e.target.value)}
                                DesignLoadOutofPlaneLateralXdirectionSelectedUnitOnchange={(e) => handleDesignLoadOutofPlaneLateralXdirectionselectedUnitChange(e.target.value)}
                                DesignLoadOutofPlaneLateralXdirectionOption={
                                    DesignLoadOutofPlaneLateralXdirectionUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }



                                // geometry check

                                Clearancebetweenpinholediaandpindiavalue={Clearancebetweenpinholediaandpindia}
                                ClearancebetweenpinholediaandpindiaSelectedunit={ClearancebetweenpinholediaandpindiaSelectedunit}
                                ClearancebetweenpinholediaandpindiaSelectedunitOnchange={(e) => handleClearancebetweenpinholediaandpindiaselectedUnitChange(e.target.value)}
                                ClearancebetweenpinholediaandpindiaOptions={
                                    ClearancebetweenpinholediaandpindiaUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                LengthClearanceofShackleValue={LengthClearanceofShackle}
                                LengthClearanceofShackleselectedunit={LengthClearanceofShackleselectedunit}
                                LengthClearanceofShackleselectedunitOnchange={(e) => handleLengthClearanceofShackleselectedUnitChange(e.target.value)}
                                LengthClearanceofShackleOption={
                                    LengthClearanceofShackleUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                WidthClearanceofShackle={WidthClearanceofShackle}
                                WidthClearanceofShackleSelectedUnit={WidthClearanceofShackleSelectedUnit}
                                WidthClearanceofShackleSelectedUnitOnchange={(e) => handleWidthClearanceofShackleUnitChange(e.target.value)}
                                WidthClearanceofShackleOption={
                                    WidthClearanceofShackleUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                // Stress Checks at Pin Hole
                                // Bearing Area
                                BearingAreaValue={BearingArea}
                                BearingAreaSelectedUnit={BearingAreaSelectedUnit}
                                BearingAreaSelectedUnitOnchange={(e) => handleBearingAreaUnitChange(e.target.value)}
                                BearingAreaOptions={
                                    BearingAreaUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                // Bearing Stress (Actual)
                                BearingStressActualValue={BearingStressActual}
                                BearingStressActualSelectedUnit={BearingStressActualSelectedUnit}
                                BearingStressActualSelectedUnitOnchange={(e) => handleBearingStressActualUnitChange(e.target.value)}
                                BearingStressActualOptions={
                                    BearingStressActualUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                //Shear Stress Check at Pin Hole 
                                RadiusofCheekPlateValue={RadiusofCheekPlate}
                                RadiusofCheekPlateSelectedUnit={RadiusofCheekPlateSelectedUnit}
                                RadiusofCheekPlateSelectedUnitOnchange={(e) => handleRadiusofCheekPlateUnitChange(e.target.value)}
                                RadiusofCheekPlateOptions={
                                    RadiusofCheekPlateUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                ShearAreaofpinholeValue={ShearAreaofpinhole}
                                ShearAreaofpinholeSelectedUnit={ShearAreaofpinholeSelectedUnit}
                                ShearAreaofpinholeSelectedUnitOnchange={(e) => handleShearAreaofpinholeUnitChange(e.target.value)}
                                ShearAreaofpinholeOption={
                                    ShearAreaofpinholeUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                ShearStressatpinholeValue={ShearStressatpinhole}
                                ShearStressatpinholeSelectedUnit={ShearStressatpinholeSelectedUnit}
                                ShearStressatpinholeSelectedUnitOnchange={(e) => handleShearStressatpinholeUnitChange(e.target.value)}
                                ShearStressatpinholeOptions={
                                    ShearStressatpinholeUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                TensileAreaforsectionAAValue={TensileAreaforsectionAA}
                                TensileAreaforsectionAASelectedUnit={TensileAreaforsectionAASelectedUnit}
                                TensileAreaforsectionAASelectedUnitOnchange={(e) => handleTensileAreaforsectionAAUnitChange(e.target.value)}
                                TensileAreaforsectionAAOption={
                                    TensileAreaforsectionAAUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                TensileStressatpinholeActualatsectionAAValue={TensileStressatpinholeActualatsectionAA}
                                TensileStressatpinholeActualatsectionAASelectedUnit={TensileStressatpinholeActualatsectionAASelectedUnit}
                                TensileStressatpinholeActualatsectionAASelectedUnitOnchange={(e) => handleTensileStressatpinholeActualatsectionAAUnitChange(e.target.value)}
                                TensileStressatpinholeActualatsectionAAOption={
                                    TensileStressatpinholeActualatsectionAAUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                TensileAreaforsectionBBValue={TensileAreaforsectionBB}
                                TensileAreaforsectionBBSelectedUnit={TensileAreaforsectionBBSelectedUnit}
                                TensileAreaforsectionBBSelectedUnitOnchange={(e) => handleTensileAreaforsectionBBUnitChange(e.target.value)}
                                TensileAreaforsectionBBOption={
                                    TensileAreaforsectionBBUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                TensileStressatpinholeActualatsectionBBValue={TensileStressatpinholeActualatsectionBB}
                                TensileStressatpinholeActualatsectionBBSelectedUnit={TensileStressatpinholeActualatsectionBBSelectedUnit}
                                TensileStressatpinholeActualatsectionBBSelectedUnitOnchange={(e) => handleTensileStressatpinholeActualatsectionBBUnitChange(e.target.value)}
                                TensileStressatpinholeActualatsectionBBOption={
                                    TensileStressatpinholeActualatsectionBBUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                DesignLoadperunitLengthValue={DesignLoadperunitLength}
                                DesignLoadperunitLengthSelectedUnit={DesignLoadperunitLengthSelectedUnit}
                                DesignLoadperunitLengthSelectedUnitOnchange={(e) => handleDesignLoadperunitLengthUnitChange(e.target.value)}
                                DesignLoadperunitLengthOptions={
                                    DesignLoadperunitLengthUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                HertzStressatPinHoleValue={HertzStressatPinHole}
                                HertzStressatPinHoleSelectedUnit={HertzStressatPinHoleSelectedUnit}
                                HertzStressatPinHoleSelectedUnitOnchange={(e) => handleHertzStressatPinHoleUnitChange(e.target.value)}
                                HertzStressatPinHoleOptions={
                                    HertzStressatPinHoleUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // Stress Checks at Base Plate
                                // Tensile Stress Check

                                // Tensile Area
                                TensileAreaValue={TensileArea}
                                TensileAreaSelectedUnit={TensileAreaSelectedUnit}
                                TensileAreaSelectedUnitOnchange={(e) => handleTensileAreaUnitChange(e.target.value)}
                                TensileAreaOptions={
                                    TensileAreaUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // Tensile Stress at Base (Actual)
                                TensileStressatBaseActualValue={TensileStressatBaseActual}
                                TensileStressatBaseActualSelectedUnit={TensileStressatBaseActualSelectedUnit}
                                TensileStressatBaseActualSelectedUnitOnchange={(e) => handleTensileStressatBaseActualUnitChange(e.target.value)}
                                TensileStressatBaseActualOption={
                                    TensileStressatBaseActualUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // Bending Stress Check

                                //Moment lever for Horizontal/Lateral Force
                                MomentleverforHorizontalLateralForceValue={MomentleverforHorizontalLateralForce}
                                MomentleverforHorizontalLateralForceSelectedUnit={MomentleverforHorizontalLateralForceSelectedUnit}
                                MomentleverforHorizontalLateralForceSelectedUnitOnchange={(e) => handleMomentleverforHorizontalLateralForceUnitChange(e.target.value)}
                                MomentleverforHorizontalLateralForceOptions={
                                    MomentleverforHorizontalLateralForceUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                MomentleverforVerticalForceValue={MomentleverforVerticalForce}
                                MomentleverforVerticalForceSelectedUnit={MomentleverforVerticalForceSelectedUnit}
                                MomentleverforVerticalForceSelectedUnitOnchange={(e) => handleMomentleverforVerticalForceUnitChange(e.target.value)}
                                MomentleverforVerticalForceOptions={
                                    MomentleverforVerticalForceUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                TotalDesignMomentaboutXaxisInplaneValue={TotalDesignMomentaboutXaxisInplane}
                                TotalDesignMomentaboutXaxisInplaneSelectedUnit={TotalDesignMomentaboutXaxisInplaneSelectedUnit}
                                TotalDesignMomentaboutXaxisInplaneSelectedUnitOnchange={(e) => handleTotalDesignMomentaboutXaxisInplaneUnitChange(e.target.value)}
                                TotalDesignMomentaboutXaxisInplaneOptions={
                                    TotalDesignMomentaboutXaxisInplaneUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                SectionModulusofBaseaboutXaxisValue={SectionModulusofBaseaboutXaxis}
                                SectionModulusofBaseaboutXaxisSelectedUnit={SectionModulusofBaseaboutXaxisSelectedUnit}
                                SectionModulusofBaseaboutXaxisSelectedUnitOnchange={(e) => handleSectionModulusofBaseaboutXaxisUnitChange(e.target.value)}
                                SectionModulusofBaseaboutXaxisOption={
                                    SectionModulusofBaseaboutXaxisUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                BendingStressActualaboutXaxisInplaneValue={BendingStressActualaboutXaxisInplane}
                                BendingStressActualaboutXaxisInplaneSelectedUnit={BendingStressActualaboutXaxisInplaneSelectedUnit}
                                BendingStressActualaboutXaxisInplaneOnchange={(e) => handleBendingStressActualaboutXaxisInplaneUnitChange(e.target.value)}
                                BendingStressActualaboutXaxisInplaneOption={
                                    BendingStressActualaboutXaxisInplaneUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }
                                // Total Design Moment about Y-axis (Out-of Plane)
                                TotalDesignMomentaboutYaxisOutofPlaneValue={TotalDesignMomentaboutYaxisOutofPlane}
                                TotalDesignMomentaboutYaxisOutofPlaneSelectedUnit={TotalDesignMomentaboutYaxisOutofPlaneSelectedUnit}
                                TotalDesignMomentaboutYaxisOutofPlaneSelectedUnitOnchange={(e) => handleTotalDesignMomentaboutYaxisOutofPlaneUnitChange(e.target.value)}
                                TotalDesignMomentaboutYaxisOutofPlaneOption={
                                    TotalDesignMomentaboutYaxisOutofPlaneUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }
                                // Section Modulus of Base about Y-axis
                                SectionModulusofBaseaboutYaxisValue={SectionModulusofBaseaboutYaxis}
                                SectionModulusofBaseaboutYaxisSelectedUnit={SectionModulusofBaseaboutYaxisSelectedUnit}
                                SectionModulusofBaseaboutYaxisSelectedUnitOnchange={(e) => handleSectionModulusofBaseaboutYaxisUnitChange(e.target.value)}
                                SectionModulusofBaseaboutYaxisOption={
                                    SectionModulusofBaseaboutYaxisUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                // Bending Stress (Actual) - about Y-axis (Out-of-Plane)
                                BendingStressActualaboutYaxisOutofPlaneValue={BendingStressActualaboutYaxisOutofPlane}
                                BendingStressActualaboutYaxisOutofPlaneSelectedUnit={BendingStressActualaboutYaxisOutofPlaneSelectedUnit}
                                BendingStressActualaboutYaxisOutofPlaneSelectedUnitOnchange={(e) => handleBendingStressActualaboutYaxisOutofPlaneUnitChange(e.target.value)}
                                BendingStressActualaboutYaxisOutofPlaneOption={
                                    BendingStressActualaboutYaxisOutofPlaneUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                // ShearAreaatBaseHorizontal
                                ShearAreaatBaseHorizontalValue={ShearAreaatBaseHorizontal}
                                ShearAreaatBaseHorizontalSelectedUnit={ShearAreaatBaseHorizontalSelectedUnit}
                                ShearAreaatBaseHorizontalSelectedUnitOnchange={(e) => handleShearAreaatBaseHorizontalUnitChange(e.target.value)}
                                ShearAreaatBaseHorizontalOption={
                                    ShearAreaatBaseHorizontalUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // ShearStressatBaseActualHorizontalYdirection
                                ShearStressatBaseActualHorizontalYdirection={ShearStressatBaseActualHorizontalYdirection}
                                ShearStressatBaseActualHorizontalYdirectionSelectedUnit={ShearStressatBaseActualHorizontalYdirectionSelectedUnit}
                                ShearStressatBaseActualHorizontalYdirectionSelectedUnitOnchange={(e) => handleShearStressatBaseActualHorizontalYdirectionUnitChange(e.target.value)}
                                ShearStressatBaseActualHorizontalYdirectionOptions={
                                    ShearStressatBaseActualHorizontalYdirectionUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // ShearStressatBaseActualLateralXdirection
                                ShearStressatBaseActualLateralXdirection={ShearStressatBaseActualLateralXdirection}
                                ShearStressatBaseActualLateralXdirectionSelectedUnit={ShearStressatBaseActualLateralXdirectionSelectedUnit}
                                ShearStressatBaseActualLateralXdirectionSelectedUnitOnchange={(e) => handleShearStressatBaseActualLateralXdirectionUnitChange(e.target.value)}
                                ShearStressatBaseActualLateralXdirectionOption={
                                    ShearStressatBaseActualLateralXdirectionUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // VonMisesStressatBaseActual
                                VonMisesStressatBaseActual={VonMisesStressatBaseActual}
                                VonMisesStressatBaseActualSelectedUnit={VonMisesStressatBaseActualSelectedUnit}
                                VonMisesStressatBaseActualSelectedUnitOnchange={(e) => handleVonMisesStressatBaseActualUnitChange(e.target.value)}
                                VonMisesStressatBaseActualOption={
                                    VonMisesStressatBaseActualUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }
                                WeldCheckatCheekPlateWeld
                                // Throatthickness
                                ThroatthicknessValue={Throatthickness}
                                ThroatthicknessSelectedUnit={ThroatthicknessSelectedUnit}
                                ThroatthicknessSelectedUnitOnchange={(e) => handleThroatthicknessUnitChange(e.target.value)}
                                ThroatthicknessOption={
                                    ThroatthicknessUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // WeldCheckatCheekPlateWeldThroatthickness
                                WeldCheckatCheekPlateWeldThroatthicknessValue={WeldCheckatCheekPlateWeldThroatthickness}
                                WeldCheckatCheekPlateWeldThroatthicknessSelectedUnit={WeldCheckatCheekPlateWeldThroatthicknessSelectedUnit}
                                WeldCheckatCheekPlateWeldThroatthicknessSelectedUnitOnchange={(e) => handleWeldCheckatCheekPlateWeldThroatthicknessUnitChange(e.target.value)}
                                WeldCheckatCheekPlateWeldThroatthicknessOption={
                                    WeldCheckatCheekPlateWeldThroatthicknessUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                // TotalWeldLength
                                TotalWeldLengthvalue={TotalWeldLength}
                                TotalWeldLengthSelectedUnit={TotalWeldLengthSelectedUnit}
                                TotalWeldLengthSelectedUnitOnchange={(e) => handleTotalWeldLengthUnitChange(e.target.value)}
                                TotalWeldLengthOption={
                                    TotalWeldLengthUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // ShearStressatBaseWeld
                                ShearStressatBaseWeldValue={ShearStressatBaseWeld}
                                ShearStressatBaseWeldSelectedUnit={ShearStressatBaseWeldSelectedUnit}
                                ShearStressatBaseWeldSelectedUnitOnchange={(e) => handleShearStressatBaseWeldUnitChange(e.target.value)}
                                ShearStressatBaseWeldOption={
                                    ShearStressatBaseWeldUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // ShearStressatBaseWeldActualHorizontalYdirection
                                ShearStressatBaseWeldActualHorizontalYdirectionValue={ShearStressatBaseWeldActualHorizontalYdirection} ShearStressatBaseWeldActualHorizontalYdirectionSelectedUnit={ShearStressatBaseWeldActualHorizontalYdirectionSelectedUnit} ShearStressatBaseWeldActualHorizontalYdirectionSelectedUnitOnchange={(e) => handleShearStressatBaseWeldActualHorizontalYdirectionUnitChange(e.target.value)} ShearStressatBaseWeldActualHorizontalYdirectionOptions={ShearStressatBaseWeldActualHorizontalYdirectionUnits.map((unit) => (<option key={unit} value={unit}>{unit}</option>))}

                                // ShearStressatBaseWeldActualLateralXdirection
                                ShearStressatBaseWeldActualLateralXdirectionValue={ShearStressatBaseWeldActualLateralXdirection} ShearStressatBaseWeldActualLateralXdirectionSelectedUnit={ShearStressatBaseWeldActualLateralXdirectionSelectedUnit} ShearStressatBaseWeldActualLateralXdirectionSelectedUnitOnchange={(e) => handleShearStressatBaseWeldActualLateralXdirectionUnitChange(e.target.value)} ShearStressatBaseWeldActualLateralXdirectionOption={ShearStressatBaseWeldActualLateralXdirectionUnit.map((unit) => (<option key={unit} value={unit}>{unit}</option>))}

                                // TensileAreaatBase
                                TensileAreaatBase={TensileAreaatBase} TensileAreaatBaseSelectedUnit={TensileAreaatBaseSelectedUnit} TensileAreaatBaseSelectedUnitOnchange={(e) => handleTensileAreaatBaseUnitChange(e.target.value)} TensileAreaatBaseOption={TensileAreaatBaseUnit.map((unit) => (<option key={unit} value={unit}>{unit}</option>))}

                                // TensileStressatBaseWeldActual
                                TensileStressatBaseWeldActual={TensileStressatBaseWeldActual} TensileStressatBaseWeldActualSelectedUnit={TensileStressatBaseWeldActualSelectedUnit} TensileStressatBaseWeldActualSelectedUnitOnchange={(e) => handleTensileStressatBaseWeldActualUnitChange(e.target.value)} TensileStressatBaseWeldActualoption={TensileStressatBaseWeldActualUnit.map((unit) => (<option key={unit} value={unit}>{unit}</option>))}

                                // SectionModulusofWeldaboutXaxis
                                SectionModulusofWeldaboutXaxis={SectionModulusofWeldaboutXaxis} SectionModulusofWeldaboutXaxisSelectedUnit={SectionModulusofWeldaboutXaxisSelectedUnit} SectionModulusofWeldaboutXaxisSelectedUnitOnchange={(e) => handleSectionModulusofWeldaboutXaxisUnitChange(e.target.value)} SectionModulusofWeldaboutXaxisOptions={SectionModulusofWeldaboutXaxisUnit.map((unit) => (<option key={unit} value={unit}>{unit}</option>))}

                                // SectionModulusofWeldaboutYaxis
                                SectionModulusofWeldaboutYaxis={SectionModulusofWeldaboutYaxis} SectionModulusofWeldaboutYaxisSelectedUnit={SectionModulusofWeldaboutYaxisSelectedUnit} SectionModulusofWeldaboutYaxisSelectedUnitOnchange={(e) => handleSectionModulusofWeldaboutYaxisUnitChange(e.target.value)} SectionModulusofWeldaboutYaxisOptions={SectionModulusofWeldaboutYaxisUnit.map((unit) => (<option key={unit} value={unit}>{unit}</option>))}

                                // BendingStressatBaseWeldActualaboutXAxisInPlane
                                BendingStressatBaseWeldActualaboutXAxisInPlane={BendingStressatBaseWeldActualaboutXAxisInPlane}
                                BendingStressatBaseWeldActualaboutXAxisInPlaneSelectedUnit={BendingStressatBaseWeldActualaboutXAxisInPlaneSelectedUnit}
                                BendingStressatBaseWeldActualaboutXAxisInPlaneSelectedUnitOnchange={(e) => handleBendingStressatBaseWeldActualaboutXAxisInPlaneUnitChange(e.target.value)}
                                BendingStressatBaseWeldActualaboutXAxisInPlaneOptions={
                                    BendingStressatBaseWeldActualaboutXAxisInPlaneUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }
                                // TotalDesignMomentaboutYaxisOutofPlane
                                TotalDesignMomentaboutYaxisOutofPlane={TotalDesignMomentaboutYaxisOutofPlane}
                                TotalDesignMomentaboutYaxisOutofPlaneSelectedUnits={TotalDesignMomentaboutYaxisOutofPlaneSelectedUnit}
                                TotalDesignMomentaboutYaxisOutofPlaneSelectedUnitsOnchange={(e) => handleTotalDesignMomentaboutYaxisOutofPlaneUnitChange(e.target.value)}
                                TotalDesignMomentaboutYaxisOutofPlaneOptions={
                                    BendingStressActualaboutYaxisOutofPlaneUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }
                                // BendingStressaboutYaxisOutofPlane
                                BendingStressaboutYaxisOutofPlane={BendingStressaboutYaxisOutofPlane}
                                BendingStressaboutYaxisOutofPlaneSelectedUnit={BendingStressaboutYaxisOutofPlaneSelectedUnit}
                                BendingStressaboutYaxisOutofPlaneSelectedUnitOnchange={(e) => handleBendingStressaboutYaxisOutofPlaneUnitChange(e.target.value)}
                                BendingStressaboutYaxisOutofPlaneOptions={
                                    BendingStressaboutYaxisOutofPlaneUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // TotalStressatBaseWeldActual
                                TotalStressatBaseWeldActual={TotalStressatBaseWeldActual}
                                TotalStressatBaseWeldActualSelectedUnit={TotalStressatBaseWeldActualSelectedUnit}
                                TotalStressatBaseWeldActualSelectedUnitOnchange={(e) => handleTotalStressatBaseWeldActualUnitChange(e.target.value)}
                                TotalStressatBaseWeldActualOptions={
                                    TotalStressatBaseWeldActualUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // Weld Check at Cheek Plate Weld

                                // WeldLength
                                WeldLength={WeldLength}
                                WeldLengthSelectedUnit={WeldLengthSelectedUnit}
                                WeldLengthSelectedUnitOnchange={(e) => handleWeldLengthUnitChange(e.target.value)}
                                WeldLengthOptions={
                                    WeldLengthUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // WeldAreaatCheekPlate
                                WeldAreaatCheekPlate={WeldAreaatCheekPlate}
                                WeldAreaatCheekPlateSelectedUnit={WeldAreaatCheekPlateSelectedUnit}
                                WeldAreaatCheekPlateSelectedUnitOnchange={(e) => handleWeldAreaatCheekPlateUnitChange(e.target.value)}
                                WeldAreaatCheekPlateOptions={
                                    WeldAreaatCheekPlateUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }
                                // DesignLoadononecheekplate
                                DesignLoadononecheekplate={DesignLoadononecheekplate}
                                DesignLoadononecheekplateSelectedUnit={DesignLoadononecheekplateSelectedUnit}
                                DesignLoadononecheekplateSelectedUnitOnchange={(e) => handleDesignLoadononecheekplateUnitChange(e.target.value)}
                                DesignLoadononecheekplateOptions={
                                    DesignLoadononecheekplateUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }
                                // WeldStressatCheekWeldActual
                                WeldStressatCheekWeldActual={WeldStressatCheekWeldActual}
                                WeldStressatCheekWeldActualSelectedUnit={WeldStressatCheekWeldActualSelectedUnit}
                                WeldStressatCheekWeldActualSelectedUnitOnchange={(e) => handleWeldStressatCheekWeldActualUnitChange(e.target.value)}
                                WeldStressatCheekWeldActualoptions={
                                    WeldStressatCheekWeldActualUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // If else
                                MainPlateRadiusCondition={MainPlateRadius}
                                ShackleClearanceChecksCondition={ShackleClearanceChecks}
                                // 
                                BearingStressCheckatPinHoleCondition={BearingStressCheckatPinHole}
                                ShearStressCheckatPinHoleCondition={ShearStressCheckatPinHole}
                                TensileStressCheckatPinHoleCondition={TensileStressCheckatPinHole}
                                HertzContactStressCheckatPinHoleCondition={HertzContactStressCheckatPinHole}
                                // 
                                TensileStressCheckatBaseCondition={TensileStressCheckatBase}
                                BendingStressCheckatBaseXaxisCondition={BendingStressCheckatBaseXaxis}
                                BendingStressCheckatBaseYaxisCondition={BendingStressCheckatBaseYaxis}
                                ShearStressCheckatBaseYdirectionCondition={ShearStressCheckatBaseYdirection}
                                ShearStressCheckatBaseXdirectionCondition={ShearStressCheckatBaseXdirection}
                                CombinedStressCheckatStressCheckBasePlateCondition={CombinedStressCheckatStressCheckBasePlate}
                                // 
                                CombinedStressCheckatBaseCondition={CombinedStressCheckatBase}
                                // 
                                StressCheckatCheekPlateWeldCondition={StressCheckatCheekPlateWeld}

                                // toogle function
                                togglefunction={isActive3}
                                toggleBreaks={toggleClass3}
                            />
                        )}
                        {selectedOption === 'option5' && (

                            <PadEyeLoad

                                LoadonPadeyeValue={LoadonPadeyeValue}
                                LoadonPadeyeValueOnchange={(e) => handleLoadonPadeyeValueChange(e.target.value)}
                                LoadonPadeyeSelectedUnit={LoadonPadeyeSelectedUnit}
                                LoadonPadeyeSelectedUnitOnchange={(e) => handleLoadonPadeyeUnitChange(e.target.value)}
                                LoadonPadeyeOption={
                                    LoadonPadeyeunits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                AngleofLoadwithVerticalvalue={AngleofLoadwithVerticalvalue}
                                AngleofLoadwithVerticalvalueOnchange={(e) => handleAngleofLoadwithVerticalvalue(e.target.value)}
                                AngleofLoadwithVerticalSelectedUnit={AngleofLoadwithVerticalSelectedUnit}
                                AngleofLoadwithVerticalSelectedUnitOnchange={(e) => handleAngleofLoadwithVerticalSelectedUnit(e.target.value)}
                                AngleofLoadwithVerticalOption={
                                    AngleofLoadwithVerticalunit.map((Unit) => (
                                        <option key={Unit} value={Unit}>
                                            {Unit}
                                        </option>
                                    ))
                                }


                                OutofPlaneAngleValue={OutofPlaneAngleValue}
                                OutofPlaneAngleValueOnchange={(e) => handleOutofPlaneAngleValueStresChange(e.target.value)}
                                OutofPlaneAngleselectedUnit={OutofPlaneAngleselectedUnit}
                                OutofPlaneAngleselectedUnitOnchange={(e) => handleOutofPlaneAngleunitchange(e.target.value)}
                                OutofPlaneAngleOption={
                                    OutofPlaneAngleUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                DLFValue={DLFValue}
                                DLFValueOnchange={(e) => handleDLFValue(e.target.value)}



                                AllowableBearingStressValue={AllowableBearingStressValue}
                                AllowableBearingStressselectedUnit={AllowableBearingStressselectedUnit}
                                AllowableBearingStressselectedUnitOnchange={(e) => handleAllowableBearingStressUnitChange(e.target.value)}
                                AllowableBearingStressOptions={
                                    AllowableBearingStressunits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                AllowableBendingStressInPlaneValue={AllowableBendingStressInPlaneValue}
                                AllowableBendingStressInPlaneselectedUnit={AllowableBendingStressInPlaneselectedUnit}
                                AllowableBendingStressInPlaneselectedUnitOnchange={(e) => handleAllowableBendingStressInPlaneUnitChange(e.target.value)}
                                AllowableBendingStressInPlaneOption={
                                    AllowableBendingStressInPlaneunits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                AllowableBendingStressOutofPlaneValue={AllowableBendingStressOutofPlaneValue}
                                AllowableBendingStressOutofPlaneselectedUnit={AllowableBendingStressOutofPlaneselectedUnit}
                                AllowableBendingStressOutofPlaneselectedUnitOnchange={(e) => handleAllowableBendingStressOutofPlaneselectedUnitChange(e.target.value)}
                                AllowableBendingStressOutofPlaneOption={
                                    AllowableBendingStressOutofPlaneunits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                AllowableTensileStressValue={AllowableTensileStressValue}
                                AllowableTensileStressSelectedUnit={AllowableTensileStressSelectedUnit}
                                AllowableTensileStressSelectedUnitOnchange={(e) => handleAllowableTensileStressselectedUnitChange(e.target.value)}
                                AllowableTensileStressOption={
                                    AllowableTensileStressUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                AllowableTensileStressatpinholeValue={AllowableTensileStressatpinholeValue}
                                AllowableTensileStressatpinholeSelectedUnit={AllowableTensileStressatpinholeSelectedUnit}
                                AllowableTensileStressatpinholeSelectedUnitOnchange={(e) => handleAllowableTensileStressatpinholeselectedUnitChange(e.target.value)}
                                AllowableTensileStressatpinholeUnits={
                                    AllowableTensileStressatpinholeUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                AllowableShearStressValue={AllowableShearStressValue}
                                AllowableShearStressSelectedUnit={AllowableShearStressSelectedUnit}
                                AllowableShearStressSelectedUnitOnchange={(e) => handleAllowableShearStressselectedUnitChange(e.target.value)}
                                AllowableShearStressOptions={
                                    AllowableShearStressUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                AllowableHertzStressatPinHoleValue={AllowableHertzStressatPinHoleValue}
                                AllowableHertzStressatPinHoleSelectedUnit={AllowableHertzStressatPinHoleSelectedUnit}
                                AllowableHertzStressatPinHoleSelectedUnitOnchange={(e) => handleAllowableHertzStressatPinHoleselectedUnitChange(e.target.value)}
                                AllowableHertzStressatPinHoleOptions={
                                    AllowableHertzStressatPinHoleUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                AllowableWeldStressValue={AllowableWeldStressValue}
                                AllowableWeldStressSelectedUnit={AllowableWeldStressSelectedUnit}
                                AllowableWeldStressSelectedUnitOnchange={(e) => handleAllowableWeldStressselectedUnitChange(e.target.value)}
                                AllowableWeldStressOptions={
                                    AllowableWeldStressUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                // Design Loads
                                LoadinVerticalDirectionZdirectionValue={LoadinVerticalDirectionZdirectionValue}
                                LoadinVerticalDirectionZdirectionSelectedUnit={LoadinVerticalDirectionZdirectionSelectedUnit}
                                handleLoadinVerticalDirectionZdirectionselectedUnitChange={(e) => handleLoadinVerticalDirectionZdirectionselectedUnitChange(e.target.value)}
                                LoadinVerticalDirectionZdirectionOptions={
                                    LoadinVerticalDirectionZdirectionUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }
                                // LoadinVerticalDirectionZdirectionValue={LoadinVerticalDirectionZdirectionValue}
                                // LoadinVerticalDirectionZdirectionSelectedUnit={LoadinVerticalDirectionZdirectionSelectedUnit}
                                // LoadinVerticalDirectionZdirectionValueOnchange={(e) => calculateLoadinVerticalDirectionZdirectionValue(e.target.value)}
                                // LoadinVerticalDirectionZdirectionSelectedUnitOnchange={(e) => handleLoadinVerticalDirectionZdirectionselectedUnitChange(e.target.value)}
                                // LoadinVerticalDirectionZdirectionOptions={
                                //     LoadinVerticalDirectionZdirectionUnits.map((unit) => (
                                //         <option key={unit} value={unit}>
                                //             {unit}
                                //         </option>
                                //     ))
                                // }

                                // handleLoadinVerticalDirectionZdirectionselectedUnitChange

                                LoadinHorizontalDirectionYdirectionValue={LoadinHorizontalDirectionYdirection}
                                LoadinHorizontalDirectionYdirectionSelectedUnit={LoadinHorizontalDirectionYdirectionSelectedUnit}
                                LoadinHorizontalDirectionYdirectionValueOnchange={(e) => calculateLoadinHorizontalDirectionYdirectionValue(e.target.value)}
                                LoadinHorizontalDirectionYdirectionSelectedUnitOnchange={(e) => handleLoadinHorizontalDirectionYdirectionselectedUnitChange(e.target.value)}
                                LoadinHorizontalDirectionYdirectionOptions={
                                    LoadinHorizontalDirectionYdirectionUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                OutofplaneLoadLateralLoadXdirectionValue={OutofplaneLoadLateralLoadXdirection}
                                OutofplaneLoadLateralLoadXdirectionSelectedUnit={OutofplaneLoadLateralLoadXdirectionSelectedUnit}
                                OutofplaneLoadLateralLoadXdirectionValueOnchange={(e) => calculateLoadinHorizontalDirectionYdirectionValue(e.target.value)}
                                OutofplaneLoadLateralLoadXdirectionSelectedUnitOnchange={(e) => handleOutofplaneLoadLateralLoadXdirectionselectedUnitChange(e.target.value)}
                                OutofplaneLoadLateralLoadXdirectionOptions={
                                    OutofplaneLoadLateralLoadXdirectionUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                PadEyeDesignLoadvalue={PadEyeDesignLoad}
                                PadEyeDesignLoadSelectedUnit={PadEyeDesignLoadSelectedUnit}
                                PadEyeDesignLoadvalueOnchange={(e) => calculateLoadinHorizontalDirectionYdirectionValue(e.target.value)}
                                PadEyeDesignLoadSelectedUnitOnchange={(e) => handlePadEyeDesignLoadselectedUnitChange(e.target.value)}
                                PadEyeDesignLoadOptions={
                                    PadEyeDesignLoadUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                DesignLoadinVerticalDirectionZdirectionvalue={DesignLoadinVerticalDirectionZdirection}
                                DesignLoadinVerticalDirectionZdirectionSelectedUnit={DesignLoadinVerticalDirectionZdirectionSelectedUnit}
                                DesignLoadinVerticalDirectionZdirectionvalueOnchange={(e) => calculateLoadinHorizontalDirectionYdirectionValue(e.target.value)}
                                DesignLoadinVerticalDirectionZdirectionSelectedUnitOnchange={(e) => handleDesignLoadinVerticalDirectionZdirectionselectedUnitChange(e.target.value)}
                                DesignLoadinVerticalDirectionZdirectionOptions={
                                    DesignLoadinVerticalDirectionZdirectionUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                DesignLoadinHorizontalDirectionYdirectionValue={DesignLoadinHorizontalDirectionYdirection}
                                DesignLoadinHorizontalDirectionYdirectionSelectedUnit={DesignLoadinHorizontalDirectionYdirectionSelectedUnit}
                                DesignLoadinHorizontalDirectionYdirectionValueOnchange={(e) => calculateLoadinHorizontalDirectionYdirectionValue(e.target.value)}
                                DesignLoadinHorizontalDirectionYdirectionSelectedUnitOnchange={(e) => handleDesignLoadinHorizontalDirectionYdirectionselectedUnitChange(e.target.value)}
                                DesignLoadinHorizontalDirectionYdirectionOption={
                                    DesignLoadinHorizontalDirectionYdirectionUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                DesignLoadOutofPlaneLateralXdirectionValue={DesignLoadOutofPlaneLateralXdirection}
                                DesignLoadOutofPlaneLateralXdirectionSelectedUnit={DesignLoadOutofPlaneLateralXdirectionSelectedUnit}
                                DesignLoadOutofPlaneLateralXdirectionValueOnchange={(e) => calculateLoadinHorizontalDirectionYdirectionValue(e.target.value)}
                                DesignLoadOutofPlaneLateralXdirectionSelectedUnitOnchange={(e) => handleDesignLoadOutofPlaneLateralXdirectionselectedUnitChange(e.target.value)}
                                DesignLoadOutofPlaneLateralXdirectionOption={
                                    DesignLoadOutofPlaneLateralXdirectionUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }



                                // geometry check

                                Clearancebetweenpinholediaandpindiavalue={Clearancebetweenpinholediaandpindia}
                                ClearancebetweenpinholediaandpindiaSelectedunit={ClearancebetweenpinholediaandpindiaSelectedunit}
                                ClearancebetweenpinholediaandpindiaSelectedunitOnchange={(e) => handleClearancebetweenpinholediaandpindiaselectedUnitChange(e.target.value)}
                                ClearancebetweenpinholediaandpindiaOptions={
                                    ClearancebetweenpinholediaandpindiaUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                LengthClearanceofShackleValue={LengthClearanceofShackle}
                                LengthClearanceofShackleselectedunit={LengthClearanceofShackleselectedunit}
                                LengthClearanceofShackleselectedunitOnchange={(e) => handleLengthClearanceofShackleselectedUnitChange(e.target.value)}
                                LengthClearanceofShackleOption={
                                    LengthClearanceofShackleUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                WidthClearanceofShackle={WidthClearanceofShackle}
                                WidthClearanceofShackleSelectedUnit={WidthClearanceofShackleSelectedUnit}
                                WidthClearanceofShackleSelectedUnitOnchange={(e) => handleWidthClearanceofShackleUnitChange(e.target.value)}
                                WidthClearanceofShackleOption={
                                    WidthClearanceofShackleUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                // Stress Checks at Pin Hole
                                // Bearing Area
                                BearingAreaValue={BearingArea}
                                BearingAreaSelectedUnit={BearingAreaSelectedUnit}
                                BearingAreaSelectedUnitOnchange={(e) => handleBearingAreaUnitChange(e.target.value)}
                                BearingAreaOptions={
                                    BearingAreaUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                // Bearing Stress (Actual)
                                BearingStressActualValue={BearingStressActual}
                                BearingStressActualSelectedUnit={BearingStressActualSelectedUnit}
                                BearingStressActualSelectedUnitOnchange={(e) => handleBearingStressActualUnitChange(e.target.value)}
                                BearingStressActualOptions={
                                    BearingStressActualUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                //Shear Stress Check at Pin Hole 
                                RadiusofCheekPlateValue={RadiusofCheekPlate}
                                RadiusofCheekPlateSelectedUnit={RadiusofCheekPlateSelectedUnit}
                                RadiusofCheekPlateSelectedUnitOnchange={(e) => handleRadiusofCheekPlateUnitChange(e.target.value)}
                                RadiusofCheekPlateOptions={
                                    RadiusofCheekPlateUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                ShearAreaofpinholeValue={ShearAreaofpinhole}
                                ShearAreaofpinholeSelectedUnit={ShearAreaofpinholeSelectedUnit}
                                ShearAreaofpinholeSelectedUnitOnchange={(e) => handleShearAreaofpinholeUnitChange(e.target.value)}
                                ShearAreaofpinholeOption={
                                    ShearAreaofpinholeUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                ShearStressatpinholeValue={ShearStressatpinhole}
                                ShearStressatpinholeSelectedUnit={ShearStressatpinholeSelectedUnit}
                                ShearStressatpinholeSelectedUnitOnchange={(e) => handleShearStressatpinholeUnitChange(e.target.value)}
                                ShearStressatpinholeOptions={
                                    ShearStressatpinholeUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                TensileAreaforsectionAAValue={TensileAreaforsectionAA}
                                TensileAreaforsectionAASelectedUnit={TensileAreaforsectionAASelectedUnit}
                                TensileAreaforsectionAASelectedUnitOnchange={(e) => handleTensileAreaforsectionAAUnitChange(e.target.value)}
                                TensileAreaforsectionAAOption={
                                    TensileAreaforsectionAAUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                TensileStressatpinholeActualatsectionAAValue={TensileStressatpinholeActualatsectionAA}
                                TensileStressatpinholeActualatsectionAASelectedUnit={TensileStressatpinholeActualatsectionAASelectedUnit}
                                TensileStressatpinholeActualatsectionAASelectedUnitOnchange={(e) => handleTensileStressatpinholeActualatsectionAAUnitChange(e.target.value)}
                                TensileStressatpinholeActualatsectionAAOption={
                                    TensileStressatpinholeActualatsectionAAUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                TensileAreaforsectionBBValue={TensileAreaforsectionBB}
                                TensileAreaforsectionBBSelectedUnit={TensileAreaforsectionBBSelectedUnit}
                                TensileAreaforsectionBBSelectedUnitOnchange={(e) => handleTensileAreaforsectionBBUnitChange(e.target.value)}
                                TensileAreaforsectionBBOption={
                                    TensileAreaforsectionBBUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                TensileStressatpinholeActualatsectionBBValue={TensileStressatpinholeActualatsectionBB}
                                TensileStressatpinholeActualatsectionBBSelectedUnit={TensileStressatpinholeActualatsectionBBSelectedUnit}
                                TensileStressatpinholeActualatsectionBBSelectedUnitOnchange={(e) => handleTensileStressatpinholeActualatsectionBBUnitChange(e.target.value)}
                                TensileStressatpinholeActualatsectionBBOption={
                                    TensileStressatpinholeActualatsectionBBUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                DesignLoadperunitLengthValue={DesignLoadperunitLength}
                                DesignLoadperunitLengthSelectedUnit={DesignLoadperunitLengthSelectedUnit}
                                DesignLoadperunitLengthSelectedUnitOnchange={(e) => handleDesignLoadperunitLengthUnitChange(e.target.value)}
                                DesignLoadperunitLengthOptions={
                                    DesignLoadperunitLengthUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                HertzStressatPinHoleValue={HertzStressatPinHole}
                                HertzStressatPinHoleSelectedUnit={HertzStressatPinHoleSelectedUnit}
                                HertzStressatPinHoleSelectedUnitOnchange={(e) => handleHertzStressatPinHoleUnitChange(e.target.value)}
                                HertzStressatPinHoleOptions={
                                    HertzStressatPinHoleUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // Stress Checks at Base Plate
                                // Tensile Stress Check

                                // Tensile Area
                                TensileAreaValue={TensileArea}
                                TensileAreaSelectedUnit={TensileAreaSelectedUnit}
                                TensileAreaSelectedUnitOnchange={(e) => handleTensileAreaUnitChange(e.target.value)}
                                TensileAreaOptions={
                                    TensileAreaUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // Tensile Stress at Base (Actual)
                                TensileStressatBaseActualValue={TensileStressatBaseActual}
                                TensileStressatBaseActualSelectedUnit={TensileStressatBaseActualSelectedUnit}
                                TensileStressatBaseActualSelectedUnitOnchange={(e) => handleTensileStressatBaseActualUnitChange(e.target.value)}
                                TensileStressatBaseActualOption={
                                    TensileStressatBaseActualUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // Bending Stress Check

                                //Moment lever for Horizontal/Lateral Force
                                MomentleverforHorizontalLateralForceValue={MomentleverforHorizontalLateralForce}
                                MomentleverforHorizontalLateralForceSelectedUnit={MomentleverforHorizontalLateralForceSelectedUnit}
                                MomentleverforHorizontalLateralForceSelectedUnitOnchange={(e) => handleMomentleverforHorizontalLateralForceUnitChange(e.target.value)}
                                MomentleverforHorizontalLateralForceOptions={
                                    MomentleverforHorizontalLateralForceUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                MomentleverforVerticalForceValue={MomentleverforVerticalForce}
                                MomentleverforVerticalForceSelectedUnit={MomentleverforVerticalForceSelectedUnit}
                                MomentleverforVerticalForceSelectedUnitOnchange={(e) => handleMomentleverforVerticalForceUnitChange(e.target.value)}
                                MomentleverforVerticalForceOptions={
                                    MomentleverforVerticalForceUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                TotalDesignMomentaboutXaxisInplaneValue={TotalDesignMomentaboutXaxisInplane}
                                TotalDesignMomentaboutXaxisInplaneSelectedUnit={TotalDesignMomentaboutXaxisInplaneSelectedUnit}
                                TotalDesignMomentaboutXaxisInplaneSelectedUnitOnchange={(e) => handleTotalDesignMomentaboutXaxisInplaneUnitChange(e.target.value)}
                                TotalDesignMomentaboutXaxisInplaneOptions={
                                    TotalDesignMomentaboutXaxisInplaneUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                SectionModulusofBaseaboutXaxisValue={SectionModulusofBaseaboutXaxis}
                                SectionModulusofBaseaboutXaxisSelectedUnit={SectionModulusofBaseaboutXaxisSelectedUnit}
                                SectionModulusofBaseaboutXaxisSelectedUnitOnchange={(e) => handleSectionModulusofBaseaboutXaxisUnitChange(e.target.value)}
                                SectionModulusofBaseaboutXaxisOption={
                                    SectionModulusofBaseaboutXaxisUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                BendingStressActualaboutXaxisInplaneValue={BendingStressActualaboutXaxisInplane}
                                BendingStressActualaboutXaxisInplaneSelectedUnit={BendingStressActualaboutXaxisInplaneSelectedUnit}
                                BendingStressActualaboutXaxisInplaneOnchange={(e) => handleBendingStressActualaboutXaxisInplaneUnitChange(e.target.value)}
                                BendingStressActualaboutXaxisInplaneOption={
                                    BendingStressActualaboutXaxisInplaneUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }
                                // Total Design Moment about Y-axis (Out-of Plane)
                                TotalDesignMomentaboutYaxisOutofPlaneValue={TotalDesignMomentaboutYaxisOutofPlane}
                                TotalDesignMomentaboutYaxisOutofPlaneSelectedUnit={TotalDesignMomentaboutYaxisOutofPlaneSelectedUnit}
                                TotalDesignMomentaboutYaxisOutofPlaneSelectedUnitOnchange={(e) => handleTotalDesignMomentaboutYaxisOutofPlaneUnitChange(e.target.value)}
                                TotalDesignMomentaboutYaxisOutofPlaneOption={
                                    TotalDesignMomentaboutYaxisOutofPlaneUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }
                                // Section Modulus of Base about Y-axis
                                SectionModulusofBaseaboutYaxisValue={SectionModulusofBaseaboutYaxis}
                                SectionModulusofBaseaboutYaxisSelectedUnit={SectionModulusofBaseaboutYaxisSelectedUnit}
                                SectionModulusofBaseaboutYaxisSelectedUnitOnchange={(e) => handleSectionModulusofBaseaboutYaxisUnitChange(e.target.value)}
                                SectionModulusofBaseaboutYaxisOption={
                                    SectionModulusofBaseaboutYaxisUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                // Bending Stress (Actual) - about Y-axis (Out-of-Plane)
                                BendingStressActualaboutYaxisOutofPlaneValue={BendingStressActualaboutYaxisOutofPlane}
                                BendingStressActualaboutYaxisOutofPlaneSelectedUnit={BendingStressActualaboutYaxisOutofPlaneSelectedUnit}
                                BendingStressActualaboutYaxisOutofPlaneSelectedUnitOnchange={(e) => handleBendingStressActualaboutYaxisOutofPlaneUnitChange(e.target.value)}
                                BendingStressActualaboutYaxisOutofPlaneOption={
                                    BendingStressActualaboutYaxisOutofPlaneUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                // ShearAreaatBaseHorizontal
                                ShearAreaatBaseHorizontalValue={ShearAreaatBaseHorizontal}
                                ShearAreaatBaseHorizontalSelectedUnit={ShearAreaatBaseHorizontalSelectedUnit}
                                ShearAreaatBaseHorizontalSelectedUnitOnchange={(e) => handleShearAreaatBaseHorizontalUnitChange(e.target.value)}
                                ShearAreaatBaseHorizontalOption={
                                    ShearAreaatBaseHorizontalUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // ShearStressatBaseActualHorizontalYdirection
                                ShearStressatBaseActualHorizontalYdirection={ShearStressatBaseActualHorizontalYdirection}
                                ShearStressatBaseActualHorizontalYdirectionSelectedUnit={ShearStressatBaseActualHorizontalYdirectionSelectedUnit}
                                ShearStressatBaseActualHorizontalYdirectionSelectedUnitOnchange={(e) => handleShearStressatBaseActualHorizontalYdirectionUnitChange(e.target.value)}
                                ShearStressatBaseActualHorizontalYdirectionOptions={
                                    ShearStressatBaseActualHorizontalYdirectionUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // ShearStressatBaseActualLateralXdirection
                                ShearStressatBaseActualLateralXdirection={ShearStressatBaseActualLateralXdirection}
                                ShearStressatBaseActualLateralXdirectionSelectedUnit={ShearStressatBaseActualLateralXdirectionSelectedUnit}
                                ShearStressatBaseActualLateralXdirectionSelectedUnitOnchange={(e) => handleShearStressatBaseActualLateralXdirectionUnitChange(e.target.value)}
                                ShearStressatBaseActualLateralXdirectionOption={
                                    ShearStressatBaseActualLateralXdirectionUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // VonMisesStressatBaseActual
                                VonMisesStressatBaseActual={VonMisesStressatBaseActual}
                                VonMisesStressatBaseActualSelectedUnit={VonMisesStressatBaseActualSelectedUnit}
                                VonMisesStressatBaseActualSelectedUnitOnchange={(e) => handleVonMisesStressatBaseActualUnitChange(e.target.value)}
                                VonMisesStressatBaseActualOption={
                                    VonMisesStressatBaseActualUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }
                                WeldCheckatCheekPlateWeld
                                // Throatthickness
                                ThroatthicknessValue={Throatthickness}
                                ThroatthicknessSelectedUnit={ThroatthicknessSelectedUnit}
                                ThroatthicknessSelectedUnitOnchange={(e) => handleThroatthicknessUnitChange(e.target.value)}
                                ThroatthicknessOption={
                                    ThroatthicknessUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // WeldCheckatCheekPlateWeldThroatthickness
                                WeldCheckatCheekPlateWeldThroatthicknessValue={WeldCheckatCheekPlateWeldThroatthickness}
                                WeldCheckatCheekPlateWeldThroatthicknessSelectedUnit={WeldCheckatCheekPlateWeldThroatthicknessSelectedUnit}
                                WeldCheckatCheekPlateWeldThroatthicknessSelectedUnitOnchange={(e) => handleWeldCheckatCheekPlateWeldThroatthicknessUnitChange(e.target.value)}
                                WeldCheckatCheekPlateWeldThroatthicknessOption={
                                    WeldCheckatCheekPlateWeldThroatthicknessUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                // TotalWeldLength
                                TotalWeldLengthvalue={TotalWeldLength}
                                TotalWeldLengthSelectedUnit={TotalWeldLengthSelectedUnit}
                                TotalWeldLengthSelectedUnitOnchange={(e) => handleTotalWeldLengthUnitChange(e.target.value)}
                                TotalWeldLengthOption={
                                    TotalWeldLengthUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // ShearStressatBaseWeld
                                ShearStressatBaseWeldValue={ShearStressatBaseWeld}
                                ShearStressatBaseWeldSelectedUnit={ShearStressatBaseWeldSelectedUnit}
                                ShearStressatBaseWeldSelectedUnitOnchange={(e) => handleShearStressatBaseWeldUnitChange(e.target.value)}
                                ShearStressatBaseWeldOption={
                                    ShearStressatBaseWeldUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // ShearStressatBaseWeldActualHorizontalYdirection
                                ShearStressatBaseWeldActualHorizontalYdirectionValue={ShearStressatBaseWeldActualHorizontalYdirection} ShearStressatBaseWeldActualHorizontalYdirectionSelectedUnit={ShearStressatBaseWeldActualHorizontalYdirectionSelectedUnit} ShearStressatBaseWeldActualHorizontalYdirectionSelectedUnitOnchange={(e) => handleShearStressatBaseWeldActualHorizontalYdirectionUnitChange(e.target.value)} ShearStressatBaseWeldActualHorizontalYdirectionOptions={ShearStressatBaseWeldActualHorizontalYdirectionUnits.map((unit) => (<option key={unit} value={unit}>{unit}</option>))}

                                // ShearStressatBaseWeldActualLateralXdirection
                                ShearStressatBaseWeldActualLateralXdirectionValue={ShearStressatBaseWeldActualLateralXdirection} ShearStressatBaseWeldActualLateralXdirectionSelectedUnit={ShearStressatBaseWeldActualLateralXdirectionSelectedUnit} ShearStressatBaseWeldActualLateralXdirectionSelectedUnitOnchange={(e) => handleShearStressatBaseWeldActualLateralXdirectionUnitChange(e.target.value)} ShearStressatBaseWeldActualLateralXdirectionOption={ShearStressatBaseWeldActualLateralXdirectionUnit.map((unit) => (<option key={unit} value={unit}>{unit}</option>))}

                                // TensileAreaatBase
                                TensileAreaatBase={TensileAreaatBase} TensileAreaatBaseSelectedUnit={TensileAreaatBaseSelectedUnit} TensileAreaatBaseSelectedUnitOnchange={(e) => handleTensileAreaatBaseUnitChange(e.target.value)} TensileAreaatBaseOption={TensileAreaatBaseUnit.map((unit) => (<option key={unit} value={unit}>{unit}</option>))}

                                // TensileStressatBaseWeldActual
                                TensileStressatBaseWeldActual={TensileStressatBaseWeldActual} TensileStressatBaseWeldActualSelectedUnit={TensileStressatBaseWeldActualSelectedUnit} TensileStressatBaseWeldActualSelectedUnitOnchange={(e) => handleTensileStressatBaseWeldActualUnitChange(e.target.value)} TensileStressatBaseWeldActualoption={TensileStressatBaseWeldActualUnit.map((unit) => (<option key={unit} value={unit}>{unit}</option>))}

                                // SectionModulusofWeldaboutXaxis
                                SectionModulusofWeldaboutXaxis={SectionModulusofWeldaboutXaxis} SectionModulusofWeldaboutXaxisSelectedUnit={SectionModulusofWeldaboutXaxisSelectedUnit} SectionModulusofWeldaboutXaxisSelectedUnitOnchange={(e) => handleSectionModulusofWeldaboutXaxisUnitChange(e.target.value)} SectionModulusofWeldaboutXaxisOptions={SectionModulusofWeldaboutXaxisUnit.map((unit) => (<option key={unit} value={unit}>{unit}</option>))}

                                // SectionModulusofWeldaboutYaxis
                                SectionModulusofWeldaboutYaxis={SectionModulusofWeldaboutYaxis} SectionModulusofWeldaboutYaxisSelectedUnit={SectionModulusofWeldaboutYaxisSelectedUnit} SectionModulusofWeldaboutYaxisSelectedUnitOnchange={(e) => handleSectionModulusofWeldaboutYaxisUnitChange(e.target.value)} SectionModulusofWeldaboutYaxisOptions={SectionModulusofWeldaboutYaxisUnit.map((unit) => (<option key={unit} value={unit}>{unit}</option>))}

                                // BendingStressatBaseWeldActualaboutXAxisInPlane
                                BendingStressatBaseWeldActualaboutXAxisInPlane={BendingStressatBaseWeldActualaboutXAxisInPlane}
                                BendingStressatBaseWeldActualaboutXAxisInPlaneSelectedUnit={BendingStressatBaseWeldActualaboutXAxisInPlaneSelectedUnit}
                                BendingStressatBaseWeldActualaboutXAxisInPlaneSelectedUnitOnchange={(e) => handleBendingStressatBaseWeldActualaboutXAxisInPlaneUnitChange(e.target.value)}
                                BendingStressatBaseWeldActualaboutXAxisInPlaneOptions={
                                    BendingStressatBaseWeldActualaboutXAxisInPlaneUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }
                                // TotalDesignMomentaboutYaxisOutofPlane
                                TotalDesignMomentaboutYaxisOutofPlane={TotalDesignMomentaboutYaxisOutofPlane}
                                TotalDesignMomentaboutYaxisOutofPlaneSelectedUnits={TotalDesignMomentaboutYaxisOutofPlaneSelectedUnit}
                                TotalDesignMomentaboutYaxisOutofPlaneSelectedUnitsOnchange={(e) => handleTotalDesignMomentaboutYaxisOutofPlaneUnitChange(e.target.value)}
                                TotalDesignMomentaboutYaxisOutofPlaneOptions={
                                    BendingStressActualaboutYaxisOutofPlaneUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }
                                // BendingStressaboutYaxisOutofPlane
                                BendingStressaboutYaxisOutofPlane={BendingStressaboutYaxisOutofPlane}
                                BendingStressaboutYaxisOutofPlaneSelectedUnit={BendingStressaboutYaxisOutofPlaneSelectedUnit}
                                BendingStressaboutYaxisOutofPlaneSelectedUnitOnchange={(e) => handleBendingStressaboutYaxisOutofPlaneUnitChange(e.target.value)}
                                BendingStressaboutYaxisOutofPlaneOptions={
                                    BendingStressaboutYaxisOutofPlaneUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // TotalStressatBaseWeldActual
                                TotalStressatBaseWeldActual={TotalStressatBaseWeldActual}
                                TotalStressatBaseWeldActualSelectedUnit={TotalStressatBaseWeldActualSelectedUnit}
                                TotalStressatBaseWeldActualSelectedUnitOnchange={(e) => handleTotalStressatBaseWeldActualUnitChange(e.target.value)}
                                TotalStressatBaseWeldActualOptions={
                                    TotalStressatBaseWeldActualUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // Weld Check at Cheek Plate Weld

                                // WeldLength
                                WeldLength={WeldLength}
                                WeldLengthSelectedUnit={WeldLengthSelectedUnit}
                                WeldLengthSelectedUnitOnchange={(e) => handleWeldLengthUnitChange(e.target.value)}
                                WeldLengthOptions={
                                    WeldLengthUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // WeldAreaatCheekPlate
                                WeldAreaatCheekPlate={WeldAreaatCheekPlate}
                                WeldAreaatCheekPlateSelectedUnit={WeldAreaatCheekPlateSelectedUnit}
                                WeldAreaatCheekPlateSelectedUnitOnchange={(e) => handleWeldAreaatCheekPlateUnitChange(e.target.value)}
                                WeldAreaatCheekPlateOptions={
                                    WeldAreaatCheekPlateUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }
                                // DesignLoadononecheekplate
                                DesignLoadononecheekplate={DesignLoadononecheekplate}
                                DesignLoadononecheekplateSelectedUnit={DesignLoadononecheekplateSelectedUnit}
                                DesignLoadononecheekplateSelectedUnitOnchange={(e) => handleDesignLoadononecheekplateUnitChange(e.target.value)}
                                DesignLoadononecheekplateOptions={
                                    DesignLoadononecheekplateUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }
                                // WeldStressatCheekWeldActual
                                WeldStressatCheekWeldActual={WeldStressatCheekWeldActual}
                                WeldStressatCheekWeldActualSelectedUnit={WeldStressatCheekWeldActualSelectedUnit}
                                WeldStressatCheekWeldActualSelectedUnitOnchange={(e) => handleWeldStressatCheekWeldActualUnitChange(e.target.value)}
                                WeldStressatCheekWeldActualoptions={
                                    WeldStressatCheekWeldActualUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // If else
                                MainPlateRadiusCondition={MainPlateRadius}
                                ShackleClearanceChecksCondition={ShackleClearanceChecks}
                                // 
                                BearingStressCheckatPinHoleCondition={BearingStressCheckatPinHole}
                                ShearStressCheckatPinHoleCondition={ShearStressCheckatPinHole}
                                TensileStressCheckatPinHoleCondition={TensileStressCheckatPinHole}
                                HertzContactStressCheckatPinHoleCondition={HertzContactStressCheckatPinHole}
                                // 
                                TensileStressCheckatBaseCondition={TensileStressCheckatBase}
                                BendingStressCheckatBaseXaxisCondition={BendingStressCheckatBaseXaxis}
                                BendingStressCheckatBaseYaxisCondition={BendingStressCheckatBaseYaxis}
                                ShearStressCheckatBaseYdirectionCondition={ShearStressCheckatBaseYdirection}
                                ShearStressCheckatBaseXdirectionCondition={ShearStressCheckatBaseXdirection}
                                CombinedStressCheckatStressCheckBasePlateCondition={CombinedStressCheckatStressCheckBasePlate}
                                // 
                                CombinedStressCheckatBaseCondition={CombinedStressCheckatBase}
                                // 
                                StressCheckatCheekPlateWeldCondition={StressCheckatCheekPlateWeld}

                                // toogle function
                                togglefunction={isActive3}
                                toggleBreaks={toggleClass3}
                            />
                        )}
                        {selectedOption === 'option6' && (

                            <WeldSize
                                BaseWeldLegSizeValue={BaseWeldLegSize}
                                BaseWeldLegSizeSelectedUnit={BaseWeldLegSizeUnit}
                                BaseWeldLegSizeValueOnchange={((e) => handleBaseWeldLegSizevalue(e.target.value))}
                                BaseWeldLegSizeSelectedUnitOnchange={((e) => handleBaseWeldLegSizeUnit(e.target.value))}
                                BaseWeldLegSizeOption={
                                    BaseWeldLegSizeUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                CheekPlateWeldLegSize={CheekPlateWeldLegSize}
                                CheekPlateWeldLegSizeOnchange={(e) => handleCheekPlateWeldLegSizevalue(e.target.value)}
                                CheekPlateWeldLegSizeUnit={CheekPlateWeldLegSizeUnit}
                                CheekPlateWeldLegSizeUnitOnchange={(e) => handleCheekPlateWeldLegSizeUnit(e.target.value)}
                                CheekPlateWeldLegSizeOption={
                                    CheekPlateWeldLegSizeUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                AllowableBearingStressValue={AllowableBearingStressValue}
                                AllowableBearingStressselectedUnit={AllowableBearingStressselectedUnit}
                                AllowableBearingStressselectedUnitOnchange={(e) => handleAllowableBearingStressUnitChange(e.target.value)}
                                AllowableBearingStressOptions={
                                    AllowableBearingStressunits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                AllowableBendingStressInPlaneValue={AllowableBendingStressInPlaneValue}
                                AllowableBendingStressInPlaneselectedUnit={AllowableBendingStressInPlaneselectedUnit}
                                AllowableBendingStressInPlaneselectedUnitOnchange={(e) => handleAllowableBendingStressInPlaneUnitChange(e.target.value)}
                                AllowableBendingStressInPlaneOption={
                                    AllowableBendingStressInPlaneunits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                AllowableBendingStressOutofPlaneValue={AllowableBendingStressOutofPlaneValue}
                                AllowableBendingStressOutofPlaneselectedUnit={AllowableBendingStressOutofPlaneselectedUnit}
                                AllowableBendingStressOutofPlaneselectedUnitOnchange={(e) => handleAllowableBendingStressOutofPlaneselectedUnitChange(e.target.value)}
                                AllowableBendingStressOutofPlaneOption={
                                    AllowableBendingStressOutofPlaneunits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                AllowableTensileStressValue={AllowableTensileStressValue}
                                AllowableTensileStressSelectedUnit={AllowableTensileStressSelectedUnit}
                                AllowableTensileStressSelectedUnitOnchange={(e) => handleAllowableTensileStressselectedUnitChange(e.target.value)}
                                AllowableTensileStressOption={
                                    AllowableTensileStressUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                AllowableTensileStressatpinholeValue={AllowableTensileStressatpinholeValue}
                                AllowableTensileStressatpinholeSelectedUnit={AllowableTensileStressatpinholeSelectedUnit}
                                AllowableTensileStressatpinholeSelectedUnitOnchange={(e) => handleAllowableTensileStressatpinholeselectedUnitChange(e.target.value)}
                                AllowableTensileStressatpinholeUnits={
                                    AllowableTensileStressatpinholeUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                AllowableShearStressValue={AllowableShearStressValue}
                                AllowableShearStressSelectedUnit={AllowableShearStressSelectedUnit}
                                AllowableShearStressSelectedUnitOnchange={(e) => handleAllowableShearStressselectedUnitChange(e.target.value)}
                                AllowableShearStressOptions={
                                    AllowableShearStressUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                AllowableHertzStressatPinHoleValue={AllowableHertzStressatPinHoleValue}
                                AllowableHertzStressatPinHoleSelectedUnit={AllowableHertzStressatPinHoleSelectedUnit}
                                AllowableHertzStressatPinHoleSelectedUnitOnchange={(e) => handleAllowableHertzStressatPinHoleselectedUnitChange(e.target.value)}
                                AllowableHertzStressatPinHoleOptions={
                                    AllowableHertzStressatPinHoleUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                AllowableWeldStressValue={AllowableWeldStressValue}
                                AllowableWeldStressSelectedUnit={AllowableWeldStressSelectedUnit}
                                AllowableWeldStressSelectedUnitOnchange={(e) => handleAllowableWeldStressselectedUnitChange(e.target.value)}
                                AllowableWeldStressOptions={
                                    AllowableWeldStressUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                // Design Loads
                                LoadinVerticalDirectionZdirectionValue={LoadinVerticalDirectionZdirectionValue}
                                LoadinVerticalDirectionZdirectionSelectedUnit={LoadinVerticalDirectionZdirectionSelectedUnit}
                                handleLoadinVerticalDirectionZdirectionselectedUnitChange={(e) => handleLoadinVerticalDirectionZdirectionselectedUnitChange(e.target.value)}
                                LoadinVerticalDirectionZdirectionOptions={
                                    LoadinVerticalDirectionZdirectionUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }
                                // LoadinVerticalDirectionZdirectionValue={LoadinVerticalDirectionZdirectionValue}
                                // LoadinVerticalDirectionZdirectionSelectedUnit={LoadinVerticalDirectionZdirectionSelectedUnit}
                                // LoadinVerticalDirectionZdirectionValueOnchange={(e) => calculateLoadinVerticalDirectionZdirectionValue(e.target.value)}
                                // LoadinVerticalDirectionZdirectionSelectedUnitOnchange={(e) => handleLoadinVerticalDirectionZdirectionselectedUnitChange(e.target.value)}
                                // LoadinVerticalDirectionZdirectionOptions={
                                //     LoadinVerticalDirectionZdirectionUnits.map((unit) => (
                                //         <option key={unit} value={unit}>
                                //             {unit}
                                //         </option>
                                //     ))
                                // }

                                // handleLoadinVerticalDirectionZdirectionselectedUnitChange

                                LoadinHorizontalDirectionYdirectionValue={LoadinHorizontalDirectionYdirection}
                                LoadinHorizontalDirectionYdirectionSelectedUnit={LoadinHorizontalDirectionYdirectionSelectedUnit}
                                LoadinHorizontalDirectionYdirectionValueOnchange={(e) => calculateLoadinHorizontalDirectionYdirectionValue(e.target.value)}
                                LoadinHorizontalDirectionYdirectionSelectedUnitOnchange={(e) => handleLoadinHorizontalDirectionYdirectionselectedUnitChange(e.target.value)}
                                LoadinHorizontalDirectionYdirectionOptions={
                                    LoadinHorizontalDirectionYdirectionUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                OutofplaneLoadLateralLoadXdirectionValue={OutofplaneLoadLateralLoadXdirection}
                                OutofplaneLoadLateralLoadXdirectionSelectedUnit={OutofplaneLoadLateralLoadXdirectionSelectedUnit}
                                OutofplaneLoadLateralLoadXdirectionValueOnchange={(e) => calculateLoadinHorizontalDirectionYdirectionValue(e.target.value)}
                                OutofplaneLoadLateralLoadXdirectionSelectedUnitOnchange={(e) => handleOutofplaneLoadLateralLoadXdirectionselectedUnitChange(e.target.value)}
                                OutofplaneLoadLateralLoadXdirectionOptions={
                                    OutofplaneLoadLateralLoadXdirectionUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                PadEyeDesignLoadvalue={PadEyeDesignLoad}
                                PadEyeDesignLoadSelectedUnit={PadEyeDesignLoadSelectedUnit}
                                PadEyeDesignLoadvalueOnchange={(e) => calculateLoadinHorizontalDirectionYdirectionValue(e.target.value)}
                                PadEyeDesignLoadSelectedUnitOnchange={(e) => handlePadEyeDesignLoadselectedUnitChange(e.target.value)}
                                PadEyeDesignLoadOptions={
                                    PadEyeDesignLoadUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                DesignLoadinVerticalDirectionZdirectionvalue={DesignLoadinVerticalDirectionZdirection}
                                DesignLoadinVerticalDirectionZdirectionSelectedUnit={DesignLoadinVerticalDirectionZdirectionSelectedUnit}
                                DesignLoadinVerticalDirectionZdirectionvalueOnchange={(e) => calculateLoadinHorizontalDirectionYdirectionValue(e.target.value)}
                                DesignLoadinVerticalDirectionZdirectionSelectedUnitOnchange={(e) => handleDesignLoadinVerticalDirectionZdirectionselectedUnitChange(e.target.value)}
                                DesignLoadinVerticalDirectionZdirectionOptions={
                                    DesignLoadinVerticalDirectionZdirectionUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                DesignLoadinHorizontalDirectionYdirectionValue={DesignLoadinHorizontalDirectionYdirection}
                                DesignLoadinHorizontalDirectionYdirectionSelectedUnit={DesignLoadinHorizontalDirectionYdirectionSelectedUnit}
                                DesignLoadinHorizontalDirectionYdirectionValueOnchange={(e) => calculateLoadinHorizontalDirectionYdirectionValue(e.target.value)}
                                DesignLoadinHorizontalDirectionYdirectionSelectedUnitOnchange={(e) => handleDesignLoadinHorizontalDirectionYdirectionselectedUnitChange(e.target.value)}
                                DesignLoadinHorizontalDirectionYdirectionOption={
                                    DesignLoadinHorizontalDirectionYdirectionUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                DesignLoadOutofPlaneLateralXdirectionValue={DesignLoadOutofPlaneLateralXdirection}
                                DesignLoadOutofPlaneLateralXdirectionSelectedUnit={DesignLoadOutofPlaneLateralXdirectionSelectedUnit}
                                DesignLoadOutofPlaneLateralXdirectionValueOnchange={(e) => calculateLoadinHorizontalDirectionYdirectionValue(e.target.value)}
                                DesignLoadOutofPlaneLateralXdirectionSelectedUnitOnchange={(e) => handleDesignLoadOutofPlaneLateralXdirectionselectedUnitChange(e.target.value)}
                                DesignLoadOutofPlaneLateralXdirectionOption={
                                    DesignLoadOutofPlaneLateralXdirectionUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }



                                // geometry check

                                Clearancebetweenpinholediaandpindiavalue={Clearancebetweenpinholediaandpindia}
                                ClearancebetweenpinholediaandpindiaSelectedunit={ClearancebetweenpinholediaandpindiaSelectedunit}
                                ClearancebetweenpinholediaandpindiaSelectedunitOnchange={(e) => handleClearancebetweenpinholediaandpindiaselectedUnitChange(e.target.value)}
                                ClearancebetweenpinholediaandpindiaOptions={
                                    ClearancebetweenpinholediaandpindiaUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                LengthClearanceofShackleValue={LengthClearanceofShackle}
                                LengthClearanceofShackleselectedunit={LengthClearanceofShackleselectedunit}
                                LengthClearanceofShackleselectedunitOnchange={(e) => handleLengthClearanceofShackleselectedUnitChange(e.target.value)}
                                LengthClearanceofShackleOption={
                                    LengthClearanceofShackleUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                WidthClearanceofShackle={WidthClearanceofShackle}
                                WidthClearanceofShackleSelectedUnit={WidthClearanceofShackleSelectedUnit}
                                WidthClearanceofShackleSelectedUnitOnchange={(e) => handleWidthClearanceofShackleUnitChange(e.target.value)}
                                WidthClearanceofShackleOption={
                                    WidthClearanceofShackleUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                // Stress Checks at Pin Hole
                                // Bearing Area
                                BearingAreaValue={BearingArea}
                                BearingAreaSelectedUnit={BearingAreaSelectedUnit}
                                BearingAreaSelectedUnitOnchange={(e) => handleBearingAreaUnitChange(e.target.value)}
                                BearingAreaOptions={
                                    BearingAreaUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                // Bearing Stress (Actual)
                                BearingStressActualValue={BearingStressActual}
                                BearingStressActualSelectedUnit={BearingStressActualSelectedUnit}
                                BearingStressActualSelectedUnitOnchange={(e) => handleBearingStressActualUnitChange(e.target.value)}
                                BearingStressActualOptions={
                                    BearingStressActualUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                //Shear Stress Check at Pin Hole 
                                RadiusofCheekPlateValue={RadiusofCheekPlate}
                                RadiusofCheekPlateSelectedUnit={RadiusofCheekPlateSelectedUnit}
                                RadiusofCheekPlateSelectedUnitOnchange={(e) => handleRadiusofCheekPlateUnitChange(e.target.value)}
                                RadiusofCheekPlateOptions={
                                    RadiusofCheekPlateUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                ShearAreaofpinholeValue={ShearAreaofpinhole}
                                ShearAreaofpinholeSelectedUnit={ShearAreaofpinholeSelectedUnit}
                                ShearAreaofpinholeSelectedUnitOnchange={(e) => handleShearAreaofpinholeUnitChange(e.target.value)}
                                ShearAreaofpinholeOption={
                                    ShearAreaofpinholeUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                ShearStressatpinholeValue={ShearStressatpinhole}
                                ShearStressatpinholeSelectedUnit={ShearStressatpinholeSelectedUnit}
                                ShearStressatpinholeSelectedUnitOnchange={(e) => handleShearStressatpinholeUnitChange(e.target.value)}
                                ShearStressatpinholeOptions={
                                    ShearStressatpinholeUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                TensileAreaforsectionAAValue={TensileAreaforsectionAA}
                                TensileAreaforsectionAASelectedUnit={TensileAreaforsectionAASelectedUnit}
                                TensileAreaforsectionAASelectedUnitOnchange={(e) => handleTensileAreaforsectionAAUnitChange(e.target.value)}
                                TensileAreaforsectionAAOption={
                                    TensileAreaforsectionAAUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                TensileStressatpinholeActualatsectionAAValue={TensileStressatpinholeActualatsectionAA}
                                TensileStressatpinholeActualatsectionAASelectedUnit={TensileStressatpinholeActualatsectionAASelectedUnit}
                                TensileStressatpinholeActualatsectionAASelectedUnitOnchange={(e) => handleTensileStressatpinholeActualatsectionAAUnitChange(e.target.value)}
                                TensileStressatpinholeActualatsectionAAOption={
                                    TensileStressatpinholeActualatsectionAAUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                TensileAreaforsectionBBValue={TensileAreaforsectionBB}
                                TensileAreaforsectionBBSelectedUnit={TensileAreaforsectionBBSelectedUnit}
                                TensileAreaforsectionBBSelectedUnitOnchange={(e) => handleTensileAreaforsectionBBUnitChange(e.target.value)}
                                TensileAreaforsectionBBOption={
                                    TensileAreaforsectionBBUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                TensileStressatpinholeActualatsectionBBValue={TensileStressatpinholeActualatsectionBB}
                                TensileStressatpinholeActualatsectionBBSelectedUnit={TensileStressatpinholeActualatsectionBBSelectedUnit}
                                TensileStressatpinholeActualatsectionBBSelectedUnitOnchange={(e) => handleTensileStressatpinholeActualatsectionBBUnitChange(e.target.value)}
                                TensileStressatpinholeActualatsectionBBOption={
                                    TensileStressatpinholeActualatsectionBBUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                DesignLoadperunitLengthValue={DesignLoadperunitLength}
                                DesignLoadperunitLengthSelectedUnit={DesignLoadperunitLengthSelectedUnit}
                                DesignLoadperunitLengthSelectedUnitOnchange={(e) => handleDesignLoadperunitLengthUnitChange(e.target.value)}
                                DesignLoadperunitLengthOptions={
                                    DesignLoadperunitLengthUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                HertzStressatPinHoleValue={HertzStressatPinHole}
                                HertzStressatPinHoleSelectedUnit={HertzStressatPinHoleSelectedUnit}
                                HertzStressatPinHoleSelectedUnitOnchange={(e) => handleHertzStressatPinHoleUnitChange(e.target.value)}
                                HertzStressatPinHoleOptions={
                                    HertzStressatPinHoleUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // Stress Checks at Base Plate
                                // Tensile Stress Check

                                // Tensile Area
                                TensileAreaValue={TensileArea}
                                TensileAreaSelectedUnit={TensileAreaSelectedUnit}
                                TensileAreaSelectedUnitOnchange={(e) => handleTensileAreaUnitChange(e.target.value)}
                                TensileAreaOptions={
                                    TensileAreaUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // Tensile Stress at Base (Actual)
                                TensileStressatBaseActualValue={TensileStressatBaseActual}
                                TensileStressatBaseActualSelectedUnit={TensileStressatBaseActualSelectedUnit}
                                TensileStressatBaseActualSelectedUnitOnchange={(e) => handleTensileStressatBaseActualUnitChange(e.target.value)}
                                TensileStressatBaseActualOption={
                                    TensileStressatBaseActualUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // Bending Stress Check

                                //Moment lever for Horizontal/Lateral Force
                                MomentleverforHorizontalLateralForceValue={MomentleverforHorizontalLateralForce}
                                MomentleverforHorizontalLateralForceSelectedUnit={MomentleverforHorizontalLateralForceSelectedUnit}
                                MomentleverforHorizontalLateralForceSelectedUnitOnchange={(e) => handleMomentleverforHorizontalLateralForceUnitChange(e.target.value)}
                                MomentleverforHorizontalLateralForceOptions={
                                    MomentleverforHorizontalLateralForceUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                MomentleverforVerticalForceValue={MomentleverforVerticalForce}
                                MomentleverforVerticalForceSelectedUnit={MomentleverforVerticalForceSelectedUnit}
                                MomentleverforVerticalForceSelectedUnitOnchange={(e) => handleMomentleverforVerticalForceUnitChange(e.target.value)}
                                MomentleverforVerticalForceOptions={
                                    MomentleverforVerticalForceUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                TotalDesignMomentaboutXaxisInplaneValue={TotalDesignMomentaboutXaxisInplane}
                                TotalDesignMomentaboutXaxisInplaneSelectedUnit={TotalDesignMomentaboutXaxisInplaneSelectedUnit}
                                TotalDesignMomentaboutXaxisInplaneSelectedUnitOnchange={(e) => handleTotalDesignMomentaboutXaxisInplaneUnitChange(e.target.value)}
                                TotalDesignMomentaboutXaxisInplaneOptions={
                                    TotalDesignMomentaboutXaxisInplaneUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                SectionModulusofBaseaboutXaxisValue={SectionModulusofBaseaboutXaxis}
                                SectionModulusofBaseaboutXaxisSelectedUnit={SectionModulusofBaseaboutXaxisSelectedUnit}
                                SectionModulusofBaseaboutXaxisSelectedUnitOnchange={(e) => handleSectionModulusofBaseaboutXaxisUnitChange(e.target.value)}
                                SectionModulusofBaseaboutXaxisOption={
                                    SectionModulusofBaseaboutXaxisUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                BendingStressActualaboutXaxisInplaneValue={BendingStressActualaboutXaxisInplane}
                                BendingStressActualaboutXaxisInplaneSelectedUnit={BendingStressActualaboutXaxisInplaneSelectedUnit}
                                BendingStressActualaboutXaxisInplaneOnchange={(e) => handleBendingStressActualaboutXaxisInplaneUnitChange(e.target.value)}
                                BendingStressActualaboutXaxisInplaneOption={
                                    BendingStressActualaboutXaxisInplaneUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }
                                // Total Design Moment about Y-axis (Out-of Plane)
                                TotalDesignMomentaboutYaxisOutofPlaneValue={TotalDesignMomentaboutYaxisOutofPlane}
                                TotalDesignMomentaboutYaxisOutofPlaneSelectedUnit={TotalDesignMomentaboutYaxisOutofPlaneSelectedUnit}
                                TotalDesignMomentaboutYaxisOutofPlaneSelectedUnitOnchange={(e) => handleTotalDesignMomentaboutYaxisOutofPlaneUnitChange(e.target.value)}
                                TotalDesignMomentaboutYaxisOutofPlaneOption={
                                    TotalDesignMomentaboutYaxisOutofPlaneUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }
                                // Section Modulus of Base about Y-axis
                                SectionModulusofBaseaboutYaxisValue={SectionModulusofBaseaboutYaxis}
                                SectionModulusofBaseaboutYaxisSelectedUnit={SectionModulusofBaseaboutYaxisSelectedUnit}
                                SectionModulusofBaseaboutYaxisSelectedUnitOnchange={(e) => handleSectionModulusofBaseaboutYaxisUnitChange(e.target.value)}
                                SectionModulusofBaseaboutYaxisOption={
                                    SectionModulusofBaseaboutYaxisUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                // Bending Stress (Actual) - about Y-axis (Out-of-Plane)
                                BendingStressActualaboutYaxisOutofPlaneValue={BendingStressActualaboutYaxisOutofPlane}
                                BendingStressActualaboutYaxisOutofPlaneSelectedUnit={BendingStressActualaboutYaxisOutofPlaneSelectedUnit}
                                BendingStressActualaboutYaxisOutofPlaneSelectedUnitOnchange={(e) => handleBendingStressActualaboutYaxisOutofPlaneUnitChange(e.target.value)}
                                BendingStressActualaboutYaxisOutofPlaneOption={
                                    BendingStressActualaboutYaxisOutofPlaneUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                // ShearAreaatBaseHorizontal
                                ShearAreaatBaseHorizontalValue={ShearAreaatBaseHorizontal}
                                ShearAreaatBaseHorizontalSelectedUnit={ShearAreaatBaseHorizontalSelectedUnit}
                                ShearAreaatBaseHorizontalSelectedUnitOnchange={(e) => handleShearAreaatBaseHorizontalUnitChange(e.target.value)}
                                ShearAreaatBaseHorizontalOption={
                                    ShearAreaatBaseHorizontalUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // ShearStressatBaseActualHorizontalYdirection
                                ShearStressatBaseActualHorizontalYdirection={ShearStressatBaseActualHorizontalYdirection}
                                ShearStressatBaseActualHorizontalYdirectionSelectedUnit={ShearStressatBaseActualHorizontalYdirectionSelectedUnit}
                                ShearStressatBaseActualHorizontalYdirectionSelectedUnitOnchange={(e) => handleShearStressatBaseActualHorizontalYdirectionUnitChange(e.target.value)}
                                ShearStressatBaseActualHorizontalYdirectionOptions={
                                    ShearStressatBaseActualHorizontalYdirectionUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // ShearStressatBaseActualLateralXdirection
                                ShearStressatBaseActualLateralXdirection={ShearStressatBaseActualLateralXdirection}
                                ShearStressatBaseActualLateralXdirectionSelectedUnit={ShearStressatBaseActualLateralXdirectionSelectedUnit}
                                ShearStressatBaseActualLateralXdirectionSelectedUnitOnchange={(e) => handleShearStressatBaseActualLateralXdirectionUnitChange(e.target.value)}
                                ShearStressatBaseActualLateralXdirectionOption={
                                    ShearStressatBaseActualLateralXdirectionUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // VonMisesStressatBaseActual
                                VonMisesStressatBaseActual={VonMisesStressatBaseActual}
                                VonMisesStressatBaseActualSelectedUnit={VonMisesStressatBaseActualSelectedUnit}
                                VonMisesStressatBaseActualSelectedUnitOnchange={(e) => handleVonMisesStressatBaseActualUnitChange(e.target.value)}
                                VonMisesStressatBaseActualOption={
                                    VonMisesStressatBaseActualUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }
                                WeldCheckatCheekPlateWeld
                                // Throatthickness
                                ThroatthicknessValue={Throatthickness}
                                ThroatthicknessSelectedUnit={ThroatthicknessSelectedUnit}
                                ThroatthicknessSelectedUnitOnchange={(e) => handleThroatthicknessUnitChange(e.target.value)}
                                ThroatthicknessOption={
                                    ThroatthicknessUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // WeldCheckatCheekPlateWeldThroatthickness
                                WeldCheckatCheekPlateWeldThroatthicknessValue={WeldCheckatCheekPlateWeldThroatthickness}
                                WeldCheckatCheekPlateWeldThroatthicknessSelectedUnit={WeldCheckatCheekPlateWeldThroatthicknessSelectedUnit}
                                WeldCheckatCheekPlateWeldThroatthicknessSelectedUnitOnchange={(e) => handleWeldCheckatCheekPlateWeldThroatthicknessUnitChange(e.target.value)}
                                WeldCheckatCheekPlateWeldThroatthicknessOption={
                                    WeldCheckatCheekPlateWeldThroatthicknessUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }


                                // TotalWeldLength
                                TotalWeldLengthvalue={TotalWeldLength}
                                TotalWeldLengthSelectedUnit={TotalWeldLengthSelectedUnit}
                                TotalWeldLengthSelectedUnitOnchange={(e) => handleTotalWeldLengthUnitChange(e.target.value)}
                                TotalWeldLengthOption={
                                    TotalWeldLengthUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // ShearStressatBaseWeld
                                ShearStressatBaseWeldValue={ShearStressatBaseWeld}
                                ShearStressatBaseWeldSelectedUnit={ShearStressatBaseWeldSelectedUnit}
                                ShearStressatBaseWeldSelectedUnitOnchange={(e) => handleShearStressatBaseWeldUnitChange(e.target.value)}
                                ShearStressatBaseWeldOption={
                                    ShearStressatBaseWeldUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // ShearStressatBaseWeldActualHorizontalYdirection
                                ShearStressatBaseWeldActualHorizontalYdirectionValue={ShearStressatBaseWeldActualHorizontalYdirection} ShearStressatBaseWeldActualHorizontalYdirectionSelectedUnit={ShearStressatBaseWeldActualHorizontalYdirectionSelectedUnit} ShearStressatBaseWeldActualHorizontalYdirectionSelectedUnitOnchange={(e) => handleShearStressatBaseWeldActualHorizontalYdirectionUnitChange(e.target.value)} ShearStressatBaseWeldActualHorizontalYdirectionOptions={ShearStressatBaseWeldActualHorizontalYdirectionUnits.map((unit) => (<option key={unit} value={unit}>{unit}</option>))}

                                // ShearStressatBaseWeldActualLateralXdirection
                                ShearStressatBaseWeldActualLateralXdirectionValue={ShearStressatBaseWeldActualLateralXdirection} ShearStressatBaseWeldActualLateralXdirectionSelectedUnit={ShearStressatBaseWeldActualLateralXdirectionSelectedUnit} ShearStressatBaseWeldActualLateralXdirectionSelectedUnitOnchange={(e) => handleShearStressatBaseWeldActualLateralXdirectionUnitChange(e.target.value)} ShearStressatBaseWeldActualLateralXdirectionOption={ShearStressatBaseWeldActualLateralXdirectionUnit.map((unit) => (<option key={unit} value={unit}>{unit}</option>))}

                                // TensileAreaatBase
                                TensileAreaatBase={TensileAreaatBase} TensileAreaatBaseSelectedUnit={TensileAreaatBaseSelectedUnit} TensileAreaatBaseSelectedUnitOnchange={(e) => handleTensileAreaatBaseUnitChange(e.target.value)} TensileAreaatBaseOption={TensileAreaatBaseUnit.map((unit) => (<option key={unit} value={unit}>{unit}</option>))}

                                // TensileStressatBaseWeldActual
                                TensileStressatBaseWeldActual={TensileStressatBaseWeldActual} TensileStressatBaseWeldActualSelectedUnit={TensileStressatBaseWeldActualSelectedUnit} TensileStressatBaseWeldActualSelectedUnitOnchange={(e) => handleTensileStressatBaseWeldActualUnitChange(e.target.value)} TensileStressatBaseWeldActualoption={TensileStressatBaseWeldActualUnit.map((unit) => (<option key={unit} value={unit}>{unit}</option>))}

                                // SectionModulusofWeldaboutXaxis
                                SectionModulusofWeldaboutXaxis={SectionModulusofWeldaboutXaxis} SectionModulusofWeldaboutXaxisSelectedUnit={SectionModulusofWeldaboutXaxisSelectedUnit} SectionModulusofWeldaboutXaxisSelectedUnitOnchange={(e) => handleSectionModulusofWeldaboutXaxisUnitChange(e.target.value)} SectionModulusofWeldaboutXaxisOptions={SectionModulusofWeldaboutXaxisUnit.map((unit) => (<option key={unit} value={unit}>{unit}</option>))}

                                // SectionModulusofWeldaboutYaxis
                                SectionModulusofWeldaboutYaxis={SectionModulusofWeldaboutYaxis} SectionModulusofWeldaboutYaxisSelectedUnit={SectionModulusofWeldaboutYaxisSelectedUnit} SectionModulusofWeldaboutYaxisSelectedUnitOnchange={(e) => handleSectionModulusofWeldaboutYaxisUnitChange(e.target.value)} SectionModulusofWeldaboutYaxisOptions={SectionModulusofWeldaboutYaxisUnit.map((unit) => (<option key={unit} value={unit}>{unit}</option>))}

                                // BendingStressatBaseWeldActualaboutXAxisInPlane
                                BendingStressatBaseWeldActualaboutXAxisInPlane={BendingStressatBaseWeldActualaboutXAxisInPlane}
                                BendingStressatBaseWeldActualaboutXAxisInPlaneSelectedUnit={BendingStressatBaseWeldActualaboutXAxisInPlaneSelectedUnit}
                                BendingStressatBaseWeldActualaboutXAxisInPlaneSelectedUnitOnchange={(e) => handleBendingStressatBaseWeldActualaboutXAxisInPlaneUnitChange(e.target.value)}
                                BendingStressatBaseWeldActualaboutXAxisInPlaneOptions={
                                    BendingStressatBaseWeldActualaboutXAxisInPlaneUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }
                                // TotalDesignMomentaboutYaxisOutofPlane
                                TotalDesignMomentaboutYaxisOutofPlane={TotalDesignMomentaboutYaxisOutofPlane}
                                TotalDesignMomentaboutYaxisOutofPlaneSelectedUnits={TotalDesignMomentaboutYaxisOutofPlaneSelectedUnit}
                                TotalDesignMomentaboutYaxisOutofPlaneSelectedUnitsOnchange={(e) => handleTotalDesignMomentaboutYaxisOutofPlaneUnitChange(e.target.value)}
                                TotalDesignMomentaboutYaxisOutofPlaneOptions={
                                    BendingStressActualaboutYaxisOutofPlaneUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }
                                // BendingStressaboutYaxisOutofPlane
                                BendingStressaboutYaxisOutofPlane={BendingStressaboutYaxisOutofPlane}
                                BendingStressaboutYaxisOutofPlaneSelectedUnit={BendingStressaboutYaxisOutofPlaneSelectedUnit}
                                BendingStressaboutYaxisOutofPlaneSelectedUnitOnchange={(e) => handleBendingStressaboutYaxisOutofPlaneUnitChange(e.target.value)}
                                BendingStressaboutYaxisOutofPlaneOptions={
                                    BendingStressaboutYaxisOutofPlaneUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // TotalStressatBaseWeldActual
                                TotalStressatBaseWeldActual={TotalStressatBaseWeldActual}
                                TotalStressatBaseWeldActualSelectedUnit={TotalStressatBaseWeldActualSelectedUnit}
                                TotalStressatBaseWeldActualSelectedUnitOnchange={(e) => handleTotalStressatBaseWeldActualUnitChange(e.target.value)}
                                TotalStressatBaseWeldActualOptions={
                                    TotalStressatBaseWeldActualUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // Weld Check at Cheek Plate Weld

                                // WeldLength
                                WeldLength={WeldLength}
                                WeldLengthSelectedUnit={WeldLengthSelectedUnit}
                                WeldLengthSelectedUnitOnchange={(e) => handleWeldLengthUnitChange(e.target.value)}
                                WeldLengthOptions={
                                    WeldLengthUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // WeldAreaatCheekPlate
                                WeldAreaatCheekPlate={WeldAreaatCheekPlate}
                                WeldAreaatCheekPlateSelectedUnit={WeldAreaatCheekPlateSelectedUnit}
                                WeldAreaatCheekPlateSelectedUnitOnchange={(e) => handleWeldAreaatCheekPlateUnitChange(e.target.value)}
                                WeldAreaatCheekPlateOptions={
                                    WeldAreaatCheekPlateUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }
                                // DesignLoadononecheekplate
                                DesignLoadononecheekplate={DesignLoadononecheekplate}
                                DesignLoadononecheekplateSelectedUnit={DesignLoadononecheekplateSelectedUnit}
                                DesignLoadononecheekplateSelectedUnitOnchange={(e) => handleDesignLoadononecheekplateUnitChange(e.target.value)}
                                DesignLoadononecheekplateOptions={
                                    DesignLoadononecheekplateUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }
                                // WeldStressatCheekWeldActual
                                WeldStressatCheekWeldActual={WeldStressatCheekWeldActual}
                                WeldStressatCheekWeldActualSelectedUnit={WeldStressatCheekWeldActualSelectedUnit}
                                WeldStressatCheekWeldActualSelectedUnitOnchange={(e) => handleWeldStressatCheekWeldActualUnitChange(e.target.value)}
                                WeldStressatCheekWeldActualoptions={
                                    WeldStressatCheekWeldActualUnit.map((unit) => (
                                        <option key={unit} value={unit}>
                                            {unit}
                                        </option>
                                    ))
                                }

                                // If else
                                MainPlateRadiusCondition={MainPlateRadius}
                                ShackleClearanceChecksCondition={ShackleClearanceChecks}
                                // 
                                BearingStressCheckatPinHoleCondition={BearingStressCheckatPinHole}
                                ShearStressCheckatPinHoleCondition={ShearStressCheckatPinHole}
                                TensileStressCheckatPinHoleCondition={TensileStressCheckatPinHole}
                                HertzContactStressCheckatPinHoleCondition={HertzContactStressCheckatPinHole}
                                // 
                                TensileStressCheckatBaseCondition={TensileStressCheckatBase}
                                BendingStressCheckatBaseXaxisCondition={BendingStressCheckatBaseXaxis}
                                BendingStressCheckatBaseYaxisCondition={BendingStressCheckatBaseYaxis}
                                ShearStressCheckatBaseYdirectionCondition={ShearStressCheckatBaseYdirection}
                                ShearStressCheckatBaseXdirectionCondition={ShearStressCheckatBaseXdirection}
                                CombinedStressCheckatStressCheckBasePlateCondition={CombinedStressCheckatStressCheckBasePlate}
                                // 
                                CombinedStressCheckatBaseCondition={CombinedStressCheckatBase}
                                // 
                                StressCheckatCheekPlateWeldCondition={StressCheckatCheekPlateWeld}

                                // toogle function
                                togglefunction={isActive3}
                                toggleBreaks={toggleClass3}
                            />
                        )}
                    </div>
                </section>
                <div className={isActive3 ? ' padeye height110 ' : ' padeye height110 height0 '} ></div>
                <br />
                <br />
                <br />
                <hr className="Beam-properties-calculator-hr"></hr>
                <br />
                <br />
                <br />
                <br />
                <Padeye />
                <br />
            </section>
            {/* <footer className='footer'></footer> */}
        </>
    )

}
