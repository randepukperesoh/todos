import styles from "./Tabs.module.scss";

export const Tabs = ({
  allTabs,
  onChange,
  currentTasks,
}: {
  currentTasks: string;
  allTabs: string[];
  onChange: (value: string) => void;
}) => {
  return (
    <div className={styles.tabs}>
      {allTabs.map((el) => (
        <button
          className={el === currentTasks ? styles.active : undefined}
          onClick={() => onChange(el)}
        >
          {el}
        </button>
      ))}
    </div>
  );
};
