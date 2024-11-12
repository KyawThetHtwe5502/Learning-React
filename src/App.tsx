
// import Counter from "./components/Counter"
import CreateTask from "./components/CreateTask"
import Heading from "./components/Heading"
import TaskList from "./components/TaskList"
// import TaskProvider from "./context/TaskProvider"


function App() {
 
 
  return (
    // <TaskProvider>
        <div className="p-10">
          
          <Heading/>
          <CreateTask />
          <TaskList />
          </div>
    // </TaskProvider>
      // <div>
      //   <Counter/>
      // </div>
    
  )
}

export default App
