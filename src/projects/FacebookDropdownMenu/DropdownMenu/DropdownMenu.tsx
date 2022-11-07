import { useState, ReactNode, ReactElement, FC, useMemo, useCallback } from 'react';
import styles from './dropdown.module.scss';
import mainStyles from '../main.module.scss';
import { CSSTransition } from 'react-transition-group';
import { GearSolid, ChevronRightSolid, ArrowLeftSolid } from '../../../components/iconComponents';

interface ItemProps {
  children?: ReactNode;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  onClick?: () => void;
}

export const DropdownItem: FC<ItemProps> = ({ children, leftIcon, rightIcon, onClick }) => {
  return (
    <a href='#' className={styles.item} onClick={onClick}>
      <span className={mainStyles['icon-button']}>{leftIcon}</span>
      <p>{children}</p>
      <span className={styles.icon_right}>{rightIcon}</span>
    </a>
  );
};

enum MenuTypes {
  MAIN = 'MAIN',
  SETTINGS = 'SETTINGS',
}

export const DropdownMenu: FC = () => {
  const [activeMenu, setActiveMenu] = useState<MenuTypes>(MenuTypes.MAIN);

  const getMainMenu = () => {
    return (
      <>
        <DropdownItem>My Profile</DropdownItem>
        <DropdownItem
          leftIcon={<GearSolid />}
          rightIcon={<ChevronRightSolid />}
          onClick={() => setActiveMenu(MenuTypes.SETTINGS)}
        >
          Settings
        </DropdownItem>
      </>
    );
  };

  const getSecondaryMenu = () => {
    return (
      <>
        <DropdownItem
          leftIcon={<ArrowLeftSolid />}
          onClick={() => setActiveMenu(MenuTypes.MAIN)}
        ></DropdownItem>

        <DropdownItem rightIcon={<ChevronRightSolid />}>Settings</DropdownItem>

        <DropdownItem rightIcon={<ChevronRightSolid />}>Settings</DropdownItem>

        <DropdownItem rightIcon={<ChevronRightSolid />}>Settings</DropdownItem>
      </>
    );
  };

  const renderMenu = useCallback(() => {
    switch (activeMenu) {
      case MenuTypes.MAIN:
        return getMainMenu();
      case MenuTypes.SETTINGS:
        return getSecondaryMenu();
      default:
        return getMainMenu();
    }
  }, [activeMenu]);

  return (
    <div className={styles.root}>
      <div className={styles.menu}>{renderMenu()}</div>
    </div>
  );
};
