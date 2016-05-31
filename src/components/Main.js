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
        <div className="radar">
          <Radar radius={250} points={[{x:20, y:20}, {x: 50, y:50}, {x: 80, y: 80}]} />
        </div>
      );
    }

    return (
      <RadarItemListPageComponent onCreateRadar={this.navigateToRadarPage} />
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
