'use strict';

import React from 'react';

require('styles/svg/Circle.scss');

class CircleComponent extends React.Component {
  constructor(props) {
    super();
    this.point = props.point;
    this.radius = props.radius;
  }

  render() {
    let point = this.point;
    let radius = this.radius;

    return (
      <circle cx={point.x} cy={point.y} r={radius} fill="green" />
    );
  }
}

CircleComponent.displayName = 'SvgCircleComponent';

// Uncomment properties you need
// CircleComponent.propTypes = {};
// CircleComponent.defaultProps = {};

export default CircleComponent;
