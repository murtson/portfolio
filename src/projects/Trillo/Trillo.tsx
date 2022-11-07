import React, { FC } from 'react';
import styles from './sass/main.module.scss';
import Header from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import Gallery from './Gallery/Gallery';
import { Overview } from './Overview/Overview';
import Details from './Details/Details';

const Trillo: FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
          <Sidebar />
          <main className={styles.hotelView}>
            <Gallery />
            <Overview />
            <Details />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Trillo;
