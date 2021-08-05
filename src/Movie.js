import React from 'react';
import PropTypes from 'prop-types';

function Moive(){
  return <h1></h1>
}

Moive.propTypes = {
  id:PropTypes.number.isRequired,
  title:PropTypes.string.isRequired,
  summary:PropTypes.string.isRequired,
  poster:PropTypes.string.isRequired,
};

export default Moive;
