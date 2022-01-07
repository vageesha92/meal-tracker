import React,{useState} from "react";
import { BackButton, DropDown } from "../UI";
import { useHistory } from "react-router-dom";

const unitOptions=["pounds",
"cups",
"count"
];



export const AddIngredient=()=> {
      const [name,setName]=useState("");
      const[amount,setAmount]=useState(0);
      const history = useHistory();
      const[units,setUnits]=useState(unitOptions[0]);   
       
      const addToIngredients= async()=>{
        const newIngredient={
            name: name.toLowerCase(),
            amount,
            units,
            
        }
        await fetch ("/ingredients",{
            method: "post",
            body: JSON.stringify(newIngredient),
            headers:{
                "Content-Type": "application/json",

            },
        });
       history.push("/");
    }
    return(
      <div className="page">
          <BackButton>
              <div className="centered-container">
                  Add Ingredient
                  <input type="text"
                  placeholder="Enter ingredient name here"
                className="space-after space-before full-width"
                  value={name}
                  onChange={e=>setName(e.target.value)}/>
                  <input type="number"
                  className="space-before full-width"
                  value={amount}
                  onChange={e=>setAmount(e.target.value)} />
                  <DropDown 
                  className="space-before full-width"
                  value={units}
                  onChange={e=>setUnits(e.target.value)}
                  options={unitOptions}/>
                  <button 
                  className="spece-before full-width"
                  onClick={addToIngredients} >
                     Add </button>
              </div>
          </BackButton>
      </div>


);
    }