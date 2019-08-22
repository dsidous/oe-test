import React from 'react';

import Logo from '../../../images/logo.svg';
import useStyles from './styles';
import MyMenu from '../../../images/icon-menu.svg';

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <div className={classes.logoWrapper}>
        <Logo />
      </div>
      <div className={classes.menu}>
        <MyMenu />
      </div>
    </div>
  );
};

export default Header;
