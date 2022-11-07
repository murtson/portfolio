import { ReactNode, FC, useState } from 'react';
import classes from './navitem.module.scss';
import mainClasses from '../../main.module.scss';

interface NavItemProps {
  icon: ReactNode;
  children?: ReactNode;
}

const NavItem: FC<NavItemProps> = ({ icon, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <li className={classes['root']}>
      <a href='#' className={mainClasses['icon-button']} onClick={() => setOpen(!open)}>
        {icon}
      </a>
      {open ? children : null}
    </li>
  );
};

export default NavItem;
