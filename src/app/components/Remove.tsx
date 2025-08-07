import { Dispatch, SetStateAction } from "react";
import { item } from "../types/item";
import style from "./components.module.scss";

type RemoveProps = {
  setTasks: Dispatch<SetStateAction<item[]>>;
  taskId: string;
};

const Remove = ({ setTasks, taskId }: RemoveProps) => {
  const removeTask = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className={style.removeContainer}>
      <button type="button" onClick={removeTask}>
        削除
      </button>
    </div>
  );
};

export default Remove;
