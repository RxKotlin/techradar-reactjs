'use strict';

import React from 'react';
import Triangle from './TriangleComponent';
import Circle from './CircleComponent';

require('styles/svg/Radar.scss');

class RadarComponent extends React.Component {
  constructor(props) {
    super();
    this.radius = props.radius;
    this.points = props.points;
  }

  render() {
    let radius = this.radius;
    let length = radius * 2;
    let accessR = radius * 0.8;
    let trialR = radius * 0.6;
    let adoptR = radius * 0.3;
    let serviceTrackWidth = radius * 0.05;
    let serviceTrackOrigin = radius - serviceTrackWidth * 0.5;
    let pointRadius = radius * 0.05

    return (
      <svg width={length} height={length} version="1.1"
xmlns="http://www.w3.org/2000/svg">
        <circle cx={radius} cy={radius} r={radius} fill="#E8E8E8"/>
        <circle cx={radius} cy={radius} r={accessR} fill="#DEDEDE" stroke="white"
stroke-width="2"/>
        <circle cx={radius} cy={radius} r={trialR} fill="#D3D3D3" stroke="white"
stroke-width="2"/>
        <circle cx={radius} cy={radius} r={adoptR} fill="#C8C8C8" stroke="white"
stroke-width="2"/>
        <rect x={serviceTrackOrigin} y="0" width={serviceTrackWidth} height={length} fill="rgba(255, 255, 255, 0.5)" class="service-track"/>
        <rect x="0" y={serviceTrackOrigin} width={length} height={serviceTrackWidth} fill="rgba(255, 255, 255, 0.5)" class="service-track"/>
        <text x={length * 0.02} y={radius + 4} fill="black" fontSize="10px">HOLD</text>
        <text x={length * 0.11} y={radius + 4} fill="black" fontSize="10px">ASSESS</text>
        <text x={length * 0.255} y={radius + 4} fill="black" fontSize="10px">Trial</text>
        <text x={length * 0.4} y={radius + 4} fill="black" fontSize="10px">ADOPT</text>
        {
          this.points
            .map(function(item) {
              if (item.type == 'old') {
                return (<Triangle point={item} radius={pointRadius} />)
              } else {
                return (<Circle point={item} radius={pointRadius} />)
              }
            })
        }
      </svg>
    );
  }
}

RadarComponent.displayName = 'SvgRadarComponent';

// Uncomment properties you need
// RadarComponent.propTypes = {};
// RadarComponent.defaultProps = {};

export default RadarComponent;
