import React from 'react';
import classes from './Header.module.scss';

const Header = () => {
  return (
    <header className={classes.root}>
      <div className={classes.logo}>
        <img src='' alt='Website Logo' />
      </div>
      <ul className={classes.list}>
        <li className={classes.listItem}>
          <a className={classes.link}>Portfolio</a>
        </li>
        <li className={classes.listItem}>
          <a className={classes.link}>About me</a>
        </li>
        <li className={classes.listItem}>
          <a className={classes.link}>Resume</a>
        </li>
        <li className={classes.listItem}>
          <a className={classes.link}>Contact</a>
        </li>
      </ul>
      <button className={classes.button}>Lets Talk</button>
    </header>
  );
};

export default Header;
