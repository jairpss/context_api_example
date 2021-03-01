import React, {useContext} from 'react';
import styled from 'styled-components';
import {ContextoTema} from './../contextos/contextoTema';

const Controles = () => {
    const {aumentarFuente, disminuirFuente, alinearIzq, alinearCentro, alinearDerecha} = useContext(ContextoTema);

    return (
        <ContenedorControles>
            <div>
                <Boton onClick={aumentarFuente}>Increase Font</Boton>
                <Boton onClick={disminuirFuente}>Decrease Font</Boton>
            </div>
            <div>
                <Boton onClick={alinearIzq}>Left</Boton>
                <Boton onClick={alinearCentro}>Center</Boton>
                <Boton onClick={alinearDerecha}>Right</Boton>
            </div>
        </ContenedorControles>
    )
}

const ContenedorControles = styled.div`
    margin-top: 20px;
`;
 
const Boton = styled.button`
    background: #173753;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 12px;
    padding: 7px;
    margin-right: 10px;
    margin-bottom: 10px;
    border-radius: 3px;
 
    &:hover {
        background: #2892d7;
    }
`;

export default Controles;