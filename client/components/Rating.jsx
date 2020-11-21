import React, { useRef } from 'react';

class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.size = 15;
  }

  buildEmptyStars() {
    return Array(5).fill().map((ele, idx) => (
      <canvas
        ref={'star' + ++idx}
        width={this.size}
        height={this.size}
      ></canvas>));
  }

  componentDidMount() { [1,2,3,4,5].forEach(star => this.buildStar(this.refs['star' + star].getContext('2d'))); }

  buildStar(ctx) {
    // ctx.fillRect(4,4,12,12);
    var x = this.size;
    var y = .4//top line
    ctx.moveTo(x/2, 0);//move to top center of square
    ctx.lineTo(x*.35, x*y);//complete left side of top spike
    ctx.lineTo(x*.05, x*y);//complete top side of top-left spike
    ctx.lineTo(x*.3, x*.6);//complete bottom side of top-left spike
    ctx.lineTo(x*.2, x);//complete top side of bottom-left spike
    ctx.lineTo(x/2, x*.7);//complete bottom side of bottom-left spike
    ctx.lineTo(x*.8 , x);//complete bottom side of bottom-right spike
    ctx.lineTo(x*.7, x*.6);//complete top side of bottom-right spike
    ctx.lineTo(x*.95, x*y);//complete bottom side of top-right spike
    ctx.lineTo(x*.65, x*y);//complete top side of top-right spike
    ctx.lineTo(x/2, 0);//complete star

    ctx.stroke();
    ctx.fill();
  }

  render() { return <div ref="stars">{this.buildEmptyStars()}</div>; }
};

export default Rating;