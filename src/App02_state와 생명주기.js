import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component{
  constructor(props){
    super(props);
    console.log('constructor() 실행 됨');
  }

  componentDidMount() {
    console.log("componentDidMount() 컴포넌트가 처음 화면에 그려지면 실행되는 함수")
  }

  componentDidUpdate() {
    console.log("componentDidUpdate() 실행됨")
  }

  componentWillUnmount() {
    console.log("componentWillUnmount() 실행됨")
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
