import React from 'react';
import './App.css';
import ShowAnimal from './component/ShowAnimal'
import UpdateForm from './component/UpdateForm'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={ShowAnimal} />
          <Route exact path='/:index' component={UpdateForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;