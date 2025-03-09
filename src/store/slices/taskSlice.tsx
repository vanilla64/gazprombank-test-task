import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITask } from '../../models/common/ITask';
import { RootState } from '../store';

const initialState: ITask[] = []

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      state.push(action.payload);
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      return state.filter(x => x.id !== action.payload)
    },
    updateTask: (state, action: PayloadAction<ITask>) => {
      const taskIndex = state.findIndex((task) => task.id === action.payload.id)
      if (taskIndex !== -1) state[taskIndex] = action.payload
    },
  },
})

export const { addTask, deleteTask, updateTask } = tasksSlice.actions
export const selectTasks = (state: RootState) => state.tasks
export default tasksSlice.reducer
