import React from 'react';

var App = (props) => (<div>
<div>please let this work</div>
<div>{props.product.reviews[0].username}</div>
</div>);

export default App;