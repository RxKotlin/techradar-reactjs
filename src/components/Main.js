// require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import RadarItemListPageComponent from './page/RadarItemListPageComponent';
import RadarHomePageComponent from './page/RadarHomePageComponent';
import Radar from './svg/RadarComponent';
import ListComponent from './Radar/ListComponent';
import {Button, Image, Grid, Row, Col} from 'react-bootstrap';

var UUID = require('uuid-js');

class AppComponent extends React.Component {
  constructor() {
    super();
    this.state = {page: 'create', radius: 300, arr: []};
    this.screen2Cartesian = this.screen2Cartesian.bind(this);
  }

  navigateToRadarPage() {
    this.setState({page: 'create', radius: 300, arr:[]});
  }

  render() {
    if (this.state.page == 'create') {
      let items = this.state.arr.map(this.points2Items.bind(this))

      let items1st = items.filter((item) => {
        return item.x > 0 && item.y > 0
      }).map(this.cartesian2Screen.bind(this));
      let items2nd = items.filter((item) => {
        return item.x < 0 && item.y > 0
      }).map(this.cartesian2Screen.bind(this));
      let items3rd = items.filter((item) => {
        return item.x < 0 && item.y < 0
      }).map(this.cartesian2Screen.bind(this));
      let items4th = items.filter((item) => {
        return item.x > 0 && item.y < 0
      }).map(this.cartesian2Screen.bind(this));
      let points = this.state.arr;
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <ListComponent title="Techniques" items={items2nd} key={`${UUID.create().toString()}`}/>
            </div>
            <div className="col-md-4 col-md-offset-4">
              <ListComponent title="Tools" items={items1st} key={`${UUID.create().toString()}`}/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Radar radius={this.state.radius}
                points={points} didChangedPoints={this.didChangedPoints.bind(this)}/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <ListComponent title="Platforms" items={items3rd} key={`${UUID.create().toString()}`}/>
            </div>
            <div className="col-md-4 col-md-offset-4">
              <ListComponent title="Languages & Frameworks" items={items4th} key={`${UUID.create().toString()}`}/>
            </div>
          </div>
        </div>
      );
    }

    return (
      <RadarHomePageComponent showRadar={this.navigateToRadarPage.bind(this)}/>
    );
  }

  cartesian2Screen(point) {
    return {
      x: (1 + point.x) * this.state.radius,
      y: (1 - point.y) * this.state.radius,
      type: point.type,
      id: point.id,
      name: point.name,
      index: point.index
    }
  }

  screen2Cartesian(point) {
    return {
      x: point.x / this.state.radius - 1,
      y: 1 - point.y / this.state.radius,
      type: point.type,
      id: point.id,
      name: point.name,
      index: point.index
    }
  }

  didChangedPoints(points) {
    this.setState({page: 'create', margin: 60, radius: 250, arr: points});
  }

  points2Items(point) {
    let item = point;
    item.index = this.state.arr.indexOf(item) + 1;
    return item;
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
