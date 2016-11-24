'use strict';

import React from 'react';

require('styles/radar/List.scss');

var UUID = require('uuid-js');

class ListComponent extends React.Component {

  constructor(props) {
    super();
    this.state = {items: props.items}
    this.title = props.title;
  }

  render() {
    return (
        <div>
        {this.title}
        <ul>
        {
          this.state.items
            .map((item) => {
              return (<li>{item.index}. {item.name}</li>);
            })
        }
        </ul>
        </div>
    );
  }
}

ListComponent.displayName = 'RadarListComponent';

// Uncomment properties you need
// ListComponent.propTypes = {};
// ListComponent.defaultProps = {};

export default ListComponent;
