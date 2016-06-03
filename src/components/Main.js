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
      let a = [
        {x: -0.5, y: 0.5, type: 'old'},
        {x: 0.5, y: 0.5, type: 'old'},
        {x: -0.5, y: -0.5, type: 'old'},
        {x: 0.5, y: -0.5, type: 'new'}
      ].map (this.cartesian2Screen);
      return (
        <div className="radar">
          <Radar radius={250}
            points={a} />
        </div>
      );
    }

    return (
      <RadarItemListPageComponent onCreateRadar={this.navigateToRadarPage} />
    );
  }

  cartesian2Screen(point) {
    return {
      x: (1 + point.x) * 250,
      y: (1 - point.y) * 250,
      type: point.type
    }
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
