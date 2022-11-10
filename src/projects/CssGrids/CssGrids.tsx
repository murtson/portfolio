import React from "react";
import styles from "./main.module.scss";

const Intro = () => {
  <div className={styles.root}>
    <div className={`${styles.item} ${styles.item__1}`}>1: Orange</div>
    <div className={`${styles.item} ${styles.item__2}`}>2: Green</div>
    <div className={`${styles.item} ${styles.item__3}`}>3: Voilet</div>
    <div className={`${styles.item} ${styles.item__4}`}>4: Pink</div>
    <div className={`${styles.item} ${styles.item__5}`}>5: Blue</div>
    <div className={`${styles.item} ${styles.item__6}`}>6: Brown</div>
  </div>;
};

const Challenge = () => {
  return (
    <div className={styles.challenge}>
      <header className={styles.header}>Header</header>
      <div className={styles.smallBox}>Small box 1</div>
      <div className={styles.smallBox}>Small box 2</div>
      <div className={styles.smallBox}>Small box 3</div>
      <nav className={styles.sideBar}>Sidebar</nav>
      <main className={styles.mainContent}>Main Content</main>
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
};

const ImplicitGrid = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.item} ${styles.item__1}`}>1</div>
      <div className={`${styles.item} ${styles.item__2}`}>2</div>
      <div className={`${styles.item} ${styles.item__3}`}>3</div>
      <div className={`${styles.item} ${styles.item__4}`}>4</div>
      <div className={`${styles.item} ${styles.item__5}`}>5</div>
      <div className={`${styles.item} ${styles.item__6}`}>6</div>
      <div className={`${styles.item} ${styles.item__7}`}>7</div>
      <div className={`${styles.item} ${styles.item__8}`}>8</div>
    </div>
  );
};

const CssGrids = () => {
  return <ImplicitGrid />;
};

export default CssGrids;
