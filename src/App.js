import React from "react";
import{ Dropdown, DropdownButton, Button} from 'react-bootstrap'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Tasks from './components/tasks';

export default function App() {
  return (
  <div class="dd-button">

    <Router>
      <div className="home-btn">
        <Button variant="outline-primary"><Link to="/">Home</Link></Button>
      </div>


      <Switch>
        <Route path="/user_tasks/1">
          <Tasks user_id='1' name='Clayton'/>
        </Route>
        <Route path="/user_tasks/2">
          <Tasks user_id='2' name='Mahmoud'/>
        </Route>
        <Route path="/user_tasks/3">
          <Tasks user_id='3' name='Josh'/>
        </Route>
        <Route path="/user_tasks/4">
        < Tasks user_id='4' name='Nathan'/>
        </Route>
        <Route path="/user_tasks/5" >
          <Tasks user_id='5' name='Guest'/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      </Router>
    </div>
    );
  }

function Home() {
  return(
    <div className="page-container">
      <div className="home">
        <h1 className="welcome">Nebullam Action List</h1>
        <h4 className="motto">"Lettuce Make It Happen!"</h4>
        <div>
          <DropdownButton id="dropdown-button-drop-right" title="Who Are You?" key="right" drop="right" variant="info">
            <Dropdown.Item eventKey="1"> <Link to="/"></Link> </Dropdown.Item>
            <Dropdown.Item eventKey="2"> <Link to="/user_tasks/1">Clayton</Link> </Dropdown.Item>
            <Dropdown.Item eventKey="3"> <Link to="/user_tasks/2">Mahmoud</Link> </Dropdown.Item>
            <Dropdown.Item eventKey="4"> <Link to="/user_tasks/3">Josh</Link> </Dropdown.Item>
            <Dropdown.Item eventKey="5"> <Link to="/user_tasks/4">Nathan</Link> </Dropdown.Item>
            <Dropdown.Item eventKey="6"> <Link to="/user_tasks/5">Guest User</Link> </Dropdown.Item>
          </DropdownButton>
        </div>
          <div className="lettuce">
            <img src={ require('./images/laughing_lettuce.jpeg') } />
          </div>
      </div>
    </div>
  )
}
