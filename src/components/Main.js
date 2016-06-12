require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import RadarItemListPageComponent from './page/RadarItemListPageComponent';
import Radar from './svg/RadarComponent';

class AppComponent extends React.Component {
  constructor() {
    super();
    this.state = {page: 'list', margin: 60, radius: 250, arr: []};
    this.screen2Cartesian = this.screen2Cartesian.bind(this);
  }

  navigateToRadarPage() {
    this.setState({page: 'create', margin: 60, radius: 250, arr:[
        {x: -0.5, y: 0.5, type: 'old'},
        {x: 0.5, y: 0.5, type: 'old'},
        {x: -0.5, y: -0.5, type: 'old'},
        {x: 0.5, y: -0.5, type: 'new'}
      ]});
  }

  render() {
    if (this.state.page == 'create') {
      let a = this.state.arr.map (this.cartesian2Screen.bind(this));
      return (
        <div style={{'margin': this.state.margin}}>
          <Radar radius={this.state.radius}
            points={a} onCreatePoint={this.onCreatePoint.bind(this)}/>
        </div>
      );
    }

    return (
      <RadarItemListPageComponent onCreateRadar={this.navigateToRadarPage.bind(this)} />
    );
  }

  onCreatePoint(point) {
    console.log(point);
  }

  cartesian2Screen(point) {
    return {
      x: (1 + point.x) * this.state.radius,
      y: (1 - point.y) * this.state.radius,
      type: point.type
    }
  }

  screen2Cartesian(point) {
    return {
      x: point.x / this.state.radius - 1,
      y: point.y / this.state.radius - 1,
      type: point.type
    }
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
