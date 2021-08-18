import React from 'react';

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if(!location.state){
      history.push('/');
    }
  }

  render() {
    return <span>hello</span>;
  }
}

export default Detail;
