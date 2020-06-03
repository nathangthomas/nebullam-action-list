import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../App.css';


export class HomePage extends Component {
  render(){
    return(
      <div class="dd-button">
        <Router>

        <DropdownButton id="dropdown-basic-button" title="Who Are You?">
          <Dropdown.Item> <Link to="/">Home</Link> </Dropdown.Item>
          <Dropdown.Item> <Link to="/user_tasks/0">Clayton</Link> </Dropdown.Item>
          <Dropdown.Item> <Link to="/user_tasks/0">Mahmoud</Link> </Dropdown.Item>
          <Dropdown.Item> <Link to="/user_tasks/1">Josh</Link> </Dropdown.Item>
          <Dropdown.Item> <Link to="/user_tasks/1">Nathan</Link> </Dropdown.Item>
          <Dropdown.Item> <Link to="/user_tasks/1">Guest User</Link> </Dropdown.Item>
        </DropdownButton>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/user_tasks/0">
              <Tasks user_id='0'/>
            </Route>
            <Route path="/user_tasks/1">
              <Tasks user_id='1'/>
            </Route>
            <Route path="/user_tasks/2">
              <Tasks user_id='1'/>
            </Route>
            <Route path="/user_tasks/3">
            < Tasks user_id='1'/>
            </Route>
            <Route path="/user_tasks/4">
              <Tasks user_id='1'/>
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
        <div class="page-container">
          <div class="home">
            <h1 class="welcome">Nebullam Action List</h1>
            <h4 class="motto">"Lettuce Make It Happen!"</h4>
          </div>
        </div>
      )
    }

}

export default HomePage;
