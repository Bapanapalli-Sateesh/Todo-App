// src/App.js
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  const [showTaskInput, setShowTaskInput] = useState(false);

  const toggleTaskInput = () => {
    setShowTaskInput(!showTaskInput);
  };

  return (
    <Provider store={store}>
      <div className="app-wrapper">
        <div className="header-title">MY TODO APP</div>
        <div className="app-container">
          <Header toggleTaskInput={toggleTaskInput} />
          {showTaskInput && <TaskInput toggleTaskInput={toggleTaskInput} />}
          <TaskList />
        </div>
      </div>
    </Provider>
  );
};

export default App;
