import React, { FC, ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

interface Props {
  children?: ReactNode;
}

const Providers: FC<Props> = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default Providers;
