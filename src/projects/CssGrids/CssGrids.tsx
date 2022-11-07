import React from 'react';
import styles from './main.module.scss';

const CssGrids = () => {
  return (
    <div className={styles.root}>
      <div className={`${styles.item} ${styles.item__1}`}>1: Orange</div>
      <div className={`${styles.item} ${styles.item__2}`}>2: Green</div>
      <div className={`${styles.item} ${styles.item__3}`}>3: Voilet</div>
      <div className={`${styles.item} ${styles.item__4}`}>4: Pink</div>
      <div className={`${styles.item} ${styles.item__5}`}>5: Blue</div>
      <div className={`${styles.item} ${styles.item__6}`}>6: Brown</div>
    </div>
  );
};

export default CssGrids;
