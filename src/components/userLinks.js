import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../App.css';


export class UserLinks extends Component {
  render(){
    return(

        <div class="dd-button">
          <Router>

          <DropdownButton as={ButtonGroup} id="dropdown-button-drop-up" title="Who Are You?" key="up", drop="up", variant="secondary">
            <Dropdown.Item eventKey="1"> <Link to="/">Home</Link> </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="2"> <Link to="/user_tasks/0">Clayton</Link> </Dropdown.Item>
            <Dropdown.Item eventKey="3"> <Link to="/user_tasks/0">Mahmoud</Link> </Dropdown.Item>
            <Dropdown.Item eventKey="4"> <Link to="/user_tasks/1">Josh</Link> </Dropdown.Item>
            <Dropdown.Item eventKey="5"> <Link to="/user_tasks/1">Nathan</Link> </Dropdown.Item>
            <Dropdown.Item eventKey="6"> <Link to="/user_tasks/1">Guest User</Link> </Dropdown.Item>
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
                <HomePage />
              </Route>
            </Switch>
            </Router>
          </div>

          );
        }

    )
  }
}

export default UserLinks;
