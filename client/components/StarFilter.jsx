import React from 'react';
import StarToggle from './StarToggle.jsx';

var StarFilter = (props) => (<div style={{display: props.filters.length > 0 ? 'block' : 'none'}}>
  <div>Showing reviews:</div>
  {props.filters.map(filter => (
    // return <div key={filter}>{filter} STARS</div>
    <StarToggle
      key={filter}
      star={filter}
      onClick={props.onClick}
    />
  ))}
</div>);

export default StarFilter;