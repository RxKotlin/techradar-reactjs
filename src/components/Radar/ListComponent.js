'use strict';

import React from 'react';

require('styles/radar/List.scss');

class ListComponent extends React.Component {

  constructor(props) {
    super();
    this.state = {points: props.points}
  }

  render() {
    return (
        <ul>
        {
          this.state.points
            .map((item) => {
              let index = this.state.points.indexOf(item) + 1;
              return (<li>{index}. {item.name}</li>);
            })
        }
        </ul>
    );
  }
}

ListComponent.displayName = 'RadarListComponent';

// Uncomment properties you need
// ListComponent.propTypes = {};
// ListComponent.defaultProps = {};

export default ListComponent;
