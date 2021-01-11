import React from 'react';
import './Context.css';

const Context: React.FC = (props) => (
  <span className="switching-opacity switch-opacity-a-few-with-color with-normal-weight">
    {props.children}
  </span>
);

export default Context;
