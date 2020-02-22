import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card';

// eslint-disable-next-line no-unused-vars
import styles from './styles.scss';

function Results(props) {
  const { tours } = props;

  if (!tours.length) return null;

  return (
    <div className="results_container">
      <div className="results">
        <div className="results_box">
          <ul className="results_list">
            {
              tours.map(tour => <Card tour={tour} />)
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

Results.propTypes = {
  tours: PropTypes.array.isRequired,
};

export default Results;
