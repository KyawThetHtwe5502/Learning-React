import { ReactElement } from "react"
import { useTaskContext } from "../hook/useTaskContext";
import { TasksType } from "../context/taskContext";


type TaskProps = {

    task: TasksType;
}
const Task = ({task}: TaskProps): ReactElement => {
    const {doneTask, removeTask} = useTaskContext()
    const handleChecked = () => {
      doneTask(task.id)
    }
    const handleRemove= () => {
        removeTask(task.id)
    }
    
  return (
    <div className="border border-gray-300 p-2 mb-2 rounded-md flex justify-between items-center">
      <div className="flex items-center gap-4">
        <input type="checkbox" checked={task.isDone} onChange={handleChecked} className="size-4" />
        <p className={`${task.isDone ? "line-through" : "" }`}>{task.job}</p> 
      </div>
        <button onClick={handleRemove} className="border bg-gray-200 py-1 px-3 rounded-md text-red-500 hover:bg-red-500 hover:text-gray-200 duration-200"> delete</button>
    </div>
  )
}

export default Task