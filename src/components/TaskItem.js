import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, updateTaskStatus, editTask } from '../store/tasksSlice';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const isOverdue = new Date(task.deadline) < new Date();
  const isPending = task.status === 'pending';
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.task);
  const [editedDeadline, setEditedDeadline] = useState(task.deadline);

  const handleSaveEdit = () => {
    dispatch(editTask({ id: task.id, task: editedTask, deadline: editedDeadline }));
    setIsEditing(false);
  };

  return (
    <div className={`task-item ${isOverdue ? 'overdue' : isPending ? 'pending' : 'completed'}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
          <input
            type="datetime-local"
            value={editedDeadline}
            onChange={(e) => setEditedDeadline(e.target.value)}
          />
          <button onClick={handleSaveEdit}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <div>
            <span>{task.task}</span>
            <br />
            <span>{new Date(task.deadline).toLocaleString()}</span>
          </div>
          <div>
            <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
            {isPending && <button onClick={() => dispatch(updateTaskStatus(task.id))}>Complete</button>}
            <button onClick={() => setIsEditing(true)}>Edit</button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskItem;
