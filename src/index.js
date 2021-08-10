import {createStore} from 'redux';
import reducer from './reducer';
import {inc, dec,rnd,res} from './actions';

const store = createStore(reducer);

const {dispatch} = store;

document.getElementById('inc').addEventListener('click', () =>{
    dispatch(inc());
});

document.getElementById('dec').addEventListener('click', () =>{
    dispatch(dec());
});

document.getElementById('res').addEventListener('click', () =>{
    dispatch(res());
});

document.getElementById('rnd').addEventListener('click', () =>{
    let value = Math.floor(Math.random() * 10);
    dispatch(rnd(value));
});

const update = () =>{
    document.getElementById('counter').textContent = store.getState();
};

store.subscribe(update);