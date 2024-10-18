
import PropTypes from 'prop-types';


const Boton = ({name, funct, color}) => {
    return (
        <button 
        onClick={funct} 
        style={{ backgroundColor: color }} 
        className="boton"
    >
        {name}
    </button>
    );
};


Boton.propTypes = {
    name: PropTypes.string,
    funct: PropTypes.func,
    color: PropTypes.string,
};


export default Boton;
