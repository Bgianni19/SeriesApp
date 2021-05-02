import React from 'react';
import { useStyles } from './styles';

const MainLayout = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export default MainLayout;
