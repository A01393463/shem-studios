import React, {Component} from 'react';
import HomeMotto from './HomeMotto.jsx';

export default class HomeMottos extends Component {
  render() {
    return (
      <div className="mottos clearfix">
        <HomeMotto class="lightbulb" image="lightbulb.svg" alt="Lightbulb" motto="Learn" />
	<HomeMotto class="musicstand" image="musicstand.svg" alt="Music stand" motto="Practice" />
	<HomeMotto class="musicnote" image="musicnote.svg" alt="Music note" motto="Play" />
      </div>
    )
  }
}
