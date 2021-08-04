import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


class App extends React.Component{

  state = {
    isLoading:true,
    movies:[],
  }

  componentDidMount(){
    // 영화 데이터 로딩
    this.getMovies();
  }

  getMovies = async () => {
    const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
    console.log(movies);
  }


  render(){
    const { isLoading } = this.state;

    return ( <div>{isLoading?"Loading...":"We are ready"}</div> )
  }
}

export default App;
