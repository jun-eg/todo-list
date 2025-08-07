import { item } from "../types/item";
import style from "./components.module.scss";
import Edit from "./Edit";
import Remove from "./Remove";

type TaskCardProps = {
  id: string;
  title: string;
  description: string;
  setTasks: React.Dispatch<React.SetStateAction<item[]>>;
};

const TaskCard = ({ id, title, description, setTasks }: TaskCardProps) => {
  return (
    <div className={style.taskCardContainer}>
      <form>
        <input id={`input${id}`} type="text" placeholder={title} disabled />
        <textarea
          id={`textarea${id}`}
          placeholder={description}
          disabled
        ></textarea>
      </form>

      <div>
        <Remove setTasks={setTasks} taskId={id} />
        <Edit setTasks={setTasks} taskId={id} />
      </div>
    </div>
  );
};

export default TaskCard;
