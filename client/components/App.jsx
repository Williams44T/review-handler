import React from 'react';
import Overall from './Overall.jsx';
import Breakdown from './Breakdown.jsx';
import Recommendation from './Recommendation.jsx';
import Categories from './Categories.jsx';
import Order from './Order.jsx';
import Reviews from './Reviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avgRating: this.getAvgRating(this.props.product.reviews),
      recommendedPercent: this.getRecommendedPercent(this.props.product.reviews),
      filters: [],
      order: 'newest',
      reviews: this.props.product.reviews.sort((a, b) => Date.parse(b.created) - Date.parse(a.created)),
      reviewCount: 2,
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

  loadMoreReviews() { this.setState({reviewCount: this.state.reviewCount + 5}) }

  orderReviews(reviews) {
    if (this.state.order === 'newest') { reviews.sort((a, b) => Date.parse(b.created) - Date.parse(a.created)); }
    if (this.state.order === 'helpful') { reviews.sort((a, b) => (b.helpful.yes - b.helpful.no) - (a.helpful.yes - a.helpful.no)); }
    //'relevant' is a stretch goal; will behave same as 'helpful' for now
    if (this.state.order === 'relevant') { reviews.sort((a, b) => (b.helpful.yes - b.helpful.no) - (a.helpful.yes - a.helpful.no)); }
    this.setState({reviews, reviewCount: 2});
  }

  toggleOrder(order) {
    if (this.state.order === order) { return; }
    this.setState({order}, () => {
      this.orderReviews(this.state.reviews);
      console.log('state order', this.state.order);
    });
  }

  filterReviews() {
    var filters = this.state.filters.length === 0 ? [1,2,3,4,5] : this.state.filters;
    var reviews = this.props.product.reviews.filter(review => filters.includes(review.rating));
    this.orderReviews(reviews);
  }

  toggleFilter(star) {
    var filters = this.state.filters;
    filters.includes(star) ? filters.splice(filters.indexOf(star), 1) : filters.push(star);
    this.setState({filters}, this.filterReviews);
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
        <Reviews
          reviews={this.state.reviews}
          reviewCount={this.state.reviewCount}
          onClick={this.loadMoreReviews.bind(this)}
        />
      </div>
    </div>);
  }

}

export default App;