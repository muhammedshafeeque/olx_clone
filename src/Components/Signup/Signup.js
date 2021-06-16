import React, { useState,useContext, useEffect } from 'react';

import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../Store/Context';
import './Signup.css';
import {useHistory} from "react-router-dom"
import Loading from '../Loading/Loading'
export default function Signup() {
  const history =useHistory()
  const [UserName,setUsername]=useState('')
  const [Email,setEmail]=useState('')
  const [Phone,setPhone]=useState('')
  const [Password,setPassword]=useState('')
  const {firebase}= useContext(FirebaseContext)
  const [loading,setloading]=useState(false)
  const handleSubmit=(e)=>{
    
    e.preventDefault()
    setloading(true)
    firebase.auth().createUserWithEmailAndPassword(Email,Password).then((result)=>{
      result.user.updateProfile({displayName:UserName}).then(()=>{
        firebase.firestore().collection('users').add({
          id:result.user.uid,
          username:UserName,
          phone:Phone
        }).then(()=>{
          history.push('/login')
        })
      })

    })
  }
  
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={UserName}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={Email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={Phone}
            onChange={(e)=>setPhone(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={Password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          {loading&&<Loading/>}
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
