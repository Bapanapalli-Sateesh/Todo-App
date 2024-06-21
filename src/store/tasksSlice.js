import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    { id: 1, task: 'Default Task 1', deadline: '2023-12-31T23:59', status: 'pending' },
    { id: 2, task: 'Default Task 2', deadline: '2023-12-31T23:59', status: 'pending' },
    { id: 3, task: 'Default Task 3', deadline: '2023-12-31T23:59', status: 'pending' },
  ],
  searchTerm: '',
  filterOption: 'Default'
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ ...action.payload, id: Date.now(), status: 'pending' });
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    updateTaskStatus: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.status = task.status === 'pending' ? 'completed' : 'pending';
      }
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setFilterOption: (state, action) => {
      state.filterOption = action.payload;
    },
    editTask: (state, action) => {
      const { id, task, deadline } = action.payload;
      const existingTask = state.tasks.find(t => t.id === id);
      if (existingTask) {
        existingTask.task = task;
        existingTask.deadline = deadline;
      }
    }
  },
});

export const { addTask, deleteTask, updateTaskStatus, setSearchTerm, setFilterOption, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;
