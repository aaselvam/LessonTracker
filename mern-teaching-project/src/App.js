import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component"
import LessonList from "./components/lesson-list.component"
import LessonEdit from "./components/lesson-edit.component"
import CreateLesson from "./components/create-lesson.component"
import CreateUser from "./components/create-user.component"

function App() {
  return (
    <Router>
      <Navbar/>
        <br/>
        <Route path='/' exact component={LessonList}/>
        <Route path='/edit/:id' component={LessonEdit}/>
        <Route path='/create' component={CreateLesson}/>
        <Route path='/user' component={CreateUser}/>
    </Router>
  );
}

export default App;
