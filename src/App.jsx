import { useState } from "react"
import Tasks from "./components/Task"
import AddTasks from "./components/AddTasks"

function App() {

  const [tasks, setTasks] = useState([{
    id: 1,
    title: "Aprender JavaScript",
    description: "Estudo dos conceitos básicos e avançados da linguagem."
  },
  {
    id: 2,
    title: "Projeto com ESP32",
    description: "Desenvolver uma aplicação para controle de LEDs RGB."
  },
  {
    id: 3,
    title: "Design de Interface",
    description: "Criar um protótipo para um sistema responsivo."
  },
  ])

  // Completar task.
  function onTaskClick(taskId) {

    const newTasks = tasks.map((task) => {

      // Preciso atualizar essa tarefa.
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted }
      }

      // Não preciso atualizar essa tarefa.
      return task

    })

    setTasks(newTasks)

  }

  // Deletar task.
  function deleteTask(taskId) {

    const newTasks = tasks.map((task) => {

      // Atualizar lista de tarefa.
      if (task.id != taskId) {
        return task
      }

    }).filter(e => e)

    setTasks(newTasks)

  }

  return <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">

    <div className="w-[500px]">

      <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>

      <AddTasks />
      <Tasks tasks={tasks} onTaskClick={onTaskClick} deleteTask={deleteTask} />

    </div>

  </div>

}

export default App