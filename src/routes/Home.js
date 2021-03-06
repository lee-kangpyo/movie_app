import React from 'react';

import axios from 'axios';
import Movie from '../components/Movie';
import '../css/Home.css'
import Loader from '../components/Loader';

class Home extends React.Component{
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

    return (
            <section className="container">
              {isLoading ? (
                <Loader className="loader" type="spin" color="red" message= "영화 데이터 가져오는중" />
              ) : (
                <div className="movies">
                  {movies.map( item => (
                    <Movie key={item.id} id={item.id} year = {item.year} title={item.title} summary={item.summary} poster={item.medium_cover_image} genres={item.genres}/>
                  ))}
                </div>

              )}
            </section>
          )
  }
}


export default Home;
