import { Tabs } from "../../components/Tabs/Tabs";
import TodoList from "../../components/TodoList/TodoList";
import styles from "./MainPage.module.scss";
import { useState } from "react";

const TABS = ["allTasks", "deletedTasks", "complettedTasks", "currentTasks"];

const MainPage = () => {
  const [categoryTasks, setCategoryTasks] = useState("allTasks");

  return (
    <div className={styles.App}>
      <h1>Redux-toolkit Todolist</h1>
      <Tabs
        currentTasks={categoryTasks}
        allTabs={TABS}
        onChange={(value: string) => setCategoryTasks(value)}
      />
      <TodoList taskCategory={categoryTasks} />
    </div>
  );
};

export default MainPage;
