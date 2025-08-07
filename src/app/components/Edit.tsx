import { Dispatch, SetStateAction, useState } from "react";
import { item } from "../types/item";
import style from "./components.module.scss";

type EditProps = {
  setTasks: Dispatch<SetStateAction<item[]>>;
  taskId: string;
};

const Edit = ({ setTasks, taskId }: EditProps) => {
  const editTask = () => {
    const inputElement = document.getElementById(
      `input${taskId}`
    ) as HTMLInputElement;

    const textareaElement = document.getElementById(
      `textarea${taskId}`
    ) as HTMLTextAreaElement;

    const editButtonElement = document.getElementById(`editButton${taskId}`);

    if (inputElement.disabled === true) {
      inputElement.disabled = false;
      inputElement.style.border = "1px solid #dddddd";
      inputElement.style.borderRadius = "4px";

      textareaElement.disabled = false;
      textareaElement.style.border = "1px solid #dddddd";
      textareaElement.style.borderRadius = "4px";

      editButtonElement!.textContent = "保存";
      editButtonElement!.style.backgroundColor = "#629eff";
    } else {
      inputElement.disabled = true;
      inputElement.style.border = "none";

      textareaElement.disabled = true;
      textareaElement.style.border = "none";

      editButtonElement!.textContent = "編集";
      editButtonElement!.style.backgroundColor = "#84ea8c";

      const updatedTask: item = {
        id: taskId,
        title: inputElement.value || "仮タイトル",
        description: textareaElement.value || "仮詳細",
      };

      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === taskId ? updatedTask : task))
      );
    }
  };
  return (
    <div className={style.editContainer}>
      <button type="button" id={`editButton${taskId}`} onClick={editTask}>
        編集
      </button>
    </div>
  );
};

export default Edit;
