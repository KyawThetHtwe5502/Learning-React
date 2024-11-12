
// import { useTaskContext } from "../hook/useTaskContext";
import useTodoStore from "../store/useTodoStore";
import Task from "./Task";



const TaskList = () => {
  const {tasks} = useTodoStore()
  return (
    <div>
      <h3 className="text-xl font-semibold font-serif mb-5">Task List (Total {tasks.length}, Done {tasks.filter(el => el.isDone === true ).length})</h3>
      <div>
        {tasks.map((task,index) => (
          <Task key={index} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
