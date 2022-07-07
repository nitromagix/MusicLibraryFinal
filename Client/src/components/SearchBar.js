//

import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

function SearchBar() {
   let {term, handleSearch} = useContext(SearchContext);

   return (
      <form>
         <input ref={term} type="text" placeholder="Enter a search term here" />

         <button onClick={(e) => handleSearch(e)}>Submit</button>
      </form>
   );
}

export default SearchBar;
