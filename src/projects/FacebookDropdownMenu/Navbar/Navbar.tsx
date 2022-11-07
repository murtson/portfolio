import React, { FC, ReactNode } from 'react';
import classes from './navbar.module.scss';

const Navbar: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <nav className={classes['root']}>
      <ul className={classes['nav-list']}>{children}</ul>
    </nav>
  );
};

export default Navbar;
