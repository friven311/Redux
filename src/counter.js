import React from 'react';

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

export default Counter;