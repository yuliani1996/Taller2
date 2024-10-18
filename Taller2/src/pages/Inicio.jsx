import { useState } from 'react';
import styled from "styled-components";

import Formulario from '../pages/Formulario';
import PokeApi from '../components/PokeApi';

const BotonEstilizado = styled.button`
    background-color: #0069ffde;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #1371CFFF;
    }
`

const BotonesContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;

const Inicio = () => {

    const [componente, setComponente] = useState(null);
    const [pokemonList, setPokemonList] = useState([]); 

    const addPokemon = (pokemon) => {
        setPokemonList((prevList) => [...prevList, pokemon]);
        };

    const handleAddCard = () => {
        setComponente(<Formulario addPokemon={addPokemon} />);
        };

    const handleViewPokemonList = () => {
        setComponente(<PokeApi pokemonList={pokemonList}/>);
            
        };
    
        return (
            <div>
                <BotonesContainer>
                    <BotonEstilizado onClick={handleAddCard}>Agregar Card</BotonEstilizado>
                    <BotonEstilizado onClick={handleViewPokemonList}>Ver Lista de Pokemones</BotonEstilizado>
                </BotonesContainer>
                {componente}
            </div>
    );
};

export default Inicio;