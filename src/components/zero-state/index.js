import React from 'react';
import SearchIcon from './search-icon';
import * as strings from './strings';


// eslint-disable-next-line no-unused-vars
import styles from './styles.scss';

function ZeroState() {
  return (
    <div className="zero-state">
      <div>
        <SearchIcon />
      </div>
      <span>{strings.ZERO_STATE_TEXT}</span>
    </div>
  );
}

export default ZeroState;
