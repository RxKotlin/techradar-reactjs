'use strict';

import React from 'react';
import Point from './TriangleComponent';

require('styles/svg/Radar.scss');

class RadarComponent extends React.Component {
  constructor(props) {
    super();
    this.radius = props.radius;
  }

  render() {
    let radius = this.radius;
    let length = radius * 2;
    let accessR = radius * 0.8;
    let trialR = radius * 0.6;
    let adoptR = radius * 0.3;
    let serviceTrackWidth = radius * 0.05;
    let serviceTrackOrigin = radius - serviceTrackWidth * 0.5;

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
        {
          [{x:20, y:20}, {x: 50, y:50}, {x: 80, y: 80}]
            .map(function(item) {
              let r = 10;
              let x1 = item.x;
              let y1 = item.y - r;
              let x2 = item.x - r * Math.sqrt(3) / 2;
              let y2 = item.y - r / 2;
              let x3 = item.x + r * Math.sqrt(3) / 2;
              let y3 = item.y - r / 2;
              let point = x1 + ',' + y1 + ' ' + x2 + ',' + y2 + ' ' + x3 + ',' + y3;
              console.log(point);
              return (<polygon points={point} fill="purple" stroke-width="1"/>)
            }
          )
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
