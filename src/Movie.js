import React from 'react';
import PropTypes from 'prop-types';
import './css/Movie.css'

function Movie({title, year, summary, poster, genres}){
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title}/>
      <div className="movie__data">
        <h3 className="moive__title" style={{ backgroundColor: 'red'}} >{title}</h3>
        <h5 className="moive__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map( (genre, idx) => {
            return <li key = {idx} className="movie__genre">{genre}</li>;
          })}
        </ul>
        <h5 className="movie__genres">{genres}</h5>
        <p className="moive__summary">{summary}</p>
      </div>
    </div>
  )
}

Movie.propTypes = {
  title:PropTypes.string.isRequired,
  summary:PropTypes.string.isRequired,
  poster:PropTypes.string.isRequired,
  genres:PropTypes.array.isRequired,
};

export default Movie;
