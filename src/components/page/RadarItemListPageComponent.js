'use strict';

import React from 'react';
import ListComponent from '../Radar/ListComponent';
import ButtonComponent from '../common/ButtonComponent';

require('styles/page/RadarItemListPage.scss');

class RadarItemListPageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.onCreateRadar = props.onCreateRadar;
  }

  render() {
    return ( <div className="index">
      <ButtonComponent title="创建雷达" onClick={this.onCreateRadar}/ >
      <ListComponent / >
      </div>
    );
  }
}

RadarItemListPageComponent.displayName = 'PageRadarItemListPageComponent';

// Uncomment properties you need
// RadarItemListPageComponent.propTypes = {};
// RadarItemListPageComponent.defaultProps = {};

export default RadarItemListPageComponent;
