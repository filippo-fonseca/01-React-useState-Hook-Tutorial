import React, { useState } from "react";
import styles from "../styles/Home.module.css";

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className={styles.main}>
      <button onClick={incrementCount}>+</button>
      <p>{count}</p>
      <button onClick={decrementCount}>-</button>
    </div>
  );
};

export default App;
