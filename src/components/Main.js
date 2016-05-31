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
          <Radar radius={250} points={[{x:120, y:120, type: 'old'}, {x: 150, y:50, type: 'old'}, {x: 180, y: 180, type: 'old'}, {x: 370, y: 380, type: 'new'}, {x: 330, y: 170, type: 'new'}]} />
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
