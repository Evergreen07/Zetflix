import React, { useState, useRef } from 'react'
import {auth} from '../../firebase'
import '../../utilities/stylesheets/Login.css'

const Login = () => {
    const [sign, setSign] = useState('Sign In');

    const emailRef = useRef(null);
    const passwordRef = useRef(null);


    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((user)=>{
            console.log(user);
        }).catch((error)=>{
            window.alert(error.message);
        })

    }

    
    const login = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((user)=>{
            console.log(user);
        }).catch((error)=>{
            window.alert(error.message);
        })

    }


    const handleSign = () => {
        if(sign === 'Sign In'){
            setSign('Sign Up');
        } else{
            setSign('Sign In');
        }
    }


    return (
        <div className="login-form">
            
            <form action="">
                <h1>{sign}</h1>
                
                <input ref={emailRef} type="email" name="email" id="email" placeholder="Enter email address"/>
                

                <input ref={passwordRef} type="password" name="password" id="password" placeholder="Enter password"/>
                
                {sign === 'Sign In' ? 
                (<button className="submit" type="submit" onClick={login}> {sign} </button>) 
                : (<button className="submit" type="submit" onClick={register}> {sign} </button>)}
                
            </form>

            <div>
                {sign === 'Sign In' ? (
                <h4>
                    New to Zetflix?&ensp; 
                    <span className="span" onClick={handleSign}>
                     Sign Up now.
                    </span>
                </h4>) : (
                <h4>
                    Already a user ?&ensp; 
                    <span className="span" onClick={handleSign}>
                    Sign In now.
                    </span>
                </h4>
                )} 
                
            </div>
        </div>
    )
}

export default Login
