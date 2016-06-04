import React, {Component} from 'react';
import HomeMotto from './HomeMotto.jsx';

export default class HomeMottos extends Component {
  render() {
    return (
      <div className="mottos clearfix">
        <HomeMotto image="man.jpg" alt="Man" motto="Learn" />
	<HomeMotto image="girl.jpg" alt="Girl" motto="Practice" />
	<HomeMotto image="clarinetgirl.jpg" alt="clarinetist" motto="Play" />
      </div>
    )
  }
}
