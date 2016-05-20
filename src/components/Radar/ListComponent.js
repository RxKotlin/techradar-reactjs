'use strict';

import React from 'react';

require('styles/radar/List.scss');

class ListComponent extends React.Component {
  render() {
    return ( < div className = "list-component" >
      < ul >
      < li > iOS < /li> < li > Android < /li> < li > HTML < /li> < li >
      DevOps < /li> < /ul> < /div>
    );
  }
}

ListComponent.displayName = 'RadarListComponent';

// Uncomment properties you need
// ListComponent.propTypes = {};
// ListComponent.defaultProps = {};

export default ListComponent;
