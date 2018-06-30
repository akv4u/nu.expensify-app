import { createStore, combineReducers } from 'redux';
import uuidv4 from 'uuid/v4';
import { Action } from 'rxjs/internal/scheduler/Action';

// action lists
// ADD_EXPENSE
const addExpense = ({description = '', note = '', amount = 0, createdAt = 0}) => ({
    type: 'ADD_EXPENSE',
    expense: {
      id: uuidv4(),
      description,
      note,
      amount,
      createdAt
    }
});

// REMOVE_EXPENSE
const removeExpense = ({id = ''}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});


// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: "SET_TEXT_FILTER",
  text
})

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SET_SORT_BY_DATE_FILTER',
})

// SORT_BY_DATE
const sortByAmount = () => ({
  type: 'SET_SORT_BY_AMOUNT_FILTER',
})

// SET_START_DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE_FILTER',
  startDate
})

// SET_END_DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE_FILTER',
  endDate
})

// Expenses Reducers
const expenseReducerDefaultState = [];
const expenseReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE': 
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter((expense) => expense.id !== action.id)
    case 'EDIT_EXPENSE': 
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense, 
            ...action.updates 
          }
        }
      });
    default: 
      return state;
  }
}

// Filter reducers
const filterReducerDefaultState = [];
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_SORT_BY_AMOUNT_FILTER':
      return {
        ...state,
        sortBy: 'Amount'
      }

    case 'SET_SORT_BY_DATE_FILTER':
      return {
        ...state,
        sortBy: 'Date'
      }      
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'SET_START_DATE_FILTER':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE_FILTER':
      return {
        ...state,
        endDate: action.endDate
      }
    default:
      return state;
  }
}

// const store = createStore (expenseReducer);
const store = createStore (
  combineReducers ({
    expenses: expenseReducer,
    filters: filterReducer
  })
)

store.subscribe(() => {
  console.log (store.getState())
});

const exepenseItemOne = store.dispatch (addExpense ({description: "Rent", amount: 12000}));
const exepenseItemTwo = store.dispatch (addExpense ({description: "Coffee", amount: 400}));
console.log (exepenseItemOne);
store.dispatch (removeExpense ({id:exepenseItemOne.expense.id}));
store.dispatch (editExpense (exepenseItemTwo.expense.id, {description: "Coffee", amount: 600, note: "Price has increased!"}));

store.dispatch (setTextFilter('rent'));
store.dispatch (setTextFilter());
store.dispatch (sortByDate())
store.dispatch (sortByAmount())
store.dispatch (setStartDate(100));
store.dispatch (setEndDate (2000));
store.dispatch (setTextFilter ('ren'));

const demoState = {
  expenses: [{
    id: 'sadfasdfasfasf',
    description: 'Janurary Rent',
    note: 'This was the final payment for that address',
    amount: 4000,
    createdAt: 0,
    modifiedAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', 
    startDate: undefined,
    endDate: undefined
  }
};

