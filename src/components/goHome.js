import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export class GoHome extends Component {
  return (
    <div className="page-container">
      <div className="home">
        <h1 className="welcome">Nebullam Action List</h1>
        <h4 className="motto">"Lettuce Make It Happen!"</h4>
          <div className="lettuce">
            <img src={ require('./images/laughing_lettuce.jpeg') } />
          </div>
      </div>
    </div>
  )
}
