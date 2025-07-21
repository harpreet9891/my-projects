import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../features/task/taskSlice";

const FilterTask = () => {
  const { filters, items } = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  if (items.length === 0) return null;

  return (
    <div className="filter">
      <button
        onClick={() => dispatch(setFilter("all"))}
        className={`button ${filters === "all" ? "active" : ""}`}
      >
        All
      </button>
      <button
        onClick={() => dispatch(setFilter("completed"))}
        className={`button ${filters === "completed" ? "active" : ""}`}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterTask;
