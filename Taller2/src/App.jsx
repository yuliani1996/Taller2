import Equipo from '../components/Equipo';
import FotoAnyi from '../assets/imagenes/FotoAnyi.png';
import FotoAndrea from '../assets/imagenes/FotoAndrea.png';
import FotoJulieth from '../assets/imagenes/FotoJulieth.png';
import '../styles/cards.css';

import Inicio from '../pages/Inicio';

function App() {
    return (
      <>
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
                linkedinLink="https://www.linkedin.com/in/andrea-contreras-salazar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            />
            <Equipo
                title="Julieth Ballesteros"
                imageSrc={FotoJulieth}
                description="Estudiante de Análisis y Desarrollo de Software, enfocada en la creación de aplicaciones y sistemas que optimicen procesos y mejoren la experiencia del usuario."
                githubLink="https://github.com/Julieth14-maker"
                linkedinLink="https://linkedin.com/in/usuario"
            />
            
            <Inicio/>
  
        </div>
      </>
    );
}

export default App;