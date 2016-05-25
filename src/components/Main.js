require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import RadarItemListPageComponent from './page/RadarItemListPageComponent';
import Radar from './svg/RadarComponent';

class AppComponent extends React.Component {
  constructor() {
    super();
    this.state = {page: 'list'};
    this.navigateToRadarPage = this.navigateToRadarPage.bind(this);
  }

  navigateToRadarPage() {
    this.setState({page: 'create'});
  }

  render() {
    if (this.state.page == 'create') {
      return (
        <Radar />
      );
    }

    return (
      <RadarItemListPageComponent onCreateRadar={this.navigateToRadarPage} />
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
