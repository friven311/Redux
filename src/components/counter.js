import React from 'react';
import {connect} from 'react-redux';
import {inc, dec, rnd, res} from '../actions';


const Counter = ({counter, inc, dec, res, rnd}) => {
    return (
      <div className="jumbotrone">
        <h1>{counter}</h1>
        <button onClick={dec}  className="btn btn-primary">DEC</button>
        <button onClick={inc}  className="btn btn-primary">INC</button>
        <button onClick={res}  className="btn btn-primary">RES</button>
        <button onClick={rnd}  className="btn btn-primary">RND</button>
      </div>
    );
}
const mapStateToProps = (state) => {
  return {
    counter: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    inc: () => dispatch(inc()),
    dec: () => dispatch(dec()),
    res: () => dispatch(res()),
    rnd: () => {
        const value = Math.floor(Math.random() * 10);
        dispatch(rnd(value));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);