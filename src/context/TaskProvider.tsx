import { ReactElement, ReactNode, useState } from "react"
import {TaskContext, TasksType} from "./taskContext"
type ChildrenProps = {
    children: ReactNode | ReactElement
}
const TaskProvider = ({children}: ChildrenProps): ReactElement => {
    const [tasks,setTasks] = useState<TasksType[]>([
        {id:1,job:"Complete TypeScript tutorial",isDone: false},
        {id:2,job:"Buy groceries",isDone: false},{id:3 ,job:"Schedule meeting with team",isDone: false},{id:4,job:"Prepare presentation",isDone: false},{id:5,job:"Workout session",isDone: false}
        
    ])
    const addTask = (newTask: TasksType) => {
      setTasks([...tasks,newTask])
    }
    const removeTask = (id: number) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }
    const doneTask = (id: number) => {
      setTasks(tasks.map(el => el.id === id ? {...el,isDone: !el.isDone} : el))
    }
  return (
    <TaskContext.Provider value={{tasks,setTasks,addTask,removeTask,doneTask}}>{children}</TaskContext.Provider>
  )
}

export default TaskProvider