import React from 'react';

import Logo from '../../atoms/Logo';
import useStyles from './styles';

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <div className={classes.logoWrapper}>
        <Logo />
      </div>
      <div className={classes.menu}>
        menu
      </div>
    </div>
  );
};

export default Header;
