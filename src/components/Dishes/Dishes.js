import DishesSummary from "./DishesSummary";
import AvaibleDishes from "./AvaibleDishes";
import { Fragment } from "react";
import React, { useState } from "react";

const Dishes = (props) => {
  const [filteredDish, setFilteredDish] = useState("filteredDish");

  const filterChangeHandler = (selectedDish) => {
    setFilteredDish(selectedDish);
    console.log(selectedDish);
  };

  return (
    <Fragment>
      <DishesSummary
        selected={filteredDish}
        onChangeFilter={filterChangeHandler}
      />
      <AvaibleDishes selected={filteredDish} />
    </Fragment>
  );
};
export default Dishes;
