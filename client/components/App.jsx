import React from 'react';
import Overall from './Overall.jsx';
import Breakdown from './Breakdown.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewCount: this.props.product.reviews.length,
      avgRating: this.getAvgRating(this.props.product.reviews),
      filters: []
    };
  }

  getAvgRating(reviews) {
    var avg = reviews.reduce((total, review) => total + review.rating, 0) / reviews.length;
    return avg.toFixed(1);
  }

  toggleFilter(star) {
    var filters = this.state.filters;
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
      <h3>RATINGS & REVIEWS</h3>
      <div>
        <Overall
          avgRating={this.state.avgRating}
          reviewCount={this.state.reviewCount}
        />
        <Breakdown
          reviews={this.props.product.reviews}
          filters={this.state.filters}
          onClick={this.toggleFilter.bind(this)}
        />
        {/*
        <Recommendation />
        <Categories /> */}
      </div>
      {/* </div>
        <Filter />
        <Reviews />
        <Actions />
      </div> */}
    </div>);
  }

}

export default App;