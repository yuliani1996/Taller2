import React from 'react';
import Equipo from './componentes/Equipo';
import FotoAnyi from './imagenes/FotoAnyi.png';
import FotoAndrea from './imagenes/FotoAndrea.png';
import FotoJulieth from './imagenes/FotoJulieth.png';
import './App.css';
import PokeAPI from './componentes/PokeApi';


function App() {
    return (
        <div>
        <h1>Proyecto de Listado y Modificación de Productos </h1>
        <h3>Miembros del Equipo</h3>
            <Equipo
                title="Anyi Chamorro"
                imageSrc={FotoAnyi}
                description="Estudiante de Análisis y Desarrollo de Software, con una gran pasión por crear soluciones tecnológicas que impulsen la innovación."
                githubLink="https://github.com/yuliani1996"
                linkedinLink="https://linkedin.com/in/usuario"
            />
            <Equipo
                title="Andrea Contreras"
                imageSrc={FotoAndrea}
                description="Estudiante de Análisis y Desarrollo de Software, con enfoque en el diseño, implementación y optimización de aplicaciones tecnológicas."
                githubLink="https://github.com/AndreaCSalazar"
                linkedinLink=""
            />
            <Equipo
                title="Julieth Ballesteros"
                imageSrc={FotoJulieth}
                description="Estudiante de Análisis y Desarrollo de Software, enfocada en la creación de aplicaciones y sistemas que optimicen procesos y mejoren la experiencia del usuario."
                githubLink="https://github.com/Julieth14-maker"
                linkedinLink="https://linkedin.com/in/usuario"
            />
            <PokeAPI/>
        </div>
    );
}

export default App;


