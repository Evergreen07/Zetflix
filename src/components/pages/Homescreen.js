import React from 'react'
import '../../utilities/stylesheets/Homescreen.css'
import Navbar from '../layouts/Navbar'
import Banner from '../display/Banner'
import Row from '../display/Row'


const Homescreen = () => {
    return (
        <div className="homescreen">
            <Navbar/>
            
            <Banner/>

            <Row/>
        </div>
    )
}

export default Homescreen
