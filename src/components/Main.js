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
    this.state = {page: 'list', margin: 60, radius: 250, arr: []};
    this.screen2Cartesian = this.screen2Cartesian.bind(this);
  }

  navigateToRadarPage() {
    this.setState({page: 'create', margin: 60, radius: 250, arr:[
        {x: -0.5, y: 0.5, type: 'old', id: UUID.create().toString(), name: 'iOS'},
        {x: 0.5, y: 0.5, type: 'old', id: UUID.create().toString(), name: 'Android'},
        {x: -0.5, y: -0.5, type: 'old', id: UUID.create().toString(), name: 'Node'},
        {x: 0.5, y: -0.5, type: 'new', id: UUID.create().toString(), name: 'Go'}
      ]});
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
      let points = this.state.arr.map (this.cartesian2Screen.bind(this));
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <ListComponent items={items2nd} key={`${UUID.create().toString()}`}/>
            </div>
            <div className="col-md-4 col-md-offset-4">
              <ListComponent items={items1st} key={`${UUID.create().toString()}`}/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-md-offset-1">
              <Radar radius={this.state.radius}
                points={points} didChangedPoints={this.didChangedPoints.bind(this)}/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <ListComponent items={items3rd} key={`${UUID.create().toString()}`}/>
            </div>
            <div className="col-md-4 col-md-offset-4">
              <ListComponent items={items4th} key={`${UUID.create().toString()}`}/>
            </div>
          </div>
        </div>
      );
    }

    return (
      <RadarHomePageComponent showRadar={this.navigateToRadarPage.bind(this)}/>
    );
  }

  didChangedPoints(points) {
    let a = points.map (this.screen2Cartesian.bind(this));
    this.setState({page: 'create', margin: 60, radius: 250, arr: a});
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

  points2Items(point) {
    let item = point;
    item.index = this.state.arr.indexOf(item) + 1;
    return item;
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
