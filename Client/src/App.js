import { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";

import AlbumView from "./components/AlbumView";
import ArtistView from "./components/ArtistView";
import Gallery from "./components/Gallery";
import SearchBar from "./components/SearchBar";
import { DataContext } from "./context/DataContext";
import { SearchContext } from "./context/SearchContext";

import "./App.css";

import trace from "./helper";


function App() {
   const [message, setMessage] = useState("Search for Music!");
   const [data, setData] = useState([]);
   const searchInput = useRef("");
   
   const API_URL = "http://localhost:4444/search/";

   useEffect(() => {
      // trace('term')(searchInput.current.value);
   });

   const handleSearch = (e) => {
      e.preventDefault();
      const term = searchInput.current.value;
      trace('term')(term);
      const fetchData = async () => {
         document.title = `${term} Music`;
         const response = await fetch(API_URL + term);
         const resData = await response.json();
         if (resData.results.length > 0) {
            setData(resData.results);
         } else {
            setMessage("Not found");
         }
      };
      fetchData();
   };

   return (
      <div>
         <Router>
            <Routes>
               <Route
                  path="/"
                  element={
                     <Fragment>
                        <SearchContext.Provider
                           value={{
                              term: searchInput,
                              handleSearch,
                           }}
                        >
                           <SearchBar />
                        </SearchContext.Provider>
                        <DataContext.Provider value={data}>
                           <Gallery />
                        </DataContext.Provider>
                     </Fragment>
                  }
               />
               <Route path="/album/:id" element={<AlbumView />} />
               <Route path="/artist/:id" element={<ArtistView />} />
            </Routes>
         </Router>

         {message}
      </div>
   );
}

export default App;
