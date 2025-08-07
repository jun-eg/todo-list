"use client";

import { useState } from "react";
import { item } from "../types/item";
import TaskCard from "./TaskCard";
import style from "./components.module.scss";
import CreateTask from "./CreateTask";

const Container = () => {
  const [tasks, settasks] = useState<item[]>([]);

  return (
    <div className={style.container}>
      <CreateTask setTasks={settasks} />
      <div>
        {tasks.map((item: item) => (
          <TaskCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            setTasks={settasks}
          />
        ))}
      </div>
    </div>
  );
};

export default Container;
