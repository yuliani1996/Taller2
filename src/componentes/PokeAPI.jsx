import { useEffect, useState } from "react";

function Pokemon({ name, image, height, weight }) {
    return (
        <div className="pokemon-card">
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <p>Altura: <span>{height}</span> decímetros</p>
            <p>Peso: <span>{weight}</span> hectogramos</p>
        </div>
    );
}

function PokeAPI() {
    const [pokemones, setPokemones] = useState([]);

    useEffect(() => {
        const getPokemones = async () => {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0");
            const listaPokemones = await response.json();
            const { results } = listaPokemones;

            const pokemonesConDetalles = await Promise.all(
                results.map(async (pokemon) => {
                    const response = await fetch(pokemon.url);
                    const pokeDetails = await response.json();
                    return {
                        name: pokeDetails.name,
                        image: pokeDetails.sprites.front_default,
                        height: pokeDetails.height,
                        weight: pokeDetails.weight,
                    };
                })
            );

            setPokemones(pokemonesConDetalles);
        };

        getPokemones();
    }, []);

    return (
        <div>
            <h1>Lista de Pokemones</h1>
            <div className="container">
                {pokemones.map(pokemon => (
                    <Pokemon 
                        key={pokemon.name} 
                        name={pokemon.name} 
                        image={pokemon.image} 
                        height={pokemon.height} 
                        weight={pokemon.weight} 
                    />
                ))}
            </div>
        </div>
    );
}

export default PokeAPI;

