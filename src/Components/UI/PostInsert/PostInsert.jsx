import axios from 'axios'
import React, { useState } from 'react'

const baseURl="https://backend-edw.herokuapp.com/usuario";


export const PostInsert = () => {
    const [username, setusername] = useState({username:'usename'});
    const [password, setpassword] = useState({password:'password'});
    const [name, setname] = useState({name:'name'});

    const login = (() => {
        axios.post(baseURl, {
            username:username, 
            password:password, 
            name:name
        })
        .then(response => {
            console.log("Correcto");
        })
        .catch(ex =>{
            console.log(ex);
        })
    })


    const getusername = (event) =>{
    setusername(event.target.value);
    console.log(event.target.value);
    console.log(username);
}
    const getpassword = (e) =>{
        setpassword(e.target.value);
    }
    const getname = (e) =>{
        setname(e.target.value);
    }
    
    return (
    <>
    <div>
        <input type="text" autoFocus placeholder="Username" onChange={getusername} />
        <input type="password"  placeholder="Password" onChange={getpassword} />
        <input type="text"  placeholder="Name" onChange={getname}/>
        <input type="button" value="Sing up" onClick={login}  />
    </div>
    </>
)
}
