import "./App.css";
import axios from "axios";
import LandingPage from "./Components/LandingPage";
import {useLocation} from 'react-router-dom'
import { useEffect } from "react";

const client_id =process.env.REACT_APP_CLIENT_ID
const redirect_uri =process.env.REACT_APP_REDIRECT_URI
const response_type = "token";
const auth_endpoint = process.env.REACT_APP_AUTH_ENDPOINT
const scope = "playlist-read-private"
const token_type = "Bearer";




const tokenURI = window.location.hash;
const tokenArray = tokenURI.split("&");
const slicedToken = tokenArray[0].slice(14);
localStorage.setItem("token", slicedToken);

const token = localStorage.getItem("token");
export const axiosInstanc = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});



axiosInstanc.interceptors.request.use((config) => {
  const newConfig = { ...config };
  
  if (token) {
    newConfig.headers = {
      ...newConfig.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  return newConfig;
});


function App() {
  return (
    <div className="App">
      {!tokenURI ? (
        <a style={{textDecoration:'none'}}
        href={`${auth_endpoint}client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=${scope}&token_type=${token_type}&show_dialog=true
        `}
        >
          <div className="direction" style={{display: 'flex' , flexDirection:"column", alignItems:"center", justifyContent:"center", height: '100vh', backgroundColor:'black'}}>
              <div className="directionFlex" style={{display: 'flex', alignContent:"center", justifyContent:'center'}}>
                <img src="https://www.hypebot.com/wp-content/uploads/2019/11/spotify-1759471_1920.jpg"   alt="SpotifyLoginPage"  style={{width:'200px'
                }}/>
                {/* <p style={{margin}}>spotify</p> */}
              </div>
              <button style={{color: 'green', width:'180px', height:'50px', FontSize:'350px', marginTop:'10px', textAlign:'none', cursor:'pointer' }}>Login</button>

              {/* <style>
                p {
                  color: white
                  background-color:black
                }
              </style> */}
          </div>

          {/* Loginnnnn */}
        </a>
      ) : (
        <LandingPage />
        )}
    </div>
  );
}

export default App
;






// {/* {!token ? 
//  <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
//    Login
//  </a> :(
//  <>
//  <button onClick={logout}>logout</button>
//    <form onSubmit={searchArtist}>
//      <input type='text' value={searchKey} onChange={(e)=>setSearchKey(e.target.value)}/>
//      <button type='submit'>Search</button>
//    </form>
//  </>
 
//  )
// } */}

//   const CLIENT_ID = '906b8015a2dd40a4b2421778cd8e1de7';
//   const REDIRECT_URI = 'http://localhost:3000';
//   const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
//   const RESPONSE_TYPE = 'token';

//   const [token, setToken] = useState('');
//   const [searchKey, setSearchKey] = useState('')




//   useEffect(()=> {
//     const hash = window.location.hash;
//     let token = window.localStorage.getItem('token');

//     if(!token && hash){
//         token = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1]
//         window.location.hash = ''
//         window.localStorage.setItem('token', token);
//     }
//     setToken(token)
//   },[])

//   const logout = () => {
//     setToken('')
//     window.localStorage.removeItem('token');
//   }


//   const fetchAlbum= async() => {
//     const response = await axios.get('https://api.spotify.com/v1/search',{
//       headers:{
//         Authorization: `Bearer ${token}`
//       }
//     });
//     console.log(response)
//   }
// const searchArtist = async(e)=> {
//   e.preventDefault()
// const data = await axios.get('https://api.spotify.com/v1/search',{
//   headers:{
//     Authorization:`Bearer ${token}`
//   },
//   params:{
//     q:searchKey,
//     type:'artist'
//   }
// })
// console.log(data)
// }