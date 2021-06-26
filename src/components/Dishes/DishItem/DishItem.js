import classes from "./DishItem.module.css";
import React, { useState } from "react";

const DishItem = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [preparationChange, setPreparationChange] = useState("00:00:00");
  const [pizzasSliceChange, setpizzaSliceChange] = useState();
  const [pizzasDiameterChange, setpizzaDiameterChange] = useState();
  const [spicinessScaleChange, setspicinessScaleChange] = useState();
  const [slicesOfBreadChange, setSlicesOfBreadChange] = useState();

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    console.log(enteredName.type)
  };
  const preparationChangeHandler = (event) => {
    setPreparationChange(event.target.value);
    
    console.log(preparationChange.value);
  };
  const pizzaSlicesChangeHandler = (event) => {
    setpizzaSliceChange(event.target.value);    
    console.log(event.target.value);    
    
  };
  const pizzaDiameterChangeHandler = (event) => {
    setpizzaDiameterChange(event.target.value);
    console.log(event.target.value)
  };
  const spicinessScaleChangeHandler = (event) => {
    setspicinessScaleChange(event.target.value);
  };
  const slicesOfBreadChangeHandler = (event) => {
    setSlicesOfBreadChange(event.target.value);
  };

  
  //   Here I set some limitations to add culinary logic
  // f.e. to not order 0 slices of pizza, pizza that has 2 meter in diameter or sandwich with 50 slices
  let dishPicked = "";

  const nameToDisplay = enteredName + " " + props.meal.type;

  if (props.meal.type === "pizza") {    
    dishPicked = (
      <div>
        <label htmlFor="pizzaslices">
          How many slices of pizza would you like?{" "}
        </label>
        <input
          type="number"
          id="pizzaslices"
          name="pizzaslices"
          min="1"
          
          onChange={pizzaSlicesChangeHandler}
          required
        ></input>
        <p>
          <label htmlFor="pizzadiameter">
            What diameter of your pizza would you like? (Ranged from 20 to 60cm){" "}
          </label>
          <input
            type="number"
            id="pizzadiameter"
            name="pizzadiameter"
            min="20"
            max="60"
            step="0.1"
            onChange={pizzaDiameterChangeHandler}
            required
          ></input>
        </p>
      </div>
    );
  }

  if (props.meal.type === "soup") {   
    dishPicked = (
      <div>
        <label htmlFor="soupspice">
          Choose spiciness of your soup (From 1 to 10)
        </label>
        <input
          type="number"
          id="soupspice"
          name="soupspice"
          min="1"
          max="10"
          step="1"
          onChange={spicinessScaleChangeHandler}
          required
        ></input>
      </div>
    );
  }

  if (props.meal.type === "sandwich") {
    
    dishPicked = (
      <div>
        <label htmlFor="breadslices">
          Choose the amount of slices of bread you would like in your sandwich
          (From 2 to 6)
        </label>
        <input
          type="number"
          id="breadslices"
          name="breadslices"
          min="2"
          max="6"
          step="1"
          onChange={slicesOfBreadChangeHandler}
          required
        ></input>
      </div>
    );
  }
  const standardJSX = (
    <div>
      <div className={classes.description}>
        <label htmlFor="dishname">Would you like to name your dish? </label>
        <input
          type="text"
          id="dishname"
          name="dishname"
          onChange={nameChangeHandler}
          required
        ></input>
        <div>
          <h3>{nameToDisplay}</h3>
        </div>
        <label htmlFor="preptime">Pick preparation time </label>
        <input
          type="time"
          id="preptime"
          name="preptime"
          className="html-duration-picker"
          step="1"
          value={preparationChange}
          onChange={preparationChangeHandler}
          required
        />
        <p />

        {dishPicked}
      </div>
    </div>
  );


  const submitHandler = (event) => {
    event.preventDefault();
    let pizzaSlicesCount = null;
    let pizzaDiameterCount = null;
    let spicinessCount = null;
    let breadSlices = null;
   if (props.meal.type === "pizza"){
    pizzaSlicesCount = JSON.parse(pizzasSliceChange);
    pizzaDiameterCount = JSON.parse(pizzasDiameterChange);
   };
   if(props.meal.type === "soup"){
    spicinessCount = JSON.parse(spicinessScaleChange);
   };
   
  if(props.meal.type === "sandwich"){
    breadSlices =  JSON.parse(slicesOfBreadChange);
   };
   
    const dishData = {
      id: props.meal.id,
      name: nameToDisplay,
      type: props.meal.type,
      preparation_time:preparationChange,
      no_of_slices: pizzaSlicesCount,
      diameter: pizzaDiameterCount,
      spiciness_scale: spicinessCount,
      slices_of_bread: breadSlices,
    };
    console.log(dishData);
    alert("Your order has been recieved");
    
  
  
  fetch('https://frosty-wood-6558.getsandbox.com/dishes', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(dishData),
})
.then(response => response.json())
.then(dishData => {
  console.log('Success:', dishData);
})
.catch((error) => {
  console.error('Error:', dishData);
});
};
  
  return (
    <form onSubmit={submitHandler}>
      <li className={classes.meal}>{standardJSX}</li>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DishItem;
