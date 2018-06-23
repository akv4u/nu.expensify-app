import { createStore } from 'redux'


// Action generators - functions that return action objects

const incrementCount = () => ({type: 'INCREMENT'})

const store = createStore ((state = {count: 0}, action) => {
 
  switch (action.type) {
    case  'INCREMENT':
      const increatementBy = typeof action.increatementBy === 'number'? action.increatementBy : 1;
      return {
        count: state.count + increatementBy
      }
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number'? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };   
    case 'RESET':
      return {
        count: 0
      };      
    default: 
       return state;
  }
})

store.subscribe(() => {
  console.log (store.getState())
});

store.dispatch({
  type: 'INCREMENT',
  increatementBy: 5
});

store.dispatch({
  type: 'DECREMENT'
});

store.dispatch({
  type: 'DECREMENT'
})
store.dispatch({
  type: 'DECREMENT'
})
store.dispatch({
  type: 'DECREMENT'
})
store.dispatch({
  type: 'RESET',
  decrementBy: 10
});

store.dispatch({
  type: 'SET',
  count: 101
});
