import { useDispatch } from "react-redux";
import { completeTask, deleteTask } from "../../redux/todoSlice";

import styles from "./List.module.scss";

const List = ({
  id,
  label,
  hasDelete,
}: {
  id: number;
  label: string;
  hasDelete?: boolean;
}) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.list}>
      {label}
      <div className={styles.list_btns}>
        {hasDelete && (
          <button onClick={() => dispatch(deleteTask({ id }))}>Delete</button>
        )}
        <button onClick={() => dispatch(completeTask({ id }))}>Complete</button>
      </div>
    </div>
  );
};

export default List;
