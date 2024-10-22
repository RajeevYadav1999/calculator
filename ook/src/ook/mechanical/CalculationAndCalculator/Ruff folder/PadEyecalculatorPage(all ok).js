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

    const MaterialYieldStressconversionFactors = {
        Mpa: 1,
        Pa: 1000000,
    };

    const [MaterialYieldStresValue, setMaterialYieldStresValue] = useState('');
    const [MaterialYieldStresselectedUnit, setMaterialYieldStresSelectedUnit] = useState('Mpa');

    const handleMaterialYieldStresChange = (value) => {
        setMaterialYieldStresValue(value);
    };

    const handleMaterialYieldStreschange = (unit, exponent = 1) => {
        const oldUnitFactor = MaterialYieldStressconversionFactors[MaterialYieldStresselectedUnit] ** exponent;
        const newUnitFactor = MaterialYieldStressconversionFactors[unit] ** exponent;
        const convertedValue = (parseFloat(MaterialYieldStresValue) * oldUnitFactor) / newUnitFactor;

        setMaterialYieldStresSelectedUnit(unit);
        setMaterialYieldStresValue(convertedValue);
    };

    // const MaterialYieldStressunits = ['Mpa', 'Pa'];

    // const MaterialYieldStressconversionFactors = {
    //     Mpa: [1, 1e-6],
    //     Pa: [1e+6, 1],
    // };

    // const [MaterialYieldStresValue, setMaterialYieldStresValue] = useState('');
    // const [MaterialYieldStresselectedUnit, setMaterialYieldStresSelectedUnit] = useState('Mpa');

    // const handleMaterialYieldStresChange = (value) => {
    //     setMaterialYieldStresValue(value);
    // };

    // const handleMaterialYieldStreschange = (unit) => {
    //     setMaterialYieldStresSelectedUnit(unit);
    //     const MaterialYieldStressfactor = MaterialYieldStressconversionFactors[unit][MaterialYieldStressunits.indexOf(MaterialYieldStresselectedUnit)];
    //     setMaterialYieldStresValue((parseFloat(MaterialYieldStresValue) / MaterialYieldStressfactor));
    // };

    const ElectrodeTensileStrengthunits = ['Mpa', 'Pa'];

    const ElectrodeTensileStrengthFactors = {
        Mpa: [1, 0.000001],
        Pa: [1000000, 1],
    };

    const [ElectrodeTensileStrength, setElectrodeTensileStrength] = useState('');
    const [ElectrodeTensileStrengthSelectedUnit, setElectrodeTensileStrengthSelectedUnit] = useState('Mpa');

    const handleElectrodeTensileStrength = (values) => {
        setElectrodeTensileStrength(values);
    };

    const handleElectrodeTensileStrengthSelectedUnit = (units) => {
        setElectrodeTensileStrengthSelectedUnit(units);
        const Hrightfactor = ElectrodeTensileStrengthFactors[units][ElectrodeTensileStrengthunits.indexOf(ElectrodeTensileStrengthSelectedUnit)];
        setElectrodeTensileStrength((parseFloat(ElectrodeTensileStrength) / Hrightfactor));
    };

    const ModulusofElasticityunits = ['Mpa', 'Pa'];

    const ModulusofElasticityFactors = {
        Mpa: [1, 0.000001],
        Pa: [1000000, 1],
    };

    const [ModulusofElasticityValue, setModulusofElasticityValue] = useState('');
    const [ModulusofElasticitySelectedUnit, setModulusofElasticitySelectedUnit] = useState('Mpa');

    const handleModulusofElasticChange = (value) => {
        setModulusofElasticityValue(value);
    };

    const handleModulusofElasticUnitChange = (Unit) => {
        setModulusofElasticitySelectedUnit(Unit);
        const ModulusofElasticityFactor = ModulusofElasticityFactors[Unit][ModulusofElasticityunits.indexOf(ModulusofElasticitySelectedUnit)];
        setModulusofElasticityValue((parseFloat(ModulusofElasticityValue) / ModulusofElasticityFactor));
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

    const handleRadiusofMainPlateInputChange = (value) => {
        setRadiusofMainPlateValue(value);
    };

    const handleRadiusofMainPlateUnitChange = (unit) => {
        setRadiusofMainPlateSelectedUnit(unit);
        const RadiusofMainPlatefactor = RadiusofMainPlateconversionFactors[unit][RadiusofMainPlateunits.indexOf(RadiusofMainPlateselectedUnit)];
        setRadiusofMainPlateValue((parseFloat(RadiusofMainPlateValue) / RadiusofMainPlatefactor));
    };

    // Thickness of Main Plate
    const ThicknessofMainPlateunits = ['mm', 'cm'];

    const ThicknessofMainPlateConversionFactors = {
        mm: [1, 0.1],
        cm: [10, 1],
    };
    const [ThicknessofMainPlateValue, setThicknessofMainPlateValue] = useState('');
    const [ThicknessofMainPlateSelectedUnit, setThicknessofMainPlateSelectedUnit] = useState('mm');

    const handleThicknessofMainPlateValue = (values) => {
        setThicknessofMainPlateValue(values);
    };

    const handleThicknessofMainPlateSelectedUnit = (units) => {
        setThicknessofMainPlateSelectedUnit(units);
        const ThicknessofMainPlatefactor = ThicknessofMainPlateConversionFactors[units][ThicknessofMainPlateunits.indexOf(ThicknessofMainPlateSelectedUnit)];
        setThicknessofMainPlateValue((parseFloat(ThicknessofMainPlateValue) / ThicknessofMainPlatefactor));
    };

    // Diameterofeyepinhole
    const Diameterofeyepinholeunits = ['mm', 'cm'];

    const DiameterofeyepinholeconversionFactors = {
        mm: [1, 0.1],
        cm: [10, 1],
    };
    const [DiameterofeyepinholeValue, setDiameterofeyepinholeValue] = useState('');
    const [DiameterofeyepinholeselectedUnit, setDiameterofeyepinholeSelectedUnit] = useState('mm');

    const handleDiameterofeyepinholeChange = (value) => {
        setDiameterofeyepinholeValue(value);
    };

    const handleDiameterofeyepinholeUnitChange = (Unit) => {
        setDiameterofeyepinholeSelectedUnit(Unit);
        const Diameterofeyepinholefactor = DiameterofeyepinholeconversionFactors[Unit][Diameterofeyepinholeunits.indexOf(DiameterofeyepinholeselectedUnit)];
        setDiameterofeyepinholeValue((parseFloat(DiameterofeyepinholeValue) / Diameterofeyepinholefactor));
    };

    // Diameter of Cheek Plate
    const DiameterofCheekPlateunits = ['mm', 'cm'];

    const DiameterofCheekPlateConversionFactors = {
        mm: [1, 0.1],
        cm: [10, 1],
    };

    const [DiameterofCheekPlateInputValue, setDiameterofCheekPlateInputValue] = useState('');
    const [DiameterofCheekPlateSelectedUnit, setDiameterofCheekPlateSelectedUnit] = useState('mm');

    const handleDiameterofCheekPlateInputValue = (values) => {
        setDiameterofCheekPlateInputValue(values);
    };

    const handleDiameterofCheekPlateSelectedUnit = (units) => {
        setDiameterofCheekPlateSelectedUnit(units);
        const DiameterofCheekPlatefactor = DiameterofCheekPlateConversionFactors[units][DiameterofCheekPlateunits.indexOf(DiameterofCheekPlateSelectedUnit)];
        setDiameterofCheekPlateInputValue((parseFloat(DiameterofCheekPlateInputValue) / DiameterofCheekPlatefactor));
    };

    // Thickness of Cheek Plate
    const ThicknessofCheekPlateunits = ['mm', 'cm'];

    const ThicknessofCheekPlateConversionFactors = {
        mm: [1, 0.1],
        cm: [10, 1],
    };

    const [ThicknessofCheekPlateInputValue, setThicknessofCheekPlateInputValue] = useState('');
    const [ThicknessofCheekPlateSelectedUnit, setThicknessofCheekPlateSelectedUnit] = useState('mm');

    const handleThicknessofCheekPlateInputValue = (values) => {
        setThicknessofCheekPlateInputValue(values);
    };

    const handleThicknessofCheekPlateSelectedUnit = (units) => {
        setThicknessofCheekPlateSelectedUnit(units);
        const ThicknessofCheekPlatefactor = ThicknessofCheekPlateConversionFactors[units][ThicknessofCheekPlateunits.indexOf(ThicknessofCheekPlateSelectedUnit)];
        setThicknessofCheekPlateInputValue((parseFloat(ThicknessofCheekPlateInputValue) / ThicknessofCheekPlatefactor));
    };

    // Total Height of Pad-eye
    const TotalHeightofPadeyeunits = ['mm', 'cm'];

    const TotalHeightofPadeyeconversionFactors = {
        mm: [1, 0.1],
        cm: [10, 1],
    };

    const [inputTotalHeightofPadeyeValue, setInputTotalHeightofPadeyeValue] = useState('');
    const [selectedTotalHeightofPadeyeUnit, setSelectedTotalHeightofPadeyeUnit] = useState('mm');

    const handleInputTotalHeightofPadeyeChange = (value) => {
        setInputTotalHeightofPadeyeValue(value);
    };

    const handleUnitTotalHeightofPadeyeChange = (Unit) => {
        setSelectedTotalHeightofPadeyeUnit(Unit);
        const TotalHeightofPadeyefactor = TotalHeightofPadeyeconversionFactors[Unit][TotalHeightofPadeyeunits.indexOf(selectedTotalHeightofPadeyeUnit)];
        setInputTotalHeightofPadeyeValue((parseFloat(inputTotalHeightofPadeyeValue) / TotalHeightofPadeyefactor));
    };


    const LengthofBasePlateunits = ['mm', 'cm'];

    const LengthofBasePlateConversionFactors = {
        mm: [1, 0.1],
        cm: [10, 1],
    };

    const [LengthofBasePlateInputValue, setLengthofBasePlateInputValue] = useState('');
    const [LengthofBasePlateSelectedUnit, setLengthofBasePlateSelectedUnit] = useState('mm');

    const handleLengthofBasePlateInputValue = (values) => {
        setLengthofBasePlateInputValue(values);
    };

    const handleLengthofBasePlateSelectedUnit = (units) => {
        setLengthofBasePlateSelectedUnit(units);
        const LengthofBasePlatefactor = LengthofBasePlateConversionFactors[units][LengthofBasePlateunits.indexOf(LengthofBasePlateSelectedUnit)];
        setLengthofBasePlateInputValue((parseFloat(LengthofBasePlateInputValue) / LengthofBasePlatefactor));
    };

    // weld size
    const BaseWeldLegSizeUnits = ['mm', 'cm'];

    const BaseWeldLegSizeconversionFactors = {
        mm: [1, 0.1],
        cm: [10, 1],
    };
    const [BaseWeldLegSize, setBaseWeldLegSize] = useState('');
    const [BaseWeldLegSizeUnit, setBaseWeldLegSizeUnit] = useState('mm');

    const handleBaseWeldLegSizevalue = (values) => {
        setBaseWeldLegSize(values);
    };

    const handleBaseWeldLegSizeUnit = (units) => {
        setBaseWeldLegSizeUnit(units);
        const BaseWeldLegSizefactor = BaseWeldLegSizeconversionFactors[units][BaseWeldLegSizeUnits.indexOf(BaseWeldLegSizeUnit)];
        setBaseWeldLegSize((parseFloat(BaseWeldLegSize) / BaseWeldLegSizefactor));
    };


    const CheekPlateWeldLegSizeUnits = ['mm', 'cm'];

    const CheekPlateWeldLegSizeconversionFactors = {
        mm: [1, 0.1],
        cm: [10, 1],
    };
    const [CheekPlateWeldLegSize, setCheekPlateWeldLegSize] = useState('');
    const [CheekPlateWeldLegSizeUnit, setCheekPlateWeldLegSizeUnit] = useState('mm');

    const handleCheekPlateWeldLegSizevalue = (values) => {
        setCheekPlateWeldLegSize(values);
    };

    const handleCheekPlateWeldLegSizeUnit = (units) => {
        setCheekPlateWeldLegSizeUnit(units);
        const CheekPlateWeldLegSizefactor = CheekPlateWeldLegSizeconversionFactors[units][CheekPlateWeldLegSizeUnits.indexOf(CheekPlateWeldLegSizeUnit)];
        setCheekPlateWeldLegSize((parseFloat(CheekPlateWeldLegSize) / CheekPlateWeldLegSizefactor));
    };


    // shackel Geometry

    const ShackleSWLUnits = ['MT', 'N'];

    const ShackleSWLconversionFactors = {
        MT: [1, 9806.65],
        N: [0.0001019716, 1],
    };
    const [ShackleSWL, setShackleSWL] = useState('');
    const [ShackleSWLUnit, setShackleSWLUnit] = useState('MT');

    const handleShackleSWLvalue = (values) => {
        setShackleSWL(values);
    };

    const handleShackleSWLUnit = (units) => {
        setShackleSWLUnit(units);
        const ShackleSWLfactor = ShackleSWLconversionFactors[units][ShackleSWLUnits.indexOf(ShackleSWLUnit)];
        setShackleSWL((parseFloat(ShackleSWL) / ShackleSWLfactor));
    };



    const ShackleInsideLengthUnits = ['mm', 'cm'];

    const ShackleInsideLengthconversionFactors = {
        mm: [1, 0.1],
        cm: [10, 1],
    };
    const [ShackleInsideLength, setShackleInsideLength] = useState('');
    const [ShackleInsideLengthUnit, setShackleInsideLengthUnit] = useState('mm');

    const handleShackleInsideLengthvalue = (values) => {
        setShackleInsideLength(values);
    };

    const handleShackleInsideLengthUnit = (units) => {
        setShackleInsideLengthUnit(units);
        const ShackleInsideLengthfactor = ShackleInsideLengthconversionFactors[units][ShackleInsideLengthUnits.indexOf(ShackleInsideLengthUnit)];
        setShackleInsideLength((parseFloat(ShackleInsideLength) / ShackleInsideLengthfactor));
    };


    const ShackleJawWidthUnits = ['mm', 'cm'];

    const ShackleJawWidthconversionFactors = {
        mm: [1, 0.1],
        cm: [10, 1],
    };
    const [ShackleJawWidth, setShackleJawWidth] = useState('');
    const [ShackleJawWidthUnit, setShackleJawWidthUnit] = useState('mm');

    const handleShackleJawWidthvalue = (values) => {
        setShackleJawWidth(values);
    };

    const handleShackleJawWidthUnit = (units) => {
        setShackleJawWidthUnit(units);
        const ShackleJawWidthfactor = ShackleJawWidthconversionFactors[units][ShackleJawWidthUnits.indexOf(ShackleJawWidthUnit)];
        setShackleJawWidth((parseFloat(ShackleJawWidth) / ShackleJawWidthfactor));
    };


    const ShacklePinDiameterUnits = ['mm', 'cm'];

    const ShacklePinDiameterconversionFactors = {
        mm: [1, 0.1],
        cm: [10, 1],
    };
    const [ShacklePinDiameter, setShacklePinDiameter] = useState('');
    const [ShacklePinDiameterUnit, setShacklePinDiameterUnit] = useState('mm');

    const handleShacklePinDiametervalue = (values) => {
        setShacklePinDiameter(values);
    };

    const handleShacklePinDiameterUnit = (units) => {
        setShacklePinDiameterUnit(units);
        const ShacklePinDiameterfactor = ShacklePinDiameterconversionFactors[units][ShacklePinDiameterUnits.indexOf(ShacklePinDiameterUnit)];
        setShacklePinDiameter((parseFloat(ShacklePinDiameter) / ShacklePinDiameterfactor));
    };


    // SlingDiameter
    const SlingDiameterUnits = ['mm', 'cm'];

    const SlingDiameterconversionFactors = {
        mm: [1, 0.1],
        cm: [10, 1],
    };
    const [SlingDiameter, setSlingDiameter] = useState('');
    const [SlingDiameterUnit, setSlingDiameterUnit] = useState('mm');

    const handleSlingDiametervalue = (values) => {
        setSlingDiameter(values);
    };

    const handleSlingDiameterUnit = (units) => {
        setSlingDiameterUnit(units);
        const SlingDiameterfactor = SlingDiameterconversionFactors[units][SlingDiameterUnits.indexOf(SlingDiameterUnit)];
        setSlingDiameter((parseFloat(SlingDiameter) / SlingDiameterfactor));
    };


    // pad-eye load

    const LoadonPadeyeunits = ['MT', 'N'];
    const LoadonPadeyeFactors = {
        MT: [1, 0.000001],
        N: [1000000, 1],
    };
    const [LoadonPadeyeValue, setLoadonPadeyeValue] = useState('');
    const [LoadonPadeyeSelectedUnit, setLoadonPadeyeSelectedUnit] = useState('Mpa');
    const handleLoadonPadeyeValueChange = (value) => {
        setLoadonPadeyeValue(value);
    };
    const handleLoadonPadeyeUnitChange = (Unit) => {
        setLoadonPadeyeSelectedUnit(Unit);
        const LoadonPadeyeFactor = LoadonPadeyeFactors[Unit][LoadonPadeyeunits.indexOf(LoadonPadeyeSelectedUnit)];
        setLoadonPadeyeValue((parseFloat(LoadonPadeyeValue) / LoadonPadeyeFactor));
    };




    const AngleofLoadwithVerticalunit = ['Degrees'];
    const AngleofLoadwithVerticalFactors = {
        Degrees: [1],
    };
    const [AngleofLoadwithVerticalvalue, setAngleofLoadwithVerticalvalue] = useState('');
    const [AngleofLoadwithVerticalSelectedUnit, setAngleofLoadwithVerticalSelectedUnit] = useState('Mpa');
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
    const [OutofPlaneAngleselectedUnit, setOutofPlaneAngleselectedUnit] = useState('Mpa');
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
    const AllowableBearingStressconversionFactors = {
        Mpa: [1, 1e-6],
        Pa: [1e+6, 1],
    };

    const [AllowableBearingStressValue, setAllowableBearingStressValue] = useState('');
    const [AllowableBearingStressselectedUnit, setAllowableBearingStressSelectedUnit] = useState('Mpa');

    const handleAllowableBearingStressUnitChange = (unit) => {
        const AllowableBearingStressfactor = AllowableBearingStressconversionFactors[unit][AllowableBearingStressunits.indexOf(AllowableBearingStressselectedUnit)];
        let newValue = (parseFloat(AllowableBearingStressValue) / AllowableBearingStressfactor);
        newValue = formatValue(newValue, unit);
        setAllowableBearingStressSelectedUnit(unit);
        setAllowableBearingStressValue(newValue);
    };

    const calculateAllowableBearingStressValue = () => {
        const MaterialYieldStress = parseFloat(MaterialYieldStresValue);
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
            if (floatValue.toString().includes('.') && floatValue.toString().split('.')[1].length > 2) {
                return floatValue.toExponential(3);
            }
            return floatValue.toFixed(2);
        }
    };

    useEffect(() => {
        calculateAllowableBearingStressValue();
    }, [MaterialYieldStresValue]);




    const AllowableBendingStressInPlaneunits = ['Mpa', 'Pa'];
    const AllowableBendingStressInPlaneconversionFactors = {
        Mpa: [1, 1e-6],
        Pa: [1e+6, 1],
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
        const MaterialYieldStress = parseFloat(MaterialYieldStresValue);
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
            if (floatValue.toString().includes('.') && floatValue.toString().split('.')[1].length > 2) {
                return floatValue.toExponential(3);
            }
            return floatValue.toFixed(2);
        }
    };

    useEffect(() => {
        calculateAllowableBendingStressInPlaneValue();
    }, [MaterialYieldStresValue]);







    const AllowableBendingStressOutofPlaneunits = ['Mpa', 'Pa'];
    const AllowableBendingStressOutofPlaneconversionFactors = {
        Mpa: [1, 1e-6],
        Pa: [1e+6, 1],
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
        const MaterialYieldStress = parseFloat(MaterialYieldStresValue);
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
            if (floatValue.toString().includes('.') && floatValue.toString().split('.')[1].length > 2) {
                return floatValue.toExponential(3);
            }
            return floatValue.toFixed(2);
        }
    };

    useEffect(() => {
        calculateAllowableBendingStressOutofPlaneValue();
    }, [MaterialYieldStresValue]);










    const AllowableTensileStressUnits = ['Mpa', 'Pa'];
    const AllowableTensileStressFactors = {
        Mpa: [1, 0.000001],
        Pa: [1000000, 1],
    };

    const [AllowableTensileStressValue, setAllowableTensileStressValue] = useState('');
    const [AllowableTensileStressSelectedUnit, setAllowableTensileStressSelectedUnit] = useState('Mpa');

    const handleAllowableTensileStressselectedUnitChange = (unit) => {
        const AllowableTensileStressfactor = AllowableTensileStressFactors[unit][AllowableTensileStressUnits.indexOf(AllowableTensileStressSelectedUnit)];
        let newValue = parseFloat(AllowableTensileStressValue) / AllowableTensileStressfactor;
        newValue = AllowableTensileStressFormatValue(newValue, unit);
        setAllowableTensileStressSelectedUnit(unit);
        setAllowableTensileStressValue(newValue);
    };

    const calculateAllowableTensileStressValue = () => {
        const MaterialYieldStressFloat = parseFloat(MaterialYieldStresValue);
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
            if (floatValue.toString().includes('.') && floatValue.toString().split('.')[1].length > 2) {
                return floatValue.toExponential(3);
            }
            return floatValue.toFixed(2);
        }
    };

    useEffect(() => {
        calculateAllowableTensileStressValue();
    }, [MaterialYieldStresValue]);









    const AllowableTensileStressatpinholeUnits = ['Mpa', 'Pa'];
    const AllowableTensileStressatpinholeFactors = {
        Mpa: [1, 0.000001],
        Pa: [1000000, 1],
    };

    const [AllowableTensileStressatpinholeValue, setAllowableTensileStressatpinholeValue] = useState('');
    const [AllowableTensileStressatpinholeSelectedUnit, setAllowableTensileStressatpinholeSelectedUnit] = useState('Mpa');

    const handleAllowableTensileStressatpinholeselectedUnitChange = (unit) => {
        const AllowableTensileStressatpinholefactor = AllowableTensileStressatpinholeFactors[unit][AllowableTensileStressatpinholeUnits.indexOf(AllowableTensileStressatpinholeSelectedUnit)];
        let newValue = parseFloat(AllowableTensileStressatpinholeValue) / AllowableTensileStressatpinholefactor;
        newValue = AllowableTensileStressatpinholeFormatValue(newValue, unit);
        setAllowableTensileStressatpinholeSelectedUnit(unit);
        setAllowableTensileStressatpinholeValue(newValue);
    };

    const calculateAllowableTensileStressatpinholeValue = () => {
        const MaterialYieldStressFloat = parseFloat(MaterialYieldStresValue);
        if (!isNaN(MaterialYieldStressFloat)) {
            let newValue = MaterialYieldStressFloat * 0.45;
            newValue = AllowableTensileStressatpinholeFormatValue(newValue, AllowableTensileStressatpinholeSelectedUnit);
            setAllowableTensileStressatpinholeValue(newValue);
        }
    };

    const AllowableTensileStressatpinholeFormatValue = (value, unit) => {
        const floatValue = parseFloat(value);
        if (unit === 'Mpa') {
            return floatValue.toFixed(2);
        } else {
            if (floatValue.toString().includes('.') && floatValue.toString().split('.')[1].length > 2) {
                return floatValue.toExponential(3);
            }
            return floatValue.toFixed(2);
        }
    };

    useEffect(() => {
        calculateAllowableTensileStressatpinholeValue();
    }, [MaterialYieldStresValue]);





    const AllowableShearStressUnits = ['Mpa', 'Pa'];
    const AllowableShearStressFactors = {
        Mpa: [1, 0.000001],
        Pa: [1000000, 1],
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
        const MaterialYieldStressFloat = parseFloat(MaterialYieldStresValue);
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
            if (floatValue.toString().includes('.') && floatValue.toString().split('.')[1].length > 2) {
                return floatValue.toExponential(3);
            }
            return floatValue.toFixed(2);
        }
    };

    useEffect(() => {
        calculateAllowableShearStressValue();
    }, [MaterialYieldStresValue]);

    const AllowableHertzStressatPinHoleUnits = ['Mpa', 'Pa'];
    const AllowableHertzStressatPinHoleFactors = {
        Mpa: [1, 0.000001],
        Pa: [1000000, 1],
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
        const MaterialYieldStressFloat = parseFloat(MaterialYieldStresValue);
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
            if (floatValue.toString().includes('.') && floatValue.toString().split('.')[1].length > 2) {
                return floatValue.toExponential(3);
            }
            return floatValue.toFixed(2);
        }
    };

    useEffect(() => {
        calculateAllowableHertzStressatPinHoleValue();
    }, [MaterialYieldStresValue]);

    const AllowableWeldStressUnits = ['Mpa', 'Pa'];
    const AllowableWeldStressFactors = {
        Mpa: [1, 0.000001],
        Pa: [1000000, 1],
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
        const ElectrodeTensileStrengthFloat = parseFloat(ElectrodeTensileStrength);
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
            if (floatValue.toString().includes('.') && floatValue.toString().split('.')[1].length > 2) {
                return floatValue.toExponential(3);
            }
            return floatValue.toFixed(2);
        }
    };

    useEffect(() => {
        calculateAllowableWeldStressValue();
    }, [ElectrodeTensileStrength]);




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
        const LoadonPadeye = LoadonPadeyeValue
        const multiplyValue = Math.cos(AngleofLoadwithVerticalvalue * Math.PI / 180);
        const LoadinVerticalDirectionZdirectionValue = LoadonPadeye * multiplyValue;
        setLoadinVerticalDirectionZdirectionValue(LoadinVerticalDirectionZdirectionValue.toFixed(2));
    };
    useEffect(() => {
        calculateLoadinVerticalDirectionZdirectionValue();
    }, [LoadonPadeyeValue]);



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
        setLoadinHorizontalDirectionYdirection((parseFloat(LoadinHorizontalDirectionYdirection) * factor));
    };

    const calculateLoadinHorizontalDirectionYdirectionValue = () => {
        const LoadonPadeye = parseFloat(LoadonPadeyeValue);
        const AngleofLoadwithVertical = parseFloat(AngleofLoadwithVerticalvalue);
        const pi = Math.PI;
        const LoadinHorizontalDirectionYdirectionMultipleValue = Math.sin(AngleofLoadwithVertical * 3.14159265358979 / 180) * Math.cos(OutofPlaneAngleValue * 3.14159265358979 / 180)
        const LoadinHorizontalDirectionYdirection = (LoadonPadeye * LoadinHorizontalDirectionYdirectionMultipleValue).toFixed(2);
        setLoadinHorizontalDirectionYdirection(LoadinHorizontalDirectionYdirection); // Adjust to your precision needs
    };
    useEffect(() => {
        calculateLoadinHorizontalDirectionYdirectionValue();
    }, [LoadonPadeyeValue, AngleofLoadwithVerticalvalue]);



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
        setOutofplaneLoadLateralLoadXdirection((parseFloat(OutofplaneLoadLateralLoadXdirection) * factor));
    };

    const calculateOutofplaneLoadLateralLoadXdirectionValue = () => {
        const D13 = parseFloat(LoadonPadeyeValue);
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
    }, [LoadonPadeyeValue, AngleofLoadwithVerticalvalue, OutofPlaneAngleValue]);




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
        setPadEyeDesignLoad((parseFloat(PadEyeDesignLoad) * factor));
    };

    const calculatePadEyeDesignLoadValue = () => {
        const LoadonPadeye = parseFloat(LoadonPadeyeValue);
        const DLF = parseFloat(DLFValue)
        const PadEyeDesignLoad = (LoadonPadeye * DLF).toFixed(2);
        setPadEyeDesignLoad(PadEyeDesignLoad);
    };
    useEffect(() => {
        calculatePadEyeDesignLoadValue();
    }, [LoadonPadeyeValue, DLFValue]);




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
        setDesignLoadinVerticalDirectionZdirection((parseFloat(DesignLoadinVerticalDirectionZdirection) * factor));
    };

    const calculateDesignLoadinVerticalDirectionZdirectionValue = () => {
        const LoadonPadeye = LoadonPadeyeValue
        const multiplyValue = Math.cos(AngleofLoadwithVerticalvalue * Math.PI / 180);
        const LoadinVerticalDirectionZdirectionValue = LoadonPadeye * multiplyValue;
        const DLF = parseFloat(DLFValue);
        const DesignLoadinVerticalDirectionZdirection = (LoadinVerticalDirectionZdirectionValue * DLF).toFixed(2);
        setDesignLoadinVerticalDirectionZdirection(DesignLoadinVerticalDirectionZdirection); // Adjust to your precision needs
    };

    useEffect(() => {
        calculateDesignLoadinVerticalDirectionZdirectionValue();
    }, [LoadinVerticalDirectionZdirectionValue, DLFValue]);




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
        setDesignLoadinHorizontalDirectionYdirection((parseFloat(DesignLoadinHorizontalDirectionYdirection) * factor)); // Adjust to your precision needs
    };

    const calculateDesignLoadinHorizontalDirectionYdirectionValue = () => {
        const pi = Math.PI;
        const LoadinHorizontalDirectionYdirectionMultipleValue = Math.sin(AngleofLoadwithVerticalvalue * pi / 180) * Math.cos(OutofPlaneAngleValue * pi / 180);
        const LoadinHorizontalDirectionYdirection = (LoadonPadeyeValue * LoadinHorizontalDirectionYdirectionMultipleValue).toFixed(1);
        const DesignLoadinHorizontalDirectionYdirection =( LoadinHorizontalDirectionYdirection * DLFValue).toFixed(3);
        setDesignLoadinHorizontalDirectionYdirection(DesignLoadinHorizontalDirectionYdirection); // Adjust to your precision needs
    };

    useEffect(() => {
        calculateDesignLoadinHorizontalDirectionYdirectionValue();
    }, [LoadonPadeyeValue, AngleofLoadwithVerticalvalue, DLFValue]); // Dependencies to ensure calculation runs when these values change

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
        const newValue = parseFloat(DesignLoadOutofPlaneLateralXdirection) / currentFactor;
        setDesignLoadOutofPlaneLateralXdirection(newValue); // Adjust to your precision needs
        setDesignLoadOutofPlaneLateralXdirectionSelectedUnit(unit);
    };

    const calculateDesignLoadOutofPlaneLateralXdirectionValue = () => {
        const LoadonPadeye = parseFloat(LoadonPadeyeValue)
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
    }, [OutofplaneLoadLateralLoadXdirection, DLFValue, PadEyeDesignLoad]);





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
        const Diameterofeyepinhole = parseFloat(DiameterofeyepinholeValue);
        const Clearancebetweenpinholediaandpindia = Diameterofeyepinhole - ShacklePinDiameter;
        setClearancebetweenpinholediaandpindia(Clearancebetweenpinholediaandpindia.toFixed(3));
    };
    useEffect(() => {
        calculateClearancebetweenpinholediaandpindiaValue();
    }, [DiameterofeyepinholeValue, ShacklePinDiameter]);



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
        setLengthClearanceofShackle((parseFloat(LengthClearanceofShackle) / ClearancebetweenpinholediaandpindiaFactor));
    };

    const calculateLengthClearanceofShackleValue = () => {
        const ShackleInsideLengthvalue = parseFloat(ShackleInsideLength);
        const Plusvalue = ShackleInsideLengthvalue + (ShacklePinDiameter / 2)
        const minusValue = RadiusofMainPlateValue - (- SlingDiameter);
        // const LengthClearanceofShackle = Plusvalue - minusValue;
        const LengthClearanceofShackle = (Plusvalue - minusValue);
        // const LengthClearanceofShackle = ShackleInsideLengthvalue + (ShacklePinDiameter / 2) - RadiusofMainPlateValue - SlingDiameter;
        setLengthClearanceofShackle(LengthClearanceofShackle);
    };
    useEffect(() => {
        calculateLengthClearanceofShackleValue();
    }, [ShackleInsideLength,ShacklePinDiameter,SlingDiameter,RadiusofMainPlateValue]);





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
        const ShackleJawWidthvalue = parseFloat(ShackleJawWidth);
        // const WidthClearanceofShackle = (( ShackleJawWidthvalue) );
        const WidthClearanceofShackleMinusValue = ((ShackleJawWidthvalue - ThicknessofMainPlateValue) );
        const WidthClearanceofShackle = (WidthClearanceofShackleMinusValue- (2 * ThicknessofCheekPlateInputValue));
        setWidthClearanceofShackle(WidthClearanceofShackle);
    };
    useEffect(() => {
        calculateWidthClearanceofShackleValue();
    }, [ShackleJawWidth,ThicknessofMainPlateValue,ThicknessofCheekPlateInputValue]);



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
    const [BearingAreaSelectedUnit, setBearingAreaSelectedUnit] = useState('mm');

    const handleBearingAreaUnitChange = (unit) => {
        setBearingAreaSelectedUnit(unit);
        const BearingAreaFactor = BearingAreaFactors[unit][BearingAreaUnits.indexOf(BearingAreaSelectedUnit)];
        setBearingArea((parseFloat(BearingArea) / BearingAreaFactor).toFixed(3));
    };

    const calculateBearingAreaValue = () => {
        const Dp = parseFloat(ShacklePinDiameter);
        const t = parseFloat(ThicknessofMainPlateValue);
        const tc = parseFloat(ThicknessofCheekPlateInputValue);
        const BearingArea = piby4 * Dp * (t + 2 * tc)
        setBearingArea(BearingArea.toFixed(3));
    };
    useEffect(() => {
        calculateBearingAreaValue();
    }, [ShacklePinDiameter, ThicknessofMainPlateValue, ThicknessofCheekPlateInputValue]);



    const BearingStressActualUnits = ['Mpa', 'Pa'];
    const BearingStressActualFactors = {
        Mpa: [1, 0.000001],
        Pa: [1000000, 1],
    };

    const [BearingStressActual, setBearingStressActual] = useState('');
    const [BearingStressActualSelectedUnit, setBearingStressActualSelectedUnit] = useState('mm');

    const handleBearingStressActualUnitChange = (unit) => {
        setBearingStressActualSelectedUnit(unit);
        const BearingStressActualFactor = BearingStressActualFactors[unit][BearingStressActualUnits.indexOf(BearingStressActualSelectedUnit)];
        setBearingStressActual((parseFloat(BearingStressActual) / BearingStressActualFactor));
    };

    const calculateBearingStressActualValue = () => {

        const LoadonPadeye = parseFloat(LoadonPadeyeValue);
        const DLF = parseFloat(DLFValue)
        const PadEyeDesignLoad = LoadonPadeye * DLF;
        const Dp = parseFloat(ShacklePinDiameter);
        const t = parseFloat(ThicknessofMainPlateValue);
        const tc = parseFloat(ThicknessofCheekPlateInputValue);
        const BearingArea = piby4 * Dp * (t + 2 * tc)
        const BearingStressActual = PadEyeDesignLoad / BearingArea * 9810;
        setBearingStressActual(BearingStressActual);
    };
    useEffect(() => {
        calculateBearingStressActualValue();
    }, [PadEyeDesignLoad, BearingArea]);



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
        setRadiusofCheekPlate((parseFloat(RadiusofCheekPlate) / RadiusofCheekPlateFactor).toFixed(2));
    };

    const calculateRadiusofCheekPlateValue = () => {
        const DiameterofCheekPlate = parseFloat(DiameterofCheekPlateInputValue);
        const RadiusofCheekPlate = DiameterofCheekPlate / 2;
        setRadiusofCheekPlate(RadiusofCheekPlate.toFixed(2));
    };
    useEffect(() => {
        calculateRadiusofCheekPlateValue();
    }, [DiameterofCheekPlateInputValue]);


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
        const R = parseFloat(RadiusofMainPlateValue);
        const De = parseFloat(DiameterofeyepinholeValue);
        const t = parseFloat(ThicknessofMainPlateValue);
        const DiameterofCheekPlate = parseFloat(DiameterofCheekPlateInputValue);
        const RadiusofCheekPlate = DiameterofCheekPlate / 2;
        const Rc = parseFloat(RadiusofCheekPlate);
        const tc = parseFloat(ThicknessofCheekPlateInputValue);
        const ShearAreaofpinholePluesValue1 =(R - De / 2) * t;
        const ShearAreaofpinholePluesValue2 = 2 * (Rc - De / 2) * tc;
        const ShearAreaofpinhole =  2 * (ShearAreaofpinholePluesValue1+ ShearAreaofpinholePluesValue2) ;
        setShearAreaofpinhole(ShearAreaofpinhole);
    };
    useEffect(() => {
        calculateShearAreaofpinholeValue();
    }, [RadiusofMainPlateValue, DiameterofeyepinholeValue, RadiusofCheekPlate, ThicknessofCheekPlateInputValue]);


    // Shear Stress at pin hole


    const ShearStressatpinholeUnits = ['Mpa', 'Pa'];
    const ShearStressatpinholeFactors = {
        Mpa: [1, 0.000001],
        Pa: [1000000, 1],
    };

    const [ShearStressatpinhole, setShearStressatpinhole] = useState('');
    const [ShearStressatpinholeSelectedUnit, setShearStressatpinholeSelectedUnit] = useState('mm');

    const handleShearStressatpinholeUnitChange = (unit) => {
        setShearStressatpinholeSelectedUnit(unit);
        const ShearStressatpinholeFactor = ShearStressatpinholeFactors[unit][ShearStressatpinholeUnits.indexOf(ShearStressatpinholeSelectedUnit)];
        setShearStressatpinhole((parseFloat(ShearStressatpinhole) / ShearStressatpinholeFactor).toFixed(3));
    };

    const calculateShearStressatpinholeValue = () => {

        const DiameterofCheekPlate = parseFloat(DiameterofCheekPlateInputValue);
        const LoadonPadeye = parseFloat(LoadonPadeyeValue);
        const t = parseFloat(ThicknessofMainPlateValue);
        const R = parseFloat(RadiusofMainPlateValue);
        const Rc = parseFloat(DiameterofCheekPlate / 2);
        const De = parseFloat(DiameterofeyepinholeValue);
        const tc = parseFloat(ThicknessofCheekPlateInputValue);
        const DLF = parseFloat(DLFValue)
        const ShearAreaofpinhole = 2 * ((R - De / 2) * t + 2 * (Rc - De / 2) * tc);
        const pd = LoadonPadeye * DLF;
        const ShearStressatpinhole = pd * 9810 / ShearAreaofpinhole
        setShearStressatpinhole(ShearStressatpinhole.toFixed(3));
    };
    useEffect(() => {
        calculateShearStressatpinholeValue();
    }, [PadEyeDesignLoad, BearingArea]);

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
        const LoadonPadeye = parseFloat(LoadonPadeyeValue);
        const t = parseFloat(ThicknessofMainPlateValue);
        const R = parseFloat(RadiusofMainPlateValue);
        const DiameterofCheekPlate = parseFloat(DiameterofCheekPlateInputValue);
        const RadiusofCheekPlate = DiameterofCheekPlate / 2;
        const Rc = parseFloat(DiameterofCheekPlate / 2);
        const De = parseFloat(DiameterofeyepinholeValue);
        const tc = parseFloat(ThicknessofCheekPlateInputValue);
        const DLF = parseFloat(DLFValue)
        const ShearAreaofpinhole = 2 * ((R - De / 2) * t + 2 * (Rc - De / 2) * tc);
        const PadEyeDesignLoad = LoadonPadeye * DLF;
        const TensileAreaforsectionAA = 2 * ((R - De / 2) * t + 2 * (Rc - De / 2) * tc);
        setTensileAreaforsectionAA(TensileAreaforsectionAA.toFixed(3));
    };
    useEffect(() => {
        calculateTensileAreaforsectionAAValue();
    }, [RadiusofMainPlateValue, DiameterofeyepinholeValue, RadiusofCheekPlate, ThicknessofCheekPlateInputValue, ThicknessofMainPlateValue]);

    // const TensileStressatpinholeActualatsectionAA = pd * 9810 / TensileAreaforsectionAA


    const TensileStressatpinholeActualatsectionAAUnits = ['Mpa', 'Pa'];
    const TensileStressatpinholeActualatsectionAAFactors = {
        Mpa: [1, 0.000001],
        Pa: [1000000, 1],
    };

    const [TensileStressatpinholeActualatsectionAA, setTensileStressatpinholeActualatsectionAA] = useState('');
    const [TensileStressatpinholeActualatsectionAASelectedUnit, setTensileStressatpinholeActualatsectionAASelectedUnit] = useState('Mpa');

    const handleTensileStressatpinholeActualatsectionAAUnitChange = (unit) => {
        setTensileStressatpinholeActualatsectionAASelectedUnit(unit);
        const TensileAreaforsectionAAFactor = TensileStressatpinholeActualatsectionAAFactors[unit][TensileStressatpinholeActualatsectionAAUnits.indexOf(TensileStressatpinholeActualatsectionAASelectedUnit)];
        setTensileStressatpinholeActualatsectionAA((parseFloat(TensileStressatpinholeActualatsectionAA) / TensileAreaforsectionAAFactor).toFixed(3));
    };

    const calculateTensileStressatpinholeActualatsectionAAValue = () => {
        const DiameterofCheekPlate = parseFloat(DiameterofCheekPlateInputValue);
        const LoadonPadeye = parseFloat(LoadonPadeyeValue);
        const t = parseFloat(ThicknessofMainPlateValue);
        const R = parseFloat(RadiusofMainPlateValue);
        const RadiusofCheekPlate = DiameterofCheekPlate / 2;
        const Rc = parseFloat(RadiusofCheekPlate);
        const De = parseFloat(DiameterofeyepinholeValue);
        const tc = parseFloat(ThicknessofCheekPlateInputValue);
        const DLF = parseFloat(DLFValue)
        const PadEyeDesignLoad = LoadonPadeye * DLF;
        const TensileAreaforsectionAA = 2 * ((R - De / 2) * t + 2 * (Rc - De / 2) * tc);
        const pd = parseFloat(PadEyeDesignLoad);
        const TensileStressatpinholeActualatsectionAA = pd * 9810 / TensileAreaforsectionAA;
        setTensileStressatpinholeActualatsectionAA(TensileStressatpinholeActualatsectionAA.toFixed(3));
    };
    useEffect(() => {
        calculateTensileStressatpinholeActualatsectionAAValue();
    }, [PadEyeDesignLoad, TensileAreaforsectionAA]);

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
        const DiameterofCheekPlate = parseFloat(DiameterofCheekPlateInputValue);
        const LoadonPadeye = parseFloat(LoadonPadeyeValue);
        const t = parseFloat(ThicknessofMainPlateValue);
        const R = parseFloat(RadiusofMainPlateValue);
        const RadiusofCheekPlate = DiameterofCheekPlate / 2;
        const Rc = parseFloat(RadiusofCheekPlate);
        const De = parseFloat(DiameterofeyepinholeValue);
        const tc = parseFloat(ThicknessofCheekPlateInputValue);
        const DLF = parseFloat(DLFValue)
        const PadEyeDesignLoad = LoadonPadeye * DLF;
        const TensileAreaforsectionBB = ((2 * R) + (pi * Rc / 2)) * t
        setTensileAreaforsectionBB(TensileAreaforsectionBB.toFixed(3));
    };
    useEffect(() => {
        calculateTensileAreaforsectionBBValue();
    }, [RadiusofMainPlateValue, RadiusofCheekPlate, ThicknessofMainPlateValue]);

    // const TensileStressatpinholeActualatsectionAA = pd * 9810 / TensileAreaforsectionAA

    // TensileStressatpinholeActualatsectionBB
    const TensileStressatpinholeActualatsectionBBUnits = ['Mpa', 'Pa'];
    const TensileStressatpinholeActualatsectionBBFactors = {
        Mpa: [1, 0.000001],
        Pa: [1000000, 1],
    };

    const [TensileStressatpinholeActualatsectionBB, setTensileStressatpinholeActualatsectionBB] = useState('');
    const [TensileStressatpinholeActualatsectionBBSelectedUnit, setTensileStressatpinholeActualatsectionBBSelectedUnit] = useState('Mpa');

    const handleTensileStressatpinholeActualatsectionBBUnitChange = (unit) => {
        setTensileStressatpinholeActualatsectionBBSelectedUnit(unit);
        const TensileAreaforsectionAAFactor = TensileStressatpinholeActualatsectionBBFactors[unit][TensileStressatpinholeActualatsectionBBUnits.indexOf(TensileStressatpinholeActualatsectionBBSelectedUnit)];
        setTensileStressatpinholeActualatsectionBB((parseFloat(TensileStressatpinholeActualatsectionBB) / TensileAreaforsectionAAFactor).toFixed(3));
    };

    const calculateTensileStressatpinholeActualatsectionBBValue = () => {
        const DiameterofCheekPlate = parseFloat(DiameterofCheekPlateInputValue);
        const LoadonPadeye = parseFloat(LoadonPadeyeValue);
        const t = parseFloat(ThicknessofMainPlateValue);
        const R = parseFloat(RadiusofMainPlateValue);
        const RadiusofCheekPlate = DiameterofCheekPlate / 2;
        const Rc = parseFloat(RadiusofCheekPlate);
        const DLF = parseFloat(DLFValue)
        const PadEyeDesignLoad = LoadonPadeye * DLF;
        const TensileAreaforsectionBB = ((2 * R) + (pi * Rc / 2)) * t
        const TensileStressatpinholeActualatsectionBB = PadEyeDesignLoad * 9810 / TensileAreaforsectionBB
        setTensileStressatpinholeActualatsectionBB(TensileStressatpinholeActualatsectionBB.toFixed(3));
    };
    useEffect(() => {
        calculateTensileStressatpinholeActualatsectionBBValue();
    }, [TensileAreaforsectionBB, PadEyeDesignLoad]);




    // Hertz/Contact Stress Check at Pin Hole

    // DesignLoadperunitLength
    const DesignLoadperunitLengthUnits = ['MT/mm', 'N/mm'];
    const DesignLoadperunitLengthFactors = {
        'MT/mm': [1, 1],
        'N/mm': [1, 1],
    };

    const [DesignLoadperunitLength, setDesignLoadperunitLength] = useState('');
    const [DesignLoadperunitLengthSelectedUnit, setDesignLoadperunitLengthSelectedUnit] = useState('MT/mm');

    const handleDesignLoadperunitLengthUnitChange = (unit) => {
        setDesignLoadperunitLengthSelectedUnit(unit);
        const DesignLoadperunitLengthFactor = DesignLoadperunitLengthFactors[unit][DesignLoadperunitLengthUnits.indexOf(DesignLoadperunitLengthSelectedUnit)];
        setDesignLoadperunitLength((parseFloat(DesignLoadperunitLength) / DesignLoadperunitLengthFactor).toFixed(3));
    };

    const calculateDesignLoadperunitLengthValue = () => {
        const pd = parseFloat(PadEyeDesignLoad);
        const t = parseFloat(ThicknessofMainPlateValue);
        const tc = parseFloat(ThicknessofCheekPlateInputValue);
        const DesignLoadperunitLength = pd / (t + 2 * tc);
        setDesignLoadperunitLength(DesignLoadperunitLength.toFixed(3));
    };
    useEffect(() => {
        calculateDesignLoadperunitLengthValue();
    }, [PadEyeDesignLoad, ThicknessofMainPlateValue, ThicknessofCheekPlateInputValue]);




    const HertzStressatPinHoleUnits = ['Mpa', 'Pa'];
    const HertzStressatPinHoleFactors = {
        Mpa: [1, 0.000001],
        Pa: [1000000, 1],
    };

    const [HertzStressatPinHole, setHertzStressatPinHole] = useState('');
    const [HertzStressatPinHoleSelectedUnit, setHertzStressatPinHoleSelectedUnit] = useState('Mpa');

    const handleHertzStressatPinHoleUnitChange = (unit) => {
        setHertzStressatPinHoleSelectedUnit(unit);
        const TensileAreaforsectionAAFactor = HertzStressatPinHoleFactors[unit][HertzStressatPinHoleUnits.indexOf(HertzStressatPinHoleSelectedUnit)];
        setHertzStressatPinHole((parseFloat(HertzStressatPinHole) / TensileAreaforsectionAAFactor));
    };

    const calculateHertzStressatPinHoleValue = () => {
        const LoadonPadeye = parseFloat(LoadonPadeyeValue);
        const DLF = parseFloat(DLFValue)
        const pd = LoadonPadeye * DLF;
        const t = parseFloat(ThicknessofMainPlateValue);
        const tc = parseFloat(ThicknessofCheekPlateInputValue);
        const D38 = pd / (t + 2 * tc);
        const D39 = parseFloat(ModulusofElasticityValue);
        const D40 = parseFloat(PoissonsRatio);
        const D41 = parseFloat(DiameterofeyepinholeValue)
        const D42 = parseFloat(ShacklePinDiameter)
        const HertzStressatPinHole = Math.sqrt(D38 * 9810 * D39 * (D41 - D42) / (PI * (1 - Math.pow(D40, 2)) * D41 * D42));
        // SQRT(D38*9810*D39*(D41-D42)/(PI()*(1-D40^2)*D41*D42))
        setHertzStressatPinHole(HertzStressatPinHole.toFixed(3));
    };
    useEffect(() => {
        calculateHertzStressatPinHoleValue();
    }, [TensileAreaforsectionBB, PadEyeDesignLoad]);




    // const HertzStressatPinHoleUnits = ['Mpa', 'Pa'];
    // const HertzStressatPinHoleFactors = {
    //     Mpa: [1, 0.000001],
    //     Pa: [1000000, 1],
    // };

    // const [HertzStressatPinHole, setHertzStressatPinHole] = useState('');
    // const [HertzStressatPinHoleSelectedUnit, setHertzStressatPinHoleSelectedUnit] = useState('Mpa');

    // const handleHertzStressatPinHoleUnitChange = (unit) => {
    //     setHertzStressatPinHoleSelectedUnit(unit);
    //     const HertzStressatPinHoleFactor = HertzStressatPinHoleFactors[unit][HertzStressatPinHoleUnits.indexOf(HertzStressatPinHoleSelectedUnit)];
    //     setHertzStressatPinHole((parseFloat(HertzStressatPinHole) / HertzStressatPinHoleFactor).toFixed(3));
    // };

    // const calculateHertzStressatPinHoleValue = () => {

    //     const LoadonPadeye = parseFloat(LoadonPadeyeValue);
    //     const DLF = parseFloat(DLFValue)
    //     const pd = LoadonPadeye * DLF;
    //     const t = parseFloat(ThicknessofMainPlateValue);
    //     const tc = parseFloat(ThicknessofCheekPlateInputValue);
    //     const D38 = pd / (t + 2 * tc);
    //     const D39 = parseFloat(ModulusofElasticityValue);
    //     const D40 = parseFloat(PoissonsRatio);
    //     const D41 = parseFloat(DiameterofeyepinholeValue)
    //     const D42 = parseFloat(ShacklePinDiameter)
    //     const HertzStressatPinHole = Math.sqrt(D38 * 9810 * D39 * (D41 - D42) / (PI * (1 - Math.pow(D40, 2)) * D41 * D42));
    //     // SQRT(D38*9810*D39*(D41-D42)/(PI()*(1-D40^2)*D41*D42))
    //     setHertzStressatPinHole(HertzStressatPinHole.toFixed(3));
    // };
    // useEffect(() => {
    //     calculateHertzStressatPinHoleValue();
    // }, [DiameterofeyepinholeValue, ShacklePinDiameter]);


    // Stress Checks at Base Plate
    // Tensile Stress Check


    const TensileAreaUnits = ['mm²', 'cm²'];
    const TensileAreaFactors = {
        'mm²': [1, 0.01],
        'cm²': [100, 1],
    };

    const [TensileArea, setTensileArea] = useState('');
    const [TensileAreaSelectedUnit, setTensileAreaSelected] = useState('mm2');

    const handleTensileAreaUnitChange = (unit) => {
        setTensileAreaSelected(unit);
        const TensileAreaFactor = TensileAreaFactors[unit][TensileAreaUnits.indexOf(TensileAreaSelectedUnit)];
        setTensileArea((parseFloat(TensileArea) / TensileAreaFactor));
    };

    const calculateTensileAreaValue = () => {
        const L = parseFloat(LengthofBasePlateInputValue)
        const T = parseFloat(ThicknessofMainPlateValue)
        const TensileArea = L * T;
        setTensileArea(TensileArea);
    };
    useEffect(() => {
        calculateTensileAreaValue();
    }, [LengthofBasePlateInputValue, ThicknessofMainPlateValue]);


    // TensileStressatBaseActual

    const TensileStressatBaseActualUnits = ['Mpa', 'Pa'];
    const TensileStressatBaseActualFactors = {
        Mpa: [1, 0.000001],
        Pa: [1000000, 1],
    };

    const [TensileStressatBaseActual, setTensileStressatBaseActual] = useState('');
    const [TensileStressatBaseActualSelectedUnit, setTensileStressatBaseActualSelectedUnit] = useState('Mpa');

    const handleTensileStressatBaseActualUnitChange = (unit) => {
        setTensileStressatBaseActualSelectedUnit(unit);
        const TensileStressatBaseActualFactor = TensileStressatBaseActualFactors[unit][TensileStressatBaseActualUnits.indexOf(TensileStressatBaseActualSelectedUnit)];
        setTensileStressatBaseActual((parseFloat(TensileStressatBaseActual) / TensileStressatBaseActualFactor));
    };

    const calculateTensileStressatBaseActualValue = () => {

        const LoadonPadeye = LoadonPadeyeValue
        const multiplyValue = Math.cos(AngleofLoadwithVerticalvalue * Math.PI / 180);
        const LoadinVerticalDirectionZdirectionValue = LoadonPadeye * multiplyValue;
        const DLF = parseFloat(DLFValue);
        const ValueofDesignLoadinVerticalDirectionZdirection = LoadinVerticalDirectionZdirectionValue * DLF;
        const pt = parseFloat(ValueofDesignLoadinVerticalDirectionZdirection)
        const atb = parseFloat(TensileArea)
        const TensileStressatBaseActual = pt * 9810 / atb;
        setTensileStressatBaseActual(TensileStressatBaseActual);
    };
    useEffect(() => {
        calculateTensileStressatBaseActualValue();
    }, [TensileArea, DesignLoadinVerticalDirectionZdirection]);



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
        setMomentleverforHorizontalLateralForce((parseFloat(MomentleverforHorizontalLateralForce) / MomentleverforHorizontalLateralForceFactor));
    };

    const calculateMomentleverforHorizontalLateralForceValue = () => {
        const H = parseFloat(inputTotalHeightofPadeyeValue)
        const R = parseFloat(RadiusofMainPlateValue)
        const MomentleverforHorizontalLateralForce = H - R;
        setMomentleverforHorizontalLateralForce(MomentleverforHorizontalLateralForce);
    };
    useEffect(() => {
        calculateMomentleverforHorizontalLateralForceValue();
    }, [inputTotalHeightofPadeyeValue, RadiusofMainPlateValue]);



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
        setMomentleverforVerticalForce((parseFloat(MomentleverforVerticalForce) / MomentleverforVerticalForceFactor));
    };

    const calculateMomentleverforVerticalForceValue = () => {
        const L = parseFloat(LengthofBasePlateInputValue)
        const R = parseFloat(RadiusofMainPlateValue)
        const MomentleverforVerticalForce = R - (L / 2);
        setMomentleverforVerticalForce(MomentleverforVerticalForce);
    };
    useEffect(() => {
        calculateMomentleverforVerticalForceValue();
    }, [LengthofBasePlateInputValue, RadiusofMainPlateValue]);



    // TotalDesignMomentaboutXaxisInplane
    const TotalDesignMomentaboutXaxisInplaneUnits = ['MT-mm', 'N-mm'];
    const TotalDesignMomentaboutXaxisInplaneFactors = {
        'MT-mm': [1, 1],
        'N-mm': [1, 1],
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
        const H = parseFloat(inputTotalHeightofPadeyeValue)
        const R = parseFloat(RadiusofMainPlateValue)
        const L = parseFloat(LengthofBasePlateInputValue)
        const pi = Math.PI;

        const LoadinHorizontalDirectionYdirectionMultipleValue = Math.sin(AngleofLoadwithVerticalvalue * pi / 180) * Math.cos(OutofPlaneAngleValue * pi / 180);
        const LoadinHorizontalDirectionYdirection = (LoadonPadeyeValue * LoadinHorizontalDirectionYdirectionMultipleValue).toFixed(1);
        const D6 = (LoadinHorizontalDirectionYdirection * DLFValue).toFixed(1)

        const LoadonPadeye = LoadonPadeyeValue
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
    }, [DLFValue, inputTotalHeightofPadeyeValue, RadiusofMainPlateValue, LengthofBasePlateInputValue,LoadonPadeyeValue,AngleofLoadwithVerticalvalue,OutofPlaneAngleValue]);


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
        const L = parseFloat(LengthofBasePlateInputValue)
        const T = parseFloat(ThicknessofMainPlateValue)
        const SectionModulusofBaseaboutXaxis = T * Math.pow(L, 2) / 6;
        setSectionModulusofBaseaboutXaxis(SectionModulusofBaseaboutXaxis.toFixed(2));
    };
    useEffect(() => {
        calculateSectionModulusofBaseaboutXaxisValue();
    }, [DesignLoadinHorizontalDirectionYdirection, MomentleverforHorizontalLateralForce, DesignLoadinVerticalDirectionZdirection, MomentleverforVerticalForce]);


    const BendingStressActualaboutXaxisInplaneUnits = ['Mpa', 'Pa'];
    const BendingStressActualaboutXaxisInplaneFactors = {
        Mpa: [1, 0.000001],
        Pa: [1000000, 1],
    };

    const [BendingStressActualaboutXaxisInplane, setBendingStressActualaboutXaxisInplane] = useState('');
    const [BendingStressActualaboutXaxisInplaneSelectedUnit, setBendingStressActualaboutXaxisInplaneSelectedUnit] = useState('Mpa');

    const handleBendingStressActualaboutXaxisInplaneUnitChange = (unit) => {
        setBendingStressActualaboutXaxisInplaneSelectedUnit(unit);
        const SectionModulusofBaseaboutXaxisFactor = BendingStressActualaboutXaxisInplaneFactors[unit][BendingStressActualaboutXaxisInplaneUnits.indexOf(BendingStressActualaboutXaxisInplaneSelectedUnit)];
        setBendingStressActualaboutXaxisInplane((parseFloat(BendingStressActualaboutXaxisInplane) / SectionModulusofBaseaboutXaxisFactor).toFixed(2));
    };

    const calculateBendingStressActualaboutXaxisInplaneValue = () => {
        const H = parseFloat(inputTotalHeightofPadeyeValue)
        const R = parseFloat(RadiusofMainPlateValue)
        const pi = Math.PI;
        const LoadinHorizontalDirectionYdirectionMultipleValue = Math.sin(AngleofLoadwithVerticalvalue * pi / 180) * Math.cos(OutofPlaneAngleValue * pi / 180);
        const LoadinHorizontalDirectionYdirection = (LoadonPadeyeValue * LoadinHorizontalDirectionYdirectionMultipleValue).toFixed(1);
        const pyd = (LoadinHorizontalDirectionYdirection * DLFValue).toFixed(2)
        const LoadonPadeye = LoadonPadeyeValue
        const multiplyValue = Math.cos(AngleofLoadwithVerticalvalue * Math.PI / 180);
        const LoadinVerticalDirectionZdirectionValue = LoadonPadeye * multiplyValue;
        const DLF = parseFloat(DLFValue);
        const h = H - R
        const pzd = LoadinVerticalDirectionZdirectionValue * DLF;
        const L = parseFloat(LengthofBasePlateInputValue)
        const MomentleverforVerticalForce = R - (L / 2);
        const e = parseFloat(MomentleverforVerticalForce)
        const Mdxx = pyd * h + pzd * e;
        // const L = parseFloat(LengthofBasePlateInputValue)
        const T = parseFloat(ThicknessofMainPlateValue)
        const Zbxx = T * Math.pow(L, 2) / 6;
        const BendingStressActualaboutXaxisInplane = Mdxx * 9810 / Zbxx;
        setBendingStressActualaboutXaxisInplane(BendingStressActualaboutXaxisInplane.toFixed(2));
    };
    useEffect(() => {
        calculateBendingStressActualaboutXaxisInplaneValue();
    }, [TotalDesignMomentaboutXaxisInplane, ThicknessofMainPlateValue,OutofPlaneAngleValue,inputTotalHeightofPadeyeValue, RadiusofMainPlateValue, DLFValue, LengthofBasePlateInputValue, MomentleverforVerticalForce, ThicknessofMainPlateValue,]);


    // Total Design Moment about Y-axis (Out-of Plane)

    const TotalDesignMomentaboutYaxisOutofPlaneUnits = ['MT-Mm', 'N-Mm'];
    const TotalDesignMomentaboutYaxisOutofPlaneFactors = {
        'MT-Mm': [1, 1],
        'N-Mm': [1, 1],
    };

    const [TotalDesignMomentaboutYaxisOutofPlane, setTotalDesignMomentaboutYaxisOutofPlane] = useState('');
    const [TotalDesignMomentaboutYaxisOutofPlaneSelectedUnit, setTotalDesignMomentaboutYaxisOutofPlaneSelectedUnit] = useState('MT-Mm');

    const handleTotalDesignMomentaboutYaxisOutofPlaneUnitChange = (unit) => {
        setTotalDesignMomentaboutYaxisOutofPlaneSelectedUnit(unit);
        const TotalDesignMomentaboutYaxisOutofPlaneFactor = TotalDesignMomentaboutYaxisOutofPlaneFactors[unit][TotalDesignMomentaboutYaxisOutofPlaneUnits.indexOf(TotalDesignMomentaboutYaxisOutofPlaneSelectedUnit)];
        setTotalDesignMomentaboutYaxisOutofPlane((parseFloat(TotalDesignMomentaboutYaxisOutofPlane) / TotalDesignMomentaboutYaxisOutofPlaneFactor));
    };

    const calculateTotalDesignMomentaboutYaxisOutofPlaneValue = () => {
        const LoadonPadeye = parseFloat(LoadonPadeyeValue)
        const DLF = parseFloat(DLFValue);
        const pi = Math.PI;
        const H = parseFloat(inputTotalHeightofPadeyeValue)
        const R = parseFloat(RadiusofMainPlateValue)
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
    }, [DesignLoadOutofPlaneLateralXdirection, MomentleverforHorizontalLateralForce,LoadonPadeyeValue,DLFValue,inputTotalHeightofPadeyeValue,RadiusofMainPlateValue]);

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
        const L = parseFloat(LengthofBasePlateInputValue)
        const T = parseFloat(ThicknessofMainPlateValue)
        const SectionModulusofBaseaboutYaxis = L * Math.pow(T, 2) / 6;
        setSectionModulusofBaseaboutYaxis(SectionModulusofBaseaboutYaxis);
    };
    useEffect(() => {
        calculateSectionModulusofBaseaboutYaxisValue();
    }, [LengthofBasePlateInputValue, ThicknessofMainPlateValue]);


    // Bending Stress (Actual) - about Y-axis (Out-of-Plane)

    const BendingStressActualaboutYaxisOutofPlaneUnit = ['Mpa', 'Pa'];
    const BendingStressActualaboutYaxisOutofPlaneFactors = {
        Mpa: [1, 0.000001],
        Pa: [1000000, 1],
    };

    const [BendingStressActualaboutYaxisOutofPlane, setBendingStressActualaboutYaxisOutofPlane] = useState('');
    const [BendingStressActualaboutYaxisOutofPlaneSelectedUnit, setBendingStressActualaboutYaxisOutofPlaneSelectedUnit] = useState('Mpa');

    const handleBendingStressActualaboutYaxisOutofPlaneUnitChange = (unit) => {
        setBendingStressActualaboutYaxisOutofPlaneSelectedUnit(unit);
        const BendingStressActualaboutYaxisOutofPlaneFactor = BendingStressActualaboutYaxisOutofPlaneFactors[unit][BendingStressActualaboutYaxisOutofPlaneUnit.indexOf(BendingStressActualaboutYaxisOutofPlaneSelectedUnit)];
        setBendingStressActualaboutYaxisOutofPlane((parseFloat(BendingStressActualaboutYaxisOutofPlane) / BendingStressActualaboutYaxisOutofPlaneFactor).toFixed(2));
    };

    const calculateBendingStressActualaboutYaxisOutofPlaneValue = () => {
        const h = parseFloat(MomentleverforHorizontalLateralForce)
        const LoadonPadeye = parseFloat(LoadonPadeyeValue)
        const L = parseFloat(LengthofBasePlateInputValue)
        const T = parseFloat(ThicknessofMainPlateValue)
        const DLF = parseFloat(DLFValue);
        const pi = Math.PI;
        const PadEyeDesignLoadvalue = LoadonPadeye * DLF;
        const OutofplaneLoadLateralLoadXdirectionMultiplyValue = Math.sin(AngleofLoadwithVerticalvalue * pi / 180) * Math.sin(OutofPlaneAngleValue * pi / 180)
        const OutofplaneLoadLateralLoadXdirection = LoadonPadeye * OutofplaneLoadLateralLoadXdirectionMultiplyValue;
        const pxd = (OutofplaneLoadLateralLoadXdirection * DLF) + (0.05 * PadEyeDesignLoadvalue)
        const Mdyy = pxd * h
        const Zbyy = L * Math.pow(T, 2) / 6
        const BendingStressActualaboutYaxisOutofPlane = Mdyy * 9810 / Zbyy;
        setBendingStressActualaboutYaxisOutofPlane(BendingStressActualaboutYaxisOutofPlane.toFixed(2));
    };
    useEffect(() => {
        calculateBendingStressActualaboutYaxisOutofPlaneValue();
    }, [TotalDesignMomentaboutYaxisOutofPlaneUnits, SectionModulusofBaseaboutYaxis]);

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
        const L = parseFloat(LengthofBasePlateInputValue)
        const T = parseFloat(ThicknessofMainPlateValue)
        const ShearAreaatBaseHorizontal = L * T;
        setShearAreaatBaseHorizontal(ShearAreaatBaseHorizontal);
    };
    useEffect(() => {
        calculateShearAreaatBaseHorizontalValue();
    }, [LengthofBasePlateInputValue, ThicknessofMainPlateValue]);


    // Shear Stress at Base (Actual) - Horizontal (Y direction)
    // ShearStressatBaseActualHorizontalYdirection
    const ShearStressatBaseActualHorizontalYdirectionUnit = ['Mpa', 'Pa'];
    const ShearStressatBaseActualHorizontalYdirectionFactors = {
        Mpa: [1, 0.000001],
        Pa: [1000000, 1],
    };

    const [ShearStressatBaseActualHorizontalYdirection, setShearStressatBaseActualHorizontalYdirection] = useState('');
    const [ShearStressatBaseActualHorizontalYdirectionSelectedUnit, setShearStressatBaseActualHorizontalYdirectionSelectedUnit] = useState('Mpa');

    const handleShearStressatBaseActualHorizontalYdirectionUnitChange = (unit) => {
        setShearStressatBaseActualHorizontalYdirectionSelectedUnit(unit);
        const ShearAreaatBaseHorizontalFactor = ShearStressatBaseActualHorizontalYdirectionFactors[unit][ShearStressatBaseActualHorizontalYdirectionUnit.indexOf(ShearStressatBaseActualHorizontalYdirectionSelectedUnit)];
        setShearStressatBaseActualHorizontalYdirection((parseFloat(ShearStressatBaseActualHorizontalYdirection) / ShearAreaatBaseHorizontalFactor));
    };

    const calculateShearStressatBaseActualHorizontalYdirectionValue = () => {
        const pi = Math.PI;
        const LoadinHorizontalDirectionYdirectionMultipleValue = Math.sin(AngleofLoadwithVerticalvalue * pi / 180) * Math.cos(OutofPlaneAngleValue * pi / 180);
        const LoadinHorizontalDirectionYdirection = (LoadonPadeyeValue * LoadinHorizontalDirectionYdirectionMultipleValue).toFixed(1);
        const pyd = (LoadinHorizontalDirectionYdirection * DLFValue).toFixed(2)
        const L = parseFloat(LengthofBasePlateInputValue)
        const T = parseFloat(ThicknessofMainPlateValue)
        const asb = L * T
        const ShearStressatBaseActualHorizontalYdirection = (pyd * 9810 / asb).toFixed(3);
        setShearStressatBaseActualHorizontalYdirection(ShearStressatBaseActualHorizontalYdirection,OutofPlaneAngleValue);
    };
    useEffect(() => {
        calculateShearStressatBaseActualHorizontalYdirectionValue();
    }, [LengthofBasePlateInputValue, ShearAreaatBaseHorizontal,DLFValue]);


    // Shear Stress at Base (Actual) - Lateral (X direction)
    // ShearStressatBaseActualLateralXdirection
    const ShearStressatBaseActualLateralXdirectionUnits = ['Mpa', 'Pa'];
    const ShearStressatBaseActualLateralXdirectionFactors = {
        Mpa: [1, 0.000001],
        Pa: [1000000, 1],
    };

    const [ShearStressatBaseActualLateralXdirection, setShearStressatBaseActualLateralXdirection] = useState('');
    const [ShearStressatBaseActualLateralXdirectionSelectedUnit, setShearStressatBaseActualLateralXdirectionSelectedUnit] = useState('Mpa');

    const handleShearStressatBaseActualLateralXdirectionUnitChange = (unit) => {
        setShearStressatBaseActualLateralXdirectionSelectedUnit(unit);
        const ShearStressatBaseActualLateralXdirectionFactor = ShearStressatBaseActualLateralXdirectionFactors[unit][ShearStressatBaseActualLateralXdirectionUnits.indexOf(ShearStressatBaseActualLateralXdirectionSelectedUnit)];
        setShearStressatBaseActualLateralXdirection((parseFloat(ShearStressatBaseActualLateralXdirection) / ShearStressatBaseActualLateralXdirectionFactor));
    };

    const calculateShearStressatBaseActualLateralXdirectionValue = () => {
        const LoadonPadeye = parseFloat(LoadonPadeyeValue)
        const DLF = parseFloat(DLFValue);
        const pi = Math.PI;
        const PadEyeDesignLoadvalue = LoadonPadeye * DLF;
        const OutofplaneLoadLateralLoadXdirectionMultiplyValue = Math.sin(AngleofLoadwithVerticalvalue * pi / 180) * Math.sin(OutofPlaneAngleValue * pi / 180)
        const OutofplaneLoadLateralLoadXdirection = LoadonPadeye * OutofplaneLoadLateralLoadXdirectionMultiplyValue;
        const pxd = (OutofplaneLoadLateralLoadXdirection * DLF) + (0.05 * PadEyeDesignLoadvalue);
        const L = parseFloat(LengthofBasePlateInputValue)
        const T = parseFloat(ThicknessofMainPlateValue)
        const asb = L * T
        const ShearStressatBaseActualLateralXdirection = pxd * 9810 / asb;
        setShearStressatBaseActualLateralXdirection(ShearStressatBaseActualLateralXdirection);
    };
    useEffect(() => {
        calculateShearStressatBaseActualLateralXdirectionValue();
    }, [DesignLoadOutofPlaneLateralXdirection, ShearAreaatBaseHorizontal]);


    // DesignLoadOutofPlaneLateralXdirection

    const VonMisesStressatBaseActualUnits = ['Mpa', 'Pa'];
    const VonMisesStressatBaseActualFactors = {
        Mpa: [1, 0.000001],
        Pa: [1000000, 1],
    };

    const [VonMisesStressatBaseActual, setVonMisesStressatBaseActual] = useState('');
    const [VonMisesStressatBaseActualSelectedUnit, setVonMisesStressatBaseActualSelectedUnit] = useState('Mpa');

    const handleVonMisesStressatBaseActualUnitChange = (unit) => {
        setVonMisesStressatBaseActualSelectedUnit(unit);
        const VonMisesStressatBaseActualFactor = VonMisesStressatBaseActualFactors[unit][VonMisesStressatBaseActualUnits.indexOf(VonMisesStressatBaseActualSelectedUnit)];
        setVonMisesStressatBaseActual((parseFloat(VonMisesStressatBaseActual) / VonMisesStressatBaseActualFactor).toFixed(3));
    };

    const calculateVonMisesStressatBaseActualValue = () => {
        const sigmaTb = parseFloat(TensileStressatBaseActual)
        const sigmaBbx = parseFloat(BendingStressActualaboutXaxisInplane)
        const sigmaBby = parseFloat(BendingStressActualaboutYaxisOutofPlane)
        const tauSbx = parseFloat(ShearStressatBaseActualHorizontalYdirection)
        const tauSby = parseFloat(ShearStressatBaseActualLateralXdirection)

        const sigmaTerm = Math.pow(sigmaTb + sigmaBbx + sigmaBby, 2);
        const tauTerm = 3 * (Math.pow(tauSbx, 2) + Math.pow(tauSby, 2));
        const VonMisesStressatBaseActual = Math.sqrt(sigmaTerm + tauTerm);
        setVonMisesStressatBaseActual(VonMisesStressatBaseActual.toFixed(3));
    };
    useEffect(() => {
        calculateVonMisesStressatBaseActualValue();
    }, [TensileStressatBaseActual, BendingStressActualaboutXaxisInplane, BendingStressActualaboutYaxisOutofPlane, ShearStressatBaseActualHorizontalYdirection, ShearStressatBaseActualLateralXdirection]);


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
        setThroatthickness((parseFloat(Throatthickness) / ThroatthicknessFactor).toFixed(3));
    };

    const calculateThroatthicknessValue = () => {
        const squarerootof2 = Math.sqrt(2)
        const Throatthickness = BaseWeldLegSize / Math.sqrt(2);
        setThroatthickness(Throatthickness.toFixed(3));
    };
    useEffect(() => {
        calculateThroatthicknessValue();
    });

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
        setWeldCheckatCheekPlateWeldThroatthickness((parseFloat(WeldCheckatCheekPlateWeldThroatthickness) / WeldCheckatCheekPlateWeldThroatthicknessFactor).toFixed(3));
    };

    const calculateWeldCheckatCheekPlateWeldThroatthicknessValue = () => {
        const squarerootof2 = Math.sqrt(2)
        const WeldCheckatCheekPlateWeldThroatthickness = CheekPlateWeldLegSize / Math.sqrt(2);
        setWeldCheckatCheekPlateWeldThroatthickness(WeldCheckatCheekPlateWeldThroatthickness.toFixed(3));
    };
    useEffect(() => {
        calculateWeldCheckatCheekPlateWeldThroatthicknessValue();
    });
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
        const L = parseFloat(LengthofBasePlateInputValue)
        const T = parseFloat(ThicknessofMainPlateValue)
        const TotalWeldLength = (2 * L) + (2 * T)
        setTotalWeldLength(TotalWeldLength);
    };
    useEffect(() => {
        calculateTotalWeldLengthValue();
    }, [LengthofBasePlateInputValue, ThicknessofMainPlateValue]);


    // Shear Stress at Base Weld

    const ShearStressatBaseWeldUnits = ['mm', 'cm'];
    const ShearStressatBaseWeldFactors = {
        mm: [1, 0.1],
        cm: [10, 1],
    };

    const [ShearStressatBaseWeld, setShearStressatBaseWeld] = useState('');
    const [ShearStressatBaseWeldSelectedUnit, setShearStressatBaseWeldSelectedUnit] = useState('mm');

    const handleShearStressatBaseWeldUnitChange = (unit) => {
        setShearStressatBaseWeldSelectedUnit(unit);
        const ShearStressatBaseWeldFactor = ShearStressatBaseWeldFactors[unit][ShearStressatBaseWeldUnits.indexOf(ShearStressatBaseWeldSelectedUnit)];
        setShearStressatBaseWeld((parseFloat(ShearStressatBaseWeld) / ShearStressatBaseWeldFactor).toFixed(3));
    };

    const calculateShearStressatBaseWeldValue = () => {
        const squarerootof2 = Math.sqrt(2)
        const twt = BaseWeldLegSize / squarerootof2;
        const L = parseFloat(LengthofBasePlateInputValue)
        const T = parseFloat(ThicknessofMainPlateValue)
        const Lw = (2 * L) + (2 * T)
        const ShearStressatBaseWeld = twt * Lw
        setShearStressatBaseWeld(ShearStressatBaseWeld.toFixed(3));
    };
    useEffect(() => {
        calculateShearStressatBaseWeldValue();
    }, [Throatthickness, TotalWeldLength]);


    // Shear Stress at Base Weld(Actual) - Horizontal (Y -direction)
    const ShearStressatBaseWeldActualHorizontalYdirectionUnits = ['Mpa', 'Pa'];
    const ShearStressatBaseWeldActualHorizontalYdirectionFactors = {
        Mpa: [1, 0.000001],
        Pa: [1000000, 1],
    };

    const [ShearStressatBaseWeldActualHorizontalYdirection, setShearStressatBaseWeldActualHorizontalYdirection] = useState('');
    const [ShearStressatBaseWeldActualHorizontalYdirectionSelectedUnit, setShearStressatBaseWeldActualHorizontalYdirectionSelectedUnit] = useState('Mpa');

    const handleShearStressatBaseWeldActualHorizontalYdirectionUnitChange = (unit) => {
        setShearStressatBaseWeldActualHorizontalYdirectionSelectedUnit(unit);
        const ShearStressatBaseWeldFactor = ShearStressatBaseWeldActualHorizontalYdirectionFactors[unit][ShearStressatBaseWeldActualHorizontalYdirectionUnits.indexOf(ShearStressatBaseWeldActualHorizontalYdirectionSelectedUnit)];
        setShearStressatBaseWeldActualHorizontalYdirection((parseFloat(ShearStressatBaseWeldActualHorizontalYdirection) / ShearStressatBaseWeldFactor).toFixed(3));
    };

    const calculateShearStressatBaseWeldActualHorizontalYdirectionValue = () => {
        const pi = Math.PI
        const squarerootof2 = Math.sqrt(2)
        const L = parseFloat(LengthofBasePlateInputValue)
        const T = parseFloat(ThicknessofMainPlateValue)
        const LoadinHorizontalDirectionYdirectionMultipleValue = Math.sin(AngleofLoadwithVerticalvalue * pi / 180) * Math.cos(OutofPlaneAngleValue * pi / 180);
        const LoadinHorizontalDirectionYdirection = LoadonPadeyeValue * LoadinHorizontalDirectionYdirectionMultipleValue;
        const twt = BaseWeldLegSize / squarerootof2;
        const Lw = (2 * L) + (2 * T)
        const Asbw = twt * Lw
        const Pyd = LoadinHorizontalDirectionYdirection * DLFValue
        const ShearStressatBaseWeldActualHorizontalYdirection = (Pyd * 9810) / Asbw
        setShearStressatBaseWeldActualHorizontalYdirection(ShearStressatBaseWeldActualHorizontalYdirection.toFixed(3));
    };
    useEffect(() => {
        calculateShearStressatBaseWeldActualHorizontalYdirectionValue();
    }, [DesignLoadOutofPlaneLateralXdirection, ShearStressatBaseWeld,OutofPlaneAngleValue]);


    // Shear Stress at Base Weld(Actual) - Lateral (X - direction)
    const ShearStressatBaseWeldActualLateralXdirectionUnit = ['Mpa', 'Pa'];
    const ShearStressatBaseWeldActualLateralXdirectionFactors = {
        Mpa: [1, 0.000001],
        Pa: [1000000, 1],
    };

    const [ShearStressatBaseWeldActualLateralXdirection, setShearStressatBaseWeldActualLateralXdirection] = useState('');
    const [ShearStressatBaseWeldActualLateralXdirectionSelectedUnit, setShearStressatBaseWeldActualLateralXdirectionSelectedUnit] = useState('Mpa');

    const handleShearStressatBaseWeldActualLateralXdirectionUnitChange = (unit) => {
        setShearStressatBaseWeldActualLateralXdirectionSelectedUnit(unit);
        const ShearStressatBaseWeldActualLateralXdirectionFactor = ShearStressatBaseWeldActualLateralXdirectionFactors[unit][ShearStressatBaseWeldActualLateralXdirectionUnit.indexOf(ShearStressatBaseWeldActualLateralXdirectionSelectedUnit)];
        setShearStressatBaseWeldActualLateralXdirection((parseFloat(ShearStressatBaseWeldActualLateralXdirection) / ShearStressatBaseWeldActualLateralXdirectionFactor).toFixed(3));
    };

    const calculateShearStressatBaseWeldActualLateralXdirectionValue = () => {
        const pi = Math.PI
        const squarerootof2 = Math.sqrt(2)
        const L = parseFloat(LengthofBasePlateInputValue)
        const T = parseFloat(ThicknessofMainPlateValue)
        const LoadinHorizontalDirectionYdirectionMultipleValue = Math.sin(AngleofLoadwithVerticalvalue * pi / 180) * Math.cos(OutofPlaneAngleValue * pi / 180);
        const LoadinHorizontalDirectionYdirection = LoadonPadeyeValue * LoadinHorizontalDirectionYdirectionMultipleValue;
        const twt = BaseWeldLegSize / squarerootof2;
        const Lw = (2 * L) + (2 * T)
        const Asbw = twt * Lw
        const Pyd = LoadinHorizontalDirectionYdirection * DLFValue
        const LoadonPadeye = parseFloat(LoadonPadeyeValue)
        const DLF = parseFloat(DLFValue);
        const PadEyeDesignLoadvalue = LoadonPadeye * DLF;
        const OutofplaneLoadLateralLoadXdirectionMultiplyValue = Math.sin(AngleofLoadwithVerticalvalue * pi / 180) * Math.sin(OutofPlaneAngleValue * pi / 180)
        const OutofplaneLoadLateralLoadXdirection = LoadonPadeye * OutofplaneLoadLateralLoadXdirectionMultiplyValue;
        const Pxd = (OutofplaneLoadLateralLoadXdirection * DLF) + (0.05 * PadEyeDesignLoadvalue)
        const ShearStressatBaseWeldActualLateralXdirection = (Pxd * 9810) / Asbw
        setShearStressatBaseWeldActualLateralXdirection(ShearStressatBaseWeldActualLateralXdirection.toFixed(3));
    };
    useEffect(() => {
        calculateShearStressatBaseWeldActualLateralXdirectionValue();
    }, [DesignLoadOutofPlaneLateralXdirection, ShearStressatBaseWeld]);


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
        const twt = parseFloat(Throatthickness)
        const Lw = parseFloat(TotalWeldLength)
        const TensileAreaatBase = twt * Lw
        setTensileAreaatBase(TensileAreaatBase.toFixed(3));
    };
    useEffect(() => {
        calculateTensileAreaatBaseValue();
    }, [Throatthickness, TotalWeldLength]);



    // TensileStressatBaseWeldActual
    const TensileStressatBaseWeldActualUnit = ['Mpa', 'Pa'];
    const TensileStressatBaseWeldActualFactors = {
        Mpa: [1, 0.000001],
        Pa: [1000000, 1],
    };

    const [TensileStressatBaseWeldActual, setTensileStressatBaseWeldActual] = useState('');
    const [TensileStressatBaseWeldActualSelectedUnit, setTensileStressatBaseWeldActualSelectedUnit] = useState('Mpa');

    const handleTensileStressatBaseWeldActualUnitChange = (unit) => {
        setTensileStressatBaseWeldActualSelectedUnit(unit);
        const TensileStressatBaseWeldActualFactor = TensileStressatBaseWeldActualFactors[unit][TensileStressatBaseWeldActualUnit.indexOf(TensileStressatBaseWeldActualSelectedUnit)];
        setTensileStressatBaseWeldActual((parseFloat(TensileStressatBaseWeldActual) / TensileStressatBaseWeldActualFactor).toFixed(3));
    };

    const calculateTensileStressatBaseWeldActualValue = () => {
        const squarerootof2 = Math.sqrt(2)
        const twt = BaseWeldLegSize / squarerootof2;
        const L = parseFloat(LengthofBasePlateInputValue)
        const T = parseFloat(ThicknessofMainPlateValue)
        const Lw = (2 * L) + (2 * T)
        const Asbw = twt * Lw
        const LoadonPadeye = LoadonPadeyeValue
        const multiplyValue = Math.cos(AngleofLoadwithVerticalvalue * Math.PI / 180);
        const LoadinVerticalDirectionZdirectionValue = LoadonPadeye * multiplyValue;
        const DLF = parseFloat(DLFValue);
        const Pyd = LoadinVerticalDirectionZdirectionValue * DLF;
        const TensileStressatBaseWeldActual = (Pyd * 9810) / Asbw
        setTensileStressatBaseWeldActual(TensileStressatBaseWeldActual.toFixed(3));
    };
    useEffect(() => {
        calculateTensileStressatBaseWeldActualValue();
    }, [DesignLoadinHorizontalDirectionYdirection, ShearStressatBaseWeld]);

    // Section Modulus of Base Weld 
    // Section Modulus of Weld about X-axis
    const SectionModulusofWeldaboutXaxisUnit = ['mm³', 'cm³'];
    const SectionModulusofWeldaboutXaxisFactors = {
        'mm³': [1, 0.01],
        'cm³': [100, 1],
    };

    const [SectionModulusofWeldaboutXaxis, setSectionModulusofWeldaboutXaxis] = useState('');
    const [SectionModulusofWeldaboutXaxisSelectedUnit, setSectionModulusofWeldaboutXaxisSelectedUnit] = useState('mm³');

    const handleSectionModulusofWeldaboutXaxisUnitChange = (unit) => {
        setSectionModulusofWeldaboutXaxisSelectedUnit(unit);
        const SectionModulusofWeldaboutXaxisFactor = SectionModulusofWeldaboutXaxisFactors[unit][SectionModulusofWeldaboutXaxisUnit.indexOf(SectionModulusofWeldaboutXaxisSelectedUnit)];
        setSectionModulusofWeldaboutXaxis((parseFloat(SectionModulusofWeldaboutXaxis) / SectionModulusofWeldaboutXaxisFactor).toFixed(3));
    };

    const calculateSectionModulusofWeldaboutXaxisValue = () => {
        const b = parseFloat(ThicknessofMainPlateValue)
        const d = parseFloat(LengthofBasePlateInputValue)
        const tw = parseFloat(BaseWeldLegSize)
        const SectionModulusofWeldaboutXaxis = (b * d + Math.pow(d, 2) / 3) * tw;
        setSectionModulusofWeldaboutXaxis(SectionModulusofWeldaboutXaxis.toFixed(3));
    };
    useEffect(() => {
        calculateSectionModulusofWeldaboutXaxisValue();
    }, [ThicknessofMainPlateValue, LengthofBasePlateInputValue, BaseWeldLegSize]);


    // Section Modulus of Weld about Y-axis
    const SectionModulusofWeldaboutYaxisUnit = ['mm³', 'cm³'];
    const SectionModulusofWeldaboutYaxisFactors = {
        'mm³': [1, 0.01],
        'cm³': [100, 1],
    };

    const [SectionModulusofWeldaboutYaxis, setSectionModulusofWeldaboutYaxis] = useState('');
    const [SectionModulusofWeldaboutYaxisSelectedUnit, setSectionModulusofWeldaboutYaxisSelectedUnit] = useState('mm³');

    const handleSectionModulusofWeldaboutYaxisUnitChange = (unit) => {
        setSectionModulusofWeldaboutYaxisSelectedUnit(unit);
        const SectionModulusofWeldaboutYaxisFactor = SectionModulusofWeldaboutYaxisFactors[unit][SectionModulusofWeldaboutYaxisUnit.indexOf(SectionModulusofWeldaboutYaxisSelectedUnit)];
        setSectionModulusofWeldaboutYaxis((parseFloat(SectionModulusofWeldaboutYaxis) / SectionModulusofWeldaboutYaxisFactor).toFixed(3));
    };

    const calculateSectionModulusofWeldaboutYaxisValue = () => {
        const b = parseFloat(ThicknessofMainPlateValue)
        const d = parseFloat(LengthofBasePlateInputValue)
        const tw = parseFloat(BaseWeldLegSize)
        const SectionModulusofWeldaboutYaxis = (b * d + Math.pow(b, 2) / 3) * tw;
        setSectionModulusofWeldaboutYaxis(SectionModulusofWeldaboutYaxis.toFixed(3));
    };
    useEffect(() => {
        calculateSectionModulusofWeldaboutYaxisValue();
    }, [ThicknessofMainPlateValue, LengthofBasePlateInputValue, BaseWeldLegSize]);

    // Bending Stress Check at Base Weld
    // Total Design Moment about X-axis (In-plane)
    // TotalDesignMomentaboutXaxisInplane
    // BendingStressatBaseWeldActualaboutXAxisInPlane
    const BendingStressatBaseWeldActualaboutXAxisInPlaneUnit = ['Mpa', 'Pa'];
    const BendingStressatBaseWeldActualaboutXAxisInPlaneFactors = {
        Mpa: [1, 0.000001],
        Pa: [1000000, 1],
    };

    const [BendingStressatBaseWeldActualaboutXAxisInPlane, setBendingStressatBaseWeldActualaboutXAxisInPlane] = useState('');
    const [BendingStressatBaseWeldActualaboutXAxisInPlaneSelectedUnit, setBendingStressatBaseWeldActualaboutXAxisInPlaneSelectedUnit] = useState('mm');

    const handleBendingStressatBaseWeldActualaboutXAxisInPlaneUnitChange = (unit) => {
        setBendingStressatBaseWeldActualaboutXAxisInPlaneSelectedUnit(unit);
        const BendingStressatBaseWeldActualaboutXAxisInPlaneFactor = BendingStressatBaseWeldActualaboutXAxisInPlaneFactors[unit][BendingStressatBaseWeldActualaboutXAxisInPlaneUnit.indexOf(BendingStressatBaseWeldActualaboutXAxisInPlaneSelectedUnit)];
        setBendingStressatBaseWeldActualaboutXAxisInPlane((parseFloat(BendingStressatBaseWeldActualaboutXAxisInPlane) / BendingStressatBaseWeldActualaboutXAxisInPlaneFactor).toFixed(2));
    };

    const calculateBendingStressatBaseWeldActualaboutXAxisInPlaneValue = () => {
        const Mdxx = parseFloat(TotalDesignMomentaboutXaxisInplane)
        const Zwbxx = parseFloat(SectionModulusofWeldaboutXaxis)
        const BendingStressatBaseWeldActualaboutXAxisInPlane = Mdxx * 9810 / Zwbxx
        setBendingStressatBaseWeldActualaboutXAxisInPlane(BendingStressatBaseWeldActualaboutXAxisInPlane.toFixed(2));
    };
    useEffect(() => {
        calculateBendingStressatBaseWeldActualaboutXAxisInPlaneValue();
    }, [TotalDesignMomentaboutXaxisInplane, SectionModulusofWeldaboutXaxis]);


    // BendingStressActualaboutYaxisOutofPlane
    // BendingStressaboutYaxisOutofPlane
    const BendingStressaboutYaxisOutofPlaneUnit = ['mm', 'cm', 'in', 'ft', 'm'];
    const BendingStressaboutYaxisOutofPlaneFactors = {
        mm: [1, 0.1, 0.0393701, 0.00328084, 0.001],
        cm: [10, 1, 0.393701, 0.0328084, 0.01],
        in: [25.4, 2.54, 1, 0.0833333, 0.0254],
        ft: [304.8, 30.48, 12, 1, 0.3048],
        m: [1000, 100, 39.3701, 3.28084, 1],
    };

    const [BendingStressaboutYaxisOutofPlane, setBendingStressaboutYaxisOutofPlane] = useState('');
    const [BendingStressaboutYaxisOutofPlaneSelectedUnit, setBendingStressaboutYaxisOutofPlaneSelectedUnit] = useState('mm');

    const handleBendingStressaboutYaxisOutofPlaneUnitChange = (unit) => {
        setBendingStressaboutYaxisOutofPlaneSelectedUnit(unit);
        const BendingStressaboutYaxisOutofPlaneFactor = BendingStressaboutYaxisOutofPlaneFactors[unit][BendingStressaboutYaxisOutofPlaneUnit.indexOf(BendingStressaboutYaxisOutofPlaneSelectedUnit)];
        setBendingStressaboutYaxisOutofPlane((parseFloat(BendingStressaboutYaxisOutofPlane) / BendingStressaboutYaxisOutofPlaneFactor).toFixed(2));
    };

    const calculateBendingStressaboutYaxisOutofPlaneValue = () => {

        const b = parseFloat(ThicknessofMainPlateValue)
        const d = parseFloat(LengthofBasePlateInputValue)
        const tw = parseFloat(BaseWeldLegSize)
        const ZwbyyValue = (b * d + Math.pow(b, 2) / 3) * tw;
        const LoadonPadeye = parseFloat(LoadonPadeyeValue)
        const DLF = parseFloat(DLFValue);
        const pi = Math.PI;
        const PadEyeDesignLoadvalue = LoadonPadeye * DLF;
        const OutofplaneLoadLateralLoadXdirectionMultiplyValue = Math.sin(AngleofLoadwithVerticalvalue * pi / 180) * Math.sin(OutofPlaneAngleValue * pi / 180)
        const OutofplaneLoadLateralLoadXdirection = LoadonPadeye * OutofplaneLoadLateralLoadXdirectionMultiplyValue;
        const pxd = (OutofplaneLoadLateralLoadXdirection * DLF) + (0.05 * PadEyeDesignLoadvalue)
        const h = parseFloat(MomentleverforHorizontalLateralForce)
        const MdxxValue = pxd * h;
        const Mdxx = parseFloat(MdxxValue)
        const Zwbyy = parseFloat(ZwbyyValue)
        const BendingStressaboutYaxisOutofPlane = Mdxx * 9810 / Zwbyy
        setBendingStressaboutYaxisOutofPlane(BendingStressaboutYaxisOutofPlane.toFixed(2));
    };
    useEffect(() => {
        calculateBendingStressaboutYaxisOutofPlaneValue();
    }, [TotalDesignMomentaboutYaxisOutofPlane, SectionModulusofWeldaboutYaxis]);


    // TotalStressatBaseWeldActual
    const TotalStressatBaseWeldActualUnit = ['Mpa', 'Pa'];
    const TotalStressatBaseWeldActualFactors = {
        Mpa: [1, 0.000001],
        Pa: [1000000, 1],
    };

    const [TotalStressatBaseWeldActual, setTotalStressatBaseWeldActual] = useState('');
    const [TotalStressatBaseWeldActualSelectedUnit, setTotalStressatBaseWeldActualSelectedUnit] = useState('Mpa');

    const handleTotalStressatBaseWeldActualUnitChange = (unit) => {
        setTotalStressatBaseWeldActualSelectedUnit(unit);
        const TotalStressatBaseWeldActualFactor = TotalStressatBaseWeldActualFactors[unit][TotalStressatBaseWeldActualUnit.indexOf(TotalStressatBaseWeldActualSelectedUnit)];
        setTotalStressatBaseWeldActual((parseFloat(TotalStressatBaseWeldActual) / TotalStressatBaseWeldActualFactor.toFixed(2)));
    };

    const calculateTotalStressatBaseWeldActualValue = () => {
        const σtbwAct = parseFloat(TensileStressatBaseWeldActual)
        const σbbwxAct = parseFloat(BendingStressatBaseWeldActualaboutXAxisInPlane)
        const σbbyAct = parseFloat(BendingStressaboutYaxisOutofPlane)
        const τsbwyAct = parseFloat(ShearStressatBaseWeldActualHorizontalYdirection)
        const τsbwxAct = parseFloat(ShearStressatBaseWeldActualLateralXdirection)
        const TotalStressatBaseWeldActual = Math.sqrt(Math.pow(σtbwAct + σbbwxAct + σbbyAct, 2) + Math.pow(τsbwyAct, 2) + Math.pow(τsbwxAct, 2));
        setTotalStressatBaseWeldActual(TotalStressatBaseWeldActual.toFixed(2));
    };
    useEffect(() => {
        calculateTotalStressatBaseWeldActualValue();
    }, [TensileStressatBaseWeldActual, BendingStressatBaseWeldActualaboutXAxisInPlane, BendingStressaboutYaxisOutofPlane, ShearStressatBaseWeldActualHorizontalYdirection, ShearStressatBaseWeldActualHorizontalYdirection, ShearStressatBaseWeldActualLateralXdirection]);


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
        setWeldLength((parseFloat(WeldLength) / TotalStressatBaseWeldActualFactor).toFixed(2));
    };

    const calculateWeldLengthValue = () => {
        const DiameterofCheekPlate = parseFloat(DiameterofCheekPlateInputValue)
        const WeldLength = (Math.PI * DiameterofCheekPlate) / 2;
        setWeldLength(WeldLength.toFixed(2));
    };
    useEffect(() => {
        calculateWeldLengthValue();
    }, [DiameterofCheekPlateInputValue]);



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
        setWeldAreaatCheekPlate((parseFloat(WeldAreaatCheekPlate) / TotalStressatBaseWeldActualFactor).toFixed(3));
    };

    const calculateWeldAreaatCheekPlateValue = () => {
        const DiameterofCheekPlate = parseFloat(DiameterofCheekPlateInputValue)
        const WeldLengthValue = (Math.PI * DiameterofCheekPlate) / 2
        const Throatthicknessvalue = CheekPlateWeldLegSize / 1.41421356
        const WeldAreaatCheekPlate = Throatthicknessvalue * WeldLengthValue;
        setWeldAreaatCheekPlate(WeldAreaatCheekPlate.toFixed(3));
    };
    useEffect(() => {
        calculateWeldAreaatCheekPlateValue();
    }, [WeldLength, Throatthickness]);


    // Design Load on one cheek plate


    const DesignLoadononecheekplateUnit = ['MT', 'N'];
    const DesignLoadononecheekplateFactors = {
        MT: [1, 0.000101971621],
        N: [9806.65, 1],
    };

    const [DesignLoadononecheekplate, setDesignLoadononecheekplate] = useState('');
    const [DesignLoadononecheekplateSelectedUnit, setDesignLoadononecheekplateSelectedUnit] = useState('mm');

    const handleDesignLoadononecheekplateUnitChange = (unit) => {
        setDesignLoadononecheekplateSelectedUnit(unit);
        const DesignLoadononecheekplateFactor = DesignLoadononecheekplateFactors[unit][DesignLoadononecheekplateUnit.indexOf(DesignLoadononecheekplateSelectedUnit)];
        setDesignLoadononecheekplate((parseFloat(DesignLoadononecheekplate) / DesignLoadononecheekplateFactor).toFixed(2));
    };

    const calculateDesignLoadononecheekplateValue = () => {
        const pd = parseFloat(PadEyeDesignLoad)
        const tc = parseFloat(ThicknessofCheekPlateInputValue)
        const t = parseFloat(ThicknessofMainPlateValue)
        const DesignLoadononecheekplate = pd * tc / (t + 2 * tc);;
        setDesignLoadononecheekplate(DesignLoadononecheekplate.toFixed(2));
    };
    useEffect(() => {
        calculateDesignLoadononecheekplateValue();
    }, [PadEyeDesignLoad, ThicknessofCheekPlateInputValue, ThicknessofMainPlateValue]);


    const WeldStressatCheekWeldActualUnit = ['Mpa', 'Pa'];
    const WeldStressatCheekWeldActualFactors = {
        Mpa: [1, 0.000001],
        Pa: [1000000, 1],
    };

    const [WeldStressatCheekWeldActual, setWeldStressatCheekWeldActual] = useState('');
    const [WeldStressatCheekWeldActualSelectedUnit, setWeldStressatCheekWeldActualSelectedUnit] = useState('mm');

    const handleWeldStressatCheekWeldActualUnitChange = (unit) => {
        setWeldStressatCheekWeldActualSelectedUnit(unit);
        const DesignLoadononecheekplateFactor = WeldStressatCheekWeldActualFactors[unit][WeldStressatCheekWeldActualUnit.indexOf(WeldStressatCheekWeldActualSelectedUnit)];
        setWeldStressatCheekWeldActual((parseFloat(WeldStressatCheekWeldActual) / DesignLoadononecheekplateFactor).toFixed(2));
    };

    const calculateWeldStressatCheekWeldActualValue = () => {
        const pd = parseFloat(PadEyeDesignLoad)
        const tc = parseFloat(ThicknessofCheekPlateInputValue)
        const t = parseFloat(ThicknessofMainPlateValue)
        const DesignLoadononecheekplateValue = pd * tc / (t + 2 * tc);
        const DiameterofCheekPlate = parseFloat(DiameterofCheekPlateInputValue)
        const WeldLengthValue = (Math.PI * DiameterofCheekPlate) / 2
        const Throatthicknessvalue = CheekPlateWeldLegSize / 1.41421356
        const WeldAreaatCheekPlate = Throatthicknessvalue * WeldLengthValue;
        const WeldStressatCheekWeldActual = DesignLoadononecheekplateValue * 9810 / WeldAreaatCheekPlate;
        setWeldStressatCheekWeldActual(WeldStressatCheekWeldActual.toFixed(2));
    };
    useEffect(() => {
        calculateWeldStressatCheekWeldActualValue();
    }, [DesignLoadononecheekplate, WeldAreaatCheekPlate]);



    // IF ELSE CONDITIONS

    // Main Plate Radius

    if (RadiusofMainPlateValue > 1.25 * DiameterofeyepinholeValue) {
        var MainPlateRadius = <h1>OK</h1>;
    } else {
        var MainPlateRadius = <h1 style={{ color: '#bd2323' }}>NOT OK</h1>;
    }

    // Shackle Clearance checks

    const Diameterofeyepinhole = parseFloat(DiameterofeyepinholeValue);
    const D8 = ShacklePinDiameter
    const D9 = Diameterofeyepinhole - ShacklePinDiameter;
    // const threePercentGreater = ShacklePinDiameter + (ShacklePinDiameter * 3) / 100;
    // const maxPercentage = 6;
    // const ninePercentGreater = ShacklePinDiameter + (ShacklePinDiameter * maxPercentage) / 100;
    if (D9 > 2, D9 < 6) {
        var ShackleClearanceChecks = <h1>OK</h1>;
    } else {
        var ShackleClearanceChecks = <h1 style={{ color: '#bd2323' }}>NOT OK</h1>;
    }

    // Stress Check Pin Hole
    // Bearing Stress Check at Pin Hole
    if (BearingStressActual < AllowableBearingStressValue) {
        var BearingStressCheckatPinHole = <h1>OK</h1>;
    } else {
        var BearingStressCheckatPinHole = <h1 style={{ color: '#bd2323' }}>NOT OK</h1>;
    }

    //   Shear Stress Check at Pin Hole 
    if (ShearStressatpinhole < AllowableShearStressValue) {
        var ShearStressCheckatPinHole = <h1>OK</h1>;
    } else {
        var ShearStressCheckatPinHole = <h1 style={{ color: '#bd2323' }}>NOT OK</h1>;
    }

    // Tensile Stress Check at Pin Hole
    if (Math.max(TensileStressatpinholeActualatsectionAA, TensileStressatpinholeActualatsectionBB) < AllowableTensileStressatpinholeValue) {
        var TensileStressCheckatPinHole = <h1>OK</h1>;
    } else {
        var TensileStressCheckatPinHole = <h1 style={{ color: '#bd2323' }}>NOT OK</h1>;
    }

    //Hertz/Contact Stress Check at Pin Hole
    if (HertzStressatPinHole < (MaterialYieldStresValue * 2.5)) {
        var HertzContactStressCheckatPinHole = <h1>OK</h1>;
    }
    else {
        var HertzContactStressCheckatPinHole = <h1 style={{ color: '#bd2323' }}>NOT OK</h1>;
    }

    // Stress Checks at Base Plate
    // Tensile Stress Check at Base
    if (TensileStressatBaseActual < AllowableTensileStressValue) {
        var TensileStressCheckatBase = <h1>OK</h1>;
    } else {
        var TensileStressCheckatBase = <h1 style={{ color: '#bd2323' }}>NOT OK</h1>;
    }

    //   Bending Stress Check at Base (X-axis)
    if (BendingStressActualaboutXaxisInplane < AllowableBendingStressInPlaneValue) {
        var BendingStressCheckatBaseXaxis = <h1>OK</h1>;
    } else {
        var BendingStressCheckatBaseXaxis = <h1 style={{ color: '#bd2323' }}>NOT OK</h1>;
    }

    //   Bending Stress Check at Base (Y-axis)
    if (BendingStressActualaboutYaxisOutofPlane < (MaterialYieldStresValue * 0.75)) {
        var BendingStressCheckatBaseYaxis = <h1>OK</h1>;
    } else {
        var BendingStressCheckatBaseYaxis = <h1 style={{ color: '#bd2323' }}>NOT OK</h1>;
    }

    // Shear Stress Check at Base (Y direction)
    if (ShearStressatBaseActualHorizontalYdirection < (MaterialYieldStresValue * 0.4)) {
        var ShearStressCheckatBaseYdirection = <h1>OK</h1>;
    } else {
        var ShearStressCheckatBaseYdirection = <h1 style={{ color: '#bd2323' }}>NOT OK</h1>;
    }
    const LoadonPadeye = parseFloat(LoadonPadeyeValue)
    const DLF = parseFloat(DLFValue);
    const PadEyeDesignLoadvalue = LoadonPadeye * DLF;
    const OutofplaneLoadLateralLoadXdirectionMultiplyValue = Math.sin(AngleofLoadwithVerticalvalue * pi / 180) * Math.sin(OutofPlaneAngleValue * pi / 180)
    const OutofplaneLoadLateralLoadXdirectionValue = LoadonPadeye * OutofplaneLoadLateralLoadXdirectionMultiplyValue;
    const pxd = (OutofplaneLoadLateralLoadXdirectionValue * DLF) + (0.05 * PadEyeDesignLoadvalue);
    const L = parseFloat(LengthofBasePlateInputValue)
    const T = parseFloat(ThicknessofMainPlateValue)
    const asb = L * T
    //   Shear Stress Check at Base (X direction)
    if ((pxd * 9810 / asb) < 35) {
        var ShearStressCheckatBaseXdirection = <h1>OK</h1>;
    } else {
        var ShearStressCheckatBaseXdirection = <h1 style={{ color: '#bd2323' }}>NOT OK</h1>;
    }

    // Combined Stress Check as per AISC H2-1
    const fa = parseFloat(TensileStressatBaseActual);


    const ft = parseFloat(MaterialYieldStresValue * 0.6);
    const fbx = parseFloat(BendingStressActualaboutXaxisInplane);

    const Fbx = parseFloat(MaterialYieldStresValue * 0.6);

    // const b = parseFloat(ThicknessofMainPlateValue)
    // const d = parseFloat(LengthofBasePlateInputValue)
    // const tw = parseFloat(BaseWeldLegSize)
    // const ZwbyyValue = (b * d + Math.pow(b, 2) / 3) * tw;
    // const MdxxValue = pxd * h;
    // const MdxxForBendingStressAboutYaxisOutofPlane = parseFloat(MdxxValue)
    // const ZwbyyForBendingStressAboutYaxisOutofPlane = parseFloat(ZwbyyValue)
    // const BendingStressaboutYaxisOutofPlaneForCondition = MdxxForBendingStressAboutYaxisOutofPlane * 9810 / ZwbyyForBendingStressAboutYaxisOutofPlane
    const fby = parseFloat(BendingStressaboutYaxisOutofPlane);
    const Fby = parseFloat(MaterialYieldStresValue * 0.75);
    // const fa = parseFloat(BendingStressActualaboutXaxisInplane);
    // const fa = parseFloat(BendingStressActualaboutXaxisInplane);
    const CombinedStressCheckasperAISCH21 = (fa / ft) + (fbx / Fbx) + (fby / Fby)
    if (CombinedStressCheckasperAISCH21 < 1) {
        var CombinedStressCheckatStressCheckBasePlate = fbx;
    } else {
        var CombinedStressCheckatStressCheckBasePlate = <h1 style={{ color: '#bd2323' }}>NOT OK</h1>;
    }

    // Combined Stress Check at Base
    if (TotalStressatBaseWeldActual < (ElectrodeTensileStrength * 0.3)) {
        var CombinedStressCheckatBase = <h1>OK</h1>;
    } else {
        var CombinedStressCheckatBase = <h1 style={{ color: '#bd2323' }}>NOT OK</h1>;
    }

    // Stress Check at Cheek Plate Weld
    if (WeldStressatCheekWeldActual < (ElectrodeTensileStrength * 0.3)) {
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

                                BearingStressCheckatPinHoleCondition={BearingStressCheckatPinHole}
                                ShearStressCheckatPinHoleCondition={ShearStressCheckatPinHole}
                                TensileStressCheckatPinHoleCondition={TensileStressCheckatPinHole}
                                HertzContactStressCheckatPinHoleCondition={HertzContactStressCheckatPinHole}

                                TensileStressCheckatBaseCondition={TensileStressCheckatBase}
                                BendingStressCheckatBaseXaxisCondition={BendingStressCheckatBaseXaxis}
                                BendingStressCheckatBaseYaxisCondition={BendingStressCheckatBaseYaxis}
                                ShearStressCheckatBaseYdirectionCondition={ShearStressCheckatBaseYdirection}
                                ShearStressCheckatBaseXdirectionCondition={ShearStressCheckatBaseXdirection}
                                CombinedStressCheckatStressCheckBasePlateCondition={CombinedStressCheckatStressCheckBasePlate}

                                CombinedStressCheckatBaseCondition={CombinedStressCheckatBase}

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

                                    BearingStressCheckatPinHoleCondition={BearingStressCheckatPinHole}
                                    ShearStressCheckatPinHoleCondition={ShearStressCheckatPinHole}
                                    TensileStressCheckatPinHoleCondition={TensileStressCheckatPinHole}
                                    HertzContactStressCheckatPinHoleCondition={HertzContactStressCheckatPinHole}

                                    TensileStressCheckatBaseCondition={TensileStressCheckatBase}
                                    BendingStressCheckatBaseXaxisCondition={BendingStressCheckatBaseXaxis}
                                    BendingStressCheckatBaseYaxisCondition={BendingStressCheckatBaseYaxis}
                                    ShearStressCheckatBaseYdirectionCondition={ShearStressCheckatBaseYdirection}
                                    ShearStressCheckatBaseXdirectionCondition={ShearStressCheckatBaseXdirection}
                                    CombinedStressCheckatStressCheckBasePlateCondition={CombinedStressCheckatStressCheckBasePlate}

                                    CombinedStressCheckatBaseCondition={CombinedStressCheckatBase}

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

                                BearingStressCheckatPinHoleCondition={BearingStressCheckatPinHole}
                                ShearStressCheckatPinHoleCondition={ShearStressCheckatPinHole}
                                TensileStressCheckatPinHoleCondition={TensileStressCheckatPinHole}
                                HertzContactStressCheckatPinHoleCondition={HertzContactStressCheckatPinHole}

                                TensileStressCheckatBaseCondition={TensileStressCheckatBase}
                                BendingStressCheckatBaseXaxisCondition={BendingStressCheckatBaseXaxis}
                                BendingStressCheckatBaseYaxisCondition={BendingStressCheckatBaseYaxis}
                                ShearStressCheckatBaseYdirectionCondition={ShearStressCheckatBaseYdirection}
                                ShearStressCheckatBaseXdirectionCondition={ShearStressCheckatBaseXdirection}
                                CombinedStressCheckatStressCheckBasePlateCondition={CombinedStressCheckatStressCheckBasePlate}

                                CombinedStressCheckatBaseCondition={CombinedStressCheckatBase}

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

                                BearingStressCheckatPinHoleCondition={BearingStressCheckatPinHole}
                                ShearStressCheckatPinHoleCondition={ShearStressCheckatPinHole}
                                TensileStressCheckatPinHoleCondition={TensileStressCheckatPinHole}
                                HertzContactStressCheckatPinHoleCondition={HertzContactStressCheckatPinHole}

                                TensileStressCheckatBaseCondition={TensileStressCheckatBase}
                                BendingStressCheckatBaseXaxisCondition={BendingStressCheckatBaseXaxis}
                                BendingStressCheckatBaseYaxisCondition={BendingStressCheckatBaseYaxis}
                                ShearStressCheckatBaseYdirectionCondition={ShearStressCheckatBaseYdirection}
                                ShearStressCheckatBaseXdirectionCondition={ShearStressCheckatBaseXdirection}
                                CombinedStressCheckatStressCheckBasePlateCondition={CombinedStressCheckatStressCheckBasePlate}

                                CombinedStressCheckatBaseCondition={CombinedStressCheckatBase}

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

                                BearingStressCheckatPinHoleCondition={BearingStressCheckatPinHole}
                                ShearStressCheckatPinHoleCondition={ShearStressCheckatPinHole}
                                TensileStressCheckatPinHoleCondition={TensileStressCheckatPinHole}
                                HertzContactStressCheckatPinHoleCondition={HertzContactStressCheckatPinHole}

                                TensileStressCheckatBaseCondition={TensileStressCheckatBase}
                                BendingStressCheckatBaseXaxisCondition={BendingStressCheckatBaseXaxis}
                                BendingStressCheckatBaseYaxisCondition={BendingStressCheckatBaseYaxis}
                                ShearStressCheckatBaseYdirectionCondition={ShearStressCheckatBaseYdirection}
                                ShearStressCheckatBaseXdirectionCondition={ShearStressCheckatBaseXdirection}
                                CombinedStressCheckatStressCheckBasePlateCondition={CombinedStressCheckatStressCheckBasePlate}

                                CombinedStressCheckatBaseCondition={CombinedStressCheckatBase}

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

                                BearingStressCheckatPinHoleCondition={BearingStressCheckatPinHole}
                                ShearStressCheckatPinHoleCondition={ShearStressCheckatPinHole}
                                TensileStressCheckatPinHoleCondition={TensileStressCheckatPinHole}
                                HertzContactStressCheckatPinHoleCondition={HertzContactStressCheckatPinHole}

                                TensileStressCheckatBaseCondition={TensileStressCheckatBase}
                                BendingStressCheckatBaseXaxisCondition={BendingStressCheckatBaseXaxis}
                                BendingStressCheckatBaseYaxisCondition={BendingStressCheckatBaseYaxis}
                                ShearStressCheckatBaseYdirectionCondition={ShearStressCheckatBaseYdirection}
                                ShearStressCheckatBaseXdirectionCondition={ShearStressCheckatBaseXdirection}
                                CombinedStressCheckatStressCheckBasePlateCondition={CombinedStressCheckatStressCheckBasePlate}

                                CombinedStressCheckatBaseCondition={CombinedStressCheckatBase}

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
