import { FC, ReactNode } from 'react';
import styles from './sidebar.module.scss';
import { HouseSolid, PlaneSolid, KeySolid, LocationDotSolid } from '../../../components/iconComponents';

interface NavItemProps {
  label: string;
  icon: ReactNode;
  isActive?: boolean;
}

export const NavItem: FC<NavItemProps> = ({ label, icon, isActive = false }) => {
  return (
    <li className={`${styles.sideNav__item} ${isActive && styles.sideNav__itemActive}`}>
      <a href='#' className={styles.sideNav__link}>
        {icon}
        <span>{label}</span>
      </a>
    </li>
  );
};

const sidebarTabs: NavItemProps[] = [
  { label: 'Hotel', icon: <HouseSolid className={styles.sideNav__icon} /> },
  { label: 'Flight', icon: <PlaneSolid className={styles.sideNav__icon} /> },
  { label: 'Car rental', icon: <KeySolid className={styles.sideNav__icon} /> },
  { label: 'Tours', icon: <LocationDotSolid className={styles.sideNav__icon} /> },
];

export const Sidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <ul className={styles.sideNav}>
        {sidebarTabs.map((tab, index) => (
          <NavItem key={index} label={tab.label} icon={tab.icon} isActive={index === 0 ? true : false} />
        ))}
      </ul>
      <div className={styles.legal}>Legal bla bla</div>
    </nav>
  );
};
