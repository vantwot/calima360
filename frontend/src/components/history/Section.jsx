
import React from 'react'



const Section = ({ title, children }) => {
    return (
        <div className="_container_section">
            <h2>{title}</h2>
            <div className="section__content">
                {children}
            </div>
        </div>
    )
}

export default Section