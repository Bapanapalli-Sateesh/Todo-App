// src/components/TaskInput.js
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../store/tasksSlice';

const TaskInput = ({ toggleTaskInput, taskToEdit }) => {
  const [task, setTask] = useState('');
  const [deadline, setDeadline] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit.task);
      setDeadline(taskToEdit.deadline);
    }
  }, [taskToEdit]);

  const handleAddOrEditTask = () => {
    if (task && deadline) {
      if (taskToEdit) {
        dispatch(editTask({ id: taskToEdit.id, task, deadline }));
      } else {
        dispatch(addTask({ task, deadline, status: 'pending' }));
      }
      setTask('');
      setDeadline('');
      toggleTaskInput();
    }
  };

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Enter task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <input
        type="datetime-local"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <button onClick={handleAddOrEditTask}>
        {taskToEdit ? 'Update Task' : 'Save Task'}
      </button>
    </div>
  );
};

export default TaskInput;
