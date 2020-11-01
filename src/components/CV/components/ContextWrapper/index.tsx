import React from 'react';
import './ContextWrapper.css';

const ContextWrapper: React.FC = (props) => (
  <span className="switching-opacity switch-opacity-a-few-with-color with-normal-weight">
    {props.children}
  </span>
);

export default ContextWrapper;
