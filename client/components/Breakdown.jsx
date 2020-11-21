import React from 'react';
import StarCount from './StarCount.jsx';
import StarFilter from './StarFilter.jsx';

class Breakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counts: this.countStars(this.props.reviews),
    }
  }

  countStars(reviews) {
    var counts = [[0,0],[1,0],[2,0],[3,0],[4,0],[5,0]]
    reviews.forEach(review => counts[review.rating][1]++);
    counts.reverse().pop()
    return counts;
  }

  render() {
    return (<div>
      <h4>RATING BREAKDOWN</h4>
      <StarFilter
        filters={this.props.filters}
        onClick={this.props.onClick}
      />
      {this.state.counts.map(count => <StarCount
        key={count[0]}
        star={count[0]}
        count={count[1]}
        onClick={this.props.onClick}
      />)}
    </div>)
  }

}

export default Breakdown;