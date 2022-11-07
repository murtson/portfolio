import React, { FC, ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import Trillo from './projects/Trillo/Trillo';
import CssGrids from './projects/CssGrids/CssGrids';
import FacebookDropdownMenu from './projects/FacebookDropdownMenu/FacebookDropdownMenu';
import LandingPage from './LandingPage/LandingPage';

const ROUTE_PATHS: Readonly<Record<string, string>> = {
  TRILLO: '/trillo',
  CSS_GRIDS: '/css-grids',
  FACEBOOK_DROPDOWN_MENU: '/facebook-dropdown-menu',
};

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route element={<LandingPage />} path={'/'}></Route>
      <Route element={<Trillo />} path={ROUTE_PATHS.TRILLO} />
      <Route element={<CssGrids />} path={ROUTE_PATHS.CSS_GRIDS} />
      <Route element={<FacebookDropdownMenu />} path={ROUTE_PATHS.FACEBOOK_DROPDOWN_MENU} />
    </Routes>
  );
};

export default AppRoutes;
