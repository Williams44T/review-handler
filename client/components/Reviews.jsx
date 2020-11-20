import React from 'react';

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
      {this.props.reviews.map(review => {
        return <p>{review.rating}</p>
      })}
    </div>);
  }

}

export default Reviews;

/*
stars
date
summary
detail
recommended?
photos
username
verified?
was this review helpful
yes
number
no
number
*/
