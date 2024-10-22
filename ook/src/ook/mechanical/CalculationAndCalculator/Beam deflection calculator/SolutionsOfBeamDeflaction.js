import React, { useState } from 'react'
import { XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LabelSeries, LineSeries, } from 'react-vis';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import axios from 'axios';


export default function SolutionsOfBeamDeflaction(props) {
    const [result, setResult] = useState(null);
    const [data, setData] = useState('hello world')
    const handleCalculate = async () => {
        const response = await axios.post('/api/calculate', { data });
        setResult(response.data.result);
    };

    const [showfirstDiv, setshowfirstDiv] = useState(true);
    const [showSecondDiv, setShowSecondDiv] = useState(true);

    const handleClick = () => {
        setshowfirstDiv(showfirstDiv => !showfirstDiv)
        setTimeout(() => {
            setShowSecondDiv(showSecondDiv => !showSecondDiv)
        }, 1000);
    }
    const handleCombinedClick = () => {
        handleClick();
        props.toggleBreaks();
    };

    const DropDowmOneMain = `
    rightBeamDeflactionDropDown
    reactiongraph
      ${props.togglefunction ? ` show  ` : ` hidden `}
      ${showfirstDiv ? 'ScrollTransactionOne' : ''}
  `;
    const DropDowmOnerightMain = `
    rightBeamDeflactionDropDown rightsideBeamDeflactionDropDown
    ${props.togglefunction ? ` show  ` : ` hidden `}
    ${showfirstDiv ? 'ScrollTransactionOne' : ''}
  `;
    const DropDowmTwoMain = `
   ScrollTransactionTwoBeamDeflactionDropDown
    ${props.togglefunction ? ` show  ` : ` hidden `}
    ${showfirstDiv ? 'ScrollTransactionOne' : ''}
    ${showSecondDiv ? 'ScrollTransactionTwo' : ''}
      ${props.LoadBendingDeflectionclasses}

  `;
    const DropDowmTworightMain = `
    ScrollTransactionTwoBeamDeflactionDropDown rightsideTwoBeamDeflactionDropDown
  ${props.togglefunction ? ` show  ` : ` hidden `}
    ${showfirstDiv ? 'ScrollTransactionOne' : ''}
  ${showSecondDiv ? 'ScrollTransactionTwo' : ''}
  ${props.LoadBendingDeflectionclasses}
  `;
    const DropDowmthirdMain = `
    ScrollTransactionTwoBeamDeflactionDropDown rightsideTwoBeamDeflactionDropDown top405
  ${props.togglefunction ? ` show  ` : ` hidden `}
    ${showfirstDiv ? 'ScrollTransactionOne' : ''}
  ${showSecondDiv ? 'ScrollTransactionTwo' : ''}
  ${props.LoadBendingDeflectionclasses}
  `;
    return (
        <>
            <button className='structure-analysis-calculator-calculator-right-show-hidden-btn' onClick={handleCombinedClick}>{props.togglefunction ? ' Hide ' : ' Solve '}</button>
            <div>
                <div className={DropDowmOneMain} style={{
                    background: '#fff',
                    height: '30vw',
                    left: '0',
                    transform: 'translate(0%, 0%)'
                }}>
                    <br />
                    <h2 style={{ fontSize: '3vw', color: 'black', textAlign: 'center' }}>Reaction</h2>
                    <div
                        style={{ transform: 'translate(-50%, 0%)', left: '52.5%', position: 'relative', width: '100%' }}
                    >
                        {props.Reaction}
                        <br />
                        <br />
                        <XYPlot width={560} height={80}
                            style={{ transform: 'translate(-50%, 0%)', left: '50%', position: 'relative', width: '100%' }}
                        >
                            <XAxis title="" />
                            {props.DataofReactionPlot}
                            {props.LabelSeriesOfReactionForce}
                            {props.NumberlineofReactionplot}
                        </XYPlot>
                    </div>
                </div>
            </div>
            <div>
                <div className={DropDowmOnerightMain} style={{
                    background: '#fff',
                    height: '30vw',
                    left: '50%',
                    transform: 'translate(0%, 0%)'
                }}>
                    <br />
                    <h2 style={{ fontSize: '3vw', color: 'black', textAlign: 'center' }}>Shear Force</h2>
                    {props.DataofShearStressPlot}
                </div>
            </div>


            <div>
                <div className={DropDowmTwoMain} style={{
                    background: '#fff',
                    height: '30vw',
                    left: '0%',
                    transform: 'translate(0%, 0%)'
                }}>
                    <br />
                    <h2 style={{ fontSize: '3vw', color: 'black', textAlign: 'center' }}>Bending Moment</h2>
                    {props.DataofBendingMomentPlot}
                </div>
            </div>
            <div>
                <div className={DropDowmTworightMain} style={{
                    background: '#fff',
                    height: '30vw',
                    left: '50%',
                    transform: 'translate(0%, 0%)'
                }}>
                    <br />
                    <h2 style={{ fontSize: '3vw', color: 'black', textAlign: 'center' }}>Deflection</h2>
                    {props.DataofDeflactionPlot}

                </div>
            </div >
            <div>
                <div className={DropDowmthirdMain} style={{
                    background: '#fff',
                    height: '30vw',
                    left: '0%',
                    transform: 'translate(0%, 0%)',
                    top: '405%!important'
                }}>
                    <br />
                    <h2 style={{ fontSize: '3vw', color: 'black', textAlign: 'center' }}>Combined Stress</h2>
                    <div style={{
                        display: "grid",
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: "100%",
                        gridTemplateColumns: '.4fr 6fr',
                        justifyItems: 'center',
                        alignContent: 'center',
                    }}>
                        <h5 style={{ writingMode: 'vertical-lr' }}>Bending Moment ({props.graphText})</h5>

                        <XYPlot height={300} width={590} style={{
                            top: '50%',
                            left: '50%',
                            position: 'relative',
                            transform: "translate(-50%,-50%)",
                            width: '100%'
                        }}>
                            <HorizontalGridLines />
                            <VerticalGridLines />
                            <XAxis title="" />
                            <YAxis className='BendingMomentXaxisUnits' title="" />
                            {props.DataofBendingMomentPlot}
                        </XYPlot>
                    </div>
                    <h5 style={{ width: '100%', textAlign: 'center' }}>Beam Length ({props.graphText2})</h5>
                </div>
            </div>
        </>

    )
}


// import React, { useState } from 'react';
// import axios from 'axios';
// import { Line } from 'react-chartjs-2';
// import { Chart, registerables } from 'chart.js';

// Chart.register(...registerables);

// function BeamAnalysis() {
//   const [length, setLength] = useState(2000);
//   const [supports, setSupports] = useState([{ type: 'pin', position: 0 }]);
//   const [pointLoads, setPointLoads] = useState([{ position: 0, magnitude: 0 }]);
//   const [distributedLoads, setDistributedLoads] = useState([{ startPosition: 0, endPosition: 0, value: 0 }]);
//   const [youngModules, setYoungModules] = useState(200000);
//   const [area, setArea] = useState(3000);
//   const [inertia, setInertia] = useState(1000000);
//   const [deflectionData, setDeflectionData] = useState([]);
//   const [shearForceData, setShearForceData] = useState([]);
//   const [bendingMomentData, setBendingMomentData] = useState([]);

//   const addSupport = () => {
//     setSupports([...supports, { type: 'pin', position: 0 }]);
//   };

//   const addPointLoad = () => {
//     setPointLoads([...pointLoads, { position: 0, magnitude: 0 }]);
//   };

//   const addDistributedLoad = () => {
//     setDistributedLoads([...distributedLoads, { startPosition: 0, endPosition: 0, value: 0 }]);
//   };

//   const handleSupportChange = (index, field, value) => {
//     const newSupports = [...supports];
//     newSupports[index][field] = value;
//     setSupports(newSupports);
//   };

//   const handlePointLoadChange = (index, field, value) => {
//     const newPointLoads = [...pointLoads];
//     newPointLoads[index][field] = value;
//     setPointLoads(newPointLoads);
//   };

//   const handleDistributedLoadChange = (index, field, value) => {
//     const newDistributedLoads = [...distributedLoads];
//     newDistributedLoads[index][field] = value;
//     setDistributedLoads(newDistributedLoads);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:5000/api/process', {
//         length: Number(length),
//         supports: supports.map(s => ({ type: s.type, position: Number(s.position) })),
//         pointLoads: pointLoads.map(p => ({ position: Number(p.position), magnitude: Number(p.magnitude) })),
//         distributedLoads: distributedLoads.map(d => ({
//           startPosition: Number(d.startPosition),
//           endPosition: Number(d.endPosition),
//           value: Number(d.value),
//         })),
//         youngmodules: Number(youngModules),
//         area: Number(area),
//         inertia: Number(inertia),
//       });

//       setDeflectionData(response.data.deflection_data);
//       setShearForceData(response.data.shear_force_data);
//       setBendingMomentData(response.data.bending_moment_data);
//     } catch (error) {
//       console.error("There was an error processing the data!", error);
//     }
//   };

//   const deflectionChartData = {
//     labels: deflectionData.map(item => item.position),
//     datasets: [
//       {
//         label: 'Deflection (mm)',
//         data: deflectionData.map(item => item.deflection),
//         fill: false,
//         borderColor: 'rgba(75,192,192,1)',
//         tension: 0.1,
//       },
//     ],
//   };

//   const shearForceChartData = {
//     labels: shearForceData.map(item => item.position),
//     datasets: [
//       {
//         label: 'Shear Force (N)',
//         data: shearForceData.map(item => item.shear_force),
//         fill: false,
//         borderColor: 'rgba(255,99,132,1)',
//         tension: 0.1,
//       },
//     ],
//   };

//   const bendingMomentChartData = {
//     labels: bendingMomentData.map(item => item.position),
//     datasets: [
//       {
//         label: 'Bending Moment (Nm)',
//         data: bendingMomentData.map(item => item.bending_moment),
//         fill: false,
//         borderColor: 'rgba(54,162,235,1)',
//         tension: 0.1,
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: 'Position (mm)',
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: 'Value',
//         },
//       },
//     },
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Length of Beam (mm):</label>
//           <input type="number" value={length} onChange={(e) => setLength(e.target.value)} />
//         </div>

//         {supports.map((support, index) => (
//           <div key={index}>
//             <label>Support Type:</label>
//             <select
//               value={support.type}
//               onChange={(e) => handleSupportChange(index, 'type', e.target.value)}
//             >
//               <option value="pin">Pin</option>
//               <option value="roller">Roller</option>
//               <option value="fixed">Fixed</option>
//             </select>
//             <label>Support Position (mm):</label>
//             <input
//               type="number"
//               value={support.position}
//               onChange={(e) => handleSupportChange(index, 'position', e.target.value)}
//             />
//           </div>
//         ))}
//         <button type="button" onClick={addSupport}>Add Support</button>

//         {pointLoads.map((load, index) => (
//           <div key={index}>
//             <label>Point Load Position (mm):</label>
//             <input
//               type="number"
//               value={load.position}
//               onChange={(e) => handlePointLoadChange(index, 'position', e.target.value)}
//             />
//             <label>Point Load Magnitude (N):</label>
//             <input
//               type="number"
//               value={load.magnitude}
//               onChange={(e) => handlePointLoadChange(index, 'magnitude', e.target.value)}
//             />
//           </div>
//         ))}
//         <button type="button" onClick={addPointLoad}>Add Point Load</button>

//         {distributedLoads.map((load, index) => (
//           <div key={index}>
//             <label>Distributed Load Start Position (mm):</label>
//             <input
//               type="number"
//               value={load.startPosition}
//               onChange={(e) => handleDistributedLoadChange(index, 'startPosition', e.target.value)}
//             />
//             <label>Distributed Load End Position (mm):</label>
//             <input
//               type="number"
//               value={load.endPosition}
//               onChange={(e) => handleDistributedLoadChange(index, 'endPosition', e.target.value)}
//             />
//             <label>Distributed Load Value (N/mm):</label>
//             <input
//               type="number"
//               value={load.value}
//               onChange={(e) => handleDistributedLoadChange(index, 'value', e.target.value)}
//             />
//           </div>
//         ))}
//         <button type="button" onClick={addDistributedLoad}>Add Distributed Load</button>

//         <div>
//           <label>Area (mm²):</label>
//           <input type="number" value={area} onChange={(e) => setArea(e.target.value)} />
//         </div>
//         <div>
//           <label>Moment of Inertia (mm⁴):</label>
//           <input type="number" value={inertia} onChange={(e) => setInertia(e.target.value)} />
//         </div>
//         <div>
//           <label>Youngs Modulus (N/mm²):</label>
//           <input type="number" value={youngModules} onChange={(e) => setYoungModules(e.target.value)} />
//         </div>
//         <button type="submit">Analyze Beam</button>
//       </form>

//       <h2>Deflection Data:</h2>
//       <Line data={deflectionChartData} options={options} width='200px' height='100px' />

//       <h2>Shear Force Data:</h2>
//       <Line data={shearForceChartData} options={options} width='200px' height='100px' />

//       <h2>Bending Moment Data:</h2>
//       <Line data={bendingMomentChartData} options={options} width='200px' height='100px' />
//     </div>
//   );
// }

// export default BeamAnalysis;