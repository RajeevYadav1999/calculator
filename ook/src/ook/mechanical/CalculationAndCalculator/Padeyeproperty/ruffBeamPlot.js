// BeamPlot.js
import React from 'react';
import { XYPlot, LineSeries, MarkSeries, LabelSeries } from 'react-vis';

const BeamPlot = ({ beamData }) => {
  const { beamLength, loadMagnitude, loadPosition, supportPosition } = beamData;

  // Calculate reaction forces (simplified for a single support and single load)
  const reactionForce = loadMagnitude;
  const moment = -loadMagnitude * (loadPosition - supportPosition);

  return (
    <div>
      <h3>Beam External Conditions</h3>
      <XYPlot height={300} width={500}>
        {/* Beam Schematic */}
        <LineSeries
          data={[
            { x: 0, y: 0 },
            { x: beamLength, y: 0 }
          ]}
          style={{ stroke: 'purple', strokeWidth: 3 }}
        />
        <LabelSeries
          data={[
            { x: loadPosition, y: 0, label: `${loadMagnitude} N`, style: { fill: 'red' } }
          ]}
        />
        <MarkSeries
          data={[{ x: loadPosition, y: 0 }]}
          style={{ stroke: 'red', strokeWidth: 2 }}
        />
      </XYPlot>
      <h3>Reaction Forces</h3>
      <XYPlot height={300} width={500}>
        {/* Reaction Forces */}
        <LabelSeries
          data={[
            { x: supportPosition, y: reactionForce, label: `${reactionForce} N`, style: { fill: 'red' } },
            { x: supportPosition, y: moment, label: `${moment} N.m`, style: { fill: 'red' } }
          ]}
        />
        <MarkSeries
          data={[{ x: supportPosition, y: reactionForce }, { x: supportPosition, y: moment }]}
          style={{ stroke: 'red', strokeWidth: 2 }}
        />
      </XYPlot>
    </div>
  );
};

export default BeamPlot;
