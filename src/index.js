import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'styles.css'

export default class ReactBootstrapSpinner extends Component {
  static propTypes = {
    size: PropTypes.string,
    type: PropTypes.string,
    color: PropTypes.string,
    customColor: PropTypes.string
  }

  render() {
    const divStyle = {
      height: this.props.size+'rem',
      width: this.props.size+'rem',
      color: this.props.customColor
    };
    
    const type = this.props.type;
    const color = this.props.color;

    var SpinnerClass = "spinner-"+type +' '+ "text-"+color;

    return (
      <div className={SpinnerClass} style={divStyle} role="status">
         <span class="visually-hidden">Loading...</span>
      </div>
    )
  }
}
