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
        console.log(event.target.value);
    };
//   Here I set some limitations to add culinary logic 
// f.e. to not order 0 slices of pizza, pizza that has 2 meter in diameter or sandwich with 50 slices
    let dishPicked = '';

    if(props.meal.type === "Pizza") {
      dishPicked = <div>
      <label htmlFor="pizzaslices">How many slices of pizza would you like?  </label>
      <input type="number" id="pizzaslices" name="pizzaslices" min='1'></input>
      <p>
        <label htmlFor="pizzadiameter">What diameter of your pizza would you like? (Ranged from 20 to 60cm)   </label>
      <input type="number" id="pizzadiameter" name="pizzadiameter" min="20" max="60"></input>
      </p>
      </div>
    }

    if (props.meal.type === "Soup") {
      dishPicked = <div>
    <label htmlFor="soupspice">Choose spiciness of your soup (From 1 to 10)</label>
    <input type="number" id="soupspice" name="soupspice" min="1" max="10" step="1"></input>
    </div>
    }
  
    if (props.meal.type === "Sandwich") {
      dishPicked = <div>
      <label htmlFor="breadslices">Choose the amount of slices of bread you would like in your sandwich (From 2 to 6)</label>
      <input type="number" id="breadslices" name="breadslices" min="2" max="6" step="1"></input>
      </div>
    }

    

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
      <label htmlFor="dishname">Would you like to name your dish?   </label>      
      <input type="text" id="dishname" name="dishname" onChange={nameChangeHandler} required></input>
      <div>
        <h3>{nameToDisplay}</h3>
      </div>
      <label htmlFor="preptime">Pick preparation time   </label>
      <input
        type="text"
        id="preptime"
        name="preptime"
        className="html-duration-picker"
        data-duration="00:00:00"
        onChange={preparationChangeHandler}
        required
      />
      <p />
      {dishPicked}      
    </div>
    
  </li>
  <button type="submit">Submit</button>
  </form>);
};
export default DishItem;
