import React, { useState } from 'react';
import './Hideable.css';

const Hideable: React.FC = (props) => {
  const [hidden, setHidden] = useState(true);
  return (
    <div className="Hideable" data-testid="Hideable">
      <div className={`hideable-children ${hidden && 'hideable-hidden'}`}>
        {props.children}
      </div>
      <div
        className="hideable-arrow-container switching-opacity switch-opacity-a-lot"
        onClick={() => setHidden(!hidden)}>
        <div
          className={`hideable-arrow-content ${
            !hidden ? `hideable-arrow-content-flipped` : ''
          }`}>
          {'|>'}
        </div>
      </div>
    </div>
  );
};

export default Hideable;
