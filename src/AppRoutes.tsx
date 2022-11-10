import React, { FC, ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import Trillo from "./projects/Trillo/Trillo";
import CssGrids from "./projects/CssGrids/CssGrids";
import FacebookDropdownMenu from "./projects/FacebookDropdownMenu/FacebookDropdownMenu";
import LandingPage from "./LandingPage/LandingPage";
import MovingStateDown from "./projects/ReactReRender/Composition/MovingStateDown/MovingStateDown";
import ReactReRender from "./projects/ReactReRender/ReactReRender";
import Composition from "./projects/ReactReRender/Composition/Composition";
import Memo from "./projects/ReactReRender/Memo/Memo";

const ROUTE_PATHS: Readonly<Record<string, string>> = {
  TRILLO: "/trillo",
  CSS_GRIDS: "/css-grids",
  FACEBOOK_DROPDOWN_MENU: "/facebook-dropdown-menu",
  RE_RENDER: "/re-render",
  COMPOSITION: "/re-render/composition",
  MOVING_STATE_DOWN: "/re-render/composition/moving-state-down",
  MEMO: "/re-render/memo",
};

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route element={<LandingPage />} path={"/"}></Route>
      <Route element={<Trillo />} path={ROUTE_PATHS.TRILLO} />
      <Route element={<CssGrids />} path={ROUTE_PATHS.CSS_GRIDS} />
      <Route
        element={<FacebookDropdownMenu />}
        path={ROUTE_PATHS.FACEBOOK_DROPDOWN_MENU}
      />
      <Route element={<ReactReRender />} path={ROUTE_PATHS.RE_RENDER}>
        <Route element={<Composition />} path={ROUTE_PATHS.COMPOSITION}>
          <Route
            element={<MovingStateDown />}
            path={ROUTE_PATHS.MOVING_STATE_DOWN}
          />
        </Route>
        <Route element={<Memo />} path={ROUTE_PATHS.MEMO} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
