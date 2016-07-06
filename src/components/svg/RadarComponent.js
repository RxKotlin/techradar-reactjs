'use strict';

import React from 'react';
import Triangle from './TriangleComponent';
import Circle from './CircleComponent';

require('styles/svg/Radar.scss');
var UUID = require('uuid-js');

class RadarComponent extends React.Component {
  constructor(props) {
    super();
    this.radius = props.radius;
    this.onCreatePoint = props.onCreatePoint;
    this.state = {points: props.points}
  }

  onCreateANewPoint(event) {
    let radius = this.radius;
    let pointRadius = radius * 0.05;
    let points = this.state.points;
    let point = {type: 'new', x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY, id: UUID.create().toString()};
    let deletePoints = points.filter(function(item){
      return (point.x >= item.x - pointRadius) && (point.x <= item.x + pointRadius) && (point.y >= item.y - pointRadius) && (point.y <= item.y + pointRadius)
    });
    if (deletePoints.length > 0) {
      let index = points.indexOf(deletePoints[0]);
      points.splice(index, 1);
    } else {
      points.push(point);
    }
    this.setState({points: points});
    this.onCreatePoint(points);
  }

  render() {
    let radius = this.radius;
    let length = radius * 2;
    let accessR = radius * 0.8;
    let trialR = radius * 0.6;
    let adoptR = radius * 0.3;
    let serviceTrackWidth = radius * 0.05;
    let serviceTrackOrigin = radius - serviceTrackWidth * 0.5;
    let pointRadius = radius * 0.05;
    let holdTextX = radius * 0.1;
    let assessTextX = radius * 0.3;
    let trialTextX = radius * 0.55;
    let adoptTextX = radius * 0.85;
    let labelFontSize = serviceTrackWidth * 0.8;

    return (
      <svg width={length} height={length} version="1.1"
xmlns="http://www.w3.org/2000/svg" onClick={this.onCreateANewPoint.bind(this)}>
        <circle cx={radius} cy={radius} r={radius} fill="#F5F5F5"/>
        <circle cx={radius} cy={radius} r={accessR} fill="#EEEEEE" stroke="white"
        stroke-width="2"/>
        <circle cx={radius} cy={radius} r={trialR} fill="#E0E0E0" stroke="white"
        stroke-width="2"/>
        <circle cx={radius} cy={radius} r={adoptR} fill="#BDBDBD" stroke="white"
        stroke-width="2"/>
        <rect x={serviceTrackOrigin} y="0" width={serviceTrackWidth} height={length} fill="rgba(255, 255, 255, 0.5)" class="service-track"/>
        <rect x="0" y={serviceTrackOrigin} width={length} height={serviceTrackWidth} fill="rgba(255, 255, 255, 0.5)" class="service-track">
        </rect>
        <text x={holdTextX} y={radius} fill="#37474F" fontSize={labelFontSize} textAnchor="middle" dominantBaseline="central">HOLD</text>
        <text x={assessTextX} y={radius} fill="#37474F" fontSize={labelFontSize} textAnchor="middle" dominantBaseline="central">ASSESS</text>
        <text x={trialTextX} y={radius} fill="#37474F" fontSize={labelFontSize} textAnchor="middle" dominantBaseline="central">TRIAL</text>
        <text x={adoptTextX} y={radius} fill="#37474F" fontSize={labelFontSize} textAnchor="middle" dominantBaseline="central">ADOPT</text>
        {
          this.state.points
            .map(function(item) {
              if (item.type == 'old') {
                return (<Triangle point={item} radius={pointRadius} key={`${item.id}`}/>)
              } else {
                return (<Circle point={item} radius={pointRadius} key={`${item.id}`}/>)
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
