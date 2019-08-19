import React from 'react';

import logo from '../../images/logo.png';
import { useStyles } from './styles';

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={classes.menu}>
        menu
      </div>
    </div>
  );
};

export default Header;
