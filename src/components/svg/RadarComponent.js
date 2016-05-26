'use strict';

import React from 'react';

require('styles/svg/Radar.scss');

class RadarComponent extends React.Component {
  render() {
    return (
      <svg width="500" height="500" version="1.1"
xmlns="http://www.w3.org/2000/svg">
        <circle cx="250" cy="250" r="250" fill="#E8E8E8"/>
        <circle cx="250" cy="250" r="210" fill="#DEDEDE" stroke="white"
stroke-width="2"/>
        <circle cx="250" cy="250" r="150" fill="#D3D3D3" stroke="white"
stroke-width="2"/>
        <circle cx="250" cy="250" r="80" fill="#C8C8C8" stroke="white"
stroke-width="2"/>
      </svg>
    );
  }
}

RadarComponent.displayName = 'SvgRadarComponent';

// Uncomment properties you need
// RadarComponent.propTypes = {};
// RadarComponent.defaultProps = {};

export default RadarComponent;
