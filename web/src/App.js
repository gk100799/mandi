import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from './components/Home/Homepage';
import Login from './components/Authentication/Login';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/login" component={Login} exact />
      </Switch>
    </Router>
  );
}

export default App;
