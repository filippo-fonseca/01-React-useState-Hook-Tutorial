import React, { useState } from "react";
import Head from "next/head";
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
    <div className={styles.container}>
      <Head>
        <title>01 - Counter Example</title>
      </Head>
      <h1 className={styles.title}>⏰ React Counter Example</h1>
      <p className={styles.description}>
        Live demo for: 01 - React <code className={styles.code}>useState</code>{" "}
        Hook Tutorial by Filippo Fonseca
      </p>
      <div className={styles.main}>
        <button onClick={incrementCount}>+</button>
        <p>{count}</p>
        <button onClick={decrementCount}>-</button>
      </div>
      <div className={styles.footer}>
        <a href="/" target="_blank" rel="noopener noreferrer">
          Created and maintained with ❤️ by{" "}
          <a target="_link" href="https://www.github.com/filippo-fonseca">
            <div style={{ marginRight: "7px" }}>
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/2111/2111425.svg"
                alt="Vercel Logo"
                className={styles.logo}
              />
            </div>
            Filippo Fonseca.{" "}
          </a>
        </a>
      </div>
    </div>
  );
};

export default App;
