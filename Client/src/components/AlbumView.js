//

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function AlbumView() {
   const { id } = useParams();
   const [albumData, setAlbumData] = useState([]);
   const navigate = useNavigate();

   useEffect(() => {
      const API_URL = `http://localhost:4444/song/${id}`;
      const fetchData = async () => {
         const response = await fetch(API_URL);
         const resData = await response.json();
         setAlbumData(resData.results);
      };
      fetchData();
   }, [id]);

   const navbuttons = () => {
      return (
         <div>
            <button onClick={() => navigate(-1)}>Back</button>
            |
            <button onClick={() => navigate('/')}>Home</button>
         </div>
      )
   }

   const justSongs = albumData.filter((entry) => entry.wrapperType === "track");

   const renderSongs = justSongs.map((song, i) => {
      return (
         <div key={i}>
            <p>{song.trackName}</p>
         </div>
      );
   });

   return (
      <div>
         {navbuttons()}
         {renderSongs}
      </div>
   );
}

export default AlbumView;