import React from 'react';
import styles from './overview.module.scss';
import { StarSolid, LocationDotSolid } from '../../../components/iconComponents';

export const Overview = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.heading}>Hotel Las Palmas</h1>
      <div className={styles.stars}>
        {Array.from(Array(5).keys()).map(() => (
          <StarSolid className={styles.iconStar} />
        ))}
      </div>
      <div className={styles.location}>
        <LocationDotSolid className={styles.iconLocation} />
        <button className={styles.button}>Albuferia, Portugal</button>
      </div>

      <div className={styles.rating}>
        <div className={styles.ratingAverage}>8.6</div>
        <div className={styles.ratingCount}>429 votes</div>
      </div>
    </div>
  );
};
