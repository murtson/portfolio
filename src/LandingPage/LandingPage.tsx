import React from 'react';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import classes from './LandingPage.module.scss';

const LandingPage = () => {
  return (
    <div className={classes.root}>
      <Header />
      <Hero />
    </div>
  );
};

export default LandingPage;
