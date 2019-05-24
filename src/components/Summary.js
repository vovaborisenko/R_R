import React from 'react';
import PropTypes from 'prop-types';

const Summary = ({ingredients, steps}) =>
  <div className="summary">
    {ingredients.length} Ingredients | {steps.length} Steps
  </div>;

Summary.propTypes = {
  ingredients: PropTypes.array.isRequired,
  steps: PropTypes.array.isRequired
}

export default Summary;