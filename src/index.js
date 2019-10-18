import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class ReactBootstrapSpinner extends Component {
  static propTypes = {
    size: PropTypes.string,
    type: PropTypes.string,
    color: PropTypes.string,
  }

  render() {
    const type = this.props.type;

    const divStyle = {
      height: this.props.size+'rem',
      width: this.props.size+'rem'
    };

    const color = this.props.color;

    var SpinnerClass = "spinner-"+type +' '+ "text-"+color;

    return (
      <div className={SpinnerClass} style={divStyle} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    )
  }
}
