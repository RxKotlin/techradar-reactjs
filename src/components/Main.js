require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ListComponent from './Radar/ListComponent';

class AppComponent extends React.Component {
  render() {
    return ( < div className = "index" >
      < ListComponent / >
      < /div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
