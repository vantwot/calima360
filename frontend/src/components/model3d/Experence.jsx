import React from 'react';


const Experience = (props) => {

    const { title, children } = props;

    return (
          <div className="_container_section">
          <h2>{title}</h2>
          <div className="section__content">
              {children}
          </div>
      </div>
    )
};

export default Experience;