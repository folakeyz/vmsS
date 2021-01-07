import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <Router>
    <Dashboard />
  <Switch>
     {/* <Route path='/' exact component={Home} />  */}
     
     </Switch>
   </Router>
  );
}

export default App;
