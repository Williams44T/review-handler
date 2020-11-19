import React from 'react';

class Breakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counts: this.countStars(this.props.reviews),
      filters: []
    }
  }

  countStars(reviews) {
    var counts = [[0,0],[1,0],[2,0],[3,0],[4,0],[5,0]]
    reviews.forEach(review => counts[review.rating][1]++);
    counts.reverse().pop()
    return counts;
  }

  toggleFilter(star) {
    var filters = this.state.filter;
    if (filters.includes(star)) {
      var idx = filters.indexOf(star);
      filters.splice(idx, 1);
    } else {
      filters.push(star)
    }
    this.setState({filters});
  }

  render() {
    return (<div>
      <h4>RATING BREAKDOWN</h4>
      {/*if (this.state.filters.length > 0) { return <StarFilter filters={this.state.filters} />}*/}
      {this.state.counts.map(count => {
        return <div key={count[0]}>{count[0]}, {count[1]}</div>
      })}
    </div>)
  }

}

export default Breakdown;