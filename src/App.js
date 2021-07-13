import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import './App.css';

import Homescreen from './components/pages/Homescreen';
import Loginscreen from './components/pages/Loginscreen';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function App() {
  const loggedInUser = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
      const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
        if(userAuth){
            dispatch(
              login({
                uid : userAuth.uid,
                email : userAuth.email
              })
            );
        }else{
            dispatch(logout());
        }
      })

      return unsubscribe;
  },[dispatch]);

  return (
    <Router>
      {loggedInUser ? (
          <Switch>
            <Redirect exact from="/login" to="/" />
            <Route exact path='/' component={Homescreen}></Route>
          </Switch>
          ) : (
            <Switch>
              <Redirect exact from="/" to="/login" />
              <Route path='/login' component={Loginscreen}></Route>
            </Switch>
          )
      }

    </Router>
  );
}

export default App;
