import { ChangeEvent,    useState } from "react"
import { useTaskContext } from "../hook/useTaskContext";
import { TasksType } from "../context/taskContext";


const CreateTask = () => {
  const  {addTask } = useTaskContext()
  
  const [job,setJob] = useState<string>("")
  const newTask: TasksType = {
    id: Date.now(),
    job: job,
    isDone: false
  }
  const handleAddTask = () => {
    addTask(newTask)
    setJob("")
  }
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setJob(event?.target?.value)
  } 
  return (
    <div className="flex mb-5">
      <input type="text" className="flex-grow border-2 border-slate-300 rounded-l-lg p-2" value={job}  onChange={handleChange} />
      <button onClick={handleAddTask} className="bg-slate-300 border-2 border-slate-300 rounded-r-lg py2 px-4">Add Task</button>
    </div>
  )
}

export default CreateTask