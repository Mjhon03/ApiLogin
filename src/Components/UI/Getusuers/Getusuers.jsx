import axios from 'axios';
import React from 'react'

const baseURl = "https://backend-edw.herokuapp.com/usuarios";
let datos = [];

export const Getusuers = () => {
        
        axios.get(baseURl)
        .then(res =>{
            datos = res.data
            console.log(res.data);
        })    
    return (
    <>
        <table className='table'>
        <tbody>
            <tr>
                <th className='table-text-center'>#</th>
                <th className='table-text-center'>Nombre de usuario</th>
                <th className='table-text-center'>Contraseña</th>
                <th className='table-text-center'>Nombre</th>
            </tr>
            {console.log(datos)}
            <tr>
                <td className='table-text-center'></td>
                <td className='table-text-center'></td>
                <td className='table-text-center'></td>
                <td className='table-text-center'></td>
            </tr>
            </tbody>
            </table>
    </>
)
}
