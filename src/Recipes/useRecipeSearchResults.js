import{useState,useEffect} from "./react";

const useRecipeSearchResults=(searchString)=>{
   const[isLoading, setisLoading] =useState(false);
   const[searchResults, setSearchResults]=useState([]);

   useEffect(()=>{
       setisLoading(true);


       const loadSearchResults=async()=>{
           const response = await fetch(`/recipes?search=${searchString}`);
           const results = await response.json();
           setisLoading(false);
           setSearchResults(results);
       }
       loadSearchResults();
   },[searchResults]);

   return{isLoading, searchResults}

}