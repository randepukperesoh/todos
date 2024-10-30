import { useAppSelector } from "../../redux/store";
import { useDispatch } from "react-redux";
import { addTask, TodosInterface } from "../../redux/todoSlice";
import { ChangeEventHandler, KeyboardEventHandler, useState } from "react";

import { CategoryList } from "../CategoryList/CategoryList";

import styles from "./TodoList.module.scss";

const TodoList = ({ taskCategory }: { taskCategory: string }) => {
  const [value, setValue] = useState("");

  const {
    todos: currentTodos,
    deletedTasks,
    completedTasks,
  } = useAppSelector((state) => state.todo);

  const todos: TodosInterface[] = [];

  if (taskCategory === "allTasks") {
    todos.push(...currentTodos);
  }

  if (taskCategory === "deletedTasks") {
    todos.push(...deletedTasks);
  }

  if (taskCategory === "complettedTasks") {
    todos.push(...completedTasks);
  }

  if (taskCategory === "currentTasks") {
    todos.push(...currentTodos);
  }

  const dispatch = useDispatch();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const handleKeyEnter: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      dispatch(addTask({ value }));
    }
  };

  return (
    <>
      <div className={styles.inputWrapper}>
        <input
          className={styles.inputWrapper_input}
          type="text"
          placeholder="Enter task"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyEnter}
        />
        <button onClick={() => dispatch(addTask({ value }))}>Add</button>
      </div>

      {taskCategory !== "allTasks" && (
        <CategoryList
          label={taskCategory.replace("Tasks", " tasks")}
          todos={todos}
        />
      )}

      {taskCategory === "allTasks" && (
        <>
          <CategoryList label={"current tasks"} todos={currentTodos} />
          <CategoryList label="deleted tasks" todos={deletedTasks} />

          <CategoryList label="completed tasks" todos={completedTasks} />
        </>
      )}
    </>
  );
};

export default TodoList;
