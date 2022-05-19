import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

function App() {
  let [tasks, setTasks] = useState([]);

  const createTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const removeTask = (task) => {
    setTasks(tasks.filter(t => t.id !== task.id));
  };

  return (
    <div className="App">
      <Header/>
      <PostForm create={createTask}/>
      <PostList tasks={tasks} remove={removeTask}/>
    </div>
  );
}

export default App;
