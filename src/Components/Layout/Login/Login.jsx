import React from 'react'
import './Login.css'
import { ArrowReturn } from '../../UI/Return/Return'
import { Sing } from '../../UI/SIngIn/Singin'
import { SingInFG } from '../../UI/SingInFG/SingInFG'
import { PostLogin } from '../../UI/PostLogin/PostLogin'

export const Login = () => {
    return (
    <>
            <div className='allinfo'>
            <div className='img'>
            </div>
            <div className='Components'>
                <ArrowReturn/>
                <Sing/>
                <SingInFG/>
                <PostLogin/>
            </div>
        </div>
    </>
)
}
