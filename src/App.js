import React, { useEffect, useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Post from './Store/PostContext'

/**
 * ?  =====Import Components=====
 */

import Home from './Pages/Home';
import SignupPage from './Pages/Signup';
import LoginPage from './Pages/Login';
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import { AuthContext, FirebaseContext } from './Store/Context';
import SerchResults from './Pages/SerchResults';



function App() {
  const { setUser } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContext)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })

  })
  return (
    <div>
      
<Post>
        <Router>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path='/view'>
            <View/>
          </Route>
          <Route path='/serch'>
            <SerchResults/>
          </Route>
        </Router>
</Post>


    </div>
  );
}

export default App;
