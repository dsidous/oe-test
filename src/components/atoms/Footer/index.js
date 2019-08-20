import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles(theme => ({
  footer: {
    backgroundColor: theme.backgroundSecondary,
    color: '#92abd0',
    fontSize: '.7rem',
    lineHeight: 1.6,
    padding: {
      top: theme.spacing.unit * 2,
      bottom: theme.spacing.unit * 2,
      left: theme.spacing.unit * 2,
      right: theme.spacing.unit * 2,
    },
  },
}));

const Footer = () => {
  const classes = useStyle();

  return (
    <footer className={classes.footer}>
      Octopus Energy Ltd is a company registered in England and Wales.
      <br />
      Registered number: 09263424. Registered office: 33 Holborn, London, EC1N
      2HT. Trading office: 20-24 Broadwick Street, London, W1F8HT
    </footer>
  );
};

export default Footer;
