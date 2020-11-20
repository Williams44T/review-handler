import React from 'react';
import Overall from './Overall.jsx';
import Breakdown from './Breakdown.jsx';
import Recommendation from './Recommendation.jsx';
import Categories from './Categories.jsx';
import Order from './Order.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewCount: this.props.product.reviews.length,
      avgRating: this.getAvgRating(this.props.product.reviews),
      recommendedPercent: this.getRecommendedPercent(this.props.product.reviews),
      filters: [],
      order: 'newest'
    };
  }

  getAvgRating(reviews) {
    var avg = reviews.reduce((total, review) => total + review.rating, 0) / reviews.length;
    return avg.toFixed(1);
  }

  getRecommendedPercent(reviews) {
    var trueCount = reviews.reduce((count, review) => review.recommended ? ++count : count, 0);
    return Math.round(trueCount / reviews.length * 100);
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

  toggleOrder(order) {
    if (this.state.order === order) { return; }
    this.setState({order});
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
        <Recommendation recommended={this.state.recommendedPercent} />
        <Categories
          categories={this.props.product.rating_categories}
          reviews={this.props.product.reviews}
        />
      </div>
      <div>
        <Order onClick={this.toggleOrder.bind(this)}/>
        {/*
        <Reviews />
        <Actions />
      */}
      </div>
    </div>);
  }

}

export default App;