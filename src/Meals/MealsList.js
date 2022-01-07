import React from "react";
import{MealsListItem} from"/MealsListItem";

export const MealsListItem=({isLoading , meals })=>(
    <div classname="list-container">
        <h1>Planned Meals</h1>
    </div>
  {isLoading ? 
<p>Loading...</p>
: }
)