import './PostLogin.css'
import axios from 'axios'
import React, { useState } from 'react'

const baseURl="https://backend-edw.herokuapp.com/login"



export const PostLogin = () => {
    
    const [username, setusername] = useState({username:'usename'});
    const [password, setpassword] = useState({password:'password'});

    const login = (() => {
        axios.post(baseURl, {
            username:username, 
            password:password
        })
        .then(response=>{
            if(response.message === "Credenciales Invalidas")
            {
                console.log("Invalido");
            }
            else {
                console.log(response.data);
            }
        })
        .catch(ex =>{
            console.log(ex);
        })
    })


    const getusername = (event) =>{
    setusername(event.target.value);

}
    const getpassword = (e) =>{
        setpassword(e.target.value);
    }
    return (
    <>
    <div className="containerF">
            <div className='inputs'>
                <label htmlFor="">EMAIL</label>
                <input type="text" name="name" id="name" placeholder='Username' onChange={getusername}/>
                <label htmlFor="">PASSWORD</label>
                <input type="password" name="password" id="password" placeholder='*******' onChange={getpassword}/>
            </div>
            <div className='remember'>
                <input type="checkbox" name="remember" id="remember"  />
                <h3>Remember me</h3>
            </div>
            <div className='forgot'>
                <a href="#!">Forgot Password?</a>
                <button className='btn' onClick={login}>Sing in</button>
            </div>
        </div>  
    </>
)
}
