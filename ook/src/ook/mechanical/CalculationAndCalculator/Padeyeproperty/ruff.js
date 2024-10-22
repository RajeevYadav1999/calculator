// import React , { useState } from 'react';
// import BeamInputForm from './ruffBeamInputForm';
// import BeamPlot from './ruffBeamPlot';
// import 'react-vis/dist/style.css';

// export default function Ruff() {
//     const [beamData, setBeamData] = useState(null);

//     const handleFormSubmit = (data) => {
//       setBeamData(data);
//     };
//     return (
//         <>
//         <br/>
//         <br/>
//         <br/>
//         <br/>
//         <div>
//       <h1>Beam Plotter</h1>
//       <BeamInputForm onSubmit={handleFormSubmit} />
//       {beamData && <BeamPlot beamData={beamData} />}
//     </div>
//         </>
//     )
// }

// App.js
import React, { useState } from 'react';
import BeamInputForm from './ruffBeamInputForm';
import BeamPlot from './ruffBeamPlot';
import 'react-vis/dist/style.css';

const Ruff = () => {
    const [beamData, setBeamData] = useState(null);

    const handleFormSubmit = (data) => {
      setBeamData(data);
    };
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <h1>Beam Plotter</h1>
      <BeamInputForm onSubmit={handleFormSubmit} />
      {beamData && <BeamPlot beamData={beamData} />}
        </div>
    );
};

export default Ruff;
