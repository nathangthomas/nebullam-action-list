import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Tasks from './components/tasks';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/user_tasks/0">Clayton</Link>
            </li>
            <li>
              <Link to="/user_tasks/1">Josh</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/user_tasks/0">
            <Tasks user_id='0'/>
          </Route>
          <Route path="/user_tasks/1">
            <Tasks user_id='1'/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function ActionItems() {
  return <Tasks/>;
}

function Users() {
  return <Tasks/>;
}


// import React, {Component} from 'react';
// import Tasks from './components/tasks';
// import {Router, Route} from 'react-router';
// import { createBrowserHistory } from 'history';
// // import NewTaskForm from './components/newTaskForm'
//
// class App extends Component {
//
//     render() {
//       return(
//         <Router history={createBrowserHistory}>
//           <Route path="home"/> component={Tasks}
//         </Router>
//       )
//         // return (
//         //   <div>
//         //     <h1> ACTION LIST </h1>
//         //     <Tasks tasks={this.state.tasks} />
//         //   </div>
//         // )
//     }
//
//     state = {
//         tasks: []
//     };
// }
//
// export default App;
