import { createStore } from 'redux'

// Reducer functions
// 1. Reducers are pure functions
// 2. Neve change state or action

const countReducer = (state = {count: 0}, action) => { 
  switch (action.type) {
    case  'INCREMENT':
      return {
        count: state.count + action.increatementBy
      }
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
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
}

const store = createStore (countReducer);

store.subscribe(() => {
  console.log (store.getState())
});


// Action generators - functions that return action objects
const incrementCount = ({increatementBy = 1} = {}) => ({
  type: 'INCREMENT',
  increatementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const setCount = ({count = 1} = {}) => ({
  type: 'SET',
  count
})

const resetCount = () => ({
  type: 'RESET'
})

store.dispatch (incrementCount())
store.dispatch (incrementCount ({increatementBy: 5}));
store.dispatch (incrementCount ({increatementBy: 15}));

store.dispatch (decrementCount ({decrementBy: 10}));

store.dispatch (setCount ({count: 100}))

store.dispatch (resetCount())
