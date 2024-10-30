import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TodosInterface {
  id: number;
  label: string;
}

interface InitialInterface {
  todos: TodosInterface[];
  deletedTasks: TodosInterface[];
  completedTasks: TodosInterface[];
}

const loadStateFromLocalStorage = (): InitialInterface => {
  const savedState = localStorage.getItem("todos");
  if (savedState) {
    return JSON.parse(savedState);
  }
  return {
    todos: [
      { id: 0, label: "TypeScript" },
      { id: 1, label: "React" },
      { id: 2, label: "Redux-toolkit" },
    ],
    deletedTasks: [],
    completedTasks: [],
  };
};

const initial: InitialInterface = loadStateFromLocalStorage();

export const todoSlice = createSlice({
  name: "todo",
  initialState: initial,
  reducers: {
    addTask: (state, action: PayloadAction<{ value: string }>) => {
      const newTask = {
        id:
          state.todos.length > 0
            ? state.todos[state.todos.length - 1].id + 1
            : 0,
        label: action.payload.value,
      };

      state.todos.push(newTask);
      localStorage.setItem("todos", JSON.stringify(state));
    },
    completeTask: (state, action: PayloadAction<{ id: number }>) => {
      const taskToComplete = state.todos.find(
        (task) => task.id === action.payload.id
      );

      if (taskToComplete) {
        state.todos = state.todos.filter(
          (task) => task.id !== action.payload.id
        );
        state.completedTasks.push(taskToComplete);
        localStorage.setItem("todos", JSON.stringify(state));
        return;
      }

      const completedTaskToDelete = state.completedTasks.find(
        (task) => task.id === action.payload.id
      );

      if (completedTaskToDelete) {
        state.completedTasks = state.completedTasks.filter(
          (task) => task.id !== action.payload.id
        );
        localStorage.setItem("todos", JSON.stringify(state));
      }
    },
    deleteTask: (state, action: PayloadAction<{ id: number }>) => {
      const taskToDelete = state.todos.find(
        (task) => task.id === action.payload.id
      );

      if (taskToDelete) {
        state.todos = state.todos.filter(
          (task) => task.id !== action.payload.id
        );
        state.deletedTasks.push(taskToDelete);
        localStorage.setItem("todos", JSON.stringify(state));
        return;
      }

      const completedTaskToDelete = state.completedTasks.find(
        (task) => task.id === action.payload.id
      );

      if (completedTaskToDelete) {
        state.completedTasks = state.completedTasks.filter(
          (task) => task.id !== action.payload.id
        );
        state.deletedTasks.push(completedTaskToDelete);
        localStorage.setItem("todos", JSON.stringify(state));
      }
    },
  },
});

export const { addTask, deleteTask, completeTask } = todoSlice.actions;

export default todoSlice.reducer;
