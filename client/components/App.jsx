import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (<div>
      <div>please let this work</div>
      <div>{this.props.product.reviews[0].username}</div>
    </div>);
  }

}

export default App;