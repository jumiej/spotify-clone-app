
import axios from "axios";
import LandingPage from "./LandingPage";


  
  const client_id = "78bc8ea9b4254dc0ac6b0e3752d2ee6d";
  const redirect_uri = "http://localhost:3000"; 
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
  
  
  
  const Auth = () => {
    return (
      <div className="App">
        {!tokenURI ? (
          <a
          href={`${auth_endpoint}client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=${scope}&token_type=${token_type}&show_dialog=true
          `}
          >
            <div className="direction">
              <img src="spotLogo" alt="SpotifyLog"/>
              Loginnnnn
            </div>
           
          </a>
        ) : (
          <LandingPage />
          )}
      </div>
    );
  }
  
  export {
    Auth,
  };

  


