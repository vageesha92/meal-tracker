import React from "react";
import { Link } from "react-router-dom";
import { useMeals } from "../Meals";
import { useIngredients } from "../Ingredients/useIngredients";

export const HomePage =()=> {
    const {meals, isLoading: isLoadingMeals, setMeals}=useMeals();
    const {ingredients, isLoading: isLoadingIngredients, setIngredients}=useIngredients();
    console.log("Meals:");
    console.log(ingredients);
    return (
        <div className="page-container">
            <div className="column">
             <MealsList
                isLoading={isLoadingMeals}
                meals={meals}/>
            </div>
            <div classname="column">
                    <IngredientsList
                    isLoading={isLoadingIngredients}
                    ingredients={ingredients}/>
                   <button 
                   classname="list-container full-width shopping-list-button ">
                       Generate Shopping List 
                    </button>
    )
            </div>
        </div>
);
}