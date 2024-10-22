import React, { useState, useEffect } from 'react';
import { XYPlot, XAxis, LabelSeries, LineSeries, } from 'react-vis';
import 'react-vis/dist/style.css';
import { FaMapMarkerAlt as PinnedIcon } from 'react-icons/fa';
import { FaBullseye as RollerIcon } from 'react-icons/fa';
import { FaLock as FixedIcon } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";
import Backgroundimg from '../image folder/Deflaction2.jpg'
import BeamDeflection from './Beam Deflection dropdown/Beam Deflection'
import Load from './Beam Deflection dropdown/Load'
import './Beam Deflection dropdown/Beam Deflection.css'
import { Link } from 'react-router-dom'
import LengthOfBeam from './BeamDeflactionCalculator/LengthOfBeam'
import YoungsModules from './BeamDeflactionCalculator/YoungsModules'
import CrossSection from './BeamDeflactionCalculator/CrossSection'
import SupportPage from './BeamDeflactionCalculator/Support'
import LoadPage from './BeamDeflactionCalculator/Load'
import SolutionsOfBeamDeflaction from './SolutionsOfBeamDeflaction';
export default function BeamDeflectionCalculator() {
  const [selectedOption, setSelectedOption] = useState("option1");
  const handleOptionChange = (option) => {
    setSelectedOption(option)
  }

  const [isActive3, setIsActive3] = useState(true);

  const toggleClass3 = () => {
    setIsActive3(previsActive3 => !previsActive3);

  };
  const [MetricOrImperial, setMetricOrImperial] = useState("option1");

  const toggleMetricOrImperial = (option) => {
    setMetricOrImperial(option);

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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [expanded, Sectionthird]);





  // calculator functions
  const LengthOfBeamunits = ['mm', 'm'];
  const LengthOfBeamconversionFactors = {
    mm: [1, 0.001, 0.0393701],
    m: [1000, 1, 39.37],
  };

  const [length, setLength] = useState(2000);
  const [LengthOfBeamSelectedUnit, setLengthOfBeamSelectedUnit] = useState('mm');
  const [unitText, setUnitText] = useState('N');
  const [unitText2, setUnitText2] = useState('mm');

  const handleLengthOfBeamChange = (value) => {
    setLength(value);
  };

  const handleLengthOfBeamUnitchange = (newUnit) => {
    const lengthfactor = LengthOfBeamconversionFactors[LengthOfBeamSelectedUnit][LengthOfBeamunits.indexOf(newUnit)];
    setLength((parseFloat(length) * lengthfactor).toFixed(2));
    setLengthOfBeamSelectedUnit(newUnit);

    switch (newUnit) {
      case 'mm':
        setUnitText('N');
        setUnitText2('mm');
        break;
      case 'm':
        setUnitText('KN');
        setUnitText2('m');
        break;
      case 'in':
        setUnitText('Lb');
        setUnitText2('in');
        break;
      default:
        setUnitText('N');
        setUnitText2('mm');
        break;
    }
  };

  // const [E, setE] = useState(29007547.5); // Young's Modulus in psi
  const units = ['Mpa', 'Pa', 'Psi'];
  const conversionFactors = {
    Mpa: [1, 1, 1],
    Pa: [1, 1, 1],
    Psi: [1, 1, 1],
  };

  const [E, setE] = useState(200000);
  const [selectedUnit, setSelectedUnit] = useState('Mpa');

  const handleInputChange = (value) => {
    setE(value);
  };

  const handleUnitChange = (unit) => {
    setSelectedUnit(unit);
    const factor = conversionFactors[unit][units.indexOf(selectedUnit)];
    setE((parseFloat(E) / factor));
  };

  const [A, setA] = useState(2.759006); // Area in in^2
  const handleAChange = (value) => {
    setA(value);
  };
  const [I, setI] = useState(16.0007); // Moment of Inertia in in^4
  const handleIChange = (value) => {
    setI(value);
  };
  const [distributedLoads, setDistributedLoads] = useState([]);
  const [reactions, setReactions] = useState({ RA: 0, RB: 0 });
  const [beam, setBeam] = useState({ length: 10 });
  const [Supports, setSupports] = useState([
    { position: 0, type: 'roller' },
    { position: 2000, type: 'fixed' },
  ]);

  const [pointLoads, setPointLoads] = useState([{ position: 0, magnitude: 0 }]);

  const [load, setLoad] = useState({ start: 0, end: 0, startMagnitude: 0, endMagnitude: 0 });

  useEffect(() => {
    calculateReactions();
  }, [pointLoads, distributedLoads, Supports]);

  const addPointLoad = () => {
    setPointLoads([...pointLoads, { position: 0, magnitude: 0 }]);
  };

  const removePointLoad = (index) => {
    setPointLoads(pointLoads.filter((_, i) => i !== index));
  };

  const addDistributedLoad = () => {
    setDistributedLoads([...distributedLoads, { start: 0, end: 0, startMagnitude: 0, endMagnitude: 0 }]);
  };

  const removeDistributedLoad = (index) => {
    setDistributedLoads(distributedLoads.filter((_, i) => i !== index));
  };

  const addSupport = () => {
    setSupports([...Supports, { type: 'pinned', position: 0 }]);
  };

  const removeSupport = (index) => {
    setSupports(Supports.filter((_, i) => i !== index));
  };

  const handleSupportChange = (index, key, value) => {
    const newSupports = [...Supports];
    newSupports[index][key] = key === 'position' ? parseFloat(value) : value;
    setSupports(newSupports);
  };

  const handleLoadChange = (key, value) => {
    setLoad({
      ...load,
      [key]: parseFloat(value),
    });
  };

  const handlePointLoadChange = (index, key, value) => {
    const newPointLoads = [...pointLoads];
    newPointLoads[index][key] = parseFloat(value);
    setPointLoads(newPointLoads);
  };

  // const getSupportIcon = (type) => {
  //   switch (type) {
  //     case 'pinned':
  //       return <PinnedIcon width={20} height={20} />;
  //     case 'roller':
  //       return <RollerIcon width={20} height={20} />;
  //     case 'fixed':
  //       return <FixedIcon width={20} height={20} />;
  //     default:
  //       return null;
  //   }
  // };

  const renderSupportsAndLoads = () => {
    const renderSupports = () => (
      Supports.map((support, index) => (
        <g key={index}>
          <rect
            x={(support.position / length) * 500}
            y={50}
            width={10}
            height={20}
            fill={support.type === 'fixed' ? `'<PinnedSupport></PinnedSupport>'` : support.type === 'pinned' ? 'green' : 'yellow'}
          />
          <text x={(support.position / length) * 500 - 10} y={80} fill="white">
            {support.type.charAt(0).toUpperCase()}
          </text>
        </g>
      ))
    );

    const renderLoad = () => {
      const startX = (load.start / length) * 500;
      const endX = (load.end / length) * 500;
      const gradientId = 'gradient';
      return (
        <>
          <line
            x1={startX}
            y1={20}
            x2={endX}
            y2={20}
            stroke={({ gradientId })}
            strokeWidth={10}
          />
          <text x={(startX + endX) / 2 - 50} y={-20} fill="#fff">Distributed Load 1</text>
          <text x={startX - 30} y={0} fill="#fff">U: {load.valueStart}</text>
          <text x={endX + 10} y={0} fill="#fff">U: {load.valueEnd}</text>
        </>
      );
    };

    const renderPointLoads = () => (
      pointLoads.map((pointLoad, index) => (
        <g key={index}>
          <circle
            cx={(pointLoad.position / length) * 500}
            cy={50}
            r={5}
            fill="red"
          />
          <text x={(pointLoad.position / length) * 500 - 50} y={20} fill="#fff">
            Point Load {pointLoad.value}N
          </text>
        </g>
      ))
    );

    return (
      <svg width="length" height="100" style={{
        width: '90%',
        overflow: 'visible',
        position: 'relative',
        left: '50%',
        transform: 'translate(-50%,50%)'
      }}>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: 'gray', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'black', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <line x1="0" y1="50" x2="500" y2="50" stroke="black" strokeWidth="2" />
        {renderSupports()}
        {renderLoad()}
        {renderPointLoads()}
      </svg>
    );
  };






  const renderSupportsAndLoadsforReactions = () => {
    const renderSupports = () => (
      Supports.map((support, index) => (
        <g key={index}>
          <rect
            x={(support.position / length) * 500}
            y={50}
            width={10}
            height={20}
            fill={support.type === 'fixed' ? `'<PinnedSupport></PinnedSupport>'` : support.type === 'pinned' ? 'green' : 'yellow'}
          />
          <text x={(support.position / length) * 500 - 10} y={80} fill="white">
            {support.type.charAt(0).toUpperCase()}
          </text>
        </g>
      ))
    );

    const renderLoad = () => {
      const startX = (load.start / length) * 500;
      const endX = (load.end / length) * 500;
      const gradientId = 'gradient';
      return (
        <>
          <line
            x1={startX}
            y1={20}
            x2={endX}
            y2={20}
            stroke={({ gradientId })}
            strokeWidth={10}
          />
          <text x={(startX + endX) / 2 - 50} y={-20} fill="#fff">Distributed Load 1</text>
          <text x={startX - 30} y={0} fill="#fff">U: {load.valueStart}</text>
          <text x={endX + 10} y={0} fill="#fff">U: {load.valueEnd}</text>
        </>
      );
    };

    const renderPointLoads = () => (
      pointLoads.map((pointLoad, index) => (
        <g key={index}>
          <circle
            cx={(pointLoad.position / length) * 500}
            cy={50}
            r={5}
            fill="red"
          />
          <text x={(pointLoad.position / length) * 500 - 50} y={20} fill="#fff">
            Point Load {pointLoad.value}N
          </text>
        </g>
      ))
    );

    return (
      <svg width="length" height="100" style={{
        width: '90%',
        overflow: 'visible',
        position: 'relative',
        left: '50%',
        transform: 'translate(-50%,50%)'
      }}>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: 'gray', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'black', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <line x1="0" y1="50" x2="510" y2="50" stroke="black" strokeWidth="2" />
        {renderSupports()}
        {renderLoad()}
        {renderPointLoads()}
      </svg>
    );
  };






  const renderReactions = () => {
    const data = [
      { x: 0, y: 0 },
      { x: length, y: 0 },
    ];
    return (
      <>
        <XYPlot
          width={600}
          height={100}
          className='Beamplot'
        >
          <XAxis />
          <LineSeries
            data={data}
            style={{ stroke: 'black', strokeWidth: 2, transform: 'translate(36px, 10px)' }}
          />
        </XYPlot>
      </>
    );
  };

  const RenderSupports = () => {
    const renderSupports = () => (
      Supports.map((support, index) => (
        <g key={index}>
          <rect
            x={(support.position / length) * 550}
            y={50}
            width={10}
            height={20}
            fill={support.type === 'fixed' ? `'<PinnedSupport></PinnedSupport>'` : support.type === 'pinned' ? 'green' : 'yellow'}
          />
        </g>
      ))
    );
    // const data = [
    //   { x: 0, y: 50 },
    //   { x: length, y: 50 },
    // ];
    return (
      <svg width="length" height="100" style={{
        width: '90%',
        overflow: 'visible',
      }}>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: 'gray', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'black', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <line x1="0" y1="50" x2="550" y2="50" stroke="black" strokeWidth="2" />
        {renderSupports()}
      </svg>
    );
  };

  const RenderLoads = () => {

    const renderPointLoads = () => (
      pointLoads.map((pointLoad, index) => (
        <g key={index}>
          <circle
            cx={(pointLoad.position / length) * 500}
            cy={50}
            r={5}
            fill="red"
          />
          <text x={(pointLoad.position / length) * 500 - 50} y={20} fill="#000">
            Point Load {pointLoad.value}N
          </text>
        </g>
      ))
    );
    // const data = [
    //   { x: 0, y: 50 },
    //   { x: length, y: 50 },
    // ];
    return (
      <>

        <svg width="length" height="100" style={{
          width: '90%',
          overflow: 'visible',
        }}>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: 'gray', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: 'black', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <line x1="0" y1="50" x2="550" y2="50" stroke="black" strokeWidth="2" style={{ transform: 'translate(3px, 0px)' }} />
          {renderPointLoads()}
        </svg>
      </>
    );
  };



  const RenderDistributedLoads = () => {

    const renderLoad = () => {
      const startX = (load.start / length) * 500;
      const endX = (load.end / length) * 500;
      // const gradientId = 'gradient';
      return (
        <>
          <line
            x1={startX + 5}
            y1={endX / 15}
            x2={endX + 50}
            y2={startX / 5}
            height={10}
            stroke="black"
          />
          <text x={(startX + endX) / 2 - 50} y={-20} fill="#000">Distributed Load 1</text>
          <text x={startX - 0} y={30} fill="#000">U: {load.valueStart}</text>
          <text x={endX + 10} y={30} fill="#000">U: {load.valueEnd}</text>
        </>
      );
    };
    return (
      <>

        <svg width="length" height="100" style={{
          width: '90%',
          overflow: 'visible',
        }}>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: 'gray', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: 'black', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <line x1="0" y1="50" x2="550" y2="50" stroke="black" strokeWidth="2" style={{ transform: 'translate(3px, 0px)' }} />
          {renderLoad()}
        </svg>
      </>
    );
  };


  const calculateReactions = () => {
    // Simplified reaction calculation
    const leftSupport = Supports.find(support => support.position === Math.min(...Supports.map(s => s.position)));
    const rightSupport = Supports.find(support => support.position === Math.max(...Supports.map(s => s.position)));
    let RA = 0, RB = 0;

    pointLoads.forEach(load => {
      const a = load.position - leftSupport.position;
      const b = rightSupport.position - load.position;
      RA += load.magnitude * (b / length);
      RB += load.magnitude * (a / length);
    });

    distributedLoads.forEach(load => {
      const w = (load.startMagnitude + load.endMagnitude) / 2;
      const a = (load.start + load.end) / 2 - leftSupport.position;
      const b = rightSupport.position - (load.start + load.end) / 2;
      RA += w * (b / length);
      RB += w * (a / length);
    });

    setReactions({ RA, RB });
  };

  const calculateShearForce = (x) => {
    let shear = 0;
    pointLoads.forEach(load => {
      if (x >= load.position) shear -= load.magnitude;
    });
    distributedLoads.forEach(load => {
      if (x >= load.startMagnitude) shear -= load.startMagnitude * (Math.min(x, load.endMagnitude) - load.startMagnitude);
    });
    return shear;
  };

  const calculateBendingMoment = (x) => {
    let moment = 0;
    pointLoads.forEach(load => {
      if (x >= load.position) moment += load.magnitude * (x - load.position);
    });
    distributedLoads.forEach(load => {
      if (x >= load.startMagnitude) {
        const a = Math.min(x, load.endMagnitude) - load.startMagnitude;
        moment += load.startMagnitude * a * (a / 2);
      }
    });
    return moment;
  };

  const calculateBendingMomentForDeflection = (x) => {
    let moment = 0;
    pointLoads.forEach(pointLoads => {
      if (x >= pointLoads.position) moment -= pointLoads.magnitude * (x - pointLoads.position);
    });
    distributedLoads.forEach(load => {
      if (x >= load.startMagnitude) {
        const a = Math.min(x, load.endMagnitude) - load.startMagnitude;
        moment -= load.startMagnitude * a * (a / 2);
      }
    });
    return moment;
  };
  const calculateDeflection = (x) => {
    const EI = (100 * length) / (3 * E * I);
    // let EI = (E * I);
    let deflection = 0;

    for (let i = 0; i < x; i += 0.1) {
      deflection += (1 / EI) * calculateBendingMomentForDeflection(i) * 0.1;
    }

    return deflection;
  };

  const dataPoints = Array.from({ length: 101 }, (_, i) => i * length / 100);





  const [CrossSectionShape, setCrossSectionShape] = (useState("Square"));

  const handleCrossSectionShapeChange = (newShape) => {
    setCrossSectionShape(newShape)
  }

  const data = [
    { x: 0, y: 50 },
    { x: length, y: 50 },
  ];

  const reactionForce = pointLoads[0].magnitude;
  const momentForce = -pointLoads[0].magnitude * (pointLoads[0].position - (Supports[1].position));

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
      <section className='background-white'>
        <div className='calculator-first-section-div'>
          <div className='calculator-first-section-imgdiv' style={{ height: '80vh', overflow: 'hidden' }}>
            <img className='calculator-first-section-imgdiv-img' src={Backgroundimg} alt='' style={{ transform: 'translate(3vw, -5vw)' }} />
            <div className='calculator-first-section-imgdiv-shades' />
          </div>
          <div className='calculator-first-section-textdiv' style={{ top: '10vw' }}>
            <h3 className='calculator-first-section-textdiv-h1'>Beam deflection calculator</h3>
            <p className='calculator-first-section-textdiv-p'>
              Beam deflection calculator is a powerful tool used by<br />
              engineers and architects for analyzing the behavior of<br />
              beams under various loading conditions.
            </p>
          </div>
        </div>

        <section className='calculator-defination-section '>
          <br />
          <hr className='Beam-properties-calculator-hr' />
          <br />
          <div className={`calculator-defination-div BeamDeflection`}>
            <h3 className={`Beam-properties-calculator-heading BeamDeflection ${expanded ? 'expanded' : ''}`}>
              <span>Beam Deflection Calculator</span>
            </h3>
            <div className={`calculator-defination-section-div BeamDeflection ${expanded ? 'expanded' : ''}`}>
              <h3 className='Beam-properties-calculator-heading'>
                <span></span>
              </h3>
              <br />
              <br />
              <h3 className='calculator-defination-section first-important'>
                With the help of the Beam Deflection Calculator, you can easily<br />
                examine how different kinds of beams deflect under various loading scenarios.<br />
                Beam deflection is an important aspect in structural engineering and construction.

              </h3>
              <br />
              <h3 className='calculator-defination-section second-important'>
                It ensures the structural integrity of the beam and helps to preventany potential  deformation or<br /> damage. You can easily find the deflection at any point along the length of the beam<br />  by entering parameters like the beam's material, dimensions, and applied loads.

              </h3>
              <br />
              <h3 className='calculator-defination-section third-important'>
                By using this calculator you can easily find the beam's reactions,<br />  maximum deflection, bending moment & shear stress.

              </h3>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <hr className='Beam-properties-calculator-hr' />
          <br />
          <br />
          <br />
          <section className='structure-analysis-calculator-calculator'>
            <div className='structure-analysis-calculator-calculator-left'>
              <br /><br />
              <button onClick={() => handleOptionChange("option1")}>Length of Beam</button>
              <button onClick={() => handleOptionChange("option2")}>Young's Modules</button>
              <button onClick={() => handleOptionChange("option3")}>Cross Section</button>
              <button onClick={() => handleOptionChange("option4")}>Support</button>
              <button onClick={() => handleOptionChange("option5")}>Load</button>
              <br /><br />
            </div>
            <div className='structure-analysis-calculator-calculator-center center'>
              {selectedOption === 'option1' && (
                <div style={{
                }}>
                  {renderReactions()}
                </div>
              )}
              {selectedOption === 'option2' && (
                <div></div>

              )}
              {selectedOption === 'option3' && (
                <div></div>

              )}
              {selectedOption === 'option4' && (
                <div style={{
                  // top: '50%',
                  // left: '50%',
                  // position: 'absolute',
                  transform: 'translate(3%,0%)'
                }}>
                  {RenderSupports()}
                  <XYPlot className='SupportImggraph'
                    width={600}
                    height={100}
                  >
                    <XAxis />
                    <LineSeries
                      data={data}
                      style={{ stroke: 'black', strokeWidth: 0 }}
                    />
                  </XYPlot>
                </div>

              )}
              {selectedOption === 'option5' && (
                <div style={{
                  // top: '50%',
                  // left: '50%',
                  // position: 'absolute',
                  transform: 'translate(3%,0%)'
                }}>
                  {RenderLoads()}
                  <XYPlot className='SupportImggraph'
                    width={600}
                    height={100}
                  >
                    <XAxis />
                    <LineSeries
                      data={data}
                      style={{ stroke: 'black', strokeWidth: 0 }}
                    />
                  </XYPlot>
                  <br />
                  <br />
                  <br />
                  {RenderDistributedLoads()}
                  <XYPlot className='SupportImggraph'
                    width={600}
                    height={100}
                  >
                    <XAxis />
                    <LineSeries
                      data={data}
                      style={{ stroke: 'black', strokeWidth: 0 }}
                    />
                  </XYPlot>
                </div>

              )}
            </div>
            <div className='structure-analysis-calculator-calculator-right'>
              <br />
              {selectedOption === 'option1' && (
                <>
                  <LengthOfBeam

                    Beamlengthvalue={length}
                    LengthOfBeamunits={LengthOfBeamunits}
                    LengthOfBeamSelectedUnit={LengthOfBeamSelectedUnit}
                    handleLengthOfBeamChange={((e) => handleLengthOfBeamChange(e.target.value))}
                    handleLengthOfBeamUnitchange={((e) => handleLengthOfBeamUnitchange(e.target.value))}
                    BeamLengthoptions={
                      LengthOfBeamunits.map((unit) => (
                        <option key={unit} value={unit}>
                          {unit}
                        </option>
                      ))
                    }
                    BeamlengthonChange={(e) => setLength(parseFloat(e.target.value))}
                    onChange={handleCrossSectionShapeChange}

                  />
                  <SolutionsOfBeamDeflaction
                    graphText={`${unitText}`}
                    graphText2={`${unitText2}`}

                    Reaction={renderSupportsAndLoadsforReactions()}

                    DataofShearStressPlot={<LineSeries data={dataPoints.map(x => ({ x, y: calculateShearForce(x) }))} />}
                    DataofBendingMomentPlot={<LineSeries data={dataPoints.map(x => ({ x, y: calculateBendingMoment(x) }))} />}
                    DataofDeflactionPlot={<LineSeries data={dataPoints.map(x => ({ x, y: calculateDeflection(x) }))} />}
                    reactions={(e) => calculateReactions(e.target.value)}
                    DataofReactionPlot={
                      <LineSeries
                        data={[{ x: 0, y: 0 }, { x: length, y: 0 }]}
                        style={{ strokeWidth: 0 }}
                      />
                    }
                    NumberlineofReactionplot={
                      <LineSeries
                        data={data}
                        style={{ stroke: 'black', strokeWidth: 0 }}
                      />
                    }
                    LabelSeriesOfReactionForce={
                      <LabelSeries
                        data={[
                          { x: Supports[0].position, y: 100, label: `${reactionForce} KN`, style: { fill: 'red' } },
                          { x: Supports[1].position, y: 100, label: `${momentForce} KN.m`, style: { fill: 'red' } }
                        ]}
                        style={{ fontSize: '12px', transform: 'translate(30px, 10px)' }}
                      />
                    }

                    CrossSectionShape={CrossSectionShape}

                    togglefunction={isActive3}
                    toggleBreaks={toggleClass3}
                  />
                </>
              )}
              {selectedOption === 'option2' && (
                <>
                  <YoungsModules
                    YoungsModulesValue={E}
                    YoungsModulesSelectedValue={selectedUnit}
                    YoungsModulesValueOnchange={(e) => handleInputChange(e.target.value)}
                    YoungsModulesSelectedValueOnchange={(e) => handleUnitChange(e.target.value)}
                    YoungsModulesOptions={
                      units.map((unit) => (
                        <option key={unit} value={unit}>
                          {unit}
                        </option>
                      ))}
                  />
                  <SolutionsOfBeamDeflaction
                    graphText={`${unitText}`}
                    graphText2={`${unitText2}`}

                    Reaction={renderSupportsAndLoadsforReactions()}

                    DataofShearStressPlot={<LineSeries data={dataPoints.map(x => ({ x, y: calculateShearForce(x) }))} />}
                    DataofBendingMomentPlot={<LineSeries data={dataPoints.map(x => ({ x, y: calculateBendingMoment(x) }))} />}
                    DataofDeflactionPlot={<LineSeries data={dataPoints.map(x => ({ x, y: calculateDeflection(x) }))} />}
                    reactions={(e) => calculateReactions(e.target.value)}
                    DataofReactionPlot={
                      <LineSeries
                        data={[{ x: 0, y: 0 }, { x: length, y: 0 }]}
                        style={{ strokeWidth: 0 }}
                      />
                    }
                    NumberlineofReactionplot={
                      <LineSeries
                        data={data}
                        style={{ stroke: 'black', strokeWidth: 0 }}
                      />
                    }
                    LabelSeriesOfReactionForce={
                      <LabelSeries
                        data={[
                          { x: Supports[0].position, y: 100, label: `${reactionForce} KN`, style: { fill: 'red' } },
                          { x: Supports[1].position, y: 100, label: `${momentForce} KN.m`, style: { fill: 'red' } }
                        ]}
                        style={{ fontSize: '12px', transform: 'translate(30px, 10px)' }}
                      />
                    }

                    CrossSectionShape={CrossSectionShape}

                    togglefunction={isActive3}
                    toggleBreaks={toggleClass3}
                  />
                </>
              )}
              {selectedOption === 'option3' && (
                <>
                  <CrossSection
                    A={A}
                    AOnchange={(e) => handleAChange(e.target.value)}
                    I={I}
                    IOnchange={(e) => handleIChange(e.target.value)}
                  />
                  <SolutionsOfBeamDeflaction
                    graphText={`${unitText}`}
                    graphText2={`${unitText2}`}

                    Reaction={renderSupportsAndLoadsforReactions()}

                    DataofShearStressPlot={<LineSeries data={dataPoints.map(x => ({ x, y: calculateShearForce(x) }))} />}
                    DataofBendingMomentPlot={<LineSeries data={dataPoints.map(x => ({ x, y: calculateBendingMoment(x) }))} />}
                    DataofDeflactionPlot={<LineSeries data={dataPoints.map(x => ({ x, y: calculateDeflection(x) }))} />}
                    reactions={(e) => calculateReactions(e.target.value)}
                    DataofReactionPlot={
                      <LineSeries
                        data={[{ x: 0, y: 0 }, { x: length, y: 0 }]}
                        style={{ strokeWidth: 0 }}
                      />
                    }
                    NumberlineofReactionplot={
                      <LineSeries
                        data={data}
                        style={{ stroke: 'black', strokeWidth: 0 }}
                      />
                    }
                    LabelSeriesOfReactionForce={
                      <LabelSeries
                        data={[
                          { x: Supports[0].position, y: 100, label: `${reactionForce} KN`, style: { fill: 'red' } },
                          { x: Supports[1].position, y: 100, label: `${momentForce} KN.m`, style: { fill: 'red' } }
                        ]}
                        style={{ fontSize: '12px', transform: 'translate(30px, 10px)' }}
                      />
                    }

                    CrossSectionShape={CrossSectionShape}

                    togglefunction={isActive3}
                    toggleBreaks={toggleClass3}
                  />
                </>
              )}
              {selectedOption === 'option4' && (
                <>
                  <SupportPage

                    addSupport={<button className='BeamLinkBtntoBeamProperies-Addsupport' onClick={addSupport}>Add Support</button>}
                    Supports={Supports.map((support, index) => (
                      <div key={index} style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <div className='Calculator-Side-A' style={{ width: '25%', justifyContent: 'center' }}>
                          <br />
                          <div className='input-and-select-div' style={{ justifyContent: 'center' }}>
                            <select
                              value={support.type}
                              onChange={(e) => {
                                const newSupports = [...Supports];
                                newSupports[index].type = e.target.value;
                                setSupports(newSupports);
                              }}
                              style={{
                                outline: 'none',
                                border: 'none'
                              }}
                            >
                              <option value="pinned">Pinned</option>
                              <option value="roller">Roller</option>
                              <option value="fixed">Fixed</option>
                            </select>
                          </div>
                        </div>
                        <div className='Calculator-Side-A' style={{ width: '25%', justifyContent: 'center' }}>
                          <br />
                          <div className='input-and-select-div' style={{ justifyContent: 'center' }}>
                            <input
                              style={{
                                border: 'none',
                                float: 'right',
                                textAlign: 'center',
                                width: '70%',
                              }}
                              type="number"
                              value={support.position}
                              onChange={(e) => {
                                const newSupports = [...Supports];
                                newSupports[index].position = Number(e.target.value);
                                setSupports(newSupports);
                              }}
                              max={length}
                            />
                          </div>
                        </div>
                        <MdDelete style={{ color: 'white', fontSize: '1.5vw' }} onClick={() => removeSupport(index)}>..</MdDelete>
                      </div>
                    ))}
                  />
                  <SolutionsOfBeamDeflaction
                    graphText={`${unitText}`}
                    graphText2={`${unitText2}`}

                    Reaction={renderSupportsAndLoadsforReactions()}

                    DataofShearStressPlot={<LineSeries data={dataPoints.map(x => ({ x, y: calculateShearForce(x) }))} />}
                    DataofBendingMomentPlot={<LineSeries data={dataPoints.map(x => ({ x, y: calculateBendingMoment(x) }))} />}
                    DataofDeflactionPlot={<LineSeries data={dataPoints.map(x => ({ x, y: calculateDeflection(x) }))} />}
                    reactions={(e) => calculateReactions(e.target.value)}
                    DataofReactionPlot={
                      <LineSeries
                        data={[{ x: 0, y: 0 }, { x: length, y: 0 }]}
                        style={{ strokeWidth: 0 }}
                      />
                    }
                    NumberlineofReactionplot={
                      <LineSeries
                        data={data}
                        style={{ stroke: 'black', strokeWidth: 0 }}
                      />
                    }
                    LabelSeriesOfReactionForce={
                      <LabelSeries
                        data={[
                          { x: Supports[0].position, y: 100, label: `${reactionForce} Kn`, style: { fill: 'red' } },
                          { x: Supports[1].position, y: 100, label: `${momentForce} Kn.m`, style: { fill: 'red' } }
                        ]}
                        style={{ fontSize: '12px', transform: 'translate(30px, 10px)' }}
                      />
                    }

                    CrossSectionShape={CrossSectionShape}

                    togglefunction={isActive3}
                    toggleBreaks={toggleClass3}
                  />
                </>
              )}
              {selectedOption === 'option5' && (
                <>
                  <LoadPage


                    max={length}
                    AddDistributedLoad={
                      <button className="BeamLinkBtntoBeamProperies-AddLoad BeamLinkBtntoBeamProperies" onClick={addDistributedLoad}>Add +</button>
                    }
                    DistributedLoadStart={load.start}
                    DistributedLoadStartOnchange={(e) => handleLoadChange('start', e.target.value)}
                    DistributedLoadend={load.end}
                    DistributedLoadendOnchange={(e) => handleLoadChange('end', e.target.value)}
                    DistributedLoadvalueStart={load.startMagnitude}
                    DistributedLoadvalueStartOnchange={(e) => handleLoadChange('startMagnitude', e.target.value)}
                    DistributedLoadvalueEnd={load.endMagnitude}
                    DistributedLoadvalueEndOnchange={(e) => handleLoadChange('endMagnitude', e.target.value)}

                    AddPointLoad={
                      <button className='BeamLinkBtntoBeamProperies-AddLoad BeamLinkBtntoBeamProperies' onClick={addPointLoad}>Add +</button>}
                    PointLoad={
                      pointLoads.map((load, index) => (
                        <>
                          <h3 style={{ marginBottom: '10px' }}>Point Load {index + 1}</h3>
                          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <div className='Calculator-Side-A' style={{ width: '25%', justifyContent: 'center' }}>
                              <div className='input-and-select-div'
                                style={{ justifyContent: 'center' }}
                              >
                                <input
                                  style={{
                                    border: 'none',
                                    textAlign: 'center',
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'

                                  }}
                                  type='number'
                                  value={load.position}
                                  onChange={(e) => handlePointLoadChange(index, 'position', e.target.value)}
                                  step='1'
                                  min='0'
                                  max={length}
                                  placeholder='Position'
                                />

                              </div>
                            </div>
                            <div className='Calculator-Side-A' style={{ width: '25%', justifyContent: 'center' }}>
                              <div className='input-and-select-div'
                                style={{ justifyContent: 'center', width: '100%' }}
                              >
                                <input
                                  style={{
                                    border: 'none',
                                    textAlign: 'center', width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'

                                  }}
                                  type='number'
                                  value={load.magnitude}
                                  onChange={(e) => handlePointLoadChange(index, 'magnitude', e.target.value)}
                                  placeholder='Magnitude'
                                />


                              </div>
                            </div>
                            <MdDelete style={{ color: 'white', fontSize: '1.5vw' }} onClick={() => removePointLoad(index)}>..</MdDelete>
                          </div>
                        </>
                      ))}




                    Beamlengthvalue={length}
                    LengthOfBeamunits={LengthOfBeamunits}
                    LengthOfBeamSelectedUnit={LengthOfBeamSelectedUnit}
                    handleLengthOfBeamChange={((e) => handleLengthOfBeamChange(e.target.value))}
                    handleLengthOfBeamUnitchange={((e) => handleLengthOfBeamUnitchange(e.target.value))}
                    BeamLengthoptions={
                      LengthOfBeamunits.map((unit) => (
                        <option key={unit} value={unit}>
                          {unit}
                        </option>
                      ))
                    }
                  />
                  <SolutionsOfBeamDeflaction
                    LoadBendingDeflectionclasses={'LoadBendingDeflectionclasses'}
                    graphText={`${unitText}`}
                    graphText2={`${unitText2}`}

                    Reaction={renderSupportsAndLoadsforReactions()}

                    DataofShearStressPlot={<LineSeries data={dataPoints.map(x => ({ x, y: calculateShearForce(x) }))} />}
                    DataofBendingMomentPlot={<LineSeries data={dataPoints.map(x => ({ x, y: calculateBendingMoment(x) }))} />}
                    DataofDeflactionPlot={<LineSeries data={dataPoints.map(x => ({ x, y: calculateDeflection(x) }))} />}
                    reactions={(e) => calculateReactions(e.target.value)}
                    DataofReactionPlot={
                      <LineSeries
                        data={[{ x: 0, y: 0 }, { x: length, y: 0 }]}
                        style={{ strokeWidth: 0 }}
                      />
                    }
                    NumberlineofReactionplot={
                      <LineSeries
                        data={data}
                        style={{ stroke: 'black', strokeWidth: 0 }}
                      />
                    }
                    LabelSeriesOfReactionForce={
                      <LabelSeries
                        data={[
                          { x: Supports[0].position, y: 100, label: `${reactionForce} KN`, style: { fill: 'red' } },
                          { x: Supports[1].position, y: 100, label: `${momentForce} KN.m`, style: { fill: 'red' } }
                        ]}
                        style={{ fontSize: '12px', transform: 'translate(30px, 10px)' }}
                      />
                    }

                    CrossSectionShape={CrossSectionShape}

                    togglefunction={isActive3}
                    toggleBreaks={toggleClass3}
                  />
                </>
              )}
            </div>
          </section>

          <br />
          <br />
          <br />
          <br />
          <div className={isActive3 ? ' Beamdeflaction height110 ' : ' Beamdeflaction height110 height0 '} ></div>
          <hr className='Beam-properties-calculator-hr' />
          <br />
          <br />
          <br />
          <br />
          <BeamDeflection />
          <br />
          <br />
          <br />
          <hr className='Beam-properties-calculator-hr' />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Load />
          <hr className='Beam-properties-calculator-hr' />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </section>
      </section>
      <footer className='footer'></footer>
    </>
  )
}