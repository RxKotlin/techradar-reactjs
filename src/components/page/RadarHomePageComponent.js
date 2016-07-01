'use strict';

import React from 'react';
import {Button, Image, Grid, Row, Col} from 'react-bootstrap';

require('styles/page/RadarHomePage.scss');

class RadarHomePageComponent extends React.Component {
  
  constructor(props) {
    super(props);
    this.onCreateRadar = props.showRadar;
  }
  
  render() {
    return (
      <div className="radarhomepage-component">
        <Grid>
          <Row>
            <Col md={12}>
              <Image src="http://www.impactprogram.org/wp-content/uploads/2014/09/RADAR_4color.png" rounded />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="col-md-4 center-block">
                <Button onClick={this.onCreateRadar}>Come on</Button>
                <Button>pa pa</Button>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

RadarHomePageComponent.displayName = 'PageRadarHomePageComponent';

// Uncomment properties you need
// RadarHomePageComponent.propTypes = {};
// RadarHomePageComponent.defaultProps = {};

export default RadarHomePageComponent;
