import './App.css';
import Users from "./components/users/users";
import Posts from "./components/posts/posts";
import React from "react";
import Comments from "./components/comments/comments";

function App() {
  return (
    <div className="d-flex flex-row">
        <h1 className="bg-primary text-white">React Homework #2</h1>
      <Users/>
      <Posts/>
      <Comments/>
    </div>
  );
}

export default App;
