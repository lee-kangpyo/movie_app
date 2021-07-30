import React from 'react';

function Food(props){
<<<<<<< HEAD
  return <h1>I like {props.fav}</h1>
}

function Food2(props){
  var { fav } = props
  return <h1>I like {fav}</h1>
}

function Food3({ fav }){
  return <h1>I like {fav}</h1>
=======
  console.log(props)
  return <h1>I like potato!sadfsaf</h1>
>>>>>>> 83c704e7f781f9494ac939c8ce01f33f31be4f26
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
