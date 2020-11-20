import React from 'react';
import Review from './Review.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewCount: 2
    }
  }

  loadMoreReviews() { this.setState({reviewCount: this.state.reviewCount + 5}) }

  render() {
    return (<div>
      {this.props.reviews.slice(0, this.state.reviewCount).map(review => (
        <Review
          review={review}
          key={review._id}
        />))}
    </div>);
  }

}

export default Reviews;