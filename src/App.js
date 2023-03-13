import "./App.css";
import axios from "axios";
import LandingPage from "./Components/LandingPage";

const client_id = "78bc8ea9b4254dc0ac6b0e3752d2ee6d";
const redirect_uri =  "https://spotify-clone-app-git-main-jumiej.vercel.app/";
const response_type = "token";
const auth_endpoint = "https://accounts.spotify.com/authorize?";
const scope = "playlist-read-private";
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
        <a
        href={`${auth_endpoint}client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=${scope}&token_type=${token_type}&show_dialog=true
        `}
        >
          <div className="direction">
              <img src="./assests/images/spotLogo.PNG"   alt="SpotifyLoginPage"/>
              Login
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