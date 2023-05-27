/*  
  *  @author <salamanca.valentina@correounivalle.edu.co>  
  *  @version 0.0.1
**/
// Importar React desde la biblioteca 'react'
import React from 'react';

/**
 * Componente funcional que representa una sección con un título y contenido.
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.title - El título de la sección.
 * @param {React.ReactNode} props.children - El contenido de la sección.
 * @returns {JSX.Element} - Elemento JSX que representa la sección.
 */
const Section = ({ title, children }) => {
    return (
        <div className="_container_section">
            <h2>{title}</h2>
            <div className="section__content">
                {children}
            </div>
        </div>
    );
};

// Exportar el componente Section como componente por defecto
export default Section;
