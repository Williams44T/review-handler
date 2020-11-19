import React from 'react';
import Overall from './Overall.jsx';
import Breakdown from './Breakdown.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewCount: this.props.product.reviews.length,
      avgRating: this.getAvgRating(this.props.product.reviews)
    };
  }

  getAvgRating(reviews) {
    var avg = reviews.reduce((total, review) => total + review.rating, 0) / reviews.length;
    return avg.toFixed(1);
  }

  render() {
    return (<div>
      <h3>RATINGS & REVIEWS</h3>
      <div>
        <Overall
          avgRating={this.state.avgRating}
          reviewCount={this.state.reviewCount}
        />
        <Breakdown reviews={this.props.product.reviews} />
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