import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { items, filters } = useSelector(state => state.tasks);
  const filtered =
    filters === "completed"
      ? items.filter(task => task.completed)
      : items;

  return (
    <>
      {filtered.length > 0 ? (
        <ul className="task-list">
          {filtered.map(task => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
      ) : (
        <p className="no-task-msg">
          {filters === "completed"
            ? "No completed tasks yet."
            : "No tasks found. Add a new one!"}
        </p>
      )}
    </>
  );
};

export default TaskList;
