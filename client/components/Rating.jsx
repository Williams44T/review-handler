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

  componentDidMount() { [1,2,3,4,5].forEach((star, idx) => this.buildStar(this.refs['star' + star].getContext('2d'), star)); }

  buildStar(ctx, star) {
    var x = this.size;
    var topHeight = .4
    var topWidth = .9;
    var topSpikeWidth = .25;
    var centerHeight = .6;
    var centerWidth = .34;
    var bottomHeight = .73;
    var bottomWidth = .6;

    ctx.moveTo(x/2, 0);//top spike point
    ctx.lineTo(x*(1-topSpikeWidth)/2, x*topHeight);//top spike, left
    ctx.lineTo(x*(1-topWidth)/2, x*topHeight);//top-left spike, top
    ctx.lineTo(x*(1-centerWidth)/2, x*centerHeight);//top-left spike, bottom
    ctx.lineTo(x*(1-bottomWidth)/2, x);//bottom-left spike, top
    ctx.lineTo(x/2, x*bottomHeight);//bottom-left spike, bottom
    ctx.lineTo(x*(1-((1-bottomWidth)/2)), x);//bottom-right spike, bottom
    ctx.lineTo(x*(1-((1-centerWidth)/2)), x*centerHeight);//bottom-right spike, top
    ctx.lineTo(x*(1-((1-topWidth)/2)), x*topHeight);//top-right spike, bottom
    ctx.lineTo(x*(1-((1-topSpikeWidth)/2)), x*topHeight);//top-right spike, top
    ctx.lineTo(x/2, 0);//top spike, right

    ctx.strokeStyle = 'black';
    // ctx.lineWidth = 2;
    ctx.stroke();
    if (star <= this.props.rating) { ctx.fill(); }
  }

  render() { return <div ref="stars">{this.buildEmptyStars()}</div>; }
};

export default Rating;