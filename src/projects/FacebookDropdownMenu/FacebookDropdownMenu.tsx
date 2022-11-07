import classes from './main.module.scss';
import { BellSolid, PlusSolid, FacebookMessenger, CaretDownSolid } from '../../components/iconComponents';
import { DropdownMenu } from './DropdownMenu/DropdownMenu';
import Navbar from './Navbar/Navbar';
import NavItem from './Navbar/NavItem/Navitem';

const FacebookDropdownMenu = () => {
  return (
    <div className={classes.root}>
      <Navbar>
        <NavItem icon={<PlusSolid className={classes.icon} />}></NavItem>
        <NavItem icon={<BellSolid className={classes.icon} />} />
        <NavItem icon={<FacebookMessenger className={classes.icon} />} />
        <NavItem icon={<CaretDownSolid className={classes.rotate} />}>
          <DropdownMenu />
        </NavItem>
      </Navbar>
    </div>
  );
};

export default FacebookDropdownMenu;
