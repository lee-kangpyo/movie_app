import React from 'react';
import PropTypes from 'prop-types';
/*
function Food({ name, picture, rating }){
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src = {picture} alt={name}/>
    </div>

  )
}

const foodILike = [
  {
    id:1,
    name:"김치",
    image:"https://w.namu.la/s/2958e0d7304f1b744021983c55747de2840e0e59a1f3d677d9315f5bad981f002769ce59921aea02b2dd23b5384a0ce30864fe6d84ea1b9aaed80fb3b5f60b6dd7c7f37c7671b136484042a68d20de862cf70a3c8349c2c3a21ecfae6e3617c18b726ef93561edea4d9d9b3700de2956",
    rating:5,
  },
  {
    id:2,
    name:"삼겹살",
    image:"https://w.namu.la/s/16c62517c7af89b2adc7f4841488292f142d5d99d8d9ea762b5fe757aa0cffd4fc71380f8a6179109683ec9419a66b77e999f949b18282e3e59e2b829fe7d70f28fd91e49b7248f621c4af9701889c39a72ec4f718b6f752d9277f87dfc508207e4231fb4c016620198f8cc0c47db678",
    rating:4.9,
  },
  {
    id:3,
    name:"비빔밥",
    image:"https://w.namu.la/s/02034f3c4f5bce39b228d9e368727f091d03ac093efec038a1bcd28f1d046eacfc918db2fad3d98bdda454966eb61895654f4ec4e68a4c35de5a337759028cc4c7a30a8967c6040d8996d12f4d3d78bed5968ae843202ede49a6e550fae5c138415252a195f09bc3df4bd84c9d00d37e",
    rating:4,
  },
  {
    id:4,
    name:"돈까스",
    image:"https://w.namu.la/s/2ceb50c734a752d27b67846e19a4d0c82830692576da4e9028cc58278b6b23ab07a3df76d84a15f8017dfca3940fa9a79479c00c3e7334139c49b03efdc43895c7471204c697d3ebc44cf51874eabfc5f3dbd566963ba435bc868c2b20f32a5e0f5df5726e9e08abe2f9dbdef5bed490",
    rating:3,
  },
  {
    id:5,
    name:"김밥",
    image:"https://ww.namu.la/s/33c9509d550db600898d73c2583211037408f060b2d4f8748fb39d34c8159a2e9867520fb83885e0dbe2ab3884f98c12ed4d9892ea11f54802ab2915170378819e97494089967aff31be4f5b0055caab60654dbaf574ab4059cc5b383b7f8e75",
    rating:2,
  },
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key = {dish.id} name={dish.name} picture = {dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
}*/

class App extends React.Component{
  constructor(props){
    super(props);
    console.log('constructor() 실행 됨');
  }

  state = {
    count:0
  }

  add = () => {
    //this.setState({count:this.state.count+1}) // this.state.count는 성능 이슈가 생길수 있음
    this.setState(current => ({
      count: current.count+1
    }))
  }

  minus = () => {
    this.setState(current => ({
      count: current.count-1
    }))
  }

  render(){
    console.log('render() 실행 됨');
    return (
        <div>
          <h1>The number is: {this.state.count}</h1>
          <button onClick={this.add}>Add</button>
          <button onClick={this.minus}>Minus</button>
        </div>
    )
  }
}

export default App;
