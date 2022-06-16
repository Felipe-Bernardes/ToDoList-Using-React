import React, { useState } from 'react';

import Botao from './../Botao/Button'
import { TaskContainer, TaskInput, TaskButton } from './AddTask_Css'


const AddTarefa = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState('');
    
    const handleInputChange = (e) => {
        setInputData(e.target.value)
    }

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData)
        setInputData("")
    }

    return ( 
        <TaskContainer>
            <TaskInput  type="text" 
                    onChange={handleInputChange}  
                    value={inputData}
                    />
            <TaskButton>
                <Botao onClick={handleAddTaskClick}>Adicionar</Botao>
            </TaskButton>
        </TaskContainer>
     );
}
 
export default AddTarefa;