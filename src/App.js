import React,{useEffect,useContext} from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import './App.css';
import {AuthContext, FirebaseContext} from './store/Context'

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {

  const{setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)  
  useEffect(()=>{
        firebase.auth().onAuthStateChanged((user)=>{
          setUser(user)
        })
  })

  return (
    <div>
      <Router  basename='/react-router' >
        
        <Route exact path='/'>
             <Home />
        </Route>
        <Route path='/Signup'>
             <Signup />
        </Route>
        <Route path='/Login'>
             <Login />
        </Route>
        
      </Router>
      
    </div>
  );
}

export default App;