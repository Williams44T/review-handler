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
      avgRating: this.getAvgRating(this.props.product.reviews),
      recommendedPercent: this.getRecommendedPercent(this.props.product.reviews),
      filters: [],
      order: 'newest',
      reviews: this.orderReviews(this.props.product.reviews)
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

  orderReviews(reviews) {
    //if the order state is 'newest' order by newest
    //if the order state is 'helpful' order by helpful
    //reset the state of reviews
  }

  filterReviews() {
    var filtered = this.props.product.reviews.filter(review => this.state.filters.includes(review.rating));
    this.setState({reviews: filtered}, this.orderReviews(filtered));
  }

  toggleFilter(star) {
    var filters = this.state.filters;
    filters.includes(star) ? filters.splice(filters.indexOf(star), 1) : filters.push(star);
    this.setState({filters}, this.filterReviews());
  }

  toggleOrder(order) {
    if (this.state.order === order) { return; }
    this.setState({order}, this.orderReviews(this.state.reviews));
  }

  render() {
    return (<div>
      <h3>RATINGS & REVIEWS</h3>
      <div>
        <Overall
          avgRating={this.state.avgRating}
          reviewCount={this.props.product.reviews.length}
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