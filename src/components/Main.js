require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import RadarItemListPageComponent from './page/RadarItemListPageComponent';
import ReactCanvas from 'react-canvas';

var Surface = ReactCanvas.Surface;
var Text = ReactCanvas.Text;

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
        <Surface width={100} height={200} left={0} top={0}>
          <Text style={{top:0, left:0, width:100, height:100, fontSize:12, color: '#FFFFFF'}}>
            123
          </Text>
        </Surface>
      );
    }

    return (
      <RadarItemListPageComponent onCreateRadar={this.navigateToRadarPage} />
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
