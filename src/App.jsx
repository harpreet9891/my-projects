import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTask from './Components/AddTask'
import TaskList from './Components/TaskList'
import FilterTask from './Components/FilterTask'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <h1>Task Manager App</h1>
        <AddTask />
        <FilterTask />
        <TaskList />
    </div>
  )
}

export default App
