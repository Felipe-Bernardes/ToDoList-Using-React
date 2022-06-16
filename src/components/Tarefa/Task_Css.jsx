import styled from "styled-components";

export const TaskContainer = styled.div`
    background-color: #444;
    margin: 8px 0;
    padding: 15px 20px;
    display: flex;
    border-radius: 5px;
    justify-content: space-between;
    color: #eee;
    align-items: center;
`

export const TaskTitle = styled.div`
    cursor: pointer;
`

export const ButtonContainer = styled.div`
    width: 30%;
    display: flex;
    justify-content: flex-end;
`

export const RemoveSeeButton = styled.button`
    background-color: #444;
    border: none;
    margin: 0 5px;
    font-size: 22px;
    cursor: pointer;
    color: chartreuse;
`