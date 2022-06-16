import styled from "styled-components";

export const Button = styled.button`
    background-color: chartreuse;
    height: 40px;
    padding: 0 10px;
    border-radius: 5px;
    width: 100%;
    font-size: 16px;
    color: #444;
    font-weight: bold;
    cursor: pointer;
    border: none;

    &:hover{
        background-color: #444;
        color: chartreuse;
        transform: all 0.5s ease;
        border: 1px solid chartreuse;
    }
`