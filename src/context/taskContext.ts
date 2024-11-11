import { createContext } from "react";

export interface TasksType  {
    id: number,
    job: string,
    isDone: boolean
  }

export interface TypeContext  {
    tasks: TasksType[];
    setTasks: React.Dispatch<React.SetStateAction<TasksType[]>>;
    addTask: (newTask:TasksType) => void;
    removeTask: (id: number) => void;
    doneTask: (id: number) => void;
}

export const TaskContext = createContext<TypeContext | undefined>(undefined)
