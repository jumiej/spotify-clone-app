import React from 'react'
import { useEffect, useState } from 'react'

import LandingPage from './LandingPage'

const Auth = () => {

    const CLIENT_ID = "78bc8ea9b4254dc0ac6b0e3752d2ee6d"
    const REDIRECT_URI = "http://localhost:3000/"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    
    const [tokens, setToken] = useState("")
    

    useEffect (()=>{

        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash ) {
            token = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1]

            window.location.hash = ''
            window.localStorage.setItem('token', token)
        }

        setToken (token)
    })



  return (
    
    <div>
        
        { 
        tokens ? <LandingPage />:
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to spotify</a>
           
      

    }</div>
  )
}

export default Auth 