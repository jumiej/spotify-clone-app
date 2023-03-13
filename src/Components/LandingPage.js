import React from 'react'
import MainPhase from './MainPhase'
import Sidebar from './widget/Sidebar'
import RightAside from './widget/RightAside'


const LandingPage = () => {

  return    (
    <div className="main-container">
    <Sidebar />
    <MainPhase />
    <RightAside />
  
    </div>
  )

}
export default LandingPage;



























// {/* const playlist = () => {
//   fetch(`${SPOTIFY_API_URL}/me/playlists`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//     })
//     .then((result) => {
//       console.log(result);
//       setPlaylist(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     })
// } 












    
/* useEffect(() => {
  const fetchMusic = async () => {
try {
const responce = await fetch(
  `https://api.spotify.com/v1/search?q=artist:${
    search ? search : "fireboy"
  }&type=track&limit=5
  `,
  {
    headers: {
      Authorization: `Bearer ${apiToken}`,
    },
  }
);

const data = await responce.json();

setTrackData(data);
console.log(trackData);
} catch (error) {
catch (error) {
console.log(error);
}
};

console.log("rendered!");
console.log("data: " + trackData);
fetchMusic();
setSearch(search);
}, [search]);

)
}
    
    </>
)}
//  */










//  1. audio tag
// 2. <audio control></audio>
// Arnold Raphael6:41 PM
// <audio src="" control></control>
// Arnold Raphael6:56 PM
// const responce = await fetch(
//           `https://api.spotify.com/v1/search?q=artist:${
//             search ? search : "fireboy"
//           }&type=track&limit=5
//           `,
//           {
//             headers: {
//               Authorization: `Bearer ${apiToken}`,
//             },
//           }
//         );
// Arnold Raphael6:57 PM
// <Landing apiToken={token} />
// Arnold Raphael7:00 PM
// useEffect(() => {
//     const fetchMusic = async () => {
//       try {
//         const responce = await fetch(
//           `https://api.spotify.com/v1/search?q=artist:${
//             search ? search : "fireboy"
//           }&type=track&limit=5
//           `,
//           {
//             headers: {
//               Authorization: `Bearer ${apiToken}`,
//             },
//           }
//         );

//         const data = await responce.json();

//         setTrackData(data);
//         console.log(trackData);
//       } catch (error) {
// catch (error) {
//         console.log(error);
//       }
//     };

//     console.log("rendered!");
//     console.log("data: " + trackData);
//     fetchMusic();
//     setSearch(search);
//   }, [search]);
// Arnold Raphael7:01 PM
// const [search, setSearch] = useState("");
//   const [trackData, setTrackData] = useState(null); 