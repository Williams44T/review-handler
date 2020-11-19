import React from 'react';

var StarFilter = (props) => (<div style={{display: props.filters.length > 0 ? 'block' : 'none'}}>
  <div>Showing reviews:</div>
  {props.filters.map(filter => {
    return <div>{filter} STARS</div>
  })}
</div>);

export default StarFilter;