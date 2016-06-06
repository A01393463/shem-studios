import React, {Component} from 'react';

export default class HomeMotto extends Component {
  render() {
    return (
      <div className="motto col-md-4">
        <img className={"center-block " + this.props.class} src={"/images/" + this.props.image} alt={this.props.alt} />
        <h1 className="text-center">{this.props.motto}</h1>
      </div>
    )
  }
}
