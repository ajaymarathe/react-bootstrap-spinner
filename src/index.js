import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class ReactBootstrapSpinner extends Component {
  static propTypes = {
    size: PropTypes.string,
    type: PropTypes.string,
    color: PropTypes.string
  }

  render() {
    const spinnerStyle = {
      height: this.props.size+'rem',
      width: this.props.size+'rem',
    };
    
    const type = this.props.type;
    const color = this.props.color;
    var SpinnerClass = `${'spinner'-type}  ${'text'-color}`;

    return (
      <div className={SpinnerClass} style={spinnerStyle} role="status">
         <span className="visually-hidden">Loading...</span>
      </div>
    )
  }
}
