import React from 'react';

function Food(props){
  return <h1>I like {props.fav}</h1>
}

function Food2(props){
  var { fav } = props
  return <h1>I like {fav}</h1>
}

function Food3({ fav }){
  return <h1>I like {fav}</h1>
}

function App() {
  //return <div className="App" />;
  return (
    <div>
      <h1>Hello</h1>
      <Food3 fav="kimchi"/>
    </div>
  );
}

export default App;
