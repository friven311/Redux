import {createStore, bindActionCreators} from 'redux';
import reducer from './reducer';
import {inc, dec,rnd,res} from './actions';

const store = createStore(reducer);
const {dispatch} = store;

const incDispatch = bindActionCreators(inc, dispatch);
const decDispatch = bindActionCreators(dec, dispatch);
const resDispatch = bindActionCreators(res, dispatch);
const rndDispatch = bindActionCreators(rnd, dispatch);

document.getElementById('inc').addEventListener('click', incDispatch);

document.getElementById('dec').addEventListener('click',decDispatch);

document.getElementById('res').addEventListener('click',resDispatch);

document.getElementById('rnd').addEventListener('click', () =>{
    let value = Math.floor(Math.random() * 10);
    rndDispatch(value)
});

const update = () =>{
    document.getElementById('counter').textContent = store.getState();
};

store.subscribe(update);