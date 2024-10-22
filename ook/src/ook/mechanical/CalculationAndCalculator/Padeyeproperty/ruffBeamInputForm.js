// BeamInputForm.js
import React, { useState } from 'react';

const BeamInputForm = ({ onSubmit }) => {
  const [beamLength, setBeamLength] = useState(3);
  const [loadMagnitude, setLoadMagnitude] = useState(200000);
  const [loadPosition, setLoadPosition] = useState(1);
  const [supportPosition, setSupportPosition] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ beamLength, loadMagnitude, loadPosition, supportPosition });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Beam Length (m):
        <input type="number" value={beamLength} onChange={(e) => setBeamLength(e.target.value)} />
      </label>
      <br />
      <label>
        Load Magnitude (N):
        <input type="number" value={loadMagnitude} onChange={(e) => setLoadMagnitude(e.target.value)} />
      </label>
      <br />
      <label>
        Load Position (m):
        <input type="number" value={loadPosition} onChange={(e) => setLoadPosition(e.target.value)} />
      </label>
      <br />
      <label>
        Support Position (m):
        <input type="number" value={supportPosition} onChange={(e) => setSupportPosition(e.target.value)} />
      </label>
      <br />
      <button type="submit">Plot Beam</button>
    </form>
  );
};

export default BeamInputForm;
