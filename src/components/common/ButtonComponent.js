'use strict';

import React from 'react';

require('styles/common/Button.scss');

class ButtonComponent extends React.Component {
    constructor(props) {
      super(props);
      this.title = props.title;
      this.onClick = props.onClick;
    }

    render() {
      return (
        <button type = "button" onClick={this.onClick}>{this.title}</button>
      );
    }
}

ButtonComponent.displayName = 'CommonButtonComponent';

// Uncomment properties you need
// ButtonComponent.propTypes = {};
// ButtonComponent.defaultProps = {};

export default ButtonComponent;
