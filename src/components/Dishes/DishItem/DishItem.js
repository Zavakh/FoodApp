import classes from "./DishItem.module.css";
import React, {useState} from "react";


const DishItem = (props) => {
    const [enteredName, setEnteredName]=useState('');
    const [preparationChange, setPreparationChange]=useState('');
  
    const nameChangeHandler = (event)=>{
        setEnteredName(event.target.value);
    };
    const preparationChangeHandler = (event)=>{
        setPreparationChange(event.target.value);
    };
//   Here I set some limitations to add culinary logic 
// f.e. to not order pizza that has 2 meter in diameter or sandwich with 50 slices

//   const pizzaPicked =(props)=>{
//       <div className={classes.meal__picked}>
//     <label for="pizzaslices">How many slices of pizza would you like?</label>
//     <input type="number" id="pizzaslices" name="pizzaslices"></input>
//     <label for="pizzadiameter">What diameter of your pizza would you like? (Ranged from 20 to 60cm)</label>
//     <input type="number" id="pizzadiameter" name="pizzadiameter" min="20" max="60"></input>
//     </div>
//   };
//   const soupPicked =(props)=>{
//     <div className={classes.meal__picked}>
//     <label for="soupspice">Choose spiciness of your soup (From 1 to 10)</label>
//     <input type="number" id="soupspice" name="soupspice" min="1" max="10" step="1"></input>
//     </div>
//   };
//   const sandwichPicked =()=>{
//     <div className={classes.meal__picked}>
//     <label for="breadslices">Choose the amount of slices of bread you would like in your sandwich (From 2 to 6)</label>
//     <input type="number" id="breadslices" name="breadslices" min="2" max="6" step="1"></input>
//     </div>
//   };

  const nameToDisplay = enteredName + " " + props.meal.type;

  const submitHandler =(event)=>{
    event.preventDefault();
    const dishData = {
        id: props.meal.id,
        name: nameToDisplay,      
    }

  };

  

  return (
      <form onSubmit={submitHandler}>
    <li className={classes.meal}>
        <div className={classes.description}>
      <label for="dishname">Would you like to name your dish?   </label>      
      <input type="text" id="dishname" name="dishname" onChange={nameChangeHandler} required></input>
      <div>
        <h3>{nameToDisplay}</h3>
      </div>
      <label for="dishname">Pick preparation time   </label>
      <input
        type="text"
        id="preptime"
        name="preptime"
        class="html-duration-picker"
        onChange={preparationChangeHandler}
        required
      />
      
    </div>
    
  </li>
  <button type="submit">Submit</button>
  </form>);
};
export default DishItem;
