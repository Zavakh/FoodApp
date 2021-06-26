import { Fragment } from "react";
import Header from "./components/Layout/Header";
import Dishes from "./components/Dishes/Dishes";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Dishes />
      </main>
    </Fragment>
  );
}

export default App;
