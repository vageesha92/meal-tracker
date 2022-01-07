import React from "react";
import { useMeals } from "../Meals";

export const HomePage =()=> {
    const {meals, isLoading: isLoadingMeals, setMeals}=useMeals();
    console.log("Meals:");
    console.log(meals);
    return (
    <h1>This is the Home Page</h1>
);
}