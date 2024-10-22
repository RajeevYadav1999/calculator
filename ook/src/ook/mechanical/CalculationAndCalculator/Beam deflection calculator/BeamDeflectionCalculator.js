import React, { useState, useEffect } from "react";
import { XYPlot, XAxis, LabelSeries, LineSeries } from "react-vis";
import "react-vis/dist/style.css";
import { FaMapMarkerAlt as PinnedIcon } from "react-icons/fa";
import { FaBullseye as RollerIcon } from "react-icons/fa";
import { FaLock as FixedIcon } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Backgroundimg from "../image folder/Deflaction2.jpg";
import BeamDeflection from "./Beam Deflection dropdown/Beam Deflection";
import Load from "./Beam Deflection dropdown/Load";
import "./Beam Deflection dropdown/Beam Deflection.css";
import { Link } from "react-router-dom";
import LengthOfBeam from "./BeamDeflactionCalculator/LengthOfBeam";
import YoungsModules from "./BeamDeflactionCalculator/YoungsModules";
import CrossSection from "./BeamDeflactionCalculator/CrossSection";
import SupportPage from "./BeamDeflactionCalculator/Support";
import LoadPage from "./BeamDeflactionCalculator/Load";
import SolutionsOfBeamDeflaction from "./SolutionsOfBeamDeflaction";
import axios from "axios";
import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
// import { CategoryScale } from "react-chartjs-2";
// import { CategoryScale } from 'chart.js'
Chart.register(...registerables);
export default function BeamDeflectionCalculator() {
  const [selectedOption, setSelectedOption] = useState("option1");
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const [response, setResponse] = useState({}); // changes

  const [isActive3, setIsActive3] = useState(true);

  const toggleClass3 = () => {
    setIsActive3((previsActive3) => !previsActive3);
  };

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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [expanded, Sectionthird]);

  const [MetricOrImperial, setMetricOrImperial] = useState("option1");

  const toggleMetricOrImperial = (option) => {
    setMetricOrImperial(option);
  };

  const lengthUnits = ["mm", "cm"];
  const lengthconversionFactors = {
    mm: [1, 0.1],
    cm: [10, 1],
  };
  const [length, setlength] = useState(2000);
  const [lengthUnit, setlengthUnit] = useState("mm");
  const [internallength, setInternallength] = useState(2000);
  const handlelengthvalue = (value) => {
    setlength(value);
    const factor = lengthconversionFactors[lengthUnit][0];
    setInternallength(parseFloat(value) * factor);
  };
  const handlelengthUnit = (unit) => {
    const newMetricValueInMM =
      parseFloat(length) * lengthconversionFactors[lengthUnit][0];
    const convertedValue =
      newMetricValueInMM / lengthconversionFactors[unit][0];
    setlengthUnit(unit);
    setlength(convertedValue);
  };

  const ImperiallengthUnits = ["in"];
  const ImperiallengthconversionFactors = {
    in: [1],
  };
  const [Imperiallength, setImperiallength] = useState(2000);
  const [ImperiallengthUnit, setImperiallengthUnit] = useState("in");
  const [internalImperiallength, setInternalImperiallength] = useState(2000);
  const handleImperiallengthvalue = (value) => {
    setImperiallength(value);
    const factor = ImperiallengthconversionFactors[ImperiallengthUnit][0];
    setInternalImperiallength(parseFloat(value) * factor);
  };
  const handleImperiallengthUnit = (unit) => {
    const newMetricValueInMM =
      parseFloat(Imperiallength) *
      ImperiallengthconversionFactors[ImperiallengthUnit][0];
    const convertedValue =
      newMetricValueInMM / ImperiallengthconversionFactors[unit][0];
    setImperiallengthUnit(unit);
    setImperiallength(convertedValue);
  };

  const [pointLoads, setPointLoads] = useState([
    { position: 1000, magnitude: 10000 },
  ]);
  const [pointLoadPositionUnit, setPointLoadPositionUnit] = useState("mm");
  const [pointLoadMagnitudeUnit, setPointLoadMagnitudeUnit] = useState("kN");
  const handlePointLoadPositionUnitChange = (unit) => {
    const factor =
      positionConversionFactors[unit][0] /
      positionConversionFactors[pointLoadPositionUnit][0];
    setPointLoads(
      pointLoads.map((load) => ({
        ...load,
        position: load.position / factor,
      }))
    );
    setPointLoadPositionUnit(unit);
  };
  const handlePointLoadMagnitudeUnitChange = (unit) => {
    const factor =
      magnitudeConversionFactors[unit][0] /
      magnitudeConversionFactors[pointLoadMagnitudeUnit][0];
    setPointLoads(
      pointLoads.map((load) => ({
        ...load,
        magnitude: load.magnitude / factor,
      }))
    );
    setPointLoadMagnitudeUnit(unit);
  };
  const handlePointLoadChange = (index, key, value) => {
    const newLoads = [...pointLoads];
    newLoads[index][key] = parseFloat(value);
    setPointLoads(newLoads);
  };
  const positionUnits = ["mm", "cm"];
  const magnitudeUnits = ["kN", "N"];
  const positionConversionFactors = {
    mm: [1, 0.1],
    cm: [10, 1],
  };
  const magnitudeConversionFactors = {
    kN: [1, 1000],
    N: [0.001, 1],
  };
  const [distributedLoads, setDistributedLoads] = useState([
    { start_position: 500, end_position: 1500, magnitude: 5000 },
  ]);
  const [positionUnit, setPositionUnit] = useState("mm");
  const [magnitudeUnit, setMagnitudeUnit] = useState("kN");
  const handlePositionUnitChange = (unit) => {
    const factor =
      positionConversionFactors[unit][0] /
      positionConversionFactors[positionUnit][0];
    setDistributedLoads(
      distributedLoads.map((load) => ({
        ...load,
        start_position: load.start_position / factor,
        end_position: load.end_position / factor,
      }))
    );
    setPositionUnit(unit);
  };
  const handleMagnitudeUnitChange = (unit) => {
    const factor =
      magnitudeConversionFactors[unit][0] /
      magnitudeConversionFactors[magnitudeUnit][0];
    setDistributedLoads(
      distributedLoads.map((load) => ({
        ...load,
        magnitude: load.magnitude / factor,
      }))
    );
    setMagnitudeUnit(unit);
  };
  const handleLoadChange = (index, key, value) => {
    const newLoads = [...distributedLoads];
    newLoads[index][key] = parseFloat(value);
    setDistributedLoads(newLoads);
  };

  const [supports, setSupports] = useState([{ type: "pin", position: 0 }]);

  const youngModulesUnits = ["Mpa", "Pa"];
  const youngModulesFactors = {
    Mpa: [1, 1e6],
    Pa: [1e-6, 1],
  };
  const [youngModules, setYoungModules] = useState(210000);
  const [youngModulesUnit, setyoungModulesUnit] = useState("Mpa");
  const [InternalyoungModules, setInternalyoungModules] = useState(210000); // Always in mm
  const handleyoungModules = (value) => {
    setYoungModules(value);
    const factor = youngModulesFactors[youngModulesUnit][0];
    setInternalyoungModules(parseFloat(value) * factor);
  };
  const handleyoungModulesUnit = (unit) => {
    const newMetricValueInMM =
      parseFloat(youngModules) * youngModulesFactors[youngModulesUnit][0];
    const convertedValue = newMetricValueInMM / youngModulesFactors[unit][0];
    setyoungModulesUnit(unit);
    setYoungModules(convertedValue);
  };

  const ImperialyoungModulesUnits = ["psi"];
  const ImperialyoungModulesFactors = {
    psi: [1],
  };
  const [ImperialyoungModules, setImperialYoungModules] = useState(210000);
  const [ImperialyoungModulesUnit, setImperialyoungModulesUnit] =
    useState("psi");
  const [InternalImperialyoungModules, setInternalImperialyoungModules] =
    useState(210000); // Always in mm
  const handleImperialyoungModules = (value) => {
    setImperialYoungModules(value);
    const factor = ImperialyoungModulesFactors[ImperialyoungModulesUnit][0];
    setInternalImperialyoungModules(parseFloat(value) * factor);
  };
  const handleImperialyoungModulesUnit = (unit) => {
    const newMetricValueInMM =
      parseFloat(ImperialyoungModules) *
      ImperialyoungModulesFactors[ImperialyoungModulesUnit][0];
    const convertedValue =
      newMetricValueInMM / ImperialyoungModulesFactors[unit][0];
    setImperialyoungModulesUnit(unit);
    setImperialYoungModules(convertedValue);
  };

  const areaUnits = ["mm²", "cm²"];
  const areaFactors = {
    "mm²": [1, 0.01],
    "cm²": [100, 1],
  };
  const [area, setArea] = useState(400);
  const [areaUnit, setareaUnit] = useState("mm²");
  const [internalarea, setInternalarea] = useState(400); // Always in mm
  const handleareavalue = (value) => {
    setArea(value);
    const factor = areaFactors[areaUnit][0];
    setInternalarea(parseFloat(value) * factor);
  };
  const handleareaUnit = (unit) => {
    const newMetricValueInMM = parseFloat(area) * areaFactors[areaUnit][0];
    const convertedValue = newMetricValueInMM / areaFactors[unit][0];
    setareaUnit(unit);
    setArea(convertedValue);
  };

  const ImperialareaUnits = ["in²"];
  const ImperialareaFactors = {
    "in²": [1],
  };
  const [Imperialarea, setImperialArea] = useState(400);
  const [ImperialareaUnit, setImperialareaUnit] = useState("in²");
  const [internalImperialarea, setInternalImperialarea] = useState(400); // Always in mm
  const handleImperialareavalue = (value) => {
    setImperialArea(value);
    const factor = ImperialareaFactors[ImperialareaUnit][0];
    setInternalImperialarea(parseFloat(value) * factor);
  };
  const handleImperialareaUnit = (unit) => {
    const newMetricValueInMM =
      parseFloat(Imperialarea) * ImperialareaFactors[ImperialareaUnit][0];
    const convertedValue = newMetricValueInMM / ImperialareaFactors[unit][0];
    setImperialareaUnit(unit);
    setImperialArea(convertedValue);
  };

  const inertiaUnits = ["mm⁴", "cm⁴"];
  const inertiaFactors = {
    "mm⁴": [1, 1e-4],
    "cm⁴": [1e4, 1],
  };
  const [inertia, setinertia] = useState(1333.333);
  const [inertiaUnit, setinertiaUnit] = useState("mm⁴");
  const [internalinertia, setInternalinertia] = useState(1333.333); // Always in mm
  const handleinertiavalue = (value) => {
    setinertia(value);
    const factor = inertiaFactors[inertiaUnit][0];
    setInternalinertia(parseFloat(value) * factor);
  };
  const handleinertiaUnit = (unit) => {
    const newMetricValueInMM =
      parseFloat(inertia) * inertiaFactors[inertiaUnit][0];
    const convertedValue = newMetricValueInMM / inertiaFactors[unit][0];
    setinertiaUnit(unit);
    setinertia(convertedValue);
  };

  const ImperialinertiaUnits = ["in⁴"];
  const ImperialinertiaFactors = {
    "in⁴": [1],
  };
  const [Imperialinertia, setImperialinertia] = useState(1333.333);
  const [ImperialinertiaUnit, setImperialinertiaUnit] = useState("in⁴");
  const [internalImperialinertia, setInternalImperialinertia] =
    useState(1333.333); // Always in mm
  const handleImperialinertiavalue = (value) => {
    setImperialinertia(value);
    const factor = ImperialinertiaFactors[ImperialinertiaUnit][0];
    setInternalImperialinertia(parseFloat(value) * factor);
  };
  const handleImperialinertiaUnit = (unit) => {
    const newMetricValueInMM =
      parseFloat(Imperialinertia) *
      ImperialinertiaFactors[ImperialinertiaUnit][0];
    const convertedValue = newMetricValueInMM / ImperialinertiaFactors[unit][0];
    setImperialinertiaUnit(unit);
    setImperialinertia(convertedValue);
  };

  const [deflectionData, setDeflectionData] = useState([]);
  const [shearForceData, setShearForceData] = useState([]);
  const [bendingMomentData, setBendingMomentData] = useState([]);
  const [reactionForce, setReactionForce] = useState([]);
  const [externalForce, setExternalForce] = useState([]);

  const addSupport = () => {
    setSupports([...supports, { type: "pin", position: 0 }]);
  };

  const addPointLoad = () => {
    setPointLoads([...pointLoads, { position: 0, magnitude: 0 }]);
  };

  const addDistributedLoad = () => {
    setDistributedLoads([
      ...distributedLoads,
      { start_position: 0, end_position: 0, magnitude: 0 },
    ]);
  };
  const handleSupportChange = (index, field, value) => {
    const newSupports = [...supports];
    newSupports[index][field] = value;
    setSupports(newSupports);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/process", {
        length: Number(internallength),
        point_loads: pointLoads,
        distributed_loads: distributedLoads,
        supports: supports.map((s) => ({
          type: s.type,
          position: Number(s.position),
        })),
        youngmodules: Number(InternalyoungModules),
        area: Number(internalarea),
        inertia: Number(internalinertia),
      });
      console.log("RESPONSE", response);

      setDeflectionData(response.data.deflection_data);
      console.log("Deflection",response.data.deflection_data);
      
      setShearForceData(response.data.shear_force_data);
      setBendingMomentData(response.data.bending_moment_data);
      if (response.data.reaction_force) {
        setReactionForce(response.data.reaction_force);
      } else {
        console.error("Reaction force data is invalid or missing.");
      }
      if (response.data.applied_external_forces) {
        setExternalForce(response.data.applied_external_forces);
      } else {
        console.error("External force data is missing.");
      }
    } catch (error) {
      console.error("There was an error processing the data!", error);
    }

    console.log("Form submitted");
    console.log("Length:", internallength);
    console.log("Young's Modules:", InternalyoungModules);
    console.log("Supports:", supports);
    console.log("Distributed Loads:", distributedLoads);
    console.log("data", response);
    console.log(response.reaction_force);
    console.log(reactionForce);
  };
  console.log(reactionForce);

  
  const reactionForceChartData = {
    // print the reaction force
    labels: reactionForce.map((item) => item.position), // Assuming 'position' is part of reaction_force
    datasets: [
      {
        label: "Reaction Force (N)", // You can customize the unit based on your needs
        data: reactionForce.map((item) => {
          const forceValue = item.reactions.m; // Extract the force value
          console.log("Force Value😍:", forceValue); // Log the force value to the console
          return forceValue; // Return the force value for the data array
        }),
        fill: false,
        borderColor: "rgba(255,206,86,1)", // Choose a different color to differentiate this chart
        tension: 0.1,
      },
    ],
  };

  const externalForcesChartData = {
    labels: externalForce.map((item) => item.position), // Assuming 'position' is part of external forces
    datasets: [
      {
        label: "External Forces (N)", // Customize as needed
        data: externalForce.map((item) => item.force), // Assuming 'force' is the external force value
        fill: false,
        borderColor: "rgba(153,102,255,1)", // Choose a distinct color for external forces
        tension: 0.1,
      },
    ],
  };

  const deflectionChartData = {
    labels: deflectionData.map((item) => item.position),
    datasets: [
      {
        label: "Deflection (mm)",
        data: deflectionData.map((item) => item.deflection),
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
    ],
  };

  const shearForceChartData = {
    labels: shearForceData.map((item) => item.position),
    datasets: [
      {
        label: "Shear Force (N)",
        data: shearForceData.map((item) => item.shear_force),
        fill: false,
        borderColor: "rgba(255,99,132,1)",
        tension: 0.1,
      },
    ],
  };

  const bendingMomentChartData = {
    labels: bendingMomentData.map((item) => item.position),
    datasets: [
      {
        label: "Bending Moment (Nm)",
        data: bendingMomentData.map((item) => item.bending_moment),
        fill: false,
        borderColor: "rgba(54,162,235,1)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Position (mm)",
        },
      },
      y: {
        title: {
          display: true,
          text: "Value",
        },
      },
    },
  };

  return (
    <>
      <div className="Background-Black"></div>
      <div className="ME-navbar-links">
        <ul className="ME-navbar-links-ul">
          <li className="ME-navbar-links-li">
            <Link to="/PadEyecalculatorPage">Pad eye</Link>
          </li>
          <li className="ME-navbar-links-li">
            <Link to="/Singlepage">Beam Properties</Link>
          </li>
          <li className="ME-navbar-links-li">
            <Link to="/BeamDeflectionCalculator">Beam Deflection</Link>
          </li>
          <li className="ME-navbar-links-li">
            <Link to="/AboutUs">About US</Link>
          </li>
        </ul>
      </div>
      <section className="background-white">
        <div className="calculator-first-section-div">
          <div
            className="calculator-first-section-imgdiv"
            style={{ height: "80vh", overflow: "hidden" }}
          >
            <img
              className="calculator-first-section-imgdiv-img"
              src={Backgroundimg}
              alt=""
              style={{ transform: "translate(3vw, -5vw)" }}
            />
            <div className="calculator-first-section-imgdiv-shades" />
          </div>
          <div
            className="calculator-first-section-textdiv"
            style={{ top: "10vw" }}
          >
            <h3 className="calculator-first-section-textdiv-h1">
              Beam deflection calculator
            </h3>
            <p className="calculator-first-section-textdiv-p">
              Beam deflection calculator is a powerful tool used by
              <br />
              engineers and architects for analyzing the behavior of
              <br />
              beams under various loading conditions.
            </p>
          </div>
        </div>

        <section className="calculator-defination-section ">
          <br />
          <hr className="Beam-properties-calculator-hr" />
          <br />
          <div className={`calculator-defination-div BeamDeflection`}>
            <h3
              className={`Beam-properties-calculator-heading BeamDeflection ${
                expanded ? "expanded" : ""
              }`}
            >
              <span>Beam Deflection Calculator</span>
            </h3>
            <div
              className={`calculator-defination-section-div BeamDeflection ${
                expanded ? "expanded" : ""
              }`}
            >
              <h3 className="Beam-properties-calculator-heading">
                <span></span>
              </h3>
              <br />
              <br />
              <h3 className="calculator-defination-section first-important">
                With the help of the Beam Deflection Calculator, you can easily
                <br />
                examine how different kinds of beams deflect under various
                loading scenarios.
                <br />
                Beam deflection is an important aspect in structural engineering
                and construction.
              </h3>
              <br />
              <h3 className="calculator-defination-section second-important">
                It ensures the structural integrity of the beam and helps to
                preventany potential deformation or
                <br /> damage. You can easily find the deflection at any point
                along the length of the beam
                <br /> by entering parameters like the beam's material,
                dimensions, and applied loads.
              </h3>
              <br />
              <h3 className="calculator-defination-section third-important">
                By using this calculator you can easily find the beam's
                reactions,
                <br /> maximum deflection, bending moment & shear stress.
              </h3>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <hr className="Beam-properties-calculator-hr" />
          <br />
          <br />
          <br />
          <section className="structure-analysis-calculator-calculator">
            <div className="structure-analysis-calculator-calculator-left">
              <br />
              <br />
              <button onClick={() => handleOptionChange("option1")}>
                Length of Beam
              </button>
              <button onClick={() => handleOptionChange("option2")}>
                Young's Modules
              </button>
              <button onClick={() => handleOptionChange("option3")}>
                Cross Section
              </button>
              <button onClick={() => handleOptionChange("option4")}>
                Support
              </button>
              <button onClick={() => handleOptionChange("option5")}>
                Load
              </button>
              <br />
              <br />
            </div>
            <div className="structure-analysis-calculator-calculator-center center">
              {selectedOption === "option1" && <div style={{}}></div>}
              {selectedOption === "option2" && <div></div>}
              {selectedOption === "option3" && <div></div>}
              {selectedOption === "option4" && <div style={{}}></div>}
              {selectedOption === "option5" && <div style={{}}></div>}
            </div>
            <div className="structure-analysis-calculator-calculator-right">
              <form onSubmit={handleSubmit}>
                <br />
                {selectedOption === "option1" && (
                  <>
                    <LengthOfBeam
                      MetricOrImperial={MetricOrImperial}
                      MetricOrImperialbtn={toggleMetricOrImperial}
                      BeamLengthvalue={length}
                      BeamLengthonChange={(e) =>
                        handlelengthvalue(e.target.value)
                      }
                      BeamLengthSelectvalue={lengthUnit}
                      BeamLengthSelectonChange={(e) =>
                        handlelengthUnit(e.target.value)
                      }
                      BeamLengthSelectOptions={lengthUnits.map((unit) => (
                        <option key={unit} value={unit}>
                          {unit}
                        </option>
                      ))}
                      ImperialBeamLengthvalue={Imperiallength}
                      ImperialBeamLengthonChange={(e) =>
                        handleImperiallengthvalue(e.target.value)
                      }
                      ImperialBeamLengthSelectvalue={ImperiallengthUnit}
                      ImperialBeamLengthSelectonChange={(e) =>
                        handleImperiallengthUnit(e.target.value)
                      }
                      ImperialBeamLengthSelectOptions={ImperiallengthUnits.map(
                        (unit) => (
                          <option key={unit} value={unit}>
                            {unit}
                          </option>
                        )
                      )}
                    />
                    <SolutionsOfBeamDeflaction
                      DataofShearStressPlot={
                        <Line
                          data={deflectionChartData}
                          options={options}
                          width="200px"
                          height="100px"
                        />
                      }
                      DataofBendingMomentPlot={
                        <Line
                          data={shearForceChartData}
                          options={options}
                          width="200px"
                          height="100px"
                        />
                      }
                      DataofDeflactionPlot={
                        <Line
                          data={bendingMomentChartData}
                          options={options}
                          width="200px"
                          height="100px"
                        />
                      }
                      DataofReactionForcePlot={
                        <Line
                          data={reactionForceChartData}
                          options={options}
                          width="200px"
                          height="100px"
                        />
                      }
                      DataofExternalForcesPlot={
                        <Line
                          data={externalForcesChartData}
                          options={options}
                          width="200px"
                          height="100px"
                        />
                      }
                      togglefunction={isActive3}
                      toggleBreaks={toggleClass3}
                    />
                  </>
                )}
                {selectedOption === "option2" && (
                  <>
                    <YoungsModules
                      MetricOrImperial={MetricOrImperial}
                      MetricOrImperialbtn={toggleMetricOrImperial}
                      // YoungsModulesValue={youngModules}
                      // YoungsModulesValueOnchange={(e) => setYoungModules(e.target.value)}
                      youngModulesvalue={youngModules}
                      youngModulesonChange={(e) =>
                        handleyoungModules(e.target.value)
                      }
                      youngModulesUnitvalue={youngModulesUnit}
                      youngModulesUnitonChange={(e) =>
                        handleyoungModulesUnit(e.target.value)
                      }
                      youngModulesOption={youngModulesUnits.map((unit) => (
                        <option key={unit} value={unit}>
                          {unit}
                        </option>
                      ))}
                      ImperialyoungModulesvalue={ImperialyoungModules}
                      ImperialyoungModulesonChange={(e) =>
                        handleImperialyoungModules(e.target.value)
                      }
                      ImperialyoungModulesUnitvalue={ImperialyoungModulesUnit}
                      ImperialyoungModulesUnitonChange={(e) =>
                        handleImperialyoungModulesUnit(e.target.value)
                      }
                      ImperialyoungModulesOption={ImperialyoungModulesUnits.map(
                        (unit) => (
                          <option key={unit} value={unit}>
                            {unit}
                          </option>
                        )
                      )}
                    />
                    <SolutionsOfBeamDeflaction
                      DataofShearStressPlot={
                        <Line
                          data={deflectionChartData}
                          options={options}
                          width="200px"
                          height="100px"
                        />
                      }
                      DataofBendingMomentPlot={
                        <Line
                          data={shearForceChartData}
                          options={options}
                          width="200px"
                          height="100px"
                        />
                      }
                      DataofDeflactionPlot={
                        <Line
                          data={bendingMomentChartData}
                          options={options}
                          width="200px"
                          height="100px"
                        />
                      }
                      DataofReactionForcePlot={
                        <Line
                          data={reactionForceChartData}
                          options={options}
                          width="200px"
                          height="100px"
                        />
                      }
                      DataofExternalForcesPlot={
                        <Line
                          data={externalForcesChartData}
                          options={options}
                          width="200px"
                          height="100px"
                        />
                      }
                      togglefunction={isActive3}
                      toggleBreaks={toggleClass3}
                    />
                  </>
                )}
                {selectedOption === "option3" && (
                  <>
                    <CrossSection
                      MetricOrImperial={MetricOrImperial}
                      MetricOrImperialbtn={toggleMetricOrImperial}
                      A={area}
                      AOnchange={(e) => handleareavalue(e.target.value)}
                      UnitValue={areaUnit}
                      UnitValueOnchange={(e) => handleareaUnit(e.target.value)}
                      AreaOption={areaUnits.map((unit, index) => (
                        <option key={unit + "-" + index} value={unit}>
                          {unit}
                        </option>
                      ))}
                      ImperialA={Imperialarea}
                      ImperialAOnchange={(e) =>
                        handleImperialareavalue(e.target.value)
                      }
                      ImperialUnitValue={ImperialareaUnit}
                      ImperialUnitValueOnchange={(e) =>
                        handleImperialareaUnit(e.target.value)
                      }
                      ImperialAreaOption={ImperialareaUnits.map(
                        (unit, index) => (
                          <option key={unit + "-" + index} value={unit}>
                            {unit}
                          </option>
                        )
                      )}
                      I={inertia}
                      IOnchange={(e) => handleinertiavalue(e.target.value)}
                      inertiaUnitvalue={inertiaUnit}
                      inertiaUnitonChange={(e) =>
                        handleinertiaUnit(e.target.value)
                      }
                      InteriaOption={inertiaUnits.map((unit, index) => (
                        <option key={unit + "-" + index} value={unit}>
                          {unit}
                        </option>
                      ))}
                      ImperialI={Imperialinertia}
                      ImperialIOnchange={(e) =>
                        handleImperialinertiavalue(e.target.value)
                      }
                      ImperialinertiaUnitvalue={ImperialinertiaUnit}
                      ImperialinertiaUnitonChange={(e) =>
                        handleImperialinertiaUnit(e.target.value)
                      }
                      ImperialInteriaOption={ImperialinertiaUnits.map(
                        (unit, index) => (
                          <option key={unit + "-" + index} value={unit}>
                            {unit}
                          </option>
                        )
                      )}
                    />
                    <SolutionsOfBeamDeflaction
                      DataofShearStressPlot={
                        <Line
                          data={deflectionChartData}
                          options={options}
                          width="200px"
                          height="100px"
                        />
                      }
                      DataofBendingMomentPlot={
                        <Line
                          data={shearForceChartData}
                          options={options}
                          width="200px"
                          height="100px"
                        />
                      }
                      DataofDeflactionPlot={
                        <Line
                          data={bendingMomentChartData}
                          options={options}
                          width="200px"
                          height="100px"
                        />
                      }
                      DataofReactionForcePlot={
                        <Line
                          data={reactionForceChartData}
                          options={options}
                          width="200px"
                          height="100px"
                        />
                      }
                      DataofExternalForcesPlot={
                        <Line
                          data={externalForcesChartData}
                          options={options}
                          width="200px"
                          height="100px"
                        />
                      }
                      togglefunction={isActive3}
                      toggleBreaks={toggleClass3}
                    />
                  </>
                )}
                {selectedOption === "option4" && (
                  <>
                    <SupportPage
                      addSupport={
                        <button
                          type="button"
                          className="BeamLinkBtntoBeamProperies-Addsupport"
                          onClick={addSupport}
                        >
                          Add Support
                        </button>
                      }
                      Supports={supports.map((support, index) => (
                        <div
                          key={index}
                          style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-evenly",
                            alignItems: "center",
                          }}
                        >
                          <div
                            className="Calculator-Side-A"
                            style={{ width: "25%", justifyContent: "center" }}
                          >
                            <br />
                            <div
                              className="input-and-select-div"
                              style={{ justifyContent: "center" }}
                            >
                              <select
                                value={support.type}
                                onChange={(e) =>
                                  handleSupportChange(
                                    index,
                                    "type",
                                    e.target.value
                                  )
                                }
                                style={{
                                  outline: "none",
                                  border: "none",
                                }}
                              >
                                <option value="pinned">Pinned</option>
                                <option value="roller">Roller</option>
                                <option value="fixed">Fixed</option>
                              </select>
                            </div>
                          </div>
                          <div
                            className="Calculator-Side-A"
                            style={{ width: "25%", justifyContent: "center" }}
                          >
                            <br />
                            <div
                              className="input-and-select-div"
                              style={{ justifyContent: "center" }}
                            >
                              <input
                                style={{
                                  border: "none",
                                  float: "right",
                                  textAlign: "center",
                                  width: "70%",
                                }}
                                type="number"
                                value={support.position}
                                onChange={(e) =>
                                  handleSupportChange(
                                    index,
                                    "position",
                                    e.target.value
                                  )
                                }
                                max={length}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    />
                    <SolutionsOfBeamDeflaction
                      DataofShearStressPlot={
                        <Line
                          data={deflectionChartData}
                          options={options}
                          width="200px"
                          height="100px"
                        />
                      }
                      DataofBendingMomentPlot={
                        <Line
                          data={shearForceChartData}
                          options={options}
                          width="200px"
                          height="100px"
                        />
                      }
                      DataofDeflactionPlot={
                        <Line
                          data={bendingMomentChartData}
                          options={options}
                          width="200px"
                          height="100px"
                        />
                      }
                      DataofReactionForcePlot={
                        <Line
                          data={reactionForceChartData}
                          options={options}
                          width="200px"
                          height="100px"
                        />
                      }
                      DataofExternalForcesPlot={
                        <Line
                          data={externalForcesChartData}
                          options={options}
                          width="200px"
                          height="100px"
                        />
                      }
                      togglefunction={isActive3}
                      toggleBreaks={toggleClass3}
                    />
                  </>
                )}
                {selectedOption === "option5" && (
                  <>
                    <LoadPage
                      max={length}
                      AdddistributedLoads={distributedLoads.map(
                        (load, index) => (
                          <div key={index}>
                            {/* <label>Distributed Load Start Position (mm):</label> */}
                            <div
                              style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <h3 className="claculator-conversation-title">
                                Start Location :
                              </h3>
                              <div
                                className="Calculator-Side-A"
                                style={{
                                  width: "50%",
                                  justifyContent: "center",
                                }}
                              >
                                <br />
                                <h3 className="sigma-symbol"></h3>
                                <div
                                  className="input-and-select-div"
                                  style={{ width: "100%" }}
                                >
                                  <input
                                    style={{
                                      border: "none",
                                      float: "right",
                                      textAlign: "center",
                                      width: "100%",
                                    }}
                                    type="number"
                                    value={load.start_position}
                                    max={length}
                                    onChange={(e) =>
                                      handleLoadChange(
                                        index,
                                        "start_position",
                                        e.target.value
                                      )
                                    }
                                  />
                                  <select
                                    value={positionUnit}
                                    onChange={(e) =>
                                      handlePositionUnitChange(e.target.value)
                                    }
                                  >
                                    {positionUnits.map((unit) => (
                                      <option key={unit} value={unit}>
                                        {unit}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div
                              style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <h3 className="claculator-conversation-title">
                                End Location :
                              </h3>
                              <div
                                className="Calculator-Side-A"
                                style={{
                                  width: "50%",
                                  justifyContent: "center",
                                }}
                              >
                                <br />
                                <h3 className="sigma-symbol"></h3>
                                <div
                                  className="input-and-select-div"
                                  style={{ width: "100%" }}
                                >
                                  <input
                                    style={{
                                      border: "none",
                                      float: "right",
                                      textAlign: "center",
                                      width: "100%",
                                    }}
                                    value={load.end_position}
                                    max={length}
                                    onChange={(e) =>
                                      handleLoadChange(
                                        index,
                                        "end_position",
                                        e.target.value
                                      )
                                    }
                                  />
                                  <select
                                    value={positionUnit}
                                    onChange={(e) =>
                                      handlePositionUnitChange(e.target.value)
                                    }
                                  >
                                    {positionUnits.map((unit) => (
                                      <option key={unit} value={unit}>
                                        {unit}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div
                              style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <h3 className="claculator-conversation-title">
                                Magnitude :
                              </h3>
                              <div
                                className="Calculator-Side-A"
                                style={{
                                  width: "50%",
                                  justifyContent: "center",
                                }}
                              >
                                <br />
                                <h3 className="sigma-symbol"></h3>
                                <div
                                  className="input-and-select-div"
                                  style={{ width: "100%" }}
                                >
                                  <input
                                    style={{
                                      border: "none",
                                      float: "right",
                                      textAlign: "center",
                                      width: "100%",
                                    }}
                                    type="number"
                                    value={load.magnitude}
                                    onChange={(e) =>
                                      handleLoadChange(
                                        index,
                                        "magnitude",
                                        e.target.value
                                      )
                                    }
                                  />
                                  <select
                                    value={magnitudeUnit}
                                    onChange={(e) =>
                                      handleMagnitudeUnitChange(e.target.value)
                                    }
                                  >
                                    {magnitudeUnits.map((unit) => (
                                      <option key={unit} value={unit}>
                                        {unit}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      )}
                      // AddPointLoad={ }
                      AddPointLoad={
                        <button
                          className="BeamLinkBtntoBeamProperies-AddLoad BeamLinkBtntoBeamProperies"
                          onClick={addPointLoad}
                          type="button"
                        >
                          Add +
                        </button>
                      }
                      AddDistributedLoad={
                        <button
                          className="BeamLinkBtntoBeamProperies-AddLoad BeamLinkBtntoBeamProperies"
                          onClick={addDistributedLoad}
                          type="button"
                        >
                          Add Distributed Load +
                        </button>
                      }
                      Analysisbtn={<button type="submit">Analyze Beam</button>}
                      PointLoad={pointLoads.map((load, index) => (
                        <>
                          <h3 style={{ marginBottom: "10px" }}>
                            Point Load {index + 1}
                          </h3>
                          <div
                            style={{
                              width: "100%",
                              display: "flex",
                              justifyContent: "space-evenly",
                              alignItems: "center",
                            }}
                          >
                            <div
                              className="Calculator-Side-A"
                              style={{ width: "25%", justifyContent: "center" }}
                            >
                              <div
                                className="input-and-select-div"
                                style={{ justifyContent: "center" }}
                              >
                                <input
                                  style={{
                                    border: "none",
                                    textAlign: "center",
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                  type="number"
                                  value={load.position}
                                  onChange={(e) =>
                                    handlePointLoadChange(
                                      index,
                                      "position",
                                      e.target.value
                                    )
                                  }
                                  step="1"
                                  min="0"
                                  max={length}
                                  placeholder="Position"
                                />
                                <select
                                  value={pointLoadPositionUnit}
                                  onChange={(e) =>
                                    handlePointLoadPositionUnitChange(
                                      e.target.value
                                    )
                                  }
                                >
                                  {positionUnits.map((unit) => (
                                    <option key={unit} value={unit}>
                                      {unit}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                            <div
                              className="Calculator-Side-A"
                              style={{ width: "25%", justifyContent: "center" }}
                            >
                              <div
                                className="input-and-select-div"
                                style={{
                                  justifyContent: "center",
                                  width: "100%",
                                }}
                              >
                                <input
                                  style={{
                                    border: "none",
                                    textAlign: "center",
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                  type="number"
                                  value={load.magnitude}
                                  onChange={(e) =>
                                    handlePointLoadChange(
                                      index,
                                      "magnitude",
                                      e.target.value
                                    )
                                  }
                                  placeholder="Magnitude"
                                />
                                <select
                                  value={pointLoadMagnitudeUnit}
                                  onChange={(e) =>
                                    handlePointLoadMagnitudeUnitChange(
                                      e.target.value
                                    )
                                  }
                                >
                                  {magnitudeUnits.map((unit) => (
                                    <option key={unit} value={unit}>
                                      {unit}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          </div>
                        </>
                      ))}
                      Beamlengthvalue={length}
                    />
                    <SolutionsOfBeamDeflaction
                      LoadBendingDeflectionclasses={
                        "LoadBendingDeflectionclasses"
                      }
                      DataofShearStressPlot={
                        <Line
                          data={deflectionChartData}
                          options={options}
                          width="200px"
                          height="100px"
                        />
                      }
                      DataofBendingMomentPlot={
                        <Line
                          data={shearForceChartData}
                          options={options}
                          width="200px"
                          height="100px"
                        />
                      }
                      DataofDeflactionPlot={
                        <Line
                          data={bendingMomentChartData}
                          options={options}
                          width="200px"
                          height="100px"
                        />
                      }
                      DataofReactionForcePlot={
                        <Line
                          data={reactionForceChartData}
                          options={options}
                          width="200px"
                          height="100px"
                        />
                      }
                      DataofExternalForcesPlot={
                        <Line
                          data={externalForcesChartData}
                          options={options}
                          width="200px"
                          height="100px"
                        />
                      }
                      togglefunction={isActive3}
                      toggleBreaks={toggleClass3}
                    />
                  </>
                )}
                <button type="submit">Analyze Beam</button>
              </form>
            </div>
          </section>

          <br />
          <br />
          <br />
          <br />
          <div
            className={
              isActive3
                ? " Beamdeflaction height110 "
                : " Beamdeflaction height110 height0 "
            }
          ></div>
          <hr className="Beam-properties-calculator-hr" />
          <br />
          <br />
          <br />
          <br />
          <BeamDeflection />
          <br />
          <br />
          <br />
          <hr className="Beam-properties-calculator-hr" />
          <br />
          <br />
          <br />
          <br />
          <br />
          {/* Include the image here */}
          {response.plot_image && (
            <div style={{ textAlign: "center" }}>
              <img
                src={`data:image/png;base64,${response.plot_image}`}
                alt="Beam analysis plot"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          )}

          <Load />
          <hr className="Beam-properties-calculator-hr" />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </section>
      </section>
      <footer className="footer"></footer>
    </>
  );
}
