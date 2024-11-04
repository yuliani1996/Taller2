import React from 'react';

function Equipo({ title, imageSrc, description, githubLink, linkedinLink }) {
    return (
        <div className="contenedor_equipo">
            <img src={imageSrc} alt={title} className="imagen-equipo" />
            <div className="contenedor-texto-equipo">
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="links-equipo">
                    <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href={linkedinLink} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
        </div>
    );
}

export default Equipo;