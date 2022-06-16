import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import Tarefas from './components/Tasks'
import AddTarefa from './components/AddTarefa/AddTask'
import TaskDetails from './components/TaskDetails/TaskDetails'
import { Container } from './App_Css'
import './App.css'

export default function App() {

  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Ler Livros',
      completed: true,
    }
  ]);

  useEffect(() =>{
      const fetchTasks = async () => {
        const { data } = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10')
        

        setTasks(data)
      }

      fetchTasks();
    }, [])

  const handleTaskClick = (taskID) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskID) return {... task, completed: !task.completed}

      return task;
    })

    setTasks(newTasks)
  }

  const handleTaskDeletion = (taskID) => {
    const newTasks = tasks.filter((task) => task.id != taskID)
    setTasks(newTasks)
  }

  const handleTaskAddition = (taskTitle) => {
      const newTasks = [... tasks, {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      }]
      setTasks(newTasks)
  }

  return (
      <Router>
        <Container>
        <h1>Minhas Tarefas</h1>

        <Routes>
          <Route path="/" exact element={(
            <>
              <AddTarefa 
                handleTaskAddition={handleTaskAddition}
              />

              <Tarefas 
                tasks={tasks} 
                handleTaskClick={handleTaskClick} 
                handleTaskDeletion={handleTaskDeletion}
              />
              
            </>
          )}/>

          <Route path="/:taskTitle" exact element={<TaskDetails />}/>
        </Routes>

        </Container>
      </Router>
    )
}