import React, { useContext,  useState } from 'react';
import {FirebaseContext} from '../../Store/Context'
import Logo from '../../olx-logo.png';
import './Login.css';
import {useHistory} from "react-router-dom"

import Loading from '../Loading/Loading';
function Login() {
    const [Email,setEmail]= useState('')
    const [Password,setPassword]= useState('')
    const history=useHistory()
    const {firebase}= useContext(FirebaseContext)
    const [loading,setloading]=useState(false)
    const Handlelogin =(e)=>{
      e.preventDefault();
      setloading(true)
      
        
        firebase.auth().signInWithEmailAndPassword(Email,Password).then(()=>{ 
          
          history.push('/') 
          
        }).catch((error)=>{
            alert(error.message)
        })
        
    }
  return (
    <div>
      <div className="loginParentDiv">
        
        
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={Handlelogin}>
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
          <button>Login</button>
        </form>
        
        <a onClick={()=>{
          history.push('/signup')

        }}>Signup</a>
         
      </div>
       
    </div>
  );
}

export default Login;