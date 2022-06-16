import React from 'react'
import Tarefa from './Tarefa/Task'

export default function Tarefas({tasks, handleTaskClick, handleTaskDeletion}) {
    return (
        <>
            {
                tasks.map((task) => (
                <Tarefa key={task.id} task={task} 
                handleTaskClick={handleTaskClick} 
                handleTaskDeletion={handleTaskDeletion} />
                ))
            }
        </>
    )
}