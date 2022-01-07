import React from "react";
import { Link } from "react-router-dom";
import {SmallX} from "../UI";

export const MealListItem=({meal,date})=>(
    <div className="list-item">
    {meal ? (
        <>
        <h3> {date.getDate()}</h3>
        <p>{meal.recipe.name}</p>
        <div classname="right-action">
        <SmallX/>
        </div></>
        ) : (
            <>
            <h3> {date.getDate()}</h3>
        <p>No meal planned </p>
        <div classname="right-action">
        <Link to={`/recipe?date=${date.toString()}`}>
            <button>Add</button>
        </Link>
        </div>
            </>
        )
        
    }

    </div>
)