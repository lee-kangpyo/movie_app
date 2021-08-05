import React from 'react';

import axios from 'axios';
import Movie from './Movie';


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
    const {data:{data:{movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading:false}) // 키와 값의 변수 이름이 같으면 키값을 생략가능하다.
  }


  render(){
    const { isLoading, movies } = this.state;
    console.log(movies)
    return ( <div>{isLoading
              ?"Loading..."
              :movies.map((item)=>{
                return<Movie id={item.id} year = {item.year} title={item.title} summary={item.summary} poster={item.medium_cover_image}/>;
              })}</div> )
  }
}


export default App;
