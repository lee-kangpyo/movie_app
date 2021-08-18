// npm add react-loading
import React from 'react';
import ReactLoading from 'react-loading';

function Loader({type, color, message}){
  return (
    <div className="contentWrap" style={{ position:"fixed", top:"50%", left:"50%", transform:"translate(-50%, -50%)" }}>
      <div/>
      <h2>{message}</h2>
      <ReactLoading type={type} color={color} height={"100%"} width={"100%"}/>
    </div>
  )
}

export default Loader;
