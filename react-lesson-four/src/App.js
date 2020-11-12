import React from "react";
import {Route, Switch} from "react-router";
import {NavLink} from "react-router-dom";

import './App.css';
import Users from "./components/users/users";
import Posts from "./components/posts/posts";
import Comments from "./components/comments/comments";


function App() {
  return (
    <div>
      <div>
          <ul className="nav nav-pills">
              <li className="nav-item">
                  <NavLink className="nav-link" to='/'>Homepage</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link" to='/users'>Users</NavLink>
              </li>
          </ul>
      </div>
      <Switch>
          <Route path={'/users/posts/:id/comments'} component={Comments}/>
          <Route path={'/users/:id/posts'} component={Posts}/>
          <Route path={'/users'} component={Users}/>
      </Switch>
    </div>
  );
}

export default App;
