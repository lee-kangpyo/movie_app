import React from 'react';

function Food({ name, img }){
  return (
    <div>
      <h2>I like {name}</h2>
      <img src = {img}/>
    </div>

  )
}

const foodILike = [
  {
    name:"김치",
    image:"https://www.bgw.kr/wp-content/uploads/2019/12/%ED%8F%AC%EA%B8%B0%EA%B9%80%EC%B9%98-1200x1200.png",
  },
  {
    name:"삼겹살",
    image:"https://w.namu.la/s/16c62517c7af89b2adc7f4841488292f142d5d99d8d9ea762b5fe757aa0cffd4fc71380f8a6179109683ec9419a66b77e999f949b18282e3e59e2b829fe7d70f28fd91e49b7248f621c4af9701889c39a72ec4f718b6f752d9277f87dfc508207e4231fb4c016620198f8cc0c47db678"
  },
  {
    name:"비빔밥",
    image:"https://w.namu.la/s/02034f3c4f5bce39b228d9e368727f091d03ac093efec038a1bcd28f1d046eacfc918db2fad3d98bdda454966eb61895654f4ec4e68a4c35de5a337759028cc4c7a30a8967c6040d8996d12f4d3d78bed5968ae843202ede49a6e550fae5c138415252a195f09bc3df4bd84c9d00d37e"
  },
  {
    name:"돈까스",
    image:"https://w.namu.la/s/2ceb50c734a752d27b67846e19a4d0c82830692576da4e9028cc58278b6b23ab07a3df76d84a15f8017dfca3940fa9a79479c00c3e7334139c49b03efdc43895c7471204c697d3ebc44cf51874eabfc5f3dbd566963ba435bc868c2b20f32a5e0f5df5726e9e08abe2f9dbdef5bed490"
  },
  {
    name:"김밥",
    image:"https://ww.namu.la/s/33c9509d550db600898d73c2583211037408f060b2d4f8748fb39d34c8159a2e9867520fb83885e0dbe2ab3884f98c12ed4d9892ea11f54802ab2915170378819e97494089967aff31be4f5b0055caab60654dbaf574ab4059cc5b383b7f8e75"
  },
];

function App() {
  return (
    <div>
      {foodILike.map(dish => {return <Food name={dish.name} img = {dish.image} />})}
    </div>
  );
}

export default App;
