import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Button from './../Botao/Button'
import { BackButton, TaskContainer, Title } from './TaskDetails_Css';

const TaskDetails = () => {
    const params = useParams()
    const Navegacao = useNavigate()

    const handleBackTask = () => {
        Navegacao('/')
    }

    return ( 
        <>
            <BackButton>
                <Button onClick={handleBackTask}>Voltar</Button>
            </BackButton>

            <TaskContainer>
                <Title>{params.taskTitle}</Title>
                <Title>{params.taskId}</Title>
                <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs</p>
            </TaskContainer>
        </>
     );
}
 
export default TaskDetails;