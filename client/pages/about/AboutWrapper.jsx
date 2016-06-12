import React, {Component} from 'react';
import AboutBillboard from './AboutBillboard.jsx';
import AboutHistory from './AboutHistory.jsx';

export default class AboutWrapper extends Component {
  render() {
    return (
      <div>
        <AboutBillboard />
        <AboutHistory />
      </div>
    )
  }
}
