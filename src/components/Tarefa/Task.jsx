import React from 'react';
import { CgClose, CgInfo } from 'react-icons/Cg';
import { useNavigate } from 'react-router-dom'

import { TaskContainer, TaskTitle, ButtonContainer, RemoveSeeButton } from './Task_Css';

const Tarefa = ({task, handleTaskClick, handleTaskDeletion}) => {
    const Navegar = useNavigate();

    const handleTaskDetailsClick = () => {
        Navegar(`/${task.title}`)
    }

    return ( 
        <TaskContainer
            style={task.completed ? { borderLeft: "6px solid chartreuse"} : {}}>

            <TaskTitle onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </TaskTitle>

            <ButtonContainer>
                <RemoveSeeButton onClick={() => handleTaskDeletion(task.id)}>
                    <CgClose />
                </RemoveSeeButton>

                <RemoveSeeButton onClick={handleTaskDetailsClick}>
                    <CgInfo />
                </RemoveSeeButton>
            </ButtonContainer>
        </TaskContainer>
     );
}
 
export default Tarefa;