// import axios from 'axios';
import './App.css';
import Auth  from './Components/Auth'


function App() {
  return (
    <div className='app'>
      <Auth />
    </div>
  );
}

export default App;







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