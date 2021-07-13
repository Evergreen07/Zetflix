import React, {useState} from 'react'
import Navbar from '../layouts/Navbar'
import Login from '../display/Login'
import '../../utilities/stylesheets/Loginscreen.css'
import background from '../../utilities/pictures/Background3.jpg'

const Loginscreen = () => {
    const [signIn, setSignIn] = useState(false);

    const handleSign = () => {
        setSignIn(true);
    }

    return (
        <div className="loginscreen" style={{backgroundImage : `url(${background})`}}>
            
            <Navbar setSignIn={setSignIn}/>

            {signIn ? (
                <Login/>
            ) : (
                <div className="login-body">
                    <h1>Unlimited movies, TV shows and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <form action="" >
                        <input className="subscribe-input" type="email" name="" id="" placeholder="Email address"/>
                        <button className="subscribe-button" onClick={handleSign}> Get Started&ensp;<i className="fas fa-chevron-right fa-sm"></i></button>
                    </form>
                </div>
            )}
            
        </div>
    )
}

export default Loginscreen
