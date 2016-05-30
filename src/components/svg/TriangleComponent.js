'use strict';

import React from 'react';

require('styles/svg/Triangle.scss');

class TriangleComponent extends React.Component {
  render() {
    return (
      <polygon points="200,10 250,190 160,210"
        style="fill:lime;stroke:purple;stroke-width:1"/>
    );
  }
}

TriangleComponent.displayName = 'SvgTriangleComponent';

// Uncomment properties you need
// TriangleComponent.propTypes = {};
// TriangleComponent.defaultProps = {};

export default TriangleComponent;
