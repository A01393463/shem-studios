import React, {Component} from 'react';

export default class HomeMotto extends Component {
  render() {
    return (
      <div className={"motto col-md-4 " + this.props.class}>
        <object className="center-block" data={"/images/" + this.props.image} type="image/svg+xml">{this.props.fallback}</object>
        <h1 className="text-center">{this.props.motto}</h1>
      </div>
    )
  }
}
