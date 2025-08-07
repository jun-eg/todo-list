import { Dispatch, SetStateAction } from "react";
import style from "./components.module.scss";
import { item } from "../types/item";

type createTaskProps = {
  setTasks: Dispatch<SetStateAction<item[]>>;
};

const CreateTask = ({ setTasks }: createTaskProps) => {
  const create = () => {
    const newTask: item = {
      id: Date().toString(),
      title: document.querySelector("input")?.value || "仮タイトル",
      description: document.querySelector("textarea")?.value || "仮詳細",
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    document.querySelector("input")!.value = "";
    document.querySelector("textarea")!.value = "";
  };

  return (
    <div className={style.createContainer}>
      <h2>タスクの作成</h2>
      <form>
        <input type="text" placeholder="タイトル" />
        <textarea placeholder="詳細"></textarea>
        <button type="button" onClick={create}>
          作成
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
