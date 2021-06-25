import classes from "./DishesSummary.module.css";

const DishesSummary = (props) => {
  
    const dropdownChangeHandler = (event) => {
      props.onChangeFilter(event.target.value);
    };
  return (
    <section className={classes.summary}>
      <h2>Fresh and Delicious Food</h2>
      <p>
        We prepare our food with special attention to detail so that you can
        enjoy it with every bite
      </p>
      <p>
        We focus on traditional local products with a modern twist and on-time
        delivery
      </p>
      <hr/>
      <label htmlFor="dish">Choose a type of dish you want to order:</label>
      <hr />
      <select name="dish" value={props.selected} onChange={dropdownChangeHandler}>
        <option value=""></option>
        <option value="Pizza">Pizza</option>
        <option value="Soup">Soup</option>
        <option value="Sandwich">Sandwich</option>
      </select>
    </section>
  );
};

export default DishesSummary;
