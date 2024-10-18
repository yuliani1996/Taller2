import { useState } from "react";
import PropTypes from "prop-types";

const Formulario = ({ addPokemon }) => {
    const [pokemon, setPokemon] = useState({
        namePokemon: "",
        heightPokemon: "",
        weightPokemon: "",
        img: "",
    });

    const [nameClassPokemon, setNameClassPokemon] = useState("");
    const [heightClassPokemon, setHeightClassPokemon] = useState("");
    const [weightClassPokemon, setWeightClassPokemon] = useState("");

    const validationText = (text) => {
        const regex = /^[a-zA-Z\s]*$/;
        return regex.test(text);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;

   
        setPokemon((prev) => ({
            ...prev,
            [name]: value,
        }));

        switch (name) {
            case "namePokemon":
                setNameClassPokemon(validationText(value) ? "valid" : "invalid");
                break;
            case "heightPokemon":
            case "weightPokemon": {
                const isValid = !isNaN(value) && Number(value) > 0;
                if (name === "heightPokemon") {
                    setHeightClassPokemon(isValid ? "valid" : "invalid");
                } else {
                    setWeightClassPokemon(isValid ? "valid" : "invalid");
                }
                break;
            }
            default:
                break;
        }
    };

    const handlerSubmit = (event) => {
        event.preventDefault();

        if (!validationText(pokemon.namePokemon)) {
            alert("El nombre es inválido");
            return;
        }
        if (!pokemon.heightPokemon || isNaN(pokemon.heightPokemon) || Number(pokemon.heightPokemon) <= 0) {
            alert("La altura es inválida");
            return;
        }
        if (!pokemon.weightPokemon || isNaN(pokemon.weightPokemon) || Number(pokemon.weightPokemon) <= 0) {
            alert("El peso es inválido");
            return;
        }
        if (!pokemon.img) {
            alert("La imagen es inválida");
            return;
        }

        addPokemon(pokemon);

   
        setPokemon({
            namePokemon: "",
            heightPokemon: "",
            weightPokemon: "",
            img: "",
        });
    };

    Formulario.propTypes = {
        addPokemon: PropTypes.func.isRequired,
    };

    return (
        <section id="sectionForm">
            <form onSubmit={handlerSubmit}>
                <h2 id="form-title">Agrega nuevo Pokémon</h2>
                <input
                    className={nameClassPokemon}
                    onChange={handleInputChange}
                    type="text"
                    name="namePokemon"
                    placeholder="Enter name"
                    autoComplete="firstname"
                    required
                />
                <input
                    className={heightClassPokemon}
                    onChange={handleInputChange}
                    type="number"
                    name="heightPokemon"
                    placeholder="Enter Height"
                    required
                />
                <input
                    className={weightClassPokemon}
                    onChange={handleInputChange}
                    type="number"
                    name="weightPokemon"
                    placeholder="Enter Weight"
                    required
                />
                <input
                    onChange={handleInputChange}
                    type="text"
                    name="img"
                    placeholder="Enter Image URL"
                    required
                />
                <button type="submit">Guardar</button>
            </form>
        </section>
    );
};

export default Formulario;