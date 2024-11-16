import { useState } from "react"
import Tasks from "./components/Task"
import AddTasks from "./components/AddTasks"

function App() {

  const [Tasks, setTasks] = useState([
    {
      id: 1,
      title: "",
      description: ""
    }

  ])

  return <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">

    <div className="w-[500px]">

      <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>

      <AddTasks />
      <Tasks />

    </div>

  </div>

}

export default App