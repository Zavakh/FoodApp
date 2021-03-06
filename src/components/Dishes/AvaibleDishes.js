import classes from "./AvaibleDishes.module.css";
import Card from "../UI/Card";
import DishItem from "./DishItem/DishItem";

const meals = [
  {
    id: "1",
    type: "pizza",
    name: "",
    preparation_time: "",
    no_of_slices: 0,
    diameter: 0,
  },
  {
    id: "2",
    type: "soup",
    name: {},
    preparation_time: "{}",
    spiciness_scale: "{}",
  },
  {
    id: "3",
    type: "sandwich",
    name: "{}",
    preparation_time: "{}",
    slices_of_bread: "{}",
  },
];

const AvaibleDishes = (props) => {
  const filteredDish = meals.filter((meals) => {
    return meals.type === props.selected;
  });

  const mealsList = filteredDish.map((meal) => (
    <DishItem key={meal.id} meal={meal} selectedDish={props.selectedDish} />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvaibleDishes;
