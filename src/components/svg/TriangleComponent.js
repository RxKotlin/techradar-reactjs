'use strict';

import React from 'react';

require('styles/svg/Triangle.scss');

class TriangleComponent extends React.Component {
  constructor(props) {
    super();
    this.point = props.point;
    this.radius = props.radius;
  }
  render() {
    let radius = this.radius;
    let x1 = this.point.x;
    let y1 = this.point.y - radius;
    let x2 = this.point.x - radius * Math.sqrt(3) / 2;
    let y2 = this.point.y + radius / 2;
    let x3 = this.point.x + radius * Math.sqrt(3) / 2;
    let y3 = this.point.y + radius / 2;
    let points = x3 + ',' + y3 + ' ' + x1 + ',' + y1 + ' ' + x2 + ',' + y2;

    return (
      <polygon points={points} fill="#4DD0E1" stroke-width="1"/>
    );
  }
}

TriangleComponent.displayName = 'SvgTriangleComponent';

// Uncomment properties you need
// TriangleComponent.propTypes = {};
// TriangleComponent.defaultProps = {};

export default TriangleComponent;
