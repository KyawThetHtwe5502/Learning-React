import { create } from "zustand";
import { TasksType } from "../context/taskContext";

type Todo = {
    tasks: TasksType[];
    addTask: (newTask :TasksType) => void;
    removeTask: (id: number) => void;
    doneTask: (id: number) => void;
}

const useTodoStore = create<Todo>((set) => ({
    tasks: [
        {id:1,job:"Complete TypeScript tutorial",isDone: false},
        {id:2,job:"Buy groceries",isDone: false},{id:3 ,job:"Schedule meeting with team",isDone: false},{id:4,job:"Prepare presentation",isDone: false},{id:5,job:"Workout session",isDone: false}
        
    ],
    addTask: (newTask) => set((state) => ({tasks: [...state.tasks,newTask]})),
    removeTask: (id) => set((state) => ({tasks:state.tasks.filter((el) => el.id !== id)})),
    doneTask: (id) => set((state) => ({tasks: state.tasks.map(el => el.id === id ? {...el,isDone: !el.isDone} : el)}))

}))

export default useTodoStore;