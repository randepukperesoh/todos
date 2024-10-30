import { TodosInterface } from "../../redux/todoSlice";
import List from "../List/List";

import styles from "./CategoryList.module.scss";

export const CategoryList = ({
  todos,
  label,
}: {
  todos: TodosInterface[];
  label: string;
}) => {
  return (
    <div className={styles.listWrapper}>
      <h2>{label}</h2>
      {!!todos.length &&
        todos.map((todo) => (
          <List key={todo.id} hasDelete={label !== "deleted tasks"} {...todo} />
        ))}
      {!todos.length && <h3>No todos...</h3>}
    </div>
  );
};
