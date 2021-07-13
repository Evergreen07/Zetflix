import React from 'react'
import spinner from '../../utilities/pictures/Spinner.gif'

const Spinner = () => {
    return (
        <div>
            <img src={spinner} 
            style={{width : '50%',margin: 'auto', padding: '5rem', display: 'block'}} 
            alt="Loading..." />
        </div>
    )
}

export default Spinner
