import React from 'react';

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
    const {data:{data:{movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json");
    this.setState({movies, isLoading:false}) // 키와 값의 변수 이름이 같으면 키값을 생략가능하다.
  }


  render(){
    const { isLoading } = this.state;

    return ( <div>{isLoading?"Loading...":"We are ready"}</div> )
  }
}

export default App;
