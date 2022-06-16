import React from 'react';
import { Button } from './Button_Css';

const Botao = ({children, onClick}) => {
    return ( 
        <Button onClick={onClick}>
            {children}
        </Button>
     );
}
 
export default Botao;