import {createStore} from 'redux';

const reducer = (state = 0 , action) => {
    switch (action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        case 'RES':
            return state = 0;
        case 'RND':
            return state + action.value;
        default:
            return state;
    }
};

const inc = () =>({type: 'INC'});
const dec = () =>({type: 'DEC'});
const res = () =>({type: 'RES'});
const rnd = (value) =>({type: 'RND',value});
const store = createStore(reducer);

document.getElementById('inc').addEventListener('click', () =>{
    store.dispatch(inc());
});

document.getElementById('dec').addEventListener('click', () =>{
    store.dispatch(dec());
});

document.getElementById('res').addEventListener('click', () =>{
    store.dispatch(res());
});

document.getElementById('rnd').addEventListener('click', () =>{
    let value = Math.floor(Math.random() * 10);
    store.dispatch(rnd(value));
});

const update = () =>{
    document.getElementById('counter').textContent = store.getState();
};

store.subscribe(update);