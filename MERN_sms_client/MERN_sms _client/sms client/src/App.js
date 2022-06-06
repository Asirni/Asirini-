import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import AddExam from './components/AddExam';
import ShowExamList from './components/ShowExamList';
import ShowExamDetails from './components/ShowExamDetails';
import UpdateExamDetails from './components/UpdateExamDetails';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ShowExamList} />
          <Route path='/add-exam' component={AddExam} />
          <Route path='/edit-exam/:id' component={UpdateExamDetails} />
          <Route path='/show-exam/:id' component={ShowExamDetails} />
        </div>
      </Router>
    );
  }
}

export default App;
