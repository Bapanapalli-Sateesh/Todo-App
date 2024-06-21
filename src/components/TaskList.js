// src/components/TaskList.js
import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks.tasks);
  const searchTerm = useSelector(state => state.tasks.searchTerm.toLowerCase());
  const filterOption = useSelector(state => state.tasks.filterOption);

  const filteredTasks = tasks
    .filter(task => task.task.toLowerCase().includes(searchTerm))
    .filter(task => {
      if (filterOption === 'Default') return true;
      if (filterOption === 'Completed') return task.status === 'completed';
      if (filterOption === 'Pending') return task.status === 'pending';
      return true;
    });

  return (
    <div className="task-list">
      {filteredTasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
