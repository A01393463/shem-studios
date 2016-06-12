import React, {Component} from 'react';
import HomeMotto from './HomeMotto.jsx';

export default class HomeMottos extends Component {
  render() {
    return (
      <div className="mottos clearfix">
        <HomeMotto class="lightbulb" image="lightbulb.svg" motto="Learn" fallback="Lightbulb image" />
	<HomeMotto class="musicstand" image="musicstand.svg" motto="Practice" fallback="Music stand image" />
	<HomeMotto class="musicnote" image="musicnote.svg" motto="Play" fallback="Music note image" />
      </div>
    )
  }
}
