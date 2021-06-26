import { Fragment } from "react";
import classes from "./Header.module.css";
import foodImg from "../../assets/food-unsplash.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food Ordering App</h1>
      </header>
      <div className={classes["main-image"]}>
        <img src={foodImg} alt="A table with food" />
      </div>
    </Fragment>
  );
};
export default Header;
