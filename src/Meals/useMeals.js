import {useState, useEffect} from "react";


export const useMeals=()=>{
    const[isLoading, setisLoading]= useState(true);
    const[rawMeals,setRawMeals]=useState([]);
    useEffect(()=>{
           const loadMeals=async()=>{
               const response=await fetch("/meals");
               const rawMealsResponse=await response.json();
               setRawMeals(meals);
               setisLoading(false);
           }
           loadMeals();
    },[]);
   return{isLoading, 
    meals: rawMeals.map(rawMeal=>({
        ...rawMeal,
        PlannedDate: new Date (rawMeal.PlannedDate),
    })), 
    setMeals: setRawMeals };
}

