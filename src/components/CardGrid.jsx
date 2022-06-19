import React from 'react'

const CardGrid = ({ children }) => {
    return (
        <div className="columns is-mobile is-tablet is-desktop">
            <div id="card-container"
                className="column 
                is-12-mobile
                is-8-tablet is-offset-2-tablet
                is-6-desktop is-offset-3-desktop is-flex 
                is-justify-content-center is-flex-direction-column"
            >
                <div className="card mx-2">
                    <div className="card-content">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardGrid