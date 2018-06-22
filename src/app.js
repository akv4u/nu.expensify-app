import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, NavLink, Switch} from 'react-router-dom';
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const ExpenseDashboardPage = () => {
  return (<div>
    This is my Expense dashboard component
  </div>)
}

const AddExpensePage = () => {
  return (<div>
    This is my Add expense component
  </div>)
}

const EditExpensePage = () => {
  return (<div>
    This is my Edit expense component
  </div>)
}

const HelpPage = () => {
  return (<div>
    This is my Help component
  </div>)
}

const NotFoundPage = () => {
  return (<div>
    404 - <Link to='/'>Go Home</Link>
  </div>)
}

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <Link to="/">About</Link>
    <Link to="/create">Create</Link>
    <Link to="/edit">Edit</Link>
    <Link to="/help">Help</Link>
  </header>
);

const routes = (
  <BrowserRouter> 
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true}/>
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render (routes, document.getElementById('app'));
